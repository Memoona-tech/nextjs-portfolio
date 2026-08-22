import type { Metadata } from "next";
// @ts-expect-error CSS imports are handled by the bundler
import "./globals.css";
import Header from "../components/Header";
import localFont from "next/font/local";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Footer from "@/components/Footer";

const jetbrains = localFont({
  src: "../app/fonts/Jetbrains.woff2",
  variable: "--font-jetbrains",
  weight: "100 800",
});
export const metadata: Metadata = {
  title: "Memoona | CS Major",
  description: "Portfolio of Memoona Saleem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrains.variable} antialiased text-white`}>

        <div className="flex min-h-screen flex-col">
        <Header />
        <StairTransition />
        <main className="flex-1"><PageTransition>{children}</PageTransition></main>

        <Footer />
        </div>
        
      </body>
    </html>
  );
}
