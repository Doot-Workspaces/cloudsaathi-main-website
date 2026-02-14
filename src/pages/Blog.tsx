import { useEffect } from 'react';
import Blog from '../components/Blog';
import SEO from '../components/SEO';
import BackButton from '../components/BackButton';

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Blog - CloudSaathi | DevOps Insights & Best Practices"
        description="Stay updated with the latest DevOps trends, tutorials, and expert insights from CloudSaathi."
        url="https://cloudsaathi.com/blog"
      />
      <main>
        <BackButton />
        <Blog />
      </main>
    </>
  );
}

