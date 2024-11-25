import { FooterUser } from "@/components/reusable/footer-user";
import HeaderUser from "@/components/reusable/header-user";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "300"],
});

export const metadata: Metadata = {
  title: "Examps - Sesuai Mood-mu",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppins.className} `}>
        <HeaderUser />
        {children}
        <FooterUser />
      </body>
    </html>
  );
}
