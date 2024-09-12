import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";

import "./globals.css";
import "../components/navbar.module.css";
import "../app/quiz/quiz.module.css";

import NavbarComponent from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finance Buddy",
  description: "your financial compainion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComponent />
        <Container fluid className="main-container">{children}</Container>
      </body>
    </html>
  );
}
