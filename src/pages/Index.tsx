import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div id="hero">
        <Hero />
      </div>
      
      <div id="about">
        <About />
      </div>
      
      <div id="services">
        <Services />
      </div>
      
      <div id="gallery">
        <Gallery />
      </div>
      
      <div id="testimonials">
        <Testimonials />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
      
      {/* Footer */}
      <footer className="bg-earth-primary text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="font-elegant text-2xl font-bold text-gold mb-4">
            Kalaarpana
          </div>
          <p className="font-clean text-white/80 mb-4">
            Creating magical moments, one celebration at a time.
          </p>
          <p className="font-clean text-sm text-white/60">
            © 2025 Kalaarpana. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
