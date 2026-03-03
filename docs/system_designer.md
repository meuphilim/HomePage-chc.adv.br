# Frontend Design Consistency Guide

*This document serves as the master reference for visual consistency, combining rules from recent orchestration passes and the core `DESIGN_SYSTEM.html`.*

## Foundation & Typography
- **Theme**: Dark mode prioritized (`bg-dark-900` for main background, `bg-dark-800` for panels/cards).
- **Typography Families**: 
  - `Inter` (sans-serif) for body text (`font-sans`).
  - **`EB Garamond`** (serif) for titles/headers/stats (`font-serif`).
  - `JetBrains Mono` or similar (mono) for labels/tags/metadata (`font-mono tracking-widest uppercase`).

## Color Tokens & Z-Index
- **Primary Accent**: Gold.
  - Text: `text-gold-500`, `text-gold-400`.
  - Borders: `border-gold-500/20`, `border-gold-500/30`.
- **Z-Index Stack**:
  - `z-0`: Decorative elements (e.g., `§` macro-typography). **NEVER use `z-20` for decoratives**, as it blocks interactions.
  - `z-10`: Content cards, interactive layers.
  - `z-[70]`: Modal controls (buttons inside lightbox).
  - `z-[10001]`: Full-screen modal overlay.

## Layout & Spacing
- **Section Padding**:
  - Standard/Full Sections: `py-20 md:py-32`
  - Compact Sections (Galleries/Widgets): `pt-12 md:pt-16 pb-12`
- **Flexbox Spacing**:
  - Use `gap-6 lg:gap-8` for card grids.
  - **CRITICAL**: Inside `flex-col gap-*` containers, do NOT use targeted margin-top (`mt-*`) on children. Rely entirely on the container's gap.

## Interactive Elements & Components
- **Cards**:
  - Default borders: `border-white/5`.
  - Inner padding: `p-8`.
  - Hover states MUST transition border color to `hover:border-gold-500/30` or `hover:border-gold-500/40`.
- **Transitions**: 
  - Standard hover transitions MUST use `duration-300` or `duration-500`.
- **CTAs (Buttons)**:
  - External links/Primary: Outline style (`px-8 py-4 border-gold-500/40 text-gold-400 rounded-full`).
  - Internal/Pill badges: Filled or hybrid (`text-xs font-mono bg-dark-900 border-gold-500/30 rounded-full`).

## Gradients
- **Usage**: 
  - ALWAYS use standard Tailwind v3/v4 `bg-gradient-to-*` utilities (e.g., `bg-gradient-to-r from-gold-600 to-transparent`).
  - **DO NOT** use the legacy `bg-linear-to-*` sintax, as it breaks rendering silently in the current build.

## Decorative Elements
- **Section Headers**: 
  - Labels: Eyebrow badges (`bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2`).
  - Titles: `font-serif text-white`.
  - Underline: `w-24 h-1 bg-gradient-to-r from-gold-600 to-transparent rounded-full`.
- **Decorative Section Symbol (`§`)**:
  - Position: Absolute bottom/right or top/left depending on layout.
  - Size/Style: `text-[22rem] font-serif font-bold text-gold-500/5 leading-none select-none pointer-events-none`.

## GSAP Animations Pipeline
- **Memory Safety**: 
  - All GSAP animations MUST be wrapped in `gsap.context()` and properly cleaned up with `ctx.revert()` on component unmount.
- **Standard Entry (Fade-Up ScrollTrigger)**:
  - `duration`: `0.8` (or `1.0` for macro structures like headers).
  - `ease`: `'power3.out'`
  - `stagger`: `0.15` (for lists/cards).
  - `delay`: Used for multi-column entrances (e.g., `0.15` then `0.30`).
- **ScrollTrigger Configurations**:
  - `start: 'top 80%'`: For main section headers.
  - `start: 'top 75%'`: For groups of cards/carousels.
  - `start: 'top 70%'`: For heavy content columns.
- **Modals/Lightboxes**:
  - Fast responsive entries: `duration: 0.3` to `0.5`, using eases like `power2.out` or `back.out(1.5)`.

## Quality Control & Prohibited Patterns
- Nested `w-full` applied directly to `Image` tags wrapper that breaks original aspect ratio scaling logic.
- Negative margins that cause unpredictable overlapping (e.g., `-mt-20`) unless explicitly managed with proper z-indices.
- Full `opacity-100` white borders on dark cards (use fractionals like `/5`).
- Forms missing accessibility labels or "SSL Secure Environment" lock indicators (triggers `ux_audit.py` failures).