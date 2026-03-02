import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HiOutlineExclamationCircle, HiOutlineTrendingDown, HiOutlineClock, HiOutlineEmojiSad } from "react-icons/hi";

const painPoints = [
  {
    icon: HiOutlineTrendingDown,
    title: "Declining Organic Reach",
    desc: "Your competitors are outranking you while your traffic stagnates month after month.",
  },
  {
    icon: HiOutlineClock,
    title: "Wasted Ad Spend",
    desc: "Throwing money at ads without clear ROI or proper attribution tracking.",
  },
  {
    icon: HiOutlineEmojiSad,
    title: "Inconsistent Brand Presence",
    desc: "Your digital presence feels fragmented across platforms with no unified strategy.",
  },
  {
    icon: HiOutlineExclamationCircle,
    title: "Outdated Technology",
    desc: "Legacy systems and slow websites are costing you conversions every single day.",
  },
];

const Problem = () => {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="section-spacing section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <p className="text-destructive text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Sound Familiar?
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            The Challenges Holding You <span className="text-gradient">Back</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Most businesses struggle with the same digital roadblocks. Here's what's costing you growth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {painPoints.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gradient-card border border-destructive/10 rounded-2xl p-7 hover:border-destructive/25 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <p.icon className="text-destructive text-xl" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
