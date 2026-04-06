import { useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { src: "/images/gallery-1.jpg",    alt: "Hocus Pocus door hanger" },
  { src: "/images/gallery-5.jpg",    alt: "Jack Skellington door hanger" },
  { src: "/images/gallery-7.jpg",    alt: "Welcome monogram door hanger" },
  { src: "/images/gallery-6.jpg",    alt: "Sunflower family door hanger" },
  { src: "/images/door-hangers.jpg", alt: "Sally door hanger" },
  { src: "/images/gallery-2.jpg",    alt: "Texas flag cornhole boards" },
  { src: "/images/gallery-3.jpg",    alt: "Fish and deer cornhole boards" },
  { src: "/images/gallery-4.jpg",    alt: "Come and Take It cornhole boards" },
];

export function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement;
    if (!slide) return;
    track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
    setActive(index);
  }, []);

  const prev = useCallback(() => scrollTo(Math.max(0, active - 1)), [active, scrollTo]);
  const next = useCallback(() => scrollTo(Math.min(slides.length - 1, active + 1)), [active, scrollTo]);

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const slideWidth = (track.children[0] as HTMLElement)?.offsetWidth ?? 1;
    const index = Math.round(track.scrollLeft / slideWidth);
    setActive(index);
  }, []);

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
        {/* Track */}
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full md:w-[75%] lg:w-[60%] snap-center px-2 md:px-3"
            >
              <div className="h-[340px] md:h-[500px] overflow-hidden rounded-2xl relative">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                {/* Dim non-active slides */}
                <div
                  className="absolute inset-0 bg-black transition-opacity duration-400 rounded-2xl"
                  style={{ opacity: active === i ? 0 : 0.4 }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Prev arrow */}
        <button
          onClick={prev}
          disabled={active === 0}
          aria-label="Previous photo"
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10
                     w-11 h-11 rounded-full flex items-center justify-center
                     bg-black/40 backdrop-blur-sm border border-white/10 text-white
                     hover:bg-[hsl(var(--primary))] hover:border-transparent
                     disabled:opacity-30 disabled:cursor-not-allowed
                     opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next arrow */}
        <button
          onClick={next}
          disabled={active === slides.length - 1}
          aria-label="Next photo"
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10
                     w-11 h-11 rounded-full flex items-center justify-center
                     bg-black/40 backdrop-blur-sm border border-white/10 text-white
                     hover:bg-[hsl(var(--primary))] hover:border-transparent
                     disabled:opacity-30 disabled:cursor-not-allowed
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
              active === i
                ? "w-6 h-2 bg-[hsl(var(--primary))]"
                : "w-2 h-2 bg-[hsl(var(--primary)/0.3)] hover:bg-[hsl(var(--primary)/0.6)]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
