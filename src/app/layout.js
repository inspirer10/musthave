import './globals.scss';

export const metadata = {
    title: 'M U S T H A V E',
    description: 'Premium fashion store - Created by Hubert Łepski',
    keywords: [
        'fashion',
        'premium',
        'e-commerce',
        'MUSTHAVE',
        'shop',
        'online',
    ],
    applicationName: 'Musthave Fashion Shop',
    authors: [{ name: 'Hubert Łepski', url: 'https://github.com/inspirer10' }],
    creator: 'Hubert Łepski',
    openGraph: {
        title: 'Musthave — Premium Fashion Store',
        description:
            'A ready-to-use, SEO optimized template for fashion e-commerce built with Next.js & React.js.',
        url: 'https://musthave.vercel.app/',
        siteName: 'Musthave',
        images: [
            {
                url: 'https://musthave.vercel.app/og-image.jpg',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Musthave — Premium Fashion Store Template',
        description:
            'SEO-friendly, modern fashion e-commerce template built with Next.js.',
        images: ['https://musthave.vercel.app/og-image.jpg'],
    },
    category: 'fashion',
    robots: {
        index: true,
        follow: true,
        nocache: false,
    },
    generator: 'Next.js',
    alternates: {
        canonical: 'https://musthave.vercel.app/',
    },
    //viewport: 'width=device-width, initial-scale=1',
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' suppressHydrationWarning={true}>
            <head>
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta
                    name='apple-mobile-web-app-status-bar-style'
                    content='black-translucent'
                />
                <meta name='theme-color' content='rgba(0, 0, 0, 0.85)' />
            </head>
            <body>{children}</body>
        </html>
    );
}
