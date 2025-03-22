
import React, { useEffect } from 'react';
import NavBar from './NavBar';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className={cn(
        "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10",
        "transition-all duration-300 ease-in-out"
      )}>
        {children}
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Prajwal H R. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
