'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center relative z-10"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Shopping Experience?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of satisfied customers who have already made the switch to NexaMart.
        </p>
        <Button size="lg" variant="secondary" className="group" asChild>
          <Link href="/products">
            Start Shopping Now
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] animate-shimmer"></div>
    </section>
  );
}