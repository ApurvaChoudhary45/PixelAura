import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionWrrapper from "./components/SessionWrrapper";
import { ReduxProvider } from "@/Redux/Provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PixelAura",
  description: "Wallpaper App that brings your screen to life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
        <SessionWrrapper>
        {children}
        </SessionWrrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
