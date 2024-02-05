import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/footer"), { ssr: false });

export const metadata = {
  title: "F365 | Wellness Female Community In Dubai",
  descripiton: "F365 – Empowering women through health, personal development, and career growth. Join our thriving community for transformative workshops, networking events, and mentorship programs. Elevate your well-being and career with F365",



};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
        <Footer />
      </body>
    </html>
  );
}
