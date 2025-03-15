import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ComponentsShowcase from './components/ComponentsShowcase';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <HeroSection />
      <FeaturesSection />
      <ComponentsShowcase />
      <Footer />
    </main>
  );
}
