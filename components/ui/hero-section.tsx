'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-primary/5 to-background overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto text-center relative z-10"
      >
        <Badge className="mb-4" variant="secondary">
          Revolutionizing E-Commerce
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
          Transform Your Shopping Experience
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover a new era of online shopping with NexaMart's innovative solutions and seamless experience.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="group" asChild>
            <Link href="/products">
              Shop Now
              <ShoppingBag className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="group" asChild>
            <Link href="/about">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}