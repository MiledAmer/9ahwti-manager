import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { type Metadata, type Viewport } from "next";

export const metadata: Metadata = {
  title: "9ahwti",
  description: "9ahwti the best management app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const viewport: Viewport = {
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
