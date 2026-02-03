import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full pb-6 pt-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Subtle Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-6"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-8 py-6 bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-3xl shadow-2xl">
          
          {/* Brand & Copyright */}
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
            <p className="text-zinc-400 text-xs sm:text-sm font-medium tracking-wide">
              © 2026 <span className="text-white font-bold tracking-tight">ShoUrL</span>
            </p>
          </div>

          {/* Minimalist Navigation */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-500 hover:text-blue-400 text-xs transition-colors duration-300">Privacy</a>
            <a href="#" className="text-zinc-500 hover:text-blue-400 text-xs transition-colors duration-300">Terms</a>
            <div className="h-4 w-[1px] bg-zinc-800"></div>
            <p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em]">All Rights Reserved</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;