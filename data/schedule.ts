// Will be filled manually
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
                description: "Subuh prayer with full presence plus post-prayer dzikr (100x total)",
                category: "spiritual",
                benefits: ["Spiritual grounding", "Divine protection", "Day blessing"],
                islamicQuote: "Ya Allah, make me among those who succeed in dunya and akhirah",
                icon: "sun"
            },
            {
                id: "spiritual-time",
                time: "04:50 - 06:00",
                activity: "Extended Spiritual Time",
                description: "Quran reading for 30 minutes, extended duas, spiritual journaling",
                category: "spiritual",
                benefits: ["Quranic knowledge", "Spiritual growth", "Life direction"],
                icon: "book"
            },
            {
                id: "exercise",
                time: "06:00 - 06:25",
                activity: "Physical Activation",
                description: "Stretching, light jog for 15 minutes, basic exercises, quick shower",
                category: "physical",
                benefits: ["Physical fitness", "Energy boost", "Health improvement"],
                icon: "dumbbell"
            },
            {
                id: "learning",
                time: "06:25 - 08:00",
                activity: "Learning Power Hour",
                description: "Coding practice for 45 minutes plus Trading analysis for 15 minutes",
                category: "learning",
                benefits: ["Skill development", "Career advancement", "Financial knowledge"],
                icon: "monitor"
            },
            {
                id: "day-prep",
                time: "08:00 - 08:30",
                activity: "Day Preparation",
                description: "Review goals, check messages for maximum 15 minutes, mental preparation",
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
                description: "Main work and projects using Pomodoro Technique (25 min work, 5 min break)",
                category: "work",
                benefits: ["Productivity", "Income generation", "Skill application"],
                icon: "laptop"
            },
            {
                id: "dhuhur",
                time: "12:00 - 12:30",
                activity: "Dhuhur and Midday Reset",
                description: "Dhuhur prayer, gratitude moment, healthy lunch",
                category: "spiritual",
                benefits: ["Spiritual recharge", "Physical nutrition", "Mental reset"],
                islamicQuote: "Ya Allah, barakahi sisa hari ini",
                icon: "sun"
            },
            {
                id: "deep-work-2",
                time: "12:30 - 15:30",
                activity: "Deep Work Session 2",
                description: "Learning and development, advanced tutorials, business planning",
                category: "learning",
                benefits: ["Knowledge expansion", "Future preparation", "Skill mastery"],
                icon: "growth"
            },
            {
                id: "asr",
                time: "15:30 - 16:00",
                activity: "Asr and Afternoon Break",
                description: "Asr prayer, light snack, fresh air, quick social check-in",
                category: "spiritual",
                benefits: ["Spiritual connection", "Physical rest", "Social maintenance"],
                icon: "sun"
            },
            {
                id: "skill-building",
                time: "16:00 - 18:00",
                activity: "Skill Building and Practice",
                description: "Hands-on projects, trading execution, portfolio work, mini workout",
                category: "work",
                benefits: ["Practical experience", "Income execution", "Physical maintenance"],
                icon: "tools"
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
                activity: "Maghrib and Reflection",
                description: "Maghrib prayer, evening duas for family and future spouse, light Quran",
                category: "spiritual",
                benefits: ["Evening gratitude", "Family prayers", "Spiritual reflection"],
                islamicQuote: "Ya Allah, choose for me a righteous wife, bless us with sholeh children",
                icon: "moon"
            },
            {
                id: "social-time",
                time: "19:00 - 20:30",
                activity: "Social and Family Time",
                description: "Healthy dinner, family calls, light entertainment for 30 minutes, evening walk",
                category: "family",
                benefits: ["Social connection", "Family bonds", "Life balance", "Reflection"],
                icon: "users"
            },
            {
                id: "isya",
                time: "20:30 - 21:00",
                activity: "Isya and Night Preparation",
                description: "Isya prayer, night supplications, tomorrow's mental preparation",
                category: "spiritual",
                benefits: ["Night protection", "Sleep preparation", "Divine connection"],
                icon: "moon"
            },
            {
                id: "growth-time",
                time: "21:00 - 22:30",
                activity: "Growth and Framework Creation",
                description: "Reading for 20 minutes, Side projects for 20 minutes, Framework creation for 40 minutes",
                category: "learning",
                benefits: ["Knowledge growth", "System building", "Content creation", "Passive income preparation"],
                icon: "book"
            },
            {
                id: "closing",
                time: "22:30 - 23:00",
                activity: "Day Closing Ritual",
                description: "Gratitude journal, tomorrow's intentions, final dua, sleep preparation",
                category: "spiritual",
                benefits: ["Gratitude practice", "Goal setting", "Quality sleep preparation"],
                islamicQuote: "Ya Allah, make tomorrow better than today",
                icon: "heart"
            }
        ]
    }
]