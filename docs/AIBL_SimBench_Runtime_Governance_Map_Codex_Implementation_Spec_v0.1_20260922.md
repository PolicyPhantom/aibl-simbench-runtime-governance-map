# AIBL / SimBench Runtime Governance Map
## Codex Implementation Specification v0.1

**Status:** Implementation-ready draft  
**Date:** 2026-09-22 (JST)  
**Intended implementer:** Codex  
**Primary purpose:** Build a local, self-contained HTML knowledge-navigation interface for AIBL / SimBench.  
**Design role:** Personal cognition aid first; public-facing explanatory utility second.  
**Research basis:** AIBL research series v5.0 and Supplement S1, plus the completed SimBench Phase 0–4 artifact and the separate Post-Phase4 Automation Sprint.

---

# 1. Product Intent

Build a lightweight interactive HTML interface that helps a reader quickly recover the conceptual structure of AIBL / SimBench, then progressively drill down into runtime semantics, evidence boundaries, the SimBench phase structure, theory feedback, question framing, and separate post-Phase4 automation tooling.

The interface is **not** a live simulator, execution demo, benchmark runner, research dashboard, or replacement for the paper.

The product should behave like a **visual research map / cognition navigator**:

1. restore the overall research position within ~5 seconds;
2. show where a concept belongs;
3. allow a reader to open focused detail without losing the surrounding map;
4. preserve AIBL v5.0 claim boundaries;
5. remain easy to extend later without redesigning the entire top-level page.

A guiding interaction principle:

> **Top = recover orientation.  
> Middle = locate the concept.  
> Detail = understand and inspect.**

---

# 2. Core Research Structure to Preserve

The visual backbone must be the following research loop:

```text
AIBL Concept
    ↓
Operational Translation
    ↓
Executable Semantics
    ↓
SimBench v1.0.0
    ↓
Evidence / Inspection
    ↓
Theory Feedback
    ↺ back to AIBL refinement
```

This loop is the primary mental model of the page.

The implementation must **not** present SimBench as the end of the process. Theory feedback must visibly return to the conceptual layer.

The page should communicate that the research question is approximately:

> **What happens when governance concepts have to become executable?**

The implementation must not imply:

- a new universal runtime-authorization architecture;
- proof of real-world Physical AI safety;
- production readiness;
- certification-equivalent assurance;
- general open-world validity;
- superiority over adjacent runtime-governance work.

---

# 3. UI Language

## 3.1 Primary UI language

Use **English as the primary visible UI language** for v0.1.

Reason:
- AIBL v5.0 and SimBench public materials are English;
- the interface may later be shown publicly;
- the currently accepted labels and conceptual terms are already English.

Avoid long academic prose in the persistent UI. Keep explanatory text short and plain.

## 3.2 Japanese

Do not build full localization in v0.1.

Architecture should not make future localization difficult, but no i18n framework or language switcher is required.

---

# 4. Technical Constraints

Implement as a self-contained static site.

## Required

- plain HTML5;
- plain CSS;
- plain JavaScript;
- no framework;
- no build tool;
- no Node dependency;
- no CDN;
- no external JavaScript;
- no external icon library;
- no external font dependency;
- must work by opening `index.html` locally;
- responsive on desktop, tablet, and mobile;
- keyboard accessible;
- usable without network access.

## Preferred file structure

```text
aibl-runtime-governance-map/
├─ index.html
├─ styles.css
├─ app.js
├─ content.js
├─ README.md
└─ assets/
   └─ optional-local-svg-or-png-only
```

`content.js` should contain editable structured text/data where practical so future content updates do not require large DOM rewrites.

Do not over-engineer the data model.

---

# 5. Overall Page Architecture

The page has five major UI layers:

```text
Layer 1 — Hero / Research Loop
Layer 2 — Four Mini-Map Cards
Layer 3 — Cross-cutting Tooling Strip
Layer 4 — Detail Drawer
Layer 5 — Focus View
```

Cross-cutting entry points:

```text
Question Map
Automation & Tooling
Claim Boundary
```

The persistent page must remain visually calm even though detail views may contain significant information.

---

# 6. Visual Direction

## 6.1 Overall tone

Use the same general visual world as the existing LinkedIn research cover:

- warm white / off-white background;
- pale blue as the main structural accent;
- small amount of soft green for feedback / confirmation / return paths;
- light gray-blue for technical or secondary structure;
- subtle watercolor-like texture or wash;
- research-poster / research-notebook atmosphere;
- soft, restrained, human-made feeling.

Avoid:

- black cyberpunk backgrounds;
- neon glow;
- terminal/hacker aesthetics;
- glassmorphism overload;
- excessive gradients;
- excessive blur;
- high-contrast glowing borders;
- huge animated counters;
- game HUD styling;
- dashboard clutter;
- stock “AI brain” imagery.

The UI may have **gadget-like interaction**, but it must not look like a sci-fi control room.

## 6.2 OSAKA easter eggs

Small Osaka-related visual jokes are allowed.

Examples:
- faint Osaka Castle silhouette;
- river / city linework;
- tiny takoyaki line icon;
- subtle steamed bun motif;
- very small “Mapped in Osaka” footer text.

Rules:
- easter eggs must never distract from research content;
- no protected brand logo or trademark styling;
- keep them subtle enough that a first-time reader may not notice immediately.

## 6.3 Motion

Motion should be subtle and functional:

- 150–250 ms transitions;
- drawer slides gently from the right;
- focused card may gain a slightly stronger border/background;
- no continuous background animation;
- no parallax;
- no pulsing;
- respect `prefers-reduced-motion`.

---

# 7. Layer 1 — Hero / Research Loop

## 7.1 Purpose

The hero must restore the overall research position in a few seconds.

It must remain visually simple.

## 7.2 Persistent content

Display:

```text
AIBL / SimBench
Runtime Governance Map

AIBL research series v5.0
SimBench v1.0.0

What happens when governance concepts
have to become executable?

A visual map from conceptual governance
to executable semantics, evidence, and theory feedback.
```

Do not add long introductory paragraphs.

## 7.3 Main research loop

Desktop preferred layout:

```text
AIBL Concept
    →
Operational Translation
    →
Executable Semantics

↑                           ↓

Theory Feedback
    ←
Evidence / Inspection
    ←
SimBench v1.0.0
```

This is a loop, not merely a pipeline.

Alternative CSS layout is acceptable if the same meaning is immediately visible.

Each node should:
- be visually distinct but quiet;
- be keyboard-focusable;
- have a short hover/focus tooltip;
- optionally scroll to the relevant lower section.

Example tooltip:
- Operational Translation: “Making implicit governance assumptions explicit enough to execute.”

## 7.4 Hero navigation

Display four primary buttons:

```text
Runtime Semantics
Evidence & Boundaries
Question Map
Automation & Tooling
```

Buttons should look like calm research-navigation controls, not CTA marketing buttons.

## 7.5 Claim boundary

Show a persistent small label:

```text
SIMULATION_LIMITED
```

It should be visible but not alarm-like.

A click may open the Claim Boundary portion of the Evidence drawer.

---

# 8. Layer 2 — “Where Everything Sits”

## 8.1 Section purpose

This section is the conceptual address book.

Heading:

```text
Where everything sits
```

Subheading:

```text
A compact map of the AIBL / SimBench research structure.
```

## 8.2 Layout

Desktop:
- 2 × 2 grid;
- generous spacing;
- cards should have meaningful height;
- do not fill space with unnecessary prose.

Tablet:
- 2 columns if comfortable.

Mobile:
- 1 column.

Each card is a **mini-map**, not a summary essay.

---

# 9. Card 1 — AIBL Conceptual Model

## 9.1 Card content

```text
AIBL
Conceptual Model

Capability ≠ Permission

Assurance
   ↓
Governance Permission
   ↓
Runtime Enforcement

Explore AIBL
```

The visual emphasis is the conceptual distinction and the analytical flow.

## 9.2 Drawer chips

```text
AIBL
CONCEPT LAYER
BEHAVIOR-LEVEL GOVERNANCE
```

## 9.3 Drawer content order

### What is AIBL?

Short explanation:
AIBL treats current behavior permission as distinct from technical capability and from system-level approval.

### Core distinction

```text
Capability ≠ Permission
```

### Concept flow

```text
Assurance
    ↓
Governance Permission
    ↓
Runtime Enforcement
    ↓
Observed Effect
    ↓
Review / Revalidation
```

### Key ideas

Use compact chips or grouped labels:

```text
Behavior Permission Class
Permission State
Physical Operational Envelope
Suspension
Revalidation
Re-entry
```

### What remains abstract?

Display four short questions:

```text
What exactly counts as “current”?
What happens when inputs conflict?
What evidence is enough?
What does successful re-entry actually mean?
```

### Related

```text
Continue to Operational Translation →
```

---

# 10. Card 2 — Operational Translation

This is the conceptual center of AIBL v5.0.

## 10.1 Card content

```text
Operational
Translation

Concept
 → Semantics
 → Rule
 → Scenario
 → Evidence

Identity • Time
Conflict • Re-entry

Explore Translation
```

## 10.2 Drawer chips

```text
v5.0 CORE
TRANSLATION
SEMANTICS
```

## 10.3 Drawer lead question

Display prominently:

> **What must become explicit before governance can execute?**

## 10.4 Seven semantic dimensions

Display as seven compact interactive tiles:

```text
01 Decision State
02 Identity / Binding / Provenance
03 Temporal Validity
04 Conflict / Precedence
05 Failure / State Transition
06 Re-entry
07 Evidence / Replay
```

Selecting a tile expands or swaps a small local detail region inside the drawer.

Do not open a second nested drawer.

### Example details

#### 01 Decision State

Explain:
- executable meaning of ALLOW / HOLD / DENY;
- distinction between non-execution reasons;
- state and verdict should not be conflated.

#### 02 Identity / Binding / Provenance

Explain:
- what subject / object / source / event / policy / artifact an input refers to;
- a recent input may still be unusable if it refers to the wrong thing;
- binding is not the same as real-world truth.

#### 03 Temporal Validity

Show compact examples:

```text
Authority:
valid_from <= now < valid_until

Observation-like input:
0 <= age <= max_age
```

Mention that input families may use different temporal contracts.

#### 04 Conflict / Precedence

Explain:
- established inputs may disagree;
- unresolved conflict may lead to HOLD;
- explicit prohibition may lead to DENY;
- local branch order is not a universal conflict algebra.

#### 05 Failure / State Transition

Show:

```text
ALLOW
  ↓
Observed Effect
  ↓
EFFECT_MISMATCH
  ↓
SUSPENDED
```

Preserve the original decision rather than rewriting it retrospectively.

#### 06 Re-entry

Show:

```text
SUSPENDED
  ↓
Current prerequisite basis
  ↓
Conjunctive check
  ↓
RUNNING
```

Successful state restoration does not automatically execute the next ordinary action.

#### 07 Evidence / Replay

Explain:
- completeness vs integrity;
- raw vs canonical identity;
- retained-record comparison;
- evidence reconstruction is not independent certification or physical truth.

## 10.5 Why this matters

End with:

> A governance concept can be meaningful in prose while still being too underspecified to execute.

---

# 11. Card 3 — SimBench Runtime Artifact

This card may carry slightly more “gadget” character than the others, while staying visually restrained.

## 11.1 Card content

```text
SimBench
Runtime Artifact

P0–2 ━━━ P3 ━━━ P4
Foundation  Boundaries  Freshness

Decision
State Transition
Re-entry
Evidence

Explore SimBench
```

## 11.2 Drawer chips

```text
SIMBENCH v1.0.0
PHASE 0–4
SIMULATION_LIMITED
```

## 11.3 Artifact status panel

```text
Artifact        v1.0.0
Scope           Phase 0–4
Mode            Deterministic Simulation
Claim Boundary  SIMULATION_LIMITED
```

Keep this small and clean.

## 11.4 Phase timeline

```text
P0–2
Foundational Governance Structure
        ↓
P3
Adversarial Governance Boundaries
        ↓
P4
Freshness Boundaries
```

Each phase is selectable.

### P0–2 detail

Show short concepts only:

```text
Decision meanings
Structured inputs
Behavior scope
Evidence / trace foundations
Enforcement separation
Transition assumptions
Deterministic fixtures
```

### P3 detail

Show:

```text
HOLD / DENY separation
Conflict handling
Identity / manifest binding
Evidence integrity
Conjunctive re-entry
Physical observation
Effect mismatch → SUSPENDED
No silent retry
Human Gate / controlled closure
```

### P4 detail

Show four primary freshness families:

```text
Authority
Remediation Evidence
Physical Observation
Risk Context
```

Optional compact note:
different families use different temporal semantics and failure meanings.

## 11.5 Runtime Flow

Display a mini-flow:

```text
Structured Context
      ↓
Governance Decision
      ↓
ALLOW / HOLD / DENY
      ↓
Execution / No Execution
      ↓
Observed Effect
      ↓
State Transition
      ↓
Evidence
```

## 11.6 Re-entry subview

A small toggle/tab may switch from “Ordinary Action” to “Re-entry”.

Re-entry view:

```text
SUSPENDED
   ↓
Current prerequisites
   ↓
Conjunctive check
   ↓
RUNNING
```

Include:
- restoration only;
- no automatic ordinary physical action.

## 11.7 Related

```text
View Evidence →
```

---

# 12. Card 4 — Evidence & Theory Feedback

## 12.1 Card content

```text
Evidence
& Theory Feedback

E1  Implementation
E2  Verification
E3  Reported Results
E4  Interpretation

Evidence → Feedback ↺

Explore Evidence
```

## 12.2 Drawer chips

```text
TRACEABILITY
E1–E4
CLAIM BOUNDARY
```

## 12.3 Evidence classes

Display E1–E4 as **parallel cards**, not a ranked ladder.

### E1 — Publicly Inspectable Implementation

Examples:
- source logic;
- state definitions;
- identity / freshness / re-entry semantics;
- effect-mismatch behavior.

### E2 — Public Verification / Replay Structures

Examples:
- test definitions;
- verification logic;
- hashes / bindings;
- replay-related structures.

### E3 — Historical Source-Reported Results

Examples:

```text
Phase 3: 60/60
Phase 4: 42/42
Public suite: 614/614
```

Clearly label:

```text
historical / release-reported
not independently reproduced in v5.0
```

### E4 — Conceptual Inference

Examples:
- typed currentness;
- reconstruction levels;
- bounded theory refinements;
- broader interpretive proposals.

## 12.4 Claim Boundary block

Display:

```text
SIMULATION_LIMITED
```

Then a two-column comparison:

### Supported / inspectable

```text
Explicit executable semantics
Deterministic fixed cases
Traceable decision structure
Bounded replay / verification structures
Theory feedback
```

### Not established

```text
Real-world Physical AI safety
Production readiness
Certification
Open-world generalization
Physical truth
Lawful external authority
Universal conflict resolution
Multi-agent effectiveness
```

Do not present this as an alarm or warning screen; treat it as research-scope discipline.

## 12.5 Theory Feedback loop

```text
Implementation
      ↓
Hidden assumption becomes explicit
      ↓
Compare with theory
      ↓
Refine / qualify / retain as limitation
      ↺
```

---

# 13. Cross-Cutting View — Question Map

The Question Map is not one of the four main cards.

It opens as a drawer from the hero navigation.

Purpose:
help distinguish adjacent research questions when terminology overlaps.

Use the following structure:

```text
MODEL EVALUATION
What can the model do?

EXECUTION SELECTIVITY
Should this operation pass?

RUNTIME GOVERNANCE
Is the basis for execution currently established?

OPERATIONAL TRANSLATION
What must be explicit for that decision to execute?

GOVERNANCE ASSURANCE
What can later be inspected or reconstructed?
```

Important:
- do not name or rank external systems in v0.1;
- do not present this as a universal taxonomy;
- label it as an orientation aid.

Optional short caption:

> Different projects may overlap in mechanisms while asking different primary questions.

---

# 14. Cross-Cutting View — Automation & Tooling

Automation must remain visually and conceptually separate from the SimBench v1.0.0 research artifact.

## 14.1 Placement

Below the four-card grid, include a clearly separated strip:

```text
POST-PHASE4 TOOLING

Tier 1 / BEFORE
     →
Tier 2 / AFTER
     →
Human Gate / DECIDE
```

Add a small note:

> Operational support layer — separate from the SimBench v1.0.0 research artifact.

## 14.2 Automation drawer

Header chips:

```text
POST-PHASE4
TOOLING
SEPARATE LAYER
```

### Tier 1 — BEFORE

Meaning:
verify whether the environment is in an acceptable state before controlled work.

Show compact concepts:

```text
Git state
Identity / hash verification
Preflight checks
Read-only boundary checks
```

### Tier 2 — AFTER

Meaning:
verify and summarize resulting evidence after the controlled run.

Show:

```text
Postflight checks
Formal run aggregation
Evidence semantic validation
Closure draft generation
```

Mention:
the hardened Tier 2 design rejects selected malformed or contradictory evidence rather than trusting hashes/counts alone.

### Human Gate — DECIDE

Show explicitly:

```text
Formal GO
Deviation acceptance
Closure acceptance
Publication / release decision
```

Automation must **not** imply autonomous approval authority.

### Boundary

```text
Automation supports inspection.
Human authority remains explicit.
```

Do not depict Automation as Phase 5.

---

# 15. Detail Drawer Behavior

## 15.1 Desktop

- fixed or sticky drawer from the right;
- target width: approximately 36–42% of viewport;
- minimum readable width around 420 px where possible;
- page map remains visible behind / beside it;
- no full-screen modal by default.

## 15.2 Mobile

Drawer becomes full-screen or near-full-screen.

Provide:

```text
← Back to Map
```

at top.

## 15.3 Common drawer header

Every drawer uses:

```text
[chips]

Title
One-sentence purpose

────────────────
```

Right-side actions:

```text
Focus
Close
```

No:
- settings gear;
- kebab menu;
- extra utility icons;
- nested navigation chrome.

## 15.4 Common drawer content rhythm

Use this conceptual order when applicable:

```text
Overview

Mini Visualization

Key Concepts / Semantics

Evidence or Status

Boundary

Related →
```

Not every drawer must mechanically show every heading, but the reading rhythm should remain consistent.

---

# 16. Focus View

## 16.1 Purpose

Allow deeper reading without crowding the normal map.

## 16.2 Behavior

Clicking `Focus`:
- expands the current drawer content into a centered reading view;
- hides most surrounding navigation;
- keeps a clear “Back to Map” control;
- supports browser print / PDF naturally;
- does not create a new URL route in v0.1 unless implementation makes it trivial.

## 16.3 Reading width

Keep content column restrained.

Suggested maximum text width:
- approximately 760–900 px;
- paragraphs should not span full desktop width.

---

# 17. Content Density Rules

The design should not solve empty space by adding more content.

Use progressive disclosure instead.

## Persistent card level

Maximum:
- title;
- one mini diagram;
- approximately 3–5 short labels;
- one Explore control.

No long paragraphs.

## Drawer level

Moderate-to-high information density is acceptable, provided:
- sections are visually separated;
- line length is controlled;
- diagrams interrupt long text;
- whitespace exists between semantic groups;
- only one expanded sub-detail is open at a time when possible.

## Focus level

Longer explanatory content is acceptable.

---

# 18. Design Tokens — Starting Point

Codex may tune exact values while preserving the visual intent.

Suggested CSS variables:

```css
:root {
  --bg: #f8f7f2;
  --surface: #ffffff;
  --surface-soft: #f5f8fa;

  --text: #23313b;
  --text-muted: #64727c;

  --blue-1: #dceaf1;
  --blue-2: #a9c9d8;
  --blue-3: #5f8fa5;

  --green-1: #e3eee6;
  --green-2: #aec9b5;
  --green-3: #688d72;

  --line: #d8e0e3;
  --line-strong: #bdcbd1;

  --radius-card: 18px;
  --radius-chip: 999px;

  --shadow-soft: 0 8px 24px rgba(50, 70, 80, 0.06);
}
```

These are starting values only.

Rules:
- avoid high saturation;
- avoid pure black;
- avoid strong colored shadows;
- do not make every semantic category a different bright color.

---

# 19. Typography

Use system font stack only.

Suggested:

```css
font-family:
  Inter,
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

Do not download Inter.

If unavailable, system fonts are acceptable.

For Japanese fallback:

```css
"Yu Gothic UI",
"Yu Gothic",
"Meiryo",
sans-serif;
```

Use comfortable line height:
- headings: ~1.2–1.3;
- body: ~1.6–1.75.

---

# 20. Accessibility

Required:

- semantic HTML;
- logical heading order;
- visible keyboard focus;
- buttons must be real `<button>` elements;
- do not rely only on color;
- sufficient contrast;
- drawer focus management;
- `Esc` closes drawer/focus view;
- clicking backdrop may close drawer, but not as the only close method;
- restore focus to the invoking control after drawer closes;
- support `prefers-reduced-motion`;
- decorative watercolor / Osaka elements must be ignored by assistive technology.

---

# 21. Interaction Rules

## Cards

- hover: small border/background change only;
- click: open corresponding drawer;
- keyboard Enter/Space: same result;
- selected card remains subtly highlighted while drawer is open.

## Mini semantic tiles

- one expanded detail at a time;
- clear selected state;
- avoid accordion animation that causes large layout jumps.

## Internal related links

Examples:

```text
Continue to Operational Translation →
View Evidence →
Back to Research Loop ↑
```

Use these to preserve orientation.

---

# 22. Watercolor / Decorative Layer

Do not use externally sourced stock images.

Preferred implementation options:
1. CSS radial/linear gradients with very low opacity;
2. locally generated abstract SVG shapes;
3. simple static local SVG line art.

Keep decoration separate from semantic diagrams.

Potential locations:
- very faint hero background wash;
- lower edge of “Where everything sits” section;
- footer Osaka easter egg.

Decorations must not reduce text contrast.

---

# 23. Footer

Keep compact.

Suggested:

```text
AIBL / SimBench Runtime Governance Map
Research orientation interface

AIBL research series v5.0
SimBench v1.0.0

SIMULATION_LIMITED

Mapped in Osaka.
```

Optional tiny line-art easter egg.

Do not create social buttons or marketing CTAs in v0.1.

---

# 24. Explicit Non-Goals for v0.1

Do not implement:

- backend;
- database;
- live GitHub API;
- live Zenodo API;
- benchmark execution;
- terminal emulator;
- live code viewer;
- search index;
- full-text paper reader;
- external-paper comparison database;
- citation resolver;
- theme selector;
- user account;
- analytics;
- dark mode;
- multilingual UI;
- editable content UI;
- animation-heavy storytelling;
- Phase 5;
- Tier 3 Automation;
- external named-project comparisons;
- AI chatbot;
- LLM integration.

These may be reconsidered later.

---

# 25. Research / Semantic Guardrails

The implementation must preserve the following conceptual boundaries.

## 25.1 Mechanism novelty

Do not label AIBL / SimBench as a new runtime-authorization architecture.

Preferred framing:
- operational translation;
- bounded executable artifact;
- theory feedback;
- comparative conceptual integration.

## 25.2 Evidence

Do not visually imply:

```text
E1 < E2 < E3 < E4
```

as a strength ranking.

They are different evidence / interpretation categories.

## 25.3 Historical results

When showing:

```text
60/60
42/42
614/614
```

always retain context such as:

```text
historical / release-reported
SIMULATION_LIMITED
not real-world safety estimates
```

## 25.4 Binding and truth

Do not imply:

```text
hash match = truth
fresh timestamp = correct observation
manifest match = lawful approval
```

## 25.5 Re-entry

Do not imply:
- technical recovery automatically means permission restoration;
- restored RUNNING state automatically executes the next ordinary action;
- the ten-element basis is universally sufficient.

## 25.6 Automation

Do not imply:
- Tier 1 / Tier 2 are SimBench Phase 4 runtime semantics;
- the automation tooling autonomously approves Formal execution or closure.

---

# 26. Suggested Content Model

A minimal `content.js` can use structures such as:

```js
const cards = {
  aibl: {
    title: "...",
    chips: [...],
    summary: "...",
    sections: [...]
  },
  translation: { ... },
  simbench: { ... },
  evidence: { ... }
};
```

Question Map and Automation can use the same drawer component with separate data definitions.

Do not introduce a generalized CMS abstraction.

---

# 27. Responsive Behavior

## Desktop >= 1100 px

- hero loop horizontal / two-row loop;
- second layer 2 × 2 cards;
- drawer right side;
- content area remains visible.

## Tablet 720–1099 px

- hero loop may become vertical or compact grid;
- 2-column cards if readable;
- drawer width may increase to ~50–60%.

## Mobile < 720 px

- loop becomes vertical;
- cards become single column;
- drawer becomes full-screen;
- Focus view may be visually similar to drawer, but still maintain clear navigation;
- avoid tiny diagrams;
- do not shrink text below comfortable reading sizes.

---

# 28. Acceptance Criteria

The first implementation is accepted when all of the following are true.

## Structure

- [ ] Hero research loop is visible immediately.
- [ ] Loop visibly returns from Theory Feedback toward AIBL.
- [ ] Four hero navigation controls exist.
- [ ] “Where everything sits” contains exactly four primary mini-map cards.
- [ ] Post-Phase4 Automation is visually separate from the four cards.
- [ ] Drawer and Focus view both work.

## Content

- [ ] AIBL card preserves Capability ≠ Permission.
- [ ] Translation drawer exposes all seven semantic dimensions.
- [ ] SimBench drawer exposes P0–2 / P3 / P4 structure.
- [ ] Evidence drawer exposes E1 / E2 / E3 / E4 without ranking them.
- [ ] SIMULATION_LIMITED is visible in the hero and relevant detail views.
- [ ] Question Map is accessible.
- [ ] Automation view preserves BEFORE / AFTER / HUMAN DECIDE distinction.

## Interaction

- [ ] Drawer opens without losing map context on desktop.
- [ ] Drawer is keyboard accessible.
- [ ] Focus mode works.
- [ ] Mobile navigation remains understandable.
- [ ] `Esc` closes overlays.
- [ ] focus is restored correctly.

## Visual

- [ ] light warm background;
- [ ] pale blue + restrained green palette;
- [ ] no cyberpunk / neon styling;
- [ ] no visual clutter;
- [ ] enough whitespace for readability;
- [ ] subtle gadget feel through interaction rather than decoration;
- [ ] at least one subtle Osaka easter egg, but no trademarked brand representation.

## Technical

- [ ] opens locally without server;
- [ ] no network requests are required;
- [ ] no external dependencies;
- [ ] no console errors;
- [ ] no horizontal scrolling at common mobile widths;
- [ ] works in current Chromium and Firefox desktop browsers.

---

# 29. Implementation Sequence for Codex

Use the following order.

## Step 1 — Static skeleton

Implement:
- semantic page structure;
- hero;
- research loop;
- second-layer four-card grid;
- tooling strip;
- footer.

No complex animation.

## Step 2 — Shared drawer system

Implement:
- one reusable drawer component;
- content switching;
- chips;
- close;
- keyboard/focus handling;
- mobile full-screen behavior.

## Step 3 — Populate the four card drawers

Implement in this order:
1. AIBL;
2. Operational Translation;
3. SimBench;
4. Evidence & Theory Feedback.

## Step 4 — Cross-cutting drawers

Implement:
- Question Map;
- Automation & Tooling.

## Step 5 — Focus View

Reuse existing content rendering where possible.

## Step 6 — Visual refinement

Only after interaction works:
- spacing;
- watercolor wash;
- subtle Osaka line art;
- responsive polish;
- reduced motion.

## Step 7 — Manual acceptance review

Do not add new features before review.

---

# 30. Codex Behavior Instructions

The implementer should:

- follow this specification closely;
- prefer clarity over novelty;
- do not invent new research claims;
- do not “improve” claim strength;
- do not add speculative Phase 5 content;
- do not merge Automation into the SimBench runtime layer;
- do not add third-party dependencies;
- do not create a dark mode unless explicitly requested later;
- do not add extra panels because empty space appears available;
- preserve intentional whitespace;
- ask for human review only when a real product/content ambiguity blocks implementation.

If a purely visual decision is underspecified, choose the calmer / simpler option.

---

# 31. Definition of v0.1 Complete

v0.1 is complete when:

> A user can open `index.html`, understand the AIBL → translation → SimBench → evidence → theory-feedback loop, locate the four main conceptual areas, open details without losing orientation, distinguish post-Phase4 automation from the research artifact, and clearly see the simulation / evidence claim boundaries.

No additional feature is required for v0.1.

---

# 32. Suggested Future Extensions — Not for v0.1

Potential future versions may consider:

```text
v0.2
- lightweight client-side search
- direct anchorable views
- richer phase map
- printable research cards

v0.3
- optional Metro Map navigation
- claim-driven research agenda view
- selected traceability links
- curated external-comparator orientation

v1.0
- stabilized public explanatory release
- accessibility review
- publication-ready downloadable snapshot
```

These are placeholders, not commitments.

---

## End of Specification
