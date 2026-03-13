import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../context/ThemeProvider';
import Sidebar from '../components/Sidebar';
import MobileHeader from '../components/MobileHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Modern admin dashboard with analytics',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex transition-colors duration-300">
            <MobileHeader />
            <Sidebar />
            <main className="flex-1 transition-all duration-300 md:ml-64">
              <div className="p-4 md:p-8 pt-16 md:pt-8">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

