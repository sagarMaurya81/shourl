"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function HomeForm() {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generate, setgenerate] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (!url || !shorturl) return alert("Please fill in both fields");
    setLoading(true);
    try {
      await axios.post("api/generate", { url, shorturl });
      const host = process.env.NEXT_PUBLIC_HOST || "https://shourl-alpha.vercel.app";
      setgenerate(`${host}/${shorturl}`);
      seturl("");
      setshorturl("");
    } catch (error) {
      console.error("Error generating URL", error);
      alert("Failed to generate. This alias may already be taken.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zinc-900/80 backdrop-blur-2xl border border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl space-y-6">
      <div className="space-y-4">
        {/* Main URL Input */}
        <div className="relative group">
          <input
            className="w-full bg-zinc-800/50 border border-zinc-700 text-white p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-zinc-600"
            type="text"
            placeholder="Paste your long link..."
            onChange={(e) => seturl(e.target.value)}
            value={url}
            aria-label="Long URL to shorten"
          />
        </div>

        {/* Alias Input */}
        <div className="flex items-center w-full bg-zinc-800/50 border border-zinc-700 rounded-2xl focus-within:ring-2 focus-within:ring-blue-500/50 focus-within:border-blue-500 transition-all">
          <span className="pl-4 pr-1 text-zinc-500 font-mono text-xs sm:text-sm whitespace-nowrap select-none shrink-0">
            shourl-alpha.vercel.app/
          </span>
          <input
            className="w-full bg-transparent text-white p-4 pl-0.5 rounded-2xl focus:outline-none placeholder:text-zinc-600 font-mono text-sm"
            type="text"
            placeholder="alias"
            onChange={(e) => setshorturl(e.target.value)}
            value={shorturl}
            aria-label="Custom short URL alias"
          />
        </div>

        <button
          type="button"
          disabled={loading}
          className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/10 disabled:opacity-60"
          onClick={handleClick}
        >
          {loading ? "Generating..." : "Generate Short Link"}
        </button>
      </div>

      {/* Success Result Area */}
      {generate && (
        <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
          <p className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-2 text-center">Your short URL is ready!</p>
          <div className="flex items-center justify-between gap-2">
            <Link
              target="_blank"
              href={generate}
              className="text-white font-mono text-sm truncate hover:underline"
            >
              {generate}
            </Link>
            <button
              onClick={() => navigator.clipboard.writeText(generate)}
              className="bg-blue-500 text-white p-2 rounded-xl text-xs hover:bg-blue-600 transition-colors whitespace-nowrap"
            >
              Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
