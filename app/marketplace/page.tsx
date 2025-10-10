import CTA from '@/components/CTA/CTA';
import CustomSolutionsSection from '@/components/CTA/CTA';
import PartnerMarketplace from '@/components/PartnerMarketplace/PartnerMarketplace';
import PricingSection from '@/components/Price/Price';
import TrustedByC from '@/components/trusted-by/TrustedBy';

export default function MarketplacePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20 py-40">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              KLEX Marketplace
            </h1>
            <p className="text-pretty text-lg text-muted-foreground md:text-xl">
              Access premium templates, tools, and resources to accelerate your
              marketing and business growth. From free downloads to premium
              packages, find everything you need to succeed.
            </p>
          </div>
        </div>
      </section>

      <PartnerMarketplace />
      {/* price  */}
      <PricingSection />

      <TrustedByC />

      {/* CTA */}
      <CTA />
    </div>
  );
}
