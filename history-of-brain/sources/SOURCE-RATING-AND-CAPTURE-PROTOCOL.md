# Source Rating and Capture Protocol

**Status:** Active pilot protocol for in-depth era research

**Authorized:** Aug. 18, 2026

**Authority:** `EVIDENCE-MODEL.md` and `../PROJECT-BRAIN.md`

## Why this exists

A citation is not a quality guarantee. A blog with twenty footnotes may still repeat a broken
citation chain. A museum page may be excellent for an object's catalog number but weak for a
continent-wide interpretation. A patient memoir may be direct evidence of what its author
reported and cannot establish how common that experience was.

Every consulted source therefore receives two ratings:

1. **Source level** — what kind of accountability and access to evidence the source has.
2. **Claim fit** — how directly this particular source supports this particular claim.

Neither rating replaces the project's evidence labels. Source ratings evaluate inputs;
Documented, Strongly supported, Plausible, Disputed, and Unknown evaluate claims.

## Source levels

| Level | Meaning | Typical examples | Normal use |
|---|---|---|---|
| **L1 — Direct or authoritative evidence** | The source is the item, record, testimony, dataset, object record, law, or authoritative critical edition needed for the bounded claim. | Archival item; public-domain scan; excavation report and object record; original-language text with critical edition; direct oral history; community-governed account; law; contemporary register; original research dataset | Core evidence for what the item records, shows, reports, or counts, within its limits |
| **L2 — Specialist scholarship** | Experts expose sources and method through peer review or a reputable scholarly press. | Peer-reviewed historical article; academic monograph; critical translation; systematic or historiographic review | Interpretation, chronology, context, scholarly disagreement, current consensus |
| **L3 — Authoritative reference** | A responsible institution or named specialist supplies checked context but usually summarizes deeper evidence. | Archive, library, museum, university, government, scholarly encyclopedia, specialist handbook | Catalog facts, orientation, terminology, stable context; trace important claims further |
| **L4 — Accountable secondary account** | Editorially accountable work translates scholarship for a broad audience or documents public reception. | Quality journalism, named-expert documentary, trade history with notes, professional educational page | Leads, reception, recent interviews, and accessible explanation; seldom sole support for pivotal history |
| **L5 — Discovery lead only** | Provenance, expertise, method, or citation independence is insufficient. | Personal blog, commercial SEO page, generic encyclopedia, anonymous page, social post, AI answer, search snippet, copied citation list | Find names, terms, archives, and citations to pursue; never final evidence for a substantive historical claim |
| **LX — Rejected or unusable** | The source is fabricated, materially misleading, retracted without relevance to the retraction story, inaccessible beyond a snippet, improperly copied, or ethically prohibited. | Citation hallucination; abstract-only claim with no accessible evidence; plagiarized page; disallowed sacred/private record | Do not use; preserve the rejection reason so the chain is not rediscovered later |

Level is claim-relative when necessary. A community-controlled history is not downgraded
because it is not an academic journal. A blog is L1 for the narrow claim “this author published
these words on this date,” but remains L5 for an ancient historical claim it merely repeats.

## Claim-fit grades

| Grade | Test | Meaning |
|---|---|---|
| **A — Direct fit** | Does the located evidence directly establish the precisely bounded claim? | Suitable core evidence, subject to provenance and limitations |
| **B — Strong indirect fit** | Does it analyze the right evidence, time, place, and population with a visible method? | Strong support or qualification; often paired with more direct evidence |
| **C — Context or illustration** | Is it relevant but unable to establish prevalence, causation, priority, universality, or experience? | Contextualizes or illustrates only |
| **D — Mismatch** | Is the source about a different time, place, population, term, or question—or only repeating another source? | Not support; trace the chain or reject |

Record a separate fit grade for each important claim. There is no honest single score that
makes a source universally “good.”

## Required quality checks

For every L1–L4 source, record as applicable:

- creator expertise and relationship to the people or evidence described;
- publisher, journal, archive, repository, or community authority;
- peer-review or editorial process when known—never assumed from appearance;
- edition, translator, DOI/ISBN/PMID/catalog number/call number, and stable URL;
- full-text access status and the exact pages, folios, object numbers, tables, or passages read;
- method, sample, archive, excavation context, or textual basis;
- corrections, retractions, major scholarly criticism, or edition problems found;
- funding or conflicts when material to the claim;
- geographic, temporal, population, translation, and representativeness limits;
- independence group showing whether several sources repeat the same origin; and
- the upstream source behind every important secondary citation.

Journal prestige, citation count, impact factor, search rank, institutional branding, and the
number of footnotes are signals to investigate—not substitutes for checking the evidence.

## The weak-source rule

When a blog, encyclopedia, documentary, commercial page, or other L4/L5 source makes a useful
claim:

1. Save it as a lead and record exactly what it alleges.
2. Follow its citation to the upstream work.
3. Open the upstream work; do not trust the downstream paraphrase.
4. Continue until reaching the original evidence or the strongest accessible scholarship.
5. Assign shared `independence_group` values to pages repeating the same chain.
6. If the chain breaks, rate the lead L5-D or LX and do not use the claim.
7. Use the weak source publicly only when the source itself is historically relevant—for
   example, to document public reception, marketing, or misinformation—and state that job.

## Full-text rule

A search result, AI summary, publisher blurb, citation export, table of contents, or abstract is
a discovery lead. It cannot support a substantive claim from the unseen article or book.

Researchers must consult the complete relevant source or a reliable complete edition. If full
access is unavailable, record `restricted` or `lead`, explain the gap, and find another source.
Never fill the gap from memory.

## Saving source material

Tracked research files preserve the evidence trail. Downloaded source material is stored in
the git-ignored local directory:

`research/source-cache/<packet-id>/`

For every cached file, the tracked source ledger records:

- exact filename and format;
- lawful access URL and access date;
- SHA-256 checksum;
- rights status and allowed use;
- whether the file is public domain, openly licensed, link-only, restricted, or culturally
  controlled; and
- the safe `full_text_location` without credentials.

Public-domain and openly licensed files may be cached when lawful. Copyrighted, licensed,
paywalled, private, or culturally restricted full text must not be committed into the
publishable repository. Store only the minimum excerpt needed for verification, with its exact
locator, and record where authorized access exists. Robots restrictions and access controls
must not be bypassed.

## Minimum ledger row

Each consulted source receives:

`source_id | level | verification_status | full citation | source_type | creator_role |
publisher_or_holder | date/version | language/translator | identifier | stable_url |
archive_url | opened_on/by | exact_locator | claim_fit | evidence_summary | limitations |
independence_group | rights_status | cached_file | sha256 | upstream_checked | notes`

Narrative notes may follow the table when the source or dispute needs more context.

## Pilot acceptance rule

A packet does not pass because it meets a source count. It passes when the important claims
have evidence appropriate to their burdens, weak chains were traced, full relevant sources
were actually read, contradictions were sought, and a second researcher can reproduce the
reasoning from the saved ledger and material.
