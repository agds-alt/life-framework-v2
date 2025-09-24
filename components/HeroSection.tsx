'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Target, Star, ArrowDown } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'

const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

            {/* Floating Animation Elements */}
            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-32 left-10 w-20 h-20 bg-primary-200/30 rounded-full blur-xl"
            />
            <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-200/30 rounded-full blur-xl"
            />

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16 lg:mt-0">
                {/* Spiritual Rebirth Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/50 px-6 py-3 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-8 shadow-lg"
                >
                    <Star className="w-4 h-4" />
                    <span>Spiritual Rebirth Started: Sept 24, 2025</span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
                >
                    <span className="block">Life Framework</span>
                    <span className="block gradient-text">v2.0</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
                >
                    Complete Daily System from{' '}
                    <span className="font-semibold text-primary-600 dark:text-primary-400">
                        Spiritual Rebirth
                    </span>
                    {' '}to{' '}
                    <span className="font-semibold text-secondary-600 dark:text-secondary-400">
                        Dreams Reality
                    </span>
                    <br />
                    <span className="text-lg text-gray-500 dark:text-gray-400">
                        Age 31 to 35 (2025-2029) • House • Car • Beautiful Wife • 2 Children • Financial Freedom
                    </span>
                </motion.p>

                {/* Stats Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
                >
                    {[
                        { icon: Calendar, label: "Daily Schedule", value: "03:00-23:00" },
                        { icon: Target, label: "Dreams to Achieve", value: "5 Major Goals" },
                        { icon: Star, label: "Transformation Years", value: "4 Year Journey" },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="glass-effect rounded-2xl p-6 text-center"
                        >
                            <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary-600 dark:text-primary-400" />
                            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection('schedule')}
                        className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-primary-500/25 transition-all duration-200"
                    >
                        Explore Daily Schedule
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection('dreams')}
                        className="bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-secondary-500/25 transition-all duration-200"
                    >
                        See Dreams Gallery
                    </motion.button>
                </motion.div>

                {/* Scroll Down Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.button
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        onClick={() => scrollToSection('timeline')}
                        className="text-gray-400 hover:text-primary-600 transition-colors"
                    >
                        <ArrowDown className="w-6 h-6" />
                    </motion.button>
                </motion.div>
            </div>

            {/* Bottom Quote */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="absolute bottom-4 left-4 right-4 text-center"
            >
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium italic">
                    "Bismillahi nabda'u... Let's make these dreams reality!" 🚀💚
                </p>
            </motion.div>
        </section>
    )
}

export default HeroSection