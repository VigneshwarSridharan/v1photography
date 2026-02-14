import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const contacts = [
  { icon: Phone, label: "+1 (555) 123-4567" },
  { icon: Mail, label: "hello@v1photography.com" },
  { icon: MapPin, label: "123 Cinema Ave, New York, NY 10001" },
  { icon: Clock, label: "Mon–Sat: 9AM – 7PM" },
];

const socials = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Youtube, label: "YouTube" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-dark-alt py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6 animate-on-scroll">
            {contacts.map((c) => (
              <div key={c.label} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center glow-icon group-hover:bg-primary/10">
                  <c.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {c.label}
                </span>
              </div>
            ))}

            {/* Socials */}
            <div className="flex gap-4 pt-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full bg-muted flex items-center justify-center glow-icon hover:bg-primary/10"
                >
                  <s.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div className="animate-on-scroll">
            <div className="w-full h-72 rounded-xl bg-muted/50 border border-border flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-10 h-10 mx-auto mb-2 text-primary/50" />
                <p className="font-heading tracking-wider uppercase text-sm">Studio Location</p>
                <p className="text-xs mt-1">123 Cinema Ave, New York</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
