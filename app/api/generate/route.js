import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

const RESERVED_SLUGS = new Set([
  "api",
  "about",
  "contact",
  "privacy",
  "terms",
  "robots.txt",
  "sitemap.xml",
  "favicon.ico",
  "site.webmanifest",
  "og-image.png",
]);

function isValidUrl(string) {
  try {
    let target = string.trim();
    if (!/^https?:\/\//i.test(target)) {
      target = "https://" + target;
    }
    const parsed = new URL(target);
    return (
      (parsed.protocol === "http:" || parsed.protocol === "https:") &&
      Boolean(parsed.hostname && parsed.hostname.includes("."))
    );
  } catch {
    return false;
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    let { url, shorturl } = body || {};

    if (!url || typeof url !== "string" || !shorturl || typeof shorturl !== "string") {
      return NextResponse.json(
        { success: false, error: true, message: "Both URL and custom alias are required." },
        { status: 400 }
      );
    }

    url = url.trim();
    shorturl = shorturl.trim();

    if (!/^https?:\/\//i.test(url)) {
      url = "https://" + url;
    }

    if (!isValidUrl(url)) {
      return NextResponse.json(
        { success: false, error: true, message: "Please provide a valid URL." },
        { status: 400 }
      );
    }

    if (!/^[a-zA-Z0-9_-]{2,50}$/.test(shorturl)) {
      return NextResponse.json(
        {
          success: false,
          error: true,
          message: "Alias must be 2–50 characters and contain only letters, numbers, hyphens, or underscores.",
        },
        { status: 400 }
      );
    }

    if (RESERVED_SLUGS.has(shorturl.toLowerCase())) {
      return NextResponse.json(
        { success: false, error: true, message: "This alias is reserved. Please choose another one." },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("shourl");
    const collection = db.collection("url");

    const existingDoc = await collection.findOne({ shorturl });
    if (existingDoc) {
      return NextResponse.json(
        { success: false, error: true, message: "This alias is already taken. Please choose another one." },
        { status: 409 }
      );
    }

    await collection.insertOne({
      url,
      shorturl,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      error: false,
      message: "Short link created successfully!",
    });
  } catch (error) {
    console.error("Error generating URL:", error);
    return NextResponse.json(
      { success: false, error: true, message: "Failed to generate short link. Please try again." },
      { status: 500 }
    );
  }
}