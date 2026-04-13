---
name: seo-audit
description: Audita todas las páginas HTML del sitio ResinX por problemas de SEO. Reporta errores con file:line y sugiere fixes.
---

# seo-audit -- Auditoría SEO para ResinX

Usa esta skill para revisar el sitio completo por problemas de SEO.

## Proceso

Ejecutar estos checks en orden. Reportar cada issue con severidad, archivo, línea, y fix sugerido.

### 1. Meta tags (Crítico)

Para cada archivo HTML, verificar:

- [ ] `<title>` existe y tiene 50-60 caracteres
- [ ] `<title>` contiene keyword relevante + "Hermosillo" o "ResinX"
- [ ] `<meta name="description">` existe y tiene 150-160 caracteres
- [ ] `<meta name="description">` contiene keyword relevante
- [ ] `<link rel="canonical">` existe y es URL correcta
- [ ] No hay titles o descriptions duplicados entre páginas

### 2. Open Graph (Warning)

Para cada archivo HTML:

- [ ] `og:title` existe
- [ ] `og:description` existe
- [ ] `og:type` existe (website o article)
- [ ] `og:url` existe y coincide con canonical
- [ ] `og:image` existe (al menos en páginas principales)
- [ ] `og:locale` es `es_MX`

### 3. Schema / JSON-LD (Crítico)

Verificar schema existente y requerido:

| Página | Schema requerido |
|--------|-----------------|
| index.html | LocalBusiness |
| servicios.html | Service + OfferCatalog |
| galeria.html | ImageGallery |
| proceso.html | HowTo |
| cobertura.html | Service con areaServed |
| contacto.html | ContactPage |
| blog/index.html | CollectionPage |
| blog/*.html | Article + BreadcrumbList + FAQPage |

Para cada schema:
- [ ] JSON-LD es sintácticamente válido
- [ ] `@context` es `https://schema.org`
- [ ] `@type` es correcto
- [ ] Campos requeridos están presentes

### 4. Heading hierarchy (Warning)

Para cada archivo:

- [ ] Exactamente 1 `<h1>` por página
- [ ] H1 contiene keyword relevante
- [ ] No se saltan niveles (h1 -> h3 sin h2)
- [ ] Headings son descriptivos, no genéricos

### 5. Links internos (Crítico)

- [ ] Ningún href contiene caracteres acentuados (á, é, í, ó, ú, ñ)
- [ ] Todos los links internos apuntan a archivos que existen
- [ ] Canonical URLs no contienen caracteres acentuados
- [ ] Anchors (#metalico, #flake, etc.) coinciden con IDs reales en las páginas destino

### 6. Imágenes (Warning)

- [ ] Todas las `<img>` tienen atributo `alt` no vacío
- [ ] Alt text es descriptivo e incluye keywords cuando es natural
- [ ] Imágenes below-the-fold tienen `loading="lazy"`
- [ ] Hero image tiene `loading="eager"`

### 7. Contenido español (Info)

- [ ] Preguntas en headings usan ¿ al inicio
- [ ] Acentos correctos en contenido visible (ñ, á, é, í, ó, ú)
- [ ] Sin acentos en URLs, hrefs, anchors, o nombres de archivo

### 8. Sitemap y robots (Warning)

- [ ] sitemap.xml lista todas las páginas HTML del sitio
- [ ] sitemap.xml lista todas las páginas de blog
- [ ] robots.txt permite crawling y referencia sitemap
- [ ] Todas las URLs en sitemap usan `https://resinx.net/`

### 9. Navegación (Warning)

- [ ] Todas las páginas tienen el mismo nav
- [ ] Blog aparece en el nav
- [ ] La página actual tiene clase `nav__link--active`

### 10. Performance SEO (Info)

- [ ] CSS preloaded o inlined para critical path
- [ ] Fonts usan `display=swap`
- [ ] No hay scripts bloqueantes en `<head>`

## Formato del reporte

```
## SEO Audit Report -- ResinX
Date: {YYYY-MM-DD}

### Critical Issues
1. [servicios.html:92] Anchor #metalico does not match any ID -- fix: add id="metalico" to section
2. ...

### Warnings
1. [galeria.html] Missing ImageGallery schema -- fix: add JSON-LD
2. ...

### Info
1. [proceso.html:135] Question heading missing opening ¿
2. ...

### Summary
- Pages scanned: X
- Critical: X
- Warnings: X
- Info: X
```

## Después de auditar

Presentar el reporte al usuario y preguntar si quiere que se apliquen los fixes automáticamente.
