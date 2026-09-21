/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Cake, Sparkles } from 'lucide-react';

interface NextBirthdayCardProps {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  dayOfWeek: string;
  isToday: boolean;
}

export function NextBirthdayCard({
  months,
  days,
  hours,
  minutes,
  dayOfWeek,
  isToday,
}: NextBirthdayCardProps) {
  return (
    <div
      id="next-birthday-card"
      className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/60 shadow-md flex flex-col justify-between transition-colors duration-300"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <Cake className="w-5 h-5 text-pink-500" />
            <span>Next Birthday Countdown</span>
          </h3>
          <span
            id="next-bday-day-badge"
            className="text-xs font-medium px-2.5 py-1 rounded-full bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400 border border-pink-200 dark:border-pink-800"
          >
            {dayOfWeek}
          </span>
        </div>

        {/* 4 Countdown Boxes */}
        <div className="grid grid-cols-4 gap-2 text-center my-6">
          {/* Months */}
          <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl transition-colors duration-300">
            <span
              id="bday-months"
              className="block text-2xl font-bold text-pink-600 dark:text-pink-400"
            >
              {months}
            </span>
            <span className="text-[10px] uppercase font-bold text-slate-400">
              Months
            </span>
          </div>

          {/* Days */}
          <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl transition-colors duration-300">
            <span
              id="bday-days"
              className="block text-2xl font-bold text-pink-600 dark:text-pink-400"
            >
              {days}
            </span>
            <span className="text-[10px] uppercase font-bold text-slate-400">
              Days
            </span>
          </div>

          {/* Hours */}
          <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl transition-colors duration-300">
            <span
              id="bday-hours"
              className="block text-2xl font-bold text-pink-600 dark:text-pink-400"
            >
              {hours}
            </span>
            <span className="text-[10px] uppercase font-bold text-slate-400">
              Hours
            </span>
          </div>

          {/* Minutes */}
          <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl transition-colors duration-300">
            <span
              id="bday-minutes"
              className="block text-2xl font-bold text-pink-600 dark:text-pink-400"
            >
              {minutes}
            </span>
            <span className="text-[10px] uppercase font-bold text-slate-400">
              Mins
            </span>
          </div>
        </div>
      </div>

      {/* Birthday Message Box */}
      <div
        id="bday-message-box"
        className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-100 dark:border-slate-700/50 flex items-center gap-3 transition-colors duration-300"
      >
        <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
        <p
          id="bday-message"
          className="text-xs text-slate-600 dark:text-slate-300 font-medium"
        >
          {isToday
            ? '🎉 Happy Birthday! Enjoy your special day!'
            : dayOfWeek !== '--'
            ? `Your next birthday will fall on a ${dayOfWeek}.`
            : 'Counting down to your upcoming celebration!'}
        </p>
      </div>
    </div>
  );
}
