import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HiChevronLeft, HiChevronRight, HiStar } from "react-icons/hi";

const testimonials = [
  { name: "Sarah Chen", role: "CMO, TechVault", text: "NovaX transformed our entire digital strategy. Our organic traffic grew 340% in six months. They don't just deliver — they exceed every expectation." },
  { name: "Marcus Rivera", role: "Founder, GreenEarth", text: "Working with NovaX felt like having an in-house team that truly understands your vision. The results speak for themselves — 5x ROAS on our first campaign." },
  { name: "Emily Zhao", role: "VP Marketing, FinFlow", text: "The level of creativity and data-driven precision NovaX brings is unmatched. They helped us dominate a competitive market with a fraction of our previous budget." },
];

const Testimonials = () => {
  const { ref, isInView } = useScrollReveal();
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-spacing section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">Testimonials</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-gradient-card border border-border/50 rounded-2xl p-8 md:p-12 shadow-card min-h-[280px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="text-primary text-xl" />
                  ))}
                </div>
                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 italic">
                  "{testimonials[current].text}"
                </p>
                <p className="font-display font-semibold text-foreground">{testimonials[current].name}</p>
                <p className="text-muted-foreground text-sm">{testimonials[current].role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary/50 transition-colors">
              <HiChevronLeft className="text-foreground text-xl" />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary/50 transition-colors">
              <HiChevronRight className="text-foreground text-xl" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
