import { motion } from "framer-motion";
import { ExternalLink, Heart } from "lucide-react";

const nonprofits = [
  {
    name: "Frontline Heroes Outdoors",
    url: "https://www.frontlineheroesoutdoors.org/",
    description:
      "Frontline Heroes Outdoors connects first responders, law enforcement, and military veterans with restorative outdoor experiences — fostering healing, camaraderie, and hope through the power of nature.",
    tagline: "Healing through the outdoors.",
  },
  {
    name: "Hometown Hero Outdoors",
    url: "https://hometownherooutdoors.org/",
    description:
      "Hometown Hero Outdoors honors local heroes — firefighters, EMTs, educators, and community champions — by providing meaningful access to outdoor adventures that restore balance and spirit.",
    tagline: "Honoring local legends, one adventure at a time.",
  },
];

export function GivingBack() {
  return (
    <section id="giving-back" className="py-24 md:py-36 bg-secondary/20 relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute left-0 top-0 w-full h-px bg-border" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-4 h-4 text-primary" strokeWidth={1.5} />
            <span className="text-primary tracking-[0.2em] uppercase text-xs font-semibold">
              Giving Back
            </span>
            <Heart className="w-4 h-4 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
            Rooted in <i className="text-primary font-light">Community.</i>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light text-lg leading-relaxed">
            Built by family, driven by purpose. Eduardo Pico Designs gives back to local organizations and causes that matter — because craftsmanship with character goes beyond the product.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {nonprofits.map((org, i) => (
            <motion.div
              key={org.name}
              className="bg-card border border-border p-10 flex flex-col group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              data-testid={`nonprofit-card-${i}`}
            >
              {/* Accent line top */}
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-primary transition-all duration-500 ease-out" />

              <div className="mb-6">
                <span className="text-primary text-xs tracking-[0.2em] uppercase font-semibold block mb-3">
                  {org.tagline}
                </span>
                <h3 className="font-serif text-2xl text-foreground leading-tight">{org.name}</h3>
              </div>

              <p className="text-muted-foreground font-light text-base leading-relaxed flex-grow mb-8">
                {org.description}
              </p>

              <a
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 uppercase tracking-widest text-xs font-semibold text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors self-start"
                data-testid={`nonprofit-learn-more-${i}`}
              >
                Learn More <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-muted-foreground/60 text-sm font-light mt-16 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          A portion of our proceeds supports these organizations. When you shop with us, you invest in more than a beautiful product — you invest in the community we love.
        </motion.p>
      </div>
    </section>
  );
}
