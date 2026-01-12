'use client';

import { useEffect, useState } from 'react';
import { scrollToSection } from './hooks/useScrollReveal';

interface Stat {
  number: string;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { number: '1200', label: 'Учнів', suffix: '+' },
  { number: '85', label: 'Викладачів' },
  { number: '98', label: 'Випускників у ВНЗ', suffix: '%' },
  { number: '25', label: 'Років досвіду' },
];

export default function Hero(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 165, 233, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
            </span>
            <span className="text-sm font-medium text-primary-700">
              Набір на 2026 рік відкрито!
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
            <span className="block text-gray-800">Освіта, що</span>
            <span className="gradient-text">надихає</span>
            <span className="block text-gray-800">майбутнє</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
            Ми створюємо простір, де кожен учень розкриває свій потенціал. 
            Сучасні методи, досвідчені педагоги та інноваційне середовище 
            для вашої дитини.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Записатися на консультацію
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="px-8 py-4 rounded-full font-semibold text-gray-700 border-2 border-gray-200 hover:border-primary-300 hover:text-primary-600 transition-all"
            >
              Дізнатися більше
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-100">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`opacity-0 ${isVisible ? 'animate-slide-up' : ''}`}
                style={{ animationDelay: `${(index + 1) * 150}ms`, animationFillMode: 'forwards' }}
              >
                <div className="text-3xl font-display font-bold text-primary-600">
                  {stat.number}
                  {stat.suffix && <span className="text-accent-gold">{stat.suffix}</span>}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className={`relative lg:h-[600px] ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          {/* Main image container */}
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
              {/* Placeholder illustration */}
              <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                {/* Building */}
                <rect x="80" y="100" width="240" height="150" rx="8" fill="#0ea5e9" opacity="0.2" />
                <rect x="100" y="120" width="200" height="130" rx="4" fill="white" />
                
                {/* Windows */}
                <rect x="120" y="140" width="40" height="35" rx="2" fill="#0ea5e9" opacity="0.3" />
                <rect x="180" y="140" width="40" height="35" rx="2" fill="#0ea5e9" opacity="0.3" />
                <rect x="240" y="140" width="40" height="35" rx="2" fill="#0ea5e9" opacity="0.3" />
                <rect x="120" y="190" width="40" height="35" rx="2" fill="#0ea5e9" opacity="0.3" />
                <rect x="180" y="190" width="40" height="35" rx="2" fill="#f59e0b" opacity="0.4" />
                <rect x="240" y="190" width="40" height="35" rx="2" fill="#0ea5e9" opacity="0.3" />
                
                {/* Door */}
                <rect x="185" y="210" width="30" height="40" rx="2" fill="#0369a1" />
                
                {/* Roof */}
                <polygon points="200,60 60,100 340,100" fill="#0ea5e9" opacity="0.4" />
                
                {/* Flag */}
                <rect x="195" y="40" width="4" height="30" fill="#0369a1" />
                <rect x="199" y="40" width="30" height="18" rx="2" fill="#f59e0b" />
                
                {/* Trees */}
                <circle cx="50" cy="220" r="25" fill="#10b981" opacity="0.4" />
                <rect x="47" y="220" width="6" height="30" fill="#0369a1" opacity="0.3" />
                <circle cx="350" cy="210" r="30" fill="#10b981" opacity="0.4" />
                <rect x="347" y="210" width="6" height="40" fill="#0369a1" opacity="0.3" />
                
                {/* Students */}
                <circle cx="130" cy="270" r="8" fill="#0ea5e9" />
                <rect x="125" y="278" width="10" height="15" rx="2" fill="#0ea5e9" opacity="0.7" />
                <circle cx="160" cy="275" r="8" fill="#f59e0b" />
                <rect x="155" y="283" width="10" height="10" rx="2" fill="#f59e0b" opacity="0.7" />
                <circle cx="250" cy="268" r="8" fill="#10b981" />
                <rect x="245" y="276" width="10" height="17" rx="2" fill="#10b981" opacity="0.7" />
              </svg>
            </div>
          </div>

          {/* Floating cards */}
          <div className="absolute -left-8 top-1/4 glass rounded-2xl p-4 shadow-lg animate-float z-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-emerald/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-800">Ліцензія МОН</div>
                <div className="text-xs text-gray-500">Державна акредитація</div>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 bottom-1/4 glass rounded-2xl p-4 shadow-lg animate-float z-20" style={{ animationDelay: '2s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-gold/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-800">ТОП-10</div>
                <div className="text-xs text-gray-500">Ліцеїв України</div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -z-10 top-10 right-10 w-32 h-32 bg-accent-gold/10 rounded-full blur-2xl" />
          <div className="absolute -z-10 bottom-10 left-10 w-40 h-40 bg-primary-300/20 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-gray-400 font-medium">Прокрутіть вниз</span>
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
