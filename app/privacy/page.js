export const metadata = {
  title: 'Privacy Policy | ShoURL',
  description: 'Read the ShoURL privacy policy to understand how we handle your data when you use our free URL shortener.',
  alternates: { canonical: 'https://shourl-alpha.vercel.app/privacy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="py-24 px-6 min-h-[80vh]">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-3">
          <h1 className="text-4xl font-black text-white italic">
            Privacy <span className="text-blue-500">Policy</span>
          </h1>
          <p className="text-zinc-400">Last updated: October 2026</p>
        </div>

        <div className="space-y-6 text-zinc-400 leading-relaxed">
          <div className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl space-y-3">
            <h2 className="text-white font-bold text-lg">Information We Collect</h2>
            <p>ShoURL collects only the URLs you submit for shortening and the custom alias you choose. We do not require account registration and do not collect personal information.</p>
          </div>

          <div className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl space-y-3">
            <h2 className="text-white font-bold text-lg">How We Use Your Data</h2>
            <p>Submitted URLs are stored solely to provide the redirect functionality. We may collect anonymous click analytics (e.g., click counts) to improve the service.</p>
          </div>

          <div className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl space-y-3">
            <h2 className="text-white font-bold text-lg">Third-Party Services</h2>
            <p>ShoURL does not sell or share your data with third parties. Our infrastructure uses MongoDB for data storage with industry-standard security practices.</p>
          </div>

          <div className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl space-y-3">
            <h2 className="text-white font-bold text-lg">Contact</h2>
            <p>For privacy-related questions, contact us at <a href="mailto:sagar.code81@gmail.com" className="text-blue-400 hover:underline">sagar.code81@gmail.com</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
