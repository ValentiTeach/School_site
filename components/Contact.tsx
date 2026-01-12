'use client';

import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  childGrade: string;
  message: string;
}

interface ContactInfo {
  icon: JSX.Element;
  title: string;
  value: string;
  link?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Адреса',
    value: 'м. Львів, вул. Шевченка, 15',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Телефон',
    value: '+380 32 123 45 67',
    link: 'tel:+380321234567',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email',
    value: 'info@licey-znannya.ua',
    link: 'mailto:info@licey-znannya.ua',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Графік роботи',
    value: 'Пн-Пт: 8:00 - 18:00',
  },
];

export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    childGrade: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', childGrade: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold mb-4">
            Зв'яжіться з нами
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-6">
            Маєте{' '}
            <span className="gradient-text">запитання?</span>
          </h2>
          <p className="text-xl text-gray-600">
            Залиште заявку на консультацію, і наші спеціалісти 
            зв'яжуться з вами протягом робочого дня.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 reveal">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-500 flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-gray-600 hover:text-primary-500 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 rounded-3xl overflow-hidden h-64 bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-3">📍</div>
                <p className="text-primary-600 font-medium">Інтерактивна карта</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3 reveal">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-gray-100">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Ваше ім'я *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-300 focus:ring-4 focus:ring-primary-100 outline-none transition-all"
                    placeholder="Введіть ваше ім'я"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-300 focus:ring-4 focus:ring-primary-100 outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-300 focus:ring-4 focus:ring-primary-100 outline-none transition-all"
                    placeholder="+380 XX XXX XX XX"
                  />
                </div>

                {/* Grade */}
                <div>
                  <label htmlFor="childGrade" className="block text-sm font-semibold text-gray-700 mb-2">
                    Клас дитини
                  </label>
                  <select
                    id="childGrade"
                    name="childGrade"
                    value={formData.childGrade}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-300 focus:ring-4 focus:ring-primary-100 outline-none transition-all appearance-none bg-white"
                  >
                    <option value="">Оберіть клас</option>
                    <option value="1">1 клас</option>
                    <option value="2">2 клас</option>
                    <option value="3">3 клас</option>
                    <option value="4">4 клас</option>
                    <option value="5">5 клас</option>
                    <option value="6">6 клас</option>
                    <option value="7">7 клас</option>
                    <option value="8">8 клас</option>
                    <option value="9">9 клас</option>
                    <option value="10">10 клас</option>
                    <option value="11">11 клас</option>
                  </select>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Повідомлення
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-300 focus:ring-4 focus:ring-primary-100 outline-none transition-all resize-none"
                    placeholder="Ваше запитання або коментар..."
                  />
                </div>
              </div>

              {/* Submit button */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Відправляємо...
                    </span>
                  ) : (
                    'Надіслати заявку'
                  )}
                </button>
              </div>

              {/* Success message */}
              {isSubmitted && (
                <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center gap-3 animate-fade-in">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-800">Дякуємо за вашу заявку!</p>
                    <p className="text-sm text-emerald-600">Ми зв'яжемося з вами найближчим часом.</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
