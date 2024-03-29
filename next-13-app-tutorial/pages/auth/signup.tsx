import React, { useState, FormEvent } from "react";
import Head from "next/head";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImg] = useState<File | null>(null);

  const [userName, setUserName] = useState("");
  const [loading, setLoadin] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files != null && e.currentTarget.files.length > 0) {
      const file = e.currentTarget.files[0];
      if (file != null) {
        setImg(file);
      }
    }
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoadin(true);
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      // upload user profile in firebase storage->
      // create a unique image name->
      const date = new Date().getTime();
      const storageRef = ref(storage, `${userName + res.user.uid}`);
      if (img) {
        await uploadBytesResumable(storageRef, img).then(() => {
          getDownloadURL(storageRef).then(async (downloadUrl) => {
            try {
              //Update profile
              await updateProfile(res.user, {
                displayName: userName,
                photoURL: downloadUrl,
              });
              // create user on firestore->
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                userName,
                email,
                password,
                photoURL: downloadUrl,
              });
            } catch (error) {
              setLoadin(false);
              console.log(error);
            }
          });
        });
      }

      console.log(res);
      setLoadin(false);
      router.push("/");
    } catch (error) {
      console.log(error);
      setLoadin(false);
    }
  };

  // Signup user by google auth->
  const provider = new GoogleAuthProvider();
  const handleSignupByGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(res);
      const token = credential?.accessToken;

      const user = res.user;
      console.log(user);
      localStorage.setItem("userprofile", JSON.stringify(res.user));
      router.push("/");
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential);
    }
  };

  const senToLogin = () => {
    router.push("/auth/login");
  };

  return (
    <>
      <Head>
        <title>Auth next js</title>
      </Head>
      <h1>sign up page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="">Username</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="">Profile Pic</label>
        <input type="file" onChange={handleImageChange} />
        <button type="submit">Submit</button>
        {loading && <span>Loading...</span>}
      </form>

      <button onClick={handleSignupByGoogle}>Signup with Google</button>
      <span>
        Already have an account ? <p onClick={senToLogin}>Login Here</p>
      </span>
    </>
  );
};

export default Signup;
