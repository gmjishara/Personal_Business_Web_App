import { notFound } from 'next/navigation';
import React from 'react'
import styles from "./style.module.css"

async function getPost(id){
    const res=await fetch(`http://localhost:3000/Pages/api/blog/${id}`,{ cache: 'no-store' })

    if(!res.ok){
       return notFound()
    }

    return res.json();

}

export default async function BlogItem({params}) {
    const posts= await getPost(params.blogId);
    const blog=await posts.blog[0];
  return (
    <div className={styles.blogPostContainer}>
        <h1 className={styles.blogPostTitle}>{blog.title}</h1>
        <p className={styles.blogPostBody}>{blog.body}</p>
    </div>
  )
}
