'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => setCurrent((prev) => (prev + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((prev) => (prev - 1 + total) % total), [total]);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const testimonial = testimonials[current];

  return (
    <section className="section-padding bg-gradient-to-br from-[#0B1120] via-[#0F1729] to-[#0B1120] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Hear from the industry leaders who trust our packaging solutions."
          light
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="glass-dark rounded-3xl p-8 md:p-10 text-center relative"
          >
            {/* Quote icon */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Quote size={18} className="text-white fill-white" />
            </div>

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-base md:text-lg text-white/80 leading-relaxed mb-8 italic">
              &ldquo;{testimonial.content}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 border border-white/10">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-white">{testimonial.name}</div>
                <div className="text-xs text-white/50">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? 'w-6 h-2 bg-primary'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
