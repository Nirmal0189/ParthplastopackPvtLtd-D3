'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, Image as ImageIcon, UploadCloud, X } from 'lucide-react';
import { useForm } from 'react-hook-form';

export default function NewProductPage() {
  const { register, handleSubmit } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between sticky top-16 z-30 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md py-4 -mt-4 border-b border-transparent">
        <div className="flex items-center gap-4">
          <Link href="/admin/products" className="p-2 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 hover:border-primary transition-colors">
            <ArrowLeft size={18} className="text-slate-600 dark:text-slate-300" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Add New Product</h1>
            <p className="text-sm text-slate-500">Create a new product in the catalog.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button type="button" className="btn-secondary py-2.5 px-5 text-sm">Save as Draft</button>
          <button type="submit" disabled={isSubmitting} className="btn-primary py-2.5 px-6 text-sm">
            {isSubmitting ? 'Publishing...' : <><Save size={16} /> Publish Product</>}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Form */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm space-y-6"
          >
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Basic Information</h2>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Product Name *</label>
              <input {...register('name')} required placeholder="e.g. 500ml HDPE Protein Jar" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:border-primary outline-none" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">SKU *</label>
                <input {...register('sku')} required placeholder="PR-500-HD" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:border-primary outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Category *</label>
                <select {...register('category')} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:border-primary outline-none text-slate-700 dark:text-slate-300">
                  <option value="">Select Category</option>
                  <option value="protein-containers">Protein Containers</option>
                  <option value="medicine-jars">Medicine Jars</option>
                  <option value="caps">Caps & Closures</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Short Description</label>
              <textarea {...register('shortDescription')} rows={2} placeholder="Brief summary for product cards..." className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:border-primary outline-none resize-none" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Description</label>
              <textarea {...register('description')} rows={6} placeholder="Detailed product description..." className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:border-primary outline-none resize-none" />
            </div>
          </motion.div>

          {/* Specifications */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm space-y-6"
          >
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Specifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Capacity</label>
                <input {...register('capacity')} placeholder="e.g. 500ml" className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:border-primary outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Material</label>
                <input {...register('material')} placeholder="e.g. HDPE" className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:border-primary outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Shape</label>
                <input {...register('shape')} placeholder="e.g. Round" className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:border-primary outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Neck Size</label>
                <input {...register('neckSize')} placeholder="e.g. 83mm" className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:border-primary outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Weight</label>
                <input {...register('weight')} placeholder="e.g. 45g" className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:border-primary outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Dimensions</label>
                <input {...register('dimensions')} placeholder="e.g. 120mm x 85mm" className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:border-primary outline-none" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sidebar Form Options */}
        <div className="space-y-6">
          {/* Media Upload */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <ImageIcon size={20} className="text-primary" /> Product Images
            </h2>
            <div className="border-2 border-dashed border-gray-200 dark:border-slate-700 rounded-xl p-8 text-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <UploadCloud className="text-primary" size={24} />
              </div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Click to upload or drag & drop</p>
              <p className="text-xs text-slate-500 mt-1">SVG, PNG, JPG or WebP (max 5MB)</p>
            </div>
          </motion.div>

          {/* Pricing & MOQ */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm space-y-4"
          >
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Sales Information</h2>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Minimum Order Qty (MOQ)</label>
              <input type="number" {...register('moq')} defaultValue={1000} className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:border-primary outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Price (Optional)</label>
              <input type="number" {...register('price')} placeholder="0.00" className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:border-primary outline-none" />
              <p className="text-xs text-slate-500">Leave blank to require a quote request.</p>
            </div>
          </motion.div>

          {/* SEO & Visibility */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm space-y-4"
          >
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">SEO & Visibility</h2>
            
            <div className="space-y-2">
              <label className="flex items-center justify-between text-sm font-semibold text-slate-700 dark:text-slate-300">
                Visibility Status
              </label>
              <select {...register('status')} className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:border-primary outline-none">
                <option value="DRAFT">Draft (Hidden)</option>
                <option value="ACTIVE">Active (Published)</option>
              </select>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <label className="flex items-center gap-3">
                <input type="checkbox" {...register('isFeatured')} className="w-4 h-4 rounded text-primary focus:ring-primary" />
                <span className="text-sm text-slate-700 dark:text-slate-300">Mark as Featured Product</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" {...register('isTrending')} className="w-4 h-4 rounded text-primary focus:ring-primary" />
                <span className="text-sm text-slate-700 dark:text-slate-300">Mark as Trending</span>
              </label>
            </div>
          </motion.div>
        </div>
      </div>
    </form>
  );
}
