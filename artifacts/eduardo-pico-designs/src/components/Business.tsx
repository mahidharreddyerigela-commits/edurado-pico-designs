import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  { title: "Custom Branding", description: "Your logo, colors, and identity — applied with artisan precision to every piece." },
  { title: "Bulk Ordering", description: "Consistent quality at scale. Perfect for corporate gifting, events, and team recognition." },
  { title: "Handcrafted Presentation", description: "Every order arrives beautifully finished — no assembly required, just impact." },
  { title: "Personalized Service", description: "A dedicated creative partner guides you from concept to delivery." },
  { title: "Premium Materials", description: "We source only quality materials — your brand deserves nothing less." },
  { title: "Detail-Focused Craft", description: "Each piece is inspected by hand before it ever reaches you." },
];

export function Business() {
  return (
    <section id="business" className="py-24 md:py-36 bg-foreground text-background relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)`,
        backgroundSize: "20px 20px"
      }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-primary/80 tracking-[0.2em] uppercase text-xs font-semibold mb-6 block">
              For Businesses & Organizations
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-background mb-8 leading-tight">
              Elevate Your <br /><i className="font-light text-primary/80">Brand Identity.</i>
            </h2>
            <p className="text-background/70 font-light text-lg leading-relaxed mb-12 max-w-lg">
              Eduardo Pico Designs partners with businesses to create branded merchandise and custom awards that leave a lasting impression. We blend your brand's identity with our artisan sensibility — the result is something people actually keep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center bg-primary text-foreground px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-primary/90 transition-colors duration-300"
                data-testid="btn-start-custom-order"
              >
                Start a Custom Order
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center border border-background/30 text-background px-8 py-4 uppercase tracking-widest text-sm font-medium hover:border-primary hover:text-primary transition-all duration-300"
                data-testid="btn-contact-us-business"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          {/* Right benefits grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                className="flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-testid={`benefit-item-${i}`}
              >
                <CheckCircle className="w-5 h-5 text-primary/70 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="text-background font-serif text-lg mb-1">{benefit.title}</h4>
                  <p className="text-background/60 text-sm font-light leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
