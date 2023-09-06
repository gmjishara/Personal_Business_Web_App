import { notFound } from 'next/navigation';
import React from 'react'

async function getPost(id){
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{ cache: 'no-store' })

    if(!res.ok){
       return notFound()
    }

    return res.json();

}

export default async function BlogItem({params}) {
    const posts= await getPost(params.blogId);
  return (
    <div>
        <h1>{posts.title}</h1>
        <p>{posts.body}</p>
    </div>
  )
}
