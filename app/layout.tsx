import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Maksym Syromolot",
    template: "%s | Maksym Syromolot",
  },
  description:
    "Software Development Student at Seneca Polytechnic. Programming as structure. Writing as responsibility.",
  metadataBase: new URL("https://your-domain.vercel.app"), // update later
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
        ${geistSans.variable} 
        ${geistMono.variable}
        bg-white 
        text-neutral-900
        dark:bg-neutral-950
        dark:text-neutral-100
        font-sans 
        antialiased 
        min-h-screen
      `}
      >
        <div className="max-w-5xl mx-auto px-6 py-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
