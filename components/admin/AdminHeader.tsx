'use client';

import { Menu, Bell } from 'lucide-react';
import { useAdminStore } from '@/lib/adminStore';

export default function AdminHeader() {
  const { toggleSidebar } = useAdminStore();

  return (
    <header className="h-16 bg-white backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        {/* Mobile menu toggle would go here */}
        <button onClick={toggleSidebar} className="lg:hidden p-2 -ml-2 text-slate-500 hover:text-slate-900 rounded-lg">
          <Menu size={20} />
        </button>
      </div>

      <div className="flex items-center gap-4">

        {/* Notifications */}
        <button className="relative p-2 text-slate-500 hover:text-slate-900 rounded-lg transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
            A
          </div>
          <div className="hidden md:block text-sm">
            <p className="font-semibold text-slate-900 leading-none mb-1">Admin</p>
            <p className="text-slate-500 text-xs leading-none">Super Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
