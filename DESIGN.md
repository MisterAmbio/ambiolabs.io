---
name: Ambio Labs Design System
version: "2.0.0"
spec_version: "google-labs/design.md/v1"
author: "Ambio Labs Design Engineering"
license: "MIT"
tokens:
  color:
    background:
      canvas: "#040907"
      surface: "#08140F"
      surface_elevated: "#0D2018"
      surface_glass: "rgba(13, 32, 24, 0.65)"
      surface_glass_hover: "rgba(18, 44, 33, 0.75)"
      scrim: "rgba(0, 0, 0, 0.85)"
    border:
      subtle: "rgba(22, 56, 43, 0.45)"
      default: "#16382B"
      focus: "#10F5A1"
      highlight: "rgba(16, 245, 161, 0.3)"
    brand:
      primary: "#10F5A1"
      hover: "#05DF88"
      active: "#04C779"
      muted_emerald: "#16382B"
      glow: "rgba(16, 245, 161, 0.35)"
    text:
      primary: "#FFFFFF"
      secondary: "#E2E8F0"
      muted: "#7E9B8F"
      subtle: "#4E695D"
      inverse: "#040907"
  typography:
    sans: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    mono: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, monospace"
    scale:
      hero: "clamp(2.5rem, 5vw, 4.25rem)"
      h1: "clamp(2rem, 4vw, 3rem)"
      h2: "clamp(1.5rem, 3vw, 2.25rem)"
      h3: "1.25rem"
      body: "0.9375rem"
      small: "0.8125rem"
      caption: "0.75rem"
  radii:
    pill: "9999px"
    card: "1.25rem"
    button: "0.625rem"
    badge: "0.375rem"
  motion:
    standard_ease: "cubic-bezier(0.16, 1, 0.3, 1)"
    exit_ease: "cubic-bezier(0.4, 0, 1, 1)"
    duration_fast: "150ms"
    duration_normal: "250ms"
    duration_slow: "400ms"
---

# Ambio Labs — Design System Specification

## 1. Visual Identity & Brand Philosophy
Ambio Labs creates focused native Android micro-utilities. Our visual aesthetic is **Dark Tech, Precision Engineering, and Intentional Minimalism** inspired by Linear, Vercel, and the Apple Developer Portal.

- **Obsidian Dark Theme:** Deep black `#040907` with rich forest undertones `#08140F`.
- **Single Radiant Accent:** Cyber Emerald / Mint `#10F5A1` (<80% saturation, high-contrast readability).
- **Physicality & Tactility:** Low-contrast 1px borders, subtle multi-layered diffuse shadows, frosted glass cards with `backdrop-filter: blur(16px)`.

## 2. Typography Rules
- **Display & Headlines:** `Plus Jakarta Sans` with tightened letter-spacing (`tracking-tight`), `leading-tight`.
- **Technical Specs & Package IDs:** `JetBrains Mono` for package names (`dev.ambiolabs.*`), version tags, metrics, and permissions.
- **Descender Clearance:** All italic or display headlines with descenders (`g`, `y`, `p`, `j`) must use `leading-[1.1]` with padding reservation to prevent clipping.

## 3. Component Architecture
- **Navbar:** Sticky, frosted glass with subtle bottom border. Features studio identity, navigation anchors, and direct Google Play badge.
- **Hero Section:** Clear value proposition, "Published on Google Play" badge, live system status, and technical metrics (`<100MB`, `100% Offline`, `0ms Latency`).
- **Product Bento Grid:** 
  - Each app is showcased with high-res icon, verified developer badge, key feature pills (Kotlin, Jetpack Compose, Offline-First, Zero Ads), interactive screenshot carousel/previews, and direct download links.
  - Package ID with one-click copy function.
- **Privacy & Compliance Module:** Dedicated sections for Google Play Store policy adherence (Permissions explanation, on-device SQLite storage, zero external telemetry).
- **Support & Legal Hub:** Direct `mailto:` link, SLA response expectations, bug reporting format.

## 4. Motion & Micro-interactions (Emil Kowalski Directives)
- **Durations:** Micro-interactions under 200ms; modals and drawers 250-300ms.
- **Easing:** Default to `cubic-bezier(0.16, 1, 0.3, 1)` for entrances; fast `ease-in` for exits.
- **Tactile Feedback:** Buttons scale to `0.98` on `:active` with `-translate-y-[1px]` on hover.
- **Accessibility:** Respect `prefers-reduced-motion` and `prefers-reduced-transparency`.

## 5. Do's and Don'ts
- **DO:**
  - Keep button labels on a single line at all breakpoints.
  - Ensure 100% WCAG AA contrast (text over buttons and cards).
  - Open external links in safe tabs with `rel="noopener noreferrer"`.
  - Maintain standalone privacy policy URLs so Google Play Console accepts them directly.
- **DON'T:**
  - Do NOT use generic purple AI gradient blobs.
  - Do NOT mix serif fonts into technical sans headlines.
  - Do NOT duplicate CTA intent on the same page.
  - Do NOT transmit or store any user data without explicit consent.
