import React from 'react'
import clientPromise from '../lib/mongodb';
import { redirect } from 'next/navigation';
const page = async (props) => {
  
    const user = await props.params;
    const shorturl = user.url;
    const client = await clientPromise;
    const db = client.db("shourl");
    const collection = db.collection("url");
    const doc = await collection.findOne({"shorturl":shorturl})
    if(doc){
        redirect(doc.url)
    }
   
  return (
    <div>
      <h1>{user.url}</h1>
    </div>
  )
}

export default page