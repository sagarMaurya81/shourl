import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export const metadata = {
  title: "Shourl-Shorten Your Url",
  description: "You can short Your url using - Shourl",
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
