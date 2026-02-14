import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const images = [
  { src: gallery1, label: "Silhouette", span: "md:col-span-2 md:row-span-2" },
  { src: gallery2, label: "Pre-Wedding", span: "" },
  { src: gallery3, label: "Wedding", span: "" },
  { src: gallery4, label: "Engagement", span: "" },
  { src: gallery5, label: "Portrait", span: "" },
  { src: gallery6, label: "Silhouette", span: "md:col-span-2" },
  { src: gallery7, label: "Pre-Wedding", span: "" },
  { src: gallery8, label: "Event", span: "" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-dark-alt py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            Recent & <span className="gradient-text">Best Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A curated selection of our finest cinematic photography.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 animate-on-scroll">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden rounded-lg cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover min-h-[200px] transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-colors duration-300 flex items-center justify-center">
                <span className="font-heading text-lg tracking-widest uppercase text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <a href="#" className="btn-outline-blue">
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
