import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const clients = ["Google", "Spotify", "Stripe", "Shopify", "Slack", "Notion", "Figma", "Webflow"];

const Clients = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="py-10 section-padding border-y border-border/30 overflow-hidden" ref={ref}>
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center text-muted-foreground text-sm tracking-[0.15em] uppercase mb-6"
      >
        Trusted by innovative brands
      </motion.p>
      <div className="relative">
        <div className="flex animate-[scroll_20s_linear_infinite] w-max gap-16">
          {[...clients, ...clients].map((name, i) => (
            <span
              key={i}
              className="font-display text-2xl font-bold text-muted-foreground/30 whitespace-nowrap select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
