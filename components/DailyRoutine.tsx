'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Sun, Sunset } from 'lucide-react'
import { getCategoryColor } from '@/lib/utils'

// Define types for better TypeScript support
type PeriodKey = 'morning' | 'day' | 'evening'

interface Activity {
    time: string
    title: string
    description: string
    category: string
    mindset?: string
}

interface RoutinePeriod {
    title: string
    icon: any
    color: string
    time: string
    activities: Activity[]
}

type Routines = Record<PeriodKey, RoutinePeriod>

const DailyRoutine = () => {
    const [selectedPeriod, setSelectedPeriod] = useState<PeriodKey>('morning')

    const routines: Routines = {
        morning: {
            title: "Morning Routine",
            icon: Sun,
            color: "from-amber-400 to-orange-500",
            time: "03:00 - 08:30",
            activities: [
                {
                    time: "03:00-03:05",
                    title: "Wake Up & Prepare",
                    description: "Gentle wake up, drink water, prepare for spiritual time",
                    category: "spiritual",
                    mindset: "Alhamdulillahi rabbil alamiin - blessed to wake in Allah's special time"
                },
                {
                    time: "03:05-03:30",
                    title: "Self Awareness Meditation & Tahajjud",
                    description: "Deep meditation, self awareness practice, 2 rakaat tahajjud prayer",
                    category: "spiritual",
                    mindset: "Ya Allah, bless this day, guide my steps toward my dreams"
                },
                {
                    time: "03:30-04:30",
                    title: "Rest & Preparation for Subuh",
                    description: "Light rest, Quran reading, dzikr, prepare for Subuh",
                    category: "spiritual"
                },
                {
                    time: "04:30-04:50",
                    title: "Subuh Prayer & Morning Dzikr",
                    description: "Subuh prayer with full presence, morning remembrance",
                    category: "spiritual"
                },
                {
                    time: "04:50-06:30",
                    title: "Golden Hours - Deep Learning",
                    description: "Programming study, trading analysis, skill development",
                    category: "learning"
                },
                {
                    time: "06:30-07:30",
                    title: "Physical Empowerment",
                    description: "Full workout routine, strength training, cardio",
                    category: "physical"
                },
                {
                    time: "07:30-08:30",
                    title: "Nourishment & Preparation",
                    description: "Healthy breakfast, shower, prepare for the day",
                    category: "rest"
                }
            ]
        },
        day: {
            title: "Day Routine",
            icon: Sun,
            color: "from-blue-400 to-cyan-500",
            time: "08:30 - 18:00",
            activities: [
                {
                    time: "08:30-12:00",
                    title: "Deep Work Block 1",
                    description: "Main programming projects, complex problem solving",
                    category: "work"
                },
                {
                    time: "12:00-12:30",
                    title: "Dhuhur & Midday Reset",
                    description: "Dhuhur prayer, brief meditation, energy renewal",
                    category: "spiritual"
                },
                {
                    time: "12:30-13:30",
                    title: "Lunch & Rest",
                    description: "Healthy meal, brief walk, social connection",
                    category: "rest"
                },
                {
                    time: "13:30-15:30",
                    title: "Deep Work Block 2",
                    description: "Trading activities, continuing projects, new tasks",
                    category: "work"
                },
                {
                    time: "15:30-16:00",
                    title: "Asr & Afternoon Break",
                    description: "Asr prayer, light snack, fresh air break",
                    category: "spiritual"
                },
                {
                    time: "16:00-18:00",
                    title: "Skill Building & Practice",
                    description: "Hands-on practice, build projects, mini workout",
                    category: "learning"
                }
            ]
        },
        evening: {
            title: "Evening Routine",
            icon: Sunset,
            color: "from-purple-400 to-indigo-500",
            time: "18:00 - 23:00",
            activities: [
                {
                    time: "18:00-19:00",
                    title: "Maghrib & Reflection Time",
                    description: "Maghrib prayer, evening duas, light Quran reading",
                    category: "spiritual"
                },
                {
                    time: "19:00-20:30",
                    title: "Social & Family Time",
                    description: "Dinner, family calls, light entertainment, evening walk",
                    category: "family"
                },
                {
                    time: "20:30-21:00",
                    title: "Isya & Night Preparation",
                    description: "Isya prayer, night supplications, mental preparation",
                    category: "spiritual"
                },
                {
                    time: "21:00-22:30",
                    title: "Growth & Learning Time",
                    description: "Reading session, side projects, framework creation",
                    category: "learning"
                },
                {
                    time: "22:30-23:00",
                    title: "Day Closing Ritual",
                    description: "Gratitude journal, tomorrow's intention, final dua",
                    category: "spiritual"
                }
            ]
        }
    }

    return (
        <section id="schedule" className="py-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-800 dark:to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Daily Schedule System
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Every hour planned with purpose - from 03:00 to 23:00 daily routine
                    </p>
                </motion.div>

                {/* Period Selector */}
                <div className="flex justify-center mb-12">
                    <div className="glass-effect rounded-2xl p-2 inline-flex">
                        {(Object.entries(routines) as [PeriodKey, RoutinePeriod][]).map(([key, routine]) => (
                            <motion.button
                                key={key}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedPeriod(key)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${selectedPeriod === key
                                        ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400'
                                    }`}
                            >
                                <routine.icon className="w-5 h-5" />
                                <span>{routine.title}</span>
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Routine Display */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedPeriod}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                {routines[selectedPeriod].title}
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-400">
                                {routines[selectedPeriod].time}
                            </p>
                        </div>

                        <div className="space-y-6">
                            {routines[selectedPeriod].activities.map((activity, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-effect rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${getCategoryColor(activity.category)} flex items-center justify-center flex-shrink-0`}>
                                            <Clock className="w-6 h-6 text-white" />
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                    {activity.title}
                                                </h4>
                                                <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/50 px-3 py-1 rounded-full">
                                                    {activity.time}
                                                </span>
                                            </div>

                                            <p className="text-gray-600 dark:text-gray-400 mb-2">
                                                {activity.description}
                                            </p>

                                            {activity.mindset && (
                                                <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-400">
                                                    <p className="text-sm text-green-700 dark:text-green-300 italic">
                                                        💭 Mindset: "{activity.mindset}"
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}

export default DailyRoutine