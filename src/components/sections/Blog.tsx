import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HiArrowRight } from "react-icons/hi";

const posts = [
  { tag: "SEO", title: "10 SEO Trends That Will Define 2025", date: "Jan 18, 2025", read: "6 min read" },
  { tag: "PPC", title: "How We Achieved 8x ROAS for a DTC Brand", date: "Dec 4, 2024", read: "5 min read" },
  { tag: "Strategy", title: "The Death of the Marketing Funnel (And What Replaces It)", date: "Nov 22, 2024", read: "7 min read" },
];

const Blog = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="section-spacing section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-4"
        >
          <div>
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">Insights</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Latest From the <span className="text-gradient">Blog</span>
            </h2>
          </div>
          <a href="#" className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
            View All <HiArrowRight />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group bg-gradient-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-accent/10" />
              <div className="p-6">
                <span className="text-primary text-xs font-semibold tracking-wider uppercase">{p.tag}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {p.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{p.date}</span>
                  <span>·</span>
                  <span>{p.read}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
