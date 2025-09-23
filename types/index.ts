export interface ScheduleActivity {
    id: string
    time: string
    activity: string
    description: string
    category: 'spiritual' | 'physical' | 'learning' | 'work' | 'rest' | 'family'
    benefits: string[]
    islamicQuote?: string
    icon: string
}

export interface SchedulePeriod {
    period: string
    timeRange: string
    activities: ScheduleActivity[]
}

export interface Dream {
    id: string
    title: string
    description: string
    targetDate: string
    progress: number
    milestones: string[]
    icon: string
    color: string
}

export interface YearPhase {
    year: string
    title: string
    description: string
    goals: string[]
    financialTargets: string[]
    personalTargets: string[]
}

export interface TransformationMetric {
    aspect: string
    before: string
    after: string
    icon: string
}