/**
 * Single source of truth for the NF1 wordmark geometry.
 *
 * The header logo, the favicon and the Open Graph card all draw the same mark.
 * Keeping the path data here means a change to the letterforms cannot leave one
 * surface showing an older version of the brand — which is exactly what
 * happened while these were maintained as separate copies.
 *
 * Every letterform shares one slant so the wordmark reads as a single object.
 */

export const LOGO_VIEWBOX = "0 0 212 56";

/** Horizontal shift per unit of height (~13 degrees of italic). */
export const SLANT = 0.227;
export const CAP_TOP = 6;

/** x on a slanted edge at height y, given its x at CAP_TOP. */
export const at = (xTop: number, y: number) => xTop - (y - CAP_TOP) * SLANT;

/** "N": left stem, diagonal, right stem. Counters kept open so it reads as N. */
export const LETTER_N = [
  "M4 50L17 50L27 6L14 6Z",
  "M14 6L26 6L51 50L39 50Z",
  "M38 50L51 50L61 6L48 6Z",
].join(" ");

/** "F": stem, top arm, mid arm. */
export const LETTER_F = [
  "M66 50L79 50L89 6L76 6Z",
  `M76 6L114 6L${at(114, 17)} 17L${at(76, 17)} 17Z`,
  `M${at(76, 25)} 25L103 25L${at(103, 35)} 35L${at(76, 35)} 35Z`,
].join(" ");

/** "1": a heavy slab with a small angled flag, matching the artwork. */
export const NUMERAL_ONE = "M130 6L148 6L138 50L120 50L126.6 21L114 25L117 14Z";

/**
 * Thirteen thin streaks trailing the "1".
 *
 * Both ends ride the same slant as the letterforms, so the fan reads as one
 * parallelogram raking off the mark rather than a stack of loose bars. Only
 * the last few taper, which is what gives the trail its cut-off edge.
 */
export const STREAK_COUNT = 13;

export const SPEEDLINES = Array.from({ length: STREAK_COUNT }, (_, i) => {
  const y = 9 + i * 2.9;
  const h = 1.9;
  const taper = Math.max(0, i - 9) * 11;
  const xs = at(149, y);
  const xe = at(207 - taper, y);
  return `M${xs.toFixed(1)} ${y.toFixed(1)}L${xe.toFixed(1)} ${y.toFixed(1)}L${(
    xe - h * SLANT
  ).toFixed(1)} ${(y + h).toFixed(1)}L${(xs - h * SLANT).toFixed(1)} ${(
    y + h
  ).toFixed(1)}Z`;
});
