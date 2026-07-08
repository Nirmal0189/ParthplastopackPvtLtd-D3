'use client';

import { Menu, Search, Bell } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function AdminHeader() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 flex items-center justify-between px-6 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        {/* Mobile menu toggle would go here */}
        <button className="lg:hidden p-2 -ml-2 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg">
          <Menu size={20} />
        </button>
        
        {/* Search */}
        <div className="relative hidden sm:block">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="Search everything..."
            className="w-64 md:w-80 h-9 pl-9 pr-4 rounded-full bg-slate-50 dark:bg-slate-800 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-900 text-sm outline-none transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors"
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
        )}

        {/* Notifications */}
        <button className="relative p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-slate-700">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
          <div className="hidden md:block text-sm">
            <p className="font-semibold text-slate-900 dark:text-white leading-none mb-1">Admin</p>
            <p className="text-slate-500 text-xs leading-none">Super Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
