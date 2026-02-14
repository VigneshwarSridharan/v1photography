const CTASection = () => {
  return (
    <section id="cta" className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, hsl(30, 100%, 20%), hsl(10, 100%, 18%), hsl(220, 30%, 10%))",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsla(22,100%,55%,0.15),_transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="animate-on-scroll">
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-wider mb-6 text-foreground">
            Let's Capture <span className="gradient-text">Your Story</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Book your session today and turn real moments into timeless memories.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="btn-gradient text-lg">
              Book Now
            </a>
            <a href="#contact" className="btn-outline-blue text-lg">
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
