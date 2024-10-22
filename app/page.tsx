import { HeroSection } from '@/components/ui/hero-section';
import { FeaturesSection } from '@/components/ui/features-section';
import { CTASection } from '@/components/ui/cta-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}