import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Posts = (props) => {
  const data = props?.data;
  // const [data, setData] = useState([]);
  // const fetchData = async () => {
  //   const { data } = await axios.get(
  //     "https://jsonplaceholder.typicode.com/posts"
  //   );
  //   console.log(data);
  //   setData(data);
  // };
  // useEffect(() => {
  //   fetchData();
  // });
  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      {data.map((post) => {
        return (
          <>
            <div className="container mx-auto mt-20 w-1/2">
              <Link href={`/posts/${post.id}`}>
                <h1 className="font-bold text-red-600 ">{post.title}</h1>
              </Link>
              <span>{post.body}</span>
            </div>
          </>
        );
      })}
    </>
  );
};

//  adding server side rendering
export async function getServerSideProps(context) {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Posts;
