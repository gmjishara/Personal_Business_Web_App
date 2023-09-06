import Image from "next/image";
import React from "react";
import web from "../../../public/web.jpg";
import styles from "./style.module.css";
import Link from "next/link";

async function getData(){
    const res=await fetch("https://jsonplaceholder.typicode.com/posts")

    if(!res.ok){
      throw new Error("data not found");
    }
    return res.json();
}

export default async function page() {
  const data=await getData();

  return (
    <div className={styles.blogContainer}>
      {data.map((item)=>(
        
        <div className={styles.blogBody}>
        <Image src={web} width={350} height={300} />
        <div className={styles.text}>
          <Link href={`blog/${item.id}`} key={item.id}><h2>{item.title} </h2></Link>
          <p>{item.body}</p>
        </div>
      </div>
      ))}
      
    </div>
  );
}
