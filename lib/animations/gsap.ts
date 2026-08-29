import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // Global smooth defaults
  gsap.defaults({
    ease: "power3.out",
    duration: 0.8,
  });

  // Limit lagSmoothing to maintain buttery frame pacing
  gsap.ticker.lagSmoothing(1000, 16);
}

export { gsap, ScrollTrigger };
