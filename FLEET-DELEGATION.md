# Fleet Delegation — Detailed Copy-Paste Commands

**Date:** 2026-09-21
**Purpose:** Bounded task assignments for K2 and Tombstone. Start small (2 leaves each), review quality, then scale.

**How to use:** Copy the entire block between the `---PASTE START---` and `---PASTE END---` markers and paste it into the agent's harness as a single message.

---

## README (for the agent — re-orient here if you lose track)

**Project:** history-of-brain — a cited global history of the mind and mental health for Couch Commons.
**Workspace:** `/Volumes/AI Projects/history-of-brain` (git repo, branch `main`).

**Your job:** Draft 2 content pages + 2 gates files. All gates must be MET before you commit.

**Key files (read before writing):**
| File | What it gives you |
|---|---|
| `history-of-brain/PROJECT-BRAIN.md` | Governing spec — voice (§3), evidence (§6), work states (§11), drift alarms (§16) |
| `history-of-brain/sources/EVIDENCE-MODEL.md` | The 7 record types, 12 rules, claim types, protocols |
| `history-of-brain/outline/CHRONOLOGICAL-BACKBONE.md` | Time-band node descriptions + citations (for K2) |
| `history-of-brain/outline/MASTER-CONTENT-OUTLINE.md` | Guide specs + 13-part page anatomy (for Tombstone) |
| `content/start-here/H05.md` | Format example — Research / Draft / References |
| `gates/leaf-h05.md` | Gates format — 9 gates G1–G9 |

**Voice register (quick):**
- Specificity: concrete nouns, numerals, names, dates. No "ancient people" — say "a 17th-century-BCE Egyptian scroll."
- No slop: never "it's important to note," "delve into," "landscape," "tapestry," "navigate the complexities."
- Citation density: ~10 inline citations per page (surname + year).
- Sentence variance: mix 5-word and 40-word sentences. No uniform rhythm.
- Negation-inversions: "not-X. It is Y." at most 1 per 120 words.
- Jack Hanna energy: curious, vivid, delighted. A naturalist, not a textbook.
- Contractions: 1–2 per page max.

**Format (quick):**
```
# <ID> — <Title>
> *tagline*
## Research
- [fact](URL) [Source: Author (Year), "Title" — URL]   ← 7+ bullets
## Draft
[300–900 words of prose]
## References
- [Author (Year). "Title." — description](URL) [Tag]   ← 7+ entries, ≥1 [Primary]
```

**Hard rules (quick):**
1. No PHI. Absolute.
2. Every claim sourced. Unsourceable → mark `[unverified]`.
3. Never cite a source you haven't opened.
4. Corrections beat additions. Record conflicts, don't resolve them silently.
5. No public prose beyond the leaf scope.
6. Never use the word "diagnosis" in the draft (use "label" or "category").
7. No modern categories projected onto historical people.
8. No firstness claims without verification.

**Gate-check command:**
```bash
node /Users/matthewsexton/.agents/skills/unlazy/scripts/gate-check.mjs --status gates/leaf-<id>.md
```
Must report **ALL MET (9 met)** before you commit.

**Commit command:**
```bash
cd /Volumes/AI Projects/history-of-brain
git add <your files>
git commit -m "<ID> + <ID> drafted and gated 9/9"
git push
```

---

## COMMAND FOR K2

---PASTE START---

You are working on the **history-of-brain** project: a cited global history of the mind and mental health for the Couch Commons collection. You are drafting two time-band pages. Follow these instructions exactly.

### STEP 1 — Read these files (in this order)

Open and read each file in full before you write anything:

1. `/Volumes/AI Projects/history-of-brain/history-of-brain/PROJECT-BRAIN.md` — the governing spec. Focus on §3 (Voice), §6 (Evidence standard), §11 (Work states), §16 (Drift alarms).
2. `/Volumes/AI Projects/history-of-brain/history-of-brain/sources/EVIDENCE-MODEL.md` — the full evidence model. Focus on: the 7 record types, the 12 non-negotiable rules, claim types/burdens, the "Historical diagnosis" protocol, the "Current science and clinical comparisons" protocol, and the "Prehistory and archaeology" protocol.
3. `/Volumes/AI Projects/history-of-brain/history-of-brain/outline/CHRONOLOGICAL-BACKBONE.md` — the chronological backbone. Focus on band B0 (for T00) and band B1 (for T01). These bands contain the node descriptions, citations, and editorial rulings you need.
4. `/Volumes/AI Projects/history-of-brain/content/start-here/H05.md` — a completed content page. Study its exact format: the `## Research` section (bullets with `[Source: ...]` tags), the `## Draft` section (prose), the `## References` section (numbered entries with tags).
5. `/Volumes/AI Projects/history-of-brain/gates/leaf-h05.md` — a completed gates file. Study its exact format: 9 gates (G1–G9), each with a CHECK command, an EXPECT pattern, and an EVIDENCE value.

### STEP 2 — Understand the voice register

The voice is: **house-voice craft discipline + Jack Hanna energy + contractions allowed (sparingly).**

What this means in practice:
- **Specificity:** Use concrete nouns, numerals, names, and dates. Not "ancient people" but "a 17th-century-BCE Egyptian scroll." Not "some scholars" but "Ramirez Rozzi and Froment (2018)."
- **No slop:** Never use phrases like "it's important to note," "in today's world," "as we all know," "delve into," "landscape," "tapestry," "navigate the complexities." Cut them.
- **Citation density:** Cite sources inline by surname + year (e.g., "Ramirez Rozzi and Froment (2018) show that..."). Aim for roughly 10 inline citations per page.
- **High sentence-length variance:** Mix short punchy sentences (5–10 words) with longer complex ones (30–50 words). The standard deviation should be high. Do not write in a uniform rhythm.
- **Negation-inversions:** Use the pattern "not-X. It is Y." where the second clause names a mechanism. Example: "A healed skull documents an intervention, not an outcome." Use these sparingly — at most 1 per 120 words.
- **Jack Hanna energy:** Be curious, vivid, and delighted by discovery. You are a naturalist describing something wonderful and strange. Not a textbook. Not a list. A person who is genuinely fascinated by what the evidence shows.
- **Contractions:** Allowed, but use them sparingly (1–2 per page). Not "don't" everywhere. One or two where they sound natural.

**Bad example (slop):** "It is important to note that ancient civilizations had various beliefs about the mind, which were often tied to their religious practices. In today's world, we can see how these beliefs have evolved..."

**Good example (house voice + Jack Hanna):** "The Edwin Smith Papyrus, a 17th-century-BCE Egyptian scroll, walks through forty-eight cases of wounds and trauma with a calm, clinical formula — injury, diagnosis, prognosis, treatment — and reaches almost never for magic. That restraint is the point. It is not a priest's text. It is a surgeon's."

### STEP 3 — Write T00

**File path:** `/Volumes/AI Projects/history-of-brain/content/time-bands/T00.md`

**T00 spec:** "Before writing — bodies, care, survival, and the limit of inference." Working range: deep prehistory to locally surviving written records. Guide job: Teach responsible inference before making any claims about prehistoric minds.

**Sub-pages to cover in the draft:**
- T00-A: How can we study minds before words survive? (archaeology, paleopathology, burial context, disability, assistance, the difference between an observed injury and a story about motive)
- T00-B: Trepanation: what a hole in a skull can—and cannot—tell us (compare places and techniques only where physical context supports the comparison; cite Ramirez Rozzi and Froment 2018)
- T00-C: Did prehistoric communities care for disabled people? (use bounded cases such as Shanidar to teach competing interpretations of survival and assistance; cite Pomeroy et al. and Spikins et al.)
- T00-D: Evidence lab: build a claim from a bone (let readers separate documented alteration, strongly supported survival, plausible assistance, disputed motive, and unknown experience)

**Format (exact):**

```markdown
# T00 — Before Writing: Bodies, Care, Survival, and the Limit of Inference

> *[One-sentence tagline that captures the page's job.]*

## Research

- [Key fact 1 with provenance](URL) [Source: Author (Year), "Title" — URL]
- [Key fact 2 with provenance](URL) [Source: Author (Year), "Title" — URL]
- [Key fact 3 with provenance](URL) [Source: Author (Year), "Title" — URL]
- [Key fact 4 with provenance](URL) [Source: Author (Year), "Title" — URL]
- [Key fact 5 with provenance](URL) [Source: Author (Year), "Title" — URL]
- [Key fact 6 with provenance](URL) [Source: Author (Year), "Title" — URL]
- [Key fact 7 with provenance](URL) [Source: Author (Year), "Title" — URL]
- [Key fact 8 with provenance](URL) [Source: Author (Year), "Title" — URL]

## Draft

[300–900 words of prose in the voice register. Cover all four sub-pages (T00-A through T00-D). Use inline citations by surname + year. Include at least one negation-inversion. End with a transition to T01.]

## References

- [Author (Year). "Title." Publication. — description](URL) [Scholarly] [Primary]
- [Author (Year). "Title." Publication. — description](URL) [Scholarly]
- [Institution. "Title." — description](URL) [Institutional]
- [Reference work. "Title." — description](URL) [Reference]
- [Web source. "Title." — description](URL) [Web]
- [Additional reference](URL) [Reference]
- [Additional reference](URL) [Reference]
```

**Requirements:**
- `## Research`: 7+ bullets, each with a `[Source: ...]` tag containing a full URL.
- `## Draft`: 300–900 words of prose. Cover all four sub-pages. Use inline citations.
- `## References`: 7+ entries, each with a full URL and a tag ([Primary]/[Scholarly]/[Institutional]/[Reference]/[Web]). At least 1 must be tagged [Primary].

### STEP 4 — Write T01

**File path:** `/Volumes/AI Projects/history-of-brain/content/time-bands/T01.md`

**T01 spec:** "First written worlds — signs, bodies, hearts, spirits, and households." Working range: c. 3200–500 BCE, varying by place. Guide job: Show what writing adds to the record without inventing a medicine-versus-magic ladder.

**Sub-pages to cover in the draft:**
- T01-A: Mesopotamian signs, remedies, relationships, and suffering (diagnostic-prognostic tablets, ritual and material remedies, divine and social relations; cite the Electronic Babylonian Library)
- T01-B: Is *Ludlul bēl nēmeqi* a patient memoir? (compare literary voice, scribal setting, and modern reconstruction; cite the Electronic Babylonian Library)
- T01-C: Egypt's heart, brain, body, family, and the dead (put the Edwin Smith Papyrus beside heart-centered vocabularies and family petitions; do not turn one trauma text into "Egyptian neuroscience"; cite the National Library of Medicine and UCL Letters to the Dead)
- T01-D: Read the Edwin Smith Papyrus without inventing "ancient neuroscience" (cite the National Library of Medicine)
- T01-E: Nubia and Kush beyond Egypt's shadow (build a distinct evidence lane; mark the limits created by language survival and unequal excavation; cite Smith)
- T01-F: Breath, heart, spirit, and embodied selves in Levantine and Iranian texts (follow named words for breath, heart, life, spirit, agency, and suffering without translating them all as "mind")
- T01-G: What the first written archives leave out (non-literate people, children, enslaved people, rural households, and most women appear through elite or institutional records, if at all)

**Format:** Same as T00 (see STEP 3).

**Requirements:** Same as T00 (7+ research bullets, 300–900 word draft, 7+ references with at least 1 [Primary]).

### STEP 5 — Write the gates files

**File paths:**
- `/Volumes/AI Projects/history-of-brain/gates/leaf-t00.md`
- `/Volumes/AI Projects/history-of-brain/gates/leaf-t01.md`

**Format (copy this exact structure, adjusting the scope line and file paths):**

```markdown
# Leaf gates: T00 — Before Writing: Bodies, Care, Survival, and the Limit of Inference

Scope: Write the T00 content page (content/time-bands/T00.md): teach responsible inference before making any claims about prehistoric minds. Cover T00-A through T00-D. Reader question: "How can we study minds before words survive?"

- [ ] G1: Draft file exists at content/time-bands/T00.md
  CHECK: test -f content/time-bands/T00.md
  EXPECT: (no output)
  EVIDENCE: (no output)

- [ ] G2: Draft has all three required sections in order (Research, Draft, References)
  CHECK: grep -E '^## (Research|Draft|References)' content/time-bands/T00.md | awk '{print $2}' | tr '\n' ' ' | grep -q 'Research Draft References'
  EXPECT: (no output)
  EVIDENCE: (no output)

- [ ] G3: Research section states >= 7 key facts, each with provenance
  CHECK: awk '/^## Research/,/^## Draft/' content/time-bands/T00.md | grep -c '^- \['
  EXPECT: /^[7-9][0-9]$/
  EVIDENCE: (no output)

- [ ] G4: Draft section is 300-900 words of prose
  CHECK: awk '/^## Draft/,/^## References/' content/time-bands/T00.md | sed 's/^## Draft//' | wc -w
  EXPECT: /^(3[0-9][0-9]|[4-8][0-9][0-9])$/
  EVIDENCE: (no output)

- [ ] G5: References section has >= 7 entries with full URLs
  CHECK: awk '/^## References/,0' content/time-bands/T00.md | grep -c '^- \['
  EXPECT: /^[5-9]$/
  EVIDENCE: (no output)

- [ ] G6: >= 1 reference is tagged [Primary]
  CHECK: awk '/^## References/,0' content/time-bands/T00.md | grep -c '\[Primary\]'
  EXPECT: /^1$/
  EVIDENCE: (no output)

- [ ] G7: No PHI markers in the draft (Drift Law)
  CHECK: grep -ciE 'patient id|case (no|number)|mrn|diagnosis' content/time-bands/T00.md
  EXPECT: /^0$/
  EVIDENCE: (no output)

- [ ] G8: Draft links to backbone spine and internal pages (internal links)
  CHECK: grep -cE 'CHRONOLOGICAL-BACKBONE|T00|T01|H02|H03|H05' content/time-bands/T00.md
  EXPECT: /^[3-9]$/
  EVIDENCE: (no output)

- [ ] G9: All Research bullets carry a [Source: ...] tag with a URL
  CHECK: awk '/^## Research/,/^## Draft/' content/time-bands/T00.md | grep '^- \[' | grep -cv '\[Source: .*[https://].*\]'
  EXPECT: /^0$/
  EVIDENCE: (no output)
```

Repeat the same structure for `leaf-t01.md` (adjust the scope line and file paths to T01).

### STEP 6 — Run the gate-check

Run these commands from the workspace root (`/Volumes/AI Projects/history-of-brain`):

```bash
node /Users/matthewsexton/.agents/skills/unlazy/scripts/gate-check.mjs --status gates/leaf-t00.md
node /Users/matthewsexton/.agents/skills/unlazy/scripts/gate-check.mjs --status gates/leaf-t01.md
```

Both must report **ALL MET (9 met)**. If any gate is UNMET:
1. Read the CHECK command and the EXPECT pattern.
2. Run the CHECK command manually to see the actual output.
3. Fix the content file (not the gates file) until the CHECK output matches EXPECT.
4. Re-run the gate-check.
5. Once ALL MET, flip the boxes from `[ ]` to `[x]` and fill in the EVIDENCE values with the actual numbers.

### STEP 7 — Commit

```bash
cd /Volumes/AI Projects/history-of-brain
git add content/time-bands/T00.md content/time-bands/T01.md gates/leaf-t00.md gates/leaf-t01.md
git commit -m "T00 + T01 time bands drafted and gated 9/9"
git push
```

### HARD RULES (non-negotiable)

1. **No PHI. Absolute.** No patient identifiers, case numbers, MRNs, or specific diagnoses of specific people.
2. **Every factual claim needs provenance.** If you cannot source a claim, mark it `[unverified]` in the draft and record the gap. Never silently drop it.
3. **Never cite a source you have not opened.** If you reference a source, you must have actually read it (or it must be in the backbone/outline with a full URL).
4. **Corrections beat additions.** If you find a conflict between sources, record it. Do not silently resolve it.
5. **Do not draft public prose beyond the leaf scope.** No SEO copy, no social media, no implementation, no publication.
6. **Do not use the word "diagnosis" in the draft.** Use "label" or "category" instead. (The gate G7 checks for "diagnosis" as a PHI marker.)
7. **Do not project modern categories onto historical people.** A 3000-year-old person did not have "depression" or "anxiety disorder." Describe what they experienced in their own terms.
8. **Do not invent firstness claims.** "The first psychiatric hospital" is a claim that requires explicit review. If you cannot verify it, do not make it.

### COMMON MISTAKES TO AVOID

- Writing in a uniform rhythm (all sentences the same length). Vary it.
- Using slop phrases ("it's important to note," "in today's world," "delve into," "landscape," "tapestry").
- Citing a source without actually reading it.
- Making firstness claims without verification.
- Projecting modern diagnoses onto historical people.
- Forgetting the `[Source: ...]` tag on research bullets.
- Forgetting the tag ([Primary]/[Scholarly]/etc.) on references.
- Writing more than 900 words in the Draft section.
- Writing fewer than 300 words in the Draft section.
- Forgetting to run the gate-check before committing.

---PASTE END---

---

## COMMAND FOR TOMBSTONE

---PASTE START---

You are working on the **history-of-brain** project: a cited global history of the mind and mental health for the Couch Commons collection. You are drafting two guide pages. Follow these instructions exactly.

### STEP 1 — Read these files (in this order)

Open and read each file in full before you write anything:

1. `/Volumes/AI Projects/history-of-brain/history-of-brain/PROJECT-BRAIN.md` — the governing spec. Focus on §3 (Voice), §6 (Evidence standard), §11 (Work states), §16 (Drift alarms).
2. `/Volumes/AI Projects/history-of-brain/history-of-brain/sources/EVIDENCE-MODEL.md` — the full evidence model. Focus on: the 7 record types, the 12 non-negotiable rules, claim types/burdens, the "Historical diagnosis" protocol, the "Current science and clinical comparisons" protocol.
3. `/Volumes/AI Projects/history-of-brain/history-of-brain/outline/MASTER-CONTENT-OUTLINE.md` — the master content outline. Focus on §4 (Follow a human question — long-arc authority guides) for the Q01 and Q02 specs, and §8 (Page anatomy) for the 13-part guide structure.
4. `/Volumes/AI Projects/history-of-brain/content/start-here/H05.md` — a completed content page. Study its exact format: the `## Research` section (bullets with `[Source: ...]` tags), the `## Draft` section (prose), the `## References` section (numbered entries with tags).
5. `/Volumes/AI Projects/history-of-brain/gates/leaf-h05.md` — a completed gates file. Study its exact format: 9 gates (G1–G9), each with a CHECK command, an EXPECT pattern, and an EVIDENCE value.

### STEP 2 — Understand the voice register

The voice is: **house-voice craft discipline + Jack Hanna energy + contractions allowed (sparingly).**

What this means in practice:
- **Specificity:** Use concrete nouns, numerals, names, and dates. Not "ancient people" but "a 17th-century-BCE Egyptian scroll." Not "some scholars" but "Ramirez Rozzi and Froment (2018)."
- **No slop:** Never use phrases like "it's important to note," "in today's world," "as we all know," "delve into," "landscape," "tapestry," "navigate the complexities." Cut them.
- **Citation density:** Cite sources inline by surname + year (e.g., "Ramirez Rozzi and Froment (2018) show that..."). Aim for roughly 10 inline citations per page.
- **High sentence-length variance:** Mix short punchy sentences (5–10 words) with longer complex ones (30–50 words). The standard deviation should be high. Do not write in a uniform rhythm.
- **Negation-inversions:** Use the pattern "not-X. It is Y." where the second clause names a mechanism. Example: "A healed skull documents an intervention, not an outcome." Use these sparingly — at most 1 per 120 words.
- **Jack Hanna energy:** Be curious, vivid, and delighted by discovery. You are a naturalist describing something wonderful and strange. Not a textbook. Not a list. A person who is genuinely fascinated by what the evidence shows.
- **Contractions:** Allowed, but use them sparingly (1–2 per page). Not "don't" everywhere. One or two where they sound natural.

**Bad example (slop):** "It is important to note that ancient civilizations had various beliefs about the mind, which were often tied to their religious practices. In today's world, we can see how these beliefs have evolved..."

**Good example (house voice + Jack Hanna):** "The Edwin Smith Papyrus, a 17th-century-BCE Egyptian scroll, walks through forty-eight cases of wounds and trauma with a calm, clinical formula — injury, diagnosis, prognosis, treatment — and reaches almost never for magic. That restraint is the point. It is not a priest's text. It is a surgeon's."

### STEP 3 — Understand the guide format

Guides are different from time bands. A guide is a **thematic page** that cuts across time bands. It answers a substantial question and links into multiple time bands and places.

**The 13-part page anatomy (from MASTER-CONTENT-OUTLINE.md §8):**

1. **Direct answer:** 40–80 words that answer the page's real question without flattening it.
2. **Why this story is trickier than it looks:** the misconception, category problem, or evidence limit.
3. **Map in time and place:** dates and regions that apply—and those that do not.
4. **What people called it then:** original terms, language, translation, and changing meaning.
5. **What people thought was happening:** multiple explanations in their settings.
6. **What happened to people:** care, relief, coping, status, rights, labor, coercion, and harm.
7. **A voice or an honest silence:** direct testimony when ethical and available; otherwise a specific account of the gap.
8. **How the idea or practice traveled:** named people, routes, institutions, media, and power.
9. **What historians debate:** serious interpretations and their evidence.
10. **Then versus now:** a visually distinct current-evidence section, never medical advice.
11. **How we know:** claim-level notes, objects, records, translations, and limitations.
12. **Where to go next:** one chronological, one thematic, one regional, and one evidence link.
13. **Complete citations:** full end references matching the useful links in the body.

**For this task, you do NOT need to write all 13 parts as separate sections.** The content file uses the standard three-section format (Research / Draft / References). The 13-part anatomy is the *intellectual structure* of the draft — your prose should cover those 13 jobs, but they are woven into the prose, not labeled as separate sections.

### STEP 4 — Write Q01

**File path:** `/Volumes/AI Projects/history-of-brain/content/guides/Q01.md`

**Q01 spec:** "Where did people think the mind lived?" Topics: brain; heart; breath; soul; body; land/kin; mind–body debates; modern localization.

**Guide job:** This is a thematic guide that cuts across time bands. It asks: where did different cultures and periods locate the mind, and how did those answers change? It is NOT a chronological page. It is a question-driven page that draws on multiple time bands and regions.

**What the draft should cover (weave these into the prose):**
- The direct answer (40–80 words): the mind was located in different places by different cultures — brain, heart, breath, soul, body, land/kin — and the modern localization in the brain is one answer, not the only one.
- Why this is trickier than it looks: the "mind-body" debate is not a single argument but a family of arguments that changed over time and place.
- Map in time and place: Mesopotamian heart-centered vocabularies, Egyptian heart/brain duality, Greek brain-centered naturalism, South Asian *manas*, Chinese *xin* (heart-mind), Indigenous land/kin models.
- What people called it then: *manas*, *xin*, *qalb*, *neph* (Egyptian heart), *psyche*, *soul*, *spirit*, *breath*.
- What people thought was happening: multiple explanations in their settings (divine, natural, social, spiritual).
- What happened to people: how the location of the mind affected care, control, and status.
- A voice or an honest silence: direct testimony when available; otherwise a specific account of the gap.
- How the idea traveled: named people, routes, institutions, media, and power.
- What historians debate: serious interpretations and their evidence.
- Then versus now: the modern brain-localization model, kept separate from historical explanation.
- How we know: claim-level notes, objects, records, translations, and limitations.
- Where to go next: links to time bands, other guides, places, and evidence pages.

**Format (exact):**

```markdown
# Q01 — Where Did People Think the Mind Lived?

> *[One-sentence tagline that captures the page's job.]*

## Research

- [Key fact 1 with provenance](URL) [Source: Author (Year), "Title" — URL]
- [Key fact 2 with provenance](URL) [Source: Author (Year), "Title" — URL]
- [Key fact 3 with provenance](URL) [Source: Author (Year), "Title" — URL]
- [Key fact 4 with provenance](URL) [Source: Author (Year), "Title" — URL]
- [Key fact 5 with provenance](URL) [Source: Author (Year), "Title" — URL]
- [Key fact 6 with provenance](URL) [Source: Author (Year), "Title" — URL]
- [Key fact 7 with provenance](URL) [Source: Author (Year), "Title" — URL]
- [Key fact 8 with provenance](URL) [Source: Author (Year), "Title" — URL]

## Draft

[300–900 words of prose in the voice register. Cover the 13-part anatomy woven into the prose. Use inline citations by surname + year. Include at least one negation-inversion. End with "Where to go next" links.]

## References

- [Author (Year). "Title." Publication. — description](URL) [Scholarly] [Primary]
- [Author (Year). "Title." Publication. — description](URL) [Scholarly]
- [Institution. "Title." — description](URL) [Institutional]
- [Reference work. "Title." — description](URL) [Reference]
- [Web source. "Title." — description](URL) [Web]
- [Additional reference](URL) [Reference]
- [Additional reference](URL) [Reference]
```

**Requirements:**
- `## Research`: 7+ bullets, each with a `[Source: ...]` tag containing a full URL.
- `## Draft`: 300–900 words of prose. Cover the 13-part anatomy. Use inline citations.
- `## References`: 7+ entries, each with a full URL and a tag ([Primary]/[Scholarly]/[Institutional]/[Reference]/[Web]). At least 1 must be tagged [Primary].

### STEP 5 — Write Q02

**File path:** `/Volumes/AI Projects/history-of-brain/content/guides/Q02.md`

**Q02 spec:** "What counted as mental illness before 'mental illness'?" Topics: period terms; distress/difference; possession; disability; danger; retrospective-diagnosis rules.

**Guide job:** This is a thematic guide that cuts across time bands. It asks: what did different cultures and periods count as "mental illness" (or its equivalent), and how do we avoid projecting modern categories onto them? It is NOT a chronological page. It is a question-driven page that draws on multiple time bands and regions.

**What the draft should cover (weave these into the prose):**
- The direct answer (40–80 words): "mental illness" is a modern category. Before it, different cultures counted different things — distress, difference, possession, disability, danger — and these were not all the same thing.
- Why this is trickier than it looks: the retrospective-diagnosis problem. We cannot assign a modern label to a historical person without strong justification.
- Map in time and place: Mesopotamian *unmada*-type categories, Egyptian heart-centered distress, Greek *mania* and *melancholia*, South Asian *unmada*, Chinese *dian* and *kuang*, Indigenous concepts of distress.
- What people called it then: period terms in their original languages, with cautious working glosses.
- What people thought was happening: multiple explanations in their settings (divine, natural, social, spiritual).
- What happened to people: care, relief, coping, status, rights, labor, coercion, and harm.
- A voice or an honest silence: direct testimony when available; otherwise a specific account of the gap.
- How the idea traveled: named people, routes, institutions, media, and power.
- What historians debate: serious interpretations and their evidence.
- Then versus now: the modern diagnostic categories, kept separate from historical explanation.
- How we know: claim-level notes, objects, records, translations, and limitations.
- Where to go next: links to time bands, other guides, places, and evidence pages.

**Format:** Same as Q01 (see STEP 4).

**Requirements:** Same as Q01 (7+ research bullets, 300–900 word draft, 7+ references with at least 1 [Primary]).

### STEP 6 — Write the gates files

**File paths:**
- `/Volumes/AI Projects/history-of-brain/gates/leaf-q01.md`
- `/Volumes/AI Projects/history-of-brain/gates/leaf-q02.md`

**Format (copy this exact structure, adjusting the scope line and file paths):**

```markdown
# Leaf gates: Q01 — Where Did People Think the Mind Lived?

Scope: Write the Q01 content page (content/guides/Q01.md): a thematic guide that cuts across time bands. Covers brain, heart, breath, soul, body, land/kin, mind-body debates, and modern localization. Reader question: "Where did people think the mind lived?"

- [ ] G1: Draft file exists at content/guides/Q01.md
  CHECK: test -f content/guides/Q01.md
  EXPECT: (no output)
  EVIDENCE: (no output)

- [ ] G2: Draft has all three required sections in order (Research, Draft, References)
  CHECK: grep -E '^## (Research|Draft|References)' content/guides/Q01.md | awk '{print $2}' | tr '\n' ' ' | grep -q 'Research Draft References'
  EXPECT: (no output)
  EVIDENCE: (no output)

- [ ] G3: Research section states >= 7 key facts, each with provenance
  CHECK: awk '/^## Research/,/^## Draft/' content/guides/Q01.md | grep -c '^- \['
  EXPECT: /^[7-9][0-9]$/
  EVIDENCE: (no output)

- [ ] G4: Draft section is 300-900 words of prose
  CHECK: awk '/^## Draft/,/^## References/' content/guides/Q01.md | sed 's/^## Draft//' | wc -w
  EXPECT: /^(3[0-9][0-9]|[4-8][0-9][0-9])$/
  EVIDENCE: (no output)

- [ ] G5: References section has >= 7 entries with full URLs
  CHECK: awk '/^## References/,0' content/guides/Q01.md | grep -c '^- \['
  EXPECT: /^[5-9]$/
  EVIDENCE: (no output)

- [ ] G6: >= 1 reference is tagged [Primary]
  CHECK: awk '/^## References/,0' content/guides/Q01.md | grep -c '\[Primary\]'
  EXPECT: /^1$/
  EVIDENCE: (no output)

- [ ] G7: No PHI markers in the draft (Drift Law)
  CHECK: grep -ciE 'patient id|case (no|number)|mrn|diagnosis' content/guides/Q01.md
  EXPECT: /^0$/
  EVIDENCE: (no output)

- [ ] G8: Draft links to backbone spine and internal pages (internal links)
  CHECK: grep -cE 'CHRONOLOGICAL-BACKBONE|Q01|Q02|T00|T01|H02|H03|H05' content/guides/Q01.md
  EXPECT: /^[3-9]$/
  EVIDENCE: (no output)

- [ ] G9: All Research bullets carry a [Source: ...] tag with a URL
  CHECK: awk '/^## Research/,/^## Draft/' content/guides/Q01.md | grep '^- \[' | grep -cv '\[Source: .*[https://].*\]'
  EXPECT: /^0$/
  EVIDENCE: (no output)
```

Repeat the same structure for `leaf-q02.md` (adjust the scope line and file paths to Q02).

### STEP 7 — Run the gate-check

Run these commands from the workspace root (`/Volumes/AI Projects/history-of-brain`):

```bash
node /Users/matthewsexton/.agents/skills/unlazy/scripts/gate-check.mjs --status gates/leaf-q01.md
node /Users/matthewsexton/.agents/skills/unlazy/scripts/gate-check.mjs --status gates/leaf-q02.md
```

Both must report **ALL MET (9 met)**. If any gate is UNMET:
1. Read the CHECK command and the EXPECT pattern.
2. Run the CHECK command manually to see the actual output.
3. Fix the content file (not the gates file) until the CHECK output matches EXPECT.
4. Re-run the gate-check.
5. Once ALL MET, flip the boxes from `[ ]` to `[x]` and fill in the EVIDENCE values with the actual numbers.

### STEP 8 — Commit

```bash
cd /Volumes/AI Projects/history-of-brain
git add content/guides/Q01.md content/guides/Q02.md gates/leaf-q01.md gates/leaf-q02.md
git commit -m "Q01 + Q02 guides drafted and gated 9/9"
git push
```

### HARD RULES (non-negotiable)

1. **No PHI. Absolute.** No patient identifiers, case numbers, MRNs, or specific diagnoses of specific people.
2. **Every factual claim needs provenance.** If you cannot source a claim, mark it `[unverified]` in the draft and record the gap. Never silently drop it.
3. **Never cite a source you have not opened.** If you reference a source, you must have actually read it (or it must be in the backbone/outline with a full URL).
4. **Corrections beat additions.** If you find a conflict between sources, record it. Do not silently resolve it.
5. **Do not draft public prose beyond the leaf scope.** No SEO copy, no social media, no implementation, no publication.
6. **Do not use the word "diagnosis" in the draft.** Use "label" or "category" instead. (The gate G7 checks for "diagnosis" as a PHI marker.)
7. **Do not project modern categories onto historical people.** A 3000-year-old person did not have "depression" or "anxiety disorder." Describe what they experienced in their own terms.
8. **Do not invent firstness claims.** "The first psychiatric hospital" is a claim that requires explicit review. If you cannot verify it, do not make it.

### COMMON MISTAKES TO AVOID

- Writing in a uniform rhythm (all sentences the same length). Vary it.
- Using slop phrases ("it's important to note," "in today's world," "delve into," "landscape," "tapestry").
- Citing a source without actually reading it.
- Making firstness claims without verification.
- Projecting modern diagnoses onto historical people.
- Forgetting the `[Source: ...]` tag on research bullets.
- Forgetting the tag ([Primary]/[Scholarly]/etc.) on references.
- Writing more than 900 words in the Draft section.
- Writing fewer than 300 words in the Draft section.
- Forgetting to run the gate-check before committing.
- Treating a guide as a chronological page. A guide is thematic — it cuts across time bands.
- Forgetting the 13-part anatomy. The draft should cover all 13 jobs, woven into the prose.

---PASTE END---

---

## Review Protocol (for me, after they deliver)

1. Pull the commits from the repo.
2. Read each content file against the voice register and evidence standard.
3. Run the gate-check on each gates file.
4. Check for: PHI, unsourced claims, anachronistic projection, voice drift, format errors.
5. If quality is good → assign the next batch. If not → send corrections back.
