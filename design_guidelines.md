# Design Guidelines: Akash Verma Portfolio

## Design Approach
**Selected Approach:** Reference-Based with Developer Portfolio Focus

Drawing inspiration from Linear's clean modernism, Vercel's technical sophistication, and award-winning developer portfolios that balance artistic expression with professional credibility. The design should demonstrate technical prowess through execution while maintaining recruiter-friendly usability.

## Core Design Principles
1. **Technical Showcase Through Design** - The portfolio itself is a demonstration of frontend capabilities
2. **Smooth, Cinematic Experience** - Leverage animation libraries for fluid, memorable interactions
3. **Professional Yet Creative** - Balance artistic expression with corporate acceptability
4. **Content Hierarchy** - Guide recruiters through achievements efficiently while allowing deeper exploration

## Color Palette

**Dark Mode Primary** (for sophisticated, modern feel):
- Background Base: 220 25% 8%
- Background Elevated: 220 20% 12%
- Text Primary: 0 0% 98%
- Text Secondary: 220 15% 65%
- Accent Primary: 210 100% 60% (vibrant blue for CTAs and highlights)
- Accent Secondary: 170 80% 50% (cyan for interactive elements)
- Success/Achievement: 142 76% 45% (for stats and achievements)

**Subtle Gradients:**
- Hero overlay: Radial gradient from 220 30% 5% to 220 25% 8%
- Project cards: Subtle gradient borders using accent colors at low opacity
- 3D elements: Gradient meshes in blue-cyan spectrum

## Typography

**Font Families:**
- Primary Display: 'Inter' (Google Fonts) - 700 weight for headings, clean and modern
- Body Text: 'Inter' - 400/500 weight for readability
- Code/Technical: 'JetBrains Mono' - for skill tags and technical details

**Type Scale:**
- Hero Heading: 4rem to 5rem (desktop), 2.5rem (mobile) - Bold 700
- Section Headings: 2.5rem to 3rem (desktop), 1.75rem (mobile) - Bold 700
- Project Titles: 1.5rem - SemiBold 600
- Body Text: 1rem to 1.125rem - Regular 400, line-height 1.7
- Small Text/Labels: 0.875rem - Medium 500

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 8, 12, 16, 20, 24, 32 as primary spacing scale
- Section Vertical Padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Container Max Width: max-w-7xl for main content, max-w-6xl for text-heavy sections
- Grid Gaps: gap-8 for project grids, gap-4 for skill cards

**Grid Structure:**
- Projects: 3-column grid on desktop (lg:grid-cols-3), 2-column on tablet (md:grid-cols-2), single column on mobile
- Skills: 4-column grid (lg:grid-cols-4) for skill categories, stacking responsively
- Two-column splits for Experience/Education sections with timeline on left

## Component Library

### Navigation
- Fixed header with backdrop blur effect (backdrop-blur-md bg-background/80)
- Smooth scroll navigation with active section highlighting
- Mobile: Hamburger menu with full-screen overlay transition
- Logo/Name on left, nav links center, social icons right

### Hero Section
- Full viewport height (min-h-screen) with Three.js 3D background (animated geometric particles or mesh)
- Professional headshot: circular frame (300px diameter) with subtle glow effect, positioned left or center
- Animated text reveal for name and tagline using GSAP SplitText
- Dual CTAs: Primary "View Resume" (filled, accent blue), Secondary "Contact Me" (outline with blur background)
- Floating social icons with stagger animation on load

### About Section
- Two-column layout: Image/visual element left (could be illustrated scene or abstract graphic), text content right
- Text reveals on scroll with ScrollTrigger and GSAP
- Pull quote style for key statement in larger text

### Skills Section
- Categorized skill cards with subtle hover lift effect
- Each category as a card with frosted glass effect (bg-white/5 backdrop-blur)
- Tech stack icons or text badges with gradient borders
- Stagger animation as section enters viewport

### Experience Timeline
- Vertical timeline with connecting line
- Company logo/icon in timeline dots
- Content cards expand on scroll with parallax offset
- Bullet points with animated checkmarks or icons

### Projects Showcase
- Featured project cards with hover state revealing more details
- Project images in browser/laptop mockup frames
- Tech stack tags below each project with different color coding
- "View Demo" and "GitHub" links as icon buttons
- Parallax scroll effect on project images

### Achievements Section
- Stats counter animation when section enters view (GATE rank, LeetCode problems, etc.)
- Badge-style design for each achievement with icons
- Grid layout with 2x2 or 4-column depending on count
- Gradient backgrounds for each stat card

### Contact Section
- Split layout: Contact form left, information/map placeholder right
- Form fields with focus animations and validation states
- Submit button with loading state animation
- Social links repeated with larger interactive areas

## Animations & Interactions

**Page Load:**
- Logo fade-in and scale
- Hero text stagger reveal (character by character or word by word)
- Three.js scene fade-in with particle animation
- Navigation items slide in from top

**Scroll Behaviors:**
- Locomotive Scroll for smooth scrolling with parallax effects
- Section headings fade-up with slight Y translation using ScrollTrigger
- Project cards stagger-in from bottom as they enter viewport
- Stats counter animation triggers at 50% viewport intersection
- Background elements move at different speeds for depth

**Hover States:**
- Project cards: Lift with shadow increase, image slight zoom
- Skill badges: Glow effect on border
- Social icons: Scale + color shift
- Navigation links: Underline slide-in animation

**Micro-interactions:**
- Button ripple effect on click using Framer Motion
- Form field labels animate up on focus
- Cursor trail or custom cursor for desktop (subtle)
- Scroll progress indicator at top of page

## Images

**Required Images:**

1. **Hero Section:** Professional headshot (300x300px minimum, high resolution)
   - Placement: Left side or center of hero section
   - Treatment: Circular crop with subtle gradient border glow

2. **Project 1 - Shopper's Bay:** Homepage/product listing screenshot
   - Placement: Inside browser mockup frame in project card
   - Treatment: Slight perspective tilt, shadow underneath

3. **Project 2 - CodeSnip:** Postman/Swagger UI screenshot
   - Placement: Browser mockup or editor-style frame
   - Treatment: Code syntax highlighting visible, professional crop

4. **Project 3 - CampusConnect:** Discussion thread screenshot
   - Placement: Browser mockup showing interactive elements
   - Treatment: Highlight active discussions with UI elements visible

**Optional Decorative Elements:**
- Abstract geometric shapes in hero background (Three.js generated)
- Icon illustrations for skill categories
- Achievement badges as custom graphics

## Responsive Considerations

**Desktop (1024px+):** Full animations, multi-column layouts, Three.js at full complexity
**Tablet (768px-1023px):** Reduce columns to 2, maintain key animations, simplified 3D effects
**Mobile (<768px):** Single column, simplified animations, remove heavy 3D rendering, focus on content clarity

**Mobile Optimizations:**
- Stack all multi-column sections
- Reduce animation complexity (disable Locomotive scroll parallax, use simple fade-ins)
- Touch-friendly button sizes (min 44px height)
- Hamburger navigation with slide-out menu
- Smaller typography scale

## Accessibility Notes
- Maintain consistent dark mode throughout
- Text contrast ratios: 4.5:1 minimum for body text, 3:1 for large text
- Reduced motion preference: Disable animations for users with prefers-reduced-motion
- Focus states clearly visible with accent color outlines
- Alt text for all images, especially project screenshots
- Semantic HTML with proper heading hierarchy