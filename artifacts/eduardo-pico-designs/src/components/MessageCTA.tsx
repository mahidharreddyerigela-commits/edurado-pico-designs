export function MessageCTA() {
  return (
    <section className="py-20 bg-foreground text-background relative overflow-hidden">
      {/* Subtle texture line */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "repeating-linear-gradient(90deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
        backgroundSize: "40px 40px"
      }} />

      <div className="relative container mx-auto px-6 md:px-12 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">
          Ready to Order?
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
          Let's create something <br />
          <i className="text-primary font-light">made for you.</i>
        </h2>
        <p className="text-background/60 font-light text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Custom orders, bulk business requests, or just a question — we read every message personally.
        </p>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-block border border-primary text-primary px-10 py-4
                     uppercase tracking-widest text-sm font-semibold
                     hover:bg-primary hover:text-background
                     transition-all duration-300"
        >
          Send Us a Message
        </a>
      </div>
    </section>
  );
}
