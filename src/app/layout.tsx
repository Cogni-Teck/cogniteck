import type { Metadata } from "next";
import { Inter, Outfit, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "CogniTeck | Consultoría de Software y Desarrollo Web",
  description: "Boutique de desarrollo de software y páginas web a medida. Automatización de procesos y sistemas a medida para optimizar tu negocio.",
  alternates: {
    canonical: "https://cogniteck.com",
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "CogniTeck",
    "image": "https://cogniteck.com/logo.jpg",
    "@id": "https://cogniteck.com/#organization",
    "url": "https://cogniteck.com",
    "telephone": "+519891216130",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lima",
      "addressCountry": "PE"
    },
    "sameAs": [
      "https://wa.me/519891216130"
    ]
  };

  return (
    <html
      lang="es"
      className={`${inter.variable} ${outfit.variable} ${shareTechMono.variable} h-full antialiased overflow-x-hidden`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body-md text-body-md overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
