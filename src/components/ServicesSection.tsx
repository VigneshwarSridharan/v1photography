import { Clock, Image, CalendarDays } from "lucide-react";

const services = [
  {
    name: "Wedding Shoot",
    duration: "Full Day",
    photos: "Plenty of Shots",
    delivery: "Creative & Candid",
    price: "Contact for Quote",
    description: "Full-day coverage capturing every magical moment of your special day. We shoot plenty of creative and candid pictures for timeless memories.",
  },
  {
    name: "Newborn Shoot",
    duration: "Session Based",
    photos: "Curated Gallery",
    delivery: "Gentle & Safe",
    price: "Contact for Quote",
    description: "Beautiful newborn photography in a comfortable studio setting. We capture your little one's first moments with care and creativity.",
  },
  {
    name: "Portrait & Studio",
    duration: "Flexible",
    photos: "Stunning Images",
    delivery: "Personalized",
    price: "Contact for Quote",
    description: "Professional portrait and studio photography. We create beautiful, memorable images tailored to your style.",
  },
  {
    name: "Event Coverage",
    duration: "As Required",
    photos: "Comprehensive",
    delivery: "Reliable Service",
    price: "Contact for Quote",
    description: "Corporate events, parties, and celebrations. V1 Photography delivers comprehensive photography solutions with a commitment to excellence.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-dark py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            Our Photography <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Wedding shoots, newborn shoots, and more — tailored to capture your special moments in Veeranam, Salem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.name} className="glass-card p-6 flex flex-col animate-on-scroll">
              <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground mb-3">
                {service.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
                {service.description}
              </p>

              <div className="space-y-2 mb-5">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  {service.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Image className="w-4 h-4 text-primary" />
                  {service.photos}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="w-4 h-4 text-primary" />
                  {service.delivery}
                </div>
              </div>

              <div className="mb-5">
                <span className="text-sm text-muted-foreground">Pricing</span>
                <div className="font-heading text-xl font-bold gradient-text">{service.price}</div>
              </div>

              <a href="#cta" className="btn-gradient text-center text-sm py-2.5">
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
