import React, { useState, FormEvent } from "react";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/post", {
        title,
        img,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          required
          placeholder="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          required
          placeholder="img..."
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default CreatePost;
