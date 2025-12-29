import { Geist, EB_Garamond, Poppins } from "next/font/google";

export const geist = Geist({
  subsets: ["latin"],
});

export const ebGaramond = EB_Garamond({
  subsets: ["latin"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
