const AboutSection = () => {
  return (
    <section className="py-20 px-6 min-h-[76vh] mt-5">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-black text-white italic">Big links, <span className="text-blue-500 underline decoration-zinc-700">Small footprint.</span></h2>
          <p className="text-zinc-400 max-w-xl mx-auto">ShoUrL was built for creators, marketers, and developers who need clean, trackable, and fast redirection without the clutter.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Fast", desc: "Redirects in milliseconds using edge computing." },
            { title: "Secure", desc: "Encrypted links that protect user privacy." },
            { title: "Free", desc: "No hidden costs, just simple shortening." }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:border-blue-500/50 transition-all">
              <h3 className="text-blue-500 font-bold mb-2">{item.title}</h3>
              <p className="text-zinc-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutSection;