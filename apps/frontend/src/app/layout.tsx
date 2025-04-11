import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import { Montserrat } from 'next/font/google';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import ClientLayoutWrapper from './clientLayoutWrapper';
import { Metadata } from 'next';

const font = Montserrat({ subsets: ['latin'], weight: ['700'] });

export const metadata: Metadata = {
  title: 'FinBud',
  description:
    'FinBud is your Virtual Finance Buddy! Simplify personal finance with step-by-step guidance, smart tools, and approachable advice. Say goodbye to confusing jargon and take control of your money today!',
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
    <UserProvider>
      <html lang="en">
        <body className={font.className}>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </body>
      </html>
    </UserProvider>
  );
}
