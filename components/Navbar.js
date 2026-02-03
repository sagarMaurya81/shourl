import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl z-50">
      <div className="flex items-center justify-between px-6 py-3 bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 rounded-full shadow-2xl">
        
        <Link href="/about" className="text-xs uppercase tracking-widest font-semibold text-zinc-400 hover:text-white transition-colors">
          About
        </Link>

        <div className="group cursor-pointer">
          <Link href="/">
          <h1 className="text-xl font-black tracking-tighter italic">
            Sho<span className="text-blue-500 group-hover:text-blue-400 transition-colors">UrL</span>
          </h1>
          </Link>
          <div className="h-0.5 w-0 group-hover:w-full bg-blue-500 transition-all duration-300"></div>
        </div>

     
        <Link href="/contact">
        <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-800">
          <span className="relative px-5 py-1.5 transition-all ease-in duration-75 bg-zinc-900 rounded-full group-hover:bg-opacity-0">
            Contact
          </span>
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;