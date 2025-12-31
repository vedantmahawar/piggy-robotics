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
  title: "Piggy robotics",
  description: "Humanoids for the price of an iPhone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-[#f7f5f4]`}>
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
