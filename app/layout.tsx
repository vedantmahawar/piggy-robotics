// custom components
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";

// Next
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// CSS
import "./globals.css";

// fonts
import { poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Specific",
  description: "Build a backend in minutes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
