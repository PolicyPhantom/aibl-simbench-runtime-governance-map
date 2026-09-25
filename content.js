/* Editable research content. Classic script: works directly from file:// without requests. */
"use strict";
window.GovernanceMapContent = {
  aibl: {
    title: "AIBL Conceptual Model",
    chips: ["AIBL", "CONCEPT LAYER", "BEHAVIOR-LEVEL GOVERNANCE"],
    purpose: "Locate current behavior permission within the conceptual governance model.",
    sections: [
      { title: "What is AIBL?", text: "AIBL treats current behavior permission as distinct from technical capability and from system-level approval." },
      { title: "Core distinction", type: "distinction", text: "Capability ≠ Permission" },
      { title: "Concept flow", type: "flow", items: ["Assurance", "Governance Permission", "Runtime Enforcement", "Observed Effect", "Review / Revalidation"] },
      { title: "Key ideas", type: "labels", items: ["Behavior Permission Class", "Permission State", "Physical Operational Envelope", "Suspension", "Revalidation", "Re-entry"] },
      { title: "What remains abstract?", type: "list", items: ["What exactly counts as “current”?", "What happens when inputs conflict?", "What evidence is enough?", "What does successful re-entry actually mean?"] },
      { type: "related", label: "Continue to Operational Translation →", view: "translation" }
    ]
  },
  translation: {
    title: "Operational Translation",
    chips: ["v5.0 CORE", "TRANSLATION", "SEMANTICS"],
    purpose: "Make the assumptions behind governance decisions explicit enough to execute.",
    sections: [
      { type: "lead", text: "What must become explicit before governance can execute?" },
      {
        title: "Seven semantic dimensions", type: "selector", id: "semantics",
        options: [
          {
            code: "01", title: "Decision State",
            items: ["ALLOW permits the modeled action. HOLD withholds execution while the required basis is unresolved. DENY refuses execution, for example under an explicit prohibition.", "HOLD and DENY distinguish reasons for non-execution; they are not interchangeable.", "A decision verdict and a runtime state are different concepts and should not be conflated."]
          },
          {
            code: "02", title: "Identity / Binding / Provenance",
            items: ["Identify the subject, object, source, event, policy, or artifact to which an input refers.", "A recent input may still be unusable if it refers to the wrong thing.", "Binding establishes a specified relationship; it is not the same as real-world truth."],
            note: "A hash match is not truth, and a manifest match is not lawful approval."
          },
          {
            code: "03", title: "Temporal Validity",
            text: "Input families may use different temporal contracts.",
            example: "Authority:\nvalid_from <= now < valid_until\n\nObservation-like input:\n0 <= age <= max_age",
            note: "A fresh timestamp does not establish that an observation is correct."
          },
          {
            code: "04", title: "Conflict / Precedence",
            items: ["Established inputs may disagree.", "Unresolved conflict may lead to HOLD.", "Explicit prohibition may lead to DENY.", "Local branch order is not a universal conflict algebra."]
          },
          {
            code: "05", title: "Failure / State Transition",
            flow: ["ALLOW", "Observed Effect", "EFFECT_MISMATCH", "SUSPENDED"],
            note: "Preserve the original decision rather than rewriting it retrospectively. An effect mismatch changes the subsequent state."
          },
          {
            code: "06", title: "Re-entry",
            flow: ["SUSPENDED", "Current prerequisite basis", "Conjunctive check", "RUNNING"],
            items: ["Technical recovery does not automatically restore permission.", "Successful state restoration does not automatically execute the next ordinary action."],
            note: "The artifact’s ten-element basis is bounded to its modeled cases; it is not universally sufficient."
          },
          {
            code: "07", title: "Evidence / Replay",
            items: ["Completeness asks whether required evidence is present; integrity asks whether retained evidence satisfies its specified integrity checks.", "Distinguish raw identity from canonical identity, and make the comparison basis explicit.", "Retained-record comparison supports bounded reconstruction."],
            note: "Evidence reconstruction is not independent certification or physical truth."
          }
        ]
      },
      { title: "Why this matters", type: "quote", text: "A governance concept can be meaningful in prose while still being too underspecified to execute." },
      { type: "related", label: "Continue to SimBench →", view: "simbench" }
    ]
  },
  simbench: {
    title: "SimBench Runtime Artifact",
    chips: ["SIMBENCH v1.0.0", "PHASE 0–4", "SIMULATION_LIMITED"],
    purpose: "Inspect the bounded executable artifact and its runtime structure.",
    sections: [
      { title: "Artifact status", type: "status", rows: [["Artifact", "v1.0.0"], ["Scope", "Phase 0–4"], ["Mode", "Deterministic Simulation"], ["Claim Boundary", "SIMULATION_LIMITED"]] },
      {
        title: "Phase timeline", type: "selector", id: "phases",
        options: [
          { code: "P0–2", title: "Foundational Governance Structure", items: ["Decision meanings", "Structured inputs", "Behavior scope", "Evidence / trace foundations", "Enforcement separation", "Transition assumptions", "Deterministic fixtures"] },
          { code: "P3", title: "Adversarial Governance Boundaries", items: ["HOLD / DENY separation", "Conflict handling", "Identity / manifest binding", "Evidence integrity", "Conjunctive re-entry", "Physical observation", "Effect mismatch → SUSPENDED", "No silent retry", "Human Gate / controlled closure"] },
          { code: "P4", title: "Freshness Boundaries", labels: ["Authority", "Remediation Evidence", "Physical Observation", "Risk Context"], note: "Different families use different temporal semantics and failure meanings." }
        ]
      },
      {
        title: "Runtime flow", type: "selector", id: "runtime",
        options: [
          { title: "Ordinary Action", flow: ["Structured Context", "Governance Decision", "ALLOW / HOLD / DENY", "Execution / No Execution", "Observed Effect", "State Transition", "Evidence"], note: "This is a schematic flow: ALLOW permits the modeled action; HOLD / DENY do not execute it. Observed-effect handling applies to an executed action." },
          { title: "Re-entry", flow: ["SUSPENDED", "Current prerequisites", "Conjunctive check", "RUNNING"], items: ["Restoration only.", "No automatic ordinary physical action."], note: "Recovery alone does not restore permission. The modeled prerequisite basis is not a universal sufficiency claim." }
        ]
      },
      { title: "Boundary", text: "SIMULATION_LIMITED — deterministic fixed cases support inspection of executable semantics. They do not establish real-world Physical AI safety, production readiness, or certification." },
      { type: "related", label: "View Evidence →", view: "evidence" }
    ]
  },
  evidence: {
    title: "Evidence & Theory Feedback",
    chips: ["TRACEABILITY", "E1–E4", "CLAIM BOUNDARY", "SIMULATION_LIMITED"],
    purpose: "Separate what can be inspected, what was reported, and what is inferred.",
    sections: [
      {
        title: "Evidence classes", type: "evidence",
        text: "Parallel categories of evidence and interpretation — not a ranking of strength.",
        entries: [
          { code: "E1", title: "Publicly Inspectable Implementation", items: ["Source logic", "State definitions", "Identity / freshness / re-entry semantics", "Effect-mismatch behavior"] },
          { code: "E2", title: "Public Verification / Replay Structures", items: ["Test definitions", "Verification logic", "Hashes / bindings", "Replay-related structures"] },
          { code: "E3", title: "Historical Source-Reported Results", items: ["Phase 3: 60/60", "Phase 4: 42/42", "Public suite: 614/614"], note: "Historical / release-reported; not independently reproduced in v5.0. SIMULATION_LIMITED — not real-world safety estimates." },
          { code: "E4", title: "Conceptual Inference", items: ["Typed currentness", "Reconstruction levels", "Bounded theory refinements", "Broader interpretive proposals"] }
        ]
      },
      {
        title: "Claim Boundary", type: "boundary", id: "claim-boundary",
        supported: ["Explicit executable semantics", "Deterministic fixed cases", "Traceable decision structure", "Bounded replay / verification structures", "Theory feedback"],
        notEstablished: ["Real-world Physical AI safety", "Production readiness", "Certification", "Open-world generalization", "Physical truth", "Lawful external authority", "Universal conflict resolution", "Multi-agent effectiveness"]
      },
      { title: "Binding is not truth", type: "list", items: ["Hash match ≠ truth", "Fresh timestamp ≠ correct observation", "Manifest match ≠ lawful approval"] },
      { title: "Theory Feedback", id: "theory-feedback", type: "flow", items: ["Implementation", "Hidden assumption becomes explicit", "Compare with theory", "Refine / qualify / retain as limitation", "↺ Return to AIBL refinement"], returnPath: true },
      { type: "related", label: "Return to AIBL Concept →", view: "aibl" }
    ]
  },
  questions: {
    title: "Question Map",
    chips: ["ORIENTATION AID", "ADJACENT QUESTIONS"],
    purpose: "Distinguish adjacent research questions when terminology overlaps.",
    sections: [
      {
        title: "Which question is being asked?", type: "questions",
        entries: [
          ["MODEL EVALUATION", "What can the model do?"],
          ["EXECUTION SELECTIVITY", "Should this operation pass?"],
          ["RUNTIME GOVERNANCE", "Is the basis for execution currently established?"],
          ["OPERATIONAL TRANSLATION", "What must be explicit for that decision to execute?"],
          ["GOVERNANCE ASSURANCE", "What can later be inspected or reconstructed?"]
        ]
      },
      { title: "An orientation aid", text: "Different projects may overlap in mechanisms while asking different primary questions. This is an orientation aid, not a universal taxonomy or a ranking of systems." },
      { type: "related", label: "Explore Operational Translation →", view: "translation" }
    ]
  },
  automation: {
    title: "Automation & Tooling",
    chips: ["POST-PHASE4", "TOOLING", "SEPARATE LAYER"],
    purpose: "Locate operational support before and after controlled work, with human authority explicit.",
    sections: [
      { title: "Separate operational support layer", text: "Post-Phase4 tooling is separate from the SimBench v1.0.0 Phase 0–4 research artifact. Tier 1 / Tier 2 are not Phase 4 runtime semantics, and this tooling is not Phase 5." },
      { type: "flow", items: ["Tier 1 / BEFORE", "Tier 2 / AFTER", "Human Gate / DECIDE"] },
      { title: "Tier 1 — BEFORE", text: "Verify whether the environment is in an acceptable state before controlled work.", type: "list", items: ["Git state", "Identity / hash verification", "Preflight checks", "Read-only boundary checks"] },
      { title: "Tier 2 — AFTER", text: "Verify and summarize resulting evidence after the controlled run.", type: "list", items: ["Postflight checks", "Formal run aggregation", "Evidence semantic validation", "Closure draft generation"], note: "The hardened Tier 2 design rejects selected malformed or contradictory evidence rather than trusting hashes/counts alone." },
      { title: "Human Gate — DECIDE", type: "list", items: ["Formal GO", "Deviation acceptance", "Closure acceptance", "Publication / release decision"], note: "Automation does not autonomously approve Formal execution or closure." },
      { title: "Boundary", type: "quote", text: "Automation supports inspection. Human authority remains explicit." }
    ]
  }
};
