import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import { Montserrat } from 'next/font/google';
import { Metadata } from 'next';
import { Sidebar } from '@/_components/Sidebar-Component/Sidebar';
import { ThemeProvider } from './settings/providers';

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
      <ThemeProvider>
        <html lang="en">
          <body className={font.className}>
            <div className="flex h-screen  bg-slate-50 dark:bg-[#333] ">
              <Sidebar />
              <div className="flex-1 overflow-y-hidden">{children}</div>
            </div>
          </body>
        </html>
      </ThemeProvider>
  );
}
