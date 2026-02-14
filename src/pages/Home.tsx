import { useEffect } from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import ServicesNew from '../components/ServicesNew';
import HowWeWork from '../components/HowWeWork';
import WhyCloudSaathi from '../components/WhyCloudSaathi';
import TechStack from '../components/TechStack';
import CaseStudiesHome from '../components/CaseStudiesHome';
import PricingModels from '../components/PricingModels';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="CloudSaathi — Fractional DevOps Experts | On-Demand DevOps Services"
        description="Get senior DevOps engineers without the full-time hire. CI/CD, Kubernetes, cloud migration, and infrastructure management — starting in 2 weeks."
        url="https://cloudsaathi.com"
      />
      <main>
        <Hero />
        <TrustStrip />
        <ServicesNew />
        <HowWeWork />
        <WhyCloudSaathi />
        <TechStack />
        <CaseStudiesHome />
        <PricingModels />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}

