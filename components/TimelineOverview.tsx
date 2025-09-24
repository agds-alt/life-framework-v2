'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle, Target, Star, Home, Car, Heart } from 'lucide-react'

const TimelineOverview = () => {
    const timeline = [
        {
            year: "2025-2026",
            phase: "FOUNDATION",
            icon: CheckCircle,
            color: "from-green-500 to-emerald-600",
            achievements: [
                "✅ Consistent spiritual practice established",
                "✅ Coding skills refreshed and advanced",
                "✅ Trading profitability achieved",
                "✅ Physical fitness routine mastered"
            ],
            targets: [
                "💰 Emergency fund: 6 months expenses",
                "💰 Trading profit: 20-30% monthly consistency",
                "💰 Side project income: $500-1000/month"
            ]
        },
        {
            year: "2026-2027",
            phase: "ACCELERATION",
            icon: Target,
            color: "from-blue-500 to-cyan-600",
            achievements: [
                "✅ Advanced programming projects completed",
                "✅ Consistent trading profits scaled up",
                "✅ Multiple income streams created",
                "✅ Serious search for life partner"
            ],
            targets: [
                "💰 Trading capital: 5x increase",
                "💰 Business income: $2000-3000/month",
                "💰 Wedding fund: 50% saved"
            ]
        },
        {
            year: "2027-2028",
            phase: "MANIFESTATION",
            icon: Heart,
            color: "from-purple-500 to-violet-600",
            achievements: [
                "✅ Marriage to beautiful, sholehah wife",
                "✅ House down payment saved",
                "✅ First vehicle purchased",
                "✅ Business scaled significantly"
            ],
            targets: [
                "💰 House down payment: Ready (20-30%)",
                "💰 Car purchase: Cash or minimal loan",
                "💰 Monthly income: $5000-8000"
            ]
        },
        {
            year: "2028-2029",
            phase: "COMPLETION",
            icon: Star,
            color: "from-amber-500 to-orange-600",
            achievements: [
                "🏡 Own house purchased and furnished",
                "🚗 Family car + personal motorcycle owned",
                "👶 First child born or on the way",
                "💰 Financial freedom achieved"
            ],
            targets: [
                "💰 Passive income covers all expenses",
                "💰 Multiple business streams",
                "💰 Emergency fund: 1 year expenses"
            ]
        }
    ]

    return (
        <section id="timeline" className="py-20 bg-gradient-to-b from-white to-primary-50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        4-Year Transformation Journey
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        From spiritual rebirth to complete success - systematic progression through each phase
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 via-blue-500 via-purple-500 to-amber-500 rounded-full"></div>

                    {timeline.map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                        >
                            {/* Content Card */}
                            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                                <div className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
                                    <div className="flex items-center mb-4">
                                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center mr-4`}>
                                            <phase.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                {phase.phase}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {phase.year}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                                Personal Development:
                                            </h4>
                                            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                                {phase.achievements.map((achievement, i) => (
                                                    <li key={i}>{achievement}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                                Financial Targets:
                                            </h4>
                                            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                                {phase.targets.map((target, i) => (
                                                    <li key={i}>{target}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline Node */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-800 rounded-full border-4 border-primary-500 z-10"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TimelineOverview