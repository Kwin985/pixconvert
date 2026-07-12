import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useConverterStore } from '@/store/useConverterStore';

export default function Layout() {
  const { isDark, setDark } = useConverterStore();
  const location = useLocation();

  useEffect(() => {
    const saved = localStorage.getItem('pixconvert-theme');
    if (saved) {
      setDark(saved === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDark(prefersDark);
    }
  }, [setDark]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.classList.toggle('light', !isDark);
  }, [isDark]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'bg-surface-0 text-gray-200' : 'bg-light-bg text-light-text'}`}>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}