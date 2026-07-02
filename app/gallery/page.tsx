import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/shared/BackToTop';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';
import FactorySection from '@/components/home/FactorySection';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Explore our manufacturing facility, product range, machinery, warehouse, and team through our comprehensive photo gallery.',
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 py-20 md:py-28">
          <div className="section-container">
            <span className="badge-primary mb-4 inline-block">Photo Gallery</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-dark max-w-3xl">
              Inside Our <span className="text-gradient">Manufacturing World</span>
            </h1>
            <p className="mt-5 text-lg text-gray-500 max-w-2xl leading-relaxed">
              Take a visual tour of our state-of-the-art facility, product range, and the dedicated team behind every package.
            </p>
          </div>
        </section>

        <FactorySection />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
    </>
  );
}
