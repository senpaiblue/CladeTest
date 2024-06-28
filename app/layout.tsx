import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./Providers/ThemeProviders";
import localFont from 'next/font/local'

const GeneralSans = localFont({
  src:'./Static-font/GeneralSans-Medium.ttf',
  display:'swap',
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobSite",
  description: "Clade Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
      <body className={GeneralSans.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
