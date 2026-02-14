import { Camera, Users, Award, Aperture } from "lucide-react";
import photographerImg from "@/assets/photographer.jpg";

const stats = [
  { icon: Camera, value: "Since 2006", label: "Years in Business" },
  { icon: Users, value: "4.0", label: "Stars" },
  { icon: Award, value: "Creative", label: "& Candid Shots" },
  { icon: Aperture, value: "10K+", label: "Photos Delivered" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-dark-alt py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="animate-on-scroll relative">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={photographerImg}
                alt="V1 Photography Photographer"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-xl -z-10" />
          </div>

          {/* Text */}
          <div className="animate-on-scroll">
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6">
              About <span className="gradient-text">V1 Photography</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              V1 Photography is led by Mr. Vijay and began in 2006. His passion for photography led to Jovika Photos Videography — offering the best creative & dedicated photography with a strong focus on customer satisfaction.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Located in Veeranam, Salem (near Mottur), we specialize in Photo Studios photography. Our experienced team is passionate about creating beautiful, memorable images for weddings, newborn shoots, and every special moment in between.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-heading text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
