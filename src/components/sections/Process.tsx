import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HiOutlineSearchCircle, HiOutlineLightBulb, HiOutlinePlay, HiOutlineTrendingUp } from "react-icons/hi";

const steps = [
  { icon: HiOutlineSearchCircle, title: "Discovery", desc: "We audit your brand, competitors, and market to uncover hidden opportunities." },
  { icon: HiOutlineLightBulb, title: "Strategy", desc: "A custom roadmap built around your goals, audience, and budget." },
  { icon: HiOutlinePlay, title: "Execution", desc: "Our specialists launch, manage, and optimize every campaign in real-time." },
  { icon: HiOutlineTrendingUp, title: "Scale", desc: "We double down on what works and continuously iterate for growth." },
];

const Process = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="section-spacing section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">How We Work</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Our Proven <span className="text-gradient">Process</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <s.icon className="text-primary text-3xl" />
              </div>
              <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2 font-display text-6xl font-bold text-muted/50 select-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
