// Will be filled manually
import { type ClassValue, clsx } from "clsx"

export function cn(...inputs: ClassValue[]) {
    return clsx(inputs)
}

export function formatTime(time: string): string {
    return time.replace(/(\d{2}):(\d{2})/, '$1:$2')
}

export function getCategoryColor(category: string): string {
    const colors = {
        spiritual: 'from-green-500 to-emerald-600',
        physical: 'from-blue-500 to-cyan-600',
        learning: 'from-purple-500 to-violet-600',
        work: 'from-orange-500 to-amber-600',
        rest: 'from-gray-400 to-gray-500',
        family: 'from-pink-500 to-rose-600'
    }
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600'
}

export function getCategoryIcon(category: string): string {
    const icons = {
        spiritual: 'moon',
        physical: 'dumbbell',
        learning: 'book-open',
        work: 'briefcase',
        rest: 'moon',
        family: 'users'
    }
    return icons[category as keyof typeof icons] || 'clock'
}

export function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId)
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
}

export function formatProgress(progress: number): string {
    return `${Math.round(progress)}%`
}

export function getTimeUntilTarget(targetDate: string): string {
    const target = new Date(targetDate)
    const now = new Date()
    const diffTime = target.getTime() - now.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays < 0) return "Achieved!"
    if (diffDays === 0) return "Today!"
    if (diffDays === 1) return "Tomorrow!"
    if (diffDays < 30) return `${diffDays} days`
    if (diffDays < 365) return `${Math.round(diffDays / 30)} months`
    return `${Math.round(diffDays / 365)} years`
}