import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const Index = () => (
  <div className="bg-background text-foreground overflow-x-hidden">
    <Navbar />
    <Hero />
    <Services />
    <About />
    <Portfolio />
    <Testimonials />
    <Pricing />
    <CTA />
    <Footer />
  </div>
);

export default Index;
