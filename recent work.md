I want you to redesign and upgrade the existing "Work / Portfolio" section of my Schrader website.

IMPORTANT:
Do NOT completely redesign the existing Schrader brand.
Do NOT copy the reference website literally.
Use the reference only as inspiration for layout, interaction, spacing, and premium agency presentation.

The current Schrader visual identity should remain:
- Warm cream/beige background
- Dark chocolate/brown typography
- Editorial luxury serif headings
- Clean modern sans-serif body/UI typography
- Rounded navigation
- Brown CTA buttons
- Subtle borders
- Premium, sophisticated, minimal agency aesthetic

The goal is to make the Work section feel like a premium interactive digital agency portfolio — highly polished, interactive, cinematic, but NOT gimmicky.

==================================================
1. CURRENT STRUCTURE
==================================================

The current Work section contains:

- Top navigation/header
- "Websites Built for What's Next." heading
- Intro paragraph
- Project counter: 01 / 06
- Previous/Next controls
- Project title
- Project category
- Project description
- Service pills
- "View Project" CTA
- "Next Project" CTA
- Large laptop mockup
- Phone mockup
- Bottom horizontal project thumbnail carousel
- "Your Business Could Be Next" CTA card

Keep this overall structure.

The first project is:

TJ Waterfront

Category:
RESTAURANT / WATERFRONT

Description:
A modern, high-converting website for a premium waterfront dining destination, designed to showcase panoramic lakeside views, seasonal menus, and drive table reservations.

Services:
- Website Design
- Development
- Hosting
- Ongoing Support

There are currently 6 projects.

==================================================
2. TECHNOLOGY / ANIMATION STACK
==================================================

Use the existing project framework if one already exists.

If the project is React/Next.js:

Use:

- GSAP
- GSAP ScrollTrigger
- Lenis for smooth scrolling if appropriate
- CSS transforms/transitions where GSAP is unnecessary
- Framer Motion ONLY if the existing project already relies heavily on it

Do NOT install multiple animation libraries just for the sake of having them.

Preferred animation hierarchy:

1. CSS transitions for simple hover states
2. GSAP for project transitions and complex motion
3. GSAP ScrollTrigger for scroll-based effects
4. Lenis for smooth scrolling
5. Avoid Lottie unless there is a very specific reason
6. Avoid huge pre-made animation libraries that increase bundle size

Animation resources/libraries should come from their official sources:

GSAP:
https://gsap.com/

GSAP ScrollTrigger:
https://gsap.com/docs/v3/Plugins/ScrollTrigger/

Lenis:
https://lenis.darkroom.engineering/

If using Framer Motion:
https://motion.dev/

Do not download random animation packages from unknown sources.

==================================================
3. CORE EXPERIENCE
==================================================

The Work section should feel like an interactive case-study showcase.

The user should immediately understand:

"This agency builds websites, and I can explore their work."

The interaction should feel:

- Smooth
- Premium
- Responsive
- Intentional
- Fast
- Cinematic
- Editorial

Avoid:

- Excessive bouncing
- Random rotations
- Overly aggressive parallax
- Constant movement
- Cartoon-like animations
- Huge scale changes
- Excessive blur
- Excessive particle effects
- Anything that hurts readability
- Anything that makes the website feel like a template

Think:
Awwwards-level agency website,
but restrained and professional.

==================================================
4. PAGE LOAD ANIMATION
==================================================

When the Work section first loads, create a subtle entrance sequence.

Order:

1. Header/nav fades in
2. Main heading reveals upward
3. Intro paragraph fades upward
4. Project counter and navigation appear
5. Project title/category/description appear
6. Device mockup enters from the right
7. Bottom project rail fades/slides upward

Timing:

Header:
0.5–0.7 sec

Heading:
0.8 sec

Body:
0.6 sec

Project information:
0.6–0.8 sec

Device:
1.0–1.2 sec

Carousel:
0.7 sec

Use staggered timing.

Do not make everything appear simultaneously.

Use:
opacity
transform
clip-path/mask reveal where appropriate

Prefer transform + opacity because they are performant.

==================================================
5. HEADLINE ANIMATION
==================================================

Animate:

"Websites
Built for What's Next."

The heading should reveal line by line.

Recommended:

- overflow hidden wrapper per line
- text translates upward from approximately 100%
- opacity goes from 0 to 1
- slight stagger between lines

Example conceptual animation:

Line 1:
y: 100% → 0%

Line 2:
y: 100% → 0%

Line 3:
y: 100% → 0%

The italic "What's Next." should have a slightly delayed reveal.

Do NOT animate individual letters unless there is a very strong reason.

==================================================
6. PROJECT CAROUSEL — MAIN INTERACTION
==================================================

This is the most important interaction.

When clicking:

Previous
Next
thumbnail
project number

the entire project should transition as one coordinated animation.

Do NOT instantly replace the content.

Instead:

CURRENT PROJECT:

1. Project title moves slightly upward
2. Description fades
3. Service pills fade
4. Counter updates
5. Laptop/phone image transitions out
6. Bottom active thumbnail changes

Then:

NEW PROJECT:

1. New device mockup enters
2. New title slides upward
3. Category fades in
4. Description appears
5. Service pills stagger in
6. CTA becomes visible

Animation duration:
approximately 700–1000ms.

Use GSAP timelines so all parts are synchronized.

==================================================
7. DEVICE MOCKUP ANIMATION
==================================================

The laptop + phone is the visual hero.

Do NOT recreate realistic laptop hardware entirely in CSS.

Use:

- transparent laptop/device frame assets
- website screenshots inside the device
- mobile screenshot inside the phone

Recommended asset sources:

Use high-quality mockup assets from:

- Mockuuups Studio
- LS Graphics
- Rotato
- Figma Community
- Freepik only when licensing is appropriate
- Custom-created device PNG/WebP assets

Prefer clean transparent PNG/WebP or SVG frame assets.

Do not use low-resolution mockups.

The device composition should be:

Laptop:
large
slightly rotated/perspective
positioned toward the right

Phone:
overlaps laptop
slightly lower
closer to foreground

==================================================
8. DEVICE HOVER INTERACTION
==================================================

On desktop, allow subtle pointer interaction.

When the user's mouse moves around the device area:

Laptop:
very subtle movement following cursor

Phone:
slightly stronger movement than laptop

Example:

Mouse moves right:
device shifts approximately 5–10px right

Mouse moves left:
device shifts approximately 5–10px left

Mouse moves upward:
device shifts approximately 3–6px upward

Use smoothing.

Do NOT make it follow the cursor aggressively.

The effect should feel like the device is floating.

Add extremely subtle:

translate
rotate
scale

Do not distort the device.

On mouse leave:
return smoothly to original position.

Disable this effect on touch devices.

==================================================
9. DEVICE FLOATING ANIMATION
==================================================

While the user is not interacting:

Laptop can have a very subtle floating movement.

Example:

y:
0 → -5px → 0

rotation:
0 → 0.2deg → 0

Duration:
5–7 seconds

Repeat:
infinite

Use easeInOut.

Phone can have slightly different timing.

The two devices should NOT move identically.

This creates a natural layered feeling.

Keep amplitude extremely small.

==================================================
10. WEBSITE SCREENSHOT EFFECT
==================================================

The website screenshot inside the laptop should feel alive.

When switching projects:

Old screenshot:
slightly scale down + fade out

New screenshot:
scale from approximately 0.96 → 1
opacity 0 → 1

Optionally add a very subtle horizontal movement.

Do NOT use excessive zoom.

If possible, use overflow hidden inside the laptop screen.

==================================================
11. PROJECT THUMBNAIL CAROUSEL
==================================================

The bottom thumbnails are an important navigation mechanism.

Each thumbnail represents one project.

Interaction:

Hover:
- thumbnail slightly scales up
- image becomes slightly sharper/brighter
- title becomes more visible
- surrounding thumbnails remain calm

Active thumbnail:
- clear border
- slightly larger
- full opacity
- subtle elevation

Inactive thumbnails:
- slightly reduced opacity
- normal scale

When changing project:

The thumbnail rail should smoothly scroll so the active project remains visible.

Use horizontal scrolling.

On desktop:
hide scrollbar visually.

On mobile:
allow horizontal swipe.

==================================================
12. THUMBNAIL HOVER
==================================================

On hover:

scale:
1 → 1.03

Duration:
250–350ms

Use easeOut.

Do NOT make thumbnails jump.

The active thumbnail should have a subtle border animation.

Possible effect:

border/outline expands from center or opacity increases.

Keep it understated.

==================================================
13. PREVIOUS / NEXT BUTTONS
==================================================

The circular arrow controls should feel tactile.

Normal:
simple brown/cream circles

Hover:
- scale approximately 1.05
- arrow moves 2–4px in direction of navigation

For Next:
arrow moves slightly right

For Previous:
arrow moves slightly left

Pressed:
scale approximately 0.95

Use fast 200–300ms transitions.

The button should never feel laggy.

==================================================
14. "NEXT PROJECT" INTERACTION
==================================================

The "Next Project →" text should also change the project.

On hover:

arrow moves approximately 4–6px right.

Text can move 1–2px.

No giant underline animations.

==================================================
15. VIEW PROJECT CTA
==================================================

The main "View Project" button should have a premium hover state.

Normal:
brown background
cream/white text

Hover:

- background becomes slightly darker/lighter depending on existing palette
- arrow moves right
- button shifts approximately 1–2px
- subtle shadow appears

Pressed:
scale 0.97

Animation:
200–300ms

Do NOT create a giant magnetic button unless it can be implemented very smoothly.

==================================================
16. OPTIONAL MAGNETIC CTA
==================================================

If performance is good, implement a very subtle magnetic effect on:

"View Project"

Maximum movement:
5–8px.

Only on desktop with mouse/pointer.

Disable on touch.

If it causes instability, remove it.

The website should still feel premium without it.

==================================================
17. SCROLL ANIMATION
==================================================

The Work section should react to scrolling.

Use GSAP ScrollTrigger.

When the section enters the viewport:

- heading reveals
- project content appears
- device enters
- thumbnail rail appears

Once visible, do NOT replay constantly.

Use:

once: true

unless there is a deliberate reason otherwise.

==================================================
18. SUBTLE DEVICE PARALLAX
==================================================

While scrolling through the Work section:

Laptop:
move vertically approximately 10–25px

Phone:
move slightly differently, approximately 15–30px

This should create depth.

The movement must be subtle.

Do NOT make the devices fly around the screen.

==================================================
19. ANIMATED ARROW / HANDWRITTEN NOTE
==================================================

There is a small:

"Designed to deliver real results."

annotation near the device.

Keep this.

Animate the arrow drawing itself when the Work section enters.

Preferred implementation:

SVG path animation using GSAP.

Use stroke-dasharray/stroke-dashoffset.

Sequence:

1. Text fades in
2. Arrow path draws itself
3. Arrow head appears

This should take approximately 800–1200ms.

Do NOT use a GIF.

Use SVG.

==================================================
20. SERVICE PILLS
==================================================

Service pills:

Website Design
Development
Hosting
Ongoing Support

When project changes:

They should not instantly disappear.

Animate them as a stagger.

Exit:
opacity 0
y: 5px

Enter:
opacity 0 → 1
y: 8px → 0

Stagger:
approximately 50–80ms.

==================================================
21. PROJECT NUMBER
==================================================

Current:

01 / 06

When switching projects, animate the number.

Example:

01 → 02

Instead of simply replacing text, make the number slide vertically.

Old:
moves up

New:
comes from below

Keep "/" static.

This is a small detail but makes the interaction feel much more polished.

==================================================
22. PROJECT TITLE TRANSITION
==================================================

When changing projects:

Current title:

opacity 1
y 0

Exit:

opacity 0
y -15px

New title:

opacity 0
y 20px

Enter:

opacity 1
y 0

Use approximately 600–800ms.

The title should be the main textual focal point.

==================================================
23. IMAGE TRANSITION
==================================================

When changing project:

Old device:
scale 1
opacity 1
x 0

Exit:
scale 0.97
opacity 0
x: -20px

New device:
scale 0.96
opacity 0
x: 30px

Enter:
scale 1
opacity 1
x: 0

Use an elegant ease.

Avoid aggressive spring physics.

==================================================
24. BACKGROUND TRANSITIONS
==================================================

The background should remain mostly static.

Do NOT change the entire background dramatically per project.

However, if individual projects have a dominant image/color:

allow an extremely subtle tonal shift.

Example:

cream:
#F3E8D8

could shift very slightly.

Maximum change:
5–8% visual difference.

The page should still feel like Schrader.

==================================================
25. CURSOR INTERACTION
==================================================

If implementing a custom cursor, keep it minimal.

Do NOT replace the normal cursor everywhere.

Optional:

When hovering:

View Project
Next Project
thumbnail

show a subtle custom cursor label such as:

"VIEW"

or

"OPEN"

Only on desktop.

Disable completely on:

- mobile
- tablet where pointer precision is limited
- accessibility settings if appropriate

If custom cursor makes the website feel gimmicky, do not use it.

==================================================
26. MOBILE EXPERIENCE
==================================================

Do NOT simply shrink the desktop design.

Create a dedicated responsive composition.

On mobile:

- heading becomes smaller
- text width becomes full
- laptop can be hidden or significantly reduced
- phone becomes the primary device
- project information appears below/around the phone
- thumbnails remain horizontally scrollable
- buttons remain easily tappable
- navigation remains usable

Mobile priority:

1. Project visual
2. Project title
3. Description
4. CTA
5. Thumbnail navigation

Do NOT create hover-only interactions on mobile.

==================================================
27. TOUCH / SWIPE SUPPORT
==================================================

On mobile and touch devices:

Allow horizontal swipe to change projects.

Swipe left:
Next project

Swipe right:
Previous project

Use a reasonable threshold, approximately 40–60px.

Do not accidentally trigger project changes from normal vertical scrolling.

Use pointer/touch events carefully.

==================================================
28. KEYBOARD ACCESSIBILITY
==================================================

The carousel must support:

ArrowLeft:
previous project

ArrowRight:
next project

Enter:
activate focused project

Tab:
properly navigates controls

Buttons must be real buttons.

Do NOT use clickable divs where buttons are appropriate.

==================================================
29. REDUCED MOTION
==================================================

IMPORTANT:

Respect:

prefers-reduced-motion: reduce

If enabled:

- disable floating devices
- disable cursor effects
- disable large transitions
- minimize parallax
- use simple fades
- keep functionality intact

The carousel must still work.

==================================================
30. PERFORMANCE
==================================================

Animations should use:

transform
opacity

whenever possible.

Avoid animating:

top
left
width
height

unless absolutely necessary.

Use:

will-change

only when appropriate.

Do not constantly trigger React state updates from mouse movement.

Use GSAP refs or requestAnimationFrame where appropriate.

Lazy-load project images that are not immediately needed.

Preload the next project image if possible.

The current project should never show a blank device while loading.

==================================================
31. IMAGE OPTIMIZATION
==================================================

Use:

WebP or AVIF

for website screenshots.

Provide appropriate dimensions.

Do not load 5–10MB PNG screenshots.

Recommended:

Desktop screenshot:
approximately 1600–2200px wide

Mobile screenshot:
approximately 700–1000px wide

Thumbnails:
approximately 500–700px wide

Use responsive image loading where supported.

==================================================
32. PROJECT DATA ARCHITECTURE
==================================================

Do NOT hardcode each project into the JSX.

Create a structured project data file.

Example:

projects = [
 {
   id: "tj-waterfront",
   title: "TJ Waterfront",
   category: "RESTAURANT / WATERFRONT",
   description: "...",
   desktopImage: "...",
   mobileImage: "...",
   thumbnail: "...",
   services: [
      "Website Design",
      "Development",
      "Hosting",
      "Ongoing Support"
   ],
   href: "..."
 }
]

The UI should render dynamically from this data.

This makes adding future projects easy.

==================================================
33. PROJECT TRANSITION ARCHITECTURE
==================================================

Create a centralized function such as:

changeProject(index, direction)

It should:

1. Prevent duplicate transition triggers
2. Determine previous/current project
3. Animate current content out
4. Update project state
5. Animate new content in
6. Update active thumbnail
7. Scroll thumbnail rail if necessary
8. Re-enable interaction

Prevent users from rapidly clicking Next 10 times and breaking the animation.

Use an animation lock or timeline state.

==================================================
34. TRANSITION FEEL
==================================================

The overall transition should feel similar to a premium editorial website.

Think:

Magazine page turning
+
Luxury automotive website
+
Modern creative agency portfolio

Not:

PowerPoint slideshow
Not:
basic Swiper carousel
Not:
generic Framer template

==================================================
35. MICROINTERACTIONS
==================================================

Add subtle microinteractions to:

- navigation links
- arrows
- service pills
- thumbnails
- View Project button
- Next Project
- Your Business Could Be Next card

Each interaction should have a purpose.

Do not animate every element simply because animation is possible.

==================================================
36. "YOUR BUSINESS COULD BE NEXT"
==================================================

The final carousel card should feel like a CTA rather than a normal project.

On hover:

- plus icon rotates slightly
- card lifts approximately 4–6px
- border becomes more visible
- arrow appears or moves
- text shifts subtly

On click:

navigate to the contact/quote section.

This should feel like the natural conclusion of the portfolio.

==================================================
37. VISUAL SPACING
==================================================

Improve the current vertical composition.

Current issue:
There is too much empty space between the introductory heading and project information.

Bring the project information upward.

Make the device larger.

The device should visually dominate the right side.

Approximate desktop layout:

LEFT:
40–45%

RIGHT:
55–60%

Device should extend close to the bottom carousel.

Laptop should be approximately 15–20% larger than the current implementation.

Phone should overlap the laptop noticeably.

Do not let the device touch the viewport edges.

==================================================
38. Z-INDEX / DEPTH
==================================================

Create visual depth:

Background
↓
decorative annotation
↓
laptop
↓
phone
↓
carousel

Phone should appear in front of laptop.

Use subtle shadows.

Avoid excessive drop shadows.

==================================================
39. VISUAL DETAILS
==================================================

Add:

- subtle 1px borders
- soft shadows
- very light texture if already consistent with site
- editorial spacing
- restrained rounded corners
- clean typography

Avoid:

- gradients everywhere
- glassmorphism
- neon
- excessive blur
- glowing elements
- huge shadows
- excessive rounded cards

The brand should feel premium and mature.

==================================================
40. DO NOT USE GENERIC STOCK ANIMATIONS
==================================================

Do not add random:

- particles
- floating blobs
- spinning circles
- animated gradients
- liquid effects
- cursor trails
- random 3D objects

unless specifically required.

The portfolio itself is the animation.

==================================================
41. FINAL INTERACTION FLOW
==================================================

The ideal user experience:

USER ENTERS WORK SECTION

↓

Heading reveals

↓

Project information appears

↓

Laptop and phone smoothly enter

↓

Arrow annotation draws

↓

User moves cursor

↓

Device subtly responds

↓

User hovers thumbnail

↓

Thumbnail slightly enlarges

↓

User clicks thumbnail #3

↓

Current project exits

↓

Device transitions

↓

New project enters

↓

Project title reveals

↓

Description reveals

↓

Service pills stagger

↓

Thumbnail rail moves

↓

Counter changes

↓

User can click View Project

↓

User can continue exploring

This should feel like one continuous choreographed experience.

==================================================
42. IMPORTANT IMPLEMENTATION RULE
==================================================

Before changing anything:

Inspect the existing codebase.

Identify:

- framework
- routing
- current Work component
- existing CSS/Tailwind
- existing animation libraries
- existing image assets
- current responsive breakpoints

Do not unnecessarily rewrite unrelated components.

Modify only what is necessary.

Preserve existing functionality.

==================================================
43. DO NOT BREAK EXISTING WEBSITE
==================================================

Do not modify:

- header functionality
- unrelated sections
- contact section
- navigation routing
- existing project URLs
- global typography unless required
- global colors unless required

The Work section should integrate naturally with the existing Schrader website.

==================================================
44. QUALITY STANDARD
==================================================

Before considering the task complete, test:

Desktop:
1440px
1280px
1024px

Tablet:
768px

Mobile:
430px
390px
375px

Test:

- Next
- Previous
- every thumbnail
- View Project
- swipe
- keyboard arrows
- rapid clicking
- resizing
- page refresh
- slow image loading
- reduced motion
- mobile touch

Make sure there are no:

- layout jumps
- image flashes
- broken transitions
- overlapping text
- horizontal page overflow
- inaccessible controls
- animation glitches

==================================================
45. FINAL RESULT
==================================================

The final Work section should look like:

A premium creative agency portfolio.

It should NOT look like:

a normal website carousel.

The user should feel that every project is being presented as a digital case study.

Prioritize:

1. Visual hierarchy
2. Typography
3. Device presentation
4. Project transitions
5. Thumbnail navigation
6. Microinteractions
7. Responsive behavior
8. Performance

Do not sacrifice usability for animation.

The animation should make the design feel more premium, not distract from the projects.

After implementation, review the entire section visually and make another refinement pass specifically for:

- spacing
- device scale
- animation timing
- alignment
- typography
- mobile layout
- excessive motion

If an animation feels unnecessary, remove it.

The final result should feel polished enough for an Awwwards/creative-agency style portfolio while still being fast and professional.