'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { Package, MessageSquare, Users, Eye } from 'lucide-react';

const stats = [
  { title: 'Total Products', value: '0', change: '+12%', icon: Package, color: 'bg-blue-500' },
  { title: 'Pending Quotations', value: '0', change: '+5%', icon: MessageSquare, color: 'bg-orange-500' },
  { title: 'Total Visitors', value: '0', change: '+22%', icon: Eye, color: 'bg-purple-500' },
  { title: 'New Leads', value: '0', change: '+18%', icon: Users, color: 'bg-emerald-500' },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Dashboard Overview</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Welcome back, Admin! Here is what's happening today.</p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              variants={staggerItem}
              className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.color} bg-opacity-10 dark:bg-opacity-20`}>
                  <Icon size={24} className={stat.color.replace('bg-', 'text-')} />
                </div>
                <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-md">
                  {stat.change}
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{stat.title}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Placeholder for Charts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm h-96 flex items-center justify-center"
        >
          <p className="text-slate-400">Monthly Sales Graph will render here</p>
        </motion.div>

        {/* Placeholder for Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm h-96 flex items-center justify-center"
        >
          <p className="text-slate-400">Recent Activity Timeline</p>
        </motion.div>
      </div>
    </div>
  );
}
