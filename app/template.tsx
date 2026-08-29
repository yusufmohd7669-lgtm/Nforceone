/**
 * Route transition, CSS-only and deliberately so.
 *
 * This wrapper contains every page. As a GSAP tween it set opacity:0 on the
 * whole document at mount and relied on requestAnimationFrame to bring it back,
 * so a stalled rAF loop meant a blank site. It also left transform:translate(0)
 * behind afterwards, and any non-none transform makes this element the
 * containing block for position:fixed descendants, which silently broke pinned
 * ScrollTriggers further down the tree.
 *
 * A CSS animation with no fill-mode fixes both: nothing is applied before it
 * starts or after it ends, so the page is visible without JS and the transform
 * is genuinely gone once the transition completes.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="nf1-route min-h-screen flex flex-col">{children}</div>;
}
