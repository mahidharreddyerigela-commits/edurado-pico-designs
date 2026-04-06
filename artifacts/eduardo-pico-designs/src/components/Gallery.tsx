export function Gallery() {
  return (
    <section className="py-16 px-6 md:px-12 bg-[hsl(var(--background))]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.25em] uppercase text-primary font-medium mb-2">Our Work</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Every Piece, Handcrafted</h2>
        </div>

        {/* Grid layout: 4-col on desktop, 2-col on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[220px] md:auto-rows-[260px]">
          {/* Large feature image — spans 2 cols + 2 rows on desktop */}
          <div className="col-span-1 row-span-2 md:col-span-2 md:row-span-2 overflow-hidden rounded-xl group relative">
            <img
              src="/images/gallery-1.jpg"
              alt="Hocus Pocus door hanger"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Row 1 right: 2 images side by side */}
          <div className="col-span-1 row-span-1 overflow-hidden rounded-xl group relative">
            <img
              src="/images/gallery-5.jpg"
              alt="Jack Skellington door hanger"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="col-span-1 row-span-1 overflow-hidden rounded-xl group relative">
            <img
              src="/images/gallery-7.jpg"
              alt="Welcome monogram door hanger"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Row 2 right: 2 images side by side */}
          <div className="col-span-1 row-span-1 overflow-hidden rounded-xl group relative">
            <img
              src="/images/gallery-6.jpg"
              alt="Sunflower family door hanger"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="col-span-1 row-span-1 overflow-hidden rounded-xl group relative">
            <img
              src="/images/gallery-2.jpg"
              alt="Texas flag cornhole boards"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Bottom row: 2 wide images spanning 2 cols each */}
          <div className="col-span-1 md:col-span-2 row-span-1 overflow-hidden rounded-xl group relative">
            <img
              src="/images/gallery-3.jpg"
              alt="Fish and deer cornhole boards"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="col-span-1 md:col-span-2 row-span-1 overflow-hidden rounded-xl group relative">
            <img
              src="/images/gallery-4.jpg"
              alt="Come and Take It cornhole boards"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
