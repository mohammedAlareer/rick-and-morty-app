import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import QueryProvider from "./providers/QueryProvider";
import { Inter } from 'next/font/google'



const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: "Rick & Morty App",
  description: "A Next.js character explorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black/90 ${inter.className}`}>
      <QueryProvider>
      <Navbar/>
      <main className="">
        {children}
        </main>
        </QueryProvider>
        </body>
    </html>
  );
}
