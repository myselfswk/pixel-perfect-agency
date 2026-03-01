import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 40, suffix: "M+", label: "Revenue Generated" },
];

const values = [
  { title: "Innovation First", desc: "We embrace new ideas and push the boundaries of what's possible in digital marketing." },
  { title: "Data-Driven", desc: "Every decision is backed by data, analytics, and measurable outcomes." },
  { title: "Client-Centric", desc: "Your success is our success. We treat every project as if it were our own." },
  { title: "Transparency", desc: "Open communication, honest reporting, and no hidden agendas — ever." },
];

const StatItem = ({ value, suffix, label, isInView }: { value: number; suffix: string; label: string; isInView: boolean }) => {
  const count = useCountUp(value, isInView);
  return (
    <div className="text-center">
      <div className="font-display text-3xl md:text-5xl font-bold text-gradient">{count}{suffix}</div>
      <div className="text-muted-foreground text-sm mt-2">{label}</div>
    </div>
  );
};

const AboutPage = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-28 section-padding" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-16">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">About Us</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              We're Your <span className="text-gradient">Growth Partners</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              Founded in 2012, NovaX has grown from a small team of digital enthusiasts into a full-service agency trusted by brands worldwide. We blend creativity with data to deliver campaigns that don't just look great — they perform.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 py-10 border-y border-border/30"
          >
            {stats.map((s) => <StatItem key={s.label} {...s} isInView={isInView} />)}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="mb-20">
            <h2 className="font-display text-3xl font-bold mb-10">Our Values</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 + i * 0.1 }} className="bg-gradient-card border border-border/50 rounded-2xl p-8">
                  <h3 className="font-display text-xl font-semibold mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <CTA />
      <Footer />
    </div>
  );
};

export default AboutPage;
