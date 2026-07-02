'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/products/ProductCard';
import ProductFilters from '@/components/products/ProductFilters';
import BackToTop from '@/components/shared/BackToTop';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';
import SectionHeading from '@/components/shared/SectionHeading';
import { products, searchProducts, getProductsByCategory } from '@/data/products';
import { staggerContainer } from '@/lib/animations';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let result = getProductsByCategory(activeCategory);
    if (searchQuery.trim()) {
      const searchResults = searchProducts(searchQuery);
      result = result.filter((p) => searchResults.some((sr) => sr.id === p.id));
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-light min-h-screen">
        <div className="section-container">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="badge-primary mb-3 inline-block">Product Catalog</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight text-dark">
              Our Products
            </h1>
            <p className="mt-3 text-gray-500 text-base md:text-lg max-w-2xl">
              Explore our complete range of pharmaceutical and nutraceutical plastic packaging solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 p-5 rounded-2xl bg-white border border-gray-100 shadow-card">
                <ProductFilters
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  resultCount={filteredProducts.length}
                />
              </div>
            </div>

            {/* Product Grid */}
            <div className="lg:col-span-3">
              {filteredProducts.length > 0 ? (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 min-[1920px]:grid-cols-5 min-[2560px]:grid-cols-6 gap-3 md:gap-5"
                >
                  {filteredProducts.map((product, i) => (
                    <ProductCard key={product.id} product={product} index={i} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-20 text-center bg-white rounded-2xl border border-gray-100"
                >
                  <div className="text-4xl mb-4">📦</div>
                  <h3 className="text-lg font-semibold text-dark">No products found</h3>
                  <p className="text-sm text-gray-400 mt-2">
                    Try adjusting your search or category filters.
                  </p>
                  <button
                    onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                    className="mt-4 btn-secondary py-2 px-4 text-sm"
                  >
                    Clear Filters
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
    </>
  );
}
