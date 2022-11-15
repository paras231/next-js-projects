import React, { useState, useEffect } from "react";
import axios from "axios";
const Fetch = () => {
  const fetchData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(data);
  };
  useEffect(()=>{
    fetchData()
  })
  return (
    <>
      <h1>Fetch data in next js</h1>
    </>
  );
};

export default Fetch;
