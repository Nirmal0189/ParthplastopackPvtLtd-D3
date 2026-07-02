'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/shared/BackToTop';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';
import SectionHeading from '@/components/shared/SectionHeading';
import CTASection from '@/components/home/CTASection';
import { industries } from '@/data/process';
import { staggerContainer, staggerItem, imageZoom } from '@/lib/animations';

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20 md:py-28">
          <div className="section-container">
            <span className="badge-primary mb-4 inline-block">Industries We Serve</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-dark max-w-3xl">
              Packaging Solutions Across <span className="text-gradient">Industries</span>
            </h1>
            <p className="mt-5 text-lg text-gray-500 max-w-2xl leading-relaxed">
              From pharmaceuticals to FMCG, we serve diverse industries with specialized packaging engineered for specific requirements.
            </p>
          </div>
        </section>

        <section className="section-padding bg-light">
          <div className="section-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {industries.map((industry) => (
                <motion.div key={industry.id} variants={staggerItem}>
                  <motion.div
                    whileHover="hover"
                    initial="rest"
                    className="group rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-card hover:shadow-premium transition-all duration-500 h-full flex flex-col"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <motion.div variants={imageZoom} className="h-full">
                        <Image
                          src={industry.image}
                          alt={industry.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                      <span className="absolute bottom-4 left-4 text-3xl">{industry.icon}</span>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold font-display text-dark group-hover:text-primary transition-colors">
                        {industry.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-grow">
                        {industry.description}
                      </p>
                      <Link
                        href="/products"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-700 transition-colors group/link"
                      >
                        View Products
                        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
    </>
  );
}
