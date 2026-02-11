import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaLinkedin, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa";

const Footer = () => (
  <footer className="border-t border-border/50 section-padding py-16">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <h3 className="font-display text-2xl font-bold mb-4">
            Nova<span className="text-gradient">X</span>
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Full-service digital marketing agency helping brands break through the noise since 2012.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="hover:text-foreground transition-colors cursor-pointer">SEO Optimization</li>
            <li className="hover:text-foreground transition-colors cursor-pointer">Performance Marketing</li>
            <li className="hover:text-foreground transition-colors cursor-pointer">Content Strategy</li>
            <li className="hover:text-foreground transition-colors cursor-pointer">Web Development</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="hover:text-foreground transition-colors cursor-pointer">About</li>
            <li className="hover:text-foreground transition-colors cursor-pointer">Careers</li>
            <li className="hover:text-foreground transition-colors cursor-pointer">Blog</li>
            <li className="hover:text-foreground transition-colors cursor-pointer">Contact</li>
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
