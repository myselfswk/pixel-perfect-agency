import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowLeft, HiCheck } from "react-icons/hi";
import { services } from "@/data/services";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTA from "@/components/sections/CTA";

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

  const Icon = service.icon;

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-28 pb-10 section-padding">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <HiArrowLeft /> Back to Services
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mb-12">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Icon className="text-primary text-3xl" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl">{service.longDesc}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-card border border-border/50 rounded-2xl p-8"
            >
              <h2 className="font-display text-2xl font-bold mb-6">What We Deliver</h2>
              <ul className="space-y-4">
                {service.features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
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
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-card border border-border/50 rounded-2xl p-8"
            >
              <h2 className="font-display text-2xl font-bold mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((b, i) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
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
