'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SmoothImage from '@/components/shared/SmoothImage';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { staggerContainer, staggerItem, imageZoom } from '@/lib/animations';
import { getProducts } from '@/actions/product.actions';

export default function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const productData = await getProducts();
        const activeProducts = productData.filter((p: any) => p.status === 'ACTIVE');
        
        const mappedProducts = activeProducts.map((p: any) => ({
          id: p._id,
          name: p.name,
          slug: p.slug,
          categoryLabel: p.category?.title || 'Other',
          image: p.images?.[0] || '/images/products/placeholder.webp',
          badge: p.isFeatured ? 'Featured' : p.isTrending ? 'Trending' : '',
          material: p.specifications?.material || 'N/A',
          capacity: p.specifications?.capacity || 'N/A',
          color: p.specifications?.color || 'N/A',
        }));

        let featured = mappedProducts.filter(p => p.badge);
        if (featured.length === 0) {
          featured = mappedProducts.slice(0, 4);
        } else {
          featured = featured.slice(0, 4);
        }

        setFeaturedProducts(featured);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

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

        {loading ? (
          <div className="py-20 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-500">Loading featured products...</p>
          </div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 min-[1920px]:grid-cols-6 gap-3 md:gap-6"
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={staggerItem}>
                <motion.div
                  whileHover="hover"
                  initial="rest"
                  className="group card-3d rounded-2xl overflow-hidden h-full flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-44 md:h-60 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4 md:p-6 overflow-hidden">
                    <motion.div variants={imageZoom} className="w-full h-full flex items-center justify-center">
                      <SmoothImage
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="object-contain w-full h-full max-h-[120px] md:max-h-48 drop-shadow-lg"
                      />
                    </motion.div>

                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-3 left-3 z-10 max-w-[calc(100%-24px)] truncate px-2.5 py-1 bg-primary text-white text-[9px] md:text-[10px] font-bold rounded-lg uppercase tracking-wider">
                        {product.badge}
                      </span>
                    )}
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
                      <div className="flex items-start md:items-center text-[10px] md:text-xs">
                        <span className="w-14 md:w-16 text-gray-400 font-medium shrink-0 pt-0.5 md:pt-0">Material</span>
                        <span className="text-gray-600 truncate">{product.material.split('(')[0].trim()}</span>
                      </div>
                      <div className="flex items-start md:items-center text-[10px] md:text-xs">
                        <span className="w-14 md:w-16 text-gray-400 font-medium shrink-0 pt-0.5 md:pt-0">Capacity</span>
                        <span className="text-gray-600 line-clamp-2 md:truncate">{product.capacity}</span>
                      </div>
                      <div className="flex items-start md:items-center text-[10px] md:text-xs">
                        <span className="w-14 md:w-16 text-gray-400 font-medium shrink-0 pt-0.5 md:pt-0">Color</span>
                        <span className="text-gray-600 line-clamp-2 md:truncate">{product.color}</span>
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
        )}

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
