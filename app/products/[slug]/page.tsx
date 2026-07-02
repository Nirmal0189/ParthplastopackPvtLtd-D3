'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft, Download, Send, ChevronRight, Check, Package, Ruler, Weight,
  Palette, Layers, Star, Heart, Share2,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/shared/BackToTop';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';
import QuoteModal from '@/components/shared/QuoteModal';
import ProductCard from '@/components/products/ProductCard';
import { getProductBySlug, getRelatedProducts, products } from '@/data/products';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const product = getProductBySlug(slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="pt-28 pb-20 bg-light min-h-screen">
          <div className="section-container text-center py-20">
            <div className="text-5xl mb-4">📦</div>
            <h1 className="text-2xl font-bold text-dark">Product Not Found</h1>
            <p className="text-gray-500 mt-2">The product you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/products" className="btn-primary mt-6 inline-flex py-3 px-6 text-sm">
              <ArrowLeft size={16} /> Back to Products
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const images = product.gallery || [product.image];
  const relatedProducts = getRelatedProducts(product.id, product.category);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 bg-light min-h-screen">
        <div className="section-container">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-gray-400 mb-8"
          >
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight size={14} />
            <span className="text-dark font-medium truncate">{product.name}</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Left: Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Image */}
              <div className="relative bg-white rounded-3xl border border-gray-100 shadow-card p-8 mb-4 overflow-hidden group">
                <div className="aspect-square flex items-center justify-center">
                  <Image
                    src={images[selectedImage]}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="object-contain max-h-[400px] group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-lg uppercase tracking-wider">
                    {product.badge}
                  </span>
                )}

                {/* Actions */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="w-9 h-9 rounded-full bg-gray-100 hover:bg-red-50 flex items-center justify-center transition-colors">
                    <Heart size={16} className="text-gray-400 hover:text-red-500" />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-gray-100 hover:bg-primary/10 flex items-center justify-center transition-colors">
                    <Share2 size={16} className="text-gray-400 hover:text-primary" />
                  </button>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {images.length > 1 && (
                <div className="flex gap-3">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-20 h-20 rounded-xl border-2 overflow-hidden bg-white flex items-center justify-center p-2 transition-all ${
                        selectedImage === i
                          ? 'border-primary shadow-glow-primary'
                          : 'border-gray-100 hover:border-gray-300'
                      }`}
                    >
                      <Image src={img} alt="" width={60} height={60} className="object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Right: Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="badge-primary mb-3 inline-block">{product.categoryLabel}</span>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-dark tracking-tight">
                {product.name}
              </h1>

              {/* Rating placeholder */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-xs text-gray-400">(Based on client reviews)</span>
              </div>

              <p className="mt-5 text-gray-500 leading-relaxed">{product.description}</p>

              {/* Specifications */}
              <div className="mt-8 space-y-3">
                <h3 className="text-sm font-bold text-dark uppercase tracking-wider">Specifications</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100">
                    <Layers size={16} className="text-primary shrink-0" />
                    <div>
                      <span className="text-[10px] text-gray-400 block">Material</span>
                      <span className="text-xs font-medium text-dark">{product.material}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100">
                    <Package size={16} className="text-primary shrink-0" />
                    <div>
                      <span className="text-[10px] text-gray-400 block">Capacity</span>
                      <span className="text-xs font-medium text-dark">{product.capacity}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100">
                    <Palette size={16} className="text-primary shrink-0" />
                    <div>
                      <span className="text-[10px] text-gray-400 block">Colors</span>
                      <span className="text-xs font-medium text-dark">{product.color}</span>
                    </div>
                  </div>
                  {product.dimensions && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100">
                      <Ruler size={16} className="text-primary shrink-0" />
                      <div>
                        <span className="text-[10px] text-gray-400 block">Dimensions</span>
                        <span className="text-xs font-medium text-dark">{product.dimensions}</span>
                      </div>
                    </div>
                  )}
                  {product.weight && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100">
                      <Weight size={16} className="text-primary shrink-0" />
                      <div>
                        <span className="text-[10px] text-gray-400 block">Weight</span>
                        <span className="text-xs font-medium text-dark">{product.weight}</span>
                      </div>
                    </div>
                  )}
                  {product.moq && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100">
                      <Package size={16} className="text-accent shrink-0" />
                      <div>
                        <span className="text-[10px] text-gray-400 block">MOQ</span>
                        <span className="text-xs font-medium text-dark">{product.moq}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="mt-6">
                <h3 className="text-sm font-bold text-dark uppercase tracking-wider mb-3">Key Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check size={14} className="text-green-500 shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mt-6">
                <h3 className="text-sm font-bold text-dark uppercase tracking-wider mb-3">Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span key={app} className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-600">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsQuoteOpen(true)}
                  className="btn-primary py-3.5 px-7 text-sm flex-1 sm:flex-none"
                >
                  <Send size={16} />
                  Request Quote
                </motion.button>
                <a
                  href="#"
                  className="btn-secondary py-3.5 px-7 text-sm"
                >
                  <Download size={16} />
                  Download Catalog
                </a>
              </div>
            </motion.div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold font-display text-dark mb-8">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {relatedProducts.map((rp, i) => (
                  <ProductCard key={rp.id} product={rp} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} productName={product.name} />
    </>
  );
}
