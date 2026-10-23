import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShoUrlSchema from "../components/ShoUrlSchema";

export const metadata = {
  metadataBase: new URL('https://shourl-alpha.vercel.app'),

  title: {
    default: 'ShoURL — Free URL Shortener | Shorten, Track & Share Links',
    template: '%s | ShoURL',
  },

  description:
    'ShoURL is a free, fast URL shortener. Create branded short links in seconds, track click analytics, and share cleaner URLs. The best Bitly alternative — no account required.',

  keywords: [
    'URL shortener',
    'ShoURL',
    'shourl',
    'free URL shortener',
    'link shortener',
    'short link generator',
    'branded short links',
    'custom URL shortener',
    'Bitly alternative',
    'TinyURL alternative',
    'shorten long URL',
    'URL redirect',
    'link tracker',
    'click tracking',
    'short URL India',
  ],

  authors: [{ name: 'Sagar Maurya', url: 'https://shourl-alpha.vercel.app' }],
  creator: 'ShoURL',
  publisher: 'ShoURL',

  alternates: {
    canonical: 'https://shourl-alpha.vercel.app',
  },

  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/apple-png.png',
  },

  manifest: '/site.webmanifest',

  openGraph: {
    title: 'ShoURL — Free URL Shortener | Shorten, Track & Share Links',
    description:
      'Create short, branded links with ShoURL. Free, fast, and no account needed. The best alternative to Bitly and TinyURL.',
    url: 'https://shourl-alpha.vercel.app',
    siteName: 'ShoURL',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ShoURL — Free URL Shortener',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ShoURL — Free URL Shortener',
    description: 'Shorten links, track clicks, and share cleaner URLs with ShoURL. Free forever.',
    site: '@shourl',
    creator: '@shourl',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  category: 'technology',

  verification: {
    google: 'be3e791fda240a4c',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className="min-h-screen bg-[#09090b] bg-[radial-gradient(#27272a_0.5px,transparent_0.5px)]" >
        <ShoUrlSchema />
         <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
