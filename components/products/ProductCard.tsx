'use client';

import { motion } from 'framer-motion';
import SmoothImage from '@/components/shared/SmoothImage';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { imageZoom } from '@/lib/animations';

interface ProductCardProps {
  product: any;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      onClick={() => router.push(`/products/${product.slug}`)}
      className="group cursor-pointer"
    >
      <div className="card-3d rounded-2xl overflow-hidden h-full flex flex-col">
        {/* Image Area */}
        <div className="relative h-44 md:h-56 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4 md:p-6 overflow-hidden">
          <motion.div variants={imageZoom} className="w-full h-full flex items-center justify-center">
            <SmoothImage
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="object-contain w-full h-full max-h-[120px] md:max-h-44 drop-shadow-lg"
            />
          </motion.div>

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 z-10 max-w-[calc(100%-24px)] truncate px-2.5 py-1 bg-primary text-white text-[9px] md:text-[10px] font-bold rounded-lg uppercase tracking-wider">
              {product.badge}
            </span>
          )}

          {/* Category label */}
          <span className="absolute bottom-3 left-3 z-10 max-w-[calc(100%-24px)] truncate text-[9px] md:text-[10px] font-semibold text-gray-400 bg-white backdrop-blur-sm px-2 py-0.5 rounded-md">
            {product.categoryLabel}
          </span>

          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
        </div>

        {/* Content */}
        <div className="p-3 md:p-5 flex flex-col flex-grow">
          <h3 className="text-sm font-semibold text-dark group-hover:text-primary transition-colors line-clamp-2 mb-3">
            {product.name}
          </h3>

          <div className="space-y-1.5 flex-grow mt-1">
            <div className="flex items-start md:items-center text-[10px] md:text-xs">
              <span className="w-14 md:w-16 text-gray-400 font-medium shrink-0 pt-0.5 md:pt-0">Material</span>
              <span className="text-gray-600 truncate">{product.material.split('(')[0].trim()}</span>
            </div>
            <div className="flex items-start md:items-center text-[10px] md:text-xs">
              <span className="w-14 md:w-16 text-gray-400 font-medium shrink-0 pt-0.5 md:pt-0">Volume</span>
              <span className="text-gray-600 line-clamp-2 md:truncate">{product.overFlowVolume || product.capacity || 'N/A'}</span>
            </div>
            <div className="flex items-start md:items-center text-[10px] md:text-xs">
              <span className="w-14 md:w-16 text-gray-400 font-medium shrink-0 pt-0.5 md:pt-0">Cap</span>
              <span className="text-gray-600 line-clamp-2 md:truncate">{product.capFitting || product.color || 'N/A'}</span>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <div
              className="flex-1 btn-primary py-2 text-[10px] md:text-xs rounded-xl group/btn flex items-center justify-center"
            >
              <span className="hidden sm:inline">View Details</span>
              <span className="sm:hidden">Details</span>
              <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform ml-1" />
            </div>
            <Link
              href="/contact"
              onClick={(e) => e.stopPropagation()}
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
