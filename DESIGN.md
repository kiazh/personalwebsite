# Design

## Color Strategy

Restrained. Tinted neutrals only. No accent color. The type IS the color.

### Light mode
- Background: oklch(94% 0.008 80) — warm parchment, not white
- Foreground: oklch(18% 0.006 80) — near-black, slightly warm
- Muted: oklch(52% 0.006 80)
- Border: oklch(85% 0.007 80)

### Dark mode
- Background: oklch(10% 0.006 80) — deep warm dark, not pure black
- Foreground: oklch(90% 0.006 80)
- Muted: oklch(48% 0.006 80)
- Border: oklch(20% 0.006 80)

## Typography

Primary: EB Garamond (Google Fonts). Single font family for everything. Headings use weight 500–600, body uses 400.

Scale:
- Body: 17px / 1.75 line-height
- Small / muted: 14px
- Hero name: clamp(2.8rem, 6vw, 4.5rem)
- Section labels: 13px, weight 500, letter-spacing 0.05em

No secondary typeface. Garamond handles both prose and headings.

## Layout

Max width 640px, centered. Horizontal padding 24px.
Sections separated by 80px vertical space, no border dividers.
Nav inline at top, not fixed.

## Components

No cards. No badges. No icons from icon libraries.
Links: underline appears on hover only (text-decoration-color transition).
Theme toggle: text ("Light" / "Dark"), not icon.

## Motion

Minimal. Only link underline transitions (150ms ease-out). No entrance animations.
Respect prefers-reduced-motion.
