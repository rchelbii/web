import type { Metadata } from "next";
import { Rammetto_One, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "./theme-context-provider";

const rammetto_one = Rammetto_One({
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

export const metadata: Metadata = {
  title: "Riadh Chelbi | Software Engineer",
  description:
    "Riadh Chelbi | Software Engineer | Web Specialist | Restfull API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${rammetto_one.variable} font-rammetto no-scrollbar`}>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
