'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Calendar, Target, CheckCircle } from 'lucide-react'

const ProgressTracker = () => {
    const progressData = [
        {
            category: "Spiritual Growth",
            current: 85,
            target: 100,
            color: "from-green-500 to-emerald-600",
            metrics: [
                { label: "Tahajjud Sessions", value: "7/7 daily" },
                { label: "Prayer Quality", value: "High focus" },
                { label: "Quran Reading", value: "Daily habit" }
            ]
        },
        {
            category: "Financial Progress",
            current: 65,
            target: 100,
            color: "from-blue-500 to-cyan-600",
            metrics: [
                { label: "Emergency Fund", value: "4 months saved" },
                { label: "Trading Consistency", value: "15% monthly" },
                { label: "Side Income", value: "$600/month" }
            ]
        },
        {
            category: "Physical Health",
            current: 78,
            target: 100,
            color: "from-purple-500 to-violet-600",
            metrics: [
                { label: "Workout Consistency", value: "6/7 weekly" },
                { label: "Energy Level", value: "High daily" },
                { label: "Sleep Quality", value: "7-8 hours" }
            ]
        },
        {
            category: "Skill Development",
            current: 72,
            target: 100,
            color: "from-amber-500 to-orange-600",
            metrics: [
                { label: "Coding Projects", value: "3 completed" },
                { label: "Learning Hours", value: "10+ weekly" },
                { label: "GitHub Activity", value: "Daily commits" }
            ]
        }
    ]

    const weeklyGoals = [
        { goal: "Complete 7 tahajjud sessions", completed: true },
        { goal: "Exercise 6 times", completed: true },
        { goal: "Earn $150 from trading", completed: false },
        { goal: "Finish 2 coding modules", completed: true },
        { goal: "Read 1 Islamic book chapter", completed: true }
    ]

    return (
        <section className="py-20 bg-gradient-to-b from-secondary-50 to-white dark:from-gray-800 dark:to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Progress Tracking
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Real-time monitoring of transformation journey
                    </p>
                </motion.div>

                {/* Progress Bars */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {progressData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-effect rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {item.category}
                                </h3>
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {item.current}%
                                </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.current}%` }}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                    className={`h-3 rounded-full bg-gradient-to-r ${item.color}`}
                                />
                            </div>

                            {/* Metrics */}
                            <div className="space-y-2">
                                {item.metrics.map((metric, metricIndex) => (
                                    <div key={metricIndex} className="flex justify-between text-sm">
                                        <span className="text-gray-600 dark:text-gray-400">
                                            {metric.label}:
                                        </span>
                                        <span className="text-gray-900 dark:text-white font-medium">
                                            {metric.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Weekly Goals */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-2xl mx-auto"
                >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                        This Week's Goals
                    </h3>

                    <div className="glass-effect rounded-2xl p-6">
                        <div className="space-y-4">
                            {weeklyGoals.map((goal, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center space-x-3"
                                >
                                    <CheckCircle className={`w-6 h-6 ${goal.completed ? 'text-green-500' : 'text-gray-400'}`} />
                                    <span className={`text-lg ${goal.completed ? 'text-gray-900 dark:text-white line-through' : 'text-gray-700 dark:text-gray-300'}`}>
                                        {goal.goal}
                                    </span>
                                    {goal.completed && (
                                        <span className="text-sm bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
                                            ✓ Done
                                        </span>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Weekly Progress:
                                </span>
                                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                                    {Math.round((weeklyGoals.filter(g => g.completed).length / weeklyGoals.length) * 100)}%
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Motivational Quote */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-center mt-12"
                >
                    <div className="glass-effect rounded-2xl p-6 max-w-lg mx-auto">
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                            "Your dreams aren't just wishes - they're Allah's plan unfolding through your consistent actions!"
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ProgressTracker