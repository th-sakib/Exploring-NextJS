import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: { template: "%s | Comapany name", default: "Company name" },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <h1 className="text-2xl text-green-500">Main layout</h1>
        {children}
      </body>
    </html>
  );
}
