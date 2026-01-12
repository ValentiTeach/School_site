'use client';

import { useState } from 'react';

interface NewsItem {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    category: 'Досягнення',
    date: '10 січня 2026',
    title: 'Наші учні перемогли на Всеукраїнській олімпіаді з математики',
    excerpt: 'Команда з 5 учнів здобула 3 золоті та 2 срібні медалі на національному етапі олімпіади.',
    image: '🏆',
    featured: true,
  },
  {
    id: 2,
    category: 'Події',
    date: '8 січня 2026',
    title: 'День відкритих дверей - запрошуємо майбутніх учнів!',
    excerpt: 'Приходьте познайомитися з нашою школою, викладачами та програмами навчання.',
    image: '🎓',
  },
  {
    id: 3,
    category: 'Проєкти',
    date: '5 січня 2026',
    title: 'Запуск нової STEM-лабораторії з робототехніки',
    excerpt: 'Сучасне обладнання та програми для юних винахідників вже чекають на учнів.',
    image: '🤖',
  },
  {
    id: 4,
    category: 'Спорт',
    date: '3 січня 2026',
    title: 'Збірна школи з волейболу вийшла у фінал чемпіонату області',
    excerpt: 'Після напруженої гри наша команда здобула путівку до фіналу.',
    image: '🏐',
  },
];

const categories: string[] = ['Всі', 'Досягнення', 'Події', 'Проєкти', 'Спорт'];

export default function News(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<string>('Всі');

  const filteredNews = activeCategory === 'Всі' 
    ? newsData 
    : newsData.filter(item => item.category === activeCategory);

  return (
    <section id="news" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 reveal">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-gold/10 text-accent-gold text-sm font-semibold mb-4">
              Останні новини
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-800">
              Що нового в{' '}
              <span className="gradient-text">ліцеї?</span>
            </h2>
          </div>
          
          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* News grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured news */}
          {filteredNews.filter(n => n.featured).map((news) => (
            <div
              key={news.id}
              className="reveal lg:row-span-2 group cursor-pointer"
            >
              <div className="h-full rounded-3xl bg-gradient-to-br from-primary-500 to-primary-700 p-8 lg:p-12 text-white card-hover relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full bg-white/20 text-sm font-medium">
                      {news.category}
                    </span>
                    <span className="text-white/70 text-sm">{news.date}</span>
                  </div>
                  
                  <div className="text-7xl mb-6">{news.image}</div>
                  
                  <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4 group-hover:underline decoration-2 underline-offset-4">
                    {news.title}
                  </h3>
                  
                  <p className="text-white/80 text-lg leading-relaxed flex-grow">
                    {news.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 mt-6 text-white/90 font-semibold group-hover:gap-4 transition-all">
                    <span>Читати далі</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Regular news */}
          {filteredNews.filter(n => !n.featured).map((news, index) => (
            <div
              key={news.id}
              className="reveal group cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-full rounded-2xl bg-white border border-gray-100 p-6 card-hover flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                  {news.image}
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-primary-500 uppercase tracking-wider">
                      {news.category}
                    </span>
                    <span className="text-xs text-gray-400">{news.date}</span>
                  </div>
                  
                  <h3 className="font-display font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                    {news.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {news.excerpt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12 reveal">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-200 text-gray-600 font-semibold hover:border-primary-300 hover:text-primary-600 transition-all">
            <span>Всі новини</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
