/**
 * The Clarity Company — site content
 * Domain: claritycompanyoc.com
 * Brand visual: Design System B (honey + cream + Libre Baskerville)
 * Messaging: StoryBrand SB7 brand script
 *
 * Keep copy plain, warm, specific. No em dashes. Sentence case headings.
 *
 * Conversion wiring (paste live URLs when ready):
 * 1. Calendly Clarity Audit 90 min → links.bookingUrl
 * 2. Stripe Payment Link $997 → links.stripeUrl
 * 3. Optional fit call → links.fitCallUrl
 */
window.SITE = {
  meta: {
    title: "The Clarity Company | Clarity Audit",
    description:
      "Stop guessing where AI belongs. A 90-minute Clarity Audit maps your highest-leverage workflows, ranks your top 3 AI opportunities, and names the first build.",
    domain: "claritycompanyoc.com",
    ogImage: "/og.png",
    canonical: "https://claritycompanyoc.com/",
  },

  analytics: {
    provider: "plausible",
    domain: "claritycompanyoc.com",
    enabled: true,
  },

  brand: {
    company: "The Clarity Company",
    product: "Clarity Audit",
    location: "Orange County, CA",
    wordmark: "/brand/assets/clarity-wordmark.png",
    monogram: "/brand/assets/clarity-monogram.png",
  },

  // StoryBrand brand script (source of messaging)
  storybrand: {
    character:
      "Founders and operators of real service businesses who want AI leverage without more chaos.",
    problemExternal:
      "Work still lives in people's heads. Tools get bolted on where work is loud, not where value is stuck.",
    problemInternal:
      "You feel the drag. You know AI should help. You don't trust another experiment without a map.",
    problemPhilosophical:
      "Clarity should come before automation. Nobody should have to buy tools to find out how their company actually runs.",
    guideEmpathy:
      "We've sat with operators who are tired of tribal knowledge and shiny-object AI.",
    guideAuthority:
      "We map how work creates value, then rank where AI should land first.",
    plan: [
      "Book a Clarity Audit",
      "Map three high-leverage workflows live",
      "Leave with ranked AI moves and one recommended first build",
    ],
    directCta: "Book a Clarity Audit",
    transitionalCta: "Email Jake first",
    success:
      "A clear map of how value moves, a ranked list of AI opportunities, and confidence about what to build first.",
    failure:
      "More tools, more noise, more founder dependence, and no honest picture of where leverage actually is.",
  },

  links: {
    stripeUrl: "",
    bookingUrl: "#book",
    fitCallUrl: "mailto:jake@searchoc.org?subject=Clarity%20Audit%20fit%20call",
    email: "jake@searchoc.org",
    emailHref: "mailto:jake@searchoc.org",
  },

  nav: {
    links: [
      { label: "Problem", href: "#problem" },
      { label: "Plan", href: "#process" },
      { label: "Audit", href: "#audit" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: { label: "Book a Clarity Audit", href: "#book" },
  },

  // 1. Hero: character desire + CTA (no stats / no cards in first viewport)
  hero: {
    eyebrow: "Clarity Audit · $997 · 90 minutes",
    headline: "See how your company actually runs before you automate anything.",
    subhead:
      "You want AI that creates leverage, not another pile of tools. In 90 minutes we map three workflows that matter, rank your top 3 AI opportunities, and name the first build.",
    primaryCta: { label: "Book a Clarity Audit", href: "#book" },
    secondaryCta: { label: "See the plan", href: "#process" },
    trustLine: "Map first. Automate second. Orange County based, remote anywhere.",
  },

  // 2. Problem (external / internal / philosophical)
  problem: {
    eyebrow: "The problem",
    headline: "Most companies don't have an AI problem. They have a clarity problem.",
    body: "Tools are cheap. Advice is everywhere. What's missing is an honest map of how work actually moves: who does what, where time dies, and what creates enterprise value.",
    points: [
      {
        title: "The work lives in people's heads",
        text: "Key steps hide in inboxes, texts, memory, and tribal knowledge. New hires can't see it. Buyers can't price it. You can't scale it.",
      },
      {
        title: "You feel the drag, not the map",
        text: "Owners feel the chaos. Teams feel the fire drills. Without a ranked picture, every AI project becomes another experiment you don't trust.",
      },
      {
        title: "Clarity should come before automation",
        text: "AI should not get bolted on where work is loud. It should land where value is stuck. Map first. Automate second.",
      },
    ],
  },

  // 3. Guide: empathy + authority
  about: {
    id: "guide",
    eyebrow: "Your guide",
    headline: "We help operators see the system before they change the system.",
    body: "Jake Hartson built The Clarity Company for founders who are done guessing. Empathy first: we understand messy, founder-led work. Authority next: we map workflows, score AI opportunities, and recommend one clear first build.",
    note: "Phase one stays narrow on purpose. Master the audit. Implement only after the pattern is proven.",
    bullets: [
      "Orange County based, remote delivery anywhere",
      "Workflow + AI diagnostic focus",
      "Warm, direct, no hype language",
    ],
  },

  // 4. Plan (3 steps)
  process: {
    id: "process",
    eyebrow: "The plan",
    headline: "Three steps. No mystery.",
    intro:
      "A simple path beats a clever one. Here is ours.",
    steps: [
      {
        num: "01",
        title: "Book the Clarity Audit",
        text: "One price. One 90-minute session. A short intake so we don't waste the call on basics.",
      },
      {
        num: "02",
        title: "Map three workflows live",
        text: "Not the whole org chart. Three workflows with weekly cadence, clear owners, and real cost.",
      },
      {
        num: "03",
        title: "Leave with ranked next moves",
        text: "Top 3 AI opportunities scored by impact, effort, and readiness, plus one recommended first build.",
      },
    ],
  },

  // 5. Product / explanatory
  offer: {
    id: "audit",
    eyebrow: "The offer",
    headline: "The Clarity Audit",
    lead:
      "A focused diagnostic for operators who want to understand how their company runs before they automate anything.",
    price: "$997",
    priceNote: "One price. One session. Full recommendation package.",
    promise:
      "In 90 minutes we map three core workflows, identify the top three AI opportunities, and recommend exactly what to do next. We do not implement in phase one.",
    includes: [
      "Live 90-minute working session (recorded)",
      "Map of 3 high-leverage workflows as they actually run",
      "Enterprise-value read: what those workflows make clear about how the company creates value",
      "Top 3 AI opportunity list ranked by impact, effort, and readiness",
      "Recommended first build (the one workflow worth doing first)",
      "Written recommendation pack + recap within 48 hours",
    ],
    notIncluded: [
      "No full-company process encyclopedia",
      "No software install during the audit",
      "No retainer pressure or forced implementation path",
    ],
    guarantee:
      "If we can't give you a clearer map of how value moves in your business and a concrete next recommendation, we refund the audit. Full stop.",
  },

  // 6. Success vs failure
  stakes: {
    eyebrow: "What changes",
    headline: "Success looks like clarity. Failure looks like more noise.",
    successTitle: "If you do this",
    success: [
      "You can show how work becomes money in plain English",
      "You know the top three places AI should land first",
      "You have one recommended first build, not a vague roadmap",
      "Your team shares a picture instead of tribal knowledge",
    ],
    failureTitle: "If you don't",
    failure: [
      "AI spend keeps rising while leverage stays flat",
      "The business stays trapped in a few people's heads",
      "Every new tool adds activity without a decision",
      "Scale and ownership stay harder than they need to be",
    ],
  },

  fit: {
    id: "fit",
    eyebrow: "Fit",
    headline: "Who this is for",
    yesTitle: "This is for you if",
    yes: [
      "You run a real operating business (service, agency, productized ops, or founder-led company)",
      "Work still depends too much on memory, heroes, and you",
      "You want AI, but you want it aimed at the right workflow first",
      "You value a clear map more than a flashy demo",
      "You're willing to look honestly at how the company actually runs",
    ],
    noTitle: "This is not for you if",
    no: [
      "You're pre-revenue or still validating the idea",
      "You want a generic ChatGPT tip list",
      "You want us to implement everything on day one",
      "You're shopping for a PE pitch, not an operating diagnostic",
    ],
  },

  book: {
    id: "book",
    eyebrow: "Call to action",
    headline: "Book the Clarity Audit.",
    body: "Direct path: pay and schedule the session. Prefer a lighter step first? Email one sentence about your business and the workflow that hurts most.",
    price: "$997",
    details: [
      "90-minute live session",
      "Recording included",
      "Recommendation pack in 48 hours",
      "No implementation required",
    ],
    primaryCta: { label: "Book a Clarity Audit", href: "#book" },
    primaryCtaPaid: { label: "Pay $997 and book", href: "#book" },
    secondaryCta: {
      label: "Email Jake first",
      href: "mailto:jake@searchoc.org?subject=Clarity%20Audit",
    },
    footnote:
      "Prefer a quick fit check first? Email jake@searchoc.org with one sentence about your business and the workflow that hurts most.",
    stepsTitle: "What happens after you reach out",
    steps: [
      "Reply with your company, revenue stage, and the workflow that hurts most.",
      "If it's a fit, you'll get scheduling and payment details for the $997 audit.",
      "Complete a short intake so we don't spend the call on basics.",
      "We run the 90-minute session, then send the recommendation pack in 48 hours.",
    ],
    stepsPaid: [
      "Pay the $997 Clarity Audit via the secure Stripe link.",
      "You'll get a scheduling link for the 90-minute session within one business day.",
      "Complete a short intake so we don't spend the call on basics.",
      "We run the session, then send the recommendation pack in 48 hours.",
    ],
  },

  faq: {
    id: "faq",
    eyebrow: "FAQ",
    headline: "Straight answers.",
    items: [
      {
        q: "Do you implement AI in the audit?",
        a: "No. Phase one is diagnostic only. We map, rank, and recommend. Implementation comes later, after we've completed enough audits to make the build path repeatable.",
      },
      {
        q: "Why only three workflows?",
        a: "Because clarity beats coverage. Mapping everything creates noise. Mapping three high-leverage workflows creates a decision. From there we recommend the one best first build.",
      },
      {
        q: "Is this just for tech companies?",
        a: "No. It's for operators with real recurring work: service businesses, agencies, productized operations, founder-led teams where process still lives in people's heads.",
      },
      {
        q: "What do I need to prepare?",
        a: "A short intake form, 90 uninterrupted minutes, and honesty about how work actually moves. Optional: screens or examples from the tools your team lives in every day.",
      },
      {
        q: "What if I already know my bottleneck?",
        a: "Great. The audit still forces the map, the ranking, and the recommendation into something your team can use. Most owners know the pain. Fewer have a decision-ready plan.",
      },
      {
        q: "Will you pressure me into implementation?",
        a: "No. The audit stands alone. If a later build makes sense, we'll talk after you have the map. The early goal is strong audits, not forced retainers.",
      },
    ],
  },

  footer: {
    blurb: "The Clarity Company helps operators see how work creates value, then decide where AI belongs.",
    copyright: "© 2026 The Clarity Company. All rights reserved.",
    links: [
      { label: "Email", href: "mailto:jake@searchoc.org" },
      { label: "Book audit", href: "#book" },
    ],
  },
};
