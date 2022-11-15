import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const PostId = (props) => {
  const data = props?.data;
  // console.log(props);
  // const [data, setData] = useState({});
  // const router = useRouter();
  // const { postId } = router.query;
  // const fetchSinglePost = async () => {
  //   const { data } = await axios.get(
  //     `https://jsonplaceholder.typicode.com/posts/${postId}`
  //   );
  //   console.log(data);
  //   setData(data);
  // };

  // useEffect(() => {
  //   if (!router.isReady) {
  //     return <h1>Loading...</h1>;
  //   }
  //   fetchSinglePost();
  // }, [router.isReady]);

  return (
    <>
      <h1>SIngle post here {data.id}</h1>
      <div>
        <span>{data?.title}</span>
        <p>{data.id}</p>
      </div>
    </>
  );
};

//  adding server side rendering

export async function getServerSideProps(context) {
  const { postId } = context.query;

  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default PostId;
