import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import WhyZoey from './WhyZoey';
import Contact from './Contact';
import Footer from './Footer';

interface MainWebsiteProps {
  onShowComingSoon: () => void;
}

export default function MainWebsite({ onShowComingSoon }: MainWebsiteProps) {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Navbar onShowComingSoon={onShowComingSoon} />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyZoey />
      <Contact />
      <Footer />
    </div>
  );
}
