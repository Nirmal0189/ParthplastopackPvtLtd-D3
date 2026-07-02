'use client';

import { motion } from 'framer-motion';
import SmoothImage from '@/components/shared/SmoothImage';
import Link from 'next/link';
import { Heart, Eye, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { imageZoom } from '@/lib/animations';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover="hover"
      className="group"
    >
      <div className="card-3d rounded-2xl overflow-hidden h-full flex flex-col">
        {/* Image Area */}
        <div className="relative h-40 md:h-56 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-3 md:p-6 overflow-hidden">
          <motion.div variants={imageZoom}>
            <SmoothImage
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="object-contain max-h-44 drop-shadow-lg"
            />
          </motion.div>

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-white text-[10px] font-bold rounded-lg uppercase tracking-wider">
              {product.badge}
            </span>
          )}

          {/* Category label */}
          <span className="absolute bottom-3 left-3 text-[10px] font-semibold text-gray-400 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-md">
            {product.categoryLabel}
          </span>

          {/* Quick actions */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-red-50 transition-colors">
              <Heart size={14} className="text-gray-400 hover:text-red-500" />
            </button>
            <Link
              href={`/products/${product.slug}`}
              className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <Eye size={14} className="text-gray-400 hover:text-primary" />
            </Link>
          </div>

          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="p-3 md:p-5 flex flex-col flex-grow">
          <h3 className="text-sm font-semibold text-dark group-hover:text-primary transition-colors line-clamp-2 mb-3">
            {product.name}
          </h3>

          <div className="space-y-1.5 flex-grow">
            <div className="flex items-center text-xs">
              <span className="w-16 text-gray-400 font-medium shrink-0">Material</span>
              <span className="text-gray-600 truncate">{product.material.split('(')[0].trim()}</span>
            </div>
            <div className="flex items-center text-xs">
              <span className="w-16 text-gray-400 font-medium shrink-0">Capacity</span>
              <span className="text-gray-600">{product.capacity}</span>
            </div>
            <div className="flex items-center text-xs">
              <span className="w-16 text-gray-400 font-medium shrink-0">Color</span>
              <span className="text-gray-600">{product.color}</span>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <Link
              href={`/products/${product.slug}`}
              className="flex-1 btn-primary py-2 text-[10px] md:text-xs rounded-xl group/btn"
            >
              <span className="hidden sm:inline">View Details</span>
              <span className="sm:hidden">Details</span>
              <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-2 md:px-3 py-2 rounded-xl border border-gray-200 text-[10px] md:text-xs font-medium text-gray-600 hover:border-primary/30 hover:text-primary transition-all flex items-center justify-center"
            >
              Quote
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
