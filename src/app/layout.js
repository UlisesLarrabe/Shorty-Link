import "./globals.css";
import { ibmMono } from "@/fonts/fonts";

export const metadata = {
  title: "Shorty-Links",
  description: "A website to short links",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ibmMono.className} antialiased`}>{children}</body>
    </html>
  );
}
