import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HiArrowRight } from "react-icons/hi";

const projects = [
  { title: "Luxe Fashion", category: "Branding & Web", color: "from-primary/30 to-accent/20" },
  { title: "TechVault App", category: "UI/UX & Dev", color: "from-accent/30 to-primary/20" },
  { title: "GreenEarth", category: "Social & Content", color: "from-primary/20 to-emerald-500/20" },
  { title: "FinFlow", category: "Performance Marketing", color: "from-blue-500/20 to-primary/20" },
  { title: "VitalFit", category: "Full Funnel", color: "from-accent/20 to-rose-500/20" },
  { title: "SkyTravel", category: "SEO & PPC", color: "from-primary/30 to-blue-500/20" },
];

const Portfolio = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="work" className="section-spacing section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">Our Work</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Case <span className="text-gradient">Studies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-border/30"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color}`} />
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="text-primary text-xs font-semibold tracking-wider uppercase mb-1">{p.category}</p>
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold text-foreground">{p.title}</h3>
                  <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    <HiArrowRight className="text-foreground" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
