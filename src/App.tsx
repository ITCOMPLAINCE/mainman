/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { AgeBreakdownCard } from './components/AgeBreakdownCard';
import { AstrologicalCard } from './components/AstrologicalCard';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { InputSection } from './components/InputSection';
import { LifeMilestonesCard } from './components/LifeMilestonesCard';
import { NextBirthdayCard } from './components/NextBirthdayCard';
import { TotalTimeGrid } from './components/TotalTimeGrid';
import { AgeCalculationResult } from './types';
import { calculateAge, formatToDateTimeLocal } from './utils/calculator';

export default function App() {
  // Theme state
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('chronoage_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Synchronize document theme class
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('chronoage_theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('chronoage_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  // Live ticking state
  const [isLiveTicking, setIsLiveTicking] = useState<boolean>(true);
  const toggleLiveTicking = () => setIsLiveTicking((prev) => !prev);

  // Date states
  const [dobString, setDobString] = useState<string>(() => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 25);
    return formatToDateTimeLocal(date);
  });

  const [targetDateString, setTargetDateString] = useState<string>(() => {
    return formatToDateTimeLocal(new Date());
  });

  // Track if user explicitly picked a custom target date away from real-time
  const isAutoAdvancingRef = useRef<boolean>(true);

  // Calculation results
  const [result, setResult] = useState<AgeCalculationResult>(() => {
    const dob = new Date(dobString);
    const target = new Date(targetDateString);
    return calculateAge(dob, target);
  });

  // Perform calculation helper
  const performCalculation = useCallback(
    (dobVal = dobString, targetVal = targetDateString) => {
      const dob = new Date(dobVal);
      const target = targetVal ? new Date(targetVal) : new Date();
      if (!isNaN(dob.getTime()) && !isNaN(target.getTime())) {
        const calculated = calculateAge(dob, target);
        setResult(calculated);
      }
    },
    [dobString, targetDateString]
  );

  // Target date change handler
  const handleTargetDateChange = (val: string) => {
    setTargetDateString(val);
    const now = new Date();
    const selected = new Date(val);
    // If selected date is within 2 minutes of real-time, keep auto-advancing
    isAutoAdvancingRef.current = Math.abs(now.getTime() - selected.getTime()) < 120000;
    performCalculation(dobString, val);
  };

  // DOB change handler
  const handleDobChange = (val: string) => {
    setDobString(val);
    performCalculation(val, targetDateString);
  };

  // Reset target date to current moment
  const handleResetToNow = () => {
    const nowLocal = formatToDateTimeLocal(new Date());
    setTargetDateString(nowLocal);
    isAutoAdvancingRef.current = true;
    performCalculation(dobString, nowLocal);
  };

  // Presets
  const handlePresetYearsAgo = (years: number) => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - years);
    const formatted = formatToDateTimeLocal(date);
    setDobString(formatted);
    performCalculation(formatted, targetDateString);
  };

  const handlePresetMillennial = () => {
    const millennial = '2000-01-01T00:00';
    setDobString(millennial);
    performCalculation(millennial, targetDateString);
  };

  // Live ticking interval
  useEffect(() => {
    if (!isLiveTicking) return;

    const intervalId = setInterval(() => {
      if (isAutoAdvancingRef.current) {
        const now = new Date();
        const formatted = formatToDateTimeLocal(now);
        setTargetDateString(formatted);
        const dob = new Date(dobString);
        if (!isNaN(dob.getTime())) {
          setResult(calculateAge(dob, now));
        }
      } else {
        const dob = new Date(dobString);
        const target = new Date(targetDateString);
        if (!isNaN(dob.getTime()) && !isNaN(target.getTime())) {
          setResult(calculateAge(dob, target));
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isLiveTicking, dobString, targetDateString]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 flex flex-col justify-between transition-colors duration-300">
      {/* Navigation / Header */}
      <Header
        isDark={isDark}
        onToggleTheme={toggleTheme}
        isLiveTicking={isLiveTicking}
        onToggleLive={toggleLiveTicking}
      />

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow w-full space-y-8">
        {/* Input Card */}
        <InputSection
          dobString={dobString}
          targetDateString={targetDateString}
          onDobChange={handleDobChange}
          onTargetDateChange={handleTargetDateChange}
          onResetToNow={handleResetToNow}
          onCalculate={() => performCalculation()}
          onPresetYearsAgo={handlePresetYearsAgo}
          onPresetMillennial={handlePresetMillennial}
        />

        {/* Results Sections */}
        <div id="results-container" className="space-y-8">
          {/* Primary Age Highlight Card */}
          <AgeBreakdownCard
            years={result.years}
            months={result.months}
            days={result.days}
            dayOfWeekBadge={result.dayOfWeekBorn}
          />

          {/* Total Time Breakdown */}
          <TotalTimeGrid
            totalMonths={result.totalMonths}
            totalWeeks={result.totalWeeks}
            totalDays={result.totalDays}
            totalHours={result.totalHours}
            totalMinutes={result.totalMinutes}
            totalSeconds={result.totalSeconds}
          />

          {/* Two Columns: Birthday Countdown & Astrological Profile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NextBirthdayCard
              months={result.nextBirthday.months}
              days={result.nextBirthday.days}
              hours={result.nextBirthday.hours}
              minutes={result.nextBirthday.minutes}
              dayOfWeek={result.nextBirthday.dayOfWeek}
              isToday={result.nextBirthday.isToday}
            />

            <AstrologicalCard
              zodiac={result.zodiac}
              birthstone={result.birthstone}
              chineseZodiac={result.chineseZodiac}
            />
          </div>

          {/* Life Milestones & Metrics */}
          <LifeMilestonesCard
            heartbeats={result.heartbeats}
            breaths={result.breaths}
            sleepYears={result.sleepYears}
            earthOrbits={result.earthOrbits}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
