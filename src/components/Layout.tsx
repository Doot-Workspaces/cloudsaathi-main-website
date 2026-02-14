import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieConsent from './CookieConsent';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Navbar />
      {children}
      <Footer />
      <CookieConsent />
    </div>
  );
}

