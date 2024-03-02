"use client";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import NextProgress from "nextjs-progressbar";

const DM = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={DM.className}>
        <NextProgress />
        < Header />
        {children}
      </body>
    </html>
  );
}
