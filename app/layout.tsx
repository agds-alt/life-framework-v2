// ========================================
// FILE: app/layout.tsx - FIXED METADATA WARNINGS
// ========================================
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
})

// Fix viewport warning - separate from metadata
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
}

// Fix metadataBase warning
export const metadata: Metadata = {
    metadataBase: new URL('https://life-framework-v2.vercel.app'), // Update with your actual domain
    title: 'Life Framework v2.0 - From Spiritual Rebirth to Dreams Reality',
    description: 'Complete daily system from age 31 to 35 (2025-2029). Systematic journey from spiritual awakening to achieving dreams: house, car, beautiful wife, 2 children, and financial freedom.',
    keywords: [
        'life framework',
        'daily routine',
        'spiritual growth',
        'Islamic lifestyle',
        'productivity system',
        'goal achievement',
        'success roadmap',
        'wealth building',
        'family preparation'
    ],
    authors: [{ name: 'Life Framework Creator' }],
    creator: 'Life Framework v2.0',
    publisher: 'Life Framework',

    // Open Graph
    openGraph: {
        type: 'website',
        locale: 'en_US',
        title: 'Life Framework v2.0 - Complete Life Success System',
        description: 'Discover the systematic daily routine that transforms dreams into reality through spiritual practice, skill building, and consistent action.',
        siteName: 'Life Framework v2.0',
        images: [
            {
                url: '/og-image.png', // You can add this later
                width: 1200,
                height: 630,
                alt: 'Life Framework v2.0 - From Spiritual Rebirth to Dreams Reality',
            },
        ],
    },

    // Twitter Card
    twitter: {
        card: 'summary_large_image',
        title: 'Life Framework v2.0 - From Spiritual Rebirth to Dreams Reality',
        description: 'Complete daily system from spiritual awakening to achieving all life dreams by age 35.',
        creator: '@lifeframework', // Update with your Twitter handle
        images: ['/twitter-card.png'], // You can add this later
    },

    // SEO & Indexing
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

    // Additional metadata
    category: 'lifestyle',
    alternates: {
        canonical: 'https://life-framework-v2.vercel.app', // Update with your actual domain
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

                {/* PWA Manifest */}
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#10b981" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Life Framework v2.0" />

                {/* Additional Meta Tags */}
                <meta name="format-detection" content="telephone=no" />
                <meta name="msapplication-TileColor" content="#10b981" />
                <meta name="msapplication-config" content="/browserconfig.xml" />
            </head>
            <body className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
                <div className="islamic-pattern min-h-screen">
                    {children}
                </div>

                {/* Schema.org structured data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'WebSite',
                            name: 'Life Framework v2.0',
                            description: 'Complete daily system from spiritual awakening to achieving all life dreams',
                            url: 'https://life-framework-v2.vercel.app',
                            author: {
                                '@type': 'Person',
                                name: 'Life Framework Creator'
                            },
                            datePublished: '2025-09-24',
                            inLanguage: 'en-US',
                            keywords: 'life framework, daily routine, spiritual growth, Islamic lifestyle, productivity system'
                        })
                    }}
                />
            </body>
        </html>
    )
}