import type { Metadata } from "next";
import "./globals.css";
import { ThemeContextProvider } from "./theme-context-provider";
import { rammetto_one } from "./fonts";

export const metadata: Metadata = {
  title: "Riadh Chelbi | Software Engineer",
  description:
    "Riadh Chelbi | Software Engineer | Web Specialist | Restful API",
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
