/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Compass } from 'lucide-react';
import { Birthstone, ZodiacSign } from '../types';

interface AstrologicalCardProps {
  zodiac: ZodiacSign;
  birthstone: Birthstone;
  chineseZodiac: string;
}

export function AstrologicalCard({
  zodiac,
  birthstone,
  chineseZodiac,
}: AstrologicalCardProps) {
  return (
    <div
      id="astrological-profile-card"
      className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/60 shadow-md flex flex-col justify-between transition-colors duration-300"
    >
      <div>
        <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
          <Compass className="w-5 h-5 text-indigo-500" />
          <span>Astrological Profile</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
          {/* Zodiac Sign Card */}
          <div
            id="zodiac-subcard"
            className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-100 dark:border-indigo-900/50 flex items-center gap-3 transition-colors duration-300"
          >
            <div
              id="zodiac-icon-badge"
              className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl font-bold shrink-0 border border-emerald-200 dark:border-emerald-800"
            >
              <span>{zodiac.symbol}</span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-wider">
                Zodiac Sign
              </p>
              <p
                id="zodiac-name"
                className="font-bold text-slate-800 dark:text-slate-100 text-base"
              >
                {zodiac.name}
              </p>
              <p
                id="zodiac-dates"
                className="text-[11px] text-slate-500 dark:text-slate-400"
              >
                {zodiac.dates}
              </p>
            </div>
          </div>

          {/* Birthstone Card */}
          <div
            id="birthstone-subcard"
            className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-100 dark:border-amber-900/50 flex items-center gap-3 transition-colors duration-300"
          >
            <div
              id="birthstone-icon-badge"
              className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl font-bold shrink-0 border border-sky-200 dark:border-sky-800"
            >
              <span>{birthstone.icon}</span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">
                Birthstone
              </p>
              <p
                id="birthstone-name"
                className="font-bold text-slate-800 dark:text-slate-100 text-base"
              >
                {birthstone.name}
              </p>
              <p
                id="birthstone-meaning"
                className="text-[11px] text-slate-500 dark:text-slate-400"
              >
                {birthstone.meaning}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chinese Zodiac Year */}
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/50 flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
        <span>
          Chinese Zodiac Year:{' '}
          <strong
            id="chinese-zodiac-text"
            className="text-slate-700 dark:text-slate-200 font-semibold"
          >
            {chineseZodiac}
          </strong>
        </span>
      </div>
    </div>
  );
}
