import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & Michael",
    review: "V1 Photography captured our wedding day perfectly. Every photo tells a story, and the cinematic editing blew us away. We couldn't be happier with the results!",
  },
  {
    name: "James Rodriguez",
    review: "The portrait session was incredible. The lighting, the poses, everything was so professional. I've never looked this good in photos before!",
  },
  {
    name: "Priya Sharma",
    review: "From start to finish, the team was amazing. They captured the energy of our corporate event beautifully. Highly recommend for any occasion!",
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

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card p-8 animate-on-scroll">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
