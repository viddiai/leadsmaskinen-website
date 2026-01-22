# Design Reference – Modern Marketing Agency Style

## Översikt

En modern, professionell och konverteringsfokuserad designstil med mörka bakgrunder, starka kontrastfärger och tydlig visuell hierarki. Designen kombinerar premiumkänsla med lättläst innehåll och strategisk användning av socialt bevis. Stilen är datadriven med fokus på resultat, KPI:er och case studies.

**Nyckelkaraktäristik:**
- Mörkt färgschema med ljusa accenter för premium-känsla
- Tydlig typografisk hierarki med stor kontrast mellan rubrik- och brödtextstorlekar
- Generösa whitespace och padding
- Resultat- och sifferfokuserat innehåll
- Stark CTA-kultur med tydliga handlingsuppmaningar

---

## Färgpalett

### Primära färger

| Namn | Hex | RGB | Användning |
|------|-----|-----|------------|
| Navy Dark | `#0A0A1A` | 10, 10, 26 | Primär bakgrund, hero-sektioner |
| Navy Medium | `#12121F` | 18, 18, 31 | Sekundär bakgrund, cards på mörk bg |
| Pure White | `#FFFFFF` | 255, 255, 255 | Primär textfärg på mörk bg |

### Accentfärger

| Namn | Hex | RGB | Användning |
|------|-----|-----|------------|
| Coral Orange | `#FF6B35` | 255, 107, 53 | Primära CTA-knappar, highlights |
| Electric Orange | `#FF8C42` | 255, 140, 66 | Hover-state, sekundära accenter |
| Soft Orange | `#FFB088` | 255, 176, 136 | Subtila accenter, badges |

### Neutrala färger

| Namn | Hex | RGB | Användning |
|------|-----|-----|------------|
| Slate Gray | `#6B7280` | 107, 114, 128 | Sekundär text på ljus bg |
| Light Gray | `#9CA3AF` | 156, 163, 175 | Subtil text, placeholders |
| Border Gray | `#E5E7EB` | 229, 231, 235 | Borders, dividers på ljus bg |
| Off White | `#F9FAFB` | 249, 250, 251 | Ljusa sektionsbakgrunder |

### Semantiska färger

| Namn | Hex | RGB | Användning |
|------|-----|-----|------------|
| Success Green | `#10B981` | 16, 185, 129 | Positiva metrics, checkmarks |
| Info Blue | `#3B82F6` | 59, 130, 246 | Länkar, informativa element |
| Warning Amber | `#F59E0B` | 245, 158, 11 | Varningar, uppmärksamhet |

### Gradient

```css
/* Hero-gradient (subtil) */
background: linear-gradient(135deg, #0A0A1A 0%, #1A1A2E 50%, #0A0A1A 100%);

/* CTA-knapp gradient */
background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%);
```

---

## Typografi

### Font-familjer

| Roll | Font | Fallback | Källa |
|------|------|----------|-------|
| Rubriker | Inter | system-ui, -apple-system, sans-serif | Google Fonts |
| Brödtext | Inter | system-ui, -apple-system, sans-serif | Google Fonts |
| Mono/Kod | JetBrains Mono | monospace | Google Fonts |

**Alternativa val:** Poppins, DM Sans, Manrope

### Rubrikstorlekar

| Element | Desktop | Mobile | Weight | Line-height | Letter-spacing |
|---------|---------|--------|--------|-------------|----------------|
| H1 (Hero) | 56–72px | 36–44px | 700 (Bold) | 1.1 | -0.02em |
| H2 (Sektionsrubrik) | 40–48px | 28–32px | 700 (Bold) | 1.2 | -0.01em |
| H3 (Underrubrik) | 28–32px | 22–24px | 600 (SemiBold) | 1.3 | 0 |
| H4 (Card-rubrik) | 20–24px | 18–20px | 600 (SemiBold) | 1.4 | 0 |
| H5 (Label) | 16–18px | 14–16px | 600 (SemiBold) | 1.4 | 0.02em |
| H6 (Överrubrik/Eyebrow) | 12–14px | 12px | 600 (SemiBold) | 1.4 | 0.1em (uppercase) |

### Brödtext

| Variant | Storlek | Weight | Line-height | Användning |
|---------|---------|--------|-------------|------------|
| Body Large | 18–20px | 400 | 1.7 | Hero-ingress, featured content |
| Body Default | 16px | 400 | 1.6 | Standard brödtext |
| Body Small | 14px | 400 | 1.5 | Sekundär text, metadata |
| Caption | 12px | 400–500 | 1.4 | Labels, fotnoter |

### Specialstilar

```css
/* Överrubrik / Eyebrow */
.eyebrow {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #FF6B35; /* Coral Orange */
}

/* Stor siffra / Statistik */
.stat-number {
  font-size: 48–64px;
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: -0.02em;
}

/* Stat-label */
.stat-label {
  font-size: 14px;
  font-weight: 500;
  color: #9CA3AF;
}
```

---

## Layout

### Grid-system

| Egenskap | Värde |
|----------|-------|
| Kolumner | 12 |
| Max-bredd container | 1280px |
| Gutter (kolumnmellanrum) | 24px (desktop), 16px (mobile) |
| Sidmarginaler | 24–32px (desktop), 16–20px (mobile) |

### Breakpoints

| Namn | Värde | Beskrivning |
|------|-------|-------------|
| xs | < 480px | Små mobiler |
| sm | ≥ 480px | Stora mobiler |
| md | ≥ 768px | Tablets |
| lg | ≥ 1024px | Små skärmar / horisontella tablets |
| xl | ≥ 1280px | Desktop |
| 2xl | ≥ 1536px | Stora skärmar |

### Sektioners vertikala spacing

| Element | Desktop | Mobile |
|---------|---------|--------|
| Mellan sektioner | 80–120px | 48–64px |
| Sektion padding (top/bottom) | 80–100px | 48–64px |
| Rubrik till innehåll | 40–48px | 24–32px |
| Mellan element i grid | 32–48px | 24–32px |
| Mellan stycken | 24px | 16–20px |

### Content-bredder

| Typ | Max-bredd | Användning |
|-----|-----------|------------|
| Full-width | 100% | Hero-bakgrunder, logo-markeringar |
| Wide container | 1440px | Yttre wrapper |
| Default container | 1280px | Standard innehåll |
| Narrow content | 768px | Texttunga sektioner, blogginlägg |
| Extra narrow | 640px | Formulär, modaler |

---

## Komponenter

### Hero Section

**Struktur:**
- Full-width mörk bakgrund (#0A0A1A) med subtil gradient
- Centrerat eller vänsterjusterat innehåll
- Eyebrow-text ovanför huvudrubrik (valfritt)
- Stor H1-rubrik (56–72px)
- Stödjande paragraf / ingress (18–20px, max 2–3 rader)
- CTA-knapp(ar) – primär + sekundär
- Trust-indikatorer under CTA (logos, ratings, "500+ companies")
- Bakgrundselement: subtila former, linjer eller partiklar

**Vertikal padding:** 100–140px top, 80–100px bottom

**Varianter:**
1. **Split hero** – Text vänster, bild/video höger (50/50)
2. **Centrerad hero** – Allt centrerat, bild under
3. **Video hero** – Med inbäddad eller bakgrundsvideo

### Navigation (Navbar)

**Desktop:**
- Höjd: 72–80px
- Bakgrund: Transparent → solid vid scroll (#0A0A1A med 95% opacity + blur)
- Position: Sticky (fixed top)
- Logo vänster, menyitems center eller höger
- CTA-knapp längst till höger
- Mega-meny för komplexa navigationer (dropdowns med flera kolumner)

**Mega-meny:**
- Bakgrund: #12121F eller #FFFFFF
- Max-bredd: 1200px eller anpassad
- Grid-layout med kategorier
- Ikoner vid varje länk (24×24px)
- Featured content / case study-kort i högerkolumn

**Mobile:**
- Höjd: 64px
- Hamburger-ikon höger
- Full-screen overlay eller slide-in drawer
- Accordion för nested navigation

### Footer

**Struktur:**
- Mörk bakgrund (#0A0A1A eller #12121F)
- Logo + kortfattad beskrivning
- Flera kolumner med länkar (Services, Company, Resources, etc.)
- Newsletter-signup
- Social media-ikoner
- Bottom bar: Copyright, Privacy Policy, Terms

**Vertikal padding:** 64–80px top, 32–40px bottom bar

### Cards

**Standard Card:**
```css
.card {
  background: #FFFFFF; /* eller #12121F på mörk bg */
  border-radius: 12–16px;
  padding: 24–32px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid #E5E7EB; /* eller transparent på mörk bg */
}
```

**Case Study Card:**
- Bild överst (aspect ratio 16:9 eller 3:2)
- Logo på bilden (litet, vit eller mörk variant)
- Metrics/KPI:er under bilden (stora siffror + labels)
- Kort beskrivning
- "Read Case Study" länk

**Metrics Card:**
```
+---------------------------+
|  +125%                    |  ← Stor siffra (grön/orange)
|  Increase in CTR          |  ← Label (grå)
+---------------------------+
```

### Buttons

**Primär knapp:**
```css
.btn-primary {
  background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%);
  color: #FFFFFF;
  font-weight: 600;
  font-size: 16px;
  padding: 14px 28px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px -5px rgba(255, 107, 53, 0.4);
}
```

**Sekundär knapp:**
```css
.btn-secondary {
  background: transparent;
  color: #FFFFFF; /* eller #0A0A1A på ljus bg */
  font-weight: 600;
  font-size: 16px;
  padding: 14px 28px;
  border-radius: 8px;
  border: 2px solid #FFFFFF; /* eller #0A0A1A */
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}
```

**Text Link / Ghost:**
```css
.btn-link {
  color: #FF6B35;
  font-weight: 600;
  font-size: 16px;
  padding: 0;
  background: none;
  border: none;
  text-decoration: none;
}

.btn-link:hover {
  text-decoration: underline;
}

/* Med pil */
.btn-link::after {
  content: " →";
  transition: transform 0.2s ease;
}

.btn-link:hover::after {
  transform: translateX(4px);
}
```

**Knappstorlekar:**

| Storlek | Padding | Font-size | Border-radius |
|---------|---------|-----------|---------------|
| Small | 10px 20px | 14px | 6px |
| Default | 14px 28px | 16px | 8px |
| Large | 18px 36px | 18px | 10px |

### Formulär

**Input-fält:**
```css
.input {
  width: 100%;
  padding: 14px 16px;
  font-size: 16px;
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  color: #0A0A1A;
  transition: all 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: #FF6B35;
  box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
}

.input::placeholder {
  color: #9CA3AF;
}

/* På mörk bakgrund */
.input--dark {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
}
```

**Labels:**
```css
.label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #374151;
}
```

### Sektionstitlar

**Standard sektionsrubrik:**
```
    Case Studies                 ← Eyebrow (orange, versaler)
    
    Our Proven Results          ← H2 (stor, vit/svart)
    
    Short supporting text       ← Ingress (grå, max 2 rader)
```

```css
.section-header {
  text-align: center;
  max-width: 768px;
  margin: 0 auto 48px;
}

.section-header__eyebrow {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #FF6B35;
  margin-bottom: 16px;
}

.section-header__title {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 16px;
}

.section-header__subtitle {
  font-size: 18px;
  color: #6B7280;
  line-height: 1.6;
}
```

### Testimonials

**Layout:** Horisontell slider eller 3-kolumns grid

**Kort-struktur:**
- Företagslogo överst
- Citat-text (16–18px, italic valfritt)
- Personbild (cirkel, 48–64px)
- Namn + titel

```css
.testimonial-card {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 32px;
  text-align: left;
}

.testimonial-logo {
  height: 32px;
  margin-bottom: 24px;
  opacity: 0.8;
}

.testimonial-quote {
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 24px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.testimonial-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}
```

### Logo Bar / Trust Section

**Layout:** Horisontell rad eller oändlig marquee-animation

**Specifikationer:**
- Logo-höjd: 24–40px
- Opacity: 50–70% (dämpad för att inte konkurrera med innehåll)
- Gråskala eller original färger
- Gap mellan logos: 48–80px

```css
.logo-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;
  padding: 40px 0;
  flex-wrap: wrap;
}

.logo-bar img {
  height: 32px;
  opacity: 0.6;
  filter: grayscale(100%);
  transition: all 0.3s ease;
}

.logo-bar img:hover {
  opacity: 1;
  filter: grayscale(0%);
}
```

### Comparison Table

**Struktur:** Två kolumner – "Traditional" vs "Our Approach"

```css
.comparison-table {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  background: #E5E7EB;
  border-radius: 16px;
  overflow: hidden;
}

.comparison-cell {
  padding: 24px;
  background: #FFFFFF;
}

.comparison-cell--header {
  font-weight: 600;
  background: #F9FAFB;
}

.comparison-cell--negative {
  color: #6B7280;
}

.comparison-cell--positive {
  color: #0A0A1A;
  font-weight: 500;
}
```

---

## Interaktioner

### Hover-effekter

**Cards:**
```css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
```

**Knappar:**
```css
.btn {
  transition: all 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn:active {
  transform: translateY(0);
}
```

**Länkar:**
```css
.link {
  position: relative;
  transition: color 0.2s ease;
}

.link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #FF6B35;
  transition: width 0.3s ease;
}

.link:hover::after {
  width: 100%;
}
```

### Transitions

| Element | Egenskap | Duration | Easing |
|---------|----------|----------|--------|
| Knappar | transform, box-shadow | 200ms | ease |
| Cards | transform, box-shadow | 300ms | ease |
| Länkar | color, text-decoration | 200ms | ease |
| Modaler | opacity, transform | 300ms | ease-out |
| Navigation | background, opacity | 200ms | ease |
| Accordion | height | 300ms | ease-in-out |

### Scroll-beteenden

**Sticky Navigation:**
```css
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: transparent;
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
}

.navbar.scrolled {
  background: rgba(10, 10, 26, 0.95);
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

**Smooth Scroll:**
```css
html {
  scroll-behavior: smooth;
}
```

**Scroll-reveal Animation:**
```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Loading States

**Button Loading:**
```css
.btn--loading {
  position: relative;
  color: transparent;
  pointer-events: none;
}

.btn--loading::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  left: 50%;
  margin: -10px 0 0 -10px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #FFFFFF;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

**Skeleton Loading:**
```css
.skeleton {
  background: linear-gradient(
    90deg,
    #E5E7EB 0%,
    #F3F4F6 50%,
    #E5E7EB 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

---

## Tonalitet & Microcopy

### Röstton

- **Självsäker men inte arrogant** – Fokus på resultat och bevis
- **Professionell med personlighet** – Inte robotisk eller för formell
- **Resultatfokuserad** – Siffror, procent, konkreta outcomes
- **Handlingsorienterad** – Tydliga uppmaningar, inga vaga löften

### CTA-formuleringar

| Kontext | Primär CTA | Sekundär CTA |
|---------|------------|--------------|
| Hero | "Work With Us" / "Get Started" | "View Case Studies" |
| Tjänst | "Let's Talk" / "Get a Proposal" | "Learn More" |
| Case Study | "Read Full Story" | — |
| Kontakt | "Send Message" / "Schedule Call" | — |
| Newsletter | "Subscribe" / "Join Newsletter" | — |

### Mikrokopia

- **Formulär:** "Work email" istället för bara "Email"
- **Trust signals:** "No commitment" / "Free consultation"
- **Urgency:** "Limited slots available" / "Book this week"
- **Socialt bevis:** "Trusted by 500+ companies" / "4.8★ on [Platform]"

### Statistik-formatering

- Använd `+` för ökningar: "+325% CTR"
- Använd `-` för minskningar (om positivt): "-42% CPL"
- Stora siffror: "65M+ Impressions"
- Monetära: "$3.3M Revenue"

---

## Ikoner & Illustrationer

### Ikonstil

- **Typ:** Outline / Stroke-baserade ikoner
- **Stroke-tjocklek:** 1.5–2px
- **Storlek:** 24×24px (standard), 20×20px (små), 32×32px (feature)
- **Källa:** Lucide, Heroicons, Phosphor Icons
- **Färg:** Anpassas efter kontext (vit på mörk, mörk på ljus, orange för accent)

### Illustrationer

- Abstrakta geometriska former
- Subtila gradient-accenter
- Linjebaserade dekorationer
- Undvik stockfoton – föredra grafik och UI-mockups

---

## Responsiv Design

### Mobile-first Principer

1. Stacka kolumner vertikalt under `md` breakpoint
2. Minska typstorlekar med ~20–30%
3. Reducera padding med ~40%
4. Hamburger-meny under `lg` breakpoint
5. Full-width knappar på mobil
6. Undvik horisontella sliders på mobil (använd vertikal stack)

### Touch Targets

- Minsta touchyta: 44×44px
- Minsta avstånd mellan touch-element: 8px

---

## Accessibility

### Färgkontrast

- Normal text: minst 4.5:1
- Stor text (18px+): minst 3:1
- UI-komponenter: minst 3:1
- Orange (#FF6B35) på mörk (#0A0A1A): ~7.5:1 ✓

### Fokusindikatorer

```css
:focus-visible {
  outline: 2px solid #FF6B35;
  outline-offset: 2px;
}
```

### Reducerad rörelse

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Implementation Notes

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-navy-dark: #0A0A1A;
  --color-navy-medium: #12121F;
  --color-white: #FFFFFF;
  --color-coral: #FF6B35;
  --color-coral-light: #FF8C42;
  --color-gray-500: #6B7280;
  --color-gray-400: #9CA3AF;
  --color-gray-200: #E5E7EB;
  --color-gray-50: #F9FAFB;
  --color-success: #10B981;
  
  /* Typography */
  --font-family: 'Inter', system-ui, -apple-system, sans-serif;
  --font-size-base: 16px;
  --line-height-base: 1.6;
  
  /* Spacing */
  --spacing-section: 100px;
  --spacing-element: 32px;
  --container-max: 1280px;
  --container-padding: 24px;
  
  /* Borders */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  
  /* Transitions */
  --transition-fast: 200ms ease;
  --transition-base: 300ms ease;
}
```

### Tailwind Config (om tillämpligt)

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        navy: { dark: '#0A0A1A', medium: '#12121F' },
        coral: { DEFAULT: '#FF6B35', light: '#FF8C42', pale: '#FFB088' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['40px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['28px', { lineHeight: '1.3' }],
      },
      spacing: {
        'section': '100px',
        'section-mobile': '64px',
      },
      borderRadius: {
        'card': '16px',
      },
    },
  },
}
```
