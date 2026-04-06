import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    title: "Door Hangers",
    description: "Welcome guests with elegant, custom-crafted greetings.",
    image: "/images/door-hangers.jpg",
    link: "#door-hangers"
  },
  {
    title: "Tumblers",
    description: "Premium engraved drinkware for daily luxury.",
    image: "/images/tumblers.png",
    link: "#tumblers"
  },
  {
    title: "Trays & Boards",
    description: "Artisan charcuterie boards and serving trays.",
    image: "/images/trays-boards.png",
    link: "#trays"
  },
  {
    title: "Custom Awards",
    description: "Sophisticated recognition for outstanding achievement.",
    image: "/images/awards.png",
    link: "#awards"
  },
  {
    title: "Business Branded",
    description: "Meaningful corporate gifts that leave an impression.",
    image: "/images/business.png",
    link: "#business-branded"
  },
  {
    title: "Shop All",
    description: "Explore the complete Eduardo Pico Designs catalog.",
    image: "/images/custom-work.png",
    link: "#shop-all"
  }
];

export function Collections() {
  return (
    <section id="collections" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">Curated Collections</h2>
          <div className="w-12 h-[1px] bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light text-lg">
            Meaningful pieces crafted for every occasion. Discover our signature offerings, handmade with uncompromising quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {collections.map((item, index) => (
            <motion.a
              href={item.link}
              key={item.title}
              className="group block relative overflow-hidden bg-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              data-testid={`collection-card-${index}`}
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                
                {/* Hover overlay content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-flex items-center gap-2 text-white uppercase tracking-widest text-xs font-semibold border-b border-white/30 pb-1 hover:border-white transition-colors">
                      Shop Now <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 pb-2 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-serif text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm font-light">
                  {item.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#shop-all" className="inline-flex items-center justify-center border border-foreground/20 hover:border-primary hover:text-primary px-10 py-4 uppercase tracking-widest text-sm font-medium transition-all duration-300" data-testid="btn-shop-all">
            View Complete Catalog
          </a>
        </motion.div>
      </div>
    </section>
  );
}
