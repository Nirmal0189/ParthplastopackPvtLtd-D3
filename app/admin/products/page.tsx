'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Plus, Search, MoreHorizontal, Edit, Trash2, Copy, Eye, SlidersHorizontal, Download, Upload, Package } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const dummyProducts = [
  { id: '1', name: 'Premium Protein Jar', sku: 'PR-1001', category: 'Protein Containers', price: 0, stock: 'In Stock', status: 'ACTIVE' },
  { id: '2', name: 'Amber Medicine Bottle', sku: 'MD-502', category: 'Medicine Jars', price: 0, stock: 'Low Stock', status: 'ACTIVE' },
  { id: '3', name: 'Child Resistant Cap 38mm', sku: 'CAP-38CR', category: 'Caps & Closures', price: 0, stock: 'Out of Stock', status: 'DRAFT' },
  { id: '4', name: 'HDPE Tablet Container', sku: 'HD-800', category: 'Tablet Containers', price: 0, stock: 'In Stock', status: 'ACTIVE' },
  { id: '5', name: 'Effervescent Tube 50ml', sku: 'TB-50', category: 'Tubes', price: 0, stock: 'In Stock', status: 'ARCHIVED' },
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Products</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your product catalog, pricing, and inventory.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-secondary py-2 px-4 text-sm hidden md:flex">
            <Download size={16} /> Export
          </button>
          <button className="btn-secondary py-2 px-4 text-sm hidden md:flex">
            <Upload size={16} /> Import
          </button>
          <Link href="/admin/products/new" className="btn-primary py-2 px-4 text-sm">
            <Plus size={16} /> Add Product
          </Link>
        </div>
      </div>

      {/* Table Filters & Actions */}
      <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row justify-between gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search products by name, SKU..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <SlidersHorizontal size={16} /> Filters
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-gray-100 dark:border-slate-800 text-sm text-slate-500 dark:text-slate-400">
                <th className="p-4 font-medium"><input type="checkbox" className="rounded" /></th>
                <th className="p-4 font-medium">Product Name</th>
                <th className="p-4 font-medium">SKU</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Inventory</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <motion.tbody 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="divide-y divide-gray-100 dark:divide-slate-800"
            >
              {dummyProducts.map((product) => (
                <motion.tr 
                  variants={staggerItem}
                  key={product.id} 
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors group"
                >
                  <td className="p-4"><input type="checkbox" className="rounded" /></td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                        <Package size={20} className="text-slate-400" />
                      </div>
                      <div className="font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                        {product.name}
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">{product.sku}</td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {product.category}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${
                      product.status === 'ACTIVE' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400' :
                      product.status === 'DRAFT' ? 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400' :
                      'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-2 h-2 rounded-full ${
                        product.stock === 'In Stock' ? 'bg-emerald-500' :
                        product.stock === 'Low Stock' ? 'bg-amber-500' : 'bg-red-500'
                      }`} />
                      <span className="text-slate-600 dark:text-slate-300">{product.stock}</span>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"><Eye size={16} /></button>
                      <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"><Edit size={16} /></button>
                      <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"><Trash2 size={16} /></button>
                      <button className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors"><MoreHorizontal size={16} /></button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
          <div>Showing 1 to 5 of 142 products</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 rounded-md bg-primary text-white">1</button>
            <button className="px-3 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">2</button>
            <button className="px-3 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">3</button>
            <button className="px-3 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
