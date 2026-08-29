# NForce One — AI Image & Video Asset Brief
### Website Redesign · Creative Generation Brief
*Paste these prompts directly into Midjourney, DALL·E/GPT-image, Ideogram, Runway, Sora, or equivalent*

Brand constants to reuse in every prompt below:
- **Palette:** near-black background `#0a0a0a`–`#111113`, signal red `#e11d2e`, white `#f5f5f5`, muted steel gray `#3a3a3d` for secondary linework
- **Style vocabulary:** systems/HUD/terminal aesthetic, dark enterprise tech, precision engineering, monospace-adjacent geometry, dotted grid, schematic linework, no clutter, no lens flare, no sci-fi movie clichés, no glowing neon-cyberpunk city, no humanoid robots
- **Mood:** confident, controlled, architectural, quiet power — never "flashy AI slop," never generic stock tech

---

## PART 1 — Judgment Call: Do NOT Generate Fake Leadership Headshots

**Recommendation: do not use AI-generated headshots for the six named /about leaders (Alex Chen, Siddharth Sharma, Elena Rostova, Marcus Vance, Sarah Jenkins, David Kim). Use real photography, or a designed placeholder — never a synthetic face standing in for a named, credentialed real person.**

Why this matters specifically here, not as a generic disclaimer: NForce One sells into enterprise IT/architecture procurement at insurance, banking, healthcare, and retail companies. Buyers at that level run vendor due diligence — they will look up "Principal Pega Architect [Name]" on LinkedIn, check certifications, maybe look for conference talks or GitHub. If the headshot doesn't match a real, findable person, the finding isn't "the website has a placeholder image" — it's "this vendor faked their leadership team." That's a credibility failure that spreads, and it's exactly the kind of thing that ends up as a screenshot with a "found the AI CEO" caption. For a firm whose entire pitch is engineering rigor and trustworthiness on mission-critical systems, that risk is disproportionate to the cosmetic upside of "having a photo."

**What to do instead, in order of preference:**
1. **Real photography** of the actual six people — even a simple, well-lit headshot (plain background, one consistent setup) beats any synthetic alternative. This doesn't need a full studio shoot; a same-day photographer session against a neutral backdrop, later composited into the brand frame treatment below, is enough.
2. **If real photos genuinely aren't available yet:** use a designed placeholder, not a face — e.g. a monogram tile (initials in the brand's monospace type, red-on-black, HUD corner brackets) or an abstract silhouette/glyph card. This reads as "photo coming soon" rather than "fabricated person," and it's honest.

**This restriction is scoped to the six real named faces only.** Everything else on /about and elsewhere — the page hero, principle cards, and the frame/background treatment that will hold the eventual real photos — is fair game for AI generation, and is included in Part 2 below.

---

## PART 2 — Section-by-Section Generation Prompts

### 1. Homepage Hero — Background Video Loop (highest-impact asset)

**What/where:** Full-bleed background video behind the homepage hero headline and CTA. Sits at low opacity/brightness so white/red text stays fully legible on top.

**Prompt (video — Runway Gen-3/Sora style):**
```
Abstract dark technology visualization, seamless loop, aerial view of a
vast black digital grid plane extending to the horizon, thin glowing
red (#e11d2e) circuit-like lines pulsing and traveling along the grid
in irregular data-packet bursts, occasional white (#f5f5f5) accent
nodes lighting up briefly at grid intersections, very slow parallax
camera drift forward and slightly downward, extremely shallow, minimal
particle dust in negative space, entirely black background #0a0a0a,
no text, no logos, no human figures, no lens flare, no cyberpunk
neon city, precision engineering / systems-architecture mood, high
contrast, cinematic but restrained, 4K, 16:9, 10–15 second seamless
loop, first and last frame matched for perfect looping
```

**Integration note:** Render at 30–40% opacity with a dark gradient overlay (black to transparent, heavier at the bottom third where headline text sits); autoplay muted, looped, `object-fit: cover`; pause/replace with the poster frame under `prefers-reduced-motion`.

---

### 2. Recurring Dark-Section Texture Layer (distinct from hero video)

**What/where:** A static/near-static background texture reused across dark sections that need atmosphere but shouldn't compete with the hero (e.g. behind the stats strip, the flagship Pega panel, the final CTA, and as a subtle fill in case-study/article card backgrounds). Needs to feel related to the hero video but visually calmer and non-animated.

**Prompt (image, tileable):**
```
Seamless tileable dark background texture, subtle topographic
contour-line pattern combined with a faint dotted grid, ultra-dark
charcoal-black base #0a0a0a, linework in low-opacity steel gray #3a3a3d
at roughly 8-12% opacity, a very small number of grid-node points
picked out in dim red #e11d2e at under 5% opacity, flat two-dimensional
schematic style, no lighting gradient, no vignette, engineering
blueprint / systems-diagram aesthetic, extremely subtle and quiet,
must read as almost solid black at a glance, perfectly seamless
tiling in both axes, square aspect ratio 1:1, vector-clean edges
```

**Integration note:** Use as a low-opacity (5–10%) repeating CSS background-image behind sections, never as a hero-competing focal image; keep static (no animation) so it doesn't fight the hero loop for attention.

---

### 3. Industry Vertical Imagery (4 assets — /industries panels + homepage vertical cards)

Each should be abstract/architectural — explicitly avoiding literal stock-photo tropes (no handshake, no stethoscope-on-tablet, no shopping-cart-icon-on-laptop). Aspect ratio **4:5** for the /industries large panels, croppable to **16:9** for the homepage cards.

**3a. Insurance — abstract claims-flow visualization**
```
Abstract architectural visualization representing insurance claims
processing flow, layered translucent black glass planes floating in
dark space, thin red (#e11d2e) directional lines branching and
converging between the planes like a decision tree or claims-routing
diagram, small white (#f5f5f5) node markers at branch points, one
plane subtly tinted with a faint dotted-grid texture, deep black
background #0a0a0a, dramatic single-source side lighting, no text,
no icons, no literal objects (no umbrellas, no houses, no cars),
pure abstract systems-architecture composition, high-end enterprise
tech editorial style, 4:5 vertical aspect ratio, sharp focus,
minimal, premium
```

**3b. Banking & Financial Services — abstract transaction network**
```
Abstract visualization of a financial transaction network, dense mesh
of thin interconnected lines radiating from a central node across a
matte black void #0a0a0a, red (#e11d2e) pulses traveling along a few
select lines suggesting live transaction flow, faint white (#f5f5f5)
grid coordinates in the background at low opacity, geometric and
precise like a systems architecture diagram rendered as fine art,
no currency symbols, no coins, no skyline, no people, cool
directional lighting from upper left, 4:5 vertical aspect ratio,
minimal, high contrast, enterprise-grade
```

**3c. Healthcare & Life Sciences — abstract clinical data structure**
```
Abstract representation of structured clinical data, a layered
lattice of thin interconnected nodes and planes suggesting patient
record architecture, deep black background #0a0a0a, calm white
(#f5f5f5) linework as the dominant structure with sparing red
(#e11d2e) highlight nodes marking key data points, soft even
lighting, precise and orderly (not organic/biological imagery,
no DNA helix, no stethoscope, no cross symbol, no hospital scene),
systems-diagram-as-art aesthetic, 4:5 vertical aspect ratio, clean,
minimal, trustworthy, high-end enterprise tech editorial style
```

**3d. Retail & eCommerce — abstract inventory/fulfillment flow**
```
Abstract visualization of retail inventory and fulfillment flow,
a grid of small cubic nodes arranged in receding rows across a black
void #0a0a0a, thin red (#e11d2e) flow-lines connecting select nodes
in a supply-chain routing pattern, occasional white (#f5f5f5) nodes
marking distribution points, orthographic-feeling perspective like
a technical diagram, no shopping carts, no storefronts, no product
photography, no people, restrained studio lighting, 4:5 vertical
aspect ratio, precise, minimal, premium enterprise tech style
```

**Integration note (all four):** Displayed as full-bleed panel backgrounds behind a dark gradient overlay so the stat callouts and panel copy stay legible; on the homepage vertical cards, crop to 16:9 and darken further since text sits directly on top.

---

### 4. Architecture / Case-Study Diagram Visuals (flagship Pega panel + case study cards)

**4a. Flagship Pega panel — layered architecture render**
```
Abstract three-dimensional rendering of a layered software
architecture, several thin translucent black glass planes stacked
with visible depth, each plane etched with fine white (#f5f5f5)
schematic linework resembling a system diagram, red (#e11d2e)
connector lines threading vertically between the planes linking
specific points, a soft red glow at two or three key junction nodes,
pure black background #0a0a0a, isometric-leaning camera angle,
studio-quality render, no text or logos, precision-engineered feel,
16:9 aspect ratio, sharp, premium, restrained
```

**4b. Case-study card motif — flow diagram close-up (use 3x with slight variation for variety across cards)**
```
Extreme close-up abstract crop of a systems architecture diagram,
thin white (#f5f5f5) and red (#e11d2e) lines converging at a single
bright node against pure matte black #0a0a0a, shallow depth of
field with soft blur at the edges of frame, feels like a zoomed
fragment of a much larger schematic, no text, no full diagram
legible — just a compelling abstract fragment, 16:9 aspect ratio,
minimal, high contrast, editorial tech photography style
```

**Integration note:** Use as a right-aligned or full-card background at 15–25% opacity behind case-study card copy (client name, result stat); on the flagship Pega panel, run full-width behind the panel content with the darkest gradient concentrated where headline/body copy sits.

---

### 5. Service/Capability Icon Set (12-service catalog + recurring icon needs)

**Style direction:** single-weight line icons, 1.5px-equivalent stroke, sharp 90°/45° corners with one small notch/bracket detail per icon (echoing the `[SYS.SPEC]`-style bracket motif), monochrome white line on transparent/black by default with red used only as a single accent dot or connector segment per icon — never a fully red icon. No rounded blob icons, no gradients, no 3D.

**Prompt template (repeat per service, swap the bracketed concept):**
```
Minimalist single-weight line icon of [CONCEPT — e.g. "a data
pipeline with three sequential nodes"], white (#f5f5f5) stroke on
transparent background, 1.5px uniform line weight, sharp geometric
corners, one small red (#e11d2e) accent — either a single terminal
dot or a short connector segment, no fill, no gradient, no shadow,
no 3D, no rounded/blob style, resembles a HUD/schematic system icon,
centered composition, generous padding, vector-flat, 1:1 aspect ratio
```

**Three worked examples:**
- *Pega Platform Development:* `[CONCEPT]` = "an interlocking layered-hexagon module with a single connector line exiting the top"
- *Cloud & DevOps:* `[CONCEPT]` = "a vertical stack of three thin rectangular server planes connected by a single vertical red accent line"
- *AI/ML Integration:* `[CONCEPT]` = "a small node cluster of five circles connected by thin lines converging into one output node marked with a red dot"

**Integration note:** Export as SVG (not raster) so icons stay crisp at any size and can be recolored/animated (e.g. red accent pulses on card hover) via CSS/JS rather than baked into a bitmap.

---

### 6. Final CTA / Footer Background — Closing Visual Moment

**Prompt (video, short loop — or static image if video isn't budgeted):**
```
Abstract minimalist visualization of a single radar-style pulse ring
expanding slowly outward from a central white (#f5f5f5) node against
a pure black background #0a0a0a, the ring rendered as a thin red
(#e11d2e) line that fades to nothing as it expands, one pulse every
4-5 seconds, otherwise the frame is still and calm, extremely
minimal, no other elements, no grid, no particles, meditative and
controlled rather than energetic, evokes a system "standing by" /
signal-still-alive feeling, seamless loop, 16:9 aspect ratio,
6-8 second loop, first/last frame matched
```

**Static fallback prompt:**
```
Abstract single radar pulse ring frozen mid-expansion, thin red
(#e11d2e) circular line on pure black background #0a0a0a, one small
white (#f5f5f5) center node, vast empty negative space around it,
extremely minimal, calm, high-end enterprise tech style, 16:9
aspect ratio, no text
```

**Integration note:** Loop at very low opacity (15–20%) directly behind the CTA headline/button; the pulse timing can optionally sync loosely with a CSS pulse animation on the CTA button itself for a subtle "the system is listening" effect.

---

### 7. Careers Page — Abstract "Engineering Culture" Visual

Must NOT depict fake people (same trust logic as Part 1 — a careers page showing an AI-generated "team" is exactly the kind of thing candidates and current employees will call out). Go abstract/workspace-architecture-adjacent instead.

**Prompt:**
```
Abstract representation of collaborative engineering work, an
overhead-angle composition of interconnected thin white (#f5f5f5)
schematic lines forming an open, branching workflow diagram against
a black background #0a0a0a, occasional red (#e11d2e) nodes marking
active/in-progress points in the flow, suggests multiple concurrent
workstreams converging, no desks, no laptops, no people, no office
photography, purely diagrammatic and abstract, calm and structured
rather than busy, premium enterprise tech editorial style, 16:9
aspect ratio, high contrast, minimal
```

**Alternative concept (workspace-adjacent, still no people):**
```
Abstract close-up of a dark mechanical keyboard and monitor edge
rendered in extreme shallow depth of field, almost entirely
out-of-focus and reduced to soft dark shapes and one sharp red
(#e11d2e) glowing key backlight as the single point of focus,
moody, minimal, black background #0a0a0a, no visible screen content,
no hands, no person, suggests focused engineering work without
depicting any individual, 16:9 aspect ratio, cinematic, premium
```

**Integration note:** Pair with the real perks copy (comp, benefits, flexibility) rather than trying to make the image "sell" culture on its own — the image sets mood, the text carries the actual claims.

---

### 8. About Page — Team Photo Frame Treatment (NOT the faces)

Safe and encouraged to generate now, ahead of real photography.

**Prompt (frame/overlay treatment, to be used as a design asset, not a photo):**
```
Minimalist UI frame design for a portrait photo tile, dark charcoal
background #111113, thin white (#f5f5f5) corner brackets in a HUD
style at each of the four corners (like camera-viewfinder brackets),
one small red (#e11d2e) status dot in the bottom corner, a thin
horizontal red divider line beneath where a name/title label would
sit, no photo content — center area left as flat dark gray
placeholder, monospace-style tag element reading "[ID]" in one
corner (do not render real names), clean vector UI design, 4:5
aspect ratio, flat design, no gradients, no 3D
```

**Interim monogram placeholder prompt (if used per Part 1's recommendation):**
```
Minimalist monogram tile design, large centered initials rendered
in bold monospace-style white (#f5f5f5) letterforms on a matte black
background #0a0a0a, thin red (#e11d2e) HUD-style corner brackets
framing the tile, subtle dotted grid texture faintly visible in the
background at low opacity, flat vector design, no photographic
elements, no face silhouette, clean and intentional-looking (not an
error state), 4:5 aspect ratio
```

**Integration note:** Build this as a coded component (CSS/SVG), not a flattened generated image, so the real name/title/initials can be swapped in per person without regenerating art; drop real photography into the center area once available.

---

### 9. Optional — Short-Form Video Moment (Hero or About)

**Prompt (video):**
```
Slow abstract particle field animation, thousands of tiny white
(#f5f5f5) points of light drifting slowly upward and slightly
sideways against a pure black background #0a0a0a, particles
occasionally align briefly into a faint geometric line-grid pattern
before dispersing again, a handful of particles tinted red (#e11d2e)
moving slightly faster than the rest as accent motion, extremely
slow and calm overall movement, no camera movement, no text, no
human figures, no environment/room implied, meditative and precise,
seamless 8-10 second loop matched at first/last frame, 16:9 aspect
ratio, high production value, minimal
```

**Flag — read before using video anywhere implying real people or real offices:** Any video that shows (or implies) actual NForce One employees, actual office space, or actual client work must be real footage, not AI-generated — for the identical trust/due-diligence reason given in Part 1. AI generation is appropriate here only for fully abstract concepts (particles, data visualizations, architecture-diagram motion) that make no claim to depict anything real. If the client later wants an "our team at work" or "inside our office" video, that needs an actual video shoot, not a generation prompt.

---

## PART 3 — Technical Specs Checklist

**Video assets (hero loop, CTA pulse, optional secondary hero):**
- Format: MP4 (H.264) as primary, WebM (VP9) as fallback for smaller file size
- Target file size: under 3–5 MB for hero-length loops (8–15s) at delivery resolution 1920×1080, re-encoded/compressed after generation (generation tools rarely output web-optimized files)
- Delivery: autoplay, muted, loop, playsinline, no visible controls
- Always ship a static poster/fallback image (a single representative frame, exported as JPG/WebP) for: initial paint before video loads, `prefers-reduced-motion: reduce` users, and mobile data-saver contexts — swap to poster-only rather than force-loading video on cellular
- Aspect ratios: 16:9 for hero/CTA full-bleed backgrounds; crop-safe center composition so it survives cropping to ultrawide and mobile portrait

**Image assets (industry panels, diagrams, textures, icons):**
- Format: WebP as primary (JPG fallback for photos/renders, PNG fallback for icons/graphics with transparency)
- Target file size: 150–400 KB for large panel/hero-adjacent images, under 30 KB for the repeating texture tile, under 10 KB each for SVG icons
- Aspect ratios by placement: industry panels 4:5 (crop to 16:9 for homepage cards), case-study card motifs 16:9, flagship Pega panel background 16:9, recurring texture tile 1:1 seamless, team photo frame 4:5, icons 1:1 as SVG
- Serve responsive `srcset` sizes (at minimum a mobile-width and desktop-width variant) for every large background/panel image

**General:**
- Every dark-background image/video needs enough contrast headroom under text — bake a bottom-weighted or full-panel dark gradient overlay into the CSS layer (not into the generated asset itself) so copy stays legible regardless of the underlying art's brightness
- Lazy-load everything below the fold; only the hero video/image should load eagerly
- Keep total added weight of new media on the homepage first-load under roughly 1.5–2 MB combined (hero video + above-the-fold images) — load-time performance matters especially for this audience of enterprise IT buyers evaluating the vendor's own technical competence based on site performance
