"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

const normalizeUrl = (input) => {
  let trimmed = (input || "").trim();
  if (!trimmed) return null;
  // If user entered e.g. google.com or www.google.com, auto-prepend https://
  if (!/^https?:\/\//i.test(trimmed)) {
    trimmed = "https://" + trimmed;
  }
  try {
    const parsed = new URL(trimmed);
    if (
      (parsed.protocol === "http:" || parsed.protocol === "https:") &&
      parsed.hostname &&
      parsed.hostname.includes(".")
    ) {
      return parsed.href;
    }
    return null;
  } catch {
    return null;
  }
};

export default function HomeForm() {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generate, setgenerate] = useState("");
  const [loading, setLoading] = useState(false);
  const [urlError, setUrlError] = useState("");
  const [aliasError, setAliasError] = useState("");
  const [generalError, setGeneralError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    setUrlError("");
    setAliasError("");
    setGeneralError("");
    setgenerate("");

    let hasError = false;

    // Validate Long URL
    const validUrl = normalizeUrl(url);
    if (!url.trim()) {
      setUrlError("Please paste a link to shorten.");
      hasError = true;
    } else if (!validUrl) {
      setUrlError("Please enter a valid URL (e.g., https://example.com).");
      hasError = true;
    }

    // Validate Custom Alias
    const trimmedAlias = shorturl.trim();
    if (!trimmedAlias) {
      setAliasError("Please enter a custom alias.");
      hasError = true;
    } else if (!/^[a-zA-Z0-9_-]{2,50}$/.test(trimmedAlias)) {
      setAliasError("Alias must be 2–50 characters (letters, numbers, '-' or '_').");
      hasError = true;
    } else if (
      ["api", "about", "contact", "privacy", "terms", "sitemap", "robots"].includes(
        trimmedAlias.toLowerCase()
      )
    ) {
      setAliasError("This alias is reserved. Please pick another one.");
      hasError = true;
    }

    if (hasError) return;

    setLoading(true);
    try {
      await axios.post("/api/generate", { url: validUrl, shorturl: trimmedAlias });
      const host = process.env.NEXT_PUBLIC_HOST || "https://shourl-alpha.vercel.app";
      setgenerate(`${host}/${trimmedAlias}`);
      seturl("");
      setshorturl("");
    } catch (error) {
      const msg =
        error.response?.data?.message || "Failed to generate. This alias may already be taken.";
      setGeneralError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!generate) return;
    navigator.clipboard.writeText(generate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-zinc-900/80 backdrop-blur-2xl border border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl space-y-6">
      <div className="space-y-4">
        {/* Main URL Input */}
        <div className="space-y-1.5">
          <div className="relative group">
            <input
              className={`w-full bg-zinc-800/50 border text-white p-4 rounded-2xl focus:outline-none focus:ring-2 transition-all placeholder:text-zinc-600 ${
                urlError
                  ? "border-red-500/80 focus:ring-red-500/40 focus:border-red-500"
                  : "border-zinc-700 focus:ring-blue-500/50 focus:border-blue-500"
              }`}
              type="text"
              placeholder="Paste your long link (e.g. https://example.com)..."
              onChange={(e) => {
                seturl(e.target.value);
                if (urlError) setUrlError("");
                if (generalError) setGeneralError("");
              }}
              value={url}
              aria-label="Long URL to shorten"
            />
          </div>
          {urlError && (
            <p className="text-red-400 text-xs px-2 flex items-center gap-1.5">
              <span>⚠️</span> {urlError}
            </p>
          )}
        </div>

        {/* Alias Input */}
        <div className="space-y-1.5">
          <div
            className={`flex items-center w-full bg-zinc-800/50 border rounded-2xl focus-within:ring-2 transition-all ${
              aliasError
                ? "border-red-500/80 focus-within:ring-red-500/40 focus-within:border-red-500"
                : "border-zinc-700 focus-within:ring-blue-500/50 focus-within:border-blue-500"
            }`}
          >
            <span className="pl-4 pr-1 text-zinc-500 font-mono text-xs sm:text-sm whitespace-nowrap select-none shrink-0">
              shourl-alpha.vercel.app/
            </span>
            <input
              className="w-full bg-transparent text-white p-4 pl-0.5 rounded-2xl focus:outline-none placeholder:text-zinc-600 font-mono text-sm"
              type="text"
              placeholder="alias"
              onChange={(e) => {
                setshorturl(e.target.value);
                if (aliasError) setAliasError("");
                if (generalError) setGeneralError("");
              }}
              value={shorturl}
              aria-label="Custom short URL alias"
            />
          </div>
          {aliasError && (
            <p className="text-red-400 text-xs px-2 flex items-center gap-1.5">
              <span>⚠️</span> {aliasError}
            </p>
          )}
        </div>

        {/* General Error Banner */}
        {generalError && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs text-center">
            {generalError}
          </div>
        )}

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
          <p className="text-[10px] uppercase tracking-widest text-blue-400 font-bold mb-2 text-center">
            Your short URL is ready!
          </p>
          <div className="flex items-center justify-between gap-2">
            <Link
              target="_blank"
              href={generate}
              className="text-white font-mono text-sm truncate hover:underline"
            >
              {generate}
            </Link>
            <button
              onClick={handleCopy}
              className="bg-blue-500 text-white px-3 py-2 rounded-xl text-xs hover:bg-blue-600 transition-colors whitespace-nowrap font-medium"
            >
              {copied ? "Copied! ✓" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
