import type { Metadata } from "next";
import "./globals.css";

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
      className="h-full antialiased overflow-x-hidden"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
          media="print"
          // @ts-ignore
          onload="this.media='all'"
        />
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
