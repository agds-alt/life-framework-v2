'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    TrendingUp,
    Users,
    Search,
    BookOpen,
    Code,
    Target,
    Lightbulb,
    Coffee
} from 'lucide-react'

const WeeklySchedule = () => {
    const [selectedDay, setSelectedDay] = useState('monday')

    // Define schedule data
    const scheduleData = [
        {
            key: 'monday',
            day: 'Monday',
            title: 'Portfolio Building',
            icon: Code,
            color: 'from-blue-500 to-cyan-600',
            focus: 'Coding & Freelance',
            activities: [
                'Work on coding projects that showcase skills',
                'Update GitHub with new code',
                'Apply to freelance opportunities',
                'Build personal portfolio websites'
            ],
            goals: [
                'Complete 1 major coding project',
                'Update GitHub repository',
                'Apply to 3-5 freelance gigs'
            ],
            quote: 'Every line of code today builds tomorrow\'s financial freedom'
        },
        {
            key: 'tuesday',
            day: 'Tuesday',
            title: 'Trading Focus',
            icon: TrendingUp,
            color: 'from-green-500 to-emerald-600',
            focus: 'Market Analysis & Trading',
            activities: [
                'Deep market analysis',
                'Review trading journal',
                'Learn new trading strategies',
                'Practice risk management'
            ],
            goals: [
                'Complete market analysis',
                'Update trading journal',
                'Learn 1 new strategy',
                'Execute 2-3 quality trades'
            ],
            quote: 'Today\'s analysis creates tomorrow\'s profitable opportunities'
        },
        {
            key: 'wednesday',
            day: 'Wednesday',
            title: 'Networking',
            icon: Users,
            color: 'from-purple-500 to-violet-600',
            focus: 'Professional Relationships',
            activities: [
                'Engage in programming communities',
                'Connect with other traders',
                'Build professional relationships',
                'Attend virtual meetups/webinars'
            ],
            goals: [
                'Make 3 new professional connections',
                'Participate in 2 community discussions',
                'Help someone solve a problem',
                'Schedule 1 coffee chat'
            ],
            quote: 'Your network determines your net worth - grow both wisely'
        },
        {
            key: 'thursday',
            day: 'Thursday',
            title: 'Investment Research',
            icon: Search,
            color: 'from-orange-500 to-amber-600',
            focus: 'Long-term Wealth Building',
            activities: [
                'Research long-term investments',
                'Plan asset allocation',
                'Study successful investors',
                'Analyze investment opportunities'
            ],
            goals: [
                'Research 2-3 investment options',
                'Update investment plan',
                'Read 1 investor biography',
                'Calculate portfolio performance'
            ],
            quote: 'Today\'s research secures tomorrow\'s financial independence'
        },
        {
            key: 'friday',
            day: 'Friday',
            title: 'Framework Creation',
            icon: Lightbulb,
            color: 'from-indigo-500 to-purple-600',
            focus: 'Knowledge Creation & Sharing',
            activities: [
                'Work on new life frameworks',
                'Document systematic solutions',
                'Write guides and publish content',
                'Research topics for next frameworks'
            ],
            goals: [
                'Complete 1 framework document',
                'Publish 1 piece of content',
                'Research 3 new framework ideas',
                'Plan next week\'s content'
            ],
            quote: 'Your frameworks today become others\' success tomorrow'
        },
        {
            key: 'weekend',
            day: 'Weekend',
            title: 'Skill Enhancement',
            icon: BookOpen,
            color: 'from-rose-500 to-pink-600',
            focus: 'Learning & Personal Growth',
            activities: [
                'Take online courses',
                'Read industry books',
                'Practice advanced techniques',
                'Work on passion projects'
            ],
            goals: [
                'Complete 2 course modules',
                'Read 50 pages of industry book',
                'Practice 1 new skill',
                'Plan upcoming week'
            ],
            quote: 'Weekend learning compounds into weekday earning'
        }
    ]

    // Find current selected schedule
    const currentSchedule = scheduleData.find(item => item.key === selectedDay) || scheduleData[0]

    return (
        <section id="weekly-schedule" className="py-20 bg-gradient-to-b from-white to-primary-50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        💰 Wealth Building Weekly Schedule
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Strategic daily themes for systematic wealth creation and skill development
                    </p>
                </motion.div>

                {/* Day Selector */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    <div className="glass-effect rounded-2xl p-2 inline-flex flex-wrap">
                        {scheduleData.map((schedule) => {
                            const IconComponent = schedule.icon
                            return (
                                <motion.button
                                    key={schedule.key}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedDay(schedule.key)}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all m-1 ${selectedDay === schedule.key
                                            ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                                            : 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400'
                                        }`}
                                >
                                    <IconComponent className="w-4 h-4" />
                                    <span className="text-sm">{schedule.day}</span>
                                </motion.button>
                            )
                        })}
                    </div>
                </div>

                {/* Selected Day Display */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedDay}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-4xl mx-auto mb-16"
                    >
                        <div className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
                            {/* Day Header */}
                            <div className="text-center mb-8">
                                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${currentSchedule.color} flex items-center justify-center`}>
                                    <currentSchedule.icon className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                    {currentSchedule.title}
                                </h3>
                                <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-2">
                                    {currentSchedule.focus}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 italic">
                                    "{currentSchedule.quote}"
                                </p>
                            </div>

                            {/* Activities and Goals Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Activities */}
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                        <Target className="w-5 h-5 mr-2 text-primary-500" />
                                        Daily Activities
                                    </h4>
                                    <div className="space-y-3">
                                        {currentSchedule.activities.map((activity, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                                                <p className="text-gray-700 dark:text-gray-300 text-sm">
                                                    {activity}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Goals */}
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                                        <Target className="w-5 h-5 mr-2 text-primary-500" />
                                        Daily Goals
                                    </h4>
                                    <div className="space-y-3">
                                        {currentSchedule.goals.map((goal, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-400"
                                            >
                                                <div className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">
                                                    {index + 1}
                                                </div>
                                                <p className="text-green-700 dark:text-green-300 font-medium text-sm">
                                                    {goal}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Family Preparation Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-6xl mx-auto mb-16"
                >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                        💑 Preparing for Family Life
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Home Management */}
                        <div className="glass-effect rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                🏠 Home Management
                            </h4>
                            <div className="space-y-2">
                                <div className="flex items-start space-x-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Keep personal space organized
                                    </p>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Learn cooking skills
                                    </p>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Practice cleaning routines
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Financial Responsibility */}
                        <div className="glass-effect rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                💰 Financial Responsibility
                            </h4>
                            <div className="space-y-2">
                                <div className="flex items-start space-x-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Track expenses daily
                                    </p>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Build emergency fund
                                    </p>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Increase savings rate
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Spiritual Leadership */}
                        <div className="glass-effect rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                🤲 Spiritual Leadership
                            </h4>
                            <div className="space-y-2">
                                <div className="flex items-start space-x-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Deepen Islamic knowledge
                                    </p>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Practice being consistent role model
                                    </p>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Learn family Islamic teachings
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Weekly Celebrations */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <div className="glass-effect rounded-2xl p-8 max-w-3xl mx-auto">
                        <Coffee className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                        <h4 className="text-2xl font-bold gradient-text mb-4">
                            Weekly Celebrations & Rewards
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                <p className="font-semibold text-green-700 dark:text-green-300 mb-2">Friday</p>
                                <p>Special meal to celebrate week's progress</p>
                            </div>
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Saturday</p>
                                <p>Fun activity as reward for consistency</p>
                            </div>
                            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                <p className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Sunday</p>
                                <p>Plan exciting goals for coming week</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default WeeklySchedule