// Will be filled manually
'use client'

import React from 'react'
import { ArrowRight, Download, Calendar, Users, Sparkles, Target } from 'lucide-react'

export default function CallToAction() {
    return (
        <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-teal-400 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Islamic Geometric Pattern */}
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <pattern id="islamic-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <polygon points="10,0 20,10 10,20 0,10" fill="currentColor" />
                            <circle cx="10" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#islamic-pattern)" />
                </svg>
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Main CTA Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-emerald-100/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-emerald-300/30">
                        <Sparkles className="h-5 w-5 text-emerald-300" />
                        <span className="text-emerald-100 font-medium">Ready to Transform Your Life?</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Start Your Own
                        <span className="block bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
                            Life Framework
                        </span>
                    </h2>

                    <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto mb-12 leading-relaxed">
                        Join me on this systematic journey from spiritual rebirth to complete life success.
                        Every day brings us closer to our dreams - house, car, beautiful family, and financial freedom.
                    </p>

                    {/* Main CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold text-lg rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/25 hover:shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative flex items-center gap-3">
                                <Download className="h-6 w-6" />
                                Download Life Framework v2.0
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </button>

                        <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-2xl border-2 border-emerald-300/50 hover:bg-white/20 hover:border-emerald-300 transition-all duration-300">
                            <div className="flex items-center gap-3">
                                <Calendar className="h-6 w-6" />
                                Schedule Consultation
                            </div>
                        </button>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                    {[
                        { number: "20", label: "Hours Structured Daily", icon: Target },
                        { number: "4", label: "Year Transformation Plan", icon: Calendar },
                        { number: "5", label: "Life Areas Optimized", icon: Sparkles },
                        { number: "∞", label: "Dreams Achievable", icon: Users }
                    ].map((stat, index) => (
                        <div key={index} className="group text-center">
                            <div className="relative mb-4">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                    <stat.icon className="h-10 w-10 text-white" />
                                </div>
                                <div className="absolute -inset-2 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                            <div className="text-emerald-200 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Testimonial Preview */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-16 border border-emerald-300/20 shadow-2xl">
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
                            <span className="text-2xl">🚀</span>
                        </div>
                        <blockquote className="text-2xl text-white font-medium mb-6 italic">
                            "Every tahajjud brings me closer to inner peace. Every line of code brings my family closer to our dream house.
                            Every prayer connects me deeper with Allah's blessings."
                        </blockquote>
                        <div className="text-emerald-300 font-semibold">- Life Framework Creator</div>
                        <div className="text-emerald-200 text-sm">Day 1 of Spiritual Rebirth Journey</div>
                    </div>
                </div>

                {/* Final CTA with Benefits */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-sm rounded-3xl p-8 border border-emerald-300/30">
                        <h3 className="text-3xl font-bold text-white mb-6">
                            What You'll Get in Life Framework v2.0
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {[
                                "📅 Complete daily schedule (3 AM - 11 PM)",
                                "🎯 4-year dreams achievement timeline",
                                "💰 Wealth building weekly strategies",
                                "💑 Marriage preparation roadmap",
                                "🤲 Islamic integration throughout",
                                "📊 Daily tracking systems"
                            ].map((benefit, index) => (
                                <div key={index} className="flex items-center gap-3 text-emerald-100 text-left">
                                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>

                        <div className="text-emerald-200 text-lg mb-8">
                            <strong className="text-white">Bismillahi nabda'u...</strong> Let's make these dreams reality together!
                        </div>

                        <button className="group relative px-12 py-6 bg-gradient-to-r from-emerald-400 to-green-400 text-emerald-900 font-bold text-xl rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-green-300 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative flex items-center gap-3">
                                <span>Get Started Today</span>
                                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Bottom Quote */}
                <div className="text-center mt-12">
                    <p className="text-emerald-300 font-medium text-lg italic">
                        "Your dreams aren't just wishes - they're Allah's plan unfolding through your consistent actions"
                    </p>
                </div>
            </div>
        </section>
    )
}