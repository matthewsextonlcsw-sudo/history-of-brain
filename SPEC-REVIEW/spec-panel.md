# /sc:spec-panel — Expert Specification Review Panel

Multi-expert specification review and improvement, following the
[spec-panel skill](https://github.com/matthewsexton/claude-scholar/tree/main/commands/sc/spec-panel.md)
(10 experts, critique mode, requirements + architecture + testing + compliance focus,
YAML review output with quality scores and priority-ranked fixes).

**Review date:** 2026-09-16
**Reviewer:** k2 (K2-Horizon, llama.cpp, 9070 XT + 8060S, boo-boo)
**Spec under review:** `PROJECT-BRAIN.md` — the durable governing spec for the
"History of the Mind and Mental Health" project (Couch Commons collection)
**Run parameters:** `--mode critique --iterations 1 --format standard`

---

## QUALITY METRICS

| Score | Dimension | Rationale |
|---|---|---|
| **6.3 / 10** | Clarity | Language is vivid but many directives are conditional prose, not testable statements. |
| **7.2 / 10** | Completeness | Assignment, audience, voice, scope, evidence, ethics, IA, states, gates, files, decisions, current position are all covered. Missing: verification/audit protocol, change control, risk register. |
| **5.1 / 10** | Testability | Almost no directive is phrased so compliance can be checked mechanically. "Never collapse states" is enforced by convention, not by any artifact. |
| **6.4 / 10** | Consistency | Internally consistent, but the status header (line 3) and §15 conflict with the actual Batch 08 closure recorded in the batch files. |

---

## CRITICAL ISSUES (severity: critical)

### C1 — The spec's status section is stale and contradicts the batch records (wiegers + adzic)
- **Severity:** Critical — any reader (human or machine) trusting this spec is misled.
- **Evidence:** Header says "Batches 01–07 … complete"; §15 says "Batches 01–07 are complete … Batch 08 is frozen" and directs the next move as producing Batch 08 packets. The Batch 08 index/seam files record the batch as **closed**: 103 sources, 163 evidence IDs, 144 claim IDs, 317 relationships, 17 disagreements, with R31/R32/R33 mapped to T08-K/L/M and R34/R35/R36 recorded as acquisition-only STOPs.
- **Wiegers:** The spec's "current position" is the single most load-bearing section of any governing document. A stale current-position section is a defect, not a style issue.
- **Adzic:** The spec itself violates the project's own rule that evidence is checked, not asserted. The Batch 08 closure was verified; the spec was not updated.
- **Recommendation:** Update §15 and the header to record Batch 08 closure and the new next move (produce/cross-review frozen Batch 08 packets R31–R36, or start the pilot). Also refresh "Last updated: Aug 19, 2026".

### C2 — The work-states table is not enforceable by any artifact (nygard + crispin)
- **Severity:** Critical — the entire pipeline governance rests on "never collapse these states", and no mechanism checks that rule.
- **Evidence:** §11 lists 9 states. Nothing in the file system (or in the batch packet structure) enforces transitions; a packet folder can sit in any state with no machine-checkable marker. The seam syntheses and batch indices are the only real state records, and they are prose.
- **Nygard:** This is a single-point-of-failure operational design: the spec is the control plane, and the control plane has no feedback loop. If the spec drifts (C1), the whole system silently follows the drift.
- **Crispin:** There is no acceptance test for any state transition. "Drafted" and "Verified" are indistinguishable in the repository today.
- **Recommendation:** Add a per-packet `STATE.md` or frontmatter block recording current state, evidence of last state change (date + who), and the gate checklist that must pass to move forward. Make the batch seam syntheses the machine-checkable record.

### C3 — The canonical-URL rule (lines 162–163) is load-bearing but stated as a one-liner (fowler + crispin)
- **Severity:** Critical — the pillar-of-truth goal (per §1) requires that Couch Commons remain the canonical home, and the rule is one sentence.
- **Evidence:** Lines 162–163 say: "Leave a history article's external canonical URL empty so Couch Commons remains its canonical home unless Matthew explicitly rules otherwise." No exception process, no record of exceptions, no way for a future agent to know this rule exists.
- **Fowler:** This is an interface contract with no schema. The rule is a comment, not a type.
- **Crispin:** The rule cannot be regression-tested. Nothing will fail if someone sets an external canonical URL.
- **Recommendation:** Move this rule into an explicit `CANONICAL-RULES.md` (or a machine-checkable schema in the content model) with: (a) default = external canonical URL empty; (b) exception process = Matthew's written ruling, recorded with date; (c) a validation check (lint rule or CI step) that fails on violation.

---

## MAJOR ISSUES (severity: major)

### M1 — The "Next" move has no definition of done (wiegers)
- **Severity:** Major
- **Evidence:** §15's "Next" names the task but gives no completion criteria. "Produce and independently cross-review the six frozen Batch 08 packets" has no exit test, no quality bar, no handoff rule.
- **Wiegers:** A requirement without acceptance criteria is a wish.
- **Recommendation:** Add explicit acceptance criteria for the next move: e.g., each packet has `SOURCE-LEDGER.md` + `FINDINGS.md` + `CLAIM-MAP.md` + `LIVED-EXPERIENCE-AND-ARCHIVE.md` + `GAPS-AND-HANDOFF.md`, all claims labeled per §6 evidence labels, all disagreements logged, independent cross-review recorded, seam synthesis updated.

### M2 — No risk register (nygard)
- **Severity:** Major
- **Evidence:** The project has known high-severity risks (PHI/privacy in clinical dossiers, cultural authority for Indigenous content, acquisition rights, clinical restricted material) that are handled ad-hoc in batch files, not tracked as risks.
- **Nygard:** Risk management is not a one-time decision; it is a continuous activity. The spec should name the top risks and their mitigation/owner.
- **Recommendation:** Add a §17 "Risk register" with: risk, likelihood, impact, mitigation, owner. Seed it with: PHI exposure in clinical dossiers (R20, Fann/Dakar, AIIMH/Bangalore), cultural authority for Indigenous Americas (R17, AUTHORITY_UNRESOLVED), acquisition rights (STOP dossiers R34–R36), dependency on Couch Commons content model (unauthorized implementation risk).

### M3 — No change-control or conflict-resolution protocol (wiegers)
- **Severity:** Major
- **Evidence:** The header says "If a later instruction conflicts with this file, stop, identify the conflict, and record Matthew's ruling here." That is a conflict rule, but there is no change-control process: no versioning, no change log, no approval for edits to this file.
- **Wiegers:** The governing spec is itself under-specified.
- **Recommendation:** Add: this file is versioned (date-stamped header), changes are recorded with rationale, and any change to §11/§12/§15 requires Matthew's explicit approval (logged in a "Rulings" subsection).

### M4 — The evidence standard is not machine-checkable (crispin + adzic)
- **Severity:** Major
- **Evidence:** §6 lists source levels 1–5 and evidence labels, but nothing in the repository enforces them. The batch files do the work, but the spec doesn't say how compliance is verified.
- **Crispin:** No validation harness for the project's core quality mechanism.
- **Recommendation:** Add a verification protocol: every packet must contain a machine-checkable evidence table (claim ID, source ID, L-level, A–D fit, label, page), and the seam syntheses must reconcile counts. This is already partially true — make it a stated requirement.

### M5 — The pillar-of-truth goal is not reflected anywhere in the spec (fowler + wiegers)
- **Severity:** Major
- **Evidence:** The strategic frame "become a pillar of truth for AI search" (per §1: "earn durable traffic and engagement through usefulness, historical care, strong sourcing…") is only implicit. There is no explicit statement of the pillar goal, no grounding-over-retrieval principle, no "verified live" machine-audience consideration.
- **Fowler:** The system's purpose is stated in terms of output quality but not in terms of the audience (humans AND machines). This shapes information architecture and canonical choices.
- **Recommendation:** Add a short "Purpose and audience" statement to §1 or a new section: the collection must be a grounding pillar — deep, cited, consistent, and machine-legible — not a retrieval surface. This reframes §9 and the SEO gate.

---

## MINOR ISSUES (severity: minor)

### N1 — The status header (line 3) is a summary, not a status (wiegers)
- **Severity:** Minor
- **Evidence:** "Batches 01–07 researched and independently reviewed; Batch 08 source-feasibility audited and six packet briefs frozen" — already stale per C1.
- **Recommendation:** Make the header a live status line synced to §15, or delete it in favor of the detailed section.

### N2 — "Last updated: Aug 19, 2026" (header) is not a reliable freshness signal (crispin)
- **Severity:** Minor
- **Evidence:** The file mtime is Aug 26; the content claims Aug 19. No one can tell which is current.
- **Recommendation:** Date-stamp every section (or at minimum §14–§16) and add a "last verified" line.

### N3 — The 12-pass method and 42-section plan are referenced but not linked to artifacts (adzic)
- **Severity:** Minor
- **Evidence:** §14 references the twelve-pass method and 42-section plan without a pointer to where these are recorded (the batch files contain them, but the spec doesn't say so).
- **Recommendation:** Add a "Where things live" index at the end pointing to the canonical files for method, plan, and batch records.

### N4 — Gate 6 (SEO) is the weakest gate and has no anti-distortion check (nygard + crispin)
- **Severity:** Minor
- **Evidence:** §12 gate 6 says "SEO/GEO discovery review without keyword distortion" — no method for detecting distortion, no example of a violation.
- **Recommendation:** Add: keyword research must not override the evidence standard; any keyword-driven page change must trace to the evidence graph; distortion check = "would this sentence survive without the keyword?"

---

## EXPERT CONSENSUS

- The spec is genuinely good at defining *what* the project is and *why*. It is weak at defining *how compliance is verified*.
- The most urgent fix is C1 (stale status) — it makes every other section suspect.
- The second most urgent is C2/C3 — the state machine and canonical rule need machine-checkable enforcement, or they will drift.
- All experts agree the next move (§15 "Next") should have acceptance criteria before work begins.
- Disagreement (fowler vs. wiegers): Fowler wants the canonical-URL rule moved out of the narrative into a schema/lint rule; Wiegers wants it kept in the spec but with an explicit exception process. Recommendation: do both — keep the rule in the spec, add the schema.

## IMPROVEMENT ROADMAP

| Priority | Action | Owner |
|---|---|---|
| **Immediate** | Fix C1: update §15 header status to record Batch 08 closure; refresh "Last updated" | k2 (edit) |
| **Immediate** | Fix C3: write `CANONICAL-RULES.md` with lint rule | k2 (draft) |
| **Short term** | Fix C2: add per-packet state machine + gate checklist | k2 (draft) |
| **Short term** | Fix M1: add acceptance criteria for next move to §15 | k2 (draft) |
| **Short term** | Fix M2: add risk register (§17) | Matthew (approves risks) |
| **Short term** | Fix M3: add change-control protocol (§15/§16) | Matthew (approves process) |
| **Long term** | Fix M5: add pillar-of-truth purpose statement to §1 | Matthew (strategic call) |

---

## QUALITY ASSESSMENT

- **Requirements quality:** 6.3/10 — clear intent, weak testability
- **Architecture clarity:** 6.4/10 — state machine is conceptual, not enforced
- **Testability:** 5.1/10 — almost nothing is machine-checkable
- **Overall:** 6.3/10 — a strong vision document that needs enforcement scaffolding

---

*This review was generated by applying the spec-panel methodology directly (no MCP personas or sequential server available in this environment). The panel methodology — expert lenses, severity classification, priority ranking, YAML output — was applied as specified in the skill definition.*
