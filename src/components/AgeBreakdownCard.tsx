/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface AgeBreakdownCardProps {
  years: number;
  months: number;
  days: number;
  dayOfWeekBadge: string;
}

export function AgeBreakdownCard({
  years,
  months,
  days,
  dayOfWeekBadge,
}: AgeBreakdownCardProps) {
  return (
    <div
      id="exact-age-breakdown-card"
      className="bg-gradient-to-br from-sky-500 via-indigo-600 to-purple-600 rounded-3xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden"
    >
      {/* Decorative ambient glow */}
      <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10">
        {/* Header Badges */}
        <div className="flex items-center justify-between mb-4">
          <span
            id="breakdown-title-badge"
            className="text-xs uppercase font-bold tracking-widest bg-white/20 px-3 py-1 rounded-full text-white/90"
          >
            Exact Age Breakdown
          </span>
          <span
            id="day-of-week-badge"
            className="text-xs font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/20"
          >
            {dayOfWeekBadge}
          </span>
        </div>

        {/* 3 Large Stat Blocks */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center py-4">
          {/* Years */}
          <div
            id="primary-years-card"
            className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10 transition-transform duration-200 hover:scale-[1.02]"
          >
            <span
              id="primary-years"
              className="block text-3xl sm:text-5xl font-black tracking-tight"
            >
              {years}
            </span>
            <span className="text-xs sm:text-sm font-medium opacity-80 uppercase tracking-wider">
              Years
            </span>
          </div>

          {/* Months */}
          <div
            id="primary-months-card"
            className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10 transition-transform duration-200 hover:scale-[1.02]"
          >
            <span
              id="primary-months"
              className="block text-3xl sm:text-5xl font-black tracking-tight"
            >
              {months}
            </span>
            <span className="text-xs sm:text-sm font-medium opacity-80 uppercase tracking-wider">
              Months
            </span>
          </div>

          {/* Days */}
          <div
            id="primary-days-card"
            className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10 transition-transform duration-200 hover:scale-[1.02]"
          >
            <span
              id="primary-days"
              className="block text-3xl sm:text-5xl font-black tracking-tight"
            >
              {days}
            </span>
            <span className="text-xs sm:text-sm font-medium opacity-80 uppercase tracking-wider">
              Days
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
