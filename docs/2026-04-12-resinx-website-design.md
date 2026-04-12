# ResinX Website — Design Spec

**Date**: 2026-04-12
**Client**: ResinX (epoxy flooring, Hermosillo, Sonora)
**Domain**: resinx.net
**Repo**: github.com/davidhagenb/resinx-website

---

## Brand Direction

- **Style**: Premium Modern
- **Visual theme**: Dark Hero → Light Content (dark hero sections, light body sections)
- **Colors**: Black (#0a0a0a), Blue (#3b82f6), Red (#ef4444), White (#f8fafc), Slate (#1e293b)
- **Typography**: Sans-serif, modern, bold headings
- **Tone**: Professional, confident, no emojis, no fluff
- **No pricing displayed** — internal only

## Primary Goal

**Lead generation** — every section funnels toward a free quote request. Portfolio serves as the convincing engine.

## Contact Channels

All three available as CTAs:
- **WhatsApp**: `{{WHATSAPP_NUMBER}}` (placeholder — TBD)
- **Phone**: `{{PHONE_NUMBER}}` (placeholder — TBD)
- **Contact form**: name, project type, approximate area (m2), message

**Email** (resinx.hmo@gmail.com) is NOT public — used only for Instagram/internal.

## Language

- **Primary**: Spanish (Mexico)
- **Future**: Bilingual (English) — site structure must be i18n-ready
- All content, meta tags, and schema in Spanish first

## Tech Stack

- HTML/CSS/JS vanilla — no framework
- Mobile-first responsive
- SEO-optimized: semantic HTML, meta tags, Open Graph, JSON-LD schema markup
- Fast loading, minimal dependencies
- Deploy-ready for any static host (Vercel, Netlify, or direct to resinx.net)

## Site Structure (Multi-page for SEO)

### 1. Inicio (index.html)
- **Dark hero**: animated logo (SVG orbital ring), headline, subheadline, primary CTA (Cotizacion Gratis)
- **Trust bar**: "Materiales importados de EE.UU." / "Garantia hasta 3 anos" / "Cotizacion sin costo"
- **Service overview**: 3 cards (Residencial, Comercial, Industrial) — no emojis, use icons or AI-generated thumbnails
- **Featured portfolio**: 3-4 best project images (AI-generated, photorealistic)
- **Process summary**: 4 steps condensed
- **Final CTA**: dark section, strong quote push

### 2. Servicios (servicios.html)
Individual sections for each service — each targets long-tail keywords:
- Pisos epoxicos decorativos (flake y metalizados)
- Pisos industriales de alta resistencia
- Recubrimientos autonivelantes
- Sistemas uretanocementicios
- Pisos 3D personalizados
- Sellado y proteccion de concreto
- Reparacion y nivelacion de superficies
- Restauracion de pisos danados

Each section: title, description, use cases, AI-generated photo, CTA.

### 3. Galeria (galeria.html)
- Filterable grid: Residencial / Comercial / Industrial / Todos
- Before/after comparisons (slider or side-by-side)
- AI-generated photorealistic project images
- Click to expand / lightbox

### 4. Proceso (proceso.html)
Step-by-step timeline:
1. Inspeccion y cotizacion
2. Preparacion de superficie
3. Aplicacion del sistema
4. Curado y entrega

Each step: description, timeline, what to expect, AI-generated process photo.

### 5. Cobertura (cobertura.html)
- Map or visual showing coverage areas
- Hermosillo (primary)
- Todo Sonora
- Otros estados (bajo solicitud)
- Arizona, EE.UU. (posibilidad)
- Geo-targeted content for SEO ("pisos epoxicos hermosillo", "epoxy flooring sonora")

### 6. Contacto (contacto.html)
- Contact form: nombre, tipo de proyecto (dropdown), area aproximada (m2), mensaje
- WhatsApp button (placeholder)
- Phone button (placeholder)
- Google Maps embed (Hermosillo)
- Business hours (pendiente)

## Visual Assets (AI-Generated with fal.ai)

All images must be **photorealistic** — no AI artifacts, no stock photo feel.

### Required images:
1. **Hero background**: dramatic epoxy floor shot, metallic/flake finish, dramatic lighting
2. **Residential gallery** (3-4): garage with flake epoxy, modern interior, patio
3. **Commercial gallery** (3-4): restaurant floor, showroom, retail space
4. **Industrial gallery** (2-3): warehouse, workshop with high-traffic coating
5. **Before/after pairs** (2-3): concrete → finished epoxy transformation
6. **Process photos** (4): surface prep, mixing/application, wet coat, finished result
7. **Service-specific** (4-5): close-up of flake finish, metallic swirl, 3D floor, self-leveling pour

### Target specs:
- Hero: 1920x1080 minimum
- Gallery: 1200x800 or 800x1200
- All optimized for web (compressed, WebP with JPG fallback)

## Logo Animation

### SVG/CSS version (website):
- Orbital red ring rotates continuously around the X
- Smooth, subtle — not distracting
- CSS animation, no JS dependency
- Used in hero section and navbar (smaller)

### GIF version (social/WhatsApp):
- Same animation exported as GIF
- Square format (500x500 or 1000x1000)
- Black background, transparent if possible
- Loop seamlessly

## SEO Strategy

### Target keywords (Spanish):
- pisos epoxicos hermosillo
- pisos epoxicos sonora
- pisos de resina hermosillo
- recubrimiento epoxicos hermosillo
- pisos industriales hermosillo
- pisos metalicos epoxicos
- pisos 3d hermosillo
- piso de resina para cochera

### On-page SEO:
- Unique title and meta description per page
- H1 → H2 → H3 hierarchy
- Alt text on all images (descriptive, keyword-rich)
- JSON-LD LocalBusiness schema
- JSON-LD Service schema per service
- Open Graph and Twitter Card meta
- Sitemap.xml
- robots.txt
- Canonical URLs
- Internal linking between pages

### Technical SEO:
- Fast load times (< 3s)
- Mobile-first responsive
- Core Web Vitals optimized
- Lazy loading on images below fold
- Compressed assets (WebP)
- Clean URL structure

## File Structure

```
resinx-website/
├── index.html
├── servicios.html
├── galeria.html
├── proceso.html
├── cobertura.html
├── contacto.html
├── sitemap.xml
├── robots.txt
├── css/
│   ├── main.css
│   └── animations.css
├── js/
│   ├── main.js
│   └── gallery.js
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   ├── gallery/
│   │   ├── services/
│   │   ├── process/
│   │   └── logo/
│   └── icons/
├── docs/
│   └── 2026-04-12-resinx-website-design.md
└── CLAUDE.md
```

## Placeholders (to fill when available)

- `{{WHATSAPP_NUMBER}}` — WhatsApp business number
- `{{PHONE_NUMBER}}` — Phone number
- `{{GOOGLE_MAPS_EMBED}}` — Google Maps embed URL
- `{{BUSINESS_HOURS}}` — Operating hours
- `{{INSTAGRAM_URL}}` — Instagram profile link
