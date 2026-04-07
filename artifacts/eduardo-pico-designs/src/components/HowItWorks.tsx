import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Share Your Vision",
    description:
      "Tell us about the piece you have in mind — the occasion, the recipient, or the brand message. The more you share, the better we can bring your idea to life.",
  },
  {
    number: "02",
    title: "We Design Together",
    description:
      "Our team crafts a personalized design mockup based on your vision. We refine and collaborate until every detail is exactly right.",
  },
  {
    number: "03",
    title: "Artisan Crafting",
    description:
      "Once approved, your piece is handcrafted using premium materials. Every item is made with care, precision, and a deep commitment to quality.",
  },
  {
    number: "04",
    title: "Delivered with Care",
    description:
      "Your custom creation arrives beautifully packaged and ready to impress — whether it's for a home, a celebration, or a boardroom.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-36 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
            How Custom Laser Engraving <i className="font-light text-primary">Works.</i>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden md:block absolute top-8 left-[calc(12.5%-2px)] right-[calc(12.5%-2px)] h-px bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="flex flex-col items-center md:items-start text-center md:text-left relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                data-testid={`step-${i + 1}`}
              >
                {/* Step number circle */}
                <div className="relative w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center mb-8 bg-background z-10 flex-shrink-0">
                  <span className="font-serif text-lg text-primary font-medium">{step.number}</span>
                </div>

                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-light text-base leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://eduardopicodesigns.com/pages/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary text-foreground px-10 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-primary/90 transition-colors duration-300"
            data-testid="btn-start-order-how-it-works"
          >
            Begin Your Custom Order
          </a>
        </motion.div>
      </div>
    </section>
  );
}
