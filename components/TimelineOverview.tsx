// Will be filled manually
'use client'
import React from 'react'
import { motion } from 'framer-motion'

const TimelineOverview = () => {
    return (
        <section id="timeline" className="py-20 bg-gradient-to-b from-white to-primary-50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        4-Year Transformation Journey
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        From spiritual rebirth to complete success - systematic progression through each phase
                    </p>
                </motion.div>
                <div className="text-center text-gray-600">Timeline content coming soon...</div>
            </div>
        </section>
    )
}
export default TimelineOverview