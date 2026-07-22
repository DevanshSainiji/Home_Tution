import type { Metadata } from "next";
import { Inter, Playfair_Display, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vijay & Ashok Sir — Home Tuition Jaipur",
  description: "Expert home tuition for Class 11 & 12 by MNIT Jaipur graduate. Mathematics by Vijay Sir, Physics by Ashok Sir. Covering Pratap Nagar, Malviya Nagar, Sanganer, Jaipur.",
  keywords: [
    "home tutor jaipur",
    "maths tutor jaipur",
    "physics tutor jaipur",
    "class 11 12 home tuition jaipur",
    "iit jee tutor jaipur",
    "home tuition pratap nagar",
    "home tuition malviya nagar",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${dmSans.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
