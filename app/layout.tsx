// Will be filled manually
import type { Metadata } from 'next'
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

export const metadata: Metadata = {
    title: 'Life Framework v2.0 - From Spiritual Rebirth to Dreams Reality',
    description: 'Complete daily system from age 31 to 35 (2025-2029). Systematic journey from spiritual awakening to achieving dreams: house, car, beautiful wife, 2 children, and financial freedom.',
    keywords: 'life framework, daily routine, spiritual growth, Islamic lifestyle, productivity system, goal achievement, success roadmap',
    authors: [{ name: 'Life Framework Creator' }],
    openGraph: {
        title: 'Life Framework v2.0 - Complete Life Success System',
        description: 'Discover the systematic daily routine that transforms dreams into reality through spiritual practice, skill building, and consistent action.',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Life Framework v2.0 - From Spiritual Rebirth to Dreams Reality',
        description: 'Complete daily system from spiritual awakening to achieving all life dreams by age 35.',
    },
    robots: {
        index: true,
        follow: true,
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
    },
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
            </head>
            <body className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
                <div className="islamic-pattern min-h-screen">
                    {children}
                </div>
            </body>
        </html>
    )
}