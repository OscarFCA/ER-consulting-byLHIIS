# Proyecto: Portafolio Personal — Elías Rico
> Versión 1.2 · Abril 2026

---

## 1. Resumen ejecutivo

Sitio web personal de Elías Oscar Rico Contreras. Una sola página diseñada para convertir a founders, directores y C-suite en leads calificados para consultoría de IA y estrategia de negocios.

**No es un CV. Es una máquina de generar deseo de contratarte.**

---

## 2. Objetivo del sitio

| Prioridad | Objetivo |
|-----------|----------|
| 1 | Conseguir clientes para consultoría (IA, estrategia, sistemas) |
| 2 | Atraer oportunidades laborales y alianzas estratégicas |
| 3 | Posicionarse como referente / pensador en IA aplicada a negocios |

**Métrica principal de éxito:** conversaciones iniciadas por WhatsApp desde el sitio.

---

## 3. Audiencia objetivo

### Visitante prioritario
Founder / Dueño de empresa / Director (CEO, CTO, CPO, CXO, Growth) en alguna de estas etapas:

| Etapa | Perfil | Dolor principal |
|-------|--------|----------------|
| **Etapa 1 — Start Up** (1–5 personas) | Fundador que hace todo | El conocimiento vive solo en su cabeza. No hay procesos, no hay sistema de ventas, el tiempo se va en tareas manuales |
| **Etapa 2 — Grow Up** (6–15 personas) | CEO que no puede delegar | Ingresos impredecibles, procesos inexistentes, cada persona hace las cosas a su manera |
| **Etapa 3 — Speed Up** (16–80 personas) | C-suite descoordinado | Silos entre áreas, decisiones sin datos, crecimiento bloqueado por cuellos de botella humanos |

### Industrias principales
- Seguridad corporativa y de activos
- Entretenimiento y videojuegos
- Organizaciones culturales y civiles
- Instituciones educativas

### Visitante secundario
- Reclutadores o empresas buscando perfil estratégico senior
- Colegas y potenciales socios del ecosistema tech-cultural mexicano

---

## 4. Propuesta de valor central

> *"Tu empresa ya está lista para la IA. El problema es que nadie te ha dicho por dónde empezar."*

### Ventaja única
Dos cosas que raramente vienen juntas en un solo lugar:
- **Claridad estratégica:** diagnóstico de etapa, stack actual y nivel de digitalización — saber qué implementar y en qué orden
- **Equipo técnico:** LHIIS construye e implementa la solución — chatbots, agentes de IA, software a medida

### Beneficios concretos para el cliente
- Reducción de costos operativos
- Escala sin contratar más personas
- Ventaja competitiva: toma decisiones con claridad que su competencia no tiene

### Diferenciadores clave
- Diagnóstico basado en la etapa real de la empresa (ImpactX, Scaling Up, ISO como referencia)
- No vende herramientas — identifica cuál encaja con el stack y la digitalización actual del cliente
- Combina visión estratégica con ejecución real: define el sistema y se queda hasta que corre solo
- Opera desde LHIIS: él es el estratega, LHIIS es el equipo técnico de ejecución

---

## 5. Arquitectura del sitio (v1)

Una sola página (single-page). Sin subpáginas en v1. Deploy en GitHub Pages.
Bilingüe: toggle ES | EN en el nav, cambia todo el contenido sin recargar la página.

```
index.html
│
├── [NAV]   Logo + links + toggle ES|EN + CTA WhatsApp
├── [S1]    Hero
├── [S2]    Ecosistema
├── [S3]    Propuesta de valor  (6 bloques)
├── [S4]    Proyectos
│           ├── Carrusel: Consultoría → Substack
│           └── Bloque: Software y Producto → Gamma / lhiis.com
├── [S5]    Blog  → Substack @heliosrc
├── [S6]    Sobre mí
├── [S8]    CTA final (doble)
└── [FOOT]  Footer + redes sociales
```

### Flujo de conversión esperado

```
Visita → Hero detiene el scroll
       → Ecosistema genera confianza
       → Propuesta de valor responde "¿por qué tú?"
       → Proyectos prueban con hechos reales
       → Blog posiciona como referente con ideas propias
       → Sobre mí construye vínculo humano
       → CTA convierte → WhatsApp o lhiis.com
```

---

## 6. Descripción de secciones

### [NAV] Navegación
- Logo `<=>` + "Elías Rico" a la izquierda
- Links: Proyectos · Blog · Sobre mí · Ecosistema
- **Toggle de idioma: ES | EN** — i18n en JS vanilla, sin recarga
- CTA sticky: "Hablemos" (ES) / "Let's Talk" (EN) → WhatsApp
- Comportamiento: transparente en top, sólido con scroll

### [S1] Hero
- **Eyebrow:** `AI & Innovation Strategist · Ciudad de México`
- **Headline ES:** `Tu empresa ya está lista para la IA. El problema es que nadie te ha dicho por dónde empezar.`
- **Headline EN:** `Your company is already ready for AI. The problem is nobody has told you where to start.`
- **Subtítulo:** dolores por etapa (Etapa 1/2/3 ImpactX) + beneficios: costos, escala, ventaja competitiva (ver contenido.md)
- **CTA principal:** "Hablemos" → WhatsApp `https://wa.me/5215531650560`
- **CTA secundario:** "Ver proyectos" / "See projects" → scroll a S4
- **Visual:** Foto profesional (suéter LHIIS, fondo gris, brazos cruzados)
- **Nota de diseño:** Bullets de resultado en franja destacada con acento magenta antes del CTA

### [S2] Ecosistema
- **Título ES/EN:** `Con quienes construyo` / `Who I build with`
- **Formato:** Grid de logos
- **Tratamiento:** escala de grises con hover a color original
- **Logos confirmados:**
  - LHIIS · HyperBeard Games · Yabem Vehu · BOi
  - A.C. Marmolejo Villa · A.C. Por Ti Mujer
  - Garibaldi · Bohemio Crew · UNAM / Facultad de Derecho · FILCO
  - *(más por agregar)*

### [S3] Propuesta de valor — 6 bloques

| # | Título ES | Título EN |
|---|-----------|-----------|
| 1 | Sabes que algo puede mejorar. Yo encuentro exactamente qué. | You know something can improve. I find exactly what. |
| 2 | Diseño del sistema | System design |
| 3 | Implementación con el equipo | Implementation with your team |
| 4 | Operación autónoma | Autonomous operation |
| 5 | ¿Necesitas software? Primero definimos qué construir. | Need software? First, let's define what to build. |
| 6 | LHIIS construye. Yo implemento con tu equipo. | LHIIS builds. I implement with your team. |

- **Bloque 1:** diagnóstico por etapa ImpactX (1-3) + stack actual + nivel de digitalización — ImpactX, Scaling Up, ISO como referencia
- **Bloques 2 y 3:** diseño e implementación — el sistema tiene que funcionar para las personas que lo usan
- **Bloque 4:** operación autónoma — el objetivo es que no te necesiten
- **Bloques 5 y 6:** entrada al ecosistema LHIIS — definición de alcance y desarrollo técnico

### [S4] Proyectos

#### Carrusel — Consultoría
- Tarjetas con: imagen portada · categoría · título · descripción · CTA "Leer caso" → Substack
- **Proyectos v1:** HyperBeard Games · Yabem Vehu · BOi
- Artículos en Substack: pendientes de publicar (placeholders en v1)

#### Bloque — Software y Producto
- No hay carrusel en v1
- Un bloque con título, descripción y un solo CTA
- **CTA:** "Ver servicios de LHIIS" / "See LHIIS services"
- **Destino:** `https://lhiis-brochure-gv3ee74.gamma.site/brochureservicios`

### [S5] Blog
- **Título ES/EN:** `Ideas que no caben en una reunión.` / `Ideas that don't fit in a meeting.`
- **Formato:** Grid de 3 artículos recientes con imagen · categoría · título · fecha · CTA
- **Temas recurrentes:** IA · Liderazgo · Economía y trabajo · Cultura y tecnología · Videojuegos · Problemas sociales
- **Fuente:** Substack `https://substack.com/@heliosrc`
- **CTA sección:** "Ver escritos" / "Read writing" → `https://substack.com/@heliosrc`
- Artículos en v1: placeholders (conectar con Substack API en v2)

### [S6] Sobre mí
- **Frase esencia:** *"Me importa más entender el problema que impresionar con la solución."*
- **Texto:** breve, 3 párrafos cortos (ver contenido.md)
- **Intereses — chips visuales con emoji:** Gaming indie · Hiking · Espacios culturales · Voluntariado · Historia y filosofía · Problemas sociales · Mariachi y cultura · Startups en etapa temprana
- **Stack — etiquetas:** Claude · Gemini · Agentes de IA · ImpactX · Scaling Up · HCD · Lean UX · Figma
- **Línea de cierre:** ENTJ-A · DISC I · Constructor con raíz cultural · Aprendiz permanente

### [S7] Para quién es (NUEVA)
- **Formato:** 3 bloques por etapa ImpactX con dolor específico de cada una
- **Etapa 1:** Fundador que hace todo — conocimiento solo en su cabeza, sin procesos ni sistema de ventas
- **Etapa 2:** CEO que no puede delegar — ingresos impredecibles, procesos inexistentes, rotación de conocimiento
- **Etapa 3:** C-suite descoordinado — silos, sin datos para decidir, crecimiento bloqueado
- **CTA:** "Hablemos" → WhatsApp

### [S7b] Objeciones frecuentes (NUEVA)
- **Formato:** 4 preguntas frecuentes en acordeón o grid visual
- **Objeción 1:** Mi empresa es muy pequeña → En Etapa 1 es donde más impacto genera la IA
- **Objeción 2:** No es lo mismo que un proveedor de software → La herramienta es el último paso, no el primero
- **Objeción 3:** Cuánto tarda → 4-8 semanas. El diagnóstico solo toma días
- **Objeción 4:** Mi equipo podrá usarlo → El objetivo es que el conocimiento ya no viva solo en una cabeza

### [S8] CTA final
- **Título ES:** Cada semana sin un sistema, tu equipo resuelve lo mismo dos veces.
- **Título EN:** Every week without a system, your team solves the same problem twice.
- **Subtítulo:** 30 minutos. Sin costo. Sin rodeos.
- **Opción A:** "Hablemos" → WhatsApp https://wa.me/5215531650560
- **Opción B:** "Ver LHIIS" → https://lhiis.com

### [FOOT] Footer
- Logo `<=>` + nombre
- Redes: LinkedIn · Twitter/X · Substack · LHIIS
- Tagline ES: `Estrategia + Tecnología + Humanidad · Ciudad de México`
- Tagline EN: `Strategy + Technology + Humanity · Mexico City`
- Copyright: `© 2026 Elías Rico`

---

## 7. Identidad visual

### Assets disponibles
| Asset | Estado | Descripción |
|-------|--------|-------------|
| Logo `<=>` color | ✅ Listo | PNG fondo blanco, gradiente magenta→púrpura |
| Foto profesional | ✅ Lista | Suéter LHIIS, fondo gris, brazos cruzados, 1:1 |
| Brandbook | ✅ Listo | Paleta, tipografía, arquetipos, tono de marca |

### Assets pendientes (ver assets.md)
- Logo versiones: blanca · oscura · favicon · OG Image
- Foto hero sin fondo
- Logos de ecosistema (10 organizaciones)
- Imágenes de portada para tarjetas de proyectos (3 consultoría)
- Imágenes placeholder para blog (3)
- Íconos de propuesta de valor (4)

### Paleta de colores

| Token | Nombre | Hex | Uso |
|-------|--------|-----|-----|
| `--color-base` | Azul Profundo | `#0B0F1A` | Fondo principal |
| `--color-purple` | Morado Tech | `#6D28D9` | Acento primario |
| `--color-violet` | Violeta | `#A855F7` | Acento secundario |
| `--color-magenta` | Magenta | `#EC4899` | Énfasis / CTA |
| `--color-yellow` | Amarillo Humano | `#FBBF24` | Calidez / contraste |
| `--color-gray-light` | Gris Claro | `#E5E7EB` | Texto secundario |
| `--color-white` | Blanco | `#FFFFFF` | Texto principal |

### Gradientes

| Nombre | Definición | Uso |
|--------|-----------|-----|
| Gradiente marca | `#EC4899` → `#6D28D9` | Logo, CTAs, acentos |
| Gradiente hero | `#0B0F1A` → `#1a0533` | Fondo hero |
| Gradiente sutil | `#6D28D9` → `#A855F7` | Bordes, separadores |

### Tipografía

| Rol | Fuente | Peso |
|-----|--------|------|
| Títulos | Montserrat | 700 / 800 |
| Cuerpo | Lato | 400 / 700 |
| Eyebrow / Labels | Montserrat | 500 + letter-spacing 0.15em |

---

## 8. Componentes UI

| Componente | Descripción |
|-----------|-------------|
| `btn-primary` | Gradiente magenta→púrpura · texto blanco · border-radius full · hover: brillo |
| `btn-secondary` | Borde gradiente · fondo transparente · texto blanco · hover: fondo sutil |
| `card-project` | Fondo `#111827` · borde `#1F2937` · hover: borde gradiente |
| `card-blog` | Imagen superior · categoría · título · fecha · link Substack |
| `logo-chip` | Escala de grises · hover: color · transición 300ms |
| `interest-chip` | Pill con emoji + texto · fondo semitransparente · color violeta |
| `nav` | Transparente en top · blur + `#0B0F1A` en scroll |
| `lang-toggle` | Botón ES/EN · Montserrat 500 · estado activo con gradiente |
| `eyebrow` | 12px magenta · Montserrat 500 · letter-spacing 0.15em · uppercase |

---

## 9. Comportamiento y UX

- **Mobile-first:** base 375px · breakpoints 768px y 1280px
- **Scroll suave:** `scroll-behavior: smooth`
- **Nav:** oculta en scroll down, reaparece en scroll up
- **Toggle de idioma:** cambia atributo `lang` del HTML y todos los textos vía data attributes en JS
- **Animaciones:** fade + translateY al entrar en viewport (Intersection Observer, sin librerías)
- **Performance:** PageSpeed ≥ 85 en móvil
- **Sin frameworks:** HTML/CSS/JS vanilla

---

## 10. Stack técnico

| Elemento | Decisión |
|---------|----------|
| Lenguaje | HTML5 + CSS3 + JavaScript ES6 vanilla |
| Fuentes | Google Fonts: Montserrat + Lato |
| Íconos | Heroicons SVG inline |
| Hosting | GitHub Pages (v1) |
| Dominio | GitHub Pages URL → dominio custom en v2 |
| Analytics | Google Analytics 4 — v2 |
| CTA consultoría | WhatsApp `https://wa.me/5215531650560` |
| CTA software | `https://lhiis.com` |
| CTA blog | `https://substack.com/@heliosrc` |
| CTA brochure LHIIS | `https://lhiis-brochure-gv3ee74.gamma.site/brochureservicios` |
| Imágenes | WebP · lazy loading |

---

## 11. Links externos del sitio

| Destino | URL |
|---------|-----|
| WhatsApp | `https://wa.me/5215531650560` |
| LHIIS | `https://lhiis.com` |
| Brochure LHIIS | `https://lhiis-brochure-gv3ee74.gamma.site/brochureservicios` |
| Substack | `https://substack.com/@heliosrc` |
| LinkedIn | `https://linkedin.com/in/elias-rc` |
| Twitter/X | `https://twitter.com/_helios_rc` |

---

## 12. Fases del proyecto

### v1 — MVP (en curso)
- [x] `proyecto.md` — brief completo
- [x] `contenido.md` — textos ES + EN por sección
- [x] `assets.md` — lista de imágenes para Nano Banana
- [ ] Revisión y aprobación de contenidos por Elías
- [ ] Desarrollo HTML/CSS/JS
- [ ] Deploy en GitHub Pages

### v2 — Evolución
- [ ] Dominio custom
- [ ] Calendly integrado
- [ ] Google Analytics 4
- [ ] Substack API — artículos jalados automáticamente
- [ ] Subdominio integrado con LHIIS
- [ ] Casos de éxito individuales como subpáginas

### Proyecto paralelo
- [ ] Mejora progresiva de `lhiis.com`

---

*Documento vivo — actualizar con cada decisión de diseño o contenido.*
