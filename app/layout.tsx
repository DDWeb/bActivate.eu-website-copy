import type { Metadata } from "next";
import { Fira_Sans_Condensed, Poppins } from "next/font/google"; // Import Fira Sans Condensed and Poppins
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const firaSansCondensed = Fira_Sans_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-fira-sans-condensed",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Velkommen | bActivate",
  description: "Facilitate mare pregnancy. Problem getting your mare in foal? bActivate is the best solution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${firaSansCondensed.variable} ${poppins.variable}`}>
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
