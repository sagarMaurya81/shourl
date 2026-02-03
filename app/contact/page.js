"use client"
import { useState } from "react";
import axios from "axios";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", msg: "" });

    try {
      // Points to your Next.js API route
      const res = await axios.post("/api/contact", formData);
      setStatus({ type: "success", msg: res.data.message });
      setFormData({ name: "", email: "", subject: "", message: "" }); 
    } catch (err) {
      setStatus({ type: "error", msg: err.response?.data?.error || "Failed to send." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto min-h-screen flex items-center">
      <div className="flex flex-col lg:flex-row gap-12 w-full">
        
        {/* Left Section: Info & Email */}
        <div className="lg:w-1/3 space-y-8">
          <div>
            <h2 className="text-4xl font-black text-white mb-4 italic tracking-tight">
              Get in <span className="text-blue-500">touch.</span>
            </h2>
            <p className="text-zinc-500 leading-relaxed">
              Have questions about your short links? Reach out and our team will get back to you shortly.
            </p>
          </div>

          {/* Dedicated Email Card */}
          <div className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-[2rem] space-y-4 hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <span className="text-blue-500 text-lg">✉</span>
              </div>
              <div>
                <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Official Support</p>
                <p className="text-white font-medium">sagar.code81@gmail.com</p>
              </div>
            </div>
            <div className="h-[1px] w-full bg-zinc-800"></div>
            <p className="text-zinc-600 text-[10px] uppercase tracking-wider text-center">
              Available 24/7 for you
            </p>
          </div>
        </div>

        {/* Right Section: The Form */}
        <div className="lg:w-2/3 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 blur-[80px] rounded-full"></div>

          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                type="text" placeholder="Full Name" 
                className="w-full bg-zinc-800/30 border border-zinc-700/50 text-white p-4 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all placeholder:text-zinc-600" 
              />
              <input 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                type="email" placeholder="Email Address" 
                className="w-full bg-zinc-800/30 border border-zinc-700/50 text-white p-4 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all placeholder:text-zinc-600" 
              />
            </div>
            
            <input 
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              type="text" placeholder="Subject (Optional)" 
              className="w-full bg-zinc-800/30 border border-zinc-700/50 text-white p-4 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all placeholder:text-zinc-600" 
            />

            <textarea 
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="4" placeholder="Your Message" 
              className="w-full bg-zinc-800/30 border border-zinc-700/50 text-white p-4 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all placeholder:text-zinc-600"
            ></textarea>
            
            <button 
              disabled={loading}
              className="group w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/20"
            >
              {loading ? (
                <span className="animate-pulse">Sending...</span>
              ) : (
                <>
                  Send Message
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </>
              )}
            </button>

            {status.msg && (
              <div className={`p-4 rounded-xl text-center text-sm mt-4 animate-in fade-in zoom-in duration-300 ${
                status.type === 'success' 
                  ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                  : 'bg-red-500/10 text-red-400 border border-red-500/20'
              }`}>
                {status.msg}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}