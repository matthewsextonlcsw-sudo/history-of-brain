# R26 Grahamstown/Wilbraham 1908–1911 — independent cross-review

**Verdict:** `RETURN FOR STRUCTURAL AND WORDING REPAIR`; the mediated-source internal research
lane is valid, and the original-object/public-use hold must remain fully in force.

**Review date:** 2026-08-19
**Scope:** Read-only replay of the five packet outputs, ignored cache, complete opened articles,
and current repository/access/rights pages. This review creates no public prose and does not
authorize archive outreach, acquisition, quotation, image use, family contact, SEO/GEO use, or
publication.

## Decision

The packet's central source distinction passes. R26 opened Lindy Wilbraham's complete 2014
article and its complete published transcription of the 23 May 1910 letter. It did **not** open
or image-replay the HGM Vol. 26 manuscript, HGM Vol. 11 casebook, T/1207 papers, HGM Vol. 28
ledger, MOOC 6/9/718 estate file, Cory admission register, G41–1909 report, family originals, or
interview records. The packet consistently calls the affected-person text a published
transcription, attributes the physical description and archival relations to the article, and
does not treat the cited originals as independent corroboration.

That evidence ceiling is sound. The packet returns before internal reconciliation because all
54 relationship rows use a noncanonical schema, the disagreement row is not schema-complete,
evidence controlled-value casing fails, a cache-state claim lacks project-audit evidence, and two
important claims need atomic/source-attributed wording. One source-internal date error also needs
an explicit note so it cannot contaminate later extraction.

## Full-source replay

### Wilbraham 2014 and the letter layer

The complete article was replayed through PMC and the DOI/Cambridge route:

- https://pmc.ncbi.nlm.nih.gov/articles/PMC4006148/
- https://doi.org/10.1017/mdh.2014.9

The opened article directly supports these bounded packet decisions:

- it identifies the author as Harry's great-grandchild and describes a method combining state
  records, asylum records, private family materials, family stories, and descendant interviews;
- at journal pp. 179–181 it says the letter is included “in its entirety,” then describes its
  reported two-sided half-sheet form, erasures, illegible words, marginalia, file placement, and
  editorial brackets before reproducing the transcription;
- the transcript supports only what the published text reports the writer wrote about family,
  illness, bodily change, travel, medical intervention, and lost work capacity;
- the article infers institutional reading and retention from file placement and a casebook note,
  while itself naming pragmatic alternatives and uncertainty about the intended recipient;
- it explicitly says the author could not establish whether Jessie May later wrote or visited,
  then separately states her suspicion that she did not; and
- its conclusion foregrounds partial truth, descendant involvement, living-family consequences,
  intimate clinical material, and limits on treating old case files as unrestricted public
  material.

The packet appropriately refuses to turn the letter into verified autograph wording, event
truth, diagnosis, capacity, treatment effect, opposition to confinement, representative patient
experience, or general correspondence policy.

### Source-internal date conflict

The PMC/print section headed “Case 3414” first says the person died on **23 October 2011**, an
obvious internal error. The same article's 1908–1911 frame, abstract, earlier narrative, footnote
61, and following paragraph/final-entry discussion identify October or 23 October **1911**. R26
uses October 1911 and does not propagate 2011, but the contradictory literal source text is not
recorded in `EVD-038109` or its limitations.

### Du Plessis context source

The complete 47-page University of Pretoria repository PDF for Rory du Plessis was replayed:

- https://repository.up.ac.za/handle/2263/41399
- https://repository.up.ac.za/bitstream/2263/41399/1/DuPlessis_Photographs_2014.pdf

It distinguishes public-consumption photographs from casebook photographs and interprets
racialized work, representation, and resistance. R26 correctly rates this as L2 context for an
1890–1907 visual/archive question, not as evidence about Case 3414 or the 1910–1911 regime. No
image is cleared for reuse.

### Current archive/access routes

The following full pages were replayed:

- NARSSA General Research: https://www.nationalarchives.gov.za/node/21
- NARSSA Sensitive Records: https://www.nationalarchives.gov.za/node/134
- NARSSA Sensitive Records FAQ: https://www.nationalarchives.gov.za/node/131
- NARSSA Search Guidance: https://www.nationalarchives.gov.za/node/737
- Cory Library About: https://www.ru.ac.za/corylibrary/about/
- Cory Library Contact: https://www.ru.ac.za/corylibrary/contactus/

NARSSA's live pages support only general reading-room, copying/preservation, closed/sensitive
record, PAIA/POPIA, database-migration, manual-inventory, and repository-contact procedures. The
search page explicitly says NAAIRS is a finding aid rather than document text, migration is
incomplete, much material is not represented, and manual inventories may be necessary. A direct
old-NAAIRS replay for the principal names/references returned no documents; that result is not an
absence finding and should not be added as one.

Cory's page identifies the library in Makhanda and states that archival materials may be
protected and that applicable licensing remains the user's responsibility. Neither NARSSA nor
Cory authenticates an R26 item, proves current custody, or grants quotation/image/publication
rights. The packet preserves that limit.

PMC's current BioC metadata reports `NO-CC CODE` for PMC4006148. The article's selected family
images state copyright reserved and reproduction by permission. Treating the article, family
images, and private materials as link-only/restricted is conservative and correct.

Agent Reach v1.5.0 was current. Jina/full-page reading was available; Exa remained unavailable.

## Source levels, fit, and dependence

**PASS subject to schema normalization.** The 54 active edges use only L2 or L3 and A, B, or C;
there is no active D-fit relationship. The levels and fits are materially appropriate:

- `SRC-038000` is L2 for the article and its published transcription, not L1 original-object
  replay;
- `SRC-038001` is L2/C contextual scholarship outside the case dates;
- `SRC-038002–038006` are L3 access, repository, discovery, or rights metadata;
- `SRC-038007–038015` are explicitly restricted/unopened acquisition controls and have no
  evidence or relationship endpoints; and
- the article, its PMC representation, and every original/private object described through it
  are not counted as independent historical corroboration.

The nine unopened primary/acquisition records may remain uncovered by relationships. Creating
evidence merely to reach 16/16 source coverage would falsely imply that the objects were opened.

## Graph and schema audit

| check | observed | result |
|---|---:|---|
| sources | 16: 7 verified, 9 restricted/unopened | pass |
| evidence | 20, all from the 7 opened sources | pass |
| claims/decisions | 20 | pass before required split |
| disagreements | 1 | endpoint pass; schema return |
| relationships | 54 active, 0 withdrawn | endpoint pass; schema return |
| unique IDs and allocated `038xxx` range | all | pass |
| relationship evidence/claim/source endpoints | 54/54 | pass |
| relationship source matches evidence source | 54/54 | pass |
| active evidence coverage | 20/20 | pass |
| active claim coverage | 20/20 | pass |
| claim `evidence_ids` equal active-edge unions | 20/20 | pass |
| duplicate evidence/claim/verb tuples | 0 | pass |
| permitted verbs as values | supports/qualifies/contextualizes only | pass |

### Mandatory repair 1 — normalize all relationship records

Every `REL-038300–REL-038353` row uses `predicate` instead of required `relation`, uses
`dependence_group` instead of required `independence_group`, and omits required
`dependence_note`. Normalize all 54 rows to:

`relationship_id, evidence_id, claim_id, relation, source_id, source_level, claim_fit,
independence_group, dependence_note, rationale, status, withdrawal_reason`

Preserve the existing controlled verb, L2/L3 level, A/B/C fit, source-group assignment, active
status, and rationale. Add a meaningful dependence note to every edge; do not use the new field
as a duplicate of the group label. It must state whether an edge is the same 2014 article chain,
the same NARSSA policy family, the Cory route, or earlier visual context and why it is or is not
independent historical corroboration.

### Mandatory repair 2 — normalize the disagreement record

`DIS-038400` resolves to valid evidence and source endpoints and responsibly preserves the
difference between the author's suspicion and her explicit inability to establish later contact.
However, it uses `reviewed_on`/`reviewed_by` instead of required `review_date`/`reviewer`, and its
`review_status` is the compound string `source-verified; independent review pending; public use
HOLD` rather than one controlled review state.

Rename the fields, set one controlled review status, and retain the public/family hold in a
separate gate or approved-wording note. Preserve `expert_distribution:not_applicable`: this is a
source-internal inferential tension, not two independent sources or a surveyed expert dispute.
Do not allow the disagreement record to count as corroboration.

### Mandatory repair 3 — normalize evidence controlled values

Eleven rows (`EVD-038100`, `EVD-038106`, `EVD-038110–038113`, and
`EVD-038115–038119`) use `directness:"direct"`; normalize them to controlled `Direct`.

Five rows (`EVD-038115–038119`) use `sensitivity:"public"`; normalize them to `Public`.
The existing `reported`, `reconstructed`, `inferred`, `sensitive`, `restricted`, and `private`
values are controlled as written. In particular, retain the mediation explanation on
`EVD-038106`: capitalization must not turn the published transcription into original-image
verification.

## Claim wording and source-boundary repairs

### Mandatory repair 4 — make archive-density interpretation explicitly attributed

`CLM-038209` currently states as fact that record density was materially shaped by white-settler,
English-language, civil-service position and descendant access, while its own wording limit says
later use must say the article argues or demonstrates this through one case. `FINDINGS.md` bounded
finding 8 similarly states the interpretation without immediate attribution.

Rewrite both to begin from the opened article's argument. Keep `universality:"individual"`, the
absence of a comparative denominator, and the ban on quantified or generalized archival-survival
claims. A documented author-position claim may retain `Documented`; an un-attributed historical
causal assertion may not.

### Mandatory repair 5 — split the fused silence/representativeness claim

`CLM-038210` combines two independently testable propositions under one `archival_silence` type:

1. the complete opened R26 publication supplies no first-person Black-patient or isiXhosa-language
   evidence for Case 3414; and
2. this one white-settler case cannot represent Black or isiXhosa-speaking patients, the
   institution, South Africa, or colonial Africa.

Split these into an archive-bounded silence claim and a separate methodological/interpretive
nonrepresentativeness decision, each with its own evidence union and typed relationships. The
first must remain bounded to the opened publication; the second must remain a prohibition on
proxy narration, not a claim about every missing person's history.

### Mandatory repair 6 — correct two source-precision issues

- `CLM-038202` begins “Wilbraham states,” which is ambiguous because both the article author and
  letter writer share the surname. Change this to “Lindy Wilbraham states” or “The 2014 article
  states.”
- Add the article's internal `2011`/`1911` conflict to `EVD-038109` and its limitations or
  researcher note. Preserve October 1911 as the bounded chronology supported by the rest of the
  same article; do not silently quote the erroneous year or claim original death-record replay.

## Cache and provenance audit

The ignored cache physically passes:

- exactly one control object, `MANIFEST.json`;
- 3,092 bytes;
- SHA-256
  `119a421921b57f595e7e3f1af45761e791b43eb2f59d5218cfa30ddebf76e1ff`;
- valid JSON with 16 unique source-decision rows;
- `payload_count: 0`, `payload_bytes: 0`, and an empty payload-object list; and
- ignored/untracked through `.gitignore:32`.

No article, web page, archival image, manuscript transcription, casebook page, family image,
private document, or interview payload is cached. That rights-safe boundary passes.

### Mandatory repair 7 — create provenance for the cache-state claim

`CLM-038215` asserts both the cache state and the rights decision, but none of its evidence rows
is a direct audit of `MANIFEST.json` or the filesystem. `EVD-038115`, `EVD-038118`, and
`EVD-038119` explain external access/licensing limits; they do not prove what the local cache
contains.

Add a schema-complete project-authored cache/integrity source and evidence row recording the
defined directory, manifest path, 3,092 bytes, exact hash, zero payloads, audit date/method, and
local-only limitation. Split or narrow `CLM-038215` so the directly measured zero-payload state is
separate from the conservative decision not to cache rights-unclear sources. Cover both retained
claims with honest edge-level ratings and dependence notes. Do not characterize absence of an
established reusable license as a legal conclusion that all private research capture would be
unlawful.

## Voice, family, descendant, privacy, and harm audit

**PASS; all holds remain mandatory.** R26 distinguishes:

- authored historical words as available through a later transcription;
- institutional retention and casebook representation;
- spouse/family information recorded by institutional and descendant-scholar layers;
- private family documents and photographs;
- living-descendant interviews without opened transcripts or consent instruments;
- clinician, administrative, pension, ledger, estate, and repository voices; and
- absent worker-authored, Black-patient first-person, and isiXhosa-language evidence in this
  defined publication.

It does not infer abandonment, spouse motive, consent, capacity, diagnosis, causation, treatment
efficacy, institutional policy, prevalence, or broad representativeness. The author herself
describes living-family contestation and the harm of disclosing intimate clinical material.
Family photographs are copyright-reserved and reproduced in the article by permission; that
permission does not flow to Couch Commons. No descendant profile, family contact, grave search,
clinical image, facsimile, long quotation, or intimate allegation is authorized.

The manuscript, privacy, disability/survivor, descendant/family, South African archive/history,
regional/community, language, rights, anti-sensationalism, and human-editorial gates are
proportionate and must not be weakened during repair.

## Closure conditions

Disposition all seven mandatory repairs, then independently replay:

1. the normalized source/evidence/claim/disagreement/relationship schemas;
2. the revised claim count, all `038xxx` IDs, endpoints, claim evidence unions, duplicate tuples,
   controlled verbs, levels, fits, statuses, and dependence groups/notes;
3. the exact article/transcription locators, the 2011/1911 source note, and the published-text vs
   original-object boundary;
4. the cache-audit source/evidence, manifest bytes/hash, zero-payload state, and ignore/tracking
   status; and
5. the unchanged original-object, family/descendant, privacy, dignity, rights, regional, and
   public-use holds.

If those repairs close, R26 may pass for **mediated-source internal reconciliation only**. It
must remain blocked from public prose, quotation, images, SEO/GEO, or publication until the
frozen originals are lawfully acquired and replayed where necessary and every named human,
regional, family/descendant, privacy, rights, and harm gate independently closes.

## Independent closure replay — 2026-08-19

**Closure verdict:** `PASS FOR MEDIATED-SOURCE INTERNAL RECONCILIATION ONLY`.

The seven required repairs close. This verdict does not upgrade an opened publication or its
published letter transcription into original-object replay, and it does not authorize public
prose, quotation, images, SEO/GEO, scripts, family contact, archive outreach, or publication.

### Repair replay

1. All 58 active relationships now contain exactly the canonical relationship fields, including
   `relation`, `independence_group`, and a non-empty edge-specific `dependence_note`. Their verbs,
   L2/L3 levels, A/B/C fits, active states, source/evidence/claim endpoints, source alignment, and
   source/relationship independence groups pass.
2. `DIS-038400` uses `review_date`, `reviewer`, and the single controlled
   `source-verified` state. Its family/descendant and public-use hold remains separate, and
   `expert_distribution:not_applicable` correctly prevents one source-internal tension from
   becoming corroboration.
3. Evidence directness and sensitivity values are normalized. All intended direct rows use
   `Direct`; all intended public rows use `Public`; the published transcription remains mediated
   and is not described as manuscript-image verification.
4. Finding 8 and `CLM-038209` explicitly attribute the archive-density interpretation to the
   opened article, preserve individual scope, and retain the ban on quantified or generalized
   archive-survival claims.
5. `CLM-038210` is now the publication-bounded silence claim with evidence
   `EVD-038112–038113`. `CLM-038220` separately records the methodological nonrepresentativeness
   decision with `EVD-038100`, `EVD-038101`, `EVD-038113`, and `EVD-038114`. Neither claim speaks
   for absent people or asserts archive-wide absence.
6. `CLM-038202` names Lindy Wilbraham. `EVD-038109` records the article's literal 2011/1911
   conflict in its description and limitations and preserves October 1911 only as the bounded
   chronology supported by the rest of the same article; no original death record was replayed.
7. `SRC-038016`, `EVD-038120`, and `CLM-038221` directly provenance the measured cache state.
   `CLM-038215` is separately narrowed to the conservative non-caching decision and explicitly
   rejects a universal legal conclusion about private research capture.

### Final integrity replay

- Canonical graph counts: **17 SRC / 21 EVD / 22 CLM / 58 REL / 1 DIS**.
- All JSON, required schemas, `038xxx` identifiers, endpoint resolution, relationship-source
  equality, evidence and claim coverage, claim `evidence_ids` unions, controlled values,
  duplicate evidence/claim/relation tuples, and dependence-group equality pass.
- Source state remains **8 verified / 9 restricted-unopened**. The nine unopened original/private
  sources have no evidence or relationship endpoints and are not counted as corroboration.
- The ignored cache contains only `MANIFEST.json`: **3,092 bytes**, SHA-256
  `119a421921b57f595e7e3f1af45761e791b43eb2f59d5218cfa30ddebf76e1ff`, 16 unique decisions for
  the original source set, `payload_count:0`, `payload_bytes:0`, and an empty `payload_objects`
  array. No cache file is Git-tracked.
- The original-object, manuscript/transcription, family/descendant, privacy, dignity, disability
  and survivor, rights, language, regional/community, clinical-language, harm, image, quotation,
  and public-use holds remain unchanged.

R26 is therefore closed only as a structurally sound mediated-source research packet. Any future
state change requires the acquisition and specialist gates already named in the packet; until
then, **PRIMARY-OBJECT HOLD / NO PUBLIC PROSE** remains binding.
