import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";
export async function POST(request){
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("shourl");
    const collection = db.collection("url")

    const doc = await collection.findOne({shorturl:body.shorturl})
    if(doc){
        await collection.updateOne({shorturl:body.shorturl},{$set:{url:body.url}})
        return NextResponse.json({success:false,error:true,message:"url already exists"})
    }
    const result = await collection.insertOne({
        url:body.url,
        shorturl:body.shorturl
    })
    return NextResponse.json({success:true,error:false,message:"finished"})
}