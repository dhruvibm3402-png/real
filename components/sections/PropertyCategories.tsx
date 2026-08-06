'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { categories } from '@/lib/data';

const gradients = [
  'from-[#1a1a2e] via-[#16213e] to-[#0f3460]',
  'from-[#0f2027] via-[#203a43] to-[#2c5364]',
  'from-[#141e30] via-[#243b55] to-[#1a2a4a]',
  'from-[#1c1c1c] via-[#2d2d2d] to-[#1a1a2e]',
  'from-[#1a2a1a] via-[#2a3a2a] to-[#1a3a1a]',
  'from-[#2a1a1a] via-[#3a2a1a] to-[#2a2010]',
];

export default function PropertyCategories() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="categories"
      ref={ref}
      className="relative py-28 lg:py-36 bg-[#080808] overflow-hidden"
    >
      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase mb-3">Browse By Type</p>
          <h2
            className="text-[clamp(2.2rem,5vw,4rem)] font-light leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Property <span className="text-gold-gradient">Categories</span>
          </h2>
        </motion.div>

        {/* Category grid — 3 + 3 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.label}
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group relative overflow-hidden text-left p-8 bg-gradient-to-br ${gradients[i]} border border-white/[0.06] transition-all duration-400`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(ellipse at 30% 30%, rgba(201,168,76,0.12) 0%, transparent 70%)' }} />

              {/* Gold accent corner */}
              <div className="absolute top-0 left-0 w-12 h-px bg-[#C9A84C] opacity-60 group-hover:w-full transition-all duration-500" />
              <div className="absolute top-0 left-0 w-px h-12 bg-[#C9A84C] opacity-60 group-hover:h-full transition-all duration-500" />

              {/* Icon */}
              <span className="block text-3xl mb-5 text-[#C9A84C] group-hover:scale-110 transition-transform duration-300">
                {cat.icon}
              </span>

              {/* Label */}
              <h3
                className="text-2xl font-light mb-2 text-white"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {cat.label}
              </h3>
              <p className="text-white/40 text-xs tracking-widest uppercase">
                {cat.count} Listings
              </p>

              {/* Arrow */}
              <ArrowUpRight
                size={18}
                className="absolute bottom-6 right-6 text-white/20 group-hover:text-[#C9A84C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Gold accent line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
    </section>
  );
}
