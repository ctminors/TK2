# Tamava Kava | Brand Style Guide

![Tamava Kava Moodboard](file:///C:/Users/minor/.gemini/antigravity/brain/9ff89e7e-599d-4c4e-8166-f11bc5560acc/tamava_kava_brand_moodboard_1777502543355.png)

## 1. Brand Essence
Tamava Kava is a bridge between ancestral Pacific wisdom and modern wellness rituals. We specialize in high-potency, noble-certified kava sourced directly from family estates in Vanuatu, Fiji, and Tonga.

### Core Values
- **Authenticity**: Honoring traditional cultivars and preparation methods.
- **Transparency**: Lab-certified purity for every single batch.
- **Sustainability**: Direct-trade sourcing that empowers island farmers.
- **Serenity**: Providing a "breath of peace" in a chaotic world.

### Voice & Tone
- **Sophisticated yet Grounded**: Use elevated language ("Ceremonial Series", "Ancestral Wisdom") but remain accessible and respectful of the earth.
- **Authoritative**: Speak with confidence about kavalactones, noble vs. tudei kava, and sourcing practices.
- **Serene**: The copy should feel like a deep breath—calm, steady, and inviting.

---

## 2. Visual Identity

### Color Palette
Our palette is inspired by the volcanic soil of the islands and the warmth of the setting sun.

| Color | Hex | Variable | Usage |
|-------|-----|----------|-------|
| **Kava Black** | `#0D0F0A` | `--color-kava-bg` | Primary background, deep text. |
| **Volcanic Deep**| `#0B0D09` | `--color-kava-deep` | Section backgrounds, trust bars. |
| **Shadow Green** | `#1A1D12` | `--color-kava-dark` | Cards, subtle accents. |
| **Ritual Gold** | `#D4AF37` | `--color-kava-gold` | Headlines, buttons, key CTAs, borders. |
| **Kava Cream**  | `#E5DACE` | `--color-kava-cream`| Primary text, soft highlights. |
| **Island Muted** | `#A8A398` | `--color-kava-muted`| Descriptions, metadata, placeholder text. |

> [!NOTE]
> Use gold sparingly for maximum impact. It should guide the eye to the most important actions.

### Typography
We use a three-tier typography system to balance readability with ceremonial elegance.

- **Display (Headings/Hero)**: `Outfit` (Sans-serif) - Modern, clean, and premium.
- **Serif (Storytelling/Quotes)**: `Playfair Display` - Traditional, elegant, and heritage-focused.
- **Sans (Body/System)**: `Inter` - High legibility for long-form content and technical data.

#### Typographic Scale
- **H1 (Hero)**: 5xl to 7xl, Font: Serif, Light.
- **H2 (Section)**: 4xl to 5xl, Font: Serif, Light.
- **H3 (Subhead)**: 2xl, Font: Serif.
- **Overline**: 10px, Uppercase, Tracking: 0.3em, Font: Display, Bold.
- **Body**: 16px (1rem), Font: Sans, Light/Regular.

---

## 3. Design System & Components

### Layout Principles
- **Atmospheric Depth**: Use `SilkBackground` animations and subtle gradients to create a sense of being in a physical space.
- **Wide Spacing**: Ensure generous whitespace between sections (`py-32` or `py-40`) to maintain a sense of calm.
- **Micro-interactions**: Use `motion` for subtle entry animations (fade up, small y-axis shifts).

### Buttons & Inputs
Buttons should feel like physical objects or premium invitations.

| State | Style |
|-------|-------|
| **Default** | `border border-kava-gold/30 text-kava-gold bg-kava-gold/10` |
| **Hover**   | `bg-kava-gold text-kava-bg` (Full fill transition) |
| **Focus**   | `outline-2 outline-kava-gold outline-offset-2` |

### Imagery
- **Quality**: High-resolution photography only.
- **Tone**: Grayscale or low-saturation with deep shadows.
- **Subject**: Raw roots, coconut bowls (bilis), lush island landscapes, or serene ritual preparation.
- **Effect**: Apply `grayscale brightness-75` by default, revealing color on hover for an interactive "awakening" effect.

---

## 4. Brand Assets
- **Logo**: Located at `/public/logo.png`. Should be used in the Navbar and Footer.
- **Favicon**: Should be a simplified version of the logo or a kava leaf icon.

---

## 5. Accessibility Standards
Branding is for everyone.
- **Contrast**: Maintain AA/AAA contrast ratios (Gold on Black is high contrast).
- **Reduced Motion**: Respect `prefers-reduced-motion` for all silk animations and transitions.
- **Keyboard**: Ensure all focus states are visible using `outline-kava-gold`.
- **Screen Readers**: Use semantic HTML (`<main>`, `<section>`, `<article>`, `<blockquote>`) and descriptive `aria-label` tags.

---

*Last Updated: April 2026*
