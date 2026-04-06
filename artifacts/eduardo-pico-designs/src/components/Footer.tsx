import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import { SiTiktok, SiVisa, SiMastercard, SiPaypal, SiAmericanexpress, SiApplepay } from "react-icons/si";

const footerLinks = {
  shop: [
    { label: "Shop All Products", href: "#shop-all" },
    { label: "Door Hangers", href: "#door-hangers" },
    { label: "Tumblers", href: "#tumblers" },
    { label: "Trays & Boards", href: "#trays" },
    { label: "Custom Awards", href: "#awards" },
    { label: "Business Branded", href: "#business-branded" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Giving Back", href: "#giving-back" },
    { label: "Search", href: "#search" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Refund Policy", href: "#refund" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Brand column */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="font-serif text-3xl text-background font-medium tracking-tight">Eduardo Pico</span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-background/50 mt-1">Designs</span>
            </div>
            <p className="font-light text-sm text-background/60 leading-relaxed mb-8">
              Custom crafted decor and personalized pieces made with heart. Serving personal and business clients with unmatched quality and care.
            </p>
            <div className="flex items-center gap-5">
              <a href="https://www.instagram.com/eduardopicodesigns/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-background/50 hover:text-primary transition-colors" data-testid="footer-social-instagram">
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a href="https://www.facebook.com/EduardoPicoDesigns/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-background/50 hover:text-primary transition-colors" data-testid="footer-social-facebook">
                <Facebook className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a href="https://www.tiktok.com/@eduardo.pico.designs" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-background/50 hover:text-primary transition-colors" data-testid="footer-social-tiktok">
                <SiTiktok className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Shop links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-background text-xs uppercase tracking-[0.2em] font-semibold mb-6">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/55 hover:text-primary text-sm font-light transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h4 className="text-background text-xs uppercase tracking-[0.2em] font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/55 hover:text-primary text-sm font-light transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-background text-xs uppercase tracking-[0.2em] font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 mb-10">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/55 hover:text-primary text-sm font-light transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-background text-xs uppercase tracking-[0.2em] font-semibold mb-4">Contact</h4>
            <a href="mailto:hello@eduardopico.com" className="text-background/55 hover:text-primary text-sm font-light transition-colors block">
              hello@eduardopico.com
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-background/40 text-xs font-light tracking-wide">
            &copy; 2026, Eduardo Pico Designs. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-4 text-background/40" aria-label="Accepted payment methods">
            <SiVisa className="w-8 h-5" />
            <SiMastercard className="w-7 h-5" />
            <SiPaypal className="w-7 h-5" />
            <SiAmericanexpress className="w-8 h-5" />
            <SiApplepay className="w-9 h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
