import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "@/components/PrelineScript";
import NavBar from "@/components/comp-navbar";
import Footer from "@/components/comp-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NewsApiApp",
  description: "Your simple news browsing app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
      <PrelineScript />
    </html>
  );
}
