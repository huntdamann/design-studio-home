import { Geist, Geist_Mono, Audiowide } from "next/font/google";
import "./globals.css";
import "@/app/css/flaticon.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ['latin'],
  weight: '400'
});

export const metadata = {
  title: "HUMANN DESIGN | Creativity From The Human Mind",
  description: "Boutique Design Studio and Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${audiowide.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
