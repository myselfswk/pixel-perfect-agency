import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const Divider = () => <div className="section-divider max-w-7xl mx-auto section-padding" />;

const Index = () => (
  <div className="bg-background text-foreground overflow-x-hidden">
    <Navbar />
    <Hero />
    <Clients />
    <Problem />
    <Divider />
    <Solution />
    <Divider />
    <Services />
    <Divider />
    <Process />
    <Divider />
    <About />
    <Divider />
    <Portfolio />
    <Divider />
    <Testimonials />
    <Divider />
    <Blog />
    <Pricing />
    <Divider />
    <FAQ />
    <CTA />
    <Footer />
  </div>
);

export default Index;
