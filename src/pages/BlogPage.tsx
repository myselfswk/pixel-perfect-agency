import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHero from "@/components/PageHero";

const posts = [
  { title: "10 SEO Trends That Will Define 2024", tag: "SEO", date: "Mar 15, 2024", read: "8 min", excerpt: "Stay ahead of the curve with these emerging search engine optimization trends shaping the digital landscape." },
  { title: "Why Performance Marketing Is the Future", tag: "Ads", date: "Mar 10, 2024", read: "6 min", excerpt: "Learn how data-driven campaigns are outperforming traditional marketing by significant margins." },
  { title: "Building Brand Loyalty Through Social Media", tag: "Social", date: "Mar 5, 2024", read: "5 min", excerpt: "Discover strategies for turning followers into loyal brand advocates on every platform." },
  { title: "The Art of High-Converting Landing Pages", tag: "Design", date: "Feb 28, 2024", read: "7 min", excerpt: "Design principles and copywriting techniques that turn visitors into customers." },
  { title: "Mobile-First Design: Beyond Responsive", tag: "Dev", date: "Feb 20, 2024", read: "6 min", excerpt: "Why designing for mobile first isn't just a trend — it's a fundamental shift in how we build." },
  { title: "Content Strategy That Actually Converts", tag: "Content", date: "Feb 15, 2024", read: "9 min", excerpt: "A deep dive into crafting content pipelines that drive measurable business results." },
];

const BlogPage = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <PageHero
        label="Blog"
        title="Insights & Ideas"
        gradient="Ideas"
        description="Thoughts, strategies, and deep dives from the NovaX team on digital marketing, design, and technology."
      />
      <main className="section-padding" ref={ref}>
        <div className="max-w-5xl mx-auto">

          <div className="grid sm:grid-cols-2 gap-6 mb-20">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="group bg-gradient-card border border-border/50 rounded-2xl p-7 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{post.tag}</span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <span className="text-xs text-muted-foreground">· {post.read}</span>
                </div>
                <h2 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
