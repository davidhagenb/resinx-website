---
name: write-blog
description: Genera un artículo de blog SEO completo para ResinX como página HTML estática. Recibe tema y keywords, produce archivo listo para publicar.
---

# write-blog -- Generador de artículos SEO para ResinX

Usa esta skill para crear artículos de blog optimizados para SEO local en Hermosillo.

## Antes de escribir

1. **Lee AGENTS.md** para las reglas del agente
2. **Lee CLAUDE.md** para las reglas globales del proyecto
3. **Revisa blog/index.html** para ver artículos existentes y evitar duplicados
4. **Identifica keywords**: el usuario te dará un tema. Define:
   - Keyword primario (lo que la gente busca en Google)
   - 2-3 keywords secundarios
   - Slug del URL (sin acentos, sin ñ, separado por guiones)

## Estructura del artículo

Cada artículo debe tener 1500-2500 palabras y seguir esta estructura:

### 1. Head (SEO tags)

```html
<title>{Título con keyword} | ResinX Hermosillo</title>
<meta name="description" content="{150-160 chars con keyword primario + Hermosillo}">
<link rel="canonical" href="https://resinx.net/blog/{slug}.html">
<!-- OG tags: title, description, type=article, url, image, locale=es_MX -->
<!-- JSON-LD: Article schema -->
<!-- JSON-LD: BreadcrumbList (Inicio > Blog > Artículo) -->
<!-- JSON-LD: FAQPage (2-3 preguntas) -->
```

### 2. Nav

Copiar el nav exacto del sitio. El link "Blog" debe tener clase `nav__link--active`. Usar rutas relativas con `../` para CSS y links.

```html
<nav class="nav nav--solid" role="navigation" aria-label="Navegación principal">
  <!-- Copiar nav de cualquier página interna, agregar link a Blog -->
  <a href="../blog/" class="nav__link nav__link--active">Blog</a>
</nav>
```

### 3. Header del artículo

```html
<section class="section section--dark" style="padding-top:calc(var(--nav-height) + var(--space-16));">
  <div class="container text-center">
    <nav aria-label="Breadcrumb" style="margin-bottom:var(--space-4);">
      <span style="font-size:var(--font-sm);color:var(--color-gray-300);">
        <a href="../index.html" style="color:var(--color-gray-300);">Inicio</a> &gt;
        <a href="../blog/" style="color:var(--color-gray-300);">Blog</a> &gt;
        <span style="color:var(--color-blue);">{Título corto}</span>
      </span>
    </nav>
    <h1 style="color:white;margin-top:var(--space-4);">{Título con keyword primario}</h1>
    <p style="color:var(--color-gray-300);font-size:var(--font-sm);margin-top:var(--space-4);">
      Por ResinX &middot; {Fecha en formato legible} &middot; {X} min de lectura
    </p>
  </div>
</section>
```

### 4. Cuerpo del artículo

```html
<article class="section">
  <div class="container" style="max-width:800px;">
    <!-- Primer párrafo: DEBE mencionar keyword primario + Hermosillo -->
    <p>...</p>

    <!-- H2 sections con keywords secundarios -->
    <h2>...</h2>
    <p>...</p>

    <!-- Links internos naturales al contenido de servicios/galería -->
    <a href="../servicios.html#flake">pisos flake</a>

    <!-- Imágenes con alt text descriptivo y keyword -->
    <img src="../assets/images/..." alt="{descripción con keyword}" loading="lazy"
         style="width:100%;border-radius:var(--radius-lg);margin:var(--space-8) 0;">
  </div>
</article>
```

### 5. Sección FAQ

```html
<section class="section section--gray">
  <div class="container" style="max-width:800px;">
    <h2>Preguntas frecuentes</h2>
    <!-- 2-3 preguntas con ¿? que la gente realmente busca -->
    <h3>¿{Pregunta}?</h3>
    <p>{Respuesta directa, 2-3 oraciones}</p>
  </div>
</section>
```

### 6. CTA

```html
<section class="section section--dark" style="text-align:center;">
  <div class="container">
    <h2 style="color:white;margin-bottom:var(--space-4);">{CTA heading}</h2>
    <p style="color:var(--color-gray-300);font-size:var(--font-lg);max-width:550px;margin:0 auto var(--space-8);">
      {CTA copy mencionando cotización gratis}
    </p>
    <a href="../contacto.html" class="btn btn--primary btn--large">Solicitar Cotización Gratis</a>
  </div>
</section>
```

### 7. Footer

Copiar el footer exacto del sitio con rutas relativas `../`.

## Reglas de contenido

- **Keyword primario** en: title, H1, meta description, primer párrafo, al menos 1 H2
- **Densidad**: keyword primario 3-5 veces natural, sin forzar
- **Links internos**: mínimo 2 a páginas de servicios, 1 a galería o proceso
- **Sin precios**: nunca mencionar costos específicos, solo "cotización sin costo"
- **Sin emojis**: nunca
- **Acentos correctos** en contenido (ñ, á, é, í, ó, ú)
- **Sin acentos** en URLs, hrefs, slugs, nombres de archivo
- **Preguntas en español**: siempre con ¿ al inicio

## Después de escribir

1. **Guardar** el archivo en `blog/{slug}.html`
2. **Actualizar blog/index.html**: agregar card del nuevo artículo al inicio de la lista
3. **Actualizar sitemap.xml**: agregar URL con fecha actual y priority 0.7
4. **Verificar**: abrir el archivo y confirmar que:
   - Nav y footer se ven correctos
   - Links internos no tienen acentos en URLs
   - Schema JSON-LD es válido (estructura correcta)
   - H1 contiene keyword primario

## Ejemplo de card para blog/index.html

```html
<div class="card reveal">
  <div class="card__body">
    <span style="font-size:var(--font-sm);color:var(--color-blue);">{Fecha}</span>
    <h3 class="card__title" style="margin-top:var(--space-2);">
      <a href="{slug}.html" style="color:inherit;text-decoration:none;">{Título}</a>
    </h3>
    <p class="card__text">{Extracto de 1-2 oraciones}</p>
    <a href="{slug}.html" class="btn btn--secondary" style="margin-top:var(--space-4);">Leer más</a>
  </div>
</div>
```
