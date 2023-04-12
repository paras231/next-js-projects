import React, { useContext } from "react";
import Head from "next/head";
import CreatePost from "../../components/CreatePost";
import CreateTodo from "../../components/CreateTodo";
import { AuthContext } from "../../AuthContext/Authcontext";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase";
const Home_page = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <h3>Home Page</h3>
      <DashBoard userName="Paras Sharma" totalUsers={20} />
      <CreateTodo />
      <button onClick={() => signOut(auth)}>Logout</button>
    </>
  );
};

export default Home_page;

type dashBoardProps = {
  userName: string;
  profilepic?: string;
  totalUsers: number;
};

const DashBoard = ({ userName, profilepic, totalUsers }: dashBoardProps) => {
  return (
    <>
      <div>
        <h2>{userName}</h2>
        <span>{totalUsers}</span>
      </div>
    </>
  );
};
