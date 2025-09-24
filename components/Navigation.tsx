
'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isDark, setIsDark] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleTheme = () => {
        setIsDark(!isDark)
        document.documentElement.classList.toggle('dark')
    }

    const navItems = [
        { id: 'hero', label: 'Home' },
        { id: 'timeline', label: 'Journey' },
        { id: 'schedule', label: 'Daily' },
        { id: 'weekly-schedule', label: 'Weekly' },
        { id: 'dreams', label: 'Dreams' },
        { id: 'story', label: 'Story' },
    ]

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-green-200 dark:border-gray-700 shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">  {/* Increased height from h-16 to h-20 */}
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex-shrink-0"
                    >
                        <h1 className="text-xl font-bold gradient-text cursor-pointer" onClick={() => scrollToSection('hero')}>
                            Life Framework v2.0
                        </h1>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">  {/* Changed from md:block to lg:block for better responsive */}
                        <div className="ml-10 flex items-center space-x-6">  {/* Increased spacing */}
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.id}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {item.label}
                                </motion.button>
                            ))}

                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={toggleTheme}
                                className="p-2 rounded-full bg-primary-100 dark:bg-gray-700 text-primary-600 dark:text-primary-400 ml-4"
                            >
                                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                            </motion.button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">  {/* Changed from md:hidden to lg:hidden */}
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-gray-100 dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navItems.map((item) => (
                                    <motion.button
                                        key={item.id}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            scrollToSection(item.id)
                                            setIsOpen(false)
                                        }}
                                        className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors"
                                    >
                                        {item.label}
                                    </motion.button>
                                ))}

                                <div className="pt-4 pb-2">
                                    <motion.button
                                        whileTap={{ scale: 0.95 }}
                                        onClick={toggleTheme}
                                        className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 px-3 py-2"
                                    >
                                        {isDark ? <Sun size={18} /> : <Moon size={18} />}
                                        <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    )
}

export default Navigation