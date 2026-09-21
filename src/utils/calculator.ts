/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AgeCalculationResult, Birthstone, ZodiacSign } from '../types';

export const ZODIAC_SIGNS: ZodiacSign[] = [
  { name: 'Capricorn', symbol: '♑', start: [12, 22], end: [1, 19], dates: 'Dec 22 - Jan 19' },
  { name: 'Aquarius', symbol: '♒', start: [1, 20], end: [2, 18], dates: 'Jan 20 - Feb 18' },
  { name: 'Pisces', symbol: '♓', start: [2, 19], end: [3, 20], dates: 'Feb 19 - Mar 20' },
  { name: 'Aries', symbol: '♈', start: [3, 21], end: [4, 19], dates: 'Mar 21 - Apr 19' },
  { name: 'Taurus', symbol: '♉', start: [4, 20], end: [5, 20], dates: 'Apr 20 - May 20' },
  { name: 'Gemini', symbol: '♊', start: [5, 21], end: [6, 20], dates: 'May 21 - Jun 20' },
  { name: 'Cancer', symbol: '♋', start: [6, 21], end: [7, 22], dates: 'Jun 21 - Jul 22' },
  { name: 'Leo', symbol: '♌', start: [7, 23], end: [8, 22], dates: 'Jul 23 - Aug 22' },
  { name: 'Virgo', symbol: '♍', start: [8, 23], end: [9, 22], dates: 'Aug 23 - Sep 22' },
  { name: 'Libra', symbol: '♎', start: [9, 23], end: [10, 22], dates: 'Sep 23 - Oct 22' },
  { name: 'Scorpio', symbol: '♏', start: [10, 23], end: [11, 21], dates: 'Oct 23 - Nov 21' },
  { name: 'Sagittarius', symbol: '♐', start: [11, 22], end: [12, 21], dates: 'Nov 22 - Dec 21' },
];

export const BIRTHSTONES: Birthstone[] = [
  { name: 'Garnet', icon: '🔴', meaning: 'Protection & Loyalty' },
  { name: 'Amethyst', icon: '💜', meaning: 'Wisdom & Courage' },
  { name: 'Aquamarine', icon: '🩵', meaning: 'Serenity & Clarity' },
  { name: 'Diamond', icon: '💎', meaning: 'Strength & Everlasting Love' },
  { name: 'Emerald', icon: '💚', meaning: 'Rebirth & Growth' },
  { name: 'Pearl', icon: '⚪', meaning: 'Purity & Balance' },
  { name: 'Ruby', icon: '❤️', meaning: 'Passion & Energy' },
  { name: 'Peridot', icon: '🟢', meaning: 'Good Fortune & Peace' },
  { name: 'Sapphire', icon: '💙', meaning: 'Focus & Integrity' },
  { name: 'Opal', icon: '🌈', meaning: 'Hope & Creativity' },
  { name: 'Topaz', icon: '💛', meaning: 'Joy & Abundance' },
  { name: 'Turquoise', icon: '🩵', meaning: 'Healing & Good Luck' },
];

export const CHINESE_ZODIACS = [
  'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake',
  'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'
];

export const DAYS_OF_WEEK = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

/**
 * Format date to ISO string for datetime-local input (YYYY-MM-DDTHH:mm)
 */
export function formatToDateTimeLocal(date: Date): string {
  const d = new Date(date);
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 16);
}

/**
 * Get Zodiac sign for given month (1-12) and day (1-31)
 */
export function getZodiacSign(month: number, day: number): ZodiacSign {
  const match = ZODIAC_SIGNS.find((z) => {
    if (z.name === 'Capricorn') {
      return (month === 12 && day >= 22) || (month === 1 && day <= 19);
    }
    return (month === z.start[0] && day >= z.start[1]) || (month === z.end[0] && day <= z.end[1]);
  });
  return match || ZODIAC_SIGNS[0];
}

/**
 * Calculate next birthday details
 */
export function calculateNextBirthday(dob: Date, targetDate: Date) {
  let nextBday = new Date(
    targetDate.getFullYear(),
    dob.getMonth(),
    dob.getDate(),
    dob.getHours(),
    dob.getMinutes()
  );

  if (nextBday < targetDate) {
    nextBday.setFullYear(nextBday.getFullYear() + 1);
  }

  const diffMs = nextBday.getTime() - targetDate.getTime();
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  // Months estimation
  let months = 0;
  let tempDate = new Date(targetDate);
  while (true) {
    const testDate = new Date(tempDate);
    testDate.setMonth(testDate.getMonth() + 1);
    if (testDate <= nextBday) {
      months++;
      tempDate = testDate;
    } else {
      break;
    }
  }

  const remDays = Math.floor((nextBday.getTime() - tempDate.getTime()) / (1000 * 60 * 60 * 24));
  const dayOfWeek = DAYS_OF_WEEK[nextBday.getDay()];
  const isToday = months === 0 && remDays === 0 && totalDays === 0 && hours < 24;

  return {
    months,
    days: remDays,
    hours,
    minutes,
    dayOfWeek,
    isToday,
    date: nextBday,
  };
}

/**
 * Primary age calculation function
 */
export function calculateAge(dob: Date, targetDate: Date): AgeCalculationResult {
  const isFuture = dob.getTime() > targetDate.getTime();

  const dayOfWeekBorn = DAYS_OF_WEEK[dob.getDay()];

  if (isFuture) {
    const zodiac = getZodiacSign(dob.getMonth() + 1, dob.getDate());
    const birthstone = BIRTHSTONES[dob.getMonth()] || BIRTHSTONES[0];
    const chineseIndex = (dob.getFullYear() - 4) % 12;
    const chineseZodiac = CHINESE_ZODIACS[chineseIndex >= 0 ? chineseIndex : chineseIndex + 12];

    return {
      dob,
      targetDate,
      isFuture: true,
      dayOfWeekBorn: 'Date in future!',
      years: 0,
      months: 0,
      days: 0,
      totalMonths: 0,
      totalWeeks: 0,
      totalDays: 0,
      totalHours: 0,
      totalMinutes: 0,
      totalSeconds: 0,
      nextBirthday: {
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        dayOfWeek: '--',
        isToday: false,
        date: dob,
      },
      zodiac,
      birthstone,
      chineseZodiac,
      heartbeats: 0,
      breaths: 0,
      sleepYears: 0,
      earthOrbits: 0,
    };
  }

  // Exact Years, Months, Days breakdown
  let years = targetDate.getFullYear() - dob.getFullYear();
  let months = targetDate.getMonth() - dob.getMonth();
  let days = targetDate.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  // Total times
  const diffMs = targetDate.getTime() - dob.getTime();
  const totalSeconds = Math.floor(diffMs / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  const totalWeeks = Number((totalDays / 7).toFixed(1));
  const totalMonths = Number((years * 12 + months + days / 30).toFixed(1));

  // Next Birthday
  const nextBirthday = calculateNextBirthday(dob, targetDate);

  // Zodiac & Birthstone
  const month = dob.getMonth() + 1;
  const day = dob.getDate();
  const zodiac = getZodiacSign(month, day);
  const birthstone = BIRTHSTONES[dob.getMonth()] || BIRTHSTONES[0];

  // Chinese Zodiac
  const year = dob.getFullYear();
  const chineseIndex = (year - 4) % 12;
  const chineseZodiac = CHINESE_ZODIACS[chineseIndex >= 0 ? chineseIndex : chineseIndex + 12];

  // Life Metrics
  const heartbeats = Math.floor((totalSeconds / 60) * 80);
  const breaths = Math.floor((totalSeconds / 60) * 16);
  const sleepYears = Number((years / 3).toFixed(1));
  const earthOrbits = Number((totalDays / 365.25).toFixed(2));

  return {
    dob,
    targetDate,
    isFuture: false,
    dayOfWeekBorn: `Born on a ${dayOfWeekBorn}`,
    years,
    months,
    days,
    totalMonths,
    totalWeeks,
    totalDays,
    totalHours,
    totalMinutes,
    totalSeconds,
    nextBirthday,
    zodiac,
    birthstone,
    chineseZodiac,
    heartbeats,
    breaths,
    sleepYears,
    earthOrbits,
  };
}
