/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function Footer() {
  return (
    <footer
      id="main-footer"
      className="w-full border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 py-6 mt-12 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 text-center text-xs text-slate-500 dark:text-slate-400">
        <p id="footer-disclaimer">
          ChronoAge — Client-side Age & Life Metric Analytics. No server storage or authentication required.
        </p>
      </div>
    </footer>
  );
}
