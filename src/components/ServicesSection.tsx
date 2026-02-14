import { Clock, Image, CalendarDays } from "lucide-react";

const services = [
  {
    name: "Wedding Photography",
    duration: "8 Hours",
    photos: "400+ Photos",
    delivery: "3–4 Weeks Delivery",
    price: "$1,500",
    description: "Full-day coverage capturing every magical moment of your special day with cinematic precision.",
  },
  {
    name: "Engagement Shoot",
    duration: "2 Hours",
    photos: "60+ Photos",
    delivery: "1 Week Delivery",
    price: "$350",
    description: "Celebrate your love story with a beautifully styled engagement session at your favorite location.",
  },
  {
    name: "Portrait Session",
    duration: "1 Hour",
    photos: "25 Photos",
    delivery: "5 Days Delivery",
    price: "$200",
    description: "Professional portraits that capture your personality with dramatic lighting and creative composition.",
  },
  {
    name: "Event Coverage",
    duration: "4 Hours",
    photos: "150+ Photos",
    delivery: "10 Days Delivery",
    price: "$600",
    description: "Dynamic event photography for corporate gatherings, parties, and celebrations of all kinds.",
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
            Premium photography packages tailored to capture your most important moments.
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
                <span className="text-sm text-muted-foreground">Starting from</span>
                <div className="font-heading text-3xl font-bold gradient-text">{service.price}</div>
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
