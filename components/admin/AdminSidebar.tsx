'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Package,
  Tags,
  Filter,
  ShoppingCart,
  MessageSquare,
  Users,
  MessageCircle,
  Image as ImageIcon,
  FileText,
  Download,
  Briefcase,
  BarChart,
  UserCog,
  Settings,
  LogOut,
  Settings2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
// import { signOut } from 'next-auth/react'; // Will implement once next-auth is fully setup

const menuItems = [
  { title: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
  { title: 'Products', icon: Package, href: '/admin/products' },
  { title: 'Categories', icon: Tags, href: '/admin/categories' },
  { title: 'Filters', icon: Filter, href: '/admin/filters' },
  { title: 'Inquiries', icon: MessageSquare, href: '/admin/inquiries' },
  { title: 'Customers', icon: Users, href: '/admin/customers' },
  { title: 'Testimonials', icon: MessageCircle, href: '/admin/testimonials' },
  { title: 'Gallery', icon: ImageIcon, href: '/admin/gallery' },
  { title: 'Blog', icon: FileText, href: '/admin/blog' },
  { title: 'Downloads', icon: Download, href: '/admin/downloads' },
  { title: 'Careers', icon: Briefcase, href: '/admin/careers' },
  { title: 'Analytics', icon: BarChart, href: '/admin/analytics' },
  { title: 'Users', icon: UserCog, href: '/admin/users' },
  { title: 'CMS', icon: Settings2, href: '/admin/cms' },
  { title: 'Settings', icon: Settings, href: '/admin/settings' },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-slate-900 border-r border-gray-100 dark:border-slate-800 flex flex-col z-50">
      <div className="h-16 flex items-center px-6 border-b border-gray-100 dark:border-slate-800">
        <Link href="/admin" className="font-display font-bold text-xl tracking-tight text-primary">
          AdminPanel<span className="text-accent">.</span>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/admin');
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-primary text-white shadow-md shadow-primary/20" 
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
              )}
            >
              <Icon size={18} className={cn("shrink-0", isActive ? "text-white" : "")} />
              {item.title}
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-gray-100 dark:border-slate-800">
        <button
          onClick={() => {}} // signOut({ callbackUrl: '/admin/login' })
          className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
