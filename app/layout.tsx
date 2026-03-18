import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});

export const metadata: Metadata = {
  title: "Top Entertainment Agency in Bangalore | Moksha360",
  description: "Moksha360 is a leading entertainment and artist management company in Bangalore helping musicians grow globally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Moksha360",
    "url": "https://moksha360.com",
    "logo": "https://moksha360.com/logo.png"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${openSans.variable} font-opensans antialiased bg-white text-black`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
