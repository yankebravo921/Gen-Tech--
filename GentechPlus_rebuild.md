# GENTECH PLUS WEBSITE REBUILD — BUILD INSTRUCTIONS FOR ANTIGRAVITY

**Version:** 3.0 (Gentech Plus rebrand + phase status update)
**Target tool:** Google Antigravity (public preview)
**Target model:** Claude Opus 4.6 for all phases except Phase 6.5 (3D logo recalibration → use Gemini 3 Pro for spatial/scroll-math debugging).
**Mode:** Plan Mode for every phase. Do not enter Fast Mode.
**Existing repo:** Vite 7 + React 19 SPA, TypeScript, Tailwind 3.4, Framer Motion 12, Three.js 0.182. Running on `localhost:3002`.
**Routing:** `react-router-dom` (already installed).
**Goal:** Diagnostic-first AI consulting agency website — editorial serif design system, Hormozi-grade offer ladder, 3D logo preserved as brand anchor. One conversion event: booked call at `/book`.

## Changelog
- **v3.0** — Rebrand from "Anyflow" to "Gentech Plus" throughout. Font updated from Source Serif 4 to Spectral. Accent orange corrected to #E0533A. ThreeDLogo SHA locked. Phase statuses updated to reflect build reality (Phases 0–9 complete, Phase 10 nearly complete, Phase 6.5 and 11 pending). Per-offer FunnelDiagnostic data added to content spec. Landing page section structure updated with PainBeat and SolutionDetail. Nav updated (Case studies removed). All copy constants reconciled to final spec.
- **v2.0** — Editorial serif overhaul, Hormozi offer structure, 3D logo integration, funnel diagnostic proof section.
- **v1.x** — Initial build.

---

## 0. HOW TO USE THIS FILE

You are an autonomous agent working in Google Antigravity with browser-in-the-loop access. Follow this protocol:

1. **Read this entire file before doing anything.** Do not start coding from any phase until you have scanned all phases and understand the dependency chain.
2. **Save persistent context.** Save the brand positioning, design system, and hard rules to your Antigravity knowledge base. This file replaces all prior versions — v2.0 and v1.x are superseded.
3. **Work in phases, in order.** Each phase has its own Plan Mode plan, its own files, and its own browser verification step. Do not start Phase N+1 until Phase N's verification passes and the user approves.
4. **Browser-verify every phase.** After each phase, navigate to the affected route in the embedded browser, screenshot the change, and produce a verification artifact. Wait for user approval before proceeding.
5. **Ask only when blocked.** If a decision is in Section 12 (Open Decisions), pause and ask. Otherwise follow the spec.
6. **Never invent content.** No placeholder testimonials, no fake stats, no fabricated client logos. Funnel diagnostic visuals use anonymized sample data clearly labeled as such.

---

## 1. BRAND — NON-NEGOTIABLE

**Brand name:** Gentech Plus. Capital G, capital P, one space. No other spelling is acceptable.
- ❌ Anyflow (retired)
- ❌ Gen Tech + (retired)
- ❌ GenTech Plus (wrong capitalization)
- ✅ Gentech Plus

**Positioning:** Diagnostic-first AI consulting agency. Serves operators of businesses doing 7-figures+ where revenue has plateaued or is leaking. Not startups. Not enterprise.

**The wedge:** Free 30-minute Revenue Leak Diagnostic. It is the lead magnet, the sales call, and the proof of competence in one. Removes the qualify / discover / propose / wait cycle entirely.

**Conversion event:** Booked call at `/book`. Every CTA on the site converges on `/book`. No exceptions.

---

## 2. CRITICAL RULES — NEVER VIOLATE

1. **No fabricated social proof.** No fake testimonials, fake client names, fake metrics, fake logos, fake certifications (ISO 27001, GDPR, etc.).
2. **No filler copy.** Every line comes from this spec or matches its register. No generic agency language.
3. **One CTA target:** `/book`. No proliferation of contact forms or alternative CTAs.
4. **ThreeDLogo.tsx is PROTECTED.** Do not modify under any circumstances. SHA-256: `22b0ac34f22d733c0f89eb072836e662234698cc885587f8aa61bbf8198bba85`. All scroll choreography adjustments live in the wrapper inside `BrandMoment.tsx` only.
5. **No new design language without approval.** Editorial serif + lime + cream + black only. See Section 4.
6. **No premature optimization.** Don't refactor the component library, migrate state managers, or add unrequested dependencies.
7. **No grass / leaf / nature imagery anywhere on the site.**
8. **Browser-verify before claiming done.** A phase is not complete until you have navigated to the affected route, taken a screenshot with the URL bar visible at 1280×800, and the screenshot matches the spec.

---

## 3. WORK STATE — PHASE COMPLETION STATUS

### Completed (do not re-execute, do not regress)
- **Phase 0–5:** Foundation, Hero, PainBeat, FunnelDiagnostic, BrandMoment with 3D logo, StatsGrid, ThreePlaces, Timeline, ThreeSolutions, ThePromise. All complete and approved.
- **Phase 6–7:** Folded into Phase 5 overflow. Complete.
- **Phase 8:** FAQ. Complete.
- **Phase 9:** FinalCTA + Footer. Complete.
- **Privacy + Terms placeholder pages:** Complete.

### In Progress
- **Phase 10:** Three offer landing pages (`/websites`, `/ai-agents`, `/systems`). Mostly complete. One fix outstanding — see Section 3.1.

### Not Started
- **Phase 6.5:** 3D logo scroll choreography recalibration. Blocked behind Phase 10 clearance. Use Gemini 3 Pro for this phase.
- **Phase 11:** Polish + Lighthouse QA. Final phase.

### 3.1 — Current Pending Fix (Phase 10)

The `/systems` landing page FunnelDiagnostic renders `LEAK FOUND · STAGE 2→3`. This is wrong. The systems offer leak is at **Stage 1→2** (speed-to-lead: only 5% of leads contacted within the 5-minute window). Fix the `leakStage` prop or equivalent field in the systems offer data constant.

After the fix: re-screenshot all three landing pages at 1280×800 with the browser URL bar visible. URLs must be readable: `localhost:3002/websites`, `localhost:3002/ai-agents`, `localhost:3002/systems`. Each screenshot must show the FunnelDiagnostic section with the leak annotation in frame. Submit as the Phase 10 verification artifact.

---

## 4. DESIGN SYSTEM

### 4.1 — Colors

| Token | Value | Use |
|---|---|---|
| `--color-cream` | `#F5F1EA` | Primary page background |
| `--color-bg-dark` | `#0A0A0A` | Announcement bar, PainBeat, ThePromise, FinalCTA, SolutionDetail |
| `--color-lime` | `#A3E635` | **Only** CTA color. No blue CTAs ever. |
| `--color-text-primary` | `#0A0A0A` | Body text on cream |
| `--color-text-secondary` | `#666666` | Sub-headlines, body copy |
| `--color-text-muted` | `#999999` | Trust lines, footnotes, eyebrow text |
| `--color-border` | `#E5E0D6` / `#DCD9D2` | Card borders, dividers on cream |
| `--color-accent-orange` | `#E0533A` | Eyebrow dots only (● THE PATTERN WE SEE, etc.) |
| Leak bar highlight | `#FF4D2E` | FunnelDiagnostic highlighted bar only |

### 4.2 — Typography

| Element | Font | Treatment |
|---|---|---|
| **Display (H1, H2)** | **Spectral** (Google Fonts variable, italic available) | Mixed case. Italic emphasis on key phrases. H1 ~5–7rem desktop, H2 ~3–4rem desktop. |
| **Eyebrow** | Inter | All caps, tracked-out, ~0.75rem, preceded by filled circle (●) in lime or orange. |
| **Body** | Inter | Sentence case, 1rem–1.125rem, line-height ~1.6. |
| **Numerical / Stats** | Spectral | Large editorial numerals. No uppercase. |
| **Monospace (FunnelDiagnostic metadata)** | JetBrains Mono | session IDs, date ranges only. |

**Italic emphasis is core to the editorial voice.** Headlines always pair roman + italic:
- "You're spending more *to make less.*"
- "Your site looks great. *It's not converting.*"
- "Leads come in. *Then disappear.*"
- "Book the call. Find the leak. *Decide later.*"

### 4.3 — Spacing and Composition

- **Generous whitespace.** Editorial restraint. Calm, not busy.
- **Max content width:** 1280px.
- **Section vertical padding:** ~120px desktop, ~80px tablet, ~48px mobile.
- **No hex patterns, no honeycomb decorations, no nature imagery.**
- **Subtle dividers:** `1px solid var(--color-border)` between major sections.

### 4.4 — 3D Logo (PROTECTED)

`src/components/ThreeDLogo.tsx` is off-limits. SHA-256: `22b0ac34f22d733c0f89eb072836e662234698cc885587f8aa61bbf8198bba85`. Do not modify the component, rotation logic, float animation, SVG load logic, or any Three.js / @react-three/fiber code inside it.

All scroll choreography adjustments for Phase 6.5 live exclusively in the wrapper inside `BrandMoment.tsx`.

**Placement:** Option B — dedicated BrandMoment section between Hero and FunnelDiagnostic. Full-width zone, ~80vh tall, cream background. Eyebrow: "BUILT BY OPERATORS, FOR OPERATORS."

---

## 5. INFORMATION ARCHITECTURE

### 5.1 — Pages

| Route | Status |
|---|---|
| `/` | Complete |
| `/book` | Complete (VITE_BOOKING_URL pending — see Section 12) |
| `/websites` | Phase 10 (fix pending) |
| `/ai-agents` | Phase 10 (fix pending) |
| `/systems` | Phase 10 (leakStage fix pending — see Section 3.1) |
| `/privacy` | Placeholder complete |
| `/terms` | Placeholder complete |
| 404 | Complete |

### 5.2 — Homepage Section Order

1. **TopAnnouncementBar** (dark, sticky)
2. **TopPillNav** (pill, sticky)
3. **Hero**
4. **PainBeat** (dark)
5. **FunnelDiagnostic** — `id="funnel-diagnostic"`
6. **BrandMoment** — 3D logo
7. **StatsGrid**
8. **ThreePlaces** — `id="three-places"`
9. **Timeline**
10. **ThreeSolutions**
11. **ThePromise** (dark)
12. **FAQ**
13. **FinalCTA** (dark)
14. **Footer** (cream)

### 5.3 — Landing Page Section Order (`/websites`, `/ai-agents`, `/systems`)

Same skeleton, offer-specific content injected via props. No duplicated component variants.

1. **TopAnnouncementBar** (shared)
2. **TopPillNav** (shared)
3. **Hero** (offer-specific content prop)
4. **PainBeat** (shared — identical to homepage)
5. **FunnelDiagnostic** (offer-specific data prop)
6. **SolutionDetail** (dark editorial block, 3 numbered columns, no icons — see Section 8.14)
7. **ThePromise** (shared)
8. **FinalCTA** (shared)
9. **Footer** (shared)

### 5.4 — Nav Active Dot Logic

The orange dot (●) in `TopPillNav` appears on the nav item matching the current route:
- `/websites` → dot on "UX & conversion"
- `/ai-agents` → dot on "AI support"
- `/systems` → dot on "Lead & revenue"
- `/` → dot on "Diagnostic"

---

## 6. TECH STACK

- **Framework:** Vite 7 + React 19 SPA, TypeScript ~5.9
- **Styling:** Tailwind CSS 3.4 + CSS variables in `src/index.css`
- **Animation:** Framer Motion 12
- **3D:** Three.js 0.182 + @react-three/fiber + @react-three/drei (ThreeDLogo.tsx only)
- **Routing:** react-router-dom
- **Booking:** `/book` via `import.meta.env.VITE_BOOKING_URL`
- **Path alias:** `@` → `./src`
- **Font:** Spectral (Google Fonts variable, roman + italic)
- **Mono:** JetBrains Mono (FunnelDiagnostic metadata only)

---

## 7. BUILD PLAN — PHASE STATUS DETAIL

### PHASES 0–9 — COMPLETE. DO NOT RE-EXECUTE.

All homepage sections are built and approved. The full component set exists. Do not touch completed sections unless a specific regression fix is requested by the user.

---

### PHASE 10 — Three Offer Landing Pages (IN PROGRESS)

**Status:** Mostly complete. One fix outstanding.

**Outstanding fix:**
Fix the `leakStage` field in the `/systems` offer data constant from Stage 2→3 to **Stage 1→2**. This is a single field value change. Do not touch routing, do not touch other components, do not touch other offer data.

After the fix, re-screenshot all three landing pages per Section 3.1.

**Verification artifact required:**
- Three screenshots at 1280×800 with URL bar visible
- Each shows FunnelDiagnostic section with leak annotation in frame
- Confirmed copy:
  - `/websites`: "Booking step is dropping 89%..." and "$184k / mo" and "STAGE 2→3"
  - `/ai-agents`: "Tickets are climbing 18%..." and "$94k / mo" and "STAGE 2→3"
  - `/systems`: "Leads sit untouched for 47 minutes..." and "$312k / mo" and **"STAGE 1→2"**

---

### PHASE 6.5 — 3D Logo Scroll Choreography Recalibration

**Status:** NOT STARTED. Starts after Phase 10 clears.
**Model:** Switch to Gemini 3 Pro for this phase only. Switch back to Opus 4.6 for Phase 11.
**Hard constraint:** Do NOT modify `ThreeDLogo.tsx`. Only the wrapper inside `BrandMoment.tsx` and any associated scroll hooks.

**Tasks:**
1. At desktop 1280px, measure pixel heights of: Hero, PainBeat, FunnelDiagnostic, BrandMoment, StatsGrid, ThreePlaces, Timeline, ThreeSolutions. Document cumulative scroll positions.
2. Scroll the page slowly. Identify where the logo currently lands versus where it should land (centered in BrandMoment when that section is fully in viewport).
3. Adjust the sticky wrapper height and any `useScroll`/`useTransform` breakpoints so the logo's resting frame aligns with BrandMoment center.
4. Verify at 1920px, 1280px, 768px. Mobile (375px) — if logo wrapper is hidden on mobile in existing code, preserve that behavior.

**Three verification checkpoints — all must pass:**
1. Scroll position 0: logo visible and rotating.
2. Scrolling into BrandMoment: logo descends and centers when BrandMoment enters full viewport.
3. Within BrandMoment: logo stays centered, continues rotating.

**Verification artifact:** `phase-6-5-verification.md` — three labeled screenshots, old wrapper height, new wrapper height, scroll offset changes summary, explicit confirmation ThreeDLogo.tsx SHA unchanged.

---

### PHASE 11 — Polish + Lighthouse QA

**Status:** NOT STARTED. Final phase.

**Tasks:**
1. Lighthouse on `/` (mobile + desktop). Target ≥ 90 across all four scores. Three.js bundle is known heavy (~1.4MB) — lazy-load `ThreeDLogo` via `React.lazy` if Performance score lags.
2. Tab through entire page with keyboard only. Confirm focus order is logical.
3. Test viewports: 375, 768, 1280, 1920.
4. Zero console errors on `/`, `/book`, `/websites`, `/ai-agents`, `/systems`, 404.
5. No CLS on load (Spectral font preload).
6. Contrast check: cream + secondary gray ≥ 4.5:1.
7. `npm run build` — zero TypeScript errors, zero warnings (chunk-size warning acceptable).

**Deliverable:** `phase-11-qa.md` — Lighthouse scores, issue list, screenshots at all four viewport widths.

---

## 8. FULL COPY REFERENCE — `src/lib/content.ts`

All strings below are the authoritative source. `content.ts` must export these exactly. No hardcoded strings in components.

### 8.1 — Announcement Bar

```ts
export const ANNOUNCEMENT = {
  text: "Booking the free Revenue Leak Diagnostic — 1 of 3 May spots left.", // UPDATE MONTHLY
  cta: { label: "Book now", href: "/book" }
};
```

### 8.2 — Top Pill Nav

```ts
export const NAV = {
  brand: "Gentech Plus",
  links: [
    { label: "UX & conversion", href: "/websites" },
    { label: "AI support", href: "/ai-agents" },
    { label: "Lead & revenue", href: "/systems" },
    { label: "Diagnostic", href: "/#hero" }
    // Case studies removed — no real case studies yet
  ],
  cta: { label: "Book the diagnostic →", href: "/book" }
};
```

### 8.3 — Hero (Homepage)

```ts
export const HERO = {
  eyebrow: "THE REVENUE LEAK DIAGNOSTIC — FREE FOR OPERATORS",
  h1: [
    { text: "You're spending more", italic: false },
    { text: "to make less.", italic: true },
    { text: "We find the exact spot in 30 minutes.", italic: false }
  ],
  subhead: "Free 30-minute diagnostic. We map your funnel live with you, identify exactly where you're losing money, and send a written audit within 5 days. Pay nothing unless you want us to fix it.",
  primaryCta: { label: "Book the free diagnostic →", href: "/book" },
  secondaryCta: { label: "See a sample audit", href: "#funnel-diagnostic" },
  spotsBadge: "1 of 3 May spots left", // UPDATE MONTHLY
  trustLine: "Real audit. Real numbers. You walk away with actionable insight whether you hire us or not."
};
```

### 8.4 — Pain Beat

```ts
export const PAIN_BEAT = {
  eyebrow: "THE PATTERN WE SEE",
  body: [
    { text: "You've spent on ads. Hired the agency. Tested the tools.", italic: false },
    { text: "The number hasn't moved.", italic: true }
  ]
};
```

### 8.5 — Funnel Diagnostic (Homepage — default /websites data)

```ts
export const FUNNEL_DIAGNOSTIC_DEFAULT = {
  header: "Funnel diagnostic — Acme Bookings",
  meta: "session_24180 · 30 days · Apr 27 → May 27",
  leakBadge: "LEAK FOUND · STAGE 2→3",
  disclaimer: "Anonymized sample from a real audit. Five stages, one leak, one number that matters.",
  stages: [
    { label: "Visitors", value: 24180, drop: null, highlighted: false },
    { label: "Started Checkout", value: 5800, drop: -76, highlighted: false },
    { label: "Completed", value: 435, drop: -93, highlighted: true, recoveryTag: "$184k / mo" }
  ],
  callout: "Booking step is dropping 89% of qualified intent. Calendar widget loads 4.2s slow on mobile. Date picker hidden behind a tab. Estimated recovery: $184k/mo."
};
```

### 8.6 — Funnel Diagnostic — Per-Offer Data

```ts
export const FUNNEL_DIAGNOSTIC_WEBSITES = {
  header: "Funnel diagnostic — Acme Bookings",
  meta: "session_24180 · 30 days · Apr 27 → May 27",
  leakBadge: "LEAK FOUND · STAGE 2→3",
  disclaimer: "Anonymized sample from a real audit. Five stages, one leak, one number that matters.",
  stages: [
    { label: "Visitors", value: 24180, drop: null, highlighted: false },
    { label: "Started Checkout", value: 5800, drop: -76, highlighted: false },
    { label: "Completed", value: 435, drop: -93, highlighted: true, recoveryTag: "$184k / mo" }
  ],
  callout: "Booking step is dropping 89% of qualified intent. Calendar widget loads 4.2s slow on mobile. Date picker hidden behind a tab. Estimated recovery: $184k/mo."
};

export const FUNNEL_DIAGNOSTIC_AI_AGENTS = {
  header: "Funnel diagnostic — Acme Bookings",
  meta: "session_24180 · 30 days · Apr 27 → May 27",
  leakBadge: "LEAK FOUND · STAGE 2→3",
  disclaimer: "Anonymized sample from a real audit. Five stages, one leak, one number that matters.",
  stages: [
    { label: "Tickets / mo", value: 12500, drop: null, highlighted: false },
    { label: "Bot-resolved", value: 1800, drop: -86, highlighted: false },
    { label: "Human-escalated", value: 10700, drop: null, highlighted: true, recoveryTag: "$94k / mo" }
  ],
  callout: "Tickets are climbing 18% month-over-month while bot deflection is stuck at 14%. Most escalations are repeat questions with answers already in your help docs. Estimated recovery: $94k/mo."
};

export const FUNNEL_DIAGNOSTIC_SYSTEMS = {
  header: "Funnel diagnostic — Acme Bookings",
  meta: "session_24180 · 30 days · Apr 27 → May 27",
  leakBadge: "LEAK FOUND · STAGE 1→2",  // NOTE: Stage 1→2, not 2→3
  disclaimer: "Anonymized sample from a real audit. Five stages, one leak, one number that matters.",
  stages: [
    { label: "Leads", value: 8500, drop: null, highlighted: false },
    { label: "Contacted within 5min", value: 420, drop: -95, highlighted: true, recoveryTag: "$312k / mo" },
    { label: "Booked", value: 85, drop: -80, highlighted: false },
    { label: "Showed", value: 60, drop: -29, highlighted: false }
  ],
  callout: "Leads sit untouched for 47 minutes on average. By minute 5, conversion drops 80%. Your follow-up sequence stops at touch 2. Estimated recovery: $312k/mo."
};
```

### 8.7 — Brand Moment

```ts
export const BRAND_MOMENT = {
  eyebrow: "BUILT BY OPERATORS, FOR OPERATORS"
};
```

### 8.8 — Stats Grid

```ts
export const STATS = [
  { value: "$184k", label: "avg leak found per audit" },
  { value: "30 min", label: "live mapping with you" },
  { value: "5 days", label: "to written audit" },
  { value: "3 / mo", label: "new operators we accept" }
];
```

### 8.9 — Three Places

```ts
export const THREE_PLACES = {
  eyebrow: "HOW WE READ A BUSINESS",
  h2: [
    { text: "Three places where money", italic: false },
    { text: "quietly walks out the door.", italic: true }
  ],
  body: "Most operators don't have a traffic problem. They have a leak problem. We diagnose all three at once and tell you which one is costing you the most this month.",
  cards: [
    {
      label: "UX & FLOWS",
      stat: "3.8s",
      caption: "avg drop point on mobile",
      body: "We map every screen, click, and tap that stands between intent and revenue. The slow form. The hidden CTA. The broken booking widget.",
      href: "/websites"
    },
    {
      label: "SUPPORT VOLUME",
      stat: "62%",
      caption: "tickets that should never exist",
      body: "We watch where customers ask the same question over and over. Each one is a UX bug, a pricing question, or a flow your team is paying to repeat.",
      href: "/ai-agents"
    },
    {
      label: "LEAD QUALITY",
      stat: "1 in 9",
      caption: "leads worth your team's time",
      body: "We score every lead source by close rate, not volume. Then we cut the dead channels and reactivate the ones already in your CRM.",
      href: "/systems"
    }
  ]
};
```

### 8.10 — Timeline

```ts
export const TIMELINE = {
  eyebrow: "WHAT 30 MINUTES LOOKS LIKE",
  h2: "No slides. No discovery questionnaire. We get in your funnel.",
  steps: [
    {
      number: "01",
      time: "00:00 — Map your funnel live",
      body: "You share your screen. We walk every screen of your conversion path with you, in real time. No slides. No surveys."
    },
    {
      number: "02",
      time: "00:18 — Find the leak",
      body: "We point at the exact step where qualified intent is dying. Not a guess. A measurable drop, in dollars per month."
    },
    {
      number: "03",
      time: "00:30 — You walk away",
      body: "You have the leak, the cost, and the rough fix. You decide if you want our written audit. Most do."
    },
    {
      number: "04",
      time: "Day 5 — Written audit",
      body: "A document with the leak, the loss, the proposed fix, the projected lift. Yours to keep. Yours to ignore."
    }
  ]
};
```

### 8.11 — Three Solutions

```ts
export const THREE_SOLUTIONS = {
  eyebrow: "THE THREE SOLUTIONS",
  h2: [
    { text: "After the diagnostic, you choose what to fix.", italic: false },
    { text: "Or nothing at all.", italic: true }
  ],
  cards: [
    {
      number: "01",
      title: "UX & conversion optimization",
      body: "Rebuild the failing booking system. Strip the friction out of the flow customers actually pay you for. Diagnose, fix, ship.",
      features: ["Diagnostic-first redesign", "Booking & checkout rebuilds", "Mobile-first conversion"],
      href: "/websites"
    },
    {
      number: "02",
      title: "AI support agents",
      body: "Agents that complete bookings, resolve tickets, and close loops instantly. Support stops being a cost center and starts being a performance engine.",
      features: ["Resolution, not deflection", "Trained on your real tickets", "Live in 14 days"],
      href: "/ai-agents"
    },
    {
      number: "03",
      title: "Lead & revenue systems",
      body: "Score every lead. Reactivate the dormant ones. Send your team only the conversations that close. Built on the data already in your CRM.",
      features: ["Lead qualification AI", "Reactivation sequences", "Pipeline that pays"],
      href: "/systems"
    }
  ]
};
```

### 8.12 — The Promise

```ts
export const PROMISE = {
  eyebrow: "THE PROMISE",
  h2: "Pay nothing unless you want us to fix it.",
  body: "The diagnostic is free because we're only interested in the operators we can move. If the audit is wrong, you owe us nothing. If we don't hit the projected lift in 90 days, we work for free until we do. That's the whole offer.",
  items: [
    { title: "Free 30-minute live diagnostic", body: "No discovery call. No qualifier form." },
    { title: "Written audit in 5 days", body: "Yours to keep — even if you walk." },
    { title: "90-day lift guarantee", body: "We work free until projected lift lands." },
    { title: "Three operators per month", body: "Hard cap. We say no to most." }
  ]
};
```

### 8.13 — FAQ

```ts
export const FAQ = {
  eyebrow: "QUESTIONS OPERATORS ASK",
  h2: "Before you book the call.",
  items: [
    {
      q: "Why is the diagnostic free?",
      a: "Because we only want the three operators a month we can actually move. If your numbers don't support a real fix, we tell you that on the call and you walk with notes. If they do, both sides know fast.",
      defaultOpen: true
    },
    {
      q: "What do I need before the call?",
      a: "Access to your analytics, your CRM, and your funnel — Calendly, Stripe, whatever you use. We don't want polished slides. We want the raw numbers. The messier the better."
    },
    {
      q: "What if I don't want to hire you?",
      a: "Then you don't. The audit is free either way. We'd rather lose a deal than sell something that won't move your number."
    },
    {
      q: "Why only three new clients per month?",
      a: "Because the diagnostic is real work, not a sales pitch. Three is what we can deliver well. We've watched enough agencies overpromise and burn out — we don't."
    },
    {
      q: "How do I know it's not a sales call?",
      a: "Because we don't pitch on the call. We diagnose. The pitch — if there is one — comes after the written audit, when you've already had time to read it without us in the room."
    },
    {
      q: "What's the cost if I do hire you?",
      a: "We quote against the cost of the leak. If your bottleneck is costing you $50k/mo, the fix is priced so the math always makes sense. No fixed packages, no retainers you don't need. [OPEN DECISION: floor price not yet set — see Section 12]"
    },
    {
      q: "What if the leak isn't AI-shaped?",
      a: "We tell you. Sometimes the fix is in pricing, sales process, or operations — not technology. If AI isn't the right tool, we'll say so on the call. We have nothing to sell when we're wrong about the diagnosis."
    },
    {
      q: "What's your tech stack?",
      a: "n8n, Make, Voiceflow, Vapi, ElevenLabs, OpenAI / Anthropic / Google APIs, Twilio, WhatsApp Business, Cal.com, Webflow, Next.js, Postgres, custom code. We pick the tool that fits the leak — never the other way around."
    }
  ]
};
```

### 8.14 — Final CTA

```ts
export const FINAL_CTA = {
  eyebrow: "THE DIAGNOSTIC",
  h2: [
    { text: "Book the call. Find the leak.", italic: false },
    { text: "Decide later.", italic: true }
  ],
  body: "Thirty minutes. We map your funnel live. You walk away with a written audit in five days. Pay nothing unless you want us to fix it.",
  cta: { label: "Book the free diagnostic →", href: "/book" },
  spotsBadge: "1 of 3 May spots left" // UPDATE MONTHLY
};
```

### 8.15 — Footer

```ts
export const FOOTER = {
  brand: "Gentech Plus",
  tagline: "Diagnostic-first AI consulting. We find the leak. We plug it.",
  copyright: "© 2026 Gentech Plus",
  columns: [
    {
      title: "OFFER",
      links: [
        { label: "The diagnostic", href: "/book" },
        { label: "Case studies", href: "/case-studies" }, // placeholder, no real case studies yet
        { label: "About", href: "/about" }
      ]
    },
    {
      title: "PROOF",
      links: [
        { label: "Sample diagnostic", href: "/#funnel-diagnostic" },
        { label: "How we read a business", href: "/#three-places" }
      ]
    },
    {
      title: "COMPANY",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Contact", href: "/book" }
      ]
    }
  ]
};
```

### 8.16 — Landing Page Heroes (Offer-Specific)

```ts
export const LANDING_HEROES = {
  websites: {
    eyebrow: "UX & CONVERSION OPTIMIZATION",
    h1: [
      { text: "Your site looks great.", italic: false },
      { text: "It's not converting.", italic: true },
      { text: "We find the friction in 30 minutes.", italic: false }
    ],
    subhead: "Diagnostic-first conversion audit. We don't redesign websites. We rebuild the part that's losing you money.",
    primaryCta: { label: "Book the free diagnostic →", href: "/book" },
    spotsBadge: "1 of 3 May spots left"
  },
  aiAgents: {
    eyebrow: "AI SUPPORT AGENTS",
    h1: [
      { text: "Your team answers the same questions all day.", italic: false },
      { text: "Stop paying humans to do that.", italic: true }
    ],
    subhead: "AI agents trained on your real docs and tickets. Bot deflection that actually works. Live in 14 days.",
    primaryCta: { label: "Book the free diagnostic →", href: "/book" },
    spotsBadge: "1 of 3 May spots left"
  },
  systems: {
    eyebrow: "LEAD & REVENUE SYSTEMS",
    h1: [
      { text: "Leads come in.", italic: false },
      { text: "Then disappear.", italic: true },
      { text: "We rebuild the system that keeps them moving.", italic: false }
    ],
    subhead: "Speed-to-lead under 5 minutes. Multi-touch follow-up built around your actual sales motion. Revenue attribution back to source.",
    primaryCta: { label: "Book the free diagnostic →", href: "/book" },
    spotsBadge: "1 of 3 May spots left"
  }
};
```

### 8.17 — Solution Detail (Landing Pages — 3 Numbered Columns, Dark Block)

```ts
export const SOLUTION_DETAIL = {
  websites: {
    eyebrow: "HOW WE FIX IT",
    h2: "Three things we do after the diagnostic.",
    columns: [
      {
        number: "01",
        title: "Heatmap + session replay analysis",
        body: "We watch real sessions — where users stop, where they rage-click, where they abandon. No guessing."
      },
      {
        number: "02",
        title: "Friction audit on critical paths",
        body: "Every step between intent and payment. Booking flows, checkout, mobile forms. We document every drop point."
      },
      {
        number: "03",
        title: "Iterative test → measure → ship",
        body: "We fix the highest-leverage drop point first. Measure. Then move to the next. No big-bang redesigns."
      }
    ]
  },
  aiAgents: {
    eyebrow: "HOW WE FIX IT",
    h2: "Three things we do after the diagnostic.",
    columns: [
      {
        number: "01",
        title: "Trained on your real docs + tickets",
        body: "We use your actual help content and closed ticket history. Not a generic bot. Trained on the questions your customers actually ask."
      },
      {
        number: "02",
        title: "Handoff logic when a human is needed",
        body: "The agent knows when to escalate. Edge cases, billing disputes, anything outside its confidence threshold goes to your team with full context."
      },
      {
        number: "03",
        title: "Response time under 30 seconds, 24/7",
        body: "No queue. No wait. Instant resolution for the 86% of tickets that are repeat questions."
      }
    ]
  },
  systems: {
    eyebrow: "HOW WE FIX IT",
    h2: "Three things we do after the diagnostic.",
    columns: [
      {
        number: "01",
        title: "Speed-to-lead under 5 minutes, automated",
        body: "We rebuild the intake so every lead gets a response before the 5-minute window closes. That window is where 80% of conversion lives."
      },
      {
        number: "02",
        title: "Multi-touch sequence built around your sales motion",
        body: "Not a generic drip. Sequences that mirror how your best reps actually close, extended across every lead automatically."
      },
      {
        number: "03",
        title: "Revenue attribution back to source",
        body: "You see exactly which channel, which sequence, and which touch closed each deal. No more spending on volume and hoping."
      }
    ]
  }
};
```

---

## 9. DEFINITION OF DONE

- [ ] All phases executed and individually approved.
- [ ] No fabricated testimonials, stats, client logos, or trust badges.
- [ ] Every CTA on the site links to `/book`.
- [ ] TopAnnouncementBar + TopPillNav visible on all routes.
- [ ] Brand name reads "Gentech Plus" everywhere. No "Anyflow," no "Gen Tech +."
- [ ] "Case studies" is NOT in the TopPillNav (removed until real case studies exist).
- [ ] 3D logo choreography lands correctly in BrandMoment at desktop. Verified screenshots.
- [ ] ThreeDLogo.tsx SHA-256 unchanged: `22b0ac34f22d733c0f89eb072836e662234698cc885587f8aa61bbf8198bba85`.
- [ ] All copy served from `src/lib/content.ts`. No hardcoded strings in components.
- [ ] Spectral is loaded and applied to H1/H2. No Anton usage.
- [ ] `/systems` FunnelDiagnostic shows STAGE 1→2, not STAGE 2→3.
- [ ] No nature/grass/leaf imagery anywhere.
- [ ] No blue CTAs anywhere. Lime (#A3E635) only.
- [ ] Lighthouse ≥ 90 mobile (Performance, Accessibility, Best Practices, SEO).
- [ ] Zero console errors on any route.
- [ ] Production build: zero TypeScript errors.

---

## 10. WHAT NOT TO DO

- ❌ Do NOT write "Anyflow" anywhere. The brand is Gentech Plus.
- ❌ Do NOT add Case studies to the nav — removed until real case studies exist.
- ❌ Do NOT use blue for CTAs. Lime (#A3E635) only.
- ❌ Do NOT modify `ThreeDLogo.tsx`. SHA is locked.
- ❌ Do NOT add grass, leaf, or nature imagery anywhere on the site.
- ❌ Do NOT add fake trust badges (ISO, GDPR, etc.).
- ❌ Do NOT add fabricated testimonials, case study stats, or client logos.
- ❌ Do NOT introduce new color tokens beyond Section 4.1.
- ❌ Do NOT add a contact form. All CTAs go to `/book`.
- ❌ Do NOT add newsletter signups, blogs, or live chat widgets.
- ❌ Do NOT migrate the framework, styling system, or animation library.
- ❌ Do NOT use Anton or any all-uppercase brutalist typography for H1/H2.
- ❌ Do NOT add hex patterns or honeycomb decorations.

---

## 11. POST-BUILD: WHAT V4 ADDS (OUT OF SCOPE NOW)

- Real case studies (require closing 1–2 pilots first).
- Real testimonials.
- Full deep landing pages for each offer.
- Conversion tracking instrumentation.
- A/B testing framework for the hero.
- Blog / Insights section.

---

## 12. OPEN DECISIONS — PENDING USER ACTION

1. **VITE_BOOKING_URL** — Not set. `/book` route shows fallback. User needs to set up Cal.com or Calendly and add URL to `.env.local` before launch.
2. **Privacy Policy + Terms of Service** — Current pages are placeholders. Real documents needed before cold email outreach launches. Generate via Termly or iubenda.
3. **Floor price (FAQ item 6)** — Bracketed placeholder in FAQ copy. User must provide the actual number before this answer goes live.
4. **Real case studies** — None exist yet. "Case studies" link in footer and `/case-studies` route are placeholders. Nav link removed until content exists.

---

*End of build instructions, v3.0. This file supersedes all prior versions (v2.0, v1.x). Replace the knowledge base entry.*