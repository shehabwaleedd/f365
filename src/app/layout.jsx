import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/footer"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "F365 | Wellness Female Community In Dubai",
  descripiton: "F365",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
        <Footer />
      </body>
    </html>
  );
}
