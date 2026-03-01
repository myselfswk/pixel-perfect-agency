import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { IconType } from "react-icons";

interface PageHeroProps {
  label: string;
  title: string;
  gradient?: string;
  description: string;
  icon?: IconType;
  backLink?: { to: string; label: string };
}

const PageHero = ({ label, title, gradient, description, icon: Icon, backLink }: PageHeroProps) => (
  <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 section-padding overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
    </div>

    <div className="max-w-5xl mx-auto relative z-10">
      {backLink && (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Link to={backLink.to} className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm">
            <HiArrowLeft /> {backLink.label}
          </Link>
        </motion.div>
      )}

      {Icon && (
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
          <Icon className="text-primary text-3xl" />
        </motion.div>
      )}

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">
        {label}
      </motion.p>

      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="font-display text-4xl md:text-6xl font-bold mb-6">
        {gradient ? (
          <>
            {title.split(gradient)[0]}
            <span className="text-gradient">{gradient}</span>
            {title.split(gradient)[1]}
          </>
        ) : (
          title
        )}
      </motion.h1>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl">
        {description}
      </motion.p>
    </div>
  </section>
);

export default PageHero;
