/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ZodiacSign {
  name: string;
  symbol: string;
  start: [number, number]; // [month, day]
  end: [number, number];   // [month, day]
  dates: string;
  element?: string;
}

export interface Birthstone {
  name: string;
  icon: string;
  meaning: string;
  colorHex?: string;
}

export interface AgeCalculationResult {
  dob: Date;
  targetDate: Date;
  isFuture: boolean;
  dayOfWeekBorn: string;
  
  // Exact breakdown
  years: number;
  months: number;
  days: number;
  
  // Total Time Lived
  totalMonths: number;
  totalWeeks: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
  
  // Next Birthday
  nextBirthday: {
    months: number;
    days: number;
    hours: number;
    minutes: number;
    dayOfWeek: string;
    isToday: boolean;
    date: Date;
  };
  
  // Astrological
  zodiac: ZodiacSign;
  birthstone: Birthstone;
  chineseZodiac: string;
  
  // Life Metrics & Milestones
  heartbeats: number;
  breaths: number;
  sleepYears: number;
  earthOrbits: number;
}
