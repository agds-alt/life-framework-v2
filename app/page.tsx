'use client'

import React from 'react'

function SimpleHero() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-amber-50">
            <div className="text-center max-w-4xl px-4">
                <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full text-green-700 text-sm font-medium mb-8">
                    <span>🌟 Spiritual Rebirth Started: Sept 24, 2025</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                    <span className="block">Life Framework</span>
                    <span className="block gradient-text">v2.0</span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Complete Daily System from{" "}
                    <span className="font-semibold text-green-600">Spiritual Rebirth</span>
                    {" "}to{" "}
                    <span className="font-semibold text-amber-600">Dreams Reality</span>
                    <br />
                    <span className="text-lg text-gray-500">
                        Age 31 to 35 (2025-2029) • House • Car • Beautiful Wife • 2 Children • Financial Freedom
                    </span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="glass-effect rounded-xl p-6">
                        <div className="text-2xl font-bold text-gray-900 mb-1">03:00-23:00</div>
                        <div className="text-sm text-gray-600">Daily Schedule</div>
                    </div>
                    <div className="glass-effect rounded-xl p-6">
                        <div className="text-2xl font-bold text-gray-900 mb-1">5 Major Goals</div>
                        <div className="text-sm text-gray-600">Dreams to Achieve</div>
                    </div>
                    <div className="glass-effect rounded-xl p-6">
                        <div className="text-2xl font-bold text-gray-900 mb-1">4 Year Journey</div>
                        <div className="text-sm text-gray-600">Transformation</div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg">
                        Explore Daily Schedule
                    </button>
                    <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg">
                        See Dreams Gallery
                    </button>
                </div>
            </div>
        </section>
    )
}

function TimelineSection() {
    const phases = [
        { year: "2025-2026", title: "Foundation Year", desc: "Building spiritual, physical, and skill foundations" },
        { year: "2026-2027", title: "Acceleration Year", desc: "Scaling skills, income, and preparing for marriage" },
        { year: "2027-2028", title: "Manifestation Year", desc: "Major life events and significant achievements" },
        { year: "2028-2029", title: "Completion Year", desc: "Achieving ultimate vision and complete success" }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        4-Year Transformation Journey
                    </h2>
                    <p className="text-xl text-gray-600">
                        From spiritual rebirth to complete success
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {phases.map((phase, index) => (
                        <div key={index} className="glass-effect rounded-xl p-6 text-center">
                            <div className="text-sm font-medium text-green-600 mb-2">{phase.year}</div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.title}</h3>
                            <p className="text-sm text-gray-600">{phase.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function ScheduleSection() {
    const scheduleData = [
        {
            period: "Morning Routine",
            timeRange: "03:00 - 08:30",
            activities: [
                { time: "03:00-03:30", activity: "Tahajjud and Meditation", desc: "Spiritual awakening" },
                { time: "04:30-04:50", activity: "Subuh Prayer", desc: "Morning gratitude" },
                { time: "06:00-06:25", activity: "Exercise", desc: "Physical activation" },
                { time: "06:25-08:00", activity: "Learning Hour", desc: "Coding and trading" }
            ]
        },
        {
            period: "Productive Day",
            timeRange: "08:30 - 18:00",
            activities: [
                { time: "08:30-12:00", activity: "Deep Work 1", desc: "Main projects" },
                { time: "12:00-12:30", activity: "Dhuhur Prayer", desc: "Midday reset" },
                { time: "12:30-15:30", activity: "Learning", desc: "Skill development" },
                { time: "16:00-18:00", activity: "Practice", desc: "Hands-on work" }
            ]
        },
        {
            period: "Evening Routine",
            timeRange: "18:00 - 23:00",
            activities: [
                { time: "18:00-19:00", activity: "Maghrib", desc: "Evening reflection" },
                { time: "19:00-20:30", activity: "Family Time", desc: "Social connection" },
                { time: "21:00-22:30", activity: "Growth Time", desc: "Learning and creation" },
                { time: "22:30-23:00", activity: "Closing", desc: "Gratitude and prep" }
            ]
        }
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Daily Schedule Showcase
                    </h2>
                    <p className="text-xl text-gray-600">
                        Systematic routine from 03:00 to 23:00
                    </p>
                </div>

                <div className="space-y-12">
                    {scheduleData.map((period, periodIndex) => (
                        <div key={periodIndex}>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{period.period}</h3>
                            <p className="text-green-600 font-medium mb-6">{period.timeRange}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {period.activities.map((activity, index) => (
                                    <div key={index} className="glass-effect rounded-xl p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="p-3 rounded-xl bg-green-500 text-white text-xs font-bold">
                                                {activity.time}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                                                    {activity.activity}
                                                </h4>
                                                <p className="text-gray-600 text-sm">{activity.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function DreamsSection() {
    const dreams = [
        { title: "Own House", desc: "Beautiful family home", progress: 25, color: "bg-blue-500" },
        { title: "Own Vehicles", desc: "Car and motorcycle", progress: 40, color: "bg-purple-500" },
        { title: "Beautiful Wife", desc: "Righteous life partner", progress: 35, color: "bg-pink-500" },
        { title: "2 Children", desc: "Next generation", progress: 20, color: "bg-green-500" },
        { title: "Financial Freedom", desc: "Multiple income streams", progress: 45, color: "bg-yellow-500" }
    ]

    return (
        <section className="py-20 bg-green-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Dreams Gallery
                    </h2>
                    <p className="text-xl text-gray-600">
                        Complete vision by age 35
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dreams.map((dream, index) => (
                        <div key={index} className="glass-effect rounded-xl p-6">
                            <div className={`w-12 h-12 ${dream.color} rounded-xl mb-4`}></div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{dream.title}</h3>
                            <p className="text-gray-600 mb-4">{dream.desc}</p>

                            <div className="mb-4">
                                <div className="flex justify-between text-sm mb-2">
                                    <span>Progress</span>
                                    <span className="font-bold">{dream.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className={`h-2 ${dream.color} rounded-full`}
                                        style={{ width: `${dream.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="bg-green-100 rounded-xl p-6 max-w-2xl mx-auto">
                        <p className="text-green-700 italic font-medium">
                            "Rabbana hab lana min azwajina wa dhurriyyatina qurrata a'yun"
                        </p>
                        <p className="text-sm text-green-600 mt-2">
                            "Our Lord, grant us from our wives and offspring comfort to our eyes"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Footer() {
    return (
        <section className="py-20 bg-gradient-to-r from-green-600 to-amber-600 text-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Transform Your Life?
                </h2>
                <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                    Join the journey from spiritual rebirth to complete success.
                    Start your own Life Framework today.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-gray-50">
                        Start Your Framework
                    </button>
                    <button className="bg-amber-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-amber-600">
                        Download Guide
                    </button>
                </div>

                <div className="bg-white/10 rounded-xl p-6 max-w-2xl mx-auto mb-8">
                    <p className="text-lg italic font-medium mb-2">"Wa billahi at-tawfeeq"</p>
                    <p className="text-sm opacity-90">And with Allah is success</p>
                </div>

                <div className="text-sm opacity-75">
                    © 2025 Life Framework v2.0 - Built with Islamic values
                </div>
            </div>
        </section>
    )
}

export default function HomePage() {
    return (
        <main className="islamic-pattern">
            <SimpleHero />
            <TimelineSection />
            <ScheduleSection />
            <DreamsSection />
            <Footer />
        </main>
    )
}