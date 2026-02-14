import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Client Review",
    review: "V1 Photography captured our special moments with creativity and care. We received plenty of creative and candid shots and are very satisfied with the service.",
  },
  {
    name: "Client Review",
    review: "Professional photography in Veeranam, Salem. The team made us feel comfortable and delivered beautiful, memorable images we will cherish for a lifetime.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-dark py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass-card p-8 animate-on-scroll">
              <div className="flex gap-1 mb-4">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
                <Star key="half" className="w-5 h-5 text-primary/40" />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{t.review}"
              </p>
              <div className="font-heading text-lg font-semibold text-foreground tracking-wider">
                {t.name}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm mt-6">Rated 4.0 stars based on 2 reviews</p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
