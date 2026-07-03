import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Values from '@/components/Values';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        {/* <Projects /> */}
        <Values />
        <Services />
        <About />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

