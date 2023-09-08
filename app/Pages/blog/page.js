import Image from "next/image";
import React from "react";
import web from "../../../public/web.jpg";
import styles from "./style.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getData(){
    const res=await fetch("http://localhost:3000/Pages/api/blog",{ cache: 'no-store' })

    if(!res.ok){
      return notFound();
    }
    
    return res.json();
}

export default async function page() {
  const data=await getData();

  return (
    <div className={styles.blogContainer}>
      {data.blog.map((item)=>(
        
        <div className={styles.blogBody}>
        <Image src={web} width={350} height={300} />
        <div className={styles.text}>
          <Link href={`blog/${item._id}`} key={item._id}><h2>{item.title} </h2></Link>
        </div>
      </div>
      ))}
      
    </div>
  );
}
