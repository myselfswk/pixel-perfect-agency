import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface PageHeroProps {
  label: string;
  title: string;
  gradient?: string;
  description: string;
  icon?: IconType;
  image?: string;
}

const PageHero = ({ label, title, gradient, description, icon: Icon, image }: PageHeroProps) => (
  <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 section-padding overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
    </div>

    <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      {/* Left: Content */}
      <div>
        {Icon && (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
            <Icon className="text-primary text-2xl" />
          </motion.div>
        )}

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          {label}
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-[1.1]">
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

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
          {description}
        </motion.p>
      </div>

      {/* Right: Image */}
      {image && (
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-border/40 shadow-card">
            <img src={image} alt={title} className="w-full h-auto object-cover aspect-[4/3]" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>
          {/* Glow behind image */}
          <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl -z-10" />
        </motion.div>
      )}
    </div>
  </section>
);

export default PageHero;
