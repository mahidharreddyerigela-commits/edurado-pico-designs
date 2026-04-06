import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Eduardo created the most beautiful custom door hanger for our new home. The quality was beyond anything I expected — people ask about it constantly. We've ordered three more as gifts since then.",
    name: "Maria Gonzalez",
    title: "Happy Homeowner",
  },
  {
    quote:
      "We ordered branded tumblers for our entire sales team. The engraving was flawless, the presentation was stunning, and our clients were genuinely impressed. Eduardo Pico Designs is our go-to for corporate gifting.",
    name: "James Hartley",
    title: "Director of Marketing, Hartley & Co.",
  },
  {
    quote:
      "The custom award we received for our annual gala was breathtaking. It felt premium, personal, and completely unlike anything we'd ever given before. The whole process was seamless and the result was extraordinary.",
    name: "Denise Rivera",
    title: "Events Chair, Rivera Foundation",
  },
  {
    quote:
      "I surprised my sister with a personalized charcuterie board for her wedding and everyone wanted to know where it came from. Exquisite craftsmanship and a truly unique gift. I'll be ordering again for the holidays.",
    name: "Caitlin Moore",
    title: "Loyal Customer",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-36 bg-secondary/30 overflow-hidden relative">
      <div className="absolute left-0 top-0 w-full h-px bg-border" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">
            Kind Words
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
            What Our Clients <i className="font-light text-primary">Say.</i>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border p-10 flex flex-col gap-6 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              data-testid={`testimonial-card-${i}`}
            >
              {/* Quote mark */}
              <span className="font-serif text-6xl text-primary/20 leading-none select-none absolute top-6 left-8">&ldquo;</span>

              <p className="text-foreground/80 font-light text-lg leading-relaxed pt-6 italic">
                {t.quote}
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-serif font-medium text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <span className="block text-foreground font-medium text-sm">{t.name}</span>
                  <span className="block text-muted-foreground text-xs font-light">{t.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
