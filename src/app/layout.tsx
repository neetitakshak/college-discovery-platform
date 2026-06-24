import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";




export const metadata: Metadata = {
  title: "College Discovery Platform",
description: "Search, compare and explore colleges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body>
  

  <Navbar />
  {children}
</body>
    </html>
  );
}
