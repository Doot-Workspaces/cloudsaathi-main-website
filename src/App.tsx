import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SEO from './components/SEO';
import AIContent from './components/AIContent';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Careers from './pages/Careers';

function App() {
  return (
    <>
      <SEO />
      <AIContent />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
