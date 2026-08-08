import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Birbey Restaurant | Lezzetin Adı",
  description:
    "Osmaniye'de paça, kebap, lahmacun, pide ve ev yemekleri.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
