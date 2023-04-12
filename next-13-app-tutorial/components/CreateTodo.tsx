import React, { useContext, FormEvent, useState, useEffect } from "react";
import { db } from "../Firebase";
import {
  orderBy,
  onSnapshot,
  collection,
  addDoc,
  Timestamp,
  query,
} from "firebase/firestore";
import { AuthContext } from "../AuthContext/Authcontext";
const CreateTodo = () => {
  const { currentUser } = useContext(AuthContext);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  //  create new todos and store them into the firestore->
  console.log(currentUser);

  const handleCreateTask = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // create new task in firebase->
      await addDoc(collection(db, "todos"), {
        task,
        date,
        completed: false,
        created: Timestamp.now(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleCreateTask}>
        <input
          type="text"
          required
          placeholder="Task name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>

      <AllTodos />
    </>
  );
};

export default CreateTodo;

const AllTodos = () => {
  const { currentUser } = useContext(AuthContext);
  const [data, setData] = useState({});

  //  fetch data real time using onSnapshot funciton->

  useEffect(() => {
    const q = query(collection(db, "todos"), orderBy("task"));
    onSnapshot(q, (querySnapshot) => {
      setData(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  console.log(data);

  return (
    <>
      <div>
        {Array.isArray(data) &&
          data.map((task, index) => {
            return (
              <div style={{ display: "flex", gap: "20px" }} key={index}>
                <span>{task.data.task}</span>
                <b>Create At : {task.data.date}</b>
              </div>
            );
          })}
      </div>
    </>
  );
};
