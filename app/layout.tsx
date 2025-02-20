import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import localFont from "next/font/local";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrains = localFont({
  src: "../app/fonts/Jetbrains.woff2",
  variable: "--font-jetbrains",
  weight: "100 800",
});
export const metadata: Metadata = {
  title: "Shaelcore",
  description: "Portfolio for ShaelCore| Built by Tempah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrains.variable} antialiased text-white`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
