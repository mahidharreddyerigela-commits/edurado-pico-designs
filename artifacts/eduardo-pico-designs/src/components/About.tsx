import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Side */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden relative">
              <img 
                src="/images/about-workshop.png" 
                alt="Artisan hands crafting a wooden piece" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-black/10 m-4 mix-blend-overlay"></div>
            </div>
            {/* Decorative block */}
            <motion.div 
              className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 -z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <span className="text-primary tracking-[0.2em] uppercase text-xs font-semibold mb-6 block">
              The Artisan Studio
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
              Craftsmanship with <i className="text-primary font-light">Soul</i>.
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-light text-lg leading-relaxed">
              <p>
                Eduardo Pico Designs is a creative custom decor brand born from a passion for tangible quality. In a world of mass production, we believe in the quiet power of a piece made specifically for you.
              </p>
              <p>
                We help our clients celebrate milestones, brand their businesses, gift with intention, and decorate their spaces with meaningful, custom-made creations. Every piece that leaves our studio carries the warmth of human touch and the precision of expert craftsmanship.
              </p>
              <p>
                Whether it's a personalized door hanger that welcomes loved ones or an engraved corporate award that honors dedication, our work is designed to stand out and stand the test of time.
              </p>
            </div>
            
            <div className="mt-12">
              <img 
                src="/images/logo-placeholder.svg" 
                alt="Eduardo Pico Signature" 
                className="h-12 opacity-80 hidden" // Placeholder for an actual signature image if we had one
              />
              <div className="font-serif text-2xl text-foreground italic">Eduardo Pico</div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground mt-2 block">Founder & Creator</span>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
