import "./globals.css";
import type { Metadata } from "next";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   weight: ["100", "200", "300", "400", "500", "600", "700"],
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "HI-NEX - IT Solutions and Services Company",
  description: "HI-NEX - IT Solutions and Services Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
