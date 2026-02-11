import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HiCheck } from "react-icons/hi";

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    period: "/month",
    desc: "Perfect for small businesses getting started.",
    features: ["SEO Audit & Strategy", "Social Media Management", "Monthly Reporting", "Email Support"],
    featured: false,
  },
  {
    name: "Growth",
    price: "$5,500",
    period: "/month",
    desc: "For scaling brands ready to dominate.",
    features: ["Everything in Starter", "PPC Campaign Management", "Content Creation", "Dedicated Strategist", "Weekly Calls"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Full-service for industry leaders.",
    features: ["Everything in Growth", "Full Funnel Strategy", "Video Production", "24/7 Priority Support", "Custom Integrations"],
    featured: false,
  },
];

const Pricing = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="pricing" className="section-spacing section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">Pricing</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative rounded-2xl p-8 border transition-all duration-500 hover:-translate-y-1 ${
                plan.featured
                  ? "bg-gradient-card border-primary/40 glow-primary scale-[1.02]"
                  : "bg-gradient-card border-border/50 shadow-card"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.desc}</p>
              <div className="mb-8">
                <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <HiCheck className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  plan.featured
                    ? "bg-gradient-primary text-primary-foreground hover:opacity-90"
                    : "border border-border text-foreground hover:border-primary/50"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
