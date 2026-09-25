# AIBL / SimBench Runtime Governance Map — v0.1

English is the **canonical public wording** and remains the default root page. Japanese is a **faithful explanatory companion** in `ja/`, preserving the research structure, claim boundaries, and interaction model.

English baseline: local commit `6e9fa54`. The user reported acceptance of the English structure, semantics, responsive layout, Drawer, Question Map, Automation, and ordinary print preview; Firefox was checked down to 320 px, and Chrome desktop showed no major problems. Those reports apply to the English baseline, not to the Japanese companion or the changes in this patch.

Japanese status: **implemented and statically checked; real-browser acceptance pending**. This patch has not been committed.

## Open locally

- English: open `index.html`.
- Japanese: open `ja/index.html`.
- Use the small masthead links, `日本語` and `English`, to move between the two documents.

No server, installation, connection, or build step is required by the implementation. Keep the directory structure intact and enable JavaScript for the detail views. The persistent map is available without JavaScript.

Both documents use relative file references and classic deferred scripts. Japanese loads `../styles.css`, its own `content.js`, and `../app.js`, in that order for the scripts. It does not load the English content first. Language links use `ja/index.html` and `../index.html`, with no leading slash.

There are no frameworks, Node/build tools, CDN resources, external fonts, localization libraries, network-request code, `fetch`, ES Modules, automatic locale detection, redirects, query routing, or language storage. Direct `file://` compatibility is supported by the file structure and references; Japanese browser execution has not yet been verified.

## Authoritative specifications

- [English Implementation Specification](docs/AIBL_SimBench_Runtime_Governance_Map_Codex_Implementation_Spec_v0.1_20260922.md)
- [Japanese Companion Localization Package](docs/AIBL_SimBench_Governance_Map_Japanese_Localization_Package_v0.1_20260924.md)

Both documents remain unchanged. English `content.js` also remains unchanged. Work is restricted to this project; no existing SimBench repository was accessed or changed.

This is a research orientation interface, not a simulator, benchmark runner, live dashboard, or paper replacement.

## Files

| File | Responsibility |
| --- | --- |
| `index.html` | Canonical English persistent map and detail-panel shell; explicit Japanese link |
| `content.js` | Canonical English research content |
| `ja/index.html` | Japanese persistent map, tooltips, ARIA labels, controls, and English link |
| `ja/content.js` | Six Japanese detail views and four Japanese UI strings |
| `styles.css` | Shared visual design; language-link styling; Japanese-only wrapping and typography |
| `app.js` | Shared rendering, selectors, modal behavior, focus management, and optional four-string localization hook |
| `README.md` | Scope, local opening, editing, and verification record |

Japanese content retains the same view keys, section types, IDs, phase/option codes, and related-view targets as English. Keep these identifiers stable when editing text. Content is inserted as DOM text, not interpreted HTML.

Shared `app.js` defaults to `Focus`, `Exit Focus`, `Supported / inspectable`, and `Not established`. Japanese `window.GovernanceMapUIStrings` overrides only these four labels. `SIMULATION_LIMITED` is not localized. The remaining controls are already localized in the Japanese HTML.

Japanese layout additions use `html[lang="ja"]`. Existing shared CSS rules, including the final English polish, remain intact. Language links have a separate class and are omitted in print. Japanese text may wrap or make a card taller; it is not shrunk to force the English geometry.

## Research and translation boundaries

- The research loop returns from Theory Feedback to AIBL refinement.
- Capability is distinct from permission; governance permission is distinct from runtime enforcement.
- `ALLOW`, `HOLD`, and `DENY` remain visible and distinct. A verdict is not a runtime state.
- `SUSPENDED`, `RUNNING`, `EFFECT_MISMATCH`, `SIMULATION_LIMITED`, E1–E4, Phase/Tier identifiers, and version tokens remain intact.
- Temporal contracts differ by input family. The authority and observation examples are unchanged.
- Binding does not establish physical truth or lawful authority.
- Re-entry restores state only; technical recovery does not itself restore permission, and restoration does not automatically execute an ordinary physical action.
- E1–E4 remain parallel categories, not a ranking of evidence strength.
- E3 retains exactly `Phase 3: 60/60`, `Phase 4: 42/42`, and `Public suite: 614/614`. The same card retains all four qualifications: historical/release-reported, not independently reproduced in v5.0, `SIMULATION_LIMITED`, and not real-world safety estimates.
- Post-Phase4 Tooling is separate from SimBench Phase 0–4. Tier 1 / Tier 2 are not Phase 4 runtime semantics or Phase 5. Human Gate retains Formal GO, deviation, closure, and publication/release authority.
- Package terminology is used, including 運用的翻訳, アシュアランス, 再進入, and 主張範囲. Selected first detailed occurrences retain English terms in parentheses.
- `Mapped in Osaka.` remains unchanged.

## Interaction

Cards, loop nodes, navigation controls, and the tooling strip open one shared Drawer. Local selectors expose one option per group. Related links change the content within that same panel.

Focus expands the current content into a reading view. Exit Focus returns to the Drawer without resetting selections. Close, Back to Map, Esc, and the normal Drawer backdrop close the panel. Focus returns to the original opener even after related-view navigation. Back to Research Loop explicitly focuses the first loop node.

Keyboard focus containment, the inert background, reduced-motion support, and tooltip dismissal use the unchanged shared behavior. At narrow widths the Japanese toolbar may wrap to keep all control labels readable.

The existing print styles omit navigation and include all options in the currently open detail view, even if collapsed on screen. The application does not generate a PDF.

## Static verification — 2026-09-24

Checks use local file inspection and Python's standard library. No dependencies were installed.

| Check | Result |
| --- | --- |
| English `content.js` and both specifications | SHA-256 unchanged |
| English HTML | Only the explicit Japanese link added |
| Shared JavaScript | Exactly the four-string hook and its two use sites changed; event/focus logic unchanged |
| Existing shared CSS | Existing source preserved; additions limited to language links and Japanese selectors |
| HTML structure | Balanced nesting, unique IDs, resolved ARIA/fragment references, and real buttons |
| Shared content structure | Six views, matching section types/IDs/targets, seven dimensions, three phase groups, two runtime flows |
| Semantics | Token/flow checks, identical temporal example and E3 totals, required qualifications, parallel evidence classes, and separate Automation layer |
| File references | Both pages' relative scripts, stylesheet, and language links resolve within this project |
| Dependencies | No prohibited network resources/APIs, modules, runtime language detection, or redirect code |
| Source integrity | Japanese object initializers parsed as JSON; string/comment/delimiter checks and whitespace review |
| JavaScript execution / console | Not tested in a browser for this patch |
| Japanese layout, mobile, keyboard, print, and compatibility | Not tested in a browser; acceptance pending |

These checks establish source consistency, not successful browser rendering or runtime behavior. Prior tool-led attempts to open local pages were blocked by the browser tool's URL policy; no Japanese browser verification or workaround was performed.

## Real-browser review still required

Open each language directly from disk in Firefox and a Chromium browser.

1. Reload offline and inspect the console/network panel. Verify both explicit language links, including paths containing Japanese characters or spaces if applicable.
2. Compare English against the accepted baseline: only the masthead language link should be newly visible. Confirm Focus/Exit Focus and the two English boundary headings are unchanged.
3. In Japanese, open all six views, all seven semantic dimensions, P0–2 / P3 / P4, and both runtime flows. Confirm localized dynamic labels and all claim boundaries.
4. At 320, 375, 719, 720, 1024, and 1440 px, check horizontal overflow, masthead links, long Hero/card titles, research-loop tooltips, bilingual terms, status rows, and E1–E4 panels.
5. At 320 px, test the Japanese toolbar in both Drawer and Focus states. Confirm the wrapped controls remain readable and do not cover section targets when opening Claim Boundary or Theory Feedback.
6. Use Tab / Shift+Tab, Enter / Space, Esc, Close, Back to Map, related links, and Back to Research Loop. Check the focus trap and restoration to the original opener.
7. Inspect reduced motion and focus visibility. Check Japanese labels and reading order with assistive technology as available.
8. Print-preview the Japanese map and Focus views, especially Translation and Evidence. Check long content, page breaks, complete technical expressions, and all E3 qualifications. Recheck English print preview after the shared hook/link change.

## Known issues and status

No specific functional defect has been identified by static review. Japanese browser runtime, visual layout, 320 px overflow, focus behavior, print pagination, and Firefox/Chromium compatibility remain unverified. The existing English user acceptance is not a Japanese acceptance result.

No new functionality or redesign is included. This patch remains uncommitted and awaits human review.
