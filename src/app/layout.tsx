import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackgroundCanvasClient from '@/components/ui/BackgroundCanvasClient';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import CookieConsent from '@/components/ui/CookieConsent';
import UnifiedLegalModal from '@/components/ui/UnifiedLegalModal';
import { GA_MEASUREMENT_ID } from '@/lib/analytics';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  // Título otimizado
  title: {
    default: 'Dr. Cláudio Henrique de Castro | Advocacia & Consultoria',
    template: '%s | Dr. Cláudio H. de Castro'
  },

  // Descrição mais completa
  description: 'Pós-Doutor em Ciências Histórico Jurídicas pela Universidade de Lisboa. Professor Universitário, Advogado desde 1996 e Auditor do TCEPR. Expertise em Direito Administrativo, Civil, Penal e Tributário.',

  // Keywords mais abrangentes
  keywords: [
    'Advogado Parana',
    'Direito Civil',
    'Direito Empresarial',
    'Consultoria Jurídica',
    'Advocacia Patrimonial',
    'Direito de Família',
    'Sucessões',
    'Contratos',
    'Consultoria Jurídica PR',
    'Escritório de Advocacia'
  ],

  // Autores e informações básicas
  authors: [{ name: 'Dr. Cláudio Henrique de Castro' }],
  creator: 'Dr. Cláudio Henrique de Castro',
  publisher: 'Dr. Cláudio Henrique de Castro - Advocacia',

  // Configuração de robôs para SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph - para compartilhamento em redes sociais
  openGraph: {
    title: 'Dr. Cláudio Henrique de Castro | Advocacia & Consultoria Jurídica',
    description: 'Pós-Doutor em Ciências Histórico Jurídicas, Professor Universitário e Auditor do TCEPR. Advocacia especializada em Direito Administrativo, Civil, Penal e Tributário.',
    url: 'https://web-adv-mu.vercel.app/',
    siteName: 'Dr. Cláudio H. de Castro - Advocacia',
    images: [
      {
        url: '/og_image.jpg', // Corrigido: nome real do arquivo
        width: 1200,
        height: 630,
        alt: 'Dr. Cláudio Henrique de Castro - Advocacia & Consultoria',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },

  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Cláudio Henrique de Castro | Advocacia & Consultoria',
    description: 'Pós-Doutor em Ciências Histórico Jurídicas. Advocacia especializada em Direito Administrativo, Civil, Penal e Tributário.',
    images: ['/twitter-image.jpg'], // Correto
    creator: '@seutwitter', // Altere para seu handle real
  },

  // Ícones do site
  icons: {
    icon: '/favicon-16x16.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  // Manifest para PWA (opcional)
  // manifest: '/site.webmanifest',

  // Verificação de propriedade (adicione seus códigos reais)
  verification: {
    google: 'seu-google-verification-code',
    // bing: 'seu-bing-verification-code',
  },

  // Outras meta tags úteis
  category: 'law',
  metadataBase: new URL('https://web-adv-mu.vercel.app/'), // URL base do site
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied'
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <BackgroundCanvasClient />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        {/* WhatsApp Floating Button */}
        <WhatsAppButton phoneNumber="5511999999999" />
        {/* Cookie Consent Banner (LGPD) */}
        <CookieConsent />
        {/* Unified Legal & Security Modal (First Visit / Security Alert) */}
        <UnifiedLegalModal />
      </body>
    </html>
  );
}
