import type { Metadata } from "next";
import "./globals.css";
import { Source_Serif_4, Inter } from "next/font/google";

export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["400", "500", "600", "700"], // Adjust based on what weights you need
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Markus' Portfolio",
  description: "Created from Next.js, hosted in Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sourceSerif.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter), sans-serif" }} // Set Inter as default
      >
        {children}
      </body>
    </html>
  );
}
