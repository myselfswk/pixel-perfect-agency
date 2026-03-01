import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX, HiChevronDown } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { services } from "@/data/services";

const navItems = ["Services", "About", "Work", "Pricing", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    setServicesOpen(false);
    if (isHome) {
      document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id.toLowerCase()}`;
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-card" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between section-padding py-4">
        <Link to="/" className="font-display text-2xl font-bold text-foreground tracking-tight">
          Nova<span className="text-gradient">X</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item === "Services" ? (
              <div key={item} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-1"
                >
                  Services <HiChevronDown className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-3 w-64 glass rounded-xl overflow-hidden shadow-card"
                    >
                      <div className="py-2">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                          >
                            <s.icon className="text-primary text-lg shrink-0" />
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item}
              </button>
            )
          )}
          <button
            onClick={() => scrollTo("contact")}
            className="bg-gradient-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity glow-primary"
          >
            Get Started
          </button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground text-2xl">
          {mobileOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="flex flex-col gap-4 section-padding py-6">
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="text-left text-foreground text-lg font-medium flex items-center gap-2 w-full"
                >
                  Services <HiChevronDown className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                      <div className="pl-4 pt-2 space-y-2">
                        {services.map((s) => (
                          <Link key={s.slug} to={`/services/${s.slug}`} onClick={() => { setMobileOpen(false); setServicesOpen(false); }} className="flex items-center gap-2 text-muted-foreground text-sm py-1 hover:text-foreground transition-colors">
                            <s.icon className="text-primary" /> {s.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {navItems.filter((i) => i !== "Services").map((item) => (
                <button key={item} onClick={() => scrollTo(item)} className="text-left text-foreground text-lg font-medium">
                  {item}
                </button>
              ))}
              <button onClick={() => scrollTo("contact")} className="bg-gradient-primary text-primary-foreground px-5 py-3 rounded-lg text-sm font-semibold w-fit">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
