'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import News from '@/components/News';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/components/hooks/useScrollReveal';

export default function HomePage(): JSX.Element {
  useScrollReveal();
  
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary-200/30 blob" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent-gold/20 blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-accent-emerald/20 blob animation-delay-4000" />
      </div>
      
      <Header />
      <Hero />
      <Features />
      <News />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
