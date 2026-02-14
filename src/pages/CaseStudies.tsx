import { useEffect } from 'react';
import ImpactStories from '../components/ImpactStories';
import SEO from '../components/SEO';
import BackButton from '../components/BackButton';

export default function CaseStudies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Case Studies - CloudSaathi | Real DevOps Success Stories"
        description="Real stories from organizations who chose fractional DevOps over full-time hires. See how CloudSaathi helped companies achieve DevOps excellence."
        url="https://cloudsaathi.com/case-studies"
      />
      <main>
        <BackButton />
        <ImpactStories />
      </main>
    </>
  );
}

