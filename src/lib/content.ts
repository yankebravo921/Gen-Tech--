export const HERO = {
  eyebrow: "THE REVENUE LEAK DIAGNOSTIC — FREE FOR OPERATORS",
  h1: [
    { text: "You're spending more", italic: false },
    { text: "to make less.", italic: true },
    { text: "We find the exact spot in", italic: false },
    { text: "30 minutes.", italic: false }
  ],
  subhead: "Free 30-minute diagnostic. We map your funnel live with you, identify exactly where you're losing money, and send a written audit within 5 days. Pay nothing unless you want us to fix it.",
  primaryCta: { label: "Book the free diagnostic", href: "/book" },
  secondaryCta: { label: "See a sample audit", href: "#funnel-diagnostic" },
  spotsBadge: "1 of 3 May spots left",
  trustLine: "Real audit. Real numbers. You walk away with actionable insight whether you hire us or not."
};

export const PAIN_BEAT = {
  eyebrow: "THE PATTERN WE SEE",
  h2: [
    { text: "You've spent on ads. Hired the agency. Tested the tools.", italic: false },
    { text: "The number hasn't moved.", italic: true }
  ]
};

export const ANNOUNCEMENT = {
  text: "Booking the free Revenue Leak Diagnostic — 1 of 3 May spots left.",
  cta: { label: "Book now", href: "/book" }
};

export const NAV = {
  brand: "Gentech Plus",
  links: [
    { label: "UX & conversion", href: "/websites" },
    { label: "AI support", href: "/ai-agents" },
    { label: "Lead & revenue", href: "/systems" },
    { label: "Diagnostic", href: "/#funnel-diagnostic", active: true }
  ],
  cta: { label: "Book the diagnostic →", href: "/book" }
};

export const FUNNEL_DIAGNOSTIC = {
  header: "Funnel diagnostic — Acme Bookings",
  meta: "session_24180 · 30 days · Apr 27 → May 27",
  badge: "Leak found · stage 2→3",
  disclaimer: "Anonymized sample diagnostic. Real audits use your funnel data.",
  stages: [
    { label: "Visitors", value: 24180, drop: null },
    { label: "Started form", value: 3810, drop: -84 },
    { label: "Booked", value: 412, drop: -89, highlighted: true, recoveryTag: "$184k / mo" },
    { label: "Showed up", value: 301, drop: -27 },
    { label: "Closed", value: 88, drop: -71 }
  ],
  callout: "Booking step is dropping 89% of qualified intent. Calendar widget loads 4.2s slow on mobile. Date picker hidden behind a tab. Estimated recovery: $184k/mo."
};

export const STATS = [
  { value: "$184k", label: "avg leak found per audit" },
  { value: "30 min", label: "live mapping with you" },
  { value: "5 days", label: "to written audit" },
  { value: "3 / mo", label: "new operators we accept" }
];

export const THREE_PLACES = {
  eyebrow: "HOW WE READ A BUSINESS",
  h2: [
    { text: "Three places where money", italic: false },
    { text: "quietly walks out the door.", italic: true }
  ],
  body: "Most operators don't have a traffic problem. They have a leak problem. We diagnose all three at once and tell you which one is costing you the most this month.",
  cards: [
    {
      icon: "cursor",
      label: "UX & FLOWS",
      stat: "3.8s",
      caption: "avg drop point on mobile",
      body: "We map every screen, click, and tap that stands between intent and revenue. The slow form. The hidden CTA. The broken booking widget.",
      href: "/websites"
    },
    {
      icon: "chat",
      label: "SUPPORT VOLUME",
      stat: "62%",
      caption: "tickets that should never exist",
      body: "We watch where customers ask the same question over and over. Each one is a UX bug, a pricing question, or a flow your team is paying to repeat.",
      href: "/ai-agents"
    },
    {
      icon: "filter",
      label: "LEAD QUALITY",
      stat: "1 in 9",
      caption: "leads worth your team's time",
      body: "We score every lead source by close rate, not volume. Then we cut the dead channels and reactivate the ones already in your CRM.",
      href: "/systems"
    }
  ]
};

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

export const FAQ_CONTENT = {
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
      a: "We quote against the cost of the leak. If your bottleneck is costing you $50k/mo, the fix is priced so the math always makes sense. No fixed packages, no retainers you don't need. [Floor price: see Open Decision #3 once set.]"
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

export const FINAL_CTA = {
  eyebrow: "THE DIAGNOSTIC",
  h2: [
    { text: "Book the call. Find the leak.", italic: false },
    { text: "Decide later.", italic: true }
  ],
  body: "Thirty minutes. We map your funnel live. You walk away with a written audit in five days. Pay nothing unless you want us to fix it.",
  cta: { label: "Book the free diagnostic →", href: "/book" },
  spotsBadge: "1 of 3 May spots left"
};

export const FOOTER = {
  brand: "Gentech Plus",
  tagline: "Diagnostic-first AI consulting. We find the leak. We plug it.",
  columns: [
    {
      title: "OFFER",
      links: [
        { label: "The diagnostic", href: "/book" }
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

export const LANDING_PAGES = {
  websites: {
    hero: {
      eyebrow: "UX & CONVERSION OPTIMIZATION",
      h1: [
        { text: "Your website should sell.", italic: false },
        { text: "If it doesn't,", italic: true },
        { text: "we fix it.", italic: false }
      ],
      subhead: "Diagnostic-first redesign of the conversion system. We don't redesign websites. We rebuild the part that's losing you money."
    }
  },
  aiAgents: {
    hero: {
      eyebrow: "AI SUPPORT AGENTS",
      h1: [
        { text: "AI agents that", italic: false },
        { text: "actually do the work.", italic: true }
      ],
      subhead: "Voice agents, WhatsApp agents, customer support agents that complete bookings, resolve tickets, and close loops without burning out a team."
    }
  },
  systems: {
    hero: {
      eyebrow: "LEAD & REVENUE SYSTEMS",
      h1: [
        { text: "Turn every lead", italic: false },
        { text: "into a result.", italic: true }
      ],
      subhead: "Systematic lead qualification. Reactivation of dormant data points. Autonomous AI integration mapping specifically engineered to target and close maximum revenue gaps."
    }
  }
};

export interface OfferContent {
  hero: {
    eyebrow?: string;
    h1: { text: string; italic: boolean }[];
    subhead?: string;
    body?: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    spotsBadge?: string;
    badge?: string;
    trustLine: string;
  };
  diagnosticData: {
    label: string;
    value: number;
  }[];
  highlightStage: number;
  diagnosisText?: string;
  recoveryValue?: string;
  badge?: string;
  solution: {
    eyebrow?: string;
    h2: string;
    bullets: { title: string; description: string }[];
  };
}

export const WEBSITES_OFFER: OfferContent = {
  hero: {
    h1: [
      { text: "Your site looks great.", italic: false },
      { text: "It's not converting.", italic: true },
      { text: "We find the friction in 30 minutes.", italic: false }
    ],
    body: "You're getting traffic but losing them before they book. We map the exact drop-off points.",
    primaryCta: { label: "Book the free diagnostic", href: "/book" },
    secondaryCta: { label: "See a sample audit", href: "#funnel-diagnostic" },
    badge: "1 of 3 May spots left",
    trustLine: "Real audit. Real numbers. You walk away with actionable insight whether you hire us or not."
  },
  diagnosticData: [
    { label: "Visitors", value: 24180 },
    { label: "Started Checkout", value: 5800 },
    { label: "Completed", value: 435 }
  ],
  highlightStage: 1, // index 1 (Started Checkout)
  diagnosisText: "Booking step is dropping 89% of qualified intent. Calendar widget loads 4.2s slow on mobile. Date picker hidden behind a tab.",
  recoveryValue: "$184k / mo",
  badge: "Leak found · stage 2→3",
  solution: {
    eyebrow: "THE SOLUTION",
    h2: "What conversion optimization actually means.",
    bullets: [
      { title: "Heatmap + session replay analysis", description: "We watch exactly where users get confused and abandon the flow." },
      { title: "Friction audit on critical paths", description: "Every click, form field, and transition that stands between them and payment is scrutinized." },
      { title: "Iterative test → measure → ship cycle", description: "We don't guess. We deploy variants, measure the lift, and ship the winner." }
    ]
  }
};

export const AI_AGENTS_OFFER: OfferContent = {
  hero: {
    h1: [
      { text: "Your team answers the same questions all day.", italic: false },
      { text: "Stop paying humans to do that.", italic: true }
    ],
    body: "Customer support shouldn't be a cost center. We build AI that resolves tickets, instantly.",
    primaryCta: { label: "Book the free diagnostic", href: "/book" },
    secondaryCta: { label: "See a sample audit", href: "#funnel-diagnostic" },
    badge: "1 of 3 May spots left",
    trustLine: "Real audit. Real numbers. You walk away with actionable insight whether you hire us or not."
  },
  diagnosticData: [
    { label: "Tickets/mo", value: 12500 },
    { label: "Bot-resolved", value: 1800 },
    { label: "Human-escalated", value: 10700 }
  ],
  highlightStage: 2, // index 2 (Human-escalated)
  diagnosisText: "Tickets are climbing 18% month-over-month while bot deflection is stuck at 14%. Most escalations are repeat questions with answers already in your help docs.",
  recoveryValue: "$94k / mo",
  badge: "Leak found · stage 2→3",
  solution: {
    eyebrow: "THE SOLUTION",
    h2: "What an AI support agent actually does.",
    bullets: [
      { title: "Trained on your real docs + tickets", description: "Not generic GPT. We feed it your historical data so it speaks your brand's truth." },
      { title: "Handoff logic when a human is needed", description: "The agent knows what it doesn't know. It escalates complex issues with full context." },
      { title: "Response time under 30 seconds, 24/7", description: "Zero wait times, across all time zones. Resolutions happen immediately." }
    ]
  }
};

export const SYSTEMS_OFFER: OfferContent = {
  hero: {
    h1: [
      { text: "Leads come in.", italic: false },
      { text: "Then disappear.", italic: true },
      { text: "We rebuild the system that keeps them moving.", italic: false }
    ],
    body: "You're spending to acquire leads, but dropping the ball on follow-up. We fix the plumbing.",
    primaryCta: { label: "Book the free diagnostic", href: "/book" },
    secondaryCta: { label: "See a sample audit", href: "#funnel-diagnostic" },
    badge: "1 of 3 May spots left",
    trustLine: "Real audit. Real numbers. You walk away with actionable insight whether you hire us or not."
  },
  diagnosticData: [
    { label: "Leads", value: 8500 },
    { label: "Contacted within 5min", value: 420 },
    { label: "Booked", value: 85 },
    { label: "Showed", value: 60 }
  ],
  highlightStage: 1, // index 1 (Contacted within 5min)
  diagnosisText: "Leads sit untouched for 47 minutes on average. By minute 5, conversion drops 80%. Your follow-up sequence stops at touch 2.",
  recoveryValue: "$312k / mo",
  badge: "Leak found · stage 1→2",
  solution: {
    eyebrow: "THE SOLUTION",
    h2: "What a working lead system looks like.",
    bullets: [
      { title: "Speed-to-lead under 5 minutes, automated", description: "Every lead is engaged instantly, before they bounce to a competitor." },
      { title: "Multi-touch sequence built around their actual sales motion", description: "SMS, email, and direct outreach calibrated perfectly to how they buy." },
      { title: "Revenue attribution back to source", description: "We tie closed deals directly back to the campaign that generated the click." }
    ]
  }
};
