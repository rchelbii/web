import { Poppins, Rammetto_One } from "next/font/google";

export const rammetto_one = Rammetto_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rammetto-one",
});

export const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});
