"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import { usePrefersReducedMotion } from "@/lib/animations/hooks";
import { services } from "@/content/services";
import { ServicesTable } from "./ServicesTable";
import { IconRenderer } from "./IconRenderer";
import { ArrowUpRight } from "lucide-react";

/**
 * The 12-service catalog, shown two ways.
 *
 * Desktop gets a pinned horizontal rail: the section holds still while the
 * catalog travels sideways, which breaks up nine identically-paced vertical
 * sections and makes the breadth of the practice physical.
 *
 * Below 1024px it falls back to the indexed table, which is the better mobile
 * experience anyway — horizontal rails compete with the page's own scroll on
 * touch. The rail markup is a plain flex row, so if GSAP never initialises the
 * cards are still reachable by native horizontal scrolling.
 */
export function ServicesShowcase() {
  const pinRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (prefersReduced) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const pin = pinRef.current;
        const viewport = viewportRef.current;
        const track = trackRef.current;
        if (!pin || !viewport || !track) return;

        // Recomputed on refresh so a resize or font swap cannot strand the rail
        // part-way through the catalog.
        const distance = () =>
          Math.max(0, track.scrollWidth - viewport.clientWidth);

        if (distance() <= 0) return;

        // The track ships as a natively scrollable row so it stays usable if
        // GSAP never initialises. Now that GSAP has, hand it exclusive control:
        // otherwise a trackpad swipe scrolls the container while the scrub sets
        // x, and the two fight over the same axis.
        viewport.style.overflowX = "hidden";

        // Scroll length is capped at two viewport heights. Matching it 1:1 to
        // the track (3000px+) means the reader is held on one section for three
        // and a half screens, which reads as the page being stuck. Decoupling
        // the two lets the catalog travel its full width in a shorter scroll.
        const scrollLength = () => Math.min(distance(), window.innerHeight * 2);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pin,
            start: "top top+=96",
            end: () => `+=${scrollLength()}`,
            pin: true,
            // "transform" instead of the default "fixed": pinning by fixed
            // position silently fails whenever an ancestor carries a transform
            // (route transitions, parallax wrappers), and fails by leaving a
            // tall empty gap rather than anything obvious. Translating the
            // pinned element is immune to that.
            pinType: "transform",
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(track, { x: () => -distance(), ease: "none" }, 0);

        if (progressRef.current) {
          tl.fromTo(
            progressRef.current,
            { scaleX: 0 },
            { scaleX: 1, ease: "none" },
            0
          );
        }
      });

      return () => {
        mm.revert();
        if (viewportRef.current) viewportRef.current.style.overflowX = "";
      };
    },
    { dependencies: [prefersReduced] }
  );

  return (
    <>
      {/* Mobile & tablet: the scannable indexed table */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServicesTable />
      </div>

      {/* Desktop: pinned horizontal rail */}
      <div ref={pinRef} className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={viewportRef} className="overflow-x-auto overflow-y-hidden">
            <div
              ref={trackRef}
              className="flex gap-6 will-change-transform pb-2"
            >
              {services.map((service, index) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative shrink-0 w-[340px] p-7 rounded-xl bg-bg-card border border-border hover:border-accent transition-colors duration-300 flex flex-col justify-between shadow-lg"
                >
                  <span className="hud-corner-tl" />
                  <span className="hud-corner-tr" />
                  <span className="hud-corner-bl" />
                  <span className="hud-corner-br" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-11 h-11 rounded-lg bg-bg-raised border border-border flex items-center justify-center text-accent group-hover:border-accent/40 transition-colors">
                        <IconRenderer name={service.icon} className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs text-text-muted/60 group-hover:text-accent font-semibold transition-colors">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {service.badge && (
                      <span className="inline-block text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-accent/15 text-accent border border-accent/30 font-semibold mb-3">
                        {service.badge}
                      </span>
                    )}

                    <h3 className="text-xl font-bold font-display text-white group-hover:text-accent transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-sm text-text-muted mt-3 leading-relaxed line-clamp-4">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="mt-7 pt-4 border-t border-border flex items-center justify-between text-xs font-mono uppercase text-text-muted group-hover:text-accent font-semibold transition-colors">
                    <span>{service.eyebrow}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Rail progress */}
          <div className="mt-8 h-0.5 w-full bg-border rounded-full overflow-hidden">
            <div
              ref={progressRef}
              className="h-full w-full bg-accent origin-left will-change-transform"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
