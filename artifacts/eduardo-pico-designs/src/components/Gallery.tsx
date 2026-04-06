import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { src: "/images/gallery-1.jpg", alt: "Hocus Pocus door hanger" },
  { src: "/images/gallery-5.jpg", alt: "Jack Skellington door hanger" },
  { src: "/images/gallery-7.jpg", alt: "Welcome monogram door hanger" },
  { src: "/images/gallery-6.jpg", alt: "Sunflower family door hanger" },
  { src: "/images/gallery-2.jpg", alt: "Texas flag cornhole boards" },
  { src: "/images/gallery-3.jpg", alt: "Fish and deer cornhole boards" },
  { src: "/images/gallery-4.jpg", alt: "Come and Take It cornhole boards" },
];

export function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo  = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-[hsl(var(--background))]">
      {/* Header */}
      <div className="text-center mb-12 px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-3">Our Work</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">Every Piece, Handcrafted</h2>
        <div className="w-12 h-px bg-primary mx-auto mt-5" />
      </div>

      {/* Carousel */}
      <div className="relative group">
        {/* Embla viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="relative flex-[0_0_100%] h-[360px] md:h-[520px] px-2 md:px-4"
              >
                <div className="w-full h-full overflow-hidden rounded-2xl relative bg-[hsl(var(--secondary))]">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-contain transition-transform duration-700"
                  />
                  {/* Dim non-active slides */}
                  <div
                    className="absolute inset-0 bg-black transition-opacity duration-300 pointer-events-none"
                    style={{ opacity: selectedIndex === i ? 0 : 0.38 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prev arrow */}
        <button
          onClick={scrollPrev}
          aria-label="Previous photo"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10
                     w-11 h-11 rounded-full flex items-center justify-center
                     bg-black/40 backdrop-blur-sm border border-white/10 text-white
                     hover:bg-[hsl(var(--primary))] hover:border-transparent
                     opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next arrow */}
        <button
          onClick={scrollNext}
          aria-label="Next photo"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10
                     w-11 h-11 rounded-full flex items-center justify-center
                     bg-black/40 backdrop-blur-sm border border-white/10 text-white
                     hover:bg-[hsl(var(--primary))] hover:border-transparent
                     opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6 px-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              selectedIndex === i
                ? "w-6 h-2 bg-[hsl(var(--primary))]"
                : "w-2 h-2 bg-[hsl(var(--primary)/0.3)] hover:bg-[hsl(var(--primary)/0.6)]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
