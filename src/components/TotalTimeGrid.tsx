/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BarChart3 } from 'lucide-react';

interface TotalTimeGridProps {
  totalMonths: number;
  totalWeeks: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
}

export function TotalTimeGrid({
  totalMonths,
  totalWeeks,
  totalDays,
  totalHours,
  totalMinutes,
  totalSeconds,
}: TotalTimeGridProps) {
  return (
    <div id="total-time-lived-section" className="space-y-4">
      <h2
        id="total-time-heading"
        className="text-lg font-bold flex items-center gap-2 text-slate-900 dark:text-slate-100"
      >
        <BarChart3 className="w-5 h-5 text-sky-500" />
        <span>Total Time Lived</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {/* Total Months */}
        <div
          id="total-months-card"
          className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-sm transition-colors duration-300"
        >
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Total Months
          </p>
          <p
            id="total-months"
            className="text-xl font-bold mt-1 text-slate-800 dark:text-slate-100"
          >
            {totalMonths.toLocaleString()}
          </p>
        </div>

        {/* Total Weeks */}
        <div
          id="total-weeks-card"
          className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-sm transition-colors duration-300"
        >
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Total Weeks
          </p>
          <p
            id="total-weeks"
            className="text-xl font-bold mt-1 text-slate-800 dark:text-slate-100"
          >
            {totalWeeks.toLocaleString()}
          </p>
        </div>

        {/* Total Days */}
        <div
          id="total-days-card"
          className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-sm transition-colors duration-300"
        >
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Total Days
          </p>
          <p
            id="total-days"
            className="text-xl font-bold mt-1 text-slate-800 dark:text-slate-100"
          >
            {totalDays.toLocaleString()}
          </p>
        </div>

        {/* Total Hours */}
        <div
          id="total-hours-card"
          className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-sm transition-colors duration-300"
        >
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Total Hours
          </p>
          <p
            id="total-hours"
            className="text-xl font-bold mt-1 text-slate-800 dark:text-slate-100"
          >
            {totalHours.toLocaleString()}
          </p>
        </div>

        {/* Total Minutes */}
        <div
          id="total-minutes-card"
          className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-sm transition-colors duration-300"
        >
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Total Minutes
          </p>
          <p
            id="total-minutes"
            className="text-xl font-bold mt-1 text-slate-800 dark:text-slate-100"
          >
            {totalMinutes.toLocaleString()}
          </p>
        </div>

        {/* Total Seconds (Highlighted with blue left border) */}
        <div
          id="total-seconds-card"
          className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-sm border-l-4 border-l-sky-500 transition-colors duration-300"
        >
          <p className="text-xs font-semibold text-sky-600 dark:text-sky-400">
            Total Seconds
          </p>
          <p
            id="total-seconds"
            className="text-xl font-bold mt-1 text-sky-600 dark:text-sky-400"
          >
            {totalSeconds.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
