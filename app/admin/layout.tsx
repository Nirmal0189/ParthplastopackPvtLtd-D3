import { ReactNode } from 'react';
import { Metadata } from 'next';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import { ThemeProvider } from '@/components/shared/ThemeProvider';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Parth Plasto Pack',
  description: 'Enterprise Admin Dashboard for Parth Plasto Pack Pvt. Ltd.',
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors">
        {/* Sidebar */}
        <AdminSidebar />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:pl-64 min-h-screen">
          <AdminHeader />
          <main className="flex-1 p-6 md:p-8 overflow-x-hidden">
            <div className="max-w-7xl mx-auto w-full">
              {children}
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
