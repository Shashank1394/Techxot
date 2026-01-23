# Copilot Instructions

## Project Overview

Next.js 16 (App Router) + TypeScript component library translating Figma designs to code. Uses SCSS (not Tailwind/CSS modules) with React-Bootstrap grid only for layout.

## Architecture

### File Organization

- **Components**: `app/components/<ComponentName>.tsx` — server components by default
- **Styles**: `app/styles/<component-name>/_component-name.scss` — partials imported via `app/globals.scss`
- **Variants**: `app/styles/<component>/_variants.scss` aggregates color/variant partials (e.g., `_faq-accordion-bg-blue.scss`)

### Styling System

```scss
// globals.scss imports partials only — no inline component styles
@use "./styles/faq-accordion/faq-accordion";
@use "./styles/faq-accordion/variants";
```

CSS variables define the palette in `:root`. Use `.bg-base` class to flip theme colors—never override variables inline.

## Component Patterns

### Required Structure

All layout components follow: `div.component-name > Container > Row > Col`

```tsx
// ✅ Correct pattern
<div className="form-wide">
  <Container>
    <Row>
      <Col xs={12} md={6}>
        ...
      </Col>
    </Row>
  </Container>
</div>
```

### Props & Typing

Define types adjacent to component. Use destructuring with defaults:

```tsx
type FaqAccordionProps = { variant?: "bg-black" | "bg-blue" };

export default function FaqAccordion({ variant = "bg-blue" }: FaqAccordionProps) {
  // className composition via filter
  const classes = ["faq-accordion", variant].filter(Boolean).join(" ");
```

### Client vs Server

Add `"use client"` only for interactivity (see `FaqAccordion.tsx` with `useState`). Forms without JS validation stay server-side.

## SCSS Conventions

### Mobile-First Breakpoints

```scss
.component {
  padding: 48px 0; // mobile default

  @media (min-width: 768px) {
    padding: 72px 0;
  } // tablet
  @media (min-width: 992px) {
    padding: 80px 0;
  } // desktop
}
```

**Never use max-width queries.**

### Variant Classes

Variants are modifier classes on root element. Structure in separate partials:

```scss
// _faq-accordion-bg-blue.scss
.faq-accordion.bg-blue {
  background-color: var(--primary-col);
  .faq-title {
    color: var(--text-light);
  }
}
```

### Button/Link Reset Pattern

```scss
.faq-question-btn {
  all: unset;
  cursor: pointer;
  // custom styles...
}
```

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm lint         # Run before commits
```

## Key Rules

- React-Bootstrap for grid only (`Container`, `Row`, `Col`) — no Bootstrap styling components
- Use `next/image` with explicit `width`/`height` for all images
- Single `Row` per component section; adjust columns via `Col` props, not extra rows
- Keep media elements non-interactive: `pointer-events: none; user-select: none`
- All colors via CSS variables; avoid hardcoded hex values
