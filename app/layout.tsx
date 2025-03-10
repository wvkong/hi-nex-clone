import "./globals.css";
import type { Metadata } from "next";

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
