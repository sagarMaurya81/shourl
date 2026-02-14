"use client"
import ShoUrlSchema from "@/components/ShoUrlSchema";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function Home() {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generate, setgenerate] = useState("");

  const handleClick = async () => {
    if (!url || !shorturl) return alert("Please fill in both fields");
    
    try {
      const res = await axios.post("api/generate", { "url": url, "shorturl": shorturl });
      setgenerate(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
      seturl("");
      setshorturl("");
    } catch (error) {
      console.error("Error generating URL", error);
    }
  };

  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 relative m-2">
      {/* Background Decorative Glows */}
     <ShoUrlSchema />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 blur-[120px] rounded-full"></div>
      
      <div className="w-full max-w-md z-10">
        <div className="bg-zinc-900/80 backdrop-blur-2xl border border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl space-y-6">
          
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black text-white tracking-tight">
              Shorten <span className="text-blue-500">URLs</span>
            </h2>
            <p className="text-zinc-500 text-sm">Create clean, memorable links in seconds.</p>
          </div>

          <div className="space-y-4">
            {/* Main URL Input */}
            <div className="relative group">
              <input 
                className="w-full bg-zinc-800/50 border border-zinc-700 text-white p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-zinc-600" 
                type="text" 
                placeholder="Paste your long link..." 
                onChange={(e) => seturl(e.target.value)} 
                value={url} 
              />
            </div>

            {/* Alias Input */}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 font-mono text-sm">shourl.com/</span>
              <input 
                className="w-full bg-zinc-800/50 border border-zinc-700 text-white p-4 pl-28 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-zinc-600" 
                type="text" 
                placeholder="alias" 
                onChange={(e) => setshorturl(e.target.value)} 
                value={shorturl}
              />
            </div>

            <button 
              type="button" 
              className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/10"
              onClick={handleClick}
            >
              Generate Link
            </button>
          </div>

          {/* Success Result Area */}
          {generate && (
            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl animate-in fade-in slide-in-from-bottom-2 duration-500">
              <p className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-2 text-center">Your URL is ready!</p>
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
                  className="bg-blue-500 text-white p-2 rounded-xl text-xs hover:bg-blue-600 transition-colors"
                >
                  Copy
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
