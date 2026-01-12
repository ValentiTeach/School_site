// Features.js - JavaScript component showcasing school features
'use client';

import { getStaggerDelay } from './hooks/useScrollReveal';

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Сучасні програми',
    description: 'Навчальні програми, що відповідають найновішим світовим стандартам освіти',
    color: 'primary',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'IT-інфраструктура',
    description: 'Комп\'ютерні класи, інтерактивні дошки та швидкий Wi-Fi у всій школі',
    color: 'emerald',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Мовні програми',
    description: 'Поглиблене вивчення англійської, німецької та французької мов',
    color: 'gold',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'STEM освіта',
    description: 'Робототехніка, програмування та природничі науки з 1 класу',
    color: 'coral',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Психологічна підтримка',
    description: 'Команда психологів та тьюторів для підтримки кожного учня',
    color: 'primary',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ),
    title: 'Позакласні активності',
    description: 'Більше 30 гуртків: спорт, мистецтво, музика та творчість',
    color: 'emerald',
  },
];

const colorClasses = {
  primary: {
    bg: 'bg-primary-50',
    icon: 'text-primary-500',
    border: 'border-primary-100',
    hover: 'group-hover:bg-primary-500',
  },
  emerald: {
    bg: 'bg-emerald-50',
    icon: 'text-emerald-500',
    border: 'border-emerald-100',
    hover: 'group-hover:bg-emerald-500',
  },
  gold: {
    bg: 'bg-amber-50',
    icon: 'text-amber-500',
    border: 'border-amber-100',
    hover: 'group-hover:bg-amber-500',
  },
  coral: {
    bg: 'bg-orange-50',
    icon: 'text-orange-500',
    border: 'border-orange-100',
    hover: 'group-hover:bg-orange-500',
  },
};

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold mb-4">
            Чому обирають нас
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-6">
            Переваги навчання в нашому{' '}
            <span className="gradient-text">ліцеї</span>
          </h2>
          <p className="text-xl text-gray-600">
            Ми поєднуємо традиційні цінності освіти з інноваційними підходами, 
            створюючи найкраще середовище для розвитку вашої дитини.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color];
            return (
              <div
                key={feature.title}
                className="reveal group"
                style={{ transitionDelay: getStaggerDelay(index) }}
              >
                <div className={`h-full p-8 rounded-3xl bg-white border ${colors.border} card-hover`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${colors.bg} ${colors.icon} flex items-center justify-center mb-6 transition-all duration-300 ${colors.hover} group-hover:text-white group-hover:scale-110`}>
                    {feature.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-display font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Learn more link */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-primary-500 transition-colors">
                    <span>Дізнатися більше</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
