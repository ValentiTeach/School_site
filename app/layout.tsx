import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Ліцей "Знання" | Освіта Майбутнього',
  description: 'Сучасний освітній заклад з інноваційними методами навчання. Приєднуйтесь до нашої спільноти знань!',
  keywords: 'школа, ліцей, освіта, навчання, Україна',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="uk">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
