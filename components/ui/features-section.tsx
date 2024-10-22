import { ShoppingBag, Shield, Truck, Clock, CreditCard, Headphones } from 'lucide-react';
import { FeatureCard } from './feature-card';

export function FeaturesSection() {
  const features = [
    {
      icon: ShoppingBag,
      title: 'Wide Selection',
      description: 'Explore our vast collection of products from trusted brands worldwide.',
    },
    {
      icon: Shield,
      title: 'Secure Shopping',
      description: 'Shop with confidence knowing your transactions are protected.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Get your orders delivered quickly and efficiently to your doorstep.',
    },
    {
      icon: Clock,
      title: '24/7 Shopping',
      description: 'Shop anytime, anywhere with our always-available platform.',
    },
    {
      icon: CreditCard,
      title: 'Easy Payments',
      description: 'Multiple payment options for your convenience.',
    },
    {
      icon: Headphones,
      title: 'Customer Support',
      description: 'Dedicated support team ready to assist you.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose NexaMart</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}