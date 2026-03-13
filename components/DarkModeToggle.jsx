'use client';

import { useTheme } from '../context/ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
    >
      <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </span>
      {darkMode ? (
        <Sun className="w-5 h-5 text-amber-500" />
      ) : (
        <Moon className="w-5 h-5 text-slate-500" />
      )}
    </button>
  );
}

