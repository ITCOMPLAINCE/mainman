/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Activity, Globe, Heart, Moon, Wind } from 'lucide-react';

interface LifeMilestonesCardProps {
  heartbeats: number;
  breaths: number;
  sleepYears: number;
  earthOrbits: number;
}

export function LifeMilestonesCard({
  heartbeats,
  breaths,
  sleepYears,
  earthOrbits,
}: LifeMilestonesCardProps) {
  return (
    <div
      id="life-metrics-card"
      className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/60 shadow-md transition-colors duration-300"
    >
      <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
        <Activity className="w-5 h-5 text-rose-500" />
        <span>Life Metrics & Milestones</span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Heartbeats */}
        <div
          id="stat-heartbeats-card"
          className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700/50 transition-colors duration-300"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-rose-100 dark:bg-rose-950/60 text-rose-500">
              <Heart className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Heartbeats
            </span>
          </div>
          <p
            id="stat-heartbeats"
            className="text-lg font-extrabold text-slate-800 dark:text-slate-100"
          >
            {heartbeats.toLocaleString()}
          </p>
          <span className="text-[10px] text-slate-400">Estimated ~80 bpm</span>
        </div>

        {/* Breaths */}
        <div
          id="stat-breaths-card"
          className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700/50 transition-colors duration-300"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-950/60 text-teal-500">
              <Wind className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Breaths Taken
            </span>
          </div>
          <p
            id="stat-breaths"
            className="text-lg font-extrabold text-slate-800 dark:text-slate-100"
          >
            {breaths.toLocaleString()}
          </p>
          <span className="text-[10px] text-slate-400">Estimated ~16 bpm</span>
        </div>

        {/* Time Sleeping */}
        <div
          id="stat-sleep-card"
          className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700/50 transition-colors duration-300"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-500">
              <Moon className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Time Sleeping
            </span>
          </div>
          <p
            id="stat-sleep"
            className="text-lg font-extrabold text-slate-800 dark:text-slate-100"
          >
            {sleepYears} Years
          </p>
          <span className="text-[10px] text-slate-400">Based on ~8 hrs/day</span>
        </div>

        {/* Earth Orbits */}
        <div
          id="stat-orbits-card"
          className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700/50 transition-colors duration-300"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-500">
              <Globe className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Earth Orbits
            </span>
          </div>
          <p
            id="stat-orbits"
            className="text-lg font-extrabold text-slate-800 dark:text-slate-100"
          >
            {earthOrbits.toFixed(2)} Revolutions
          </p>
          <span className="text-[10px] text-slate-400">Trips around the Sun</span>
        </div>
      </div>
    </div>
  );
}
