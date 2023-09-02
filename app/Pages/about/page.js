import Link from "next/link";
import React from "react";
import styles from "./style.module.css";

export default function page() {
 
 
  return (
    <div>
      <h1 className={styles.aboutTitle}>This is the about page</h1>
      <Link href="/">Go to home page</Link>
    </div>
  );
}
