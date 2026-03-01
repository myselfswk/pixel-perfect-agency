import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HiOutlineLocationMarker, HiOutlineClock } from "react-icons/hi";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

const openings = [
  { title: "Senior SEO Strategist", dept: "Marketing", location: "Remote", type: "Full-time" },
  { title: "Performance Marketing Lead", dept: "Ads", location: "New York, NY", type: "Full-time" },
  { title: "React Developer", dept: "Engineering", location: "Remote", type: "Full-time" },
  { title: "UI/UX Designer", dept: "Design", location: "London, UK", type: "Full-time" },
  { title: "Content Writer", dept: "Content", location: "Remote", type: "Part-time" },
  { title: "Account Manager", dept: "Client Services", location: "New York, NY", type: "Full-time" },
];

const perks = [
  "Flexible remote work", "Unlimited PTO", "Learning budget", "Health & wellness", "Team retreats", "Equity options",
];

const CareersPage = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-28 section-padding" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-16">
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">Careers</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Join the <span className="text-gradient">NovaX Team</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              We're always looking for talented individuals who are passionate about digital marketing and technology. Build your career with a team that values creativity, growth, and impact.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="mb-20">
            <h2 className="font-display text-2xl font-bold mb-6">Perks & Benefits</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {perks.map((p, i) => (
                <motion.div key={p} initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.3 + i * 0.06 }} className="bg-gradient-card border border-border/50 rounded-xl p-5 text-center text-sm text-muted-foreground">
                  {p}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="mb-20">
            <h2 className="font-display text-2xl font-bold mb-8">Open Positions</h2>
            <div className="space-y-4">
              {openings.map((job, i) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="group bg-gradient-card border border-border/50 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-primary/30 transition-colors"
                >
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-1">{job.title}</h3>
                    <p className="text-muted-foreground text-sm">{job.dept}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><HiOutlineLocationMarker className="text-primary" /> {job.location}</span>
                    <span className="flex items-center gap-1"><HiOutlineClock className="text-primary" /> {job.type}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;
