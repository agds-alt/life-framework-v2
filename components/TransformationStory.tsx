'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Heart, Star, Calendar } from 'lucide-react'

const TransformationStory = () => {
    const storyMilestones = [
        {
            date: "September 24, 2025",
            title: "Spiritual Rebirth",
            description: "The day everything changed. A moment of clarity and commitment to transform life completely.",
            icon: Star,
            color: "from-green-500 to-emerald-600"
        },
        {
            date: "December 2025",
            title: "Foundation Building",
            description: "Consistent daily routines established. Tahajjud, exercise, learning - all becoming natural habits.",
            icon: Calendar,
            color: "from-blue-500 to-cyan-600"
        },
        {
            date: "Mid 2026",
            title: "Financial Momentum",
            description: "Trading profits consistent, coding skills advanced, multiple income streams flowing.",
            icon: Quote,
            color: "from-purple-500 to-violet-600"
        },
        {
            date: "2027",
            title: "Life Partner Found",
            description: "Allah brings the perfect, righteous partner. Marriage preparation and blessed union.",
            icon: Heart,
            color: "from-pink-500 to-rose-600"
        }
    ]

    return (
        <section id="story" className="py-20 bg-gradient-to-b from-white to-primary-50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        The Transformation Story
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        From spiritual awakening to dreams reality - a journey of systematic transformation
                    </p>
                </motion.div>

                {/* Opening Quote */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <div className="glass-effect rounded-2xl p-8">
                        <Quote className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                        <blockquote className="text-2xl font-semibold text-gray-900 dark:text-white italic mb-4">
                            "This isn't just a schedule - it's your LIFE BLUEPRINT!"
                        </blockquote>
                        <p className="text-gray-600 dark:text-gray-400">
                            A systematic approach to transforming dreams into reality through consistent daily actions,
                            spiritual connection, and unwavering commitment to growth.
                        </p>
                    </div>
                </motion.div>

                {/* Story Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 via-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

                    {storyMilestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.3 }}
                            className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                        >
                            {/* Content Card */}
                            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 pl-12' : 'md:pl-8 pl-12'} md:pl-0`}>
                                <div className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
                                    <div className="flex items-center mb-4">
                                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${milestone.color} flex items-center justify-center mr-4`}>
                                            <milestone.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                {milestone.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {milestone.date}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400">
                                        {milestone.description}
                                    </p>
                                </div>
                            </div>

                            {/* Timeline Node */}
                            <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-4 border-primary-500 z-10"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Core Principles */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-20"
                >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
                        Core Framework Principles
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Spiritual Foundation",
                                description: "Every action rooted in connection with Allah. Tahajjud, prayers, and constant dhikr as the foundation of all success.",
                                icon: "🤲"
                            },
                            {
                                title: "Systematic Approach",
                                description: "No random actions. Every hour planned, every goal broken down, every dream systematically pursued with consistent action.",
                                icon: "⚡"
                            },
                            {
                                title: "Holistic Growth",
                                description: "Spiritual, physical, mental, financial, and social development balanced and integrated for complete life transformation.",
                                icon: "🌟"
                            }
                        ].map((principle, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="glass-effect rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
                            >
                                <div className="text-4xl mb-4">{principle.icon}</div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {principle.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {principle.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Final Inspiration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-center mt-16"
                >
                    <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
                        <h4 className="text-2xl font-bold gradient-text mb-4">
                            Bismillahi nabda'u...
                        </h4>
                        <p className="text-lg text-gray-900 dark:text-white font-semibold mb-2">
                            Let's make these dreams reality! 🚀💚
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                            <em>Last Updated: September 24, 2025 - Day 1 of New Life<br />
                                Target Completion: April 12, 2029 - Dreams Achieved!</em>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default TransformationStory