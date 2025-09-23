// Will be filled manually
import { Dream, YearPhase } from '@/types'

export const dreams: Dream[] = [
    {
        id: 'house',
        title: 'Own House',
        description: 'Beautiful, comfortable family home with Islamic values',
        targetDate: 'April 2029',
        progress: 25,
        milestones: [
            'Emergency fund completed (6 months)',
            'Down payment 50% saved',
            'Credit score optimized',
            'House location researched',
            'Purchase completed'
        ],
        icon: 'home',
        color: 'from-blue-500 to-blue-600'
    },
    {
        id: 'vehicles',
        title: 'Own Vehicles',
        description: 'Family car for trips, motorcycle for daily mobility',
        targetDate: 'December 2028',
        progress: 40,
        milestones: [
            'Motorcycle purchased (cash)',
            'Car research completed',
            'Car fund accumulated',
            'Family car purchased',
            'Both vehicles maintained'
        ],
        icon: 'car',
        color: 'from-purple-500 to-purple-600'
    },
    {
        id: 'wife',
        title: 'Beautiful and Sholehah Wife',
        description: 'Righteous life partner who supports spiritual journey',
        targetDate: 'June 2027',
        progress: 35,
        milestones: [
            'Character development focused',
            'Financial stability achieved',
            'Serious search initiated',
            'Marriage completed',
            'Harmonious life established'
        ],
        icon: 'heart',
        color: 'from-pink-500 to-rose-500'
    },
    {
        id: 'children',
        title: '2 Sholeh/Sholehah Children',
        description: 'Raising next generation of believers with Islamic values',
        targetDate: 'April 2029',
        progress: 20,
        milestones: [
            'Marriage established',
            'Home environment prepared',
            'First child born',
            'Parenting skills developed',
            'Second child planned'
        ],
        icon: 'users',
        color: 'from-green-500 to-emerald-500'
    },
    {
        id: 'financial-freedom',
        title: 'Financial Freedom',
        description: 'Multiple income streams, investment portfolio, passive income',
        targetDate: 'December 2029',
        progress: 45,
        milestones: [
            'Emergency fund established',
            'Trading profitability achieved',
            'Business income streams created',
            'Investment portfolio built',
            'Passive income covers expenses'
        ],
        icon: 'trending-up',
        color: 'from-yellow-500 to-amber-500'
    }
]

export const yearPhases: YearPhase[] = [
    {
        year: "2025-2026",
        title: "Foundation Year",
        description: "Building spiritual, physical, and skill foundations",
        goals: [
            "Consistent spiritual practice established",
            "Coding skills refreshed and advanced",
            "Trading profitability achieved",
            "Physical fitness routine mastered",
            "Social confidence improved"
        ],
        financialTargets: [
            "Emergency fund: 6 months expenses",
            "Trading profit: 20-30% monthly consistency",
            "Side project income: $500-1000/month",
            "Total savings increase: 50%"
        ],
        personalTargets: [
            "Daily tahajjud established",
            "5 prayers never missed",
            "Quran reading daily",
            "Exercise 6 days/week",
            "Coding 1+ hour daily"
        ]
    },
    {
        year: "2026-2027",
        title: "Acceleration Year",
        description: "Scaling skills, income, and preparing for marriage",
        goals: [
            "Advanced programming projects completed",
            "Consistent trading profits scaled up",
            "Multiple income streams created",
            "Professional network expanded",
            "Marriage preparation focused"
        ],
        financialTargets: [
            "Trading capital: 5x increase",
            "Business income: $2000-3000/month",
            "Investment portfolio: Started",
            "Wedding fund: 50% saved"
        ],
        personalTargets: [
            "Character development focused",
            "Financial stability achieved",
            "Serious search for life partner",
            "Islamic knowledge deepened"
        ]
    },
    {
        year: "2027-2028",
        title: "Manifestation Year",
        description: "Major life events and significant achievements",
        goals: [
            "Marriage to beautiful, sholehah wife",
            "House down payment saved",
            "First vehicle purchased",
            "Business scaled significantly"
        ],
        financialTargets: [
            "House down payment: Ready (20-30%)",
            "Car purchase: Cash or minimal loan",
            "Monthly income: $5000-8000",
            "Investment returns: Contributing"
        ],
        personalTargets: [
            "Marriage established successfully",
            "Home environment created",
            "Leadership skills developed",
            "Family planning initiated"
        ]
    },
    {
        year: "2028-2029",
        title: "Completion Year",
        description: "Achieving ultimate vision and complete success",
        goals: [
            "Own house purchased and furnished",
            "Family car plus personal motorcycle owned",
            "First child born or on the way",
            "Financial freedom achieved",
            "Deep spiritual maturity reached"
        ],
        financialTargets: [
            "Passive income covers all expenses",
            "Multiple business streams",
            "Investment portfolio generating returns",
            "Emergency fund: 1 year expenses",
            "Ready for second child expenses"
        ],
        personalTargets: [
            "Complete dream life achieved",
            "Family harmony established",
            "Spiritual leadership demonstrated",
            "Legacy foundation built"
        ]
    }
]