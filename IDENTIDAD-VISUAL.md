# cogniteck — Ficha Técnica de Identidad Visual

Sistema de diseño de la marca madre **cogniteck**, extraído de la web oficial. Esta ficha define cómo debe verse **cualquier solución de la casa** (Cronos incluida) para que todas se sientan parte de la misma familia, sin copiar el mismo diseño exacto entre sí.

---

## 1. Principio de marca

> Cada solución construye su propia identidad sobre la **misma lógica de grilla**. Se reconocen como familia sin repetirse entre sí.

- La marca madre (**cogniteck**) usa una grilla de **4 módulos cuadrados** (2×2).
- Cada solución (empezando por **Cronos**) usa una grilla propia (puede ser cuadrada, de puntos, hexagonal, etc.) pero mantiene la misma **regla de construcción**: elementos repetidos + un elemento distinto que representa el estado o la identidad de esa solución.
- Nunca se reutiliza el símbolo exacto de otra solución. Se reutiliza la **lógica**, no la forma.
- Antes de existir visualmente, una solución en desarrollo se representa con la misma grilla pero en versión **punteada/fantasma** (ver sección 5.3).

---

## 2. Paleta de colores

### Núcleo de marca (fijo, no cambia por solución)

| Color | Hex | Uso |
|---|---|---|
| Navy / Tinta principal | `#17172A` | Texto principal, fondos oscuros (footer, CTA, tarjetas destacadas), ícono base |
| Indigo / Acento de marca | `#5B5FEF` | Acento de cogniteck (marca madre): links, foco, bordes de "módulo abierto" |
| Indigo hover | `#4347C7` | Estado hover de links/acentos indigo |
| Fondo base | `#EEF0F4` | Fondo general de la página |
| Blanco | `#FFFFFF` | Tarjetas, texto sobre fondo oscuro |

### Grises / texto secundario

| Color | Hex | Uso |
|---|---|---|
| `#5B5B70` | Texto de cuerpo (párrafos) |
| `#6B6B80` | Texto terciario / etiquetas pequeñas |
| `#8A8AA0` | Texto muted sobre fondo blanco |
| `#A6A6B8` | Texto disabled / placeholder |
| `#E2E4EC` | Borde estándar de tarjetas |
| `#D6D8E2` | Borde punteado (elementos "en desarrollo") |

### Sobre fondo oscuro (navy)

| Color | Hex | Uso |
|---|---|---|
| `#B9B9CC` | Texto de cuerpo sobre navy |
| `#D6D6E4` | Texto secundario sobre navy |
| `#A6A6C0` | Texto de subtítulo sobre navy |
| `#7A7A93` | Texto terciario sobre navy (copyright, etc.) |
| `#2A2A3D` | Bordes/divisores sobre navy |

### Color de acento por solución

Cada solución tiene **su propio color de acento**, distinto al indigo de la marca madre. Este color se usa solo en el detalle que marca la identidad del símbolo (el "anillo" o elemento distinto) y en badges de estado.

| Solución | Acento | Hex |
|---|---|---|
| cogniteck (marca madre) | Indigo | `#5B5FEF` |
| **Cronos** | Naranja | `#EE9050` |
| Próxima solución | *(a definir cuando se construya)* | — |

**Regla:** el acento de una solución nunca es el mismo que el de otra solución ya existente. El indigo `#5B5FEF` queda reservado exclusivamente para la marca madre (cogniteck) y para elementos genéricos de UI (focos, links, iconografía neutra tipo "implementación", "sistema").

### Color de estado (semántico, no de marca)

| Color | Hex | Uso |
|---|---|---|
| Verde éxito | `#17C778` | Indicadores "en vivo / activo" dentro de un producto (ej. puntos de feature list) |

---

## 3. Tipografía

| Familia | Uso | Pesos usados |
|---|---|---|
| **Instrument Sans** | Titulares, wordmarks, nombres de producto, títulos de tarjeta | 500, 600, 700 |
| **Inter** | Texto de cuerpo, botones, navegación, UI general | 400, 500, 600, 700 |
| **JetBrains Mono** | Etiquetas/badges, texto técnico, captions pequeñas, estados | 400, 500 (600 para labels en mayúscula) |

Carga vía Google Fonts:
```
https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap
```

### Escala tipográfica (referencia, tomada del sitio)

| Elemento | Fuente / peso / tamaño |
|---|---|
| H1 (hero) | Instrument Sans 700, `clamp(34px, 5.2vw, 54px)` / line-height 1.15 |
| H2 (sección) | Instrument Sans 700, 38px / 1.2 |
| Título de tarjeta grande | Instrument Sans 700, 16–20px |
| Wordmark "cogniteck" | Instrument Sans 700, 18–30px, letter-spacing `-0.01em` |
| Cuerpo de texto | Inter 400, 14.5–18px / line-height 1.6–1.7 |
| Botones / CTA | Inter 600, 12.5–14px, letter-spacing `0.02em`, mayúsculas |
| Badge / label mono | JetBrains Mono 600, 10.5–12px, letter-spacing `0.06–0.09em`, mayúsculas |
| Caption técnica | JetBrains Mono 400, 12.5–13px |

**Regla de mayúsculas:** los CTAs y los badges de estado van en MAYÚSCULAS con tracking (letter-spacing) abierto. Los títulos y nombres de producto van en minúscula/normal (ej. "cogniteck", "cronos" siempre en minúscula, nunca "Cronos" con mayúscula inicial en el logo/wordmark).

---

## 4. Formas y geometría

### Escala de border-radius

| Radio | Uso |
|---|---|
| `3px` | Módulos de ícono pequeños (14px) |
| `5–6px` | Módulos de ícono medianos (22–26px) |
| `9px` | Botones pequeños / badges de card oscura |
| `10–11px` | Botones estándar (CTA primario/secundario) |
| `14px` | Módulos de ícono grandes (64px) |
| `16px` | Tarjetas (contenedor estándar) |
| `20px` / `999px` (pill) | Badges de estado, botón de navbar |
| `50%` | Avatares circulares |

### Bordes

- Tarjeta estándar: `1px solid #E2E4EC`
- Tarjeta "en desarrollo" / placeholder: `1–1.5px dashed #D6D8E2`
- Tarjeta destacada (producto disponible o insignia): fondo sólido `#17172A`, sin borde

---

## 5. Sistema de íconos y símbolos

Este es el corazón de la identidad. Todo símbolo de cogniteck se construye con SVG simple (sin ilustraciones complejas, sin gradientes salvo el degradé de marca), sobre una grilla.

### 5.1 — Marca madre (cogniteck)

Grilla 2×2 de módulos redondeados:
- 3 módulos sólidos en `#17172A`
- 1 módulo (posición inferior derecha) **hueco**, solo borde, en el acento de marca `#5B5FEF`

```
[■][■]
[■][□]  ← módulo abierto, borde indigo
```

Representa: la marca madre siempre tiene "un espacio abierto" — la próxima solución en camino.

**Especificación SVG** (viewBox `0 0 30 30`):
```
rect 0,0   12×12 rx3 fill navy
rect 18,0  12×12 rx3 fill navy
rect 0,18  12×12 rx3 fill navy
rect 18.5,18.5 11×11 rx2.5 fill none stroke indigo strokeWidth 2.4
```

### 5.2 — Símbolo de una solución (ej. Cronos)

Grilla de puntos (3×3, usando 8 posiciones) con **un solo elemento distinto** en el color de acento de esa solución:
- 7 puntos sólidos, mismo tamaño, color navy (o blanco sobre fondo oscuro)
- 1 elemento del **mismo tamaño** que los demás, pero **hueco** (solo trazo, ~1.4–2px), en el color de acento de la solución

```
● ● ●
● ○ ●   ← elemento hueco, color de acento de la solución, MISMO tamaño que los puntos
● ● ●
```

**Regla crítica de tamaño:** el elemento distintivo (el "anillo") debe medir **lo mismo** que los demás elementos de la grilla. Solo cambia el estilo (hueco vs. sólido) y el color — nunca el tamaño. Un símbolo donde el elemento de acento es más grande que el resto rompe la lógica de familia y se ve como un error de jerarquía, no como una feature.

**Especificación SVG** (viewBox `0 0 26 26`, radio de punto `r=3`):
```
circle 5,5   r3  fill dotColor
circle 13,5  r3  fill dotColor
circle 21,5  r3  fill dotColor
circle 5,13  r3  fill dotColor
circle 21,13 r3  fill none stroke accentColor strokeWidth 1.4   ← elemento distintivo
circle 5,21  r3  fill dotColor
circle 13,21 r3  fill dotColor
circle 21,21 r3  fill dotColor
```

`dotColor` = `#17172A` sobre fondo claro, `#FFFFFF` sobre fondo oscuro.
`accentColor` = color de acento único de esa solución (Cronos = `#EE9050`).

### 5.3 — Solución en desarrollo (aún sin símbolo definitivo)

Misma grilla que la marca madre, pero:
- Sin relleno, solo borde punteado `2px dashed #D6D8E2`
- Sin color de acento (se define recién cuando el símbolo esté terminado)
- Texto asociado en gris muted (`#A6A6B8`)

Esto se usa como placeholder en la web mientras una solución no tiene marca aún — nunca se inventa un símbolo "de relleno" con color.

### 5.4 — Cómo crear el símbolo de una **nueva** solución

1. Define una grilla base (puede ser cuadrada como la madre, de puntos como Cronos, o una variante propia — hexágonos, triángulos, etc. — siempre geométrica y simple).
2. Elige un color de acento que **no esté usado** por otra solución ni sea el indigo de marca.
3. Un solo elemento de la grilla se distingue del resto (hueco en vez de sólido, o viceversa) en el color de acento — **mismo tamaño que los demás**.
4. El resto de elementos van en navy (fondo claro) o blanco (fondo oscuro), nunca en color.
5. El símbolo debe leerse bien a 24px (navbar/footer) y a 60–70px (tarjetas destacadas).

---

## 6. Componentes UI

### Botones

| Variante | Estilo |
|---|---|
| Primario | Fondo `#17172A`, texto blanco, radius 10–11px, padding `16px 28px`, Inter 600 14px mayúsculas |
| Secundario | Fondo blanco, borde `1px solid #E2E4EC`, texto navy, mismo padding/radius que primario |
| Sobre tarjeta oscura | Fondo blanco, texto navy, radius 9px, padding `12px 20px` |

### Badges / estado

Pill pequeño, fondo = color de acento al 14% de opacidad, borde = color de acento al 35% de opacidad, texto = color de acento sólido, JetBrains Mono 600 10.5px mayúsculas, `border-radius: 20px`.

Estados usados hoy: `EN DESARROLLO`, `PRÓXIMAMENTE`. **No usar** `DISPONIBLE` ni ningún estado que implique que el producto ya tiene clientes activos hasta que sea cierto.

### Tarjetas

| Tipo | Estilo |
|---|---|
| Estándar | Fondo blanco, borde `1px solid #E2E4EC`, radius 16px, padding 28–40px |
| Destacada / producto activo | Fondo sólido `#17172A`, sin borde, radius 16px, texto blanco |
| Placeholder / en desarrollo | Fondo blanco, borde `1.5px dashed #D6D8E2`, radius 16px, contenido en tonos grises |

### Avatares

Círculo 52–56px, fondo `#EEF0FE` (tinte indigo muy claro), inicial en Instrument Sans 700 17–18px, color `#5B5FEF`.

---

## 7. Layout y espaciado

- Ancho máximo de contenido: **1180px**, centrado (`margin: 0 auto`)
- Padding horizontal de sección: **56px** en escritorio, **22px** en móvil (`≤640px`)
- Gap estándar entre tarjetas: **20–24px**
- Grillas de 3 columnas colapsan a 1 columna en `≤1000px`
- El header/nav completo se oculta en `≤640px`, dejando solo logo + CTA

---

## 8. Voz y tono (copy)

Reglas aprendidas al redactar el sitio — aplican a Cronos y a cualquier solución nueva:

1. **Nunca explicar el símbolo en el copy.** El texto no debe decir "el módulo abierto representa..." ni "el anillo naranja significa...". El símbolo se explica solo, visualmente. El copy habla del negocio, no del diseño.
2. **No inventar estados falsos.** Si un producto está en desarrollo, el copy y los badges deben decirlo explícitamente (`EN DESARROLLO`), nunca insinuar que ya tiene clientes o que está "disponible" si no lo está.
3. **Tono directo, sin "ficha técnica".** Frases cortas, en primera persona de la empresa ("construimos", "seguimos construyendo"), no descripciones de manual de marca.
4. **Nombres de producto siempre en minúscula** en el texto (cogniteck, cronos), salvo al inicio de una oración donde el diseño lo pida explícitamente en mayúscula estilizada.

---

## 9. Aplicación a Cronos

Cuando se diseñe la interfaz real del producto Cronos (más allá de la landing), debe heredar:

- Navy `#17172A` + blanco como base neutra, **naranja `#EE9050` como único acento de marca de producto** (para botones primarios dentro de la app, estados activos, highlights).
- Indigo `#5B5FEF` se reserva para elementos que remiten a "cogniteck" como casa (ej. un badge "by cogniteck" en el footer de la app), no para acciones primarias dentro de Cronos.
- Misma escala tipográfica: Instrument Sans para títulos, Inter para UI y datos, JetBrains Mono para timestamps, códigos, estados técnicos (coherente con un producto de control de asistencia).
- Mismo radius scale (16px tarjetas, 10px botones) para que la app y la web de marketing se sientan del mismo sistema.
- Verde `#17C778` para estado "presente", y se deben definir (siguiendo la misma lógica semántica, no de marca) los colores para "tarde" y "ausente" — sugerido: ámbar para tarde, rojo apagado para ausente, evitando que compitan visualmente con el naranja de marca de Cronos.
