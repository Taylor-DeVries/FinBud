import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import "../components/navbar.module.css";
import "../app/quiz/quiz.module.css";

import { Sidebar } from "@/components/Sidebar";

const font = Montserrat({ subsets: ["latin"], weight: ["700"]});

export const metadata: Metadata = {
  title: "Finance Buddy",
  description: "your financial companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="flex h-screen">  
          <Sidebar />
          <div className="flex-1">       
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
