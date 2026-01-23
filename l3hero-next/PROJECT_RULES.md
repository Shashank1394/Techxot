# Project Formatting & Structure Rules

This document is for any AI/editor touching the codebase. Follow these rules exactly to avoid breaking established patterns.

## Stack & Tooling

- Framework: Next.js (App Router) with TypeScript.
- Styling: Global SCSS compiled to CSS; no CSS modules or Tailwind usage despite dependency. All custom styles live in `app/globals.scss` and `app/variants/*.scss`, then imported once in `app/layout.tsx`.
- Layout helpers: React-Bootstrap grid only for layout containers, not for styling.
- Font: `Inter` via `next/font` configured in `app/layout.tsx`.
- Linting: ESLint extends `eslint-config-next` (core web vitals + TypeScript). Keep configs minimal and aligned with existing setup.
- Scripts: `pnpm dev|build|start|lint` (package.json). Use `lint` before commits.

## HTML Structure Rules

- All components must follow `div -> Container -> Row -> Col` nesting when using layout blocks; do not introduce alternate wrappers.
- Do not use semantic sectioning tags like `<section>`; prefer `<div>` wrappers to keep structure consistent with layout requirements.
- Each component keeps its own SCSS partial under `app/styles/<component>/` and is imported once through `app/globals.scss`; do not inline component styles in `globals.scss` beyond these imports.

- Base hero structure is `div.l3-hero[.variant][.colorScheme] > Container > Row > Col.copy + Col.media`. Keep this exact nesting order: `div -> Container -> Row -> Col`. Do not add extra rows; one row per component.
- Use React-Bootstrap grid for columns: copy column `xs={12} md={12} lg={5}`, media column `xs={12} md={12} lg={{ span: 6, offset: 1 }}`. Preserve this responsive behavior unless a deliberate change is required.
- Avoid Bootstrap-presentational elements (cards, buttons, etc.). Only the grid/container utilities are allowed; all visual styling must come from our SCSS.
- Keep markup minimal: text lives in `.copy` (with `.brow`, `.title`, `.sub-text`, `.cta-list` children); imagery lives in `.media` (either `.frame-img` or `.standard-img`).

## Styling Conventions (SCSS)

- Mobile-first: default rules target mobile; responsive tweaks use **min-width media queries only**. Existing breakpoints: `768px` (tablet padding adjustments) and `992px` (desktop layout/size tweaks). Do not add max-width queries.
- Palette is set via CSS variables in `:root` (`--primary-col #2668ff`, `--accent-col #0639a6`, `--text-dark #000`, `--text-light #fff`, `--background-col #fff`). The `bg-base` class flips background/text roles; prefer updating variables rather than hard-coded colors.
- Component scope: all hero styles are nested under `.l3-hero` to avoid global leakage. Do not introduce global selectors outside this scope unless absolutely required.
- CTA button uses a reset (`all: unset`) and custom styling; links/buttons should follow the `.left-btn`/`.list-anchor` patterns instead of Bootstrap button classes.
- Media column is decorative only: `pointer-events: none`, `user-select: none`, and background shapes rendered with `::before`. Keep this non-interactive behavior for new media elements.
- Overflow handling: root uses `overflow: clip`; maintain to avoid scroll bleed from pseudo-elements.
- Typography weights/sizes are explicit in SCSS (e.g., `.title` 40/48 on mobile, 48/64 on desktop). Keep sizing in SCSS, not inline.
- Keep unit style consistent (px) and border radii (50px on CTA) as in current design.

## Variant System

- Variants are implemented as additional classes on `.l3-hero` (`unified-frame` default, `unified-vertical`, `unified-dot`, `unified-ecosystem`). Each variant lives in its own partial under `app/variants/` and is aggregated by `app/variants/_variants.scss` imported at the bottom of `app/globals.scss`.
- When adding or modifying a variant:
  - Structure styles as `.l3-hero.<variant> { .media { ... } }` with nested selectors.
  - Use pseudo-elements (`.media::before`) for geometric backgrounds; size/position them with `vw` or percentages and keep them behind imagery (`z-index: 0` with images at `z-index: 1`).
  - Maintain mobile-first defaults and add desktop overrides at `min-width: 992px` only.
  - Respect current display rules: `.frame-img` shows only for `unified-frame`; other variants use `.standard-img`.

## Component Behavior

- `L3Hero` props: `variant` union (`unified-frame | unified-vertical | unified-dot | unified-ecosystem`) with default `unified-frame`; optional `colorScheme` currently supports `bg-base`. Pass these as class names only—no inline style overrides.
- Imagery: use `next/image` with the provided assets under `public/assets/` (`frame-img.png`, `standard-img.png`). Keep `priority` on the main hero image.
- Text content is placeholder; keep structure intact even when replacing copy.

## Code Writing Behavior

- Prefer server components; add `"use client"` only when interactivity or client-only libs are needed. Current hero is server-side and should stay that way unless absolutely required.
- Keep components as small, typed functions with local prop types/union literals defined adjacent to the component. Use destructuring with defaults in the signature for default props.
- Compose `className` strings via array `filter(Boolean).join(" ")`; avoid template strings with conditional ternaries scattered inline.
- Avoid inline styles; place all visual rules in SCSS. Avoid adding Bootstrap/Tailwind utility classes for styling.
- Import order: external libs first (`next`, `react-bootstrap`), then assets/utilities, then component-local types/constants. Keep unused imports out.
- Use `next/image` for all raster assets and keep `priority` on primary hero images. Maintain explicit `width`/`height` for layout stability.
- Keep layout/data logic minimal in the component—no state/effects present; introduce hooks only if a concrete interactive requirement emerges.

## Do / Don’t Quick List

- Do keep SCSS authoritative; avoid inline styles and avoid introducing Bootstrap/Tailwind utility classes for visuals.
- Do add new styles in SCSS partials and import through `app/globals.scss`; do not create extra global CSS files.
- Do keep media queries min-width only and extend existing breakpoints when possible.
- Do preserve the single-row grid layout; adjust columns with `Col` props rather than extra rows.
- Don’t add multiple hero rows; don’t swap React-Bootstrap grid for raw HTML without a strong reason.
- Don’t remove `pointer-events: none`/`user-select: none` on media unless interactivity is explicitly needed.
- Don’t change the CSS variable palette directly on elements—use classes like `bg-base` to mutate the theme.

Adhere to these rules for any edits or additions to avoid regressions in layout, styling, or structure.
