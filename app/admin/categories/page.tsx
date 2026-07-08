'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, MoreHorizontal, Edit, Trash2, Tags, ArrowUpDown } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const dummyCategories = [
  { id: '1', title: 'Protein Containers', slug: 'protein-containers', productsCount: 15, status: 'ACTIVE' },
  { id: '2', title: 'Medicine Jars', slug: 'medicine-jars', productsCount: 12, status: 'ACTIVE' },
  { id: '3', title: 'Caps & Closures', slug: 'caps-closures', productsCount: 8, status: 'ACTIVE' },
  { id: '4', title: 'HDPE Containers', slug: 'hdpe-containers', productsCount: 20, status: 'ACTIVE' },
  { id: '5', title: 'Tubes', slug: 'tubes', productsCount: 6, status: 'DRAFT' },
];

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Categories</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Organize your products into categories for easier navigation.</p>
        </div>
        <button className="btn-primary py-2 px-4 text-sm">
          <Plus size={16} /> Add Category
        </button>
      </div>

      {/* Table Filters & Actions */}
      <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search categories..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-gray-100 dark:border-slate-800 text-sm text-slate-500 dark:text-slate-400">
                <th className="p-4 font-medium"><input type="checkbox" className="rounded" /></th>
                <th className="p-4 font-medium">Category Name</th>
                <th className="p-4 font-medium">URL Slug</th>
                <th className="p-4 font-medium">Products Count</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <motion.tbody 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="divide-y divide-gray-100 dark:divide-slate-800"
            >
              {dummyCategories.map((category) => (
                <motion.tr 
                  variants={staggerItem}
                  key={category.id} 
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group"
                >
                  <td className="p-4"><input type="checkbox" className="rounded" /></td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 cursor-move hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" title="Drag to reorder">
                        <ArrowUpDown size={16} className="text-slate-400" />
                      </div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                        {category.title}
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">/{category.slug}</td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium">
                      {category.productsCount}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${
                      category.status === 'ACTIVE' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400' :
                      'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400'
                    }`}>
                      {category.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"><Edit size={16} /></button>
                      <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
