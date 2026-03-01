import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/PageHero";

const ContactPage = () => (
  <div className="bg-background text-foreground overflow-x-hidden">
    <Navbar />
    <PageHero
      label="Contact"
      title="Let's Talk"
      gradient="Talk"
      description="Ready to start your next project? Drop us a line and we'll get back to you within 24 hours."
    />
    <main className="section-padding pb-20">
      <div className="max-w-5xl mx-auto">

        <div className="grid md:grid-cols-5 gap-10">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input placeholder="Your Name" className="bg-secondary border border-border/50 rounded-xl px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
              <input placeholder="Email Address" type="email" className="bg-secondary border border-border/50 rounded-xl px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
            </div>
            <input placeholder="Subject" className="w-full bg-secondary border border-border/50 rounded-xl px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
            <textarea placeholder="Your Message" rows={6} className="w-full bg-secondary border border-border/50 rounded-xl px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" />
            <button type="submit" className="bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity glow-primary">
              Send Message
            </button>
          </motion.form>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="md:col-span-2 space-y-6">
            {[
              { icon: HiOutlineMail, label: "Email", value: "hello@novax.agency" },
              { icon: HiOutlinePhone, label: "Phone", value: "+1 (555) 000-1234" },
              { icon: HiOutlineLocationMarker, label: "Office", value: "123 Innovation St, New York, NY 10001" },
            ].map((c) => (
              <div key={c.label} className="bg-gradient-card border border-border/50 rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <c.icon className="text-primary text-lg" />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">{c.label}</p>
                  <p className="text-muted-foreground text-sm">{c.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default ContactPage;
