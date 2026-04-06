export function Gallery() {
  const items = [
    { src: "/images/gallery-1.jpg", alt: "Hocus Pocus door hanger",        area: "a" },
    { src: "/images/gallery-5.jpg", alt: "Jack Skellington door hanger",    area: "b" },
    { src: "/images/gallery-2.jpg", alt: "Texas flag boards",               area: "c" },
    { src: "/images/gallery-7.jpg", alt: "Welcome monogram door hanger",    area: "d" },
    { src: "/images/gallery-6.jpg", alt: "Sunflower family door hanger",    area: "e" },
    { src: "/images/gallery-3.jpg", alt: "Fish and deer boards",            area: "f" },
    { src: "/images/gallery-4.jpg", alt: "Come and Take It boards",         area: "g" },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-[hsl(var(--background))]">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-3">Our Work</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Every Piece, Handcrafted</h2>
          <div className="w-12 h-px bg-primary mx-auto mt-5" />
        </div>

        {/* Mobile: simple 2-col uniform grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {items.map((item) => (
            <div key={item.area} className="aspect-square overflow-hidden rounded-lg group relative">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Desktop: named bento grid */}
        {/*
          Layout:
          [ Sally (tall)  |  Jack  |  Texas boards (tall) ]
          [ Sally (tall)  | Welcome|  Texas boards (tall) ]
          [ Sunflower     |  Fish  |   Come/Take It       ]
        */}
        <div
          className="hidden md:grid gap-4"
          style={{
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "320px 320px 320px",
            gridTemplateAreas: `
              "a b c"
              "a d c"
              "e f g"
            `,
          }}
        >
          {items.map((item) => (
            <div
              key={item.area}
              className="overflow-hidden rounded-xl group relative"
              style={{ gridArea: item.area }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
