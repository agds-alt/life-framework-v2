// Complete schedule data with detailed hourly breakdown
import { SchedulePeriod } from '@/types'

export const dailySchedule: SchedulePeriod[] = [
    {
        period: "Morning Routine",
        timeRange: "03:00 - 08:30",
        activities: [
            {
                id: "wakeup",
                time: "03:00 - 03:05",
                activity: "Wake Up and Prepare",
                description: "Gentle wake up, drink water, prepare for spiritual time",
                category: "spiritual",
                benefits: ["Mental preparation", "Hydration", "Spiritual readiness"],
                islamicQuote: "Alhamdulillahi rabbil alamiin - blessed to wake in Allah's special time",
                icon: "moon"
            },
            {
                id: "tahajjud",
                time: "03:05 - 03:30",
                activity: "Tahajjud and Self Awareness Meditation",
                description: "5 min settle and breathe, 15 min deep meditation, 5 min tahajjud prayer",
                category: "spiritual",
                benefits: ["Spiritual connection", "Inner peace", "Mental clarity", "Divine blessing"],
                islamicQuote: "Allah's descent time - maximum spiritual connection",
                icon: "moon"
            },
            {
                id: "rest-prep",
                time: "03:30 - 04:30",
                activity: "Rest and Subuh Preparation",
                description: "Light rest, Quran reading, dzikr, and preparation for Subuh",
                category: "spiritual",
                benefits: ["Spiritual preparation", "Mental calm", "Divine connection"],
                icon: "book"
            },
            {
                id: "subuh",
                time: "04:30 - 04:50",
                activity: "Subuh Prayer and Morning Dzikr",
                description: "Subuh prayer with full presence plus post-prayer dzikr (Subhanallah 33x, Alhamdulillah 33x, Allahu Akbar 34x)",
                category: "spiritual",
                benefits: ["Spiritual grounding", "Divine protection", "Day blessing"],
                islamicQuote: "Ya Allah, make me among those who succeed in dunya and akhirah",
                icon: "sun"
            },
            {
                id: "spiritual-time",
                time: "04:50 - 06:00",
                activity: "Extended Spiritual Time",
                description: "Quran reading & reflection (30 min), extended duas for dreams & family, spiritual journaling & intention setting",
                category: "spiritual",
                benefits: ["Quranic knowledge", "Spiritual growth", "Life direction", "Mental preparation"],
                icon: "book"
            },
            {
                id: "exercise",
                time: "06:00 - 06:25",
                activity: "Physical Activation",
                description: "Light stretching (5 min), light jog around neighborhood (15 min), basic exercises (push ups 10x, plank 30 seconds), quick shower",
                category: "physical",
                benefits: ["Physical fitness", "Energy boost", "Health improvement"],
                icon: "dumbbell"
            },
            {
                id: "learning",
                time: "06:25 - 08:00",
                activity: "Learning Power Hour",
                description: "Simple breakfast while reviewing goals, Coding practice (45 min): Week 1-2 HTML/CSS/JS, Week 3-4 React basics, Month 2+ full projects. Trading analysis (15 min): check overnight markets, review performance, plan trades",
                category: "learning",
                benefits: ["Skill development", "Career advancement", "Financial knowledge"],
                icon: "monitor"
            },
            {
                id: "day-prep",
                time: "08:00 - 08:30",
                activity: "Day Preparation",
                description: "Check important messages (max 15 min), review daily goals & priorities, mental preparation: 'Today I move closer to my dreams'",
                category: "work",
                benefits: ["Day planning", "Goal alignment", "Mental readiness"],
                icon: "target"
            }
        ]
    },
    {
        period: "Productive Day",
        timeRange: "08:30 - 18:00",
        activities: [
            {
                id: "deep-work-1",
                time: "08:30 - 12:00",
                activity: "Deep Work Session 1",
                description: "Main work/projects using Pomodoro Technique (25 min work, 5 min break). Focus options: Job responsibilities, Freelance coding projects, Personal portfolio development, Business planning. No social media, no distractions.",
                category: "work",
                benefits: ["Productivity", "Income generation", "Skill application", "Professional growth"],
                icon: "laptop",
                detailedBreakdown: [
                    {
                        time: "08:30 - 09:25",
                        task: "First Pomodoro Block",
                        description: "Primary work task - coding project or job responsibilities"
                    },
                    {
                        time: "09:25 - 09:30",
                        task: "Short Break",
                        description: "Stretch, hydrate, brief walk"
                    },
                    {
                        time: "09:30 - 10:25",
                        task: "Second Pomodoro Block",
                        description: "Continue primary work or switch to portfolio development"
                    },
                    {
                        time: "10:25 - 10:30",
                        task: "Short Break",
                        description: "Stretch, hydrate, fresh air"
                    },
                    {
                        time: "10:30 - 11:25",
                        task: "Third Pomodoro Block",
                        description: "Business planning or freelance project work"
                    },
                    {
                        time: "11:25 - 11:45",
                        task: "Extended Break",
                        description: "Light snack, review progress, plan next session"
                    },
                    {
                        time: "11:45 - 12:00",
                        task: "Session Wrap-up",
                        description: "Save work, note progress, prepare for Dhuhur"
                    }
                ]
            },
            {
                id: "dhuhur",
                time: "12:00 - 12:30",
                activity: "Dhuhur and Midday Reset",
                description: "Dhuhur prayer with presence, brief gratitude moment, healthy lunch",
                category: "spiritual",
                benefits: ["Spiritual recharge", "Physical nutrition", "Mental reset"],
                islamicQuote: "Ya Allah, barakahi sisa hari ini",
                icon: "sun"
            },
            {
                id: "deep-work-2",
                time: "12:30 - 15:30",
                activity: "Deep Work Session 2",
                description: "Learning & Development: Advanced coding tutorials, Trading strategy study, Reading business/self-development books. Continue morning projects or start new tasks. Focus on high-impact activities.",
                category: "learning",
                benefits: ["Knowledge expansion", "Future preparation", "Skill mastery", "Strategic thinking"],
                icon: "growth",
                detailedBreakdown: [
                    {
                        time: "12:30 - 13:30",
                        task: "Advanced Learning Hour",
                        description: "Coding tutorials, new frameworks, advanced concepts"
                    },
                    {
                        time: "13:30 - 14:00",
                        task: "Trading Strategy Study",
                        description: "Market analysis, strategy backtesting, financial education"
                    },
                    {
                        time: "14:00 - 14:30",
                        task: "Business/Self-Development Reading",
                        description: "Books on entrepreneurship, personal growth, success principles"
                    },
                    {
                        time: "14:30 - 15:30",
                        task: "Project Application Time",
                        description: "Apply new learning to current projects, experiment with new techniques"
                    }
                ]
            },
            {
                id: "asr",
                time: "15:30 - 16:00",
                activity: "Asr and Afternoon Break",
                description: "Asr prayer, light snack & hydration, fresh air break - step outside, quick family/friends check-in",
                category: "spiritual",
                benefits: ["Spiritual connection", "Physical rest", "Social maintenance", "Fresh air"],
                icon: "sun"
            },
            {
                id: "skill-building",
                time: "16:00 - 18:00",
                activity: "Skill Building and Practice",
                description: "Hands-on practice: Build actual projects, Execute trading strategies, Work on portfolio pieces. Track progress and results. Mini workout (10-15 min bodyweight exercises).",
                category: "work",
                benefits: ["Practical experience", "Income execution", "Physical maintenance", "Portfolio building"],
                icon: "tools",
                detailedBreakdown: [
                    {
                        time: "16:00 - 17:00",
                        task: "Hands-on Project Building",
                        description: "Build real applications, implement learned concepts, create portfolio pieces"
                    },
                    {
                        time: "17:00 - 17:30",
                        task: "Trading Execution & Analysis",
                        description: "Execute planned trades, analyze market movements, update trading journal"
                    },
                    {
                        time: "17:30 - 17:45",
                        task: "Mini Physical Workout",
                        description: "10-15 min bodyweight exercises: push-ups, squats, planks"
                    },
                    {
                        time: "17:45 - 18:00",
                        task: "Progress Tracking & Day Review",
                        description: "Update project progress, track results, prepare for evening routine"
                    }
                ]
            }
        ]
    },
    {
        period: "Evening Routine",
        timeRange: "18:00 - 23:00",
        activities: [
            {
                id: "maghrib",
                time: "18:00 - 19:00",
                activity: "Maghrib and Reflection Time",
                description: "Maghrib prayer, evening dua for family & future spouse, light Quran reading (10-15 minutes)",
                category: "spiritual",
                benefits: ["Evening gratitude", "Family prayers", "Spiritual reflection", "Divine connection"],
                islamicQuote: "Ya Allah, choose for me a righteous wife, bless us with sholeh children",
                icon: "moon"
            },
            {
                id: "social-time",
                time: "19:00 - 20:30",
                activity: "Social and Family Time",
                description: "Healthy dinner (cook meals - prep for family life), call family/friends, light entertainment (max 30 min), evening walk (think about dreams & goals)",
                category: "family",
                benefits: ["Social connection", "Family bonds", "Life balance", "Reflection", "Cooking skills"],
                icon: "users",
                detailedBreakdown: [
                    {
                        time: "19:00 - 19:45",
                        task: "Healthy Dinner Preparation & Eating",
                        description: "Cook nutritious meals, practice cooking skills for future family"
                    },
                    {
                        time: "19:45 - 20:15",
                        task: "Family & Friends Connection",
                        description: "Call family, check on friends, maintain social relationships"
                    },
                    {
                        time: "20:15 - 20:30",
                        task: "Evening Walk & Reflection",
                        description: "Peaceful walk, think about dreams and goals, enjoy fresh air"
                    }
                ]
            },
            {
                id: "isya",
                time: "20:30 - 21:00",
                activity: "Isya and Night Preparation",
                description: "Isya prayer, night supplications, mental preparation for tomorrow",
                category: "spiritual",
                benefits: ["Night protection", "Sleep preparation", "Divine connection", "Tomorrow's intention"],
                icon: "moon"
            },
            {
                id: "growth-time",
                time: "21:00 - 22:30",
                activity: "Growth and Framework Creation",
                description: "Reading session (20 min): Islamic books, Programming books, Business/finance books, Biographies. Side project work (20 min): Personal website, Trading journal, GitHub contributions. Framework creation session (40 min): Document real-life problems, design systematic solutions, create reusable frameworks, combine tech logic + spiritual wisdom.",
                category: "learning",
                benefits: ["Knowledge growth", "System building", "Content creation", "Passive income preparation", "Islamic learning"],
                icon: "book",
                detailedBreakdown: [
                    {
                        time: "21:00 - 21:20",
                        task: "Focused Reading Session",
                        description: "Islamic books, programming books, business/finance books, biographies of successful people"
                    },
                    {
                        time: "21:20 - 21:40",
                        task: "Side Project Development",
                        description: "Work on personal website, update trading journal, contribute to GitHub projects"
                    },
                    {
                        time: "21:40 - 22:20",
                        task: "Framework Creation Session",
                        description: "Document today's problems, design systematic solutions, create reusable frameworks, write guides for others, combine tech logic with spiritual wisdom"
                    },
                    {
                        time: "22:20 - 22:30",
                        task: "Learning Documentation",
                        description: "Take notes on new learnings, document framework progress, prepare for publishing"
                    }
                ]
            },
            {
                id: "closing",
                time: "22:30 - 23:00",
                activity: "Day Closing Ritual",
                description: "Gratitude journal (10 min): 3 things grateful for today, progress made toward dreams, lessons learned. Tomorrow's intention setting, final dua, set phone to silent and charge outside bedroom, prepare for quality sleep",
                category: "spiritual",
                benefits: ["Gratitude practice", "Goal setting", "Quality sleep preparation", "Mental peace"],
                islamicQuote: "Ya Allah, make tomorrow better than today",
                icon: "heart",
                detailedBreakdown: [
                    {
                        time: "22:30 - 22:40",
                        task: "Gratitude Journaling",
                        description: "Write 3 things grateful for today, progress made toward dreams, lessons learned"
                    },
                    {
                        time: "22:40 - 22:50",
                        task: "Tomorrow's Intention Setting",
                        description: "Plan tomorrow's priorities, set positive intentions, visualize successful day ahead"
                    },
                    {
                        time: "22:50 - 23:00",
                        task: "Sleep Preparation",
                        description: "Final dua, set phone to silent, charge outside bedroom, prepare mind and body for quality sleep"
                    }
                ]
            }
        ]
    }
]