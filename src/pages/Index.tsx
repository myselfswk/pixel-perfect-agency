import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const Index = () => (
  <div className="bg-background text-foreground overflow-x-hidden">
    <Navbar />
    <Hero />
    <Clients />
    <Services />
    <Process />
    <About />
    <Portfolio />
    <Testimonials />
    <Blog />
    <Pricing />
    <CTA />
    <Footer />
  </div>
);

export default Index;
