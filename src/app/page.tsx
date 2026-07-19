import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandSystem from '@/components/BrandSystem';
import Solutions from '@/components/Solutions';
import HowWeWork from '@/components/HowWeWork';
import About from '@/components/About';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandSystem />
        <Solutions />
        <HowWeWork />
        <About />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

