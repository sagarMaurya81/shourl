import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("SEmail")
    const collection = db.collection("messages")
    const body = await req.json();
    const { name, email, subject, message } = body;
    // Simple validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    // This is where you connect your MongoDB or Email service (Resend/Nodemailer)
    await collection.insertOne({"name":name,"email":email,"subject":subject,"message":message})

    return NextResponse.json({ message: "We've received your message!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}