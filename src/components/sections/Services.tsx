import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HiOutlineGlobeAlt, HiOutlineChartBar, HiOutlinePencil, HiOutlineSpeakerphone, HiOutlineCode, HiOutlineVideoCamera } from "react-icons/hi";

const services = [
  { icon: HiOutlineGlobeAlt, title: "SEO Optimization", desc: "Dominate search results with data-driven SEO strategies that deliver sustainable organic growth." },
  { icon: HiOutlineChartBar, title: "Performance Marketing", desc: "Maximize ROI with precision-targeted paid campaigns across all major platforms." },
  { icon: HiOutlinePencil, title: "Content Strategy", desc: "Compelling content that tells your story, engages your audience, and drives conversions." },
  { icon: HiOutlineSpeakerphone, title: "Social Media", desc: "Build authentic communities and amplify your brand voice across social channels." },
  { icon: HiOutlineCode, title: "Web Development", desc: "High-performance websites and apps built for speed, scale, and conversion." },
  { icon: HiOutlineVideoCamera, title: "Video Production", desc: "Cinematic brand videos and motion graphics that captivate and convert." },
];

const Services = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="services" className="section-spacing section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">What We Do</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Services That <span className="text-gradient">Drive Results</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-gradient-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary text-2xl" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
