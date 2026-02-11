import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const textReveal = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.15, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-background/60" />
    </div>

    {/* Floating shapes */}
    <div className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-primary/10 blur-[100px] animate-float" />
    <div className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-float" style={{ animationDelay: "2s" }} />

    <div className="relative z-10 max-w-5xl mx-auto text-center section-padding">
      <motion.p
        custom={0}
        variants={textReveal}
        initial="hidden"
        animate="visible"
        className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-6"
      >
        Digital Marketing Agency
      </motion.p>

      <motion.h1
        custom={1}
        variants={textReveal}
        initial="hidden"
        animate="visible"
        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
      >
        We Build Brands That{" "}
        <span className="text-gradient">Break Through</span> The Noise
      </motion.h1>

      <motion.p
        custom={2}
        variants={textReveal}
        initial="hidden"
        animate="visible"
        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
      >
        Data-driven strategies and creative excellence that transform your digital presence and drive measurable growth.
      </motion.p>

      <motion.div
        custom={3}
        variants={textReveal}
        initial="hidden"
        animate="visible"
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#contact"
          className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all glow-primary hover:scale-105 duration-300"
        >
          Start a Project
        </a>
        <a
          href="#work"
          className="border border-border text-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-secondary transition-all duration-300"
        >
          View Our Work
        </a>
      </motion.div>
    </div>
  </section>
);

export default Hero;
