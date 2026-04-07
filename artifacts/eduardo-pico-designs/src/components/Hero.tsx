import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.png" 
          alt="Artisan workshop" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl w-full"
        >
          {/* Brand name */}
          <span className="text-white/70 text-xs md:text-sm tracking-[0.25em] uppercase mb-5 block font-medium">
            Eduardo Pico Designs
          </span>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-5 drop-shadow-lg">
            Custom Awards,<br />Signs &amp; Engraving
          </h1>

          {/* Gold accent line */}
          <p className="text-primary text-base md:text-lg font-semibold mb-3 tracking-wide">
            Built for Events, Businesses &amp; Custom Projects
          </p>

          {/* Badge line */}
          <p className="text-white text-sm md:text-base font-semibold mb-8 tracking-wide">
            Veteran-Owned &nbsp;•&nbsp; San Antonio &nbsp;•&nbsp; Fast Turnaround
          </p>

          {/* Description */}
          <p className="text-white/80 font-light text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            We design and create custom awards, tumblers, signs, and branded products using UV printing, laser engraving, and CNC. Built to stand out and made to last.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto">
            <a
              href="https://eduardopicodesigns.com/pages/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block bg-primary text-white hover:bg-primary/90 px-8 py-4 text-sm tracking-widest uppercase font-semibold transition-all duration-300 text-center"
              data-testid="hero-cta-explore"
            >
              Get a Quote
            </a>
            <a
              href="https://eduardopicodesigns.com/collections/all"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block bg-transparent border border-white/60 text-white hover:bg-white hover:text-black px-8 py-4 text-sm tracking-widest uppercase font-semibold transition-all duration-300 text-center"
              data-testid="hero-cta-custom"
            >
              See Our Work
            </a>
          </div>

          {/* Location tag */}
          <p className="text-white/55 text-sm mt-8 font-light tracking-wide">
            Serving San Antonio and surrounding areas
          </p>
        </motion.div>
      </div>
    </section>
  );
}
