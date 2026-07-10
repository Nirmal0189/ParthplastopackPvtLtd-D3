'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft, Download, Send, ChevronRight, Check, Package, Ruler, Weight,
  Palette, Layers, Star, Share2,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/shared/BackToTop';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';
import QuoteModal from '@/components/shared/QuoteModal';
import ProductCard from '@/components/products/ProductCard';
import { getProductBySlug, getProducts } from '@/actions/product.actions';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    async function loadProduct() {
      try {
        const dbProduct = await getProductBySlug(slug);
        
        if (dbProduct) {
          // Map DB schema to frontend schema
          const mappedProduct = {
            id: dbProduct._id,
            name: dbProduct.name,
            slug: dbProduct.slug,
            categoryId: dbProduct.category?._id || 'other',
            categoryLabel: dbProduct.category?.title || 'Other',
            image: dbProduct.images?.[0] || '/images/products/placeholder.webp',
            gallery: dbProduct.images?.length ? dbProduct.images : ['/images/products/placeholder.webp'],
            badge: dbProduct.isFeatured ? 'Featured' : dbProduct.isTrending ? 'Trending' : '',
            description: dbProduct.description || dbProduct.shortDescription || 'No description available.',
            overFlowVolume: dbProduct.specifications?.overFlowVolume || '',
            heightOfContainer: dbProduct.specifications?.heightOfContainer || '',
            neckSize: dbProduct.specifications?.neckSize || '',
            maximumDiaOfContainer: dbProduct.specifications?.maximumDiaOfContainer || '',
            wallThickness: dbProduct.specifications?.wallThickness || '',
            capFitting: dbProduct.specifications?.capFitting || '',
            labelType: dbProduct.specifications?.labelType || '',
            weightOfContainer: dbProduct.specifications?.weightOfContainer || '',
            powderVolume: dbProduct.specifications?.powderVolume || '',
            material: dbProduct.specifications?.material || '',
            moq: dbProduct.moq || 1000,
            features: dbProduct.features || [],
            applications: dbProduct.applications || [],
          };
          setProduct(mappedProduct);

          // Fetch related products
          const allProducts = await getProducts();
          const related = allProducts
            .filter((p: any) => p.status === 'ACTIVE' && p._id !== dbProduct._id && p.category?._id === dbProduct.category?._id)
            .slice(0, 4)
            .map((p: any) => ({
              id: p._id,
              name: p.name,
              slug: p.slug,
              categoryId: p.category?._id || 'other',
              categoryLabel: p.category?.title || 'Other',
              image: p.images?.[0] || '/images/products/placeholder.webp',
              badge: p.isFeatured ? 'Featured' : p.isTrending ? 'Trending' : '',
              material: p.specifications?.material || 'N/A',
              overFlowVolume: p.specifications?.overFlowVolume || 'N/A',
              capFitting: p.specifications?.capFitting || 'N/A',
            }));
          setRelatedProducts(related);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    
    if (slug) {
      loadProduct();
    }
  }, [slug]);

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="pt-28 pb-20 bg-light min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </main>
        <Footer />
      </>
    );
  }

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

  const images = product.gallery;

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: url,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
  };

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
                  <button 
                    onClick={handleShare}
                    title="Share Product"
                    className="w-9 h-9 rounded-full bg-gray-100 hover:bg-primary/10 flex items-center justify-center transition-colors"
                  >
                    <Share2 size={16} className="text-gray-400 hover:text-primary" />
                  </button>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {images.length > 1 && (
                <div className="flex gap-3">
                  {images.map((img: string, i: number) => (
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

              <p className="mt-5 text-gray-500 leading-relaxed whitespace-pre-wrap">{product.description}</p>

              {/* Specifications */}
              <div className="mt-8 space-y-3">
                <h3 className="text-sm font-bold text-dark uppercase tracking-wider">Specifications</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.material && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100">
                      <Layers size={16} className="text-primary shrink-0" />
                      <div>
                        <span className="text-[10px] text-gray-400 block">Material</span>
                        <span className="text-xs font-medium text-dark">{product.material}</span>
                      </div>
                    </div>
                  )}
                  {product.overFlowVolume && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100">
                      <Package size={16} className="text-primary shrink-0" />
                      <div>
                        <span className="text-[10px] text-gray-400 block">Over Flow Volume</span>
                        <span className="text-xs font-medium text-dark">{product.overFlowVolume}</span>
                      </div>
                    </div>
                  )}
                  {product.heightOfContainer && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100">
                      <Ruler size={16} className="text-primary shrink-0" />
                      <div>
                        <span className="text-[10px] text-gray-400 block">Height</span>
                        <span className="text-xs font-medium text-dark">{product.heightOfContainer}</span>
                      </div>
                    </div>
                  )}
                  {product.neckSize && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100">
                      <Ruler size={16} className="text-primary shrink-0" />
                      <div>
                        <span className="text-[10px] text-gray-400 block">Neck Size</span>
                        <span className="text-xs font-medium text-dark">{product.neckSize}</span>
                      </div>
                    </div>
                  )}
                  {product.maximumDiaOfContainer && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100">
                      <Ruler size={16} className="text-primary shrink-0" />
                      <div>
                        <span className="text-[10px] text-gray-400 block">Max Diameter</span>
                        <span className="text-xs font-medium text-dark">{product.maximumDiaOfContainer}</span>
                      </div>
                    </div>
                  )}
                  {product.wallThickness && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100">
                      <Layers size={16} className="text-primary shrink-0" />
                      <div>
                        <span className="text-[10px] text-gray-400 block">Wall Thickness</span>
                        <span className="text-xs font-medium text-dark">{product.wallThickness}</span>
                      </div>
                    </div>
                  )}
                  {product.capFitting && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100">
                      <Palette size={16} className="text-primary shrink-0" />
                      <div>
                        <span className="text-[10px] text-gray-400 block">Cap Fitting</span>
                        <span className="text-xs font-medium text-dark">{product.capFitting}</span>
                      </div>
                    </div>
                  )}
                  {product.labelType && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100">
                      <Palette size={16} className="text-primary shrink-0" />
                      <div>
                        <span className="text-[10px] text-gray-400 block">Label Type</span>
                        <span className="text-xs font-medium text-dark">{product.labelType}</span>
                      </div>
                    </div>
                  )}
                  {product.weightOfContainer && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100">
                      <Weight size={16} className="text-primary shrink-0" />
                      <div>
                        <span className="text-[10px] text-gray-400 block">Weight</span>
                        <span className="text-xs font-medium text-dark">{product.weightOfContainer}</span>
                      </div>
                    </div>
                  )}
                  {product.powderVolume && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100">
                      <Package size={16} className="text-primary shrink-0" />
                      <div>
                        <span className="text-[10px] text-gray-400 block">Powder Volume</span>
                        <span className="text-xs font-medium text-dark">{product.powderVolume}</span>
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
              {product.features && product.features.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-bold text-dark uppercase tracking-wider mb-3">Key Features</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature: string) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check size={14} className="text-green-500 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications */}
              {product.applications && product.applications.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-bold text-dark uppercase tracking-wider mb-3">Applications</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app: string) => (
                      <span key={app} className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-600">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

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
