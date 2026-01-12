'use client';

import { useState, useEffect } from 'react';
import { scrollToSection } from './hooks/useScrollReveal';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'features', label: 'Про нас' },
  { id: 'news', label: 'Новини' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'contact', label: 'Контакти' },
];

export default function Header(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string): void => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 glass shadow-lg'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl rotate-6 group-hover:rotate-12 transition-transform" />
            <div className="absolute inset-0 bg-white rounded-xl flex items-center justify-center shadow-md">
              <span className="text-2xl font-display font-bold text-primary-600">Л</span>
            </div>
          </div>
          <div>
            <h1 className="font-display font-bold text-xl text-gray-800">
              Ліцей <span className="text-primary-600">"Знання"</span>
            </h1>
            <p className="text-xs text-gray-500 font-medium tracking-wider">ОСВІТА МАЙБУТНЬОГО</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="relative font-medium text-gray-600 hover:text-primary-600 transition-colors group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <button className="btn-primary text-sm">
            Вступ 2026
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-left font-medium text-gray-600 hover:text-primary-600 py-2 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button className="btn-primary text-sm mt-2">
            Вступ 2026
          </button>
        </nav>
      </div>
    </header>
  );
}
