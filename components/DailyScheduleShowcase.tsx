// Will be filled manually
'use client'

import React, { useState } from 'react'
import { dailySchedule } from '@/data/schedule'
import {
    Clock,
    Moon,
    Sun,
    Book,
    Dumbbell,
    Monitor,
    Target,
    Laptop,
    TrendingUp,
    Wrench,
    Users,
    Heart,
    ChevronDown,
    ChevronRight
} from 'lucide-react'

// Icon mapping
const iconMap = {
    moon: Moon,
    sun: Sun,
    book: Book,
    dumbbell: Dumbbell,
    monitor: Monitor,
    target: Target,
    laptop: Laptop,
    growth: TrendingUp,
    tools: Wrench,
    users: Users,
    heart: Heart,
}

// Category colors
const categoryColors = {
    spiritual: 'from-emerald-500 to-green-600',
    physical: 'from-blue-500 to-indigo-600',
    learning: 'from-purple-500 to-violet-600',
    work: 'from-orange-500 to-red-500',
    family: 'from-pink-500 to-rose-600',
}

const categoryBgColors = {
    spiritual: 'bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800',
    physical: 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800',
    learning: 'bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-800',
    work: 'bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800',
    family: 'bg-pink-50 border-pink-200 dark:bg-pink-900/20 dark:border-pink-800',
}

interface ExpandedState {
    [key: string]: boolean
}

export default function DailyScheduleShowcase() {
    const [expandedActivities, setExpandedActivities] = useState<ExpandedState>({})

    const toggleActivity = (activityId: string) => {
        setExpandedActivities(prev => ({
            ...prev,
            [activityId]: !prev[activityId]
        }))
    }

    return (
        <section className="py-16 px-4 bg-gradient-to-br from-emerald-50 to-green-100 dark:from-gray-900 dark:to-emerald-900/20">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-full mb-6">
                        <Clock className="h-5 w-5 text-emerald-600" />
                        <span className="text-emerald-800 dark:text-emerald-200 font-medium">Daily Schedule</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-4">
                        My Systematic Daily Routine
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        From 3:00 AM to 11:00 PM - Every minute planned toward achieving dreams by age 35
                    </p>
                </div>

                {/* Schedule Periods */}
                <div className="space-y-12">
                    {dailySchedule.map((period, periodIndex) => (
                        <div key={period.period} className="relative">
                            {/* Period Header */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-2xl shadow-lg border-2 border-emerald-200 dark:border-emerald-800">
                                    <div className="h-3 w-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                                        {period.period}
                                    </h3>
                                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                                        {period.timeRange}
                                    </span>
                                </div>
                            </div>

                            {/* Activities */}
                            <div className="grid gap-6">
                                {period.activities.map((activity, activityIndex) => {
                                    const IconComponent = iconMap[activity.icon as keyof typeof iconMap] || Clock
                                    const isExpanded = expandedActivities[activity.id]
                                    const hasDetailedBreakdown = activity.detailedBreakdown && activity.detailedBreakdown.length > 0

                                    return (
                                        <div
                                            key={activity.id}
                                            className={`rounded-2xl border-2 transition-all duration-300 ${categoryBgColors[activity.category as keyof typeof categoryBgColors]
                                                }`}
                                        >
                                            {/* Main Activity Card */}
                                            <div
                                                className={`p-6 cursor-pointer ${hasDetailedBreakdown ? 'hover:bg-white/50 dark:hover:bg-gray-800/50' : ''}`}
                                                onClick={() => hasDetailedBreakdown && toggleActivity(activity.id)}
                                            >
                                                <div className="flex items-start justify-between">
                                                    <div className="flex items-start gap-4 flex-1">
                                                        {/* Icon */}
                                                        <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColors[activity.category as keyof typeof categoryColors]
                                                            } text-white shadow-lg`}>
                                                            <IconComponent className="h-6 w-6" />
                                                        </div>

                                                        {/* Content */}
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-3 mb-2">
                                                                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded-full">
                                                                    {activity.time}
                                                                </span>
                                                                {hasDetailedBreakdown && (
                                                                    <div className="flex items-center gap-1">
                                                                        {isExpanded ? (
                                                                            <ChevronDown className="h-4 w-4 text-gray-500" />
                                                                        ) : (
                                                                            <ChevronRight className="h-4 w-4 text-gray-500" />
                                                                        )}
                                                                        <span className="text-xs text-gray-500">Click to expand</span>
                                                                    </div>
                                                                )}
                                                            </div>

                                                            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                                                {activity.activity}
                                                            </h4>

                                                            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                                                {activity.description}
                                                            </p>

                                                            {/* Benefits */}
                                                            {activity.benefits && (
                                                                <div className="flex flex-wrap gap-2 mb-3">
                                                                    {activity.benefits.map((benefit, index) => (
                                                                        <span
                                                                            key={index}
                                                                            className="text-xs bg-white/80 dark:bg-gray-700/80 px-3 py-1 rounded-full text-gray-600 dark:text-gray-300 border"
                                                                        >
                                                                            {benefit}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            )}

                                                            {/* Islamic Quote */}
                                                            {activity.islamicQuote && (
                                                                <blockquote className="text-sm italic text-emerald-700 dark:text-emerald-300 border-l-4 border-emerald-500 pl-4 mt-3">
                                                                    "{activity.islamicQuote}"
                                                                </blockquote>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Detailed Breakdown */}
                                            {hasDetailedBreakdown && isExpanded && (
                                                <div className="border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 rounded-b-2xl">
                                                    <div className="p-6">
                                                        <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                                                            <Clock className="h-5 w-5 text-emerald-600" />
                                                            Detailed Breakdown
                                                        </h5>
                                                        <div className="space-y-3">
                                                            {activity.detailedBreakdown!.map((breakdown, index) => (
                                                                <div key={index} className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                                                                    <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded-full whitespace-nowrap">
                                                                        {breakdown.time}
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <h6 className="font-semibold text-gray-800 dark:text-white text-sm mb-1">
                                                                            {breakdown.task}
                                                                        </h6>
                                                                        <p className="text-sm text-gray-600 dark:text-gray-300">
                                                                            {breakdown.description}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Period Separator */}
                            {periodIndex < dailySchedule.length - 1 && (
                                <div className="flex items-center justify-center mt-12">
                                    <div className="h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent w-full max-w-md"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border-2 border-emerald-200 dark:border-emerald-800">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                            Every Day Brings Me Closer to My Dreams
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                            This systematic daily routine is designed to transform my life from spiritual rebirth at age 31
                            to complete success by age 35 - house, car, beautiful wife, 2 children, and financial freedom.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <div className="bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-full">
                                <span className="text-emerald-800 dark:text-emerald-200 font-semibold">🕐 20 hours structured daily</span>
                            </div>
                            <div className="bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-full">
                                <span className="text-emerald-800 dark:text-emerald-200 font-semibold">🎯 4-year transformation plan</span>
                            </div>
                            <div className="bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 rounded-full">
                                <span className="text-emerald-800 dark:text-emerald-200 font-semibold">🤲 Islamic principles integrated</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}