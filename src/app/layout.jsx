"use client";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Timeline from "./timeline/timeline";
import NextProgress from "nextjs-progressbar";

const DM = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col gap-4 ${DM.className} justify-start items-center h-screen p-2`}
      >
        <NextProgress />
        {children}
      </body>
    </html>
  );
}
