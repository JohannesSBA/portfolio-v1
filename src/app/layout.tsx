import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { IconContext } from "react-icons/lib/esm/iconContext";
import MobileNavBar from "./components/MobileNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Johannes Bekele",
  description: "Hi my name is Johannes Bekele and this is my portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/johannes.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className="md:h-screen md:overflow-scroll bg-teal-blue-950 bg-opacity-30">
          <div className="hidden md:flex">
            <Navbar />
          </div>
          <div className="flex md:hidden">
            <MobileNavBar />
          </div>

          {children}
        </div>
      </body>
    </html>
  );
}
