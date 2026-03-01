import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaLinkedin, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/50 section-padding py-16">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <Link to="/" className="font-display text-2xl font-bold mb-4 inline-block">
            Nova<span className="text-gradient">X</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Full-service digital marketing agency helping brands break through the noise since 2012.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services/seo-optimization" className="hover:text-foreground transition-colors">SEO Optimization</Link></li>
            <li><Link to="/services/performance-marketing" className="hover:text-foreground transition-colors">Performance Marketing</Link></li>
            <li><Link to="/services/mobile-development" className="hover:text-foreground transition-colors">Mobile Development</Link></li>
            <li><Link to="/services/web-development" className="hover:text-foreground transition-colors">Web Development</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
            <li><Link to="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
            <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <HiOutlineMail className="text-primary" />
              hello@novax.agency
            </div>
            <div className="flex items-center gap-2">
              <HiOutlinePhone className="text-primary" />
              +1 (555) 000-1234
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            {[FaLinkedin, FaTwitter, FaInstagram, FaDribbble].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground text-xs">© 2024 NovaX Agency. All rights reserved.</p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
