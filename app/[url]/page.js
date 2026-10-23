import React from 'react';
import clientPromise from '../lib/mongodb';
import { redirect, notFound } from 'next/navigation';

// Tell Google not to index redirect pages
export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

const RedirectPage = async (props) => {
  const { url: shorturl } = await props.params;

  const client = await clientPromise;
  const db = client.db('shourl');
  const collection = db.collection('url');
  const doc = await collection.findOne({ shorturl });

  if (doc) {
    redirect(doc.url);
  }

  // Graceful 404 if slug not found
  notFound();
};

export default RedirectPage;