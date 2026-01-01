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

// data
import { baseURL } from "@/app/data";

export const metadata: Metadata = {
  title: "Piggy Robotics",
  description: "Humanoids for the price of iPhones",
  metadataBase: new URL(baseURL),
  openGraph: {
    type: "website",
    siteName: "Piggy Robotics",
    title: "Piggy Robotics",
    description: "Humanoids for the price of iPhones",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Piggy Robotics",
      },
    ],
  },
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
