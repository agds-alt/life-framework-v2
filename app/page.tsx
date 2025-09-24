'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import TimelineOverview from '@/components/TimelineOverview'
import DailyRoutine from '@/components/DailyRoutine'
import WeeklySchedule from '@/components/WeeklySchedule'  // ← ADD THIS
import DreamsGallery from '@/components/DreamsGallery'
import ProgressTracker from '@/components/ProgressTracker'
import TransformationStory from '@/components/TransformationStory'

export default function Home() {
    return (
        <main className="relative">
            <Navigation />
            <HeroSection />
            <TimelineOverview />
            <DailyRoutine />
            <WeeklySchedule />  {/* ← ADD THIS LINE */}
            <DreamsGallery />
            <ProgressTracker />
            <TransformationStory />
        </main>
    )
}