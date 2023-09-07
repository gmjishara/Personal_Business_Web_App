import { NextResponse } from 'next/server'
import React from 'react'
import mongoose from 'mongoose'

const getPost=async()=>{
  const res=await fetch("http://localhost:3000/Pages/api/post",{ cache: 'no-store' })
  if(!res.ok){
    throw new Error("data not found")
  }

  return res;
}

export default async function page() {
  const data=await getPost();
 
  return (
    <div>
      <p>Name: {data.name} </p>
      <p>Age: {data.age}</p>
      <p>Gender: {data.gender}</p>
    </div>
  )
}
