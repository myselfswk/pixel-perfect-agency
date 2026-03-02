import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does it take to see results?",
    a: "Most clients see measurable improvements within 30-60 days for paid channels and 3-6 months for organic strategies like SEO. We set clear milestones and report progress weekly.",
  },
  {
    q: "What's your minimum engagement period?",
    a: "We typically work on a 3-month minimum to ensure strategies have time to deliver results. After that, we continue on a month-to-month basis.",
  },
  {
    q: "Do you work with startups or only established brands?",
    a: "Both. We've helped pre-launch startups build their digital presence from scratch and scaled enterprise brands to new markets. Our strategies adapt to your stage and budget.",
  },
  {
    q: "How do you measure and report success?",
    a: "You get access to a real-time dashboard with KPIs like traffic, conversions, ROI, and more. We also provide detailed monthly reports with insights and recommendations.",
  },
  {
    q: "What makes you different from other agencies?",
    a: "We combine strategy, creative, and technology under one roof. No outsourcing, no cookie-cutter playbooks — every solution is custom-built for your business goals.",
  },
  {
    q: "Can I cancel or pause my plan anytime?",
    a: "After the initial engagement period, you can pause or cancel with 30 days' notice. We're confident you'll want to stay — our client retention rate is 96%.",
  },
];

const FAQ = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="section-spacing section-padding" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            FAQ
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Got <span className="text-gradient">Questions?</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-gradient-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-sm md:text-base py-5 hover:no-underline hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
