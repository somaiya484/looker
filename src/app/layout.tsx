import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logoFooter from '../../public/logoFooter.png';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hexa Looker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const footerData = {
    logoSrc: logoFooter,
    message: "Thank you for visiting our website. We appreciate your support and look forward to helping you achieve your goals. Here's to success and collaboration!",
    services: [
      { name: "Looker", link: "/looker" },
      { name: "Data Visualization", link: "/datavisualization" },
      { name: "Web Analytics", link: "/webanalytics" },
      { name: "SEM", link: "/sem" },
      { name: "SMM", link: "/smm" },
      { name: "Graphic Design", link: "/graphicsdesign" },
      { name: "Development", link: "/webdesigndevelopment" }
    ],
    companyLinks: [
      { name: 'About Us', link: '/#about' },
      { name: 'Services', link: '/#services' },
      { name: 'Why Choose Us', link: '/#why-choose-us' },
      { name: 'Company', link: '/#company' },
      { name: 'Testimonial', link: '/#testimonial' },
      { name: 'FAQ', link: '/#QaN' },
      { name: "Contact", link: "/contact" }
    ],
    contact: {
      email: 'nusratxaahan@gmail.com'
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/tab.png" className="w-full"/>
      </head>
      <body className={inter.className}>
        
        <main className='container mx-auto min-h-screen'>
          <Navbar></Navbar>
          {children}
          <Footer {...footerData} />
        </main>
        
      </body>
    </html>
  );
}