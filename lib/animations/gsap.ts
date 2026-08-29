import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // Precise, mechanical enterprise eases
  gsap.defaults({
    ease: "power3.out",
    duration: 0.8,
  });

  // Ticker performance optimization
  gsap.ticker.lagSmoothing(1000, 16);
}

export { gsap, ScrollTrigger };
export default gsap;
