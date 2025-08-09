import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";


export const metadata: Metadata = {
  title: "Contact Manager",
  description: " Simple contact Management pplication built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">

        {children}
        </main>
        </div>
      </body>
    </html>
  );
}
