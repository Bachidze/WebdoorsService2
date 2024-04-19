import type { Metadata } from "next";
import { Inter,Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const Quciksan = Quicksand({subsets:["latin"], weight:["300","400","500","600","700"]})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${Quciksan.className}`}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
