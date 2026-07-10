'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import {
  LayoutDashboard,
  Package,
  Tags,
  ShoppingCart,
  MessageSquare,
  Users,
  Image as ImageIcon,
  FileText,
  Download,
  Briefcase,
  BarChart,
  UserCog,
  Settings,
  LogOut,
  Settings2,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAdminStore } from '@/lib/adminStore';

const menuItems = [
  { title: 'Dashboard', icon: LayoutDashboard, href: '/admin', roles: ['SUPER_ADMIN', 'ADMIN', 'SALES', 'MARKETING', 'EMPLOYEE'] },
  { title: 'Products', icon: Package, href: '/admin/products', roles: ['SUPER_ADMIN', 'ADMIN', 'SALES', 'MARKETING', 'EMPLOYEE'] },
  { title: 'Categories', icon: Tags, href: '/admin/categories', roles: ['SUPER_ADMIN', 'ADMIN', 'SALES', 'MARKETING', 'EMPLOYEE'] },
  { title: 'Inquiries', icon: MessageSquare, href: '/admin/inquiries', roles: ['SUPER_ADMIN', 'ADMIN', 'SALES', 'MARKETING', 'EMPLOYEE'] },
  { title: 'Customers', icon: Users, href: '/admin/customers', roles: ['SUPER_ADMIN', 'ADMIN', 'SALES'] },
  { title: 'Gallery', icon: ImageIcon, href: '/admin/gallery', roles: ['SUPER_ADMIN', 'ADMIN', 'MARKETING'] },
  { title: 'Blog', icon: FileText, href: '/admin/blog', roles: ['SUPER_ADMIN', 'ADMIN', 'MARKETING'] },
  { title: 'Downloads', icon: Download, href: '/admin/downloads', roles: ['SUPER_ADMIN', 'ADMIN', 'MARKETING'] },
  { title: 'Careers', icon: Briefcase, href: '/admin/careers', roles: ['SUPER_ADMIN', 'ADMIN'] },
  { title: 'Analytics', icon: BarChart, href: '/admin/analytics', roles: ['SUPER_ADMIN', 'ADMIN', 'SALES', 'MARKETING'] },
  { title: 'Users', icon: UserCog, href: '/admin/users', roles: ['SUPER_ADMIN', 'ADMIN'] },
  { title: 'CMS', icon: Settings2, href: '/admin/cms', roles: ['SUPER_ADMIN', 'ADMIN'] },
  { title: 'Settings', icon: Settings, href: '/admin/settings', roles: ['SUPER_ADMIN', 'ADMIN'] },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { isSidebarOpen, setSidebarOpen } = useAdminStore();
  const { data: session } = useSession();
  
  const userRole = (session?.user as any)?.role || 'EMPLOYEE';

  return (
    <>
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={cn(
        "fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-100 flex flex-col z-50 transform transition-transform duration-300 lg:translate-x-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-100">
          <Link href="/admin" className="font-display font-bold text-xl tracking-tight text-primary">
            AdminPanel<span className="text-accent">.</span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-2 -mr-2 text-slate-500 hover:text-slate-900:text-white rounded-lg">
            <X size={20} />
          </button>
        </div>

      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
        {menuItems
          .filter(item => item.roles.includes(userRole))
          .map((item) => {
          const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/admin');
          const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-primary text-white shadow-md shadow-primary/20" 
                  : "text-slate-600 hover:bg-slate-50:bg-slate-800 hover:text-slate-900:text-slate-200"
              )}
            >
              <Icon size={18} className={cn("shrink-0", isActive ? "text-white" : "")} />
              {item.title}
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-gray-100">
        <button
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-sm font-medium text-red-600 hover:bg-red-50:bg-red-900/10 transition-colors"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
    </>
  );
}
