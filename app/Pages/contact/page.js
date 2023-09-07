import { NextResponse } from "next/server";
import React from "react";
import mongoose from "mongoose";
import { notFound } from "next/navigation";
import styles from "./styles.module.css";

const getPost = async () => {
  const res = await fetch("http://localhost:3000/Pages/api/post", {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }

  return res.json();
};

export default async function page() {
  const data = await getPost();
  return (
    <div className={styles.contactContainer}>
      {data.post.map((item) => (
        <div className={styles.itemContainer}>
          <p>Name: {item.name} </p>
          <p>Age: {item.age}</p>
          <p>Gender: {item.gender}</p>
        </div>
      ))}
    </div>
  );
}
