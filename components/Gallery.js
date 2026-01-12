// Gallery.js - JavaScript component for photo gallery
'use client';

import { useState } from 'react';

const galleryImages = [
  { id: 1, title: 'Сучасні класи', category: 'Приміщення', emoji: '🏫' },
  { id: 2, title: 'STEM лабораторія', category: 'Обладнання', emoji: '🔬' },
  { id: 3, title: 'Спортивний зал', category: 'Спорт', emoji: '🏀' },
  { id: 4, title: 'Бібліотека', category: 'Приміщення', emoji: '📚' },
  { id: 5, title: 'Комп\'ютерний клас', category: 'Обладнання', emoji: '💻' },
  { id: 6, title: 'Актовий зал', category: 'Приміщення', emoji: '🎭' },
  { id: 7, title: 'Шкільний двір', category: 'Територія', emoji: '🌳' },
  { id: 8, title: 'Їдальня', category: 'Приміщення', emoji: '🍽️' },
];

const colors = [
  'from-blue-400 to-blue-600',
  'from-emerald-400 to-emerald-600',
  'from-amber-400 to-amber-600',
  'from-rose-400 to-rose-600',
  'from-purple-400 to-purple-600',
  'from-cyan-400 to-cyan-600',
  'from-orange-400 to-orange-600',
  'from-indigo-400 to-indigo-600',
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-emerald/10 text-accent-emerald text-sm font-semibold mb-4">
            Наш простір
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-6">
            Галерея{' '}
            <span className="gradient-text">ліцею</span>
          </h2>
          <p className="text-xl text-gray-600">
            Подивіться на наші сучасні приміщення та обладнання, 
            де щодня відбувається магія навчання.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`reveal relative group cursor-pointer ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedImage(image)}
            >
              <div className={`
                relative overflow-hidden rounded-2xl
                ${index === 0 || index === 5 ? 'aspect-square' : 'aspect-square'}
                bg-gradient-to-br ${colors[index % colors.length]}
                transition-all duration-500
                ${hoveredId === image.id ? 'scale-[1.02] shadow-2xl' : 'shadow-lg'}
              `}>
                {/* Emoji placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`
                    text-white/90 transition-all duration-300
                    ${index === 0 || index === 5 ? 'text-8xl' : 'text-5xl'}
                    ${hoveredId === image.id ? 'scale-125' : ''}
                  `}>
                    {image.emoji}
                  </span>
                </div>

                {/* Overlay */}
                <div className={`
                  absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent
                  flex flex-col justify-end p-4 lg:p-6
                  transition-opacity duration-300
                  ${hoveredId === image.id ? 'opacity-100' : 'opacity-0'}
                `}>
                  <span className="text-white/70 text-xs font-medium uppercase tracking-wider mb-1">
                    {image.category}
                  </span>
                  <h3 className="text-white font-display font-bold text-lg">
                    {image.title}
                  </h3>
                </div>

                {/* Expand icon */}
                <div className={`
                  absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm
                  flex items-center justify-center
                  transition-all duration-300
                  ${hoveredId === image.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
                `}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-4xl w-full animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image container */}
              <div className={`
                aspect-video rounded-3xl overflow-hidden
                bg-gradient-to-br ${colors[galleryImages.findIndex(i => i.id === selectedImage.id) % colors.length]}
                flex items-center justify-center
              `}>
                <span className="text-9xl">{selectedImage.emoji}</span>
              </div>

              {/* Info */}
              <div className="mt-6 text-center">
                <span className="text-white/60 text-sm font-medium uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h3 className="text-white font-display font-bold text-2xl mt-2">
                  {selectedImage.title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
