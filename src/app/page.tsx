import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Solutions from './sections/Solutions';
import Testimonials from './sections/Testimonials';
import AITraining from './sections/AITraining';
import Contact from './sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <AITraining />
      <Solutions />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
