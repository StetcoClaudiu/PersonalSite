import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CgProfile } from "react-icons/cg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stetco Claudiu",
  description: "Created by Stetco Claudiu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
