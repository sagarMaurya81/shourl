import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export const metadata = {
  metadataBase: new URL('https://shourl.in'),
  title: {
    default: 'ShoURL | Fast, Free URL Shortener',
    template: '%s | ShoURL', // Automatically adds suffix to subpages
  },
  description: 'ShoURL is the easiest way to shorten, track, and manage your links. Create branded short URLs in seconds or Free.',
  keywords: ['URL shortener', 'link shortener', 'ShoURL', 'branded links', 'bitly alternative', 'tiny URL', 'tiny url alternative', 'shourl - url shortener', 'bitly - url shoretner', 'free url shortner', 'Free', 'Free Your name url shortener'],
  icons: {
    icon: '/logo.png',
    apple: '/apple-png.png',
  },
  openGraph: {
    title: 'ShoURL | Fast, Free URL Shortener',
    description: 'Transform long URLs into powerful short links with ShoURL.',
    url: 'https://shourl.in',
    siteName: 'ShoUrl - Url Shortener',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo.png', // Put this in your /public folder
        width: 1200,
        height: 630,
      }],
      twitter :  {
        card: 'summary_large_image',
        title: 'ShoURL | Fast, Free URL Shortener',
        description: 'Shorten links and track clicks with ShoURL.',
        images: ['/logo.png'],
      },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen bg-[#09090b] bg-[radial-gradient(#27272a_0.5px,transparent_0.5px)] " >
         <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
