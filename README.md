# AIBL / SimBench Runtime Governance Map — v0.1


[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.24106834.svg)](https://doi.org/10.5281/zenodo.24106834)


## Live Map

- [English — Canonical Version](https://policyphantom.github.io/aibl-simbench-runtime-governance-map/)
- [日本語 — Japanese Companion](https://policyphantom.github.io/aibl-simbench-runtime-governance-map/ja/)


Claim boundary: `SIMULATION_LIMITED`.

An interactive research orientation map for the AIBL / SimBench work on runtime governance, operational translation, executable semantics, evidence, and theory feedback.

English is the **canonical public wording** and remains the default root page. Japanese is a **faithful explanatory companion** in `ja/`, preserving the same research structure, claim boundaries, and interaction model.

## Open locally

- English: open `index.html`
- Japanese: open `ja/index.html`
- Use the language links in the masthead to move between the two documents.

No server, installation, connection, build step, framework, CDN, or external font is required. Keep the directory structure intact and enable JavaScript for the detail views. The persistent map remains available without JavaScript.

## Public scope

This is a **research orientation interface**.

It is **not**:

- a simulator
- a benchmark runner
- a live dashboard
- a safety proof
- a certification artifact
- a production runtime controller
- a replacement for the AIBL / SimBench papers and implementation artifacts

The map is intended to make the research structure easier to inspect and navigate.

## Research loop

```text
AIBL Concept
    ↓
Operational Translation
    ↓
Executable Semantics
    ↓
SimBench v1.0.0
    ← Evidence / Inspection
    ← Theory Feedback
    ↺ AIBL refinement
```

The map emphasizes three primary contribution layers:

1. **Operational Translation Specification**
2. **Bounded Executable Artifact**
3. **Theory Feedback from Implementation**

Comparative conceptual integration is treated as a secondary layer.

## Core semantic dimensions

The map organizes the runtime-governance material around seven dimensions:

1. Decision State
2. Identity / Binding / Provenance
3. Temporal Validity
4. Conflict / Precedence
5. Failure / State Transition
6. Re-entry
7. Evidence / Replay

## Claim boundaries

The interface preserves the same claim discipline as the underlying research.

Key boundaries include:

- Capability is distinct from permission.
- Governance permission is distinct from runtime enforcement.
- `ALLOW`, `HOLD`, and `DENY` are distinct verdicts.
- A verdict is not itself a runtime state.
- `SUSPENDED`, `RUNNING`, and `EFFECT_MISMATCH` remain distinct.
- Binding does not establish physical truth or lawful authority.
- Freshness alone does not establish usability.
- Technical recovery does not itself restore current permission.
- Re-entry restores state only; it does not automatically execute an ordinary physical action.
- Evidence reconstruction is not treated as a single undifferentiated concept.
- E1–E4 are parallel evidence categories, not a ranking of evidence strength.
- `SIMULATION_LIMITED` remains an explicit boundary.

Historical source-reported formal results shown in the map remain:

- Phase 3: `60/60`
- Phase 4: `42/42`
- Public suite: `614/614`

These are historical/release-reported results, not independently reproduced measurements in AIBL v5.0, and they are not estimates of real-world safety probability.

## Automation boundary

Post-Phase4 Automation is shown as a separate tooling layer:

```text
Tier 1 = BEFORE
Tier 2 = AFTER
Human Gate = DECIDE
```

Tier 1 / Tier 2 are not Phase 4 runtime semantics and are not treated as Phase 5.

## Interaction

The interface provides:

- persistent map navigation
- shared detail Drawer
- Focus Mode
- Back to Map
- related-view navigation
- keyboard focus management
- reduced-motion support
- print mode
- English / Japanese language navigation

The English and Japanese versions share the same interaction structure.

## Files

| File | Responsibility |
| --- | --- |
| `index.html` | Canonical English map and detail-panel shell |
| `content.js` | Canonical English research content |
| `ja/index.html` | Japanese companion map |
| `ja/content.js` | Japanese companion research content |
| `styles.css` | Shared visual design and responsive layout |
| `app.js` | Shared rendering and interaction behavior |
| `docs/` | Implementation and localization specifications |
| `README.md` | Public scope and orientation |

## Authoritative specifications

- [English Implementation Specification](docs/AIBL_SimBench_Runtime_Governance_Map_Codex_Implementation_Spec_v0.1_20260922.md)
- [Japanese Companion Localization Package](docs/AIBL_SimBench_Governance_Map_Japanese_Localization_Package_v0.1_20260924.md)

## Browser acceptance

v0.1 has been reviewed in real browsers in both languages.

Verified items include:

- Firefox desktop
- Firefox at 320 px
- Chrome desktop
- English / Japanese language switching
- Drawer interaction
- Question Map
- Automation view
- Focus Mode
- print preview
- no observed horizontal overflow at the accepted checkpoints

No known publication blocker is currently recorded for v0.1.

## Public framing

The project should be described in terms such as:

- bounded
- inspectable
- deterministic
- explicit semantics
- operational translation
- theory feedback
- source-linked
- simulation-limited
- local implementation specificity
- claim boundary

Avoid describing it as:

- a novel runtime authorization architecture
- a Physical AI safety proof
- a certification equivalent
- production-ready
- a universal runtime-governance solution

## Language policy

English is the canonical/default public version.

Japanese is a faithful explanatory companion intended to preserve, not strengthen, the claims made in English.

Selected technical tokens remain unchanged across languages, including:

`ALLOW`, `HOLD`, `DENY`, `SUSPENDED`, `EFFECT_MISMATCH`, `SIMULATION_LIMITED`, E1–E4, Phase, and Tier.

---

Mapped in Osaka.
