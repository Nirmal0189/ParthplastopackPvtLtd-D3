'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, Eye } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { products } from '@/data/products';
import { staggerContainer, staggerItem, imageZoom } from '@/lib/animations';

const featuredProducts = products.filter(p => p.badge).slice(0, 4).length > 0
  ? products.filter(p => p.badge).slice(0, 4)
  : products.slice(0, 4);

export default function FeaturedProducts() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="section-container">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="badge-primary mb-3 inline-block">Featured Products</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight text-dark">
              Premium Packaging
            </h2>
            <p className="mt-3 text-gray-500 text-base md:text-lg max-w-lg">
              Explore our most popular pharmaceutical and nutraceutical packaging solutions.
            </p>
          </div>
          <Link
            href="/products"
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-700 transition-colors group"
          >
            View All Products
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={staggerItem}>
              <motion.div
                whileHover="hover"
                initial="rest"
                className="group card-3d rounded-2xl overflow-hidden h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative h-40 md:h-60 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-3 md:p-6 overflow-hidden">
                  <motion.div variants={imageZoom}>
                    <Image
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
                </div>

                {/* Content */}
                <div className="p-3 md:p-5 flex flex-col flex-grow">
                  <span className="text-[10px] font-semibold text-primary/60 uppercase tracking-wider">
                    {product.categoryLabel}
                  </span>
                  <h3 className="text-sm font-semibold text-dark mt-1 group-hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="mt-3 space-y-1.5 flex-grow">
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
                      className="flex-1 btn-primary py-2 text-[10px] md:text-xs rounded-xl"
                    >
                      <span className="hidden sm:inline">View Details</span>
                      <span className="sm:hidden">Details</span>
                    </Link>
                    <Link
                      href="/contact"
                      className="px-2 md:px-3 py-2 rounded-xl border border-gray-200 text-[10px] md:text-xs font-medium text-gray-600 hover:border-primary/30 hover:text-primary transition-all flex items-center justify-center"
                    >
                      Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View All */}
        <div className="mt-8 text-center md:hidden">
          <Link href="/products" className="btn-secondary py-3 px-6 text-sm">
            View All Products
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
