import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const links = ["Home", "About", "Services", "Gallery", "Testimonials", "FAQ", "Contact"];
const socials = [Instagram, Facebook, Twitter, Youtube];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="V1 Photography" className="h-10" />
          </div>

          <ul className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="font-heading text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center glow-icon hover:bg-primary/10"
              >
                <Icon className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2026 V1 Photography – Veeranam, Salem. Creative & Candid Photography Since 2006.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
