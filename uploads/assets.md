# Assets Visuales: Portafolio Personal — Elías Rico
> Versión 1.2 · Abril 2026
> Documento para Nano Banana — especificaciones de imágenes y recursos visuales

---

## Instrucciones generales

- Formato de entrega preferido: **PNG o WebP**
- Resolución mínima: **2x (retina ready)**
- Fondo: según especificación de cada asset
- Paleta de referencia: brandbook Elías Rico (magenta `#EC4899` → púrpura `#6D28D9`, base `#0B0F1A`)
- Estilo general: oscuro, limpio, tecnológico pero humano — no frío, no genérico

---

## 1. Assets disponibles (ya listos)

| Asset | Archivo | Notas |
|-------|---------|-------|
| Logo `<=>` | `logo-elias-rico.png` | PNG fondo blanco, gradiente magenta→púrpura |
| Foto profesional | `foto-elias.jpg` | Suéter LHIIS, fondo gris, brazos cruzados, 1:1 |
| Brandbook completo | Documento aparte | Paleta, tipografía, arquetipos |

---

## 2. Assets por crear

---

### 2.1 Logo versiones adicionales

| ID | Nombre | Especificación | Uso en sitio |
|----|--------|---------------|-------------|
| L-01 | Logo versión blanca | `<=>` todo en blanco, sin gradiente | Nav sobre fondo oscuro |
| L-02 | Logo versión oscura | `<=>` todo en `#0B0F1A` | Para fondos claros si aplica |
| L-03 | Favicon | `<=>` cuadrado 32x32px y 64x64px | Tab del navegador |
| L-04 | OG Image | 1200x630px · logo centrado + tagline sobre fondo `#0B0F1A` con gradiente sutil | Previsualización en redes al compartir el link |

**Copy para OG Image (L-04):**
```
Elías Rico
Estrategia que escala. Tecnología que aterriza.
eliasrico.github.io
```

---

### 2.2 Hero

| ID | Nombre | Especificación | Uso |
|----|--------|---------------|-----|
| H-01 | Foto hero recortada | Foto existente con fondo removido (recorte limpio de silueta) | Composición sobre fondo gradiente del hero |
| H-02 | Fondo hero (opcional) | Textura sutil o patrón geométrico oscuro — no distrae, refuerza el mood tech | Fondo detrás de la foto y el texto |

**Mood H-02:** oscuro, mínimo, puede ser una cuadrícula de puntos o líneas sutiles en `#1a0533` sobre `#0B0F1A`. Sin efectos de luz exagerados.

---

### 2.3 Ecosistema — Logos de aliados

Para cada organización se necesita el logo en dos versiones:

| Versión | Especificación |
|---------|---------------|
| Color original | PNG con fondo transparente, alta resolución |
| Escala de grises | Misma imagen convertida a grises (puede hacerse en CSS, pero tener el PNG listo es mejor) |

**Lista de logos a conseguir / crear:**

| ID | Organización | Estado | Fuente sugerida |
|----|-------------|--------|-----------------|
| ECO-01 | LHIIS | ✅ Disponible | Archivos de la empresa |
| ECO-02 | HyperBeard Games | ⬜ Por conseguir | Sitio oficial / press kit |
| ECO-03 | Yabem Vehu | ⬜ Por conseguir | Contacto directo |
| ECO-04 | BOi | ⬜ Por conseguir | Contacto directo |
| ECO-05 | A.C. Marmolejo Villa | ⬜ Por conseguir | Contacto directo |
| ECO-06 | A.C. Por Ti Mujer | ⬜ Por conseguir | Contacto directo |
| ECO-07 | Garibaldi | ⬜ Por conseguir | Sitio oficial / contacto |
| ECO-08 | Bohemio Crew | ⬜ Por conseguir | Contacto directo |
| ECO-09 | UNAM / Facultad de Derecho | ⬜ Por conseguir | Sitio UNAM (uso institucional) |
| ECO-10 | FILCO | ⬜ Por conseguir | Sitio oficial / contacto |

**Especificaciones para todos los logos del ecosistema:**
- Formato: PNG con fondo transparente
- Ancho mínimo: 400px
- Sin texto adicional, solo el logo/isotipo

---

### 2.4 Proyectos — Imágenes de portada para tarjetas

Cada tarjeta del carrusel necesita una imagen de portada. Dimensiones: **800x450px (16:9)**.

**Estilo general:** oscuro, con elementos visuales que sugieran la industria del proyecto. Puede ser una composición con mockup, ícono grande de la industria, o ilustración abstracta. Fondo oscuro con acentos en la paleta de la marca.

**Contexto de cada proyecto:** las tarjetas representan resultados reales. HyperBeard (videojuegos/diagnóstico organizacional), Yabem Vehu (seguridad/stack de IA comercial), BOi (seguridad/plataforma SaaS). El mood debe reflejar la industria, no ser genérico.

#### Consultoría

| ID | Proyecto | Concepto visual sugerido | Elementos |
|----|---------|------------------------|----------|
| P-C01 | HyperBeard Games | Estética gamer + estrategia | Pantalla de computadora con dashboard de diagnóstico, paleta morada, elementos pixel art sutiles |
| P-C02 | Yabem Vehu | Seguridad + IA | Escudo o candado con circuitos, paleta azul oscuro y magenta, sensación de protección tecnológica |
| P-C03 | BOi | Software de seguridad | Interfaz de app con agentes, paleta oscura con acentos verdes o azules |

#### Software & Producto

> No hay carrusel en v1. El bloque de software dirige al brochure de LHIIS en Gamma.
> No se requieren imágenes de portada para proyectos de software en esta versión.
> Retomar en v2 cuando se documenten casos propios.

---

### 2.5 Blog — Imágenes de portada para artículos

Dimensiones: **800x450px (16:9)**. Estos son placeholders — cuando se publiquen los artículos reales en Substack, cada uno tendrá su propia imagen. Por ahora necesitamos 3 imágenes genéricas que representen los temas del blog.

| ID | Tema | Concepto visual |
|----|------|----------------|
| B-01 | IA & Organizaciones | Diagrama abstracto de red/sistema con personas en los nodos, fondo oscuro |
| B-02 | Estrategia de negocios | Tablero de ajedrez visto desde arriba, paleta oscura con acento magenta |
| B-03 | Cultura & Tecnología | Elementos culturales mexicanos mezclados con código / circuitos, paleta naranja-púrpura |

---

### 2.6 Sobre mí — Foto alternativa (opcional)

| ID | Descripción | Uso |
|----|------------|-----|
| SM-01 | Foto en contexto de trabajo — en computadora, en reunión, o en un espacio | Complementar la foto formal en la sección "Sobre mí" para humanizar más |

**Mood:** natural, no posada. Que se vea a Elías trabajando o pensando, no solo parado.

---

### 2.6b Visual de etapas — Para quién es (NUEVO)

Sección S7 necesita un visual que comunique las 3 etapas de crecimiento. Opciones:

| ID | Formato | Concepto |
|----|---------|---------|
| ET-01 | Ilustración o diagrama | Tres estados de una empresa: 1 persona sola, equipo pequeño descoordinado, estructura con silos. Estilo minimalista, línea, paleta de la marca |
| ET-02 | Íconos por etapa | 3 íconos distintos: Etapa 1 = persona con múltiples sombreros, Etapa 2 = personas con flechas en distintas direcciones, Etapa 3 = estructura organigrama con silos marcados |

**Especificaciones:** SVG o PNG transparente · Estilo de línea coherente con el resto de íconos · Color blanco o gradiente magenta→púrpura

---

### 2.7 Íconos de propuesta de valor

6 íconos para los bloques de la sección "Propuesta de valor". Estilo: línea, trazo limpio, color blanco o gradiente magenta→púrpura.

| ID | Bloque | Concepto del ícono |
|----|--------|-------------------|
| I-01 | Diagnóstico real | Lupa sobre un mapa de proceso o flujo organizacional |
| I-02 | Diseño del sistema | Plano arquitectónico o blueprint con nodos conectados |
| I-03 | Implementación con el equipo | Engrane + silueta de persona o manos construyendo |
| I-04 | Operación autónoma | Flecha circular o cohete despegando — sistema que corre solo |
| I-05 | Definición de alcance con LHIIS | Documento con checkmark o tablero de planeación |
| I-06 | Desarrollo con LHIIS | Bloque de código o pantalla con construcción activa |

**Especificaciones:** SVG o PNG transparente · 200x200px mínimo · mismo estilo entre los 6

---

### 2.8 Íconos de redes sociales (Footer)

> La sección S7 fue eliminada. Las redes sociales aparecen solo en el footer.
> Se necesitan íconos simples, no cards. Versión blanca sobre fondo oscuro.

| ID | Red | Tratamiento |
|----|-----|------------|
| RS-01 | Twitter / X | Logo oficial versión blanca · 24x24px SVG |
| RS-02 | LinkedIn | Logo oficial versión blanca · 24x24px SVG |
| RS-03 | Substack | Logo oficial versión blanca · 24x24px SVG · `https://substack.com/@heliosrc` |

---

## 3. Checklist de entrega

| ID | Asset | Estado | Fecha entrega |
|----|-------|--------|---------------|
| L-01 | Logo blanco | ⬜ | |
| L-02 | Logo oscuro | ⬜ | |
| L-03 | Favicon | ⬜ | |
| L-04 | OG Image | ⬜ | |
| H-01 | Foto hero sin fondo | ⬜ | |
| H-02 | Fondo hero (opcional) | ⬜ | |
| ECO-01..10 | Logos ecosistema | ⬜ | |
| P-C01..C03 | Portadas consultoría | ⬜ | |
| B-01..B03 | Portadas blog (placeholders) | ⬜ | |
| SM-01 | Foto alternativa sobre mí (opcional) | ⬜ | |
| ET-01..02 | Visual de etapas — Para quién es | ⬜ | |
| I-01..I06 | Íconos propuesta de valor (6) | ⬜ | |
| RS-01..RS03 | Íconos redes sociales footer | ⬜ | |

---

## 4. Notas para Nano Banana

- La paleta completa está en el brandbook de Elías Rico
- El mood general es: **oscuro, directo, humano** — no corporativo frío, no startup genérica
- El referente visual más cercano es la combinación entre el pixel art del banner de Twitter de Elías y la limpieza del brandbook
- Cualquier duda sobre uso de la marca, consultar con Elías directamente

---

*Documento vivo — actualizar conforme se entreguen y aprueben los assets.*
