import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "gamsung photo",
  description: "to 2008...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="w-screen h-screen flex items-center relative"
        id="capture-area"
      >
        {children}
      </body>
    </html>
  );
}
