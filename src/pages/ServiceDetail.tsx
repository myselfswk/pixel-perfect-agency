import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiCheck, HiOutlineLightningBolt, HiOutlineChartBar, HiOutlineClock } from "react-icons/hi";
import { services } from "@/data/services";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import PageHero from "@/components/PageHero";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const serviceStats: Record<string, { value: number; suffix: string; label: string }[]> = {
  "seo-optimization": [
    { value: 300, suffix: "%", label: "Avg Traffic Increase" },
    { value: 85, suffix: "+", label: "Keywords Ranked" },
    { value: 4, suffix: "x", label: "ROI Delivered" },
    { value: 50, suffix: "+", label: "Clients Served" },
  ],
  "performance-marketing": [
    { value: 10, suffix: "M+", label: "Ad Spend Managed" },
    { value: 35, suffix: "%", label: "Lower CPA" },
    { value: 5, suffix: "x", label: "Average ROAS" },
    { value: 200, suffix: "+", label: "Campaigns Run" },
  ],
  "mobile-development": [
    { value: 60, suffix: "+", label: "Apps Launched" },
    { value: 4.8, suffix: "★", label: "Avg Store Rating" },
    { value: 2, suffix: "M+", label: "Downloads" },
    { value: 99, suffix: "%", label: "Crash-Free Rate" },
  ],
  "social-media": [
    { value: 5, suffix: "M+", label: "Reach Generated" },
    { value: 150, suffix: "%", label: "Engagement Growth" },
    { value: 80, suffix: "+", label: "Brands Managed" },
    { value: 10, suffix: "K+", label: "Content Pieces" },
  ],
  "web-development": [
    { value: 120, suffix: "+", label: "Sites Delivered" },
    { value: 98, suffix: "/100", label: "Avg Performance Score" },
    { value: 40, suffix: "%", label: "Conversion Lift" },
    { value: 99.9, suffix: "%", label: "Uptime" },
  ],
  "cms-development": [
    { value: 75, suffix: "+", label: "CMS Projects" },
    { value: 60, suffix: "%", label: "Faster Publishing" },
    { value: 30, suffix: "+", label: "Custom Plugins" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
  ],
};

const serviceProcess = [
  { icon: HiOutlineLightningBolt, title: "Discovery & Strategy", desc: "We deep-dive into your business, audience, and goals to build a tailored strategy." },
  { icon: HiOutlineChartBar, title: "Execution & Optimization", desc: "Our team implements with precision and continuously optimizes based on real data." },
  { icon: HiOutlineClock, title: "Review & Scale", desc: "We measure results, share transparent reports, and scale what works best." },
];

const serviceFAQs: Record<string, { q: string; a: string }[]> = {
  "seo-optimization": [
    { q: "How long until I see SEO results?", a: "Typically 3-6 months for significant organic ranking improvements, though some quick wins can appear within weeks." },
    { q: "Do you guarantee first page rankings?", a: "We don't guarantee specific positions — no ethical agency can. We guarantee a proven process, transparent reporting, and consistent growth." },
    { q: "Will you handle content creation too?", a: "Yes. Our team includes SEO copywriters who create optimized content aligned with your keyword strategy." },
  ],
  "performance-marketing": [
    { q: "What's the minimum ad budget you work with?", a: "We recommend a minimum of $3,000/month in ad spend to generate meaningful data and results." },
    { q: "Which platforms do you manage ads on?", a: "Google Ads, Meta (Facebook/Instagram), LinkedIn, TikTok, and programmatic display networks." },
    { q: "How quickly can campaigns go live?", a: "Most campaigns are live within 5-7 business days after strategy approval." },
  ],
  "mobile-development": [
    { q: "Do you build for both iOS and Android?", a: "Yes. We use React Native for cross-platform or native Swift/Kotlin for platform-specific needs." },
    { q: "Do you handle app store submission?", a: "Absolutely. We manage the entire submission process for both Apple App Store and Google Play." },
    { q: "What about post-launch support?", a: "We offer ongoing maintenance, updates, and feature development after launch." },
  ],
  "social-media": [
    { q: "How many posts per week do you create?", a: "This depends on the plan, typically 3-5 posts per platform per week, plus stories and engagement." },
    { q: "Do you handle community management?", a: "Yes, we monitor and respond to comments, DMs, and mentions to keep your community engaged." },
    { q: "Can you work with our existing brand guidelines?", a: "Of course. We adapt all content to your brand voice, visual identity, and tone." },
  ],
  "web-development": [
    { q: "What tech stack do you use?", a: "React, Next.js, TypeScript, and Tailwind CSS for front-end. Node.js, Python, or headless CMS for backend." },
    { q: "Do you offer hosting and maintenance?", a: "Yes. We provide managed hosting, security updates, and ongoing technical support." },
    { q: "Can you migrate my existing website?", a: "Absolutely. We handle full migrations with zero downtime and SEO preservation." },
  ],
  "cms-development": [
    { q: "Which CMS platforms do you work with?", a: "WordPress, Strapi, Sanity, Contentful, and custom-built solutions depending on your needs." },
    { q: "Can you train our team on the CMS?", a: "Yes. We provide hands-on training sessions and documentation for your content team." },
    { q: "Is headless CMS better for our use case?", a: "It depends on your needs. We'll evaluate your requirements and recommend the best approach." },
  ],
};

const StatItem = ({ value, suffix, label, isInView }: { value: number; suffix: string; label: string; isInView: boolean }) => {
  const count = useCountUp(Math.floor(value), isInView);
  return (
    <div className="text-center">
      <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{count}{suffix}</div>
      <div className="text-muted-foreground text-sm mt-2">{label}</div>
    </div>
  );
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const { ref: statsRef, isInView: statsInView } = useScrollReveal();
  const { ref: processRef, isInView: processInView } = useScrollReveal();
  const { ref: faqRef, isInView: faqInView } = useScrollReveal();

  if (!service) {
    return (
      <div className="bg-background text-foreground min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const stats = serviceStats[service.slug] || [];
  const faqs = serviceFAQs[service.slug] || [];

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <PageHero
        label={service.title}
        title={service.title}
        gradient={service.title.split(" ").pop() || ""}
        description={service.longDesc}
        icon={service.icon}
        image={service.image}
      />

      {/* Stats */}
      {stats.length > 0 && (
        <section className="section-padding pb-10" ref={statsRef}>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-border/30"
            >
              {stats.map((s) => <StatItem key={s.label} {...s} isInView={statsInView} />)}
            </motion.div>
          </div>
        </section>
      )}

      {/* Features & Benefits */}
      <main className="section-padding py-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-card border border-border/50 rounded-2xl p-8"
            >
              <h2 className="font-display text-2xl font-bold mb-6">What We Deliver</h2>
              <ul className="space-y-4">
                {service.features.map((f, i) => (
                  <motion.li key={f} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <HiCheck className="text-primary text-sm" />
                    </span>
                    {f}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-card border border-border/50 rounded-2xl p-8"
            >
              <h2 className="font-display text-2xl font-bold mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((b, i) => (
                  <motion.li key={b} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {b}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </main>

      {/* How It Works */}
      <section className="section-padding py-14" ref={processRef}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">How It Works</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Our <span className="text-gradient">Process</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {serviceProcess.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-gradient-card border border-border/50 rounded-2xl p-7 text-center relative"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display font-bold text-primary">{i + 1}</span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="section-padding py-14" ref={faqRef}>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">FAQ</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Common <span className="text-gradient">Questions</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
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
      )}

      <CTA />
      <Footer />
    </div>
  );
};

export default ServiceDetail;
