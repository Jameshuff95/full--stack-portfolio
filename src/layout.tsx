'use client';

import "@/styles/globals.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import { useState, useEffect } from "react";

const themes = ['theme-light', 'theme-dark'];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [theme, setTheme] = useState<string>(themes[1]);

  useEffect(() => {
    document.documentElement.className = `${theme} text-primary`;
  }, [theme]);

  const switchTheme = () => {
    setTheme(theme === 'theme-light' ? 'theme-dark' : 'theme-light');
  };

  return (
    <html lang="en" className={`${theme} min-h-screen`}>
      <body>
        <main className="flex flex-col pb-2 lg:pb-0">
          <div className='flex h-25'>
            <Navbar theme={theme} switchTheme={switchTheme} />
          </div>
          <div className="flex flex-col min-h-screen">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
