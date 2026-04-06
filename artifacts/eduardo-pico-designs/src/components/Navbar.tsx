import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-4" : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Desktop Nav Left */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <Link href="#collections" className="hover:text-primary transition-colors" data-testid="nav-collections">Collections</Link>
          <Link href="#about" className="hover:text-primary transition-colors" data-testid="nav-about">About</Link>
        </nav>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2" data-testid="nav-logo">
          <div className={`transition-all duration-500 rounded px-2 py-1 ${
            isScrolled ? "bg-transparent" : "bg-white/10 backdrop-blur-sm"
          }`}>
            <img
              src="/images/logo.png"
              alt="Eduardo Pico Designs"
              className="h-10 md:h-12 w-auto object-contain"
              style={{ maxWidth: "160px" }}
            />
          </div>
        </Link>

        {/* Desktop Nav Right */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <Link href="#business" className="hover:text-primary transition-colors" data-testid="nav-business">Business</Link>
          <Link href="#contact" className="hover:text-primary transition-colors" data-testid="nav-contact">Contact</Link>
          
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-border">
            <button className="hover:text-primary transition-colors" data-testid="nav-account" aria-label="Account">
              <User className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button className="hover:text-primary transition-colors relative" data-testid="nav-cart" aria-label="Cart">
              <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1.5 bg-primary text-primary-foreground text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button className="hover:text-primary transition-colors relative" data-testid="nav-cart-mobile">
            <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button 
            className="text-foreground" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="nav-mobile-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="fixed inset-0 top-[72px] bg-background z-30 p-6 flex flex-col md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <nav className="flex flex-col gap-6 text-xl font-serif text-center mt-12">
            <Link href="#collections" onClick={() => setMobileMenuOpen(false)}>Collections</Link>
            <Link href="#about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="#business" onClick={() => setMobileMenuOpen(false)}>Business & Custom</Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link href="#account" onClick={() => setMobileMenuOpen(false)}>Account</Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
