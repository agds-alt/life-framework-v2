'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Home, Car, Heart, Users, DollarSign } from 'lucide-react'

const DreamsGallery = () => {
    const dreams = [
        {
            icon: Home,
            title: "Own House",
            description: "Beautiful, comfortable home for family",
            timeline: "2028",
            color: "from-green-500 to-emerald-600",
            details: "Dream house with garden, prayer room, and space for children to play"
        },
        {
            icon: Car,
            title: "Own Vehicles",
            description: "Car for family trips, motorcycle for daily mobility",
            timeline: "2027-2028",
            color: "from-blue-500 to-cyan-600",
            details: "Family car for comfort and safety, motorcycle for efficient commuting"
        },
        {
            icon: Heart,
            title: "Beautiful & Sholehah Wife",
            description: "Life partner who supports spiritual journey",
            timeline: "2027",
            color: "from-pink-500 to-rose-600",
            details: "A righteous partner who strengthens faith and builds blessed family together"
        },
        {
            icon: Users,
            title: "2 Sholeh/Sholehah Children",
            description: "Raising next generation of believers",
            timeline: "2028-2030",
            color: "from-purple-500 to-violet-600",
            details: "Children who will be pride of the ummah and continue legacy of faith"
        },
        {
            icon: DollarSign,
            title: "Financial Freedom",
            description: "Multiple income streams, investment portfolio",
            timeline: "2029",
            color: "from-amber-500 to-orange-600",
            details: "Passive income covering all expenses, multiple businesses, smart investments"
        }
    ]

    const duas = [
        {
            arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
            english: "Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous",
            purpose: "For Future Wife & Children"
        },
        {
            arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
            english: "Our Lord, give us good in this world and good in the next world, and save us from the punishment of the Fire",
            purpose: "For House & Stability"
        }
    ]

    return (
        <section id="dreams" className="py-20 bg-gradient-to-b from-white to-secondary-50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Dreams to Reality
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        5 Major life goals - systematic achievement through daily actions
                    </p>
                </motion.div>

                {/* Dreams Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {dreams.map((dream, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-effect rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300"
                        >
                            <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${dream.color} flex items-center justify-center`}>
                                <dream.icon className="w-10 h-10 text-white" />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {dream.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                {dream.description}
                            </p>

                            <div className="mb-4">
                                <span className="inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    Target: {dream.timeline}
                                </span>
                            </div>

                            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                                {dream.details}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Special Duas Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                        🤲 Special Duas for Dreams
                    </h3>

                    <div className="space-y-6">
                        {duas.map((dua, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="glass-effect rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="text-center mb-4">
                                    <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                                        {dua.purpose}
                                    </h4>
                                </div>

                                <div className="text-center mb-4">
                                    <p className="text-2xl font-arabic text-gray-800 dark:text-gray-200 leading-relaxed mb-3">
                                        {dua.arabic}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-400 italic">
                                        "{dua.english}"
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Inspiration Quote */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-center mt-16"
                >
                    <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
                        <p className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            "Every tahajjud = Closer to inner peace"
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                            "Every line of code = Closer to financial freedom"
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                            "Every exercise = Stronger for your family"
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            "Every dua = Allah preparing your beautiful future"
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default DreamsGallery