
import type { Metadata } from 'next';
import { Inter, Noto_Naskh_Arabic } from 'next/font/google';
import './globals.css';

// تحميل الخط العربي
const naskh = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-naskh',
});

// الخط اللاتيني
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'منبر الحق | المنصة المستقلة',
  description: 'منصة رقمية لنشر الحق والثوابت بعيداً عن صخب الترندات',
  keywords: ['الحق', 'الاستقلال الفكري', 'المنبر الرقمي', 'الثوابت'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="ar" 
      dir="rtl" 
      className={`${naskh.variable} ${inter.variable}`}
    >
      <body className="font-sans bg-white text-gray-900">
        {/* هيكل بسيط جداً */}
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
