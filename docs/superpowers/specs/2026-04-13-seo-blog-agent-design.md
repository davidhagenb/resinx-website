# ResinX SEO Blog Agent -- Design Spec

**Date:** 2026-04-13
**Author:** David / Lightning Pro
**Goal:** Rank #1 for "pisos epoxicos hermosillo" and related local keywords

## 1. Overview

Build a Claude Code agent with skills inside the resinx-website repo that can:
- Write SEO-optimized blog articles as static HTML pages
- Audit existing pages for SEO issues
- Follow the site's brand voice, design, and technical patterns

The agent also drives an initial content plan of 6 blog articles targeting high-intent local keywords, plus SEO fixes to existing pages.

## 2. Agent Definition (AGENTS.md)

A single agent named "ResinX Blog Writer" defined in `AGENTS.md` at repo root. The agent:
- Writes in Spanish (es-MX), professional tone, no emojis
- Targets Hermosillo, Sonora local SEO
- Uses the same CSS/nav/footer as the existing site
- Outputs static HTML files to `blog/`
- Has access to two skills: `write-blog` and `seo-audit`

## 3. Skills

### 3.1 write-blog

**Location:** `.claude/skills/write-blog/SKILL.md`

**Purpose:** Generate a complete SEO blog article as a static HTML page.

**Inputs (provided by user or inferred):**
- Topic / title
- Primary keyword
- Secondary keywords (2-3)
- Target word count (default: 1500-2500)

**Process:**
1. Check existing blog articles and service pages to avoid keyword cannibalization
2. Generate article outline: H1 (primary keyword), H2s (secondary keywords + subtopics)
3. Write full HTML file using the site template:
   - Same `<head>` pattern: charset, viewport, title, meta description, canonical, OG tags, Twitter card
   - Same nav (with Blog link active)
   - Article content with proper heading hierarchy
   - FAQ section (2-3 questions with FAQ schema)
   - CTA section linking to contacto.html
   - Same footer
   - Same CSS (css/main.css, css/animations.css)
4. Include JSON-LD schema: Article + FAQ + BreadcrumbList
5. Add 2-3 internal links to relevant service/gallery pages
6. Update blog/index.html with new article card
7. Update sitemap.xml with new URL and current date

**Output file:** `blog/{slug}.html`

**HTML template structure:**
```
<!DOCTYPE html>
<html lang="es-MX">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{Article Title} | ResinX Hermosillo</title>
  <meta name="description" content="{150-160 char description with primary keyword}">
  <link rel="canonical" href="https://resinx.net/blog/{slug}.html">
  <meta property="og:title" content="{Article Title}">
  <meta property="og:description" content="{description}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://resinx.net/blog/{slug}.html">
  <meta property="og:image" content="https://resinx.net/assets/images/blog/{slug}.jpg">
  <meta property="og:locale" content="es_MX">
  <link rel="stylesheet" href="../css/main.css">
  <link rel="stylesheet" href="../css/animations.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "{H1}",
    "author": { "@type": "Organization", "name": "ResinX" },
    "publisher": { "@type": "Organization", "name": "ResinX", "url": "https://resinx.net" },
    "datePublished": "{YYYY-MM-DD}",
    "dateModified": "{YYYY-MM-DD}",
    "mainEntityOfPage": "https://resinx.net/blog/{slug}.html",
    "description": "{meta description}"
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://resinx.net/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://resinx.net/blog/" },
      { "@type": "ListItem", "position": 3, "name": "{Article Title}" }
    ]
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "{Q1}", "acceptedAnswer": { "@type": "Answer", "text": "{A1}" } },
      { "@type": "Question", "name": "{Q2}", "acceptedAnswer": { "@type": "Answer", "text": "{A2}" } }
    ]
  }
  </script>
</head>
<body>
  <!-- Same nav as site, with Blog link -->
  <!-- Breadcrumb bar -->
  <!-- Article header: H1, date, reading time -->
  <!-- Article body: H2 sections, images, internal links -->
  <!-- FAQ section -->
  <!-- CTA section -->
  <!-- Same footer as site -->
</body>
</html>
```

**Content guidelines:**
- H1 must contain primary keyword naturally
- First paragraph must mention primary keyword + "Hermosillo"
- Use H2s for each major section, include secondary keywords
- Link to at least 2 service pages and 1 gallery/process page
- Include 1-2 images (can reference existing gallery images or placeholders)
- FAQ questions should be phrased as people actually search them
- CTA: "Solicitar cotizacion gratis" linking to contacto.html
- No pricing (per CLAUDE.md rules)
- Professional tone, no fluff, no emojis

### 3.2 seo-audit

**Location:** `.claude/skills/seo-audit/SKILL.md`

**Purpose:** Scan all HTML pages for SEO issues and report fixes.

**Checks:**
1. Missing or duplicate meta descriptions
2. Missing or duplicate title tags
3. Missing canonical URLs
4. Missing OG tags
5. Missing or invalid JSON-LD schema
6. Broken internal links (accented characters in hrefs/URLs)
7. Missing alt text on images
8. Heading hierarchy issues (skipped levels, multiple H1s)
9. Missing opening question marks on Spanish questions
10. Keyword density check for target keywords
11. Sitemap completeness (all pages listed)
12. Missing pages in nav

**Output:** Report with file:line references and suggested fixes, grouped by severity (critical, warning, info).

## 4. Initial Content Plan

6 articles targeting high-intent local search:

| Priority | Slug | Primary Keyword | Type | Internal Links To |
|----------|------|----------------|------|-------------------|
| 1 | cuanto-cuesta-piso-epoxicos-hermosillo | cuanto cuesta piso epoxicos hermosillo | Transactional | servicios, contacto |
| 2 | pisos-epoxicos-vs-ceramica-porcelanato | pisos epoxicos vs ceramica | Comparison | servicios#flake, galeria |
| 3 | pisos-epoxicos-cochera-hermosillo | pisos epoxicos para cochera hermosillo | Service landing | servicios#flake, galeria, proceso |
| 4 | pisos-epoxicos-antes-y-despues | pisos epoxicos antes y despues | Visual proof | galeria, proceso |
| 5 | mejor-piso-para-restaurante-hermosillo | pisos para restaurantes hermosillo | Niche service | servicios#metalico, galeria |
| 6 | como-se-instala-piso-epoxicos | como se instala piso epoxicos | Informational | proceso, servicios |

## 5. SEO Fixes for Existing Pages

Bundled with the implementation:

### 5.1 Critical (broken links)
- Fix `galeria.html` references: all `href="galeria.html"` links got accented to `href="galeria.html"` -- must revert to `galeria.html` in all hrefs, canonical URLs, and og:url tags
- Fix `#metalico` anchor: got accented to `#metalico` in footer links across all pages
- Fix `Aplicaciones` typo: `Aplicaciones` -> `Aplicaciones` (6 instances in servicios.html)
- Fix `patrones` typo: `patrones` -> `patrones` (1 instance in servicios.html)
- Fix `instalaciones` typo in galeria.html meta description

### 5.2 Schema additions
- galeria.html: ImageGallery schema
- cobertura.html: ServiceArea schema
- contacto.html: ContactPage schema with ContactPoint

### 5.3 Content quality
- Add opening question marks to heading questions (proceso.html, servicios.html, cobertura.html)
- Add Blog to nav across all pages

## 6. File Structure

```
resinx-website/
  AGENTS.md                    -- agent definition
  CLAUDE.md                    -- existing, updated with blog rules
  .claude/
    skills/
      write-blog/
        SKILL.md               -- blog writing skill
      seo-audit/
        SKILL.md               -- SEO audit skill
  blog/
    index.html                 -- blog listing page
    cuanto-cuesta-piso-epoxicos-hermosillo.html
    ...
  sitemap.xml                  -- updated with blog URLs
```

## 7. Success Criteria

- Agent can generate a complete blog article from a topic with one command
- All blog pages pass schema validation (schema.org structured data testing tool)
- All internal links work (no accented characters in URLs)
- Target keyword appears in: title, H1, meta description, first paragraph, URL slug
- Each article has Article + FAQ + BreadcrumbList schema
- Blog index lists all articles
- Sitemap includes all blog URLs
