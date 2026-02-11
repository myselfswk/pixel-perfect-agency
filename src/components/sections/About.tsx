import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 40, suffix: "M+", label: "Revenue Generated" },
];

const StatItem = ({ value, suffix, label, isInView }: { value: number; suffix: string; label: string; isInView: boolean }) => {
  const count = useCountUp(value, isInView);
  return (
    <div className="text-center">
      <div className="font-display text-3xl md:text-4xl font-bold text-gradient">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground text-sm mt-1">{label}</div>
    </div>
  );
};

const About = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="about" className="section-spacing section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-card border border-border/50">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-transparent flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto mb-4 animate-pulse-glow" />
                  <p className="text-muted-foreground text-sm">Creative team at work</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary/10 blur-[60px]" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">About Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              We're Not Just an Agency — We're Your <span className="text-gradient">Growth Partners</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded in 2012, NovaX has grown from a small team of digital enthusiasts into a full-service agency trusted by brands worldwide. We blend creativity with data to deliver campaigns that don't just look great — they perform.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Every strategy we craft is rooted in research, refined through testing, and designed to exceed expectations.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s) => (
                <StatItem key={s.label} {...s} isInView={isInView} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
