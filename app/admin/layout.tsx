import { ReactNode } from 'react';
import { Metadata } from 'next';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Parth Plasto Pack',
  description: 'Enterprise Admin Dashboard for Parth Plasto Pack Pvt. Ltd.',
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 transition-colors w-full max-w-[100vw] overflow-x-hidden relative">
      {/* Sidebar */}
      <AdminSidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:pl-64 min-h-screen w-full max-w-[100vw] lg:max-w-full overflow-x-hidden">
        <AdminHeader />
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-x-hidden w-full box-border">
          <div className="max-w-7xl mx-auto w-full box-border">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
