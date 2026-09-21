# Fleet Delegation — Copy-Paste Commands

**Date:** 2026-09-21
**Purpose:** Bounded task assignments for K2 and Tombstone. Start small (2 leaves each), review quality, then scale.

---

## COMMAND FOR K2 (paste into K2's harness)

```
Task: Draft two time-band pages for the history-of-brain project.

Workspace: /Volumes/AI Projects/history-of-brain (git repo, branch main).

Read before drafting:
- history-of-brain/PROJECT-BRAIN.md §3 (voice), §6 (evidence standard), §11 (work states)
- history-of-brain/sources/EVIDENCE-MODEL.md (full evidence model)
- outline/MASTER-CONTENT-OUTLINE.md (T00 and T01 specs)
- content/start-here/H05.md (format example — Research/Draft/References)
- gates/leaf-h05.md (gates format — 9 gates G1-G9)

Voice register: house-voice craft discipline (specificity, no slop, citation density, high sentence-length variance, negation-inversions where they earn their place) + Jack Hanna energy (curious, vivid, delighted by discovery) + contractions allowed (sparingly, ~1-2 per page).

For each leaf (T00, T01):
1. Write content/time-bands/T00.md (and T01.md) with three sections:
   - ## Research: 7+ key facts, each as a bullet with [Source: ...] tag and full URL
   - ## Draft: 300-900 words of prose in the voice register above
   - ## References: 7+ entries with full URLs, each tagged [Primary]/[Scholarly]/[Institutional]/[Reference]/[Web]
2. Write gates/leaf-t00.md (and leaf-t01.md) with 9 gates (G1-G9), copying the format from gates/leaf-h05.md.
3. Run: node /Users/matthewsexton/.agents/skills/unlazy/scripts/gate-check.mjs --status gates/leaf-t00.md
   Ensure ALL MET (9/9). Fix any failures before committing.
4. git add + git commit with a descriptive message.

Hard rules:
- No PHI. Absolute.
- Every factual claim needs provenance. Never cite a source you have not opened.
- Corrections beat additions. If you find a conflict, record it — do not silently resolve it.
- Do not draft public prose beyond the leaf scope. No SEO, no social copy, no implementation.
- If a claim cannot be sourced, mark it [unverified] in the draft and record the gap.

T00 spec: "Before writing — bodies, care, survival, and the limit of inference." Working range: deep prehistory to locally surviving written records. Sub-pages: T00-A (How can we study minds before words survive?), T00-B (Trepanation: what a hole in a skull can—and cannot—tell us), T00-C (Did prehistoric communities care for disabled people?), T00-D (Evidence lab: build a claim from a bone).

T01 spec: "First written worlds — signs, bodies, hearts, spirits, and households." Working range: c. 3200–500 BCE, varying by place. Sub-pages: T01-A (Mesopotamian signs, remedies, relationships, and suffering), T01-B (Is Ludlul bēl nēmeqi a patient memoir?), T01-C (Egypt's heart, brain, body, family, and the dead), T01-D (Read the Edwin Smith Papyrus without inventing "ancient neuroscience"), T01-E (Nubia and Kush beyond Egypt's shadow), T01-F (Breath, heart, spirit, and embodied selves in Levantine and Iranian texts), T01-G (What the first written archives leave out).

Deliverable: 2 content files + 2 gates files, all gates MET, committed to the repo.
```

---

## COMMAND FOR TOMBSTONE (paste into Tombstone's harness)

```
Task: Draft two guide pages for the history-of-brain project.

Workspace: /Volumes/AI Projects/history-of-brain (git repo, branch main).

Read before drafting:
- history-of-brain/PROJECT-BRAIN.md §3 (voice), §6 (evidence standard), §11 (work states)
- history-of-brain/sources/EVIDENCE-MODEL.md (full evidence model)
- outline/MASTER-CONTENT-OUTLINE.md (Q01 and Q02 specs)
- content/start-here/H05.md (format example — Research/Draft/References)
- gates/leaf-h05.md (gates format — 9 gates G1-G9)

Voice register: house-voice craft discipline (specificity, no slop, citation density, high sentence-length variance, negation-inversions where they earn their place) + Jack Hanna energy (curious, vivid, delighted by discovery) + contractions allowed (sparingly, ~1-2 per page).

For each leaf (Q01, Q02):
1. Write content/guides/Q01.md (and Q02.md) with three sections:
   - ## Research: 7+ key facts, each as a bullet with [Source: ...] tag and full URL
   - ## Draft: 300-900 words of prose in the voice register above
   - ## References: 7+ entries with full URLs, each tagged [Primary]/[Scholarly]/[Institutional]/[Reference]/[Web]
2. Write gates/leaf-q01.md (and leaf-q02.md) with 9 gates (G1-G9), copying the format from gates/leaf-h05.md.
3. Run: node /Users/matthewsexton/.agents/skills/unlazy/scripts/gate-check.mjs --status gates/leaf-q01.md
   Ensure ALL MET (9/9). Fix any failures before committing.
4. git add + git commit with a descriptive message.

Hard rules:
- No PHI. Absolute.
- Every factual claim needs provenance. Never cite a source you have not opened.
- Corrections beat additions. If you find a conflict, record it — do not silently resolve it.
- Do not draft public prose beyond the leaf scope. No SEO, no social copy, no implementation.
- If a claim cannot be sourced, mark it [unverified] in the draft and record the gap.

Q01 spec: "Where did people think the mind lived?" Topics: brain; heart; breath; soul; body; land/kin; mind–body debates; modern localization. This is a thematic guide that cuts across time bands — it is NOT a chronological page. It asks: where did different cultures and periods locate the mind, and how did those answers change?

Q02 spec: "What counted as mental illness before 'mental illness'?" Topics: period terms; distress/difference; possession; disability; danger; retrospective-diagnosis rules. This is a thematic guide that cuts across time bands — it is NOT a chronological page. It asks: what did different cultures and periods count as "mental illness" (or its equivalent), and how do we avoid projecting modern categories onto them?

Deliverable: 2 content files + 2 gates files, all gates MET, committed to the repo.
```

---

## Review Protocol (for me, after they deliver)

1. Pull the commits from the repo.
2. Read each content file against the voice register and evidence standard.
3. Run the gate-check on each gates file.
4. Check for: PHI, unsourced claims, anachronistic projection, voice drift, format errors.
5. If quality is good → assign the next batch. If not → send corrections back.
