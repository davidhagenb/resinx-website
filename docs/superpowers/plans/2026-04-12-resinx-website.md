# ResinX Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a multi-page, SEO-optimized, lead-generation website for ResinX epoxy flooring company with AI-generated photorealistic visuals and an animated logo.

**Architecture:** Vanilla HTML/CSS/JS static site. Dark hero / light content visual theme. 6 pages targeting Spanish-language SEO keywords. All visuals generated via fal.ai FLUX 1.1 Pro Ultra. Animated SVG logo with GIF export. Mobile-first responsive. Deploy-ready for any static host.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, fal.ai (image generation via visual-creator subagent)

**Working Directory:** `C:\Users\Owner\Desktop\resinx-website`

**Design Spec:** `docs/2026-04-12-resinx-website-design.md`

---

## Phase 1: Foundation (CSS + Layout System)

### Task 1: Core CSS — Reset, Variables, Typography

**Files:**
- Create: `css/main.css`

- [ ] **Step 1: Create CSS reset and custom properties**

```css
/* css/main.css */

/* ========== RESET ========== */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #1e293b;
  background: #f8fafc;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

ul, ol { list-style: none; }

button, input, textarea, select {
  font: inherit;
  color: inherit;
}

/* ========== CUSTOM PROPERTIES ========== */
:root {
  /* Brand colors */
  --color-black: #0a0a0a;
  --color-blue: #3b82f6;
  --color-blue-dark: #2563eb;
  --color-blue-light: #60a5fa;
  --color-red: #ef4444;
  --color-red-dark: #dc2626;
  --color-white: #f8fafc;
  --color-slate: #1e293b;
  --color-slate-light: #334155;
  --color-slate-lighter: #64748b;
  --color-gray-100: #f1f5f9;
  --color-gray-200: #e2e8f0;
  --color-gray-300: #cbd5e1;
  --color-gray-800: #1e293b;

  /* Typography scale */
  --font-xs: 0.75rem;
  --font-sm: 0.875rem;
  --font-base: 1rem;
  --font-lg: 1.125rem;
  --font-xl: 1.25rem;
  --font-2xl: 1.5rem;
  --font-3xl: 1.875rem;
  --font-4xl: 2.25rem;
  --font-5xl: 3rem;
  --font-6xl: 3.75rem;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;

  /* Layout */
  --max-width: 1200px;
  --nav-height: 72px;

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 300ms ease;
  --transition-slow: 500ms ease;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.07);
  --shadow-lg: 0 10px 25px rgba(0,0,0,0.1);
  --shadow-xl: 0 20px 50px rgba(0,0,0,0.15);

  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
}

/* ========== TYPOGRAPHY ========== */
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-slate);
}

h1 { font-size: var(--font-5xl); }
h2 { font-size: var(--font-4xl); }
h3 { font-size: var(--font-2xl); }
h4 { font-size: var(--font-xl); }

@media (max-width: 768px) {
  h1 { font-size: var(--font-4xl); }
  h2 { font-size: var(--font-3xl); }
  h3 { font-size: var(--font-xl); }
}

p {
  color: var(--color-slate-lighter);
  line-height: 1.7;
}

/* ========== LAYOUT UTILITIES ========== */
.container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.section {
  padding: var(--space-20) 0;
}

.section--dark {
  background: var(--color-black);
  color: var(--color-white);
}

.section--dark h1,
.section--dark h2,
.section--dark h3,
.section--dark h4 {
  color: var(--color-white);
}

.section--dark p {
  color: var(--color-gray-300);
}

.section--gray {
  background: var(--color-gray-100);
}

.text-center { text-align: center; }

.grid {
  display: grid;
  gap: var(--space-8);
}

.grid--2 { grid-template-columns: repeat(2, 1fr); }
.grid--3 { grid-template-columns: repeat(3, 1fr); }
.grid--4 { grid-template-columns: repeat(4, 1fr); }

@media (max-width: 768px) {
  .grid--2, .grid--3, .grid--4 {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .grid--3, .grid--4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* ========== BUTTONS ========== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-8);
  font-size: var(--font-base);
  font-weight: 600;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.btn--primary {
  background: var(--color-blue);
  color: white;
}

.btn--primary:hover {
  background: var(--color-blue-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.btn--secondary {
  background: transparent;
  color: var(--color-blue);
  border: 2px solid var(--color-blue);
}

.btn--secondary:hover {
  background: var(--color-blue);
  color: white;
}

.btn--white {
  background: white;
  color: var(--color-slate);
}

.btn--white:hover {
  background: var(--color-gray-100);
  transform: translateY(-1px);
}

.btn--large {
  padding: var(--space-4) var(--space-12);
  font-size: var(--font-lg);
  border-radius: var(--radius-lg);
}

.btn--whatsapp {
  background: #25d366;
  color: white;
}

.btn--whatsapp:hover {
  background: #20bd5a;
}

.btn--phone {
  background: var(--color-slate);
  color: white;
}

.btn--phone:hover {
  background: var(--color-slate-light);
}

/* ========== SECTION HEADERS ========== */
.section-header {
  max-width: 700px;
  margin: 0 auto var(--space-12);
  text-align: center;
}

.section-header__label {
  display: inline-block;
  font-size: var(--font-sm);
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-blue);
  margin-bottom: var(--space-4);
}

.section-header__title {
  margin-bottom: var(--space-4);
}

.section-header__subtitle {
  font-size: var(--font-lg);
  color: var(--color-slate-lighter);
}

/* ========== CARDS ========== */
.card {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-gray-200);
  transition: all var(--transition-base);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.card__image {
  width: 100%;
  aspect-ratio: 16/10;
  object-fit: cover;
}

.card__body {
  padding: var(--space-6);
}

.card__title {
  font-size: var(--font-xl);
  margin-bottom: var(--space-2);
}

.card__text {
  font-size: var(--font-sm);
  color: var(--color-slate-lighter);
  margin-bottom: var(--space-4);
}

/* ========== NAVBAR ========== */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  z-index: 1000;
  transition: all var(--transition-base);
}

.nav--transparent {
  background: transparent;
}

.nav--solid {
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.nav__inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-6);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__logo {
  height: 36px;
}

.nav__links {
  display: flex;
  gap: var(--space-8);
  align-items: center;
}

.nav__link {
  font-size: var(--font-sm);
  font-weight: 500;
  color: rgba(255,255,255,0.8);
  transition: color var(--transition-fast);
  position: relative;
}

.nav__link:hover,
.nav__link--active {
  color: white;
}

.nav__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-blue);
  transition: width var(--transition-fast);
}

.nav__link:hover::after,
.nav__link--active::after {
  width: 100%;
}

.nav__cta {
  padding: var(--space-2) var(--space-6);
  font-size: var(--font-sm);
}

/* Mobile nav toggle */
.nav__toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-2);
}

.nav__toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: white;
  margin: 5px 0;
  transition: all var(--transition-fast);
}

@media (max-width: 768px) {
  .nav__toggle {
    display: block;
  }

  .nav__links {
    position: fixed;
    top: var(--nav-height);
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(10, 10, 10, 0.98);
    flex-direction: column;
    justify-content: center;
    gap: var(--space-8);
    transform: translateX(100%);
    transition: transform var(--transition-base);
  }

  .nav__links--open {
    transform: translateX(0);
  }

  .nav__link {
    font-size: var(--font-xl);
  }
}

/* ========== FOOTER ========== */
.footer {
  background: var(--color-black);
  color: var(--color-gray-300);
  padding: var(--space-16) 0 var(--space-8);
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--space-12);
  margin-bottom: var(--space-12);
}

@media (max-width: 768px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
}

.footer__brand-desc {
  font-size: var(--font-sm);
  color: var(--color-slate-lighter);
  margin-top: var(--space-4);
  max-width: 300px;
}

.footer__heading {
  font-size: var(--font-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: white;
  margin-bottom: var(--space-4);
}

.footer__link {
  display: block;
  font-size: var(--font-sm);
  color: var(--color-slate-lighter);
  margin-bottom: var(--space-2);
  transition: color var(--transition-fast);
}

.footer__link:hover {
  color: var(--color-blue);
}

.footer__bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: var(--space-8);
  text-align: center;
  font-size: var(--font-xs);
  color: var(--color-slate-lighter);
}
```

- [ ] **Step 2: Verify file was created correctly**

Run: `ls -la C:/Users/Owner/Desktop/resinx-website/css/main.css`
Expected: file exists with non-zero size

- [ ] **Step 3: Commit**

```bash
cd C:/Users/Owner/Desktop/resinx-website
git add css/main.css
git commit -m "feat: add core CSS — reset, variables, typography, layout system, components"
```

---

### Task 2: Logo SVG Animation

**Files:**
- Create: `assets/images/logo/resinx-logo.svg`
- Create: `css/animations.css`

- [ ] **Step 1: Create the animated SVG logo**

The logo has: white "Resin" text, blue "X", and a red orbital ring that rotates around the X. Build this as an inline SVG with CSS animation.

```svg
<!-- assets/images/logo/resinx-logo.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" width="400" height="100">
  <style>
    @keyframes orbit {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .orbit-ring {
      transform-origin: 310px 50px;
      animation: orbit 4s linear infinite;
    }
    .logo-text { font-family: 'Inter', Arial, sans-serif; font-weight: 700; font-size: 72px; }
  </style>

  <!-- "Resin" text in white -->
  <text x="20" y="75" class="logo-text" fill="#ffffff">Resin</text>

  <!-- "X" text in blue -->
  <text x="280" y="75" class="logo-text" fill="#3b82f6">X</text>

  <!-- Red orbital ring around the X -->
  <g class="orbit-ring">
    <ellipse cx="310" cy="50" rx="55" ry="20" fill="none" stroke="#ef4444" stroke-width="4" transform="rotate(-25, 310, 50)"/>
  </g>
</svg>
```

Note: This is a starting point. The exact coordinates will need visual tuning once rendered in the browser. The key mechanics are correct: text elements + animated ellipse with `transform-origin` centered on the X character.

- [ ] **Step 2: Create animations CSS file**

```css
/* css/animations.css */

/* ========== LOGO ORBIT ========== */
@keyframes orbit {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.logo-orbit {
  animation: orbit 4s linear infinite;
}

/* ========== FADE IN UP ========== */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}

.animate-delay-1 { animation-delay: 0.1s; }
.animate-delay-2 { animation-delay: 0.2s; }
.animate-delay-3 { animation-delay: 0.3s; }
.animate-delay-4 { animation-delay: 0.4s; }
.animate-delay-5 { animation-delay: 0.5s; }

/* ========== FADE IN ========== */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  opacity: 0;
  animation: fadeIn 0.6s ease forwards;
}

/* ========== SLIDE IN LEFT ========== */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-left {
  opacity: 0;
  animation: slideInLeft 0.7s ease forwards;
}

/* ========== SCALE IN ========== */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  opacity: 0;
  animation: scaleIn 0.5s ease forwards;
}

/* ========== SCROLL-TRIGGERED ANIMATIONS ========== */
/* Applied via IntersectionObserver in main.js */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal--visible {
  opacity: 1;
  transform: translateY(0);
}

/* ========== HERO PARALLAX OVERLAY ========== */
.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 10, 0.7) 0%,
    rgba(10, 10, 10, 0.5) 50%,
    rgba(10, 10, 10, 0.9) 100%
  );
}

/* ========== BEFORE/AFTER SLIDER ========== */
.ba-slider {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-lg);
}

.ba-slider__before,
.ba-slider__after {
  display: block;
  width: 100%;
}

.ba-slider__before {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
}

.ba-slider__handle {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background: white;
  cursor: ew-resize;
  z-index: 2;
}

.ba-slider__handle::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  box-shadow: var(--shadow-lg);
}
```

- [ ] **Step 3: Commit**

```bash
cd C:/Users/Owner/Desktop/resinx-website
git add assets/images/logo/resinx-logo.svg css/animations.css
git commit -m "feat: add animated SVG logo and CSS animations library"
```

---

### Task 3: JavaScript — Nav, Scroll Animations, Mobile Menu

**Files:**
- Create: `js/main.js`

- [ ] **Step 1: Create main JavaScript file**

```javascript
/* js/main.js */

(function() {
  'use strict';

  // ========== NAVBAR SCROLL BEHAVIOR ==========
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 80) {
        nav.classList.remove('nav--transparent');
        nav.classList.add('nav--solid');
      } else {
        nav.classList.add('nav--transparent');
        nav.classList.remove('nav--solid');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ========== MOBILE MENU TOGGLE ==========
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('nav__links--open');
      toggle.setAttribute('aria-expanded',
        links.classList.contains('nav__links--open'));
    });

    // Close menu when a link is clicked
    links.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('nav__links--open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ========== SCROLL REVEAL ANIMATIONS ==========
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }

  // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--nav-height')) || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ========== ACTIVE NAV LINK HIGHLIGHT ==========
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('nav__link--active');
    }
  });

  // ========== CONTACT FORM HANDLING ==========
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const nombre = data.get('nombre');
      const tipo = data.get('tipo');
      const area = data.get('area');
      const mensaje = data.get('mensaje');

      // Build WhatsApp message as fallback
      const waMsg = encodeURIComponent(
        `Hola, soy ${nombre}. Me interesa una cotizacion para ${tipo}` +
        (area ? ` (aprox. ${area} m2)` : '') +
        (mensaje ? `. ${mensaje}` : '.')
      );

      // For now, open WhatsApp with pre-filled message
      // Replace WHATSAPP_NUMBER placeholder when available
      const waNumber = '{{WHATSAPP_NUMBER}}';
      if (waNumber.startsWith('{{')) {
        alert('Gracias por tu interes. Nos pondremos en contacto pronto.');
      } else {
        window.open(`https://wa.me/${waNumber}?text=${waMsg}`, '_blank');
      }
    });
  }

})();
```

- [ ] **Step 2: Commit**

```bash
cd C:/Users/Owner/Desktop/resinx-website
git add js/main.js
git commit -m "feat: add main JS — navbar scroll, mobile menu, scroll reveal, form handler"
```

---

## Phase 2: AI Image Generation

### Task 4: Generate Hero and Gallery Images with fal.ai

**Files:**
- Create: images in `assets/images/hero/`, `assets/images/gallery/`, `assets/images/services/`, `assets/images/process/`

This task uses the `visual-creator` subagent which has access to fal.ai MCP tools. Each image must be generated with FLUX 1.1 Pro Ultra (`fal-ai/flux-pro/v1.1-ultra`) for maximum photorealism.

- [ ] **Step 1: Create asset directories**

```bash
cd C:/Users/Owner/Desktop/resinx-website
mkdir -p assets/images/{hero,gallery/residential,gallery/commercial,gallery/industrial,gallery/before-after,services,process}
```

- [ ] **Step 2: Generate hero image**

Use visual-creator subagent with this prompt for fal.ai:

**Model:** `fal-ai/flux-pro/v1.1-ultra`
**Aspect ratio:** `16:9`
**Prompt:**
```
Professional photography of a luxury modern residential garage with freshly installed metallic epoxy flooring, dramatic silver and blue metallic swirls reflecting overhead LED lighting, two luxury cars parked, clean concrete walls, professional installation quality, wide angle architectural photography, dramatic lighting, ultra realistic, 8k quality, commercial photography
```

Save to: `assets/images/hero/hero-main.jpg`

- [ ] **Step 3: Generate residential gallery images (4 images)**

**Model:** `fal-ai/flux-pro/v1.1-ultra`
**Aspect ratio:** `3:2`

Prompts:
1. `Professional photography of a modern residential garage interior with decorative flake epoxy floor in gray and blue chips, clean organized space, natural light from open garage door, wide angle shot, ultra realistic commercial photography, 8k`
Save: `assets/images/gallery/residential/garage-flake-01.jpg`

2. `Professional interior photography of a modern home basement with seamless metallic epoxy flooring, warm silver copper swirl pattern, minimalist furniture, recessed lighting, ultra realistic architectural photography, 8k`
Save: `assets/images/gallery/residential/interior-metallic-01.jpg`

3. `Professional photography of a covered residential patio with tan and brown flake epoxy floor coating, outdoor furniture, desert landscaping visible, Sonoran style home architecture, golden hour light, ultra realistic, 8k`
Save: `assets/images/gallery/residential/patio-flake-01.jpg`

4. `Professional photography of a luxury home laundry room and mudroom with solid gray self-leveling epoxy floor, white cabinetry, clean modern design, bright overhead lighting, ultra realistic interior photography, 8k`
Save: `assets/images/gallery/residential/interior-solid-01.jpg`

- [ ] **Step 4: Generate commercial gallery images (4 images)**

**Model:** `fal-ai/flux-pro/v1.1-ultra`
**Aspect ratio:** `3:2`

Prompts:
1. `Professional photography of a modern restaurant interior with decorative metallic epoxy flooring, elegant copper and bronze swirl pattern, tables and chairs, ambient lighting, upscale dining atmosphere, ultra realistic commercial photography, 8k`
Save: `assets/images/gallery/commercial/restaurant-metallic-01.jpg`

2. `Professional photography of a luxury car showroom with high-gloss solid epoxy floor in dark charcoal, reflective surface mirroring ceiling lights, vehicles on display, expansive open space, ultra realistic architectural photography, 8k`
Save: `assets/images/gallery/commercial/showroom-solid-01.jpg`

3. `Professional photography of a modern retail clothing store with seamless white epoxy floor, minimalist display racks, track lighting, clean commercial space, ultra realistic interior photography, 8k`
Save: `assets/images/gallery/commercial/retail-white-01.jpg`

4. `Professional photography of a modern office lobby with decorative flake epoxy flooring in professional gray and white chips, reception desk, glass doors, corporate environment, ultra realistic commercial photography, 8k`
Save: `assets/images/gallery/commercial/office-flake-01.jpg`

- [ ] **Step 5: Generate industrial gallery images (3 images)**

**Model:** `fal-ai/flux-pro/v1.1-ultra`
**Aspect ratio:** `3:2`

Prompts:
1. `Professional photography of a large industrial warehouse with heavy-duty industrial epoxy floor coating in medium gray, forklifts, shelving units with inventory, high ceiling with industrial lighting, ultra realistic, 8k`
Save: `assets/images/gallery/industrial/warehouse-01.jpg`

2. `Professional photography of an auto mechanic workshop with chemical-resistant epoxy floor, tool benches, vehicle lift, organized professional workspace, fluorescent overhead lighting, ultra realistic commercial photography, 8k`
Save: `assets/images/gallery/industrial/workshop-01.jpg`

3. `Professional photography of a food processing facility with white urethane cement floor coating, stainless steel equipment, drainage system visible, FDA-compliant clean environment, ultra realistic industrial photography, 8k`
Save: `assets/images/gallery/industrial/food-facility-01.jpg`

- [ ] **Step 6: Generate before/after pairs (3 pairs = 6 images)**

**Model:** `fal-ai/flux-pro/v1.1-ultra`
**Aspect ratio:** `3:2`

Before images:
1. `Professional photography of a damaged bare concrete garage floor with cracks stains and oil marks, worn surface, harsh overhead lighting, before renovation, ultra realistic, 8k`
Save: `assets/images/gallery/before-after/garage-before.jpg`

2. `Professional photography of a worn cracked commercial concrete floor in empty retail space, scuff marks water damage visible, fluorescent lighting, before renovation, ultra realistic, 8k`
Save: `assets/images/gallery/before-after/commercial-before.jpg`

3. `Professional photography of a damaged industrial concrete floor with heavy wear marks and chemical stains, warehouse setting, before renovation, ultra realistic, 8k`
Save: `assets/images/gallery/before-after/industrial-before.jpg`

After images (matching perspectives):
1. `Professional photography of a residential garage with freshly installed decorative blue and gray flake epoxy floor, glossy finish, same angle as inspection photo, clean organized space, bright lighting, after renovation, ultra realistic, 8k`
Save: `assets/images/gallery/before-after/garage-after.jpg`

2. `Professional photography of a retail space with freshly installed seamless metallic epoxy floor in silver, glossy reflective finish, same commercial space now transformed, after renovation, ultra realistic, 8k`
Save: `assets/images/gallery/before-after/commercial-after.jpg`

3. `Professional photography of an industrial warehouse with freshly installed heavy-duty gray epoxy floor coating, smooth durable finish, clean professional result, after renovation, ultra realistic, 8k`
Save: `assets/images/gallery/before-after/industrial-after.jpg`

- [ ] **Step 7: Generate process photos (4 images)**

**Model:** `fal-ai/flux-pro/v1.1-ultra`
**Aspect ratio:** `3:2`

Prompts:
1. `Professional photography of a worker grinding and preparing a concrete floor surface with diamond grinder machine, dust extraction system, protective equipment, surface preparation for epoxy coating, ultra realistic, 8k`
Save: `assets/images/process/01-prep.jpg`

2. `Professional photography of two workers mixing epoxy resin components in buckets, colorful resin and hardener being combined, professional tools and materials visible on concrete floor, ultra realistic, 8k`
Save: `assets/images/process/02-mixing.jpg`

3. `Professional photography of a professional installer applying epoxy floor coating with a squeegee roller, wet glossy coating being spread on floor, midway through application, protective boots, ultra realistic, 8k`
Save: `assets/images/process/03-application.jpg`

4. `Professional photography of a completed freshly cured epoxy floor with perfect glossy finish, reflective surface, professional result, no people, clean final presentation, ultra realistic, 8k`
Save: `assets/images/process/04-finished.jpg`

- [ ] **Step 8: Generate service-specific detail images (5 images)**

**Model:** `fal-ai/flux-pro/v1.1-ultra`
**Aspect ratio:** `3:2`

Prompts:
1. `Extreme close-up professional photography of decorative vinyl flake epoxy floor finish, multicolor chips in blue gray and white embedded in clear epoxy, macro detail shot, ultra realistic, 8k`
Save: `assets/images/services/flake-closeup.jpg`

2. `Extreme close-up professional photography of metallic epoxy floor with swirling copper and silver patterns, reflective pearlescent finish, dramatic angle lighting showing depth, ultra realistic macro photography, 8k`
Save: `assets/images/services/metallic-closeup.jpg`

3. `Professional photography of a stunning 3D epoxy floor art installation showing an ocean wave design in a modern living room, photorealistic 3D illusion effect, ultra realistic, 8k`
Save: `assets/images/services/3d-floor.jpg`

4. `Professional photography showing self-leveling epoxy being poured and spreading across a concrete floor, smooth flowing material creating perfectly level surface, mid-application shot, ultra realistic, 8k`
Save: `assets/images/services/self-leveling.jpg`

5. `Professional photography of a worker applying clear sealant coating to an existing concrete floor with a roller, protective concrete sealing process, professional equipment, ultra realistic, 8k`
Save: `assets/images/services/concrete-sealing.jpg`

- [ ] **Step 9: Commit all generated images**

```bash
cd C:/Users/Owner/Desktop/resinx-website
git add assets/images/
git commit -m "feat: add AI-generated photorealistic images — hero, gallery, services, process"
```

---

## Phase 3: HTML Pages

### Task 5: Home Page (index.html)

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create the complete home page**

```html
<!DOCTYPE html>
<html lang="es-MX">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ResinX | Pisos Epoxicos Premium en Hermosillo, Sonora</title>
  <meta name="description" content="Pisos epoxicos de alta calidad en Hermosillo. Residencial, comercial e industrial. Materiales importados de EE.UU. Cotizacion sin costo. Garantia de hasta 3 anos.">
  <meta name="keywords" content="pisos epoxicos hermosillo, pisos de resina hermosillo, pisos epoxicos sonora, pisos metalicos epoxicos, pisos industriales hermosillo, recubrimiento epoxicos">
  <link rel="canonical" href="https://resinx.net/">

  <!-- Open Graph -->
  <meta property="og:title" content="ResinX | Pisos Epoxicos Premium en Hermosillo">
  <meta property="og:description" content="Transformamos superficies en pisos de alto rendimiento y diseno. Materiales importados de EE.UU. Cotizacion sin costo.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://resinx.net/">
  <meta property="og:image" content="https://resinx.net/assets/images/hero/hero-main.jpg">
  <meta property="og:locale" content="es_MX">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="ResinX | Pisos Epoxicos Premium en Hermosillo">
  <meta name="twitter:description" content="Pisos epoxicos de alta calidad. Residencial, comercial e industrial. Cotizacion sin costo.">
  <meta name="twitter:image" content="https://resinx.net/assets/images/hero/hero-main.jpg">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <!-- Styles -->
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/animations.css">

  <!-- JSON-LD LocalBusiness -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ResinX",
    "description": "Pisos epoxicos premium en Hermosillo, Sonora. Residencial, comercial e industrial. Materiales importados de EE.UU.",
    "url": "https://resinx.net",
    "telephone": "{{PHONE_NUMBER}}",
    "areaServed": [
      { "@type": "City", "name": "Hermosillo" },
      { "@type": "State", "name": "Sonora" }
    ],
    "serviceType": ["Pisos epoxicos", "Recubrimientos industriales", "Pisos de resina"],
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hermosillo",
      "addressRegion": "Sonora",
      "addressCountry": "MX"
    }
  }
  </script>
</head>
<body>

  <!-- ========== NAVBAR ========== -->
  <nav class="nav nav--transparent" role="navigation" aria-label="Navegacion principal">
    <div class="nav__inner">
      <a href="index.html" class="nav__logo-link" aria-label="ResinX - Inicio">
        <!-- Inline SVG logo for navbar (smaller, animation plays) -->
        <svg class="nav__logo" viewBox="0 0 400 100" height="36" aria-hidden="true">
          <text x="20" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#ffffff">Resin</text>
          <text x="280" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#3b82f6">X</text>
          <g style="transform-origin: 310px 50px; animation: orbit 4s linear infinite;">
            <ellipse cx="310" cy="50" rx="55" ry="20" fill="none" stroke="#ef4444" stroke-width="4" transform="rotate(-25, 310, 50)"/>
          </g>
        </svg>
      </a>

      <button class="nav__toggle" aria-label="Menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>

      <div class="nav__links">
        <a href="index.html" class="nav__link nav__link--active">Inicio</a>
        <a href="servicios.html" class="nav__link">Servicios</a>
        <a href="galeria.html" class="nav__link">Galeria</a>
        <a href="proceso.html" class="nav__link">Proceso</a>
        <a href="cobertura.html" class="nav__link">Cobertura</a>
        <a href="contacto.html" class="nav__link">Contacto</a>
        <a href="contacto.html" class="btn btn--primary nav__cta">Cotizacion Gratis</a>
      </div>
    </div>
  </nav>

  <!-- ========== HERO ========== -->
  <section class="hero section--dark" style="position:relative;min-height:100vh;display:flex;align-items:center;overflow:hidden;">
    <img src="assets/images/hero/hero-main.jpg" alt="Piso epoxicos metalico premium instalado en Hermosillo" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" loading="eager">
    <div class="hero__overlay"></div>
    <div class="container" style="position:relative;z-index:1;text-align:center;padding:var(--space-20) 0;">
      <!-- Large animated logo -->
      <div class="animate-fade-in" style="margin-bottom:var(--space-8);">
        <svg viewBox="0 0 400 100" style="max-width:400px;margin:0 auto;" aria-label="ResinX logo">
          <text x="20" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#ffffff">Resin</text>
          <text x="280" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#3b82f6">X</text>
          <g style="transform-origin: 310px 50px; animation: orbit 4s linear infinite;">
            <ellipse cx="310" cy="50" rx="55" ry="20" fill="none" stroke="#ef4444" stroke-width="4" transform="rotate(-25, 310, 50)"/>
          </g>
        </svg>
      </div>

      <p class="animate-fade-in-up animate-delay-1" style="font-size:var(--font-sm);letter-spacing:3px;text-transform:uppercase;color:var(--color-blue);margin-bottom:var(--space-4);">Pisos Epoxicos Premium</p>
      <h1 class="animate-fade-in-up animate-delay-2" style="color:white;margin-bottom:var(--space-6);">Transformamos superficies<br>en pisos de alto rendimiento</h1>
      <p class="animate-fade-in-up animate-delay-3" style="font-size:var(--font-lg);color:var(--color-gray-300);max-width:600px;margin:0 auto var(--space-8);">Materiales importados de EE.UU. &middot; Garantia de hasta 3 anos &middot; Cotizacion sin costo</p>
      <div class="animate-fade-in-up animate-delay-4" style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap;">
        <a href="contacto.html" class="btn btn--primary btn--large">Solicitar Cotizacion</a>
        <a href="galeria.html" class="btn btn--secondary btn--large" style="border-color:white;color:white;">Ver Proyectos</a>
      </div>
    </div>
  </section>

  <!-- ========== TRUST BAR ========== -->
  <section style="background:var(--color-blue);padding:var(--space-6) 0;">
    <div class="container">
      <div style="display:flex;justify-content:center;flex-wrap:wrap;gap:var(--space-8);text-align:center;">
        <div style="color:white;font-weight:600;font-size:var(--font-sm);">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;margin-right:6px;"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
          Materiales importados de EE.UU.
        </div>
        <div style="color:white;font-weight:600;font-size:var(--font-sm);">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;margin-right:6px;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Garantia de hasta 3 anos
        </div>
        <div style="color:white;font-weight:600;font-size:var(--font-sm);">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;margin-right:6px;"><path d="M12 1v22M5 8h14M5 16h14"/></svg>
          Cotizacion sin costo
        </div>
      </div>
    </div>
  </section>

  <!-- ========== SERVICES OVERVIEW ========== -->
  <section class="section" id="servicios">
    <div class="container">
      <div class="section-header">
        <span class="section-header__label">Nuestros Servicios</span>
        <h2 class="section-header__title">Soluciones para cada espacio</h2>
        <p class="section-header__subtitle">Desde cocheras residenciales hasta naves industriales, aplicamos el sistema epoxicos ideal para tu proyecto.</p>
      </div>

      <div class="grid grid--3">
        <div class="card reveal">
          <img class="card__image" src="assets/images/gallery/residential/garage-flake-01.jpg" alt="Piso epoxicos residencial con acabado flake en cochera moderna" loading="lazy">
          <div class="card__body">
            <h3 class="card__title">Residencial</h3>
            <p class="card__text">Cocheras, interiores y patios. Acabados flake y metalicos que transforman tu espacio con durabilidad y diseno.</p>
            <a href="servicios.html#residencial" class="btn btn--secondary" style="width:100%;">Ver mas</a>
          </div>
        </div>

        <div class="card reveal">
          <img class="card__image" src="assets/images/gallery/commercial/showroom-solid-01.jpg" alt="Piso epoxicos comercial en showroom de autos" loading="lazy">
          <div class="card__body">
            <h3 class="card__title">Comercial</h3>
            <p class="card__text">Restaurantes, showrooms y locales comerciales. Pisos que combinan estetica profesional con resistencia al trafico.</p>
            <a href="servicios.html#comercial" class="btn btn--secondary" style="width:100%;">Ver mas</a>
          </div>
        </div>

        <div class="card reveal">
          <img class="card__image" src="assets/images/gallery/industrial/warehouse-01.jpg" alt="Piso epoxicos industrial en bodega de alta resistencia" loading="lazy">
          <div class="card__body">
            <h3 class="card__title">Industrial</h3>
            <p class="card__text">Bodegas, talleres y plantas de produccion. Sistemas de alta resistencia quimica y mecanica para el uso mas exigente.</p>
            <a href="servicios.html#industrial" class="btn btn--secondary" style="width:100%;">Ver mas</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== FEATURED PORTFOLIO ========== -->
  <section class="section section--gray" id="portafolio">
    <div class="container">
      <div class="section-header">
        <span class="section-header__label">Portafolio</span>
        <h2 class="section-header__title">Nuestro trabajo habla por si mismo</h2>
        <p class="section-header__subtitle">Proyectos completados en Hermosillo y Sonora.</p>
      </div>

      <div class="grid grid--2" style="gap:var(--space-6);">
        <div class="reveal" style="border-radius:var(--radius-lg);overflow:hidden;">
          <img src="assets/images/gallery/commercial/restaurant-metallic-01.jpg" alt="Piso metalico epoxicos en restaurante premium de Hermosillo" style="width:100%;aspect-ratio:16/10;object-fit:cover;" loading="lazy">
        </div>
        <div class="reveal" style="border-radius:var(--radius-lg);overflow:hidden;">
          <img src="assets/images/gallery/residential/interior-metallic-01.jpg" alt="Piso metalico epoxicos en interior residencial moderno" style="width:100%;aspect-ratio:16/10;object-fit:cover;" loading="lazy">
        </div>
        <div class="reveal" style="border-radius:var(--radius-lg);overflow:hidden;">
          <img src="assets/images/gallery/industrial/workshop-01.jpg" alt="Piso epoxicos industrial en taller mecanico profesional" style="width:100%;aspect-ratio:16/10;object-fit:cover;" loading="lazy">
        </div>
        <div class="reveal" style="border-radius:var(--radius-lg);overflow:hidden;">
          <img src="assets/images/gallery/residential/patio-flake-01.jpg" alt="Piso epoxicos flake en patio residencial estilo Sonora" style="width:100%;aspect-ratio:16/10;object-fit:cover;" loading="lazy">
        </div>
      </div>

      <div class="text-center" style="margin-top:var(--space-12);">
        <a href="galeria.html" class="btn btn--primary btn--large">Ver Galeria Completa</a>
      </div>
    </div>
  </section>

  <!-- ========== PROCESS SUMMARY ========== -->
  <section class="section" id="proceso">
    <div class="container">
      <div class="section-header">
        <span class="section-header__label">Nuestro Proceso</span>
        <h2 class="section-header__title">De concreto a obra de arte en 4 pasos</h2>
      </div>

      <div class="grid grid--4">
        <div class="reveal text-center">
          <div style="width:64px;height:64px;background:var(--color-blue);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:var(--font-2xl);font-weight:700;margin:0 auto var(--space-4);">1</div>
          <h4>Inspeccion</h4>
          <p style="font-size:var(--font-sm);margin-top:var(--space-2);">Evaluamos tu superficie y te entregamos una cotizacion sin costo.</p>
        </div>
        <div class="reveal text-center">
          <div style="width:64px;height:64px;background:var(--color-blue);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:var(--font-2xl);font-weight:700;margin:0 auto var(--space-4);">2</div>
          <h4>Preparacion</h4>
          <p style="font-size:var(--font-sm);margin-top:var(--space-2);">Preparamos la superficie con equipo profesional para maxima adherencia.</p>
        </div>
        <div class="reveal text-center">
          <div style="width:64px;height:64px;background:var(--color-blue);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:var(--font-2xl);font-weight:700;margin:0 auto var(--space-4);">3</div>
          <h4>Aplicacion</h4>
          <p style="font-size:var(--font-sm);margin-top:var(--space-2);">Aplicamos el sistema epoxicos elegido con tecnica profesional.</p>
        </div>
        <div class="reveal text-center">
          <div style="width:64px;height:64px;background:var(--color-blue);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:var(--font-2xl);font-weight:700;margin:0 auto var(--space-4);">4</div>
          <h4>Entrega</h4>
          <p style="font-size:var(--font-sm);margin-top:var(--space-2);">Curado completo en 48-72 horas. Listo para usar con garantia incluida.</p>
        </div>
      </div>

      <div class="text-center" style="margin-top:var(--space-12);">
        <a href="proceso.html" class="btn btn--secondary btn--large">Conocer el proceso completo</a>
      </div>
    </div>
  </section>

  <!-- ========== FINAL CTA ========== -->
  <section class="section section--dark" style="text-align:center;">
    <div class="container">
      <div class="reveal">
        <span style="font-size:var(--font-sm);letter-spacing:3px;text-transform:uppercase;color:var(--color-blue);display:block;margin-bottom:var(--space-4);">Cotizacion sin costo</span>
        <h2 style="color:white;margin-bottom:var(--space-6);">Tu proyecto empieza con una llamada</h2>
        <p style="color:var(--color-gray-300);font-size:var(--font-lg);max-width:600px;margin:0 auto var(--space-8);">Evaluamos tu espacio, te asesoramos en el mejor sistema y te entregamos una cotizacion sin compromiso.</p>
        <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap;">
          <a href="contacto.html" class="btn btn--primary btn--large">Solicitar Cotizacion</a>
          <a href="tel:{{PHONE_NUMBER}}" class="btn btn--phone btn--large">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:6px;"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            Llamar ahora
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ========== FOOTER ========== -->
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div>
          <svg viewBox="0 0 400 100" height="32" aria-label="ResinX">
            <text x="20" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#ffffff">Resin</text>
            <text x="280" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#3b82f6">X</text>
          </svg>
          <p class="footer__brand-desc">Pisos epoxicos premium en Hermosillo, Sonora. Materiales importados de EE.UU. con garantia de hasta 3 anos.</p>
        </div>
        <div>
          <h4 class="footer__heading">Servicios</h4>
          <a href="servicios.html#flake" class="footer__link">Pisos Flake</a>
          <a href="servicios.html#metalico" class="footer__link">Pisos Metalicos</a>
          <a href="servicios.html#industrial" class="footer__link">Industrial</a>
          <a href="servicios.html#3d" class="footer__link">Pisos 3D</a>
          <a href="servicios.html" class="footer__link">Todos los servicios</a>
        </div>
        <div>
          <h4 class="footer__heading">Empresa</h4>
          <a href="galeria.html" class="footer__link">Galeria</a>
          <a href="proceso.html" class="footer__link">Proceso</a>
          <a href="cobertura.html" class="footer__link">Cobertura</a>
          <a href="contacto.html" class="footer__link">Contacto</a>
        </div>
        <div>
          <h4 class="footer__heading">Contacto</h4>
          <a href="https://wa.me/{{WHATSAPP_NUMBER}}" class="footer__link" target="_blank" rel="noopener">WhatsApp</a>
          <a href="tel:{{PHONE_NUMBER}}" class="footer__link">Telefono</a>
          <a href="contacto.html" class="footer__link">Formulario</a>
        </div>
      </div>
      <div class="footer__bottom">
        <p>&copy; 2026 ResinX. Todos los derechos reservados. Hermosillo, Sonora, Mexico.</p>
      </div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Open in browser and verify layout**

```bash
cd C:/Users/Owner/Desktop/resinx-website && start index.html
```

Check: nav renders, hero section displays, sections stack properly, mobile responsive (resize browser).

- [ ] **Step 3: Commit**

```bash
cd C:/Users/Owner/Desktop/resinx-website
git add index.html
git commit -m "feat: add home page — hero, trust bar, services, portfolio, process, CTA, footer"
```

---

### Task 6: Services Page (servicios.html)

**Files:**
- Create: `servicios.html`

- [ ] **Step 1: Create the services page**

```html
<!DOCTYPE html>
<html lang="es-MX">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Servicios de Pisos Epoxicos | ResinX Hermosillo</title>
  <meta name="description" content="Servicios de pisos epoxicos en Hermosillo: flake, metalicos, industriales, 3D, autonivelantes, sellado de concreto. Materiales importados, cotizacion gratis.">
  <link rel="canonical" href="https://resinx.net/servicios.html">

  <meta property="og:title" content="Servicios de Pisos Epoxicos | ResinX Hermosillo">
  <meta property="og:description" content="Pisos epoxicos flake, metalicos, industriales y 3D. Materiales importados de EE.UU. Cotizacion sin costo.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://resinx.net/servicios.html">
  <meta property="og:image" content="https://resinx.net/assets/images/services/metallic-closeup.jpg">
  <meta property="og:locale" content="es_MX">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/animations.css">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Pisos Epoxicos",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ResinX",
      "url": "https://resinx.net"
    },
    "areaServed": {
      "@type": "City",
      "name": "Hermosillo"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Pisos Epoxicos",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pisos Epoxicos Decorativos Flake" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pisos Metalicos Epoxicos" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pisos Industriales de Alta Resistencia" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pisos 3D Personalizados" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Recubrimientos Autonivelantes" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sellado y Proteccion de Concreto" } }
      ]
    }
  }
  </script>
</head>
<body>

  <!-- NAVBAR (same as index.html, update active link) -->
  <nav class="nav nav--solid" role="navigation" aria-label="Navegacion principal">
    <div class="nav__inner">
      <a href="index.html" class="nav__logo-link" aria-label="ResinX - Inicio">
        <svg class="nav__logo" viewBox="0 0 400 100" height="36" aria-hidden="true">
          <text x="20" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#ffffff">Resin</text>
          <text x="280" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#3b82f6">X</text>
          <g style="transform-origin: 310px 50px; animation: orbit 4s linear infinite;">
            <ellipse cx="310" cy="50" rx="55" ry="20" fill="none" stroke="#ef4444" stroke-width="4" transform="rotate(-25, 310, 50)"/>
          </g>
        </svg>
      </a>
      <button class="nav__toggle" aria-label="Menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <div class="nav__links">
        <a href="index.html" class="nav__link">Inicio</a>
        <a href="servicios.html" class="nav__link nav__link--active">Servicios</a>
        <a href="galeria.html" class="nav__link">Galeria</a>
        <a href="proceso.html" class="nav__link">Proceso</a>
        <a href="cobertura.html" class="nav__link">Cobertura</a>
        <a href="contacto.html" class="nav__link">Contacto</a>
        <a href="contacto.html" class="btn btn--primary nav__cta">Cotizacion Gratis</a>
      </div>
    </div>
  </nav>

  <!-- PAGE HEADER -->
  <section class="section section--dark" style="padding-top:calc(var(--nav-height) + var(--space-16));">
    <div class="container text-center">
      <span style="font-size:var(--font-sm);letter-spacing:3px;text-transform:uppercase;color:var(--color-blue);">Nuestros Servicios</span>
      <h1 style="color:white;margin-top:var(--space-4);">Pisos epoxicos para cada necesidad</h1>
      <p style="color:var(--color-gray-300);font-size:var(--font-lg);max-width:650px;margin:var(--space-4) auto 0;">Sistemas especializados con materiales importados de EE.UU. para resultados duraderos y profesionales.</p>
    </div>
  </section>

  <!-- SERVICE: FLAKE -->
  <section class="section" id="flake">
    <div class="container">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-12);align-items:center;">
        <div class="reveal">
          <img src="assets/images/services/flake-closeup.jpg" alt="Detalle de piso epoxicos con acabado flake multicolor" style="width:100%;border-radius:var(--radius-lg);" loading="lazy">
        </div>
        <div class="reveal">
          <span class="section-header__label" style="text-align:left;">Decorativo</span>
          <h2 style="margin-bottom:var(--space-4);">Pisos Epoxicos Flake</h2>
          <p style="margin-bottom:var(--space-6);">Los pisos flake combinan chips de vinilo de multiples colores sobre una base epoxica, creando un acabado decorativo, antiderrapante y extremadamente duradero. Ideales para cocheras, patios y espacios comerciales donde se busca estetica y funcionalidad.</p>
          <h4 style="margin-bottom:var(--space-2);">Aplicaciones</h4>
          <ul style="color:var(--color-slate-lighter);margin-bottom:var(--space-6);padding-left:var(--space-6);list-style:disc;">
            <li>Cocheras residenciales</li>
            <li>Patios y terrazas</li>
            <li>Locales comerciales</li>
            <li>Lobbies y recepciones</li>
          </ul>
          <a href="contacto.html" class="btn btn--primary">Cotizar piso flake</a>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICE: METALICO -->
  <section class="section section--gray" id="metalico">
    <div class="container">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-12);align-items:center;">
        <div class="reveal" style="order:2;">
          <img src="assets/images/services/metallic-closeup.jpg" alt="Detalle de piso epoxicos metalico con patron de remolinos cobre y plata" style="width:100%;border-radius:var(--radius-lg);" loading="lazy">
        </div>
        <div class="reveal" style="order:1;">
          <span class="section-header__label" style="text-align:left;">Premium</span>
          <h2 style="margin-bottom:var(--space-4);">Pisos Metalicos Epoxicos</h2>
          <p style="margin-bottom:var(--space-6);">Los pisos metalicos crean efectos tridimensionales unicos con pigmentos metalicos que fluyen dentro de la resina. Cada piso es una pieza unica con patrones irrepetibles de remolinos, ondas y reflejos. El acabado premium por excelencia.</p>
          <h4 style="margin-bottom:var(--space-2);">Aplicaciones</h4>
          <ul style="color:var(--color-slate-lighter);margin-bottom:var(--space-6);padding-left:var(--space-6);list-style:disc;">
            <li>Interiores residenciales de lujo</li>
            <li>Showrooms y galerias</li>
            <li>Restaurantes y bares</li>
            <li>Espacios corporativos premium</li>
          </ul>
          <a href="contacto.html" class="btn btn--primary">Cotizar piso metalico</a>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICE: INDUSTRIAL -->
  <section class="section" id="industrial">
    <div class="container">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-12);align-items:center;">
        <div class="reveal">
          <img src="assets/images/gallery/industrial/warehouse-01.jpg" alt="Piso epoxicos industrial en bodega de alto trafico" style="width:100%;border-radius:var(--radius-lg);" loading="lazy">
        </div>
        <div class="reveal">
          <span class="section-header__label" style="text-align:left;">Alta resistencia</span>
          <h2 style="margin-bottom:var(--space-4);">Pisos Industriales</h2>
          <p style="margin-bottom:var(--space-6);">Sistemas epoxicos y uretanocementicios disenados para soportar trafico pesado, impactos, quimicos y condiciones extremas. Nuestros pisos industriales cumplen con los estandares mas exigentes de durabilidad y seguridad.</p>
          <h4 style="margin-bottom:var(--space-2);">Aplicaciones</h4>
          <ul style="color:var(--color-slate-lighter);margin-bottom:var(--space-6);padding-left:var(--space-6);list-style:disc;">
            <li>Bodegas y centros de distribucion</li>
            <li>Talleres mecanicos</li>
            <li>Plantas de produccion</li>
            <li>Plantas de alimentos (uretanocementicios)</li>
          </ul>
          <a href="contacto.html" class="btn btn--primary">Cotizar piso industrial</a>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICE: 3D -->
  <section class="section section--gray" id="3d">
    <div class="container">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-12);align-items:center;">
        <div class="reveal" style="order:2;">
          <img src="assets/images/services/3d-floor.jpg" alt="Piso epoxicos 3D con diseno personalizado de olas" style="width:100%;border-radius:var(--radius-lg);" loading="lazy">
        </div>
        <div class="reveal" style="order:1;">
          <span class="section-header__label" style="text-align:left;">Personalizado</span>
          <h2 style="margin-bottom:var(--space-4);">Pisos 3D Personalizados</h2>
          <p style="margin-bottom:var(--space-6);">Pisos con imagenes impresas de alta resolucion bajo una capa transparente de resina epoxica, creando un efecto tridimensional impactante. Desde disenos naturales hasta logos corporativos, las posibilidades son ilimitadas.</p>
          <h4 style="margin-bottom:var(--space-2);">Aplicaciones</h4>
          <ul style="color:var(--color-slate-lighter);margin-bottom:var(--space-6);padding-left:var(--space-6);list-style:disc;">
            <li>Espacios comerciales de impacto visual</li>
            <li>Consultorios y clinicas</li>
            <li>Habitaciones tematicas</li>
            <li>Logos corporativos en pisos</li>
          </ul>
          <a href="contacto.html" class="btn btn--primary">Cotizar piso 3D</a>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICE: AUTONIVELANTE -->
  <section class="section" id="autonivelante">
    <div class="container">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-12);align-items:center;">
        <div class="reveal">
          <img src="assets/images/services/self-leveling.jpg" alt="Aplicacion de recubrimiento autonivelante epoxicos" style="width:100%;border-radius:var(--radius-lg);" loading="lazy">
        </div>
        <div class="reveal">
          <span class="section-header__label" style="text-align:left;">Precision</span>
          <h2 style="margin-bottom:var(--space-4);">Recubrimientos Autonivelantes</h2>
          <p style="margin-bottom:var(--space-6);">Sistemas que fluyen y se nivelan solos para crear superficies perfectamente lisas y uniformes. Ideales para corregir irregularidades en el concreto y lograr acabados impecables con espesores controlados.</p>
          <h4 style="margin-bottom:var(--space-2);">Aplicaciones</h4>
          <ul style="color:var(--color-slate-lighter);margin-bottom:var(--space-6);padding-left:var(--space-6);list-style:disc;">
            <li>Superficies con desniveles</li>
            <li>Pisos de concreto irregulares</li>
            <li>Preparacion para acabados decorativos</li>
            <li>Areas comerciales y hospitalarias</li>
          </ul>
          <a href="contacto.html" class="btn btn--primary">Cotizar autonivelante</a>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICE: SELLADO -->
  <section class="section section--gray" id="sellado">
    <div class="container">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-12);align-items:center;">
        <div class="reveal" style="order:2;">
          <img src="assets/images/services/concrete-sealing.jpg" alt="Sellado profesional de piso de concreto" style="width:100%;border-radius:var(--radius-lg);" loading="lazy">
        </div>
        <div class="reveal" style="order:1;">
          <span class="section-header__label" style="text-align:left;">Proteccion</span>
          <h2 style="margin-bottom:var(--space-4);">Sellado y Proteccion de Concreto</h2>
          <p style="margin-bottom:var(--space-6);">Protege tus pisos de concreto existentes contra humedad, manchas, polvo y desgaste. El sellado profesional extiende significativamente la vida util de tu superficie sin necesidad de un recubrimiento completo.</p>
          <h4 style="margin-bottom:var(--space-2);">Aplicaciones</h4>
          <ul style="color:var(--color-slate-lighter);margin-bottom:var(--space-6);padding-left:var(--space-6);list-style:disc;">
            <li>Estacionamientos</li>
            <li>Pisos de concreto existentes</li>
            <li>Areas exteriores</li>
            <li>Bodegas con trafico ligero</li>
          </ul>
          <a href="contacto.html" class="btn btn--primary">Cotizar sellado</a>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICE: REPARACION -->
  <section class="section" id="reparacion">
    <div class="container text-center" style="max-width:700px;">
      <div class="reveal">
        <span class="section-header__label">Restauracion</span>
        <h2 style="margin-bottom:var(--space-4);">Reparacion y Nivelacion de Superficies</h2>
        <p style="margin-bottom:var(--space-6);">Antes de cualquier recubrimiento, evaluamos y reparamos la superficie base. Llenamos grietas, nivelamos desniveles y restauramos concreto danado para asegurar que el sistema epoxicos se adhiera perfectamente y dure anos.</p>
        <a href="contacto.html" class="btn btn--primary btn--large">Solicitar evaluacion gratuita</a>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section section--dark" style="text-align:center;">
    <div class="container reveal">
      <h2 style="color:white;margin-bottom:var(--space-4);">No estas seguro de cual sistema necesitas?</h2>
      <p style="color:var(--color-gray-300);font-size:var(--font-lg);max-width:550px;margin:0 auto var(--space-8);">Nuestro equipo evalua tu espacio y te recomienda la mejor solucion. Sin costo, sin compromiso.</p>
      <a href="contacto.html" class="btn btn--primary btn--large">Agendar evaluacion gratuita</a>
    </div>
  </section>

  <!-- FOOTER (same as index.html) -->
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div>
          <svg viewBox="0 0 400 100" height="32" aria-label="ResinX">
            <text x="20" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#ffffff">Resin</text>
            <text x="280" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#3b82f6">X</text>
          </svg>
          <p class="footer__brand-desc">Pisos epoxicos premium en Hermosillo, Sonora. Materiales importados de EE.UU. con garantia de hasta 3 anos.</p>
        </div>
        <div>
          <h4 class="footer__heading">Servicios</h4>
          <a href="servicios.html#flake" class="footer__link">Pisos Flake</a>
          <a href="servicios.html#metalico" class="footer__link">Pisos Metalicos</a>
          <a href="servicios.html#industrial" class="footer__link">Industrial</a>
          <a href="servicios.html#3d" class="footer__link">Pisos 3D</a>
          <a href="servicios.html" class="footer__link">Todos los servicios</a>
        </div>
        <div>
          <h4 class="footer__heading">Empresa</h4>
          <a href="galeria.html" class="footer__link">Galeria</a>
          <a href="proceso.html" class="footer__link">Proceso</a>
          <a href="cobertura.html" class="footer__link">Cobertura</a>
          <a href="contacto.html" class="footer__link">Contacto</a>
        </div>
        <div>
          <h4 class="footer__heading">Contacto</h4>
          <a href="https://wa.me/{{WHATSAPP_NUMBER}}" class="footer__link" target="_blank" rel="noopener">WhatsApp</a>
          <a href="tel:{{PHONE_NUMBER}}" class="footer__link">Telefono</a>
          <a href="contacto.html" class="footer__link">Formulario</a>
        </div>
      </div>
      <div class="footer__bottom">
        <p>&copy; 2026 ResinX. Todos los derechos reservados. Hermosillo, Sonora, Mexico.</p>
      </div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify responsive layout on services page**

Services page uses alternating image/text layout. On mobile (< 768px) the grid should stack to single column. Verify the `@media` rules in main.css handle this — the 2-column grids use inline `style="display:grid;grid-template-columns:1fr 1fr"` which won't be caught by the media query. Add this to `css/main.css`:

```css
/* Add to end of main.css */
@media (max-width: 768px) {
  [style*="grid-template-columns: 1fr 1fr"],
  [style*="grid-template-columns:1fr 1fr"] {
    display: grid !important;
    grid-template-columns: 1fr !important;
  }

  [style*="order:1"], [style*="order: 1"],
  [style*="order:2"], [style*="order: 2"] {
    order: 0 !important;
  }
}
```

- [ ] **Step 3: Commit**

```bash
cd C:/Users/Owner/Desktop/resinx-website
git add servicios.html css/main.css
git commit -m "feat: add services page — 7 service sections with SEO schema markup"
```

---

### Task 7: Gallery Page (galeria.html)

**Files:**
- Create: `galeria.html`
- Create: `js/gallery.js`

- [ ] **Step 1: Create the gallery page**

```html
<!DOCTYPE html>
<html lang="es-MX">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Galeria de Pisos Epoxicos | ResinX Hermosillo</title>
  <meta name="description" content="Galeria de proyectos de pisos epoxicos en Hermosillo. Residencial, comercial e industrial. Antes y despues de instalaciones con materiales importados.">
  <link rel="canonical" href="https://resinx.net/galeria.html">

  <meta property="og:title" content="Galeria de Pisos Epoxicos | ResinX Hermosillo">
  <meta property="og:description" content="Proyectos completados de pisos epoxicos. Ve el antes y despues de nuestras transformaciones.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://resinx.net/galeria.html">
  <meta property="og:image" content="https://resinx.net/assets/images/gallery/commercial/restaurant-metallic-01.jpg">
  <meta property="og:locale" content="es_MX">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/animations.css">
</head>
<body>

  <!-- NAVBAR -->
  <nav class="nav nav--solid" role="navigation" aria-label="Navegacion principal">
    <div class="nav__inner">
      <a href="index.html" class="nav__logo-link" aria-label="ResinX - Inicio">
        <svg class="nav__logo" viewBox="0 0 400 100" height="36" aria-hidden="true">
          <text x="20" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#ffffff">Resin</text>
          <text x="280" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#3b82f6">X</text>
          <g style="transform-origin: 310px 50px; animation: orbit 4s linear infinite;">
            <ellipse cx="310" cy="50" rx="55" ry="20" fill="none" stroke="#ef4444" stroke-width="4" transform="rotate(-25, 310, 50)"/>
          </g>
        </svg>
      </a>
      <button class="nav__toggle" aria-label="Menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <div class="nav__links">
        <a href="index.html" class="nav__link">Inicio</a>
        <a href="servicios.html" class="nav__link">Servicios</a>
        <a href="galeria.html" class="nav__link nav__link--active">Galeria</a>
        <a href="proceso.html" class="nav__link">Proceso</a>
        <a href="cobertura.html" class="nav__link">Cobertura</a>
        <a href="contacto.html" class="nav__link">Contacto</a>
        <a href="contacto.html" class="btn btn--primary nav__cta">Cotizacion Gratis</a>
      </div>
    </div>
  </nav>

  <!-- PAGE HEADER -->
  <section class="section section--dark" style="padding-top:calc(var(--nav-height) + var(--space-16));">
    <div class="container text-center">
      <span style="font-size:var(--font-sm);letter-spacing:3px;text-transform:uppercase;color:var(--color-blue);">Portafolio</span>
      <h1 style="color:white;margin-top:var(--space-4);">Galeria de Proyectos</h1>
      <p style="color:var(--color-gray-300);font-size:var(--font-lg);max-width:600px;margin:var(--space-4) auto 0;">Cada proyecto es una transformacion. Ve nuestro trabajo en Hermosillo y Sonora.</p>
    </div>
  </section>

  <!-- FILTER + GALLERY -->
  <section class="section">
    <div class="container">
      <!-- Filter tabs -->
      <div style="display:flex;justify-content:center;gap:var(--space-2);margin-bottom:var(--space-12);flex-wrap:wrap;" id="gallery-filters">
        <button class="btn btn--primary gallery-filter" data-filter="all">Todos</button>
        <button class="btn btn--secondary gallery-filter" data-filter="residencial">Residencial</button>
        <button class="btn btn--secondary gallery-filter" data-filter="comercial">Comercial</button>
        <button class="btn btn--secondary gallery-filter" data-filter="industrial">Industrial</button>
      </div>

      <!-- Gallery grid -->
      <div class="grid grid--3" id="gallery-grid">
        <!-- Residential -->
        <div class="gallery-item" data-category="residencial">
          <div class="card">
            <img class="card__image" src="assets/images/gallery/residential/garage-flake-01.jpg" alt="Cochera con piso flake epoxicos gris y azul" loading="lazy" data-lightbox>
            <div class="card__body">
              <h3 class="card__title">Cochera Residencial</h3>
              <p class="card__text">Piso flake en gris y azul. Acabado antiderrapante y resistente a manchas de aceite.</p>
            </div>
          </div>
        </div>
        <div class="gallery-item" data-category="residencial">
          <div class="card">
            <img class="card__image" src="assets/images/gallery/residential/interior-metallic-01.jpg" alt="Interior residencial con piso metalico epoxicos en tonos cobre y plata" loading="lazy" data-lightbox>
            <div class="card__body">
              <h3 class="card__title">Interior Metalico</h3>
              <p class="card__text">Piso metalico con patron unico en cobre y plata. Cada diseno es irrepetible.</p>
            </div>
          </div>
        </div>
        <div class="gallery-item" data-category="residencial">
          <div class="card">
            <img class="card__image" src="assets/images/gallery/residential/patio-flake-01.jpg" alt="Patio residencial con piso flake epoxicos en tonos tierra" loading="lazy" data-lightbox>
            <div class="card__body">
              <h3 class="card__title">Patio Exterior</h3>
              <p class="card__text">Piso flake exterior resistente a UV y condiciones del clima de Sonora.</p>
            </div>
          </div>
        </div>
        <div class="gallery-item" data-category="residencial">
          <div class="card">
            <img class="card__image" src="assets/images/gallery/residential/interior-solid-01.jpg" alt="Cuarto de lavado con piso epoxicos solido gris" loading="lazy" data-lightbox>
            <div class="card__body">
              <h3 class="card__title">Cuarto de Servicio</h3>
              <p class="card__text">Piso solido autonivelante. Facil de limpiar y mantener en areas de alto uso.</p>
            </div>
          </div>
        </div>

        <!-- Commercial -->
        <div class="gallery-item" data-category="comercial">
          <div class="card">
            <img class="card__image" src="assets/images/gallery/commercial/restaurant-metallic-01.jpg" alt="Restaurante con piso metalico epoxicos en tonos cobre y bronce" loading="lazy" data-lightbox>
            <div class="card__body">
              <h3 class="card__title">Restaurante Premium</h3>
              <p class="card__text">Piso metalico en cobre y bronce. Resistente a trafico de comensales y facil de limpiar.</p>
            </div>
          </div>
        </div>
        <div class="gallery-item" data-category="comercial">
          <div class="card">
            <img class="card__image" src="assets/images/gallery/commercial/showroom-solid-01.jpg" alt="Showroom de autos con piso epoxicos alto brillo en gris oscuro" loading="lazy" data-lightbox>
            <div class="card__body">
              <h3 class="card__title">Showroom Automotriz</h3>
              <p class="card__text">Piso solido de alto brillo. Reflejo perfecto que realza el espacio de exhibicion.</p>
            </div>
          </div>
        </div>
        <div class="gallery-item" data-category="comercial">
          <div class="card">
            <img class="card__image" src="assets/images/gallery/commercial/retail-white-01.jpg" alt="Tienda de ropa con piso epoxicos blanco impecable" loading="lazy" data-lightbox>
            <div class="card__body">
              <h3 class="card__title">Local Comercial</h3>
              <p class="card__text">Piso epoxicos blanco impecable. Limpieza visual que complementa cualquier diseno de interiores.</p>
            </div>
          </div>
        </div>
        <div class="gallery-item" data-category="comercial">
          <div class="card">
            <img class="card__image" src="assets/images/gallery/commercial/office-flake-01.jpg" alt="Lobby de oficinas con piso flake epoxicos profesional" loading="lazy" data-lightbox>
            <div class="card__body">
              <h3 class="card__title">Oficinas Corporativas</h3>
              <p class="card__text">Piso flake profesional para ambientes corporativos de alta imagen.</p>
            </div>
          </div>
        </div>

        <!-- Industrial -->
        <div class="gallery-item" data-category="industrial">
          <div class="card">
            <img class="card__image" src="assets/images/gallery/industrial/warehouse-01.jpg" alt="Bodega industrial con piso epoxicos de alta resistencia" loading="lazy" data-lightbox>
            <div class="card__body">
              <h3 class="card__title">Bodega Industrial</h3>
              <p class="card__text">Piso industrial de alta resistencia para trafico pesado y montacargas.</p>
            </div>
          </div>
        </div>
        <div class="gallery-item" data-category="industrial">
          <div class="card">
            <img class="card__image" src="assets/images/gallery/industrial/workshop-01.jpg" alt="Taller mecanico con piso epoxicos resistente a quimicos" loading="lazy" data-lightbox>
            <div class="card__body">
              <h3 class="card__title">Taller Mecanico</h3>
              <p class="card__text">Piso resistente a aceites, solventes y quimicos. Facil de limpiar y mantener.</p>
            </div>
          </div>
        </div>
        <div class="gallery-item" data-category="industrial">
          <div class="card">
            <img class="card__image" src="assets/images/gallery/industrial/food-facility-01.jpg" alt="Planta de alimentos con piso uretanocementicios blanco" loading="lazy" data-lightbox>
            <div class="card__body">
              <h3 class="card__title">Planta de Alimentos</h3>
              <p class="card__text">Sistema uretanocementicios con drenaje. Cumple normas sanitarias para procesamiento de alimentos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- BEFORE/AFTER SECTION -->
  <section class="section section--gray">
    <div class="container">
      <div class="section-header">
        <span class="section-header__label">Transformaciones</span>
        <h2 class="section-header__title">Antes y Despues</h2>
        <p class="section-header__subtitle">Ve la diferencia que hace un sistema epoxicos profesional.</p>
      </div>

      <div class="grid grid--3">
        <div class="reveal">
          <div class="ba-slider" data-before-after>
            <img class="ba-slider__after" src="assets/images/gallery/before-after/garage-after.jpg" alt="Cochera despues: piso flake epoxicos azul y gris" loading="lazy">
            <div class="ba-slider__before">
              <img src="assets/images/gallery/before-after/garage-before.jpg" alt="Cochera antes: concreto danado con manchas" style="width:100%;height:100%;object-fit:cover;" loading="lazy">
            </div>
            <div class="ba-slider__handle"></div>
          </div>
          <p style="text-align:center;margin-top:var(--space-4);font-weight:600;">Cochera Residencial</p>
        </div>

        <div class="reveal">
          <div class="ba-slider" data-before-after>
            <img class="ba-slider__after" src="assets/images/gallery/before-after/commercial-after.jpg" alt="Local comercial despues: piso metalico epoxicos plata" loading="lazy">
            <div class="ba-slider__before">
              <img src="assets/images/gallery/before-after/commercial-before.jpg" alt="Local comercial antes: concreto desgastado con marcas" style="width:100%;height:100%;object-fit:cover;" loading="lazy">
            </div>
            <div class="ba-slider__handle"></div>
          </div>
          <p style="text-align:center;margin-top:var(--space-4);font-weight:600;">Local Comercial</p>
        </div>

        <div class="reveal">
          <div class="ba-slider" data-before-after>
            <img class="ba-slider__after" src="assets/images/gallery/before-after/industrial-after.jpg" alt="Bodega despues: piso industrial epoxicos gris" loading="lazy">
            <div class="ba-slider__before">
              <img src="assets/images/gallery/before-after/industrial-before.jpg" alt="Bodega antes: concreto industrial con desgaste severo" style="width:100%;height:100%;object-fit:cover;" loading="lazy">
            </div>
            <div class="ba-slider__handle"></div>
          </div>
          <p style="text-align:center;margin-top:var(--space-4);font-weight:600;">Bodega Industrial</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section section--dark" style="text-align:center;">
    <div class="container reveal">
      <h2 style="color:white;margin-bottom:var(--space-4);">Quieres resultados como estos?</h2>
      <p style="color:var(--color-gray-300);font-size:var(--font-lg);max-width:550px;margin:0 auto var(--space-8);">Cada proyecto empieza con una evaluacion gratuita de tu espacio.</p>
      <a href="contacto.html" class="btn btn--primary btn--large">Solicitar Cotizacion Gratis</a>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div>
          <svg viewBox="0 0 400 100" height="32" aria-label="ResinX">
            <text x="20" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#ffffff">Resin</text>
            <text x="280" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#3b82f6">X</text>
          </svg>
          <p class="footer__brand-desc">Pisos epoxicos premium en Hermosillo, Sonora. Materiales importados de EE.UU. con garantia de hasta 3 anos.</p>
        </div>
        <div>
          <h4 class="footer__heading">Servicios</h4>
          <a href="servicios.html#flake" class="footer__link">Pisos Flake</a>
          <a href="servicios.html#metalico" class="footer__link">Pisos Metalicos</a>
          <a href="servicios.html#industrial" class="footer__link">Industrial</a>
          <a href="servicios.html#3d" class="footer__link">Pisos 3D</a>
          <a href="servicios.html" class="footer__link">Todos los servicios</a>
        </div>
        <div>
          <h4 class="footer__heading">Empresa</h4>
          <a href="galeria.html" class="footer__link">Galeria</a>
          <a href="proceso.html" class="footer__link">Proceso</a>
          <a href="cobertura.html" class="footer__link">Cobertura</a>
          <a href="contacto.html" class="footer__link">Contacto</a>
        </div>
        <div>
          <h4 class="footer__heading">Contacto</h4>
          <a href="https://wa.me/{{WHATSAPP_NUMBER}}" class="footer__link" target="_blank" rel="noopener">WhatsApp</a>
          <a href="tel:{{PHONE_NUMBER}}" class="footer__link">Telefono</a>
          <a href="contacto.html" class="footer__link">Formulario</a>
        </div>
      </div>
      <div class="footer__bottom">
        <p>&copy; 2026 ResinX. Todos los derechos reservados. Hermosillo, Sonora, Mexico.</p>
      </div>
    </div>
  </footer>

  <script src="js/main.js"></script>
  <script src="js/gallery.js"></script>
</body>
</html>
```

- [ ] **Step 2: Create gallery JavaScript (filtering, lightbox, before/after slider)**

```javascript
/* js/gallery.js */

(function() {
  'use strict';

  // ========== GALLERY FILTER ==========
  const filters = document.querySelectorAll('.gallery-filter');
  const items = document.querySelectorAll('.gallery-item');

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active button
      filters.forEach(b => {
        b.classList.remove('btn--primary');
        b.classList.add('btn--secondary');
      });
      btn.classList.remove('btn--secondary');
      btn.classList.add('btn--primary');

      // Filter items
      items.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = '';
          item.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // ========== LIGHTBOX ==========
  const lightboxImages = document.querySelectorAll('[data-lightbox]');
  if (lightboxImages.length > 0) {
    // Create lightbox element
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:9999;display:none;align-items:center;justify-content:center;cursor:pointer;';
    lightbox.innerHTML = '<img style="max-width:90%;max-height:90%;object-fit:contain;border-radius:8px;" alt="">';
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');

    lightboxImages.forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      });
    });

    lightbox.addEventListener('click', () => {
      lightbox.style.display = 'none';
      document.body.style.overflow = '';
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.style.display === 'flex') {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }

  // ========== BEFORE/AFTER SLIDER ==========
  const sliders = document.querySelectorAll('[data-before-after]');
  sliders.forEach(slider => {
    const handle = slider.querySelector('.ba-slider__handle');
    const before = slider.querySelector('.ba-slider__before');
    if (!handle || !before) return;

    let isDragging = false;

    const updatePosition = (x) => {
      const rect = slider.getBoundingClientRect();
      let pos = (x - rect.left) / rect.width;
      pos = Math.max(0.05, Math.min(0.95, pos));
      before.style.width = (pos * 100) + '%';
      handle.style.left = (pos * 100) + '%';
    };

    handle.addEventListener('mousedown', () => { isDragging = true; });
    handle.addEventListener('touchstart', () => { isDragging = true; }, { passive: true });

    window.addEventListener('mousemove', (e) => {
      if (isDragging) {
        e.preventDefault();
        updatePosition(e.clientX);
      }
    });

    window.addEventListener('touchmove', (e) => {
      if (isDragging) {
        updatePosition(e.touches[0].clientX);
      }
    }, { passive: true });

    window.addEventListener('mouseup', () => { isDragging = false; });
    window.addEventListener('touchend', () => { isDragging = false; });
  });

})();
```

- [ ] **Step 3: Commit**

```bash
cd C:/Users/Owner/Desktop/resinx-website
git add galeria.html js/gallery.js
git commit -m "feat: add gallery page — filterable grid, lightbox, before/after slider"
```

---

### Task 8: Process Page (proceso.html)

**Files:**
- Create: `proceso.html`

- [ ] **Step 1: Create the process page**

```html
<!DOCTYPE html>
<html lang="es-MX">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Proceso de Instalacion de Pisos Epoxicos | ResinX Hermosillo</title>
  <meta name="description" content="Conoce nuestro proceso profesional de instalacion de pisos epoxicos en Hermosillo. Inspeccion, preparacion, aplicacion y entrega. Resultados en 1-4 dias.">
  <link rel="canonical" href="https://resinx.net/proceso.html">

  <meta property="og:title" content="Proceso de Instalacion | ResinX Hermosillo">
  <meta property="og:description" content="Proceso profesional de instalacion de pisos epoxicos. De inspeccion a entrega en 1-4 dias.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://resinx.net/proceso.html">
  <meta property="og:image" content="https://resinx.net/assets/images/process/03-application.jpg">
  <meta property="og:locale" content="es_MX">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/animations.css">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Proceso de instalacion de pisos epoxicos",
    "description": "Proceso profesional de instalacion de pisos epoxicos por ResinX en Hermosillo, Sonora.",
    "totalTime": "P4D",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Inspeccion y cotizacion", "text": "Evaluamos la superficie, medimos el area y entregamos una cotizacion sin costo." },
      { "@type": "HowToStep", "position": 2, "name": "Preparacion de superficie", "text": "Limpieza, reparacion de grietas y lijado con equipo profesional para maxima adherencia." },
      { "@type": "HowToStep", "position": 3, "name": "Aplicacion del sistema", "text": "Aplicacion del sistema epoxicos elegido con tecnica profesional y materiales importados." },
      { "@type": "HowToStep", "position": 4, "name": "Curado y entrega", "text": "Curado de 48-72 horas. Entrega final con revision de calidad y garantia." }
    ]
  }
  </script>
</head>
<body>

  <!-- NAVBAR -->
  <nav class="nav nav--solid" role="navigation" aria-label="Navegacion principal">
    <div class="nav__inner">
      <a href="index.html" class="nav__logo-link" aria-label="ResinX - Inicio">
        <svg class="nav__logo" viewBox="0 0 400 100" height="36" aria-hidden="true">
          <text x="20" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#ffffff">Resin</text>
          <text x="280" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#3b82f6">X</text>
          <g style="transform-origin: 310px 50px; animation: orbit 4s linear infinite;">
            <ellipse cx="310" cy="50" rx="55" ry="20" fill="none" stroke="#ef4444" stroke-width="4" transform="rotate(-25, 310, 50)"/>
          </g>
        </svg>
      </a>
      <button class="nav__toggle" aria-label="Menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <div class="nav__links">
        <a href="index.html" class="nav__link">Inicio</a>
        <a href="servicios.html" class="nav__link">Servicios</a>
        <a href="galeria.html" class="nav__link">Galeria</a>
        <a href="proceso.html" class="nav__link nav__link--active">Proceso</a>
        <a href="cobertura.html" class="nav__link">Cobertura</a>
        <a href="contacto.html" class="nav__link">Contacto</a>
        <a href="contacto.html" class="btn btn--primary nav__cta">Cotizacion Gratis</a>
      </div>
    </div>
  </nav>

  <!-- PAGE HEADER -->
  <section class="section section--dark" style="padding-top:calc(var(--nav-height) + var(--space-16));">
    <div class="container text-center">
      <span style="font-size:var(--font-sm);letter-spacing:3px;text-transform:uppercase;color:var(--color-blue);">Nuestro Proceso</span>
      <h1 style="color:white;margin-top:var(--space-4);">De concreto a piso premium en 4 pasos</h1>
      <p style="color:var(--color-gray-300);font-size:var(--font-lg);max-width:600px;margin:var(--space-4) auto 0;">Un proceso profesional y transparente. Sabras exactamente que esperar en cada etapa.</p>
    </div>
  </section>

  <!-- STEP 1 -->
  <section class="section">
    <div class="container">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-12);align-items:center;">
        <div class="reveal">
          <img src="assets/images/process/01-prep.jpg" alt="Inspeccion profesional de superficie de concreto para piso epoxicos" style="width:100%;border-radius:var(--radius-lg);" loading="lazy">
        </div>
        <div class="reveal">
          <div style="display:flex;align-items:center;gap:var(--space-4);margin-bottom:var(--space-4);">
            <div style="width:48px;height:48px;background:var(--color-blue);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:var(--font-xl);font-weight:700;flex-shrink:0;">1</div>
            <span style="font-size:var(--font-sm);text-transform:uppercase;letter-spacing:2px;color:var(--color-blue);font-weight:600;">Evaluacion inicial</span>
          </div>
          <h2 style="margin-bottom:var(--space-4);">Inspeccion y Cotizacion</h2>
          <p style="margin-bottom:var(--space-4);">Visitamos tu espacio para evaluar las condiciones de la superficie, medir el area y entender tus necesidades. Con esta informacion, te entregamos una cotizacion detallada sin costo ni compromiso.</p>
          <ul style="color:var(--color-slate-lighter);padding-left:var(--space-6);list-style:disc;">
            <li>Evaluacion de humedad y condicion del concreto</li>
            <li>Medicion exacta del area</li>
            <li>Recomendacion del sistema ideal</li>
            <li>Cotizacion detallada en 24-48 horas</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- STEP 2 -->
  <section class="section section--gray">
    <div class="container">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-12);align-items:center;">
        <div class="reveal" style="order:2;">
          <img src="assets/images/process/02-mixing.jpg" alt="Preparacion de materiales epoxicos importados" style="width:100%;border-radius:var(--radius-lg);" loading="lazy">
        </div>
        <div class="reveal" style="order:1;">
          <div style="display:flex;align-items:center;gap:var(--space-4);margin-bottom:var(--space-4);">
            <div style="width:48px;height:48px;background:var(--color-blue);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:var(--font-xl);font-weight:700;flex-shrink:0;">2</div>
            <span style="font-size:var(--font-sm);text-transform:uppercase;letter-spacing:2px;color:var(--color-blue);font-weight:600;">Dia de trabajo</span>
          </div>
          <h2 style="margin-bottom:var(--space-4);">Preparacion de Superficie</h2>
          <p style="margin-bottom:var(--space-4);">La preparacion es el paso mas critico. Utilizamos equipo profesional de lijado diamantado para crear el perfil de adherencia optimo. Reparamos grietas, llenamos huecos y aseguramos una base perfecta.</p>
          <ul style="color:var(--color-slate-lighter);padding-left:var(--space-6);list-style:disc;">
            <li>Lijado diamantado profesional</li>
            <li>Reparacion de grietas y defectos</li>
            <li>Limpieza profunda de la superficie</li>
            <li>Verificacion de humedad residual</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- STEP 3 -->
  <section class="section">
    <div class="container">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-12);align-items:center;">
        <div class="reveal">
          <img src="assets/images/process/03-application.jpg" alt="Aplicacion profesional de recubrimiento epoxicos" style="width:100%;border-radius:var(--radius-lg);" loading="lazy">
        </div>
        <div class="reveal">
          <div style="display:flex;align-items:center;gap:var(--space-4);margin-bottom:var(--space-4);">
            <div style="width:48px;height:48px;background:var(--color-blue);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:var(--font-xl);font-weight:700;flex-shrink:0;">3</div>
            <span style="font-size:var(--font-sm);text-transform:uppercase;letter-spacing:2px;color:var(--color-blue);font-weight:600;">Instalacion</span>
          </div>
          <h2 style="margin-bottom:var(--space-4);">Aplicacion del Sistema</h2>
          <p style="margin-bottom:var(--space-4);">Aplicamos el sistema epoxicos elegido con tecnica profesional. Cada capa se aplica con precision para garantizar el espesor correcto, la adherencia optima y el acabado perfecto. Usamos materiales importados de EE.UU.</p>
          <ul style="color:var(--color-slate-lighter);padding-left:var(--space-6);list-style:disc;">
            <li>Aplicacion de primer epoxicos</li>
            <li>Capa base con sistema elegido</li>
            <li>Chips/pigmentos metalicos (segun sistema)</li>
            <li>Capa de sellado final con poliuretano</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- STEP 4 -->
  <section class="section section--gray">
    <div class="container">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-12);align-items:center;">
        <div class="reveal" style="order:2;">
          <img src="assets/images/process/04-finished.jpg" alt="Piso epoxicos terminado con acabado perfecto y brillo profesional" style="width:100%;border-radius:var(--radius-lg);" loading="lazy">
        </div>
        <div class="reveal" style="order:1;">
          <div style="display:flex;align-items:center;gap:var(--space-4);margin-bottom:var(--space-4);">
            <div style="width:48px;height:48px;background:var(--color-blue);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:var(--font-xl);font-weight:700;flex-shrink:0;">4</div>
            <span style="font-size:var(--font-sm);text-transform:uppercase;letter-spacing:2px;color:var(--color-blue);font-weight:600;">Resultado final</span>
          </div>
          <h2 style="margin-bottom:var(--space-4);">Curado y Entrega</h2>
          <p style="margin-bottom:var(--space-4);">Despues de la aplicacion, el piso necesita un periodo de curado. En 24 horas puedes caminar con cuidado. En 48-72 horas esta listo para uso completo. Te entregamos tu espacio transformado con garantia incluida.</p>
          <ul style="color:var(--color-slate-lighter);padding-left:var(--space-6);list-style:disc;">
            <li>24 horas: trafico peatonal ligero</li>
            <li>48-72 horas: uso completo</li>
            <li>Garantia de 1 a 3 anos incluida</li>
            <li>Guia de mantenimiento y cuidado</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- TIMELINE SUMMARY -->
  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="section-header__label">Tiempos estimados</span>
        <h2 class="section-header__title">Cuanto tiempo toma?</h2>
      </div>

      <div class="grid grid--3 text-center">
        <div class="card reveal" style="padding:var(--space-8);">
          <h3 style="color:var(--color-blue);font-size:var(--font-4xl);">1-2</h3>
          <p style="font-weight:600;margin-bottom:var(--space-2);">dias</p>
          <p class="card__text">Proyectos de 50-100 m2</p>
        </div>
        <div class="card reveal" style="padding:var(--space-8);">
          <h3 style="color:var(--color-blue);font-size:var(--font-4xl);">2-4</h3>
          <p style="font-weight:600;margin-bottom:var(--space-2);">dias</p>
          <p class="card__text">Proyectos de 100-300 m2</p>
        </div>
        <div class="card reveal" style="padding:var(--space-8);">
          <h3 style="color:var(--color-blue);font-size:var(--font-4xl);">48-72</h3>
          <p style="font-weight:600;margin-bottom:var(--space-2);">horas de curado</p>
          <p class="card__text">Para uso completo del piso</p>
        </div>
      </div>
    </div>
  </section>

  <!-- REQUIREMENTS -->
  <section class="section section--gray">
    <div class="container text-center" style="max-width:700px;">
      <div class="reveal">
        <span class="section-header__label">Antes de empezar</span>
        <h2 style="margin-bottom:var(--space-6);">Que necesitamos de ti</h2>
        <div style="text-align:left;">
          <ul style="color:var(--color-slate-lighter);padding-left:var(--space-6);list-style:disc;display:flex;flex-direction:column;gap:var(--space-3);">
            <li>Area libre de muebles y objetos</li>
            <li>Superficie seca (sin humedad activa)</li>
            <li>Acceso a electricidad (110V o 220V)</li>
            <li>Ventilacion adecuada en el area de trabajo</li>
            <li>No transitar sobre la superficie durante el curado</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section section--dark" style="text-align:center;">
    <div class="container reveal">
      <h2 style="color:white;margin-bottom:var(--space-4);">Listo para transformar tu espacio?</h2>
      <p style="color:var(--color-gray-300);font-size:var(--font-lg);max-width:550px;margin:0 auto var(--space-8);">El primer paso es una visita de evaluacion sin costo. Contactanos hoy.</p>
      <a href="contacto.html" class="btn btn--primary btn--large">Agendar Evaluacion Gratuita</a>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div>
          <svg viewBox="0 0 400 100" height="32" aria-label="ResinX"><text x="20" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#ffffff">Resin</text><text x="280" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#3b82f6">X</text></svg>
          <p class="footer__brand-desc">Pisos epoxicos premium en Hermosillo, Sonora. Materiales importados de EE.UU. con garantia de hasta 3 anos.</p>
        </div>
        <div><h4 class="footer__heading">Servicios</h4><a href="servicios.html#flake" class="footer__link">Pisos Flake</a><a href="servicios.html#metalico" class="footer__link">Pisos Metalicos</a><a href="servicios.html#industrial" class="footer__link">Industrial</a><a href="servicios.html#3d" class="footer__link">Pisos 3D</a><a href="servicios.html" class="footer__link">Todos los servicios</a></div>
        <div><h4 class="footer__heading">Empresa</h4><a href="galeria.html" class="footer__link">Galeria</a><a href="proceso.html" class="footer__link">Proceso</a><a href="cobertura.html" class="footer__link">Cobertura</a><a href="contacto.html" class="footer__link">Contacto</a></div>
        <div><h4 class="footer__heading">Contacto</h4><a href="https://wa.me/{{WHATSAPP_NUMBER}}" class="footer__link" target="_blank" rel="noopener">WhatsApp</a><a href="tel:{{PHONE_NUMBER}}" class="footer__link">Telefono</a><a href="contacto.html" class="footer__link">Formulario</a></div>
      </div>
      <div class="footer__bottom"><p>&copy; 2026 ResinX. Todos los derechos reservados. Hermosillo, Sonora, Mexico.</p></div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
cd C:/Users/Owner/Desktop/resinx-website
git add proceso.html
git commit -m "feat: add process page — 4-step timeline with HowTo schema markup"
```

---

### Task 9: Coverage Page (cobertura.html)

**Files:**
- Create: `cobertura.html`

- [ ] **Step 1: Create the coverage page**

```html
<!DOCTYPE html>
<html lang="es-MX">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cobertura de Pisos Epoxicos en Hermosillo y Sonora | ResinX</title>
  <meta name="description" content="ResinX instala pisos epoxicos en Hermosillo, todo Sonora, otros estados de Mexico y Arizona, EE.UU. Cobertura amplia con materiales importados.">
  <link rel="canonical" href="https://resinx.net/cobertura.html">

  <meta property="og:title" content="Cobertura | ResinX Pisos Epoxicos Hermosillo y Sonora">
  <meta property="og:description" content="Instalamos pisos epoxicos en Hermosillo, Sonora, otros estados y Arizona. Cotizacion sin costo.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://resinx.net/cobertura.html">
  <meta property="og:locale" content="es_MX">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/animations.css">
</head>
<body>

  <!-- NAVBAR -->
  <nav class="nav nav--solid" role="navigation" aria-label="Navegacion principal">
    <div class="nav__inner">
      <a href="index.html" class="nav__logo-link" aria-label="ResinX - Inicio">
        <svg class="nav__logo" viewBox="0 0 400 100" height="36" aria-hidden="true">
          <text x="20" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#ffffff">Resin</text>
          <text x="280" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#3b82f6">X</text>
          <g style="transform-origin: 310px 50px; animation: orbit 4s linear infinite;">
            <ellipse cx="310" cy="50" rx="55" ry="20" fill="none" stroke="#ef4444" stroke-width="4" transform="rotate(-25, 310, 50)"/>
          </g>
        </svg>
      </a>
      <button class="nav__toggle" aria-label="Menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <div class="nav__links">
        <a href="index.html" class="nav__link">Inicio</a>
        <a href="servicios.html" class="nav__link">Servicios</a>
        <a href="galeria.html" class="nav__link">Galeria</a>
        <a href="proceso.html" class="nav__link">Proceso</a>
        <a href="cobertura.html" class="nav__link nav__link--active">Cobertura</a>
        <a href="contacto.html" class="nav__link">Contacto</a>
        <a href="contacto.html" class="btn btn--primary nav__cta">Cotizacion Gratis</a>
      </div>
    </div>
  </nav>

  <!-- PAGE HEADER -->
  <section class="section section--dark" style="padding-top:calc(var(--nav-height) + var(--space-16));">
    <div class="container text-center">
      <span style="font-size:var(--font-sm);letter-spacing:3px;text-transform:uppercase;color:var(--color-blue);">Cobertura</span>
      <h1 style="color:white;margin-top:var(--space-4);">Donde trabajamos</h1>
      <p style="color:var(--color-gray-300);font-size:var(--font-lg);max-width:600px;margin:var(--space-4) auto 0;">Operamos desde Hermosillo con cobertura en todo Sonora y mas alla.</p>
    </div>
  </section>

  <!-- COVERAGE AREAS -->
  <section class="section">
    <div class="container">
      <div class="grid grid--2" style="gap:var(--space-12);">

        <!-- Primary: Hermosillo -->
        <div class="card reveal" style="padding:var(--space-8);border-left:4px solid var(--color-blue);">
          <div style="display:flex;align-items:center;gap:var(--space-3);margin-bottom:var(--space-4);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span style="font-size:var(--font-sm);text-transform:uppercase;letter-spacing:2px;color:var(--color-blue);font-weight:600;">Base de operaciones</span>
          </div>
          <h2 style="margin-bottom:var(--space-4);">Hermosillo, Sonora</h2>
          <p style="margin-bottom:var(--space-4);">Nuestra base principal. Atendemos toda la ciudad y zonas conurbadas sin costo adicional de traslado. Respuesta rapida y disponibilidad inmediata para evaluaciones.</p>
          <ul style="color:var(--color-slate-lighter);padding-left:var(--space-6);list-style:disc;">
            <li>Sin costo de traslado</li>
            <li>Evaluacion en 24-48 horas</li>
            <li>Cobertura completa de la ciudad</li>
          </ul>
        </div>

        <!-- Sonora -->
        <div class="card reveal" style="padding:var(--space-8);border-left:4px solid var(--color-blue-light);">
          <div style="display:flex;align-items:center;gap:var(--space-3);margin-bottom:var(--space-4);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue-light)" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span style="font-size:var(--font-sm);text-transform:uppercase;letter-spacing:2px;color:var(--color-blue-light);font-weight:600;">Cobertura regional</span>
          </div>
          <h2 style="margin-bottom:var(--space-4);">Todo Sonora</h2>
          <p style="margin-bottom:var(--space-4);">Atendemos proyectos en todo el estado de Sonora. Ciudad Obregon, Guaymas, San Carlos, Nogales, Caborca y mas. Costo de traslado segun distancia.</p>
          <ul style="color:var(--color-slate-lighter);padding-left:var(--space-6);list-style:disc;">
            <li>Cobertura en todo el estado</li>
            <li>Costo de traslado segun distancia</li>
            <li>Proyecto minimo: 30 m2</li>
          </ul>
        </div>

        <!-- Other states -->
        <div class="card reveal" style="padding:var(--space-8);border-left:4px solid var(--color-gray-300);">
          <div style="display:flex;align-items:center;gap:var(--space-3);margin-bottom:var(--space-4);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gray-300)" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span style="font-size:var(--font-sm);text-transform:uppercase;letter-spacing:2px;color:var(--color-slate-lighter);font-weight:600;">Bajo solicitud</span>
          </div>
          <h2 style="margin-bottom:var(--space-4);">Otros Estados</h2>
          <p style="margin-bottom:var(--space-4);">Evaluamos proyectos en otros estados de Mexico bajo solicitud. Ideal para proyectos comerciales e industriales de mayor escala.</p>
          <ul style="color:var(--color-slate-lighter);padding-left:var(--space-6);list-style:disc;">
            <li>Evaluacion caso por caso</li>
            <li>Costo de traslado y hospedaje incluido en cotizacion</li>
            <li>Proyecto minimo recomendado: 50 m2</li>
          </ul>
        </div>

        <!-- Arizona -->
        <div class="card reveal" style="padding:var(--space-8);border-left:4px solid var(--color-red);">
          <div style="display:flex;align-items:center;gap:var(--space-3);margin-bottom:var(--space-4);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-red)" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span style="font-size:var(--font-sm);text-transform:uppercase;letter-spacing:2px;color:var(--color-red);font-weight:600;">Internacional</span>
          </div>
          <h2 style="margin-bottom:var(--space-4);">Arizona, EE.UU.</h2>
          <p style="margin-bottom:var(--space-4);">Atendemos proyectos en Tucson, Phoenix y ciudades fronterizas de Arizona. Experiencia binacional con materiales y tecnicas de nivel estadounidense.</p>
          <ul style="color:var(--color-slate-lighter);padding-left:var(--space-6);list-style:disc;">
            <li>Tucson, Phoenix y alrededores</li>
            <li>Cotizacion en dolares</li>
            <li>Comunicacion en ingles y espanol</li>
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- SEO CONTENT BLOCK -->
  <section class="section section--gray">
    <div class="container" style="max-width:800px;">
      <div class="reveal">
        <h2 style="margin-bottom:var(--space-6);text-align:center;">Pisos epoxicos en Hermosillo: por que elegirnos</h2>
        <p style="margin-bottom:var(--space-4);">En ResinX somos especialistas en la instalacion de pisos epoxicos en Hermosillo y todo Sonora. Nuestro equipo profesional utiliza materiales importados de Estados Unidos, compatibles con las marcas mas reconocidas de la industria como Sherwin Williams, Sika y MAPEI.</p>
        <p style="margin-bottom:var(--space-4);">Ofrecemos pisos epoxicos residenciales para cocheras, interiores y patios; pisos epoxicos comerciales para restaurantes, showrooms y oficinas; y pisos industriales de alta resistencia para bodegas, talleres y plantas de produccion.</p>
        <p style="margin-bottom:var(--space-4);">Cada proyecto incluye una evaluacion gratuita, cotizacion sin compromiso, y garantia de 1 a 3 anos que cubre desprendimiento por aplicacion. Nuestros acabados disponibles incluyen flake decorativo, metalico, autonivelante, antiderrapante y pisos 3D personalizados.</p>
        <p>Si buscas pisos de resina en Hermosillo, recubrimientos epoxicos en Sonora, o pisos industriales de alta resistencia, contactanos para una cotizacion sin costo.</p>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section section--dark" style="text-align:center;">
    <div class="container reveal">
      <h2 style="color:white;margin-bottom:var(--space-4);">Estas en nuestra zona de cobertura?</h2>
      <p style="color:var(--color-gray-300);font-size:var(--font-lg);max-width:550px;margin:0 auto var(--space-8);">Contactanos y te confirmamos disponibilidad para tu ubicacion.</p>
      <a href="contacto.html" class="btn btn--primary btn--large">Verificar Disponibilidad</a>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div><svg viewBox="0 0 400 100" height="32" aria-label="ResinX"><text x="20" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#ffffff">Resin</text><text x="280" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#3b82f6">X</text></svg><p class="footer__brand-desc">Pisos epoxicos premium en Hermosillo, Sonora. Materiales importados de EE.UU. con garantia de hasta 3 anos.</p></div>
        <div><h4 class="footer__heading">Servicios</h4><a href="servicios.html#flake" class="footer__link">Pisos Flake</a><a href="servicios.html#metalico" class="footer__link">Pisos Metalicos</a><a href="servicios.html#industrial" class="footer__link">Industrial</a><a href="servicios.html#3d" class="footer__link">Pisos 3D</a><a href="servicios.html" class="footer__link">Todos los servicios</a></div>
        <div><h4 class="footer__heading">Empresa</h4><a href="galeria.html" class="footer__link">Galeria</a><a href="proceso.html" class="footer__link">Proceso</a><a href="cobertura.html" class="footer__link">Cobertura</a><a href="contacto.html" class="footer__link">Contacto</a></div>
        <div><h4 class="footer__heading">Contacto</h4><a href="https://wa.me/{{WHATSAPP_NUMBER}}" class="footer__link" target="_blank" rel="noopener">WhatsApp</a><a href="tel:{{PHONE_NUMBER}}" class="footer__link">Telefono</a><a href="contacto.html" class="footer__link">Formulario</a></div>
      </div>
      <div class="footer__bottom"><p>&copy; 2026 ResinX. Todos los derechos reservados. Hermosillo, Sonora, Mexico.</p></div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
cd C:/Users/Owner/Desktop/resinx-website
git add cobertura.html
git commit -m "feat: add coverage page — Hermosillo, Sonora, other states, Arizona with SEO content"
```

---

### Task 10: Contact Page (contacto.html)

**Files:**
- Create: `contacto.html`

- [ ] **Step 1: Create the contact page**

```html
<!DOCTYPE html>
<html lang="es-MX">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contacto y Cotizacion Gratis | ResinX Pisos Epoxicos Hermosillo</title>
  <meta name="description" content="Solicita tu cotizacion gratis de pisos epoxicos en Hermosillo. Contactanos por WhatsApp, telefono o formulario. Evaluacion sin costo ni compromiso.">
  <link rel="canonical" href="https://resinx.net/contacto.html">

  <meta property="og:title" content="Contacto | ResinX Pisos Epoxicos Hermosillo">
  <meta property="og:description" content="Solicita tu cotizacion gratis. WhatsApp, telefono o formulario. Sin compromiso.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://resinx.net/contacto.html">
  <meta property="og:locale" content="es_MX">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/animations.css">

  <style>
    .form-group {
      margin-bottom: var(--space-6);
    }
    .form-group label {
      display: block;
      font-weight: 600;
      font-size: var(--font-sm);
      margin-bottom: var(--space-2);
      color: var(--color-slate);
    }
    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: var(--space-3) var(--space-4);
      border: 1px solid var(--color-gray-200);
      border-radius: var(--radius-md);
      font-size: var(--font-base);
      background: white;
      transition: border-color var(--transition-fast);
    }
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--color-blue);
      box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
    }
    .form-group textarea {
      resize: vertical;
      min-height: 120px;
    }
    .contact-card {
      padding: var(--space-6);
      background: white;
      border-radius: var(--radius-lg);
      border: 1px solid var(--color-gray-200);
      display: flex;
      align-items: flex-start;
      gap: var(--space-4);
      transition: all var(--transition-base);
    }
    .contact-card:hover {
      box-shadow: var(--shadow-md);
      transform: translateY(-2px);
    }
    .contact-card__icon {
      width: 48px;
      height: 48px;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
  </style>
</head>
<body>

  <!-- NAVBAR -->
  <nav class="nav nav--solid" role="navigation" aria-label="Navegacion principal">
    <div class="nav__inner">
      <a href="index.html" class="nav__logo-link" aria-label="ResinX - Inicio">
        <svg class="nav__logo" viewBox="0 0 400 100" height="36" aria-hidden="true">
          <text x="20" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#ffffff">Resin</text>
          <text x="280" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#3b82f6">X</text>
          <g style="transform-origin: 310px 50px; animation: orbit 4s linear infinite;">
            <ellipse cx="310" cy="50" rx="55" ry="20" fill="none" stroke="#ef4444" stroke-width="4" transform="rotate(-25, 310, 50)"/>
          </g>
        </svg>
      </a>
      <button class="nav__toggle" aria-label="Menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <div class="nav__links">
        <a href="index.html" class="nav__link">Inicio</a>
        <a href="servicios.html" class="nav__link">Servicios</a>
        <a href="galeria.html" class="nav__link">Galeria</a>
        <a href="proceso.html" class="nav__link">Proceso</a>
        <a href="cobertura.html" class="nav__link">Cobertura</a>
        <a href="contacto.html" class="nav__link nav__link--active">Contacto</a>
        <a href="contacto.html" class="btn btn--primary nav__cta">Cotizacion Gratis</a>
      </div>
    </div>
  </nav>

  <!-- PAGE HEADER -->
  <section class="section section--dark" style="padding-top:calc(var(--nav-height) + var(--space-16));">
    <div class="container text-center">
      <span style="font-size:var(--font-sm);letter-spacing:3px;text-transform:uppercase;color:var(--color-blue);">Contacto</span>
      <h1 style="color:white;margin-top:var(--space-4);">Solicita tu cotizacion gratis</h1>
      <p style="color:var(--color-gray-300);font-size:var(--font-lg);max-width:600px;margin:var(--space-4) auto 0;">Evaluamos tu espacio sin costo ni compromiso. Respondemos en menos de 24 horas.</p>
    </div>
  </section>

  <!-- CONTACT OPTIONS -->
  <section class="section">
    <div class="container">
      <div class="grid grid--3" style="margin-bottom:var(--space-16);">
        <a href="https://wa.me/{{WHATSAPP_NUMBER}}" target="_blank" rel="noopener" class="contact-card reveal">
          <div class="contact-card__icon" style="background:#dcfce7;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </div>
          <div>
            <h3 style="font-size:var(--font-lg);margin-bottom:var(--space-1);">WhatsApp</h3>
            <p style="font-size:var(--font-sm);color:var(--color-slate-lighter);">Respuesta rapida. Envianos fotos de tu espacio para una cotizacion mas precisa.</p>
          </div>
        </a>

        <a href="tel:{{PHONE_NUMBER}}" class="contact-card reveal">
          <div class="contact-card__icon" style="background:var(--color-gray-100);">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-slate)" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          </div>
          <div>
            <h3 style="font-size:var(--font-lg);margin-bottom:var(--space-1);">Telefono</h3>
            <p style="font-size:var(--font-sm);color:var(--color-slate-lighter);">Llamanos directamente para resolver tus dudas al momento.</p>
          </div>
        </a>

        <div class="contact-card reveal">
          <div class="contact-card__icon" style="background:#dbeafe;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
          </div>
          <div>
            <h3 style="font-size:var(--font-lg);margin-bottom:var(--space-1);">Formulario</h3>
            <p style="font-size:var(--font-sm);color:var(--color-slate-lighter);">Llena el formulario abajo y te contactamos en menos de 24 horas.</p>
          </div>
        </div>
      </div>

      <!-- FORM -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-12);align-items:start;">
        <div class="reveal">
          <h2 style="margin-bottom:var(--space-2);">Solicitar cotizacion</h2>
          <p style="margin-bottom:var(--space-8);color:var(--color-slate-lighter);">Completa el formulario y te responderemos con una cotizacion personalizada.</p>

          <form id="contact-form" action="#" method="POST">
            <div class="form-group">
              <label for="nombre">Nombre completo</label>
              <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre">
            </div>
            <div class="form-group">
              <label for="telefono">Telefono o WhatsApp</label>
              <input type="tel" id="telefono" name="telefono" placeholder="662 XXX XXXX">
            </div>
            <div class="form-group">
              <label for="tipo">Tipo de proyecto</label>
              <select id="tipo" name="tipo" required>
                <option value="" disabled selected>Selecciona una opcion</option>
                <option value="Residencial - Cochera">Residencial - Cochera</option>
                <option value="Residencial - Interior">Residencial - Interior</option>
                <option value="Residencial - Patio/Exterior">Residencial - Patio/Exterior</option>
                <option value="Comercial - Local/Tienda">Comercial - Local/Tienda</option>
                <option value="Comercial - Restaurante">Comercial - Restaurante</option>
                <option value="Comercial - Showroom/Oficina">Comercial - Showroom/Oficina</option>
                <option value="Industrial - Bodega">Industrial - Bodega</option>
                <option value="Industrial - Taller">Industrial - Taller</option>
                <option value="Industrial - Planta">Industrial - Planta</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div class="form-group">
              <label for="area">Area aproximada (m2)</label>
              <input type="number" id="area" name="area" placeholder="Ej: 50" min="1">
            </div>
            <div class="form-group">
              <label for="mensaje">Mensaje (opcional)</label>
              <textarea id="mensaje" name="mensaje" placeholder="Cuentanos mas sobre tu proyecto..."></textarea>
            </div>
            <button type="submit" class="btn btn--primary btn--large" style="width:100%;">Enviar Solicitud</button>
          </form>
        </div>

        <!-- MAP + INFO -->
        <div class="reveal">
          <div style="border-radius:var(--radius-lg);overflow:hidden;margin-bottom:var(--space-8);background:var(--color-gray-100);height:300px;display:flex;align-items:center;justify-content:center;">
            <!-- Replace with Google Maps embed when available -->
            <div style="text-align:center;color:var(--color-slate-lighter);">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom:8px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <p>Hermosillo, Sonora, Mexico</p>
            </div>
          </div>

          <div style="background:var(--color-gray-100);border-radius:var(--radius-lg);padding:var(--space-8);">
            <h3 style="margin-bottom:var(--space-6);">Informacion</h3>
            <div style="display:flex;flex-direction:column;gap:var(--space-4);">
              <div style="display:flex;align-items:center;gap:var(--space-3);">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span style="font-size:var(--font-sm);">Hermosillo, Sonora, Mexico</span>
              </div>
              <div style="display:flex;align-items:center;gap:var(--space-3);">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                <span style="font-size:var(--font-sm);">{{BUSINESS_HOURS}}</span>
              </div>
              <div style="display:flex;align-items:center;gap:var(--space-3);">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span style="font-size:var(--font-sm);">Cobertura: Hermosillo, Sonora, Arizona</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div><svg viewBox="0 0 400 100" height="32" aria-label="ResinX"><text x="20" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#ffffff">Resin</text><text x="280" y="75" font-family="Inter, Arial, sans-serif" font-weight="700" font-size="72" fill="#3b82f6">X</text></svg><p class="footer__brand-desc">Pisos epoxicos premium en Hermosillo, Sonora. Materiales importados de EE.UU. con garantia de hasta 3 anos.</p></div>
        <div><h4 class="footer__heading">Servicios</h4><a href="servicios.html#flake" class="footer__link">Pisos Flake</a><a href="servicios.html#metalico" class="footer__link">Pisos Metalicos</a><a href="servicios.html#industrial" class="footer__link">Industrial</a><a href="servicios.html#3d" class="footer__link">Pisos 3D</a><a href="servicios.html" class="footer__link">Todos los servicios</a></div>
        <div><h4 class="footer__heading">Empresa</h4><a href="galeria.html" class="footer__link">Galeria</a><a href="proceso.html" class="footer__link">Proceso</a><a href="cobertura.html" class="footer__link">Cobertura</a><a href="contacto.html" class="footer__link">Contacto</a></div>
        <div><h4 class="footer__heading">Contacto</h4><a href="https://wa.me/{{WHATSAPP_NUMBER}}" class="footer__link" target="_blank" rel="noopener">WhatsApp</a><a href="tel:{{PHONE_NUMBER}}" class="footer__link">Telefono</a><a href="contacto.html" class="footer__link">Formulario</a></div>
      </div>
      <div class="footer__bottom"><p>&copy; 2026 ResinX. Todos los derechos reservados. Hermosillo, Sonora, Mexico.</p></div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
cd C:/Users/Owner/Desktop/resinx-website
git add contacto.html
git commit -m "feat: add contact page — form, WhatsApp/phone CTAs, map placeholder"
```

---

## Phase 4: SEO Files & Polish

### Task 11: SEO Files — sitemap.xml, robots.txt

**Files:**
- Create: `sitemap.xml`
- Create: `robots.txt`

- [ ] **Step 1: Create sitemap.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://resinx.net/</loc>
    <lastmod>2026-04-12</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://resinx.net/servicios.html</loc>
    <lastmod>2026-04-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://resinx.net/galeria.html</loc>
    <lastmod>2026-04-12</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://resinx.net/proceso.html</loc>
    <lastmod>2026-04-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://resinx.net/cobertura.html</loc>
    <lastmod>2026-04-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://resinx.net/contacto.html</loc>
    <lastmod>2026-04-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

- [ ] **Step 2: Create robots.txt**

```
User-agent: *
Allow: /
Sitemap: https://resinx.net/sitemap.xml
```

- [ ] **Step 3: Commit**

```bash
cd C:/Users/Owner/Desktop/resinx-website
git add sitemap.xml robots.txt
git commit -m "feat: add sitemap.xml and robots.txt for SEO"
```

---

### Task 12: Logo GIF Export

**Files:**
- Create: GIF at `assets/images/logo/resinx-logo-animated.gif`

- [ ] **Step 1: Generate animated logo GIF using fal.ai**

Use the visual-creator subagent to generate the animated logo as a video first, then convert to GIF. Alternatively, use a Python script with Pillow to render the SVG animation frames and compile to GIF.

The simplest approach: use Python with `cairosvg` and `Pillow` to render SVG frames at different rotation angles and compile into a GIF.

```bash
pip install cairosvg Pillow
```

```python
# scripts/generate-logo-gif.py
import math
import os
from io import BytesIO
from PIL import Image

try:
    import cairosvg
except ImportError:
    print("Install cairosvg: pip install cairosvg")
    exit(1)

OUTPUT_DIR = "C:/Users/Owner/Desktop/resinx-website/assets/images/logo"
os.makedirs(OUTPUT_DIR, exist_ok=True)

FRAMES = 60
SIZE = 1000

frames = []
for i in range(FRAMES):
    angle = (360 / FRAMES) * i
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="{SIZE}" height="{SIZE}">
      <rect width="500" height="500" fill="#0a0a0a"/>
      <text x="60" y="310" font-family="Arial, sans-serif" font-weight="700" font-size="120" fill="#ffffff">Resin</text>
      <text x="355" y="310" font-family="Arial, sans-serif" font-weight="700" font-size="120" fill="#3b82f6">X</text>
      <g transform="rotate({angle}, 390, 250)">
        <ellipse cx="390" cy="250" rx="80" ry="28" fill="none" stroke="#ef4444" stroke-width="6" transform="rotate(-25, 390, 250)"/>
      </g>
    </svg>'''

    png_data = cairosvg.svg2png(bytestring=svg.encode(), output_width=SIZE, output_height=SIZE)
    img = Image.open(BytesIO(png_data)).convert('RGBA')
    frames.append(img)

# Save as GIF
frames[0].save(
    os.path.join(OUTPUT_DIR, "resinx-logo-animated.gif"),
    save_all=True,
    append_images=frames[1:],
    duration=67,  # ~15fps
    loop=0,
    optimize=True
)

# Also save a smaller version (500x500)
small_frames = [f.resize((500, 500), Image.LANCZOS) for f in frames]
small_frames[0].save(
    os.path.join(OUTPUT_DIR, "resinx-logo-animated-500.gif"),
    save_all=True,
    append_images=small_frames[1:],
    duration=67,
    loop=0,
    optimize=True
)

print("GIFs generated successfully!")
```

Run: `python scripts/generate-logo-gif.py`

If `cairosvg` has issues on Windows (common), fallback approach: create the GIF manually using Pillow drawing primitives:

```python
# scripts/generate-logo-gif-fallback.py
import math
import os
from PIL import Image, ImageDraw, ImageFont

OUTPUT_DIR = "C:/Users/Owner/Desktop/resinx-website/assets/images/logo"
os.makedirs(OUTPUT_DIR, exist_ok=True)

FRAMES = 60
SIZE = 1000
CX, CY = 680, 440  # Center of the X character (approximate)
RX, RY = 140, 50    # Ellipse radii
TILT = math.radians(-25)

frames = []
for i in range(FRAMES):
    img = Image.new('RGBA', (SIZE, SIZE), (10, 10, 10, 255))
    draw = ImageDraw.Draw(img)

    # Draw text (using default font, scaled)
    try:
        font = ImageFont.truetype("arial.ttf", 200)
    except:
        font = ImageFont.load_default()

    draw.text((80, 280), "Resin", fill=(255, 255, 255), font=font)
    draw.text((620, 280), "X", fill=(59, 130, 246), font=font)

    # Draw rotating ellipse
    angle = (360 / FRAMES) * i
    orbit_angle = math.radians(angle)

    # Draw ellipse as a series of points
    points = []
    for t in range(0, 360, 2):
        t_rad = math.radians(t)
        # Point on ellipse
        px = RX * math.cos(t_rad)
        py = RY * math.sin(t_rad)
        # Apply orbit rotation
        rx = px * math.cos(orbit_angle) - py * math.sin(orbit_angle)
        ry = px * math.sin(orbit_angle) + py * math.cos(orbit_angle)
        # Apply tilt
        fx = rx * math.cos(TILT) - ry * math.sin(TILT)
        fy = rx * math.sin(TILT) + ry * math.cos(TILT)
        points.append((CX + fx, CY + fy))

    if len(points) > 1:
        for j in range(len(points) - 1):
            draw.line([points[j], points[j+1]], fill=(239, 68, 68), width=8)
        draw.line([points[-1], points[0]], fill=(239, 68, 68), width=8)

    frames.append(img)

frames[0].save(
    os.path.join(OUTPUT_DIR, "resinx-logo-animated.gif"),
    save_all=True,
    append_images=frames[1:],
    duration=67,
    loop=0,
    optimize=True
)

small_frames = [f.resize((500, 500), Image.LANCZOS) for f in frames]
small_frames[0].save(
    os.path.join(OUTPUT_DIR, "resinx-logo-animated-500.gif"),
    save_all=True,
    append_images=small_frames[1:],
    duration=67,
    loop=0,
    optimize=True
)

print("GIFs generated!")
```

- [ ] **Step 2: Verify GIF renders correctly**

Open the GIF file and confirm: text is readable, orbital ring rotates smoothly, colors match brand (#0a0a0a bg, white/blue text, red ring), loop is seamless.

- [ ] **Step 3: Commit**

```bash
cd C:/Users/Owner/Desktop/resinx-website
git add assets/images/logo/ scripts/
git commit -m "feat: add animated logo GIF (1000x1000 and 500x500) with generation script"
```

---

### Task 13: Final Review and Push

- [ ] **Step 1: Verify all pages render correctly**

Open each page in the browser and check:
- `index.html` — hero, trust bar, services, portfolio, process, CTA, footer
- `servicios.html` — all 7 service sections, alternating layout
- `galeria.html` — filter works, lightbox works, before/after slider works
- `proceso.html` — 4 steps with images, timeline summary
- `cobertura.html` — 4 coverage cards, SEO content
- `contacto.html` — form, contact cards, map placeholder

- [ ] **Step 2: Test mobile responsive (resize browser to 375px width)**

Check each page: nav collapses to hamburger, grids stack single column, text readable, buttons full width.

- [ ] **Step 3: Validate HTML**

Quick check for any obvious issues: missing alt tags, broken links between pages, placeholder variables are consistent (`{{WHATSAPP_NUMBER}}`, `{{PHONE_NUMBER}}`, etc.)

- [ ] **Step 4: Push all changes to GitHub**

```bash
cd C:/Users/Owner/Desktop/resinx-website
git push origin main
```

- [ ] **Step 5: Commit .gitignore**

```
# .gitignore
.superpowers/
node_modules/
.DS_Store
Thumbs.db
*.log
```

```bash
cd C:/Users/Owner/Desktop/resinx-website
git add .gitignore
git commit -m "chore: add .gitignore"
git push origin main
```
