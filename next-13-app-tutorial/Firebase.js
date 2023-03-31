// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDseaYh21vI47cRKoy5gs0eQJ6AmH2f4JM",
  authDomain: "todo-app-9bfd9.firebaseapp.com",
  projectId: "todo-app-9bfd9",
  storageBucket: "todo-app-9bfd9.appspot.com",
  messagingSenderId: "56209828717",
  appId: "1:56209828717:web:6880d5f8d663e2534b4864",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();

export const db = getFirestore();
