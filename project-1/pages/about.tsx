import React, { useState } from "react";

// type aboutProps = {
//   name: string;
// };



interface aboutProps {
  name: string;
  email?: string;
  phone: number;
}

const handleClick = (id: string, name?: string) => {
  console.log(id);
};

const handleSubmit = (e: any) => {
  e.preventDefault();
};

interface IUser {
  users: [{ name: string; age: number; language: string }];
}
const About = (props: aboutProps) => {
  const [users, setUsers] = useState<IUser>({
    users: [{ name: "Paras sharma", age: 21, language: "JS" }],
  });

  const [name, setName] = useState("");

  return (
    <>
      <h1>About PAGE</h1>

      <span>HELLOW</span>
      <button
        className="bg-blue-600 hover:bg-red-400"
        onClick={() => handleClick("123")}
      >
        Click me
      </button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-red-400"
      />
      <h1 className="text-underline text-purple-500 ">{name}</h1>
    </>
  );
};

export default About;
