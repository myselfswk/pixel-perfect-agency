import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import { services } from "@/data/services";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";
import PageHero from "@/components/PageHero";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

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

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <PageHero
        label={service.title}
        title={service.title}
        gradient={service.title.split(" ").pop() || ""}
        description={service.longDesc}
        icon={service.icon}
        backLink={{ to: "/#services", label: "Back to Services" }}
      />

      <main className="section-padding pb-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 mb-16">
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
      <CTA />
      <Footer />
    </div>
  );
};

export default ServiceDetail;
