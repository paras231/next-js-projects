import React from "react";
import Image from "next/image";
import styles from "./test.module.css";

const Test = () => {
  return (
    <>
      <style jsx>
        {`
          .text {
            color: yellow;
          }
        `}
      </style>
      <h1 className="text">Test component</h1>
      <Image
        className={styles.myimg}
        src="/bike.png"
        width={400}
        height={400}
        alt="my image"
      />
    </>
  );
};

export default Test;
