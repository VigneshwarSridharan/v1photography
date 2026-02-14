import { useState, useEffect, useLayoutEffect, useCallback, useRef, useMemo } from "react";
import { ChevronLeft, ChevronRight, Camera, Play, Pause } from "lucide-react";
// Landscape (width > height)
import heroLandscape1 from "@/assets/hero/landscape/hero-1.jpg";
import heroLandscape2 from "@/assets/hero/landscape/hero-2.png";
import heroLandscape3 from "@/assets/hero/landscape/hero-3.jpg";
import heroLandscape4 from "@/assets/hero/landscape/hero-4.jpg";
import heroLandscape5 from "@/assets/hero/landscape/hero-5.jpg";
// Portrait (height > width)
import heroPortrait1 from "@/assets/hero/portrait/hero-1.jpg";
import heroPortrait2 from "@/assets/hero/portrait/hero-2.jpg";
import heroPortrait3 from "@/assets/hero/portrait/hero-3.jpg";
import heroPortrait4 from "@/assets/hero/portrait/hero-4.jpg";
import heroPortrait5 from "@/assets/hero/portrait/hero-5.jpg";

const LANDSCAPE_SRCS = [
  heroLandscape1,
  heroLandscape2,
  heroLandscape3,
  heroLandscape4,
  heroLandscape5,
];
const PORTRAIT_SRCS = [
  heroPortrait1,
  heroPortrait2,
  heroPortrait3,
  heroPortrait4,
  heroPortrait5,
];

const SLIDE_META = [
  {
    label: "Vignesh & Rubiya Wedding",
    category: "Wedding",
    tagline: "Where Love Tells Its Own Story",
    description:
      "Capturing authentic emotions, timeless weddings, and unforgettable events with cinematic precision.",
  },
  {
    label: "Romantic Engagement Session",
    category: "Engagement",
    tagline: "Two Hearts, One Frame",
    description:
      "Romantic engagement sessions in breathtaking locations, crafted into cinematic visual stories.",
  },
  {
    label: "Garden Romance",
    category: "Wedding",
    tagline: "Every Moment Is A Masterpiece",
    description:
      "From the first look to the last dance, we preserve every magical second of your celebration.",
  },
  {
    label: "Forest Promise",
    category: "Engagement",
    tagline: "Love Among Nature",
    description:
      "Intimate moments captured in serene forest settings, telling timeless love stories.",
  },
  {
    label: "Neon Dreams",
    category: "Portrait",
    tagline: "Your Story, Beautifully Told",
    description:
      "Bold, artistic portraits that reveal personality and create lasting impressions.",
  },
];

const AUTOPLAY_INTERVAL = 6000;

const HeroSection = () => {
  const [isPortrait, setIsPortrait] = useState(false);
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const slides = useMemo(
    () =>
      SLIDE_META.map((meta, i) => ({
        ...meta,
        src: isPortrait ? PORTRAIT_SRCS[i] : LANDSCAPE_SRCS[i],
      })),
    [isPortrait]
  );

  useLayoutEffect(() => {
    const media = window.matchMedia("(orientation: portrait)");
    setIsPortrait(media.matches);
    const handler = (e: MediaQueryListEvent) => setIsPortrait(e.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  const goTo = useCallback(
    (index: number, dir?: "left" | "right") => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setDirection(dir ?? (index > current ? "right" : "left"));
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [current, isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, "right");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, "left");
  }, [current, goTo]);

  useEffect(() => {
    if (!isPlaying) return;
    timeoutRef.current = setTimeout(next, AUTOPLAY_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, isPlaying, next]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Slide Backgrounds with Ken Burns */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          <div
            className={`absolute inset-0 ${i === current ? "hero-ken-burns" : ""}`}
            style={{ animationDirection: i % 2 === 0 ? "normal" : "reverse" }}
          >
            <img
              src={slide.src}
              alt={slide.label}
              className="absolute inset-0 h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
          {/* Cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-v-dark via-v-dark/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-v-dark via-transparent to-v-dark/40" />
          {/* Film grain texture */}
          <div
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      ))}

      {/* Animated vertical line accent */}
      <div className="absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
        <div className="h-16 w-px bg-gradient-to-b from-transparent via-v-orange to-transparent" />
        <Camera className="h-4 w-4 text-v-orange" />
        <div className="h-16 w-px bg-gradient-to-b from-transparent via-v-blue to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-20 pb-40 lg:px-16">
        <div className="max-w-2xl">
          {/* Category badge */}
          <div
            key={`cat-${current}`}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-v-orange/30 bg-v-orange/10 px-4 py-1.5 hero-slide-in"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-v-orange animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-v-orange">
              {slides[current].category}
            </span>
          </div>

          {/* Title */}
          <h1
            key={`title-${current}`}
            className="font-heading text-5xl font-bold uppercase leading-none tracking-wider text-foreground md:text-7xl lg:text-8xl hero-slide-in"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.6)" }}
          >
            <span className="gradient-text">V1</span> Photography
          </h1>

          {/* Tagline per slide */}
          <p
            key={`tag-${current}`}
            className="mt-4 font-heading text-lg font-medium uppercase tracking-[0.3em] text-v-blue md:text-xl hero-slide-in"
            style={{ animationDelay: "0.15s", textShadow: "0 2px 10px rgba(30,144,255,0.3)" }}
          >
            {slides[current].tagline}
          </p>

          {/* Description per slide */}
          <p
            key={`desc-${current}`}
            className="mt-6 max-w-lg text-base leading-relaxed text-foreground/70 md:text-lg hero-slide-in"
            style={{ animationDelay: "0.3s" }}
          >
            {slides[current].description}
          </p>

          {/* CTA buttons */}
          <div
            key={`cta-${current}`}
            className="mt-10 flex flex-wrap gap-4 hero-slide-in"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href="#contact"
              className="btn-gradient inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white"
            >
              Book a Session
            </a>
            <a
              href="#gallery"
              className="btn-outline-blue inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold uppercase tracking-wider"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Controls Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        {/* Progress bars */}
        <div className="mx-auto flex max-w-7xl gap-1.5 px-6 lg:px-16">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="group relative h-1 flex-1 overflow-hidden rounded-full bg-foreground/10"
              aria-label={`Go to slide ${i + 1}`}
            >
              <div
                ref={i === current ? progressRef : null}
                className={`absolute inset-y-0 left-0 rounded-full ${
                  i === current
                    ? isPlaying
                      ? "hero-progress-fill bg-gradient-to-r from-v-orange to-v-red"
                      : "bg-gradient-to-r from-v-orange to-v-red"
                    : i < current
                      ? "w-full bg-foreground/20"
                      : "w-0 bg-foreground/10"
                }`}
                style={
                  i === current
                    ? isPlaying
                      ? { animationDuration: `${AUTOPLAY_INTERVAL}ms` }
                      : { width: "50%" }
                    : undefined
                }
              />
            </button>
          ))}
        </div>

        {/* Thumbnails + nav controls */}
        <div className="mx-auto flex max-w-7xl items-end justify-between gap-4 px-6 py-5 lg:px-16">
          {/* Thumbnails */}
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {slides.map((slide, i) => (
              <button
                key={slide.label}
                onClick={() => goTo(i)}
                className={`group relative flex-shrink-0 overflow-hidden rounded-lg transition-all duration-500 ${
                  i === current
                    ? `h-20 w-36 ring-2 ring-v-orange ring-offset-2 ring-offset-v-dark md:h-24 md:w-44 ${isPortrait ? "h-36 w-20" : ""}`
                    : `h-20 w-36 opacity-50 hover:opacity-80 md:h-20 md:w-36 ${isPortrait ? "h-36 w-20" : ""}`
                }`}
                aria-label={`View ${slide.label}`}
              >
                <img
                  src={slide.src}
                  alt={slide.label}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 transition-colors ${
                    i === current
                      ? "bg-gradient-to-t from-black/60 to-transparent"
                      : "bg-black/50 group-hover:bg-black/30"
                  }`}
                />
                {i === current && (
                  <span className="absolute bottom-1.5 left-2 right-2 truncate text-[10px] font-medium text-white md:text-xs">
                    {slide.label}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Navigation + Play/Pause */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-foreground/60 transition-all hover:border-v-orange hover:text-v-orange"
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </button>
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-foreground/60 transition-all hover:border-v-orange hover:text-v-orange"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-foreground/60 transition-all hover:border-v-orange hover:text-v-orange"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            {/* Slide counter */}
            <div className="ml-2 flex items-baseline gap-1 font-heading text-foreground/40">
              <span className="text-2xl font-bold text-foreground">
                {String(current + 1).padStart(2, "0")}
              </span>
              <span className="text-sm">/</span>
              <span className="text-sm">
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile arrow overlays */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-v-orange/80 md:hidden"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-v-orange/80 md:hidden"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Scroll indicator */}
      <div className="absolute bottom-28 right-6 z-20 hidden flex-col items-center gap-2 lg:flex">
        <span
          className="text-[10px] uppercase tracking-widest text-foreground/30"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <div className="hero-scroll-line h-10 w-px bg-gradient-to-b from-v-orange to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
