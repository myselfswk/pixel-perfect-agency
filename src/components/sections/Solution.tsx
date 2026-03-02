import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HiOutlineCheckCircle, HiOutlineLightningBolt, HiOutlineChartSquareBar } from "react-icons/hi";

const pillars = [
  {
    icon: HiOutlineLightningBolt,
    title: "Strategy-First Approach",
    desc: "We start with deep research into your market, audience, and competitors — then build a custom roadmap aligned with your goals.",
  },
  {
    icon: HiOutlineChartSquareBar,
    title: "Full-Funnel Execution",
    desc: "From brand awareness to conversion optimization, we own every stage of the customer journey so nothing falls through the cracks.",
  },
  {
    icon: HiOutlineCheckCircle,
    title: "Measurable Results",
    desc: "Real-time dashboards, transparent reporting, and data-backed decisions. You always know exactly what's working and why.",
  },
];

const Solution = () => {
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
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            The NovaX Difference
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            A Smarter Way to <span className="text-gradient">Grow</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We don't just run campaigns — we build growth systems that compound over time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative bg-gradient-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all group"
            >
              <div className="absolute inset-0 rounded-2xl bg-primary/[0.02] group-hover:bg-primary/[0.05] transition-colors" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <p.icon className="text-primary text-2xl" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
