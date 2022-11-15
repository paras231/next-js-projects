import React from "react";
import styles from "./test.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className={styles.mainNav}>
        <ul>
          <Link href="/">
            <li>HOME</li>
          </Link>
          <Link href="/About">
            <li>ABOUT</li>
          </Link>
          <Link href="/contact">
            <li>CONTACT</li>
          </Link>
          <Link href="/blog">
            <li>BLOG</li>
          </Link>
          <Link href="/posts/Posts">
            <li>POSTS</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
