import { useEffect } from 'react';
import Careers from '../components/Careers';
import SEO from '../components/SEO';
import BackButton from '../components/BackButton';

export default function CareersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Careers - CloudSaathi | Join Our DevOps Team"
        description="Join CloudSaathi and help empower organizations with fractional DevOps expertise. Remote work. Global team. Impact-driven."
        url="https://cloudsaathi.com/careers"
      />
      <main>
        <BackButton />
        <Careers />
      </main>
    </>
  );
}

