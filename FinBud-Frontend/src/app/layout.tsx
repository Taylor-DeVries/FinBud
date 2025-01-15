import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
// import { ClerkProvider } from "@clerk/nextjs";
import { Sidebar } from "@/components/Sidebar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import ResponsiveImage from "@/components/ResponsiveImage";

const font = Montserrat({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "FinBud",
  description:
    "FinBud is your Virtual Finance Buddy! Simplify personal finance with step-by-step guidance, smart tools, and approachable advice. Say goodbye to confusing jargon and take control of your money today!",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={font.className}>
          <div className="flex h-screen">
            <Sidebar />
            <ResponsiveImage>
              <div className="flex-1">{children}</div>
            </ResponsiveImage>
          </div>
        </body>
      </html>
  );
}
