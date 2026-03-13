'use client';

import { Menu } from 'lucide-react';
import { useTheme } from '../context/ThemeProvider';

export default function MobileHeader() {
  const { setSidebarOpen } = useTheme();
  
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-30 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-4 py-3 flex items-center justify-between">
      <button 
        onClick={() => setSidebarOpen(true)}
        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
      >
        <Menu className="w-6 h-6 text-slate-600 dark:text-slate-300" />
      </button>
      <h1 className="text-lg font-semibold text-slate-800 dark:text-white">Admin Dashboard</h1>
      <div className="w-10"></div>
    </div>
  );
}

