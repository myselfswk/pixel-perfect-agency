import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTA = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="contact" className="section-spacing section-padding" ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-primary opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />

        <div className="relative z-10 text-center py-20 md:py-28 px-8">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Scale Your Brand?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10">
            Let's build a strategy that turns clicks into customers. Book your free consultation today.
          </p>
          <a
            href="mailto:hello@novax.agency"
            className="inline-block bg-primary-foreground text-primary px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300"
          >
            Book a Free Call
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
