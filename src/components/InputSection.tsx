/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Calculator } from 'lucide-react';

interface InputSectionProps {
  dobString: string;
  targetDateString: string;
  onDobChange: (val: string) => void;
  onTargetDateChange: (val: string) => void;
  onResetToNow: () => void;
  onCalculate: () => void;
  onPresetYearsAgo: (years: number) => void;
  onPresetMillennial: () => void;
}

export function InputSection({
  dobString,
  targetDateString,
  onDobChange,
  onTargetDateChange,
  onResetToNow,
  onCalculate,
  onPresetYearsAgo,
  onPresetMillennial,
}: InputSectionProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate();
  };

  return (
    <div
      id="input-section-card"
      className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200/80 dark:border-slate-700/60 backdrop-blur-md mb-8 transition-colors duration-300"
    >
      <div className="mb-6">
        <h1
          id="main-title"
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100"
        >
          Calculate Your Exact Age
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
          Discover comprehensive insights, milestones, and trivia based on your birth date.
        </p>
      </div>

      <form
        id="age-calculator-form"
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end"
      >
        {/* Date of Birth Input */}
        <div className="md:col-span-5 space-y-2">
          <label
            htmlFor="dob-input"
            className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300"
          >
            Date of Birth
          </label>
          <div className="relative">
            <input
              type="datetime-local"
              id="dob-input"
              value={dobString}
              onChange={(e) => onDobChange(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all outline-none text-sm font-medium"
            />
          </div>
        </div>

        {/* Target Calculation Date Input */}
        <div className="md:col-span-5 space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="target-date-input"
              className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300"
            >
              Age At Date
            </label>
            <button
              type="button"
              id="reset-to-now-btn"
              onClick={onResetToNow}
              className="text-xs text-sky-600 dark:text-sky-400 font-semibold hover:underline cursor-pointer transition-colors"
            >
              Reset to Now
            </button>
          </div>
          <div className="relative">
            <input
              type="datetime-local"
              id="target-date-input"
              value={targetDateString}
              onChange={(e) => onTargetDateChange(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all outline-none text-sm font-medium"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            id="calculate-btn"
            className="w-full py-3.5 px-4 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-sky-500/25 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer active:scale-[0.98]"
          >
            <Calculator className="w-5 h-5" />
            <span>Calculate</span>
          </button>
        </div>
      </form>

      {/* Quick Date Shortcuts */}
      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/50 flex flex-wrap gap-2 items-center text-xs text-slate-500 dark:text-slate-400">
        <span className="font-medium">Presets:</span>
        <button
          type="button"
          id="preset-20-yrs"
          onClick={() => onPresetYearsAgo(20)}
          className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition cursor-pointer"
        >
          20 Yrs Ago
        </button>
        <button
          type="button"
          id="preset-30-yrs"
          onClick={() => onPresetYearsAgo(30)}
          className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition cursor-pointer"
        >
          30 Yrs Ago
        </button>
        <button
          type="button"
          id="preset-50-yrs"
          onClick={() => onPresetYearsAgo(50)}
          className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition cursor-pointer"
        >
          50 Yrs Ago
        </button>
        <button
          type="button"
          id="preset-year-2000"
          onClick={onPresetMillennial}
          className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition cursor-pointer"
        >
          Year 2000
        </button>
      </div>
    </div>
  );
}
