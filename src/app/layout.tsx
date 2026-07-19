import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "cogniteck | Casa de soluciones de software",
  description: "cogniteck es una casa de soluciones de software en construcción. Cronos, nuestra primera solución, está en desarrollo.",
  alternates: {
    canonical: "https://cogniteck.com",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "cogniteck | Casa de soluciones de software",
    description: "cogniteck es una casa de soluciones de software en construcción. Cronos, nuestra primera solución, está en desarrollo.",
    url: "https://cogniteck.com",
    siteName: "cogniteck",
    images: [
      {
        url: "https://cogniteck.com/logo.jpg",
        width: 800,
        height: 800,
        alt: "cogniteck",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "cogniteck | Casa de soluciones de software",
    description: "cogniteck es una casa de soluciones de software en construcción. Cronos, nuestra primera solución, está en desarrollo.",
    images: ["https://cogniteck.com/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "cogniteck",
    "image": "https://cogniteck.com/logo.jpg",
    "@id": "https://cogniteck.com/#organization",
    "url": "https://cogniteck.com",
    "email": "hola@cogniteck.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lima",
      "addressCountry": "PE"
    },
    "founder": [
      { "@type": "Person", "name": "Lennard" },
      { "@type": "Person", "name": "Alen" },
      { "@type": "Person", "name": "Carlos" }
    ]
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          id="google-fonts"
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
          media="print"
          suppressHydrationWarning
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var link = document.getElementById('google-fonts');
                if (link) {
                  link.addEventListener('load', function() {
                    link.media = 'all';
                  });
                }
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          suppressHydrationWarning
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
