# Independent cross-review — R13-SOUTHEAST-ASIA-MEDIEVAL

**Review date:** 2026-08-18
**Reviewer:** independent Codex packet reviewer
**Reviewed state:** all five packet outputs and the ignored cache; packet/cache remained read-only
**Verdict:** **RETURN**
**Public-content state:** **blocked; no public prose**

## Decision

The selected core is appropriately small and the substantive boundaries are mostly strong. Direct
replay confirms the K.209/K.368 royal-formula context, Honda's separately attributable poor-relief
inference, the preliminary scale of the Tonle Snguot excavation, the 1467 Schoemann I 21 witness,
and the soteriological rather than clinical frame of the opened *Dharma Pātañjala* passages. The
packet also handles dependence, norm versus implementation, missing affected-person voice, modern
diagnostic projection, custody, and public-image holds unusually well.

The packet must nevertheless return before outline reconciliation. Two locators are wrong, the
K.209 object license conflicts with the recorded license, the K.209 `catvāro varṇā` rating does not
reflect the extensive restoration visible in that witness, and the canonical tables do not satisfy
the required one-source/per-record schemas. One controlled claim type is invalid and one
`broad_cultural` claim does not meet that type's burden. These are reproducibility and graph errors,
not requests to widen the packet into a regional survey.

## Materials and method

The reviewer read `PROJECT-BRAIN.md`, `BATCH-04-INDEX.md`, `sources/EVIDENCE-MODEL.md`,
`sources/SOURCE-RATING-AND-CAPTURE-PROTOCOL.md`, this packet's `BRIEF.md`, and all five packet
outputs. Risk replay used Agent Reach/Jina, direct institutional files, and full-source web fallback.
Agent Reach v1.5.0 reported Jina Reader available and Exa unavailable. Search snippets and abstracts
were treated only as leads.

Full or bounded full-text replay included:

- the cached K.209 TEI/EpiDoc XML and cached Jina rendering;
- the Siddham K.368 inscription and translation views;
- Megumu Honda's complete 1965 J-STAGE article;
- the complete 128-page Tonle Snguot preliminary report;
- Andrea Acri's complete 2022 chapter, including printed pp. 60–64;
- the complete 2024 SBB-PK/CrossAsia volume, especially printed pp. 96–97; and
- current GitHub commit metadata and commit-pinned K.209 XML for snapshot replay.

## Risk-based source replay

| Chain / issue | Replay result | Disposition |
|---|---|---|
| K.209 `manoroga` | K.209 A25–26 places the heavily restored `manoroga` phrase inside royal eulogy: subjects' bodily disease is contrasted with the ruler's distress. It is not a patient case, diagnosis, ward, or treatment record. K.368 XIII is damaged/variant; Honda's printed p. 410 and Finot's displayed French render the rhetoric differently. | **PASS WITH ATTRIBUTION.** Retain Sanskrit, damage marks, royal subject, and translation dispute. `CLM-022002` is appropriately non-diagnostic. |
| K.209 institution clauses | B5–28 and C1–20 display an `ārogyaśāla`, sacred figures, two physicians, gendered service categories, provisions/materials, ritual officers, and sick recipients. D9–12 is prescriptive administration. | **PASS.** These are royal prescription/representation, not observed staffing, access, care, consent, or outcome. |
| Four-`varṇa` wording | K.209 B11 reads `(c)ikits(y)ā (Atra catv)āro (varṇ)ā...`: much of the clause is restored. K.368 stanza 19 and Finot/Honda preserve the parallel; Honda adds “(equally)” in English, but no separate Sanskrit word establishes modern equality. | **REPAIR RATING.** “Intended eligibility in the repeated formula” is safe. K.209 B11 is L1-B, not L1-A; K.368's displayed edition/translation is L2-A for that edition chain. Never convert it to everyone, equality, free care, or implementation. |
| Honda poor-relief inference | Honda says the provisions “seem to indicate” relief of the poor after explicitly skipping translation of stanzas 19b–41. Poverty is his social-function inference, not a category in stanza 19a. | **PASS CONTENT; REPAIR LOCATOR.** The passage is on reverse-paginated printed p. **409**, not p. 408. `SRC-022002`'s broad pp. 410–408 range contains it, but `EVD-022005` does not. |
| Tonle sample | The report says six test units totalled 61.5 m² and tested “an estimated 0.1% of the site at most” at printed p. 51. Arithmetic implies a site area of at least 61,500 m² (6.15 ha) if that estimate is accepted; the report does not expose an independently measured denominator in the cited passage. | **PASS WITH METHOD NOTE.** Preserve “authors' estimate,” “at most,” and preliminary status. Do not present 6.15 ha as a measured site boundary. |
| Tonle material/function | The report identifies floors/post bases, ceramics, statuary, and domestic/activity deposits. At printed pp. 99–100 it says two iron objects may be a blade and nail-like implement and that medical-tool identification remains speculative pending radiography/cleaning. | **REPAIR LOCATOR AND WORDING.** The iron-tool limit is not on p. 81. Narrow `CLM-022006` to activity inside a compound the excavators identify as a hospital site; the excavated sample does not materially prove a care encounter or the site's function by itself. |
| Tonle mental-health/access claims | Printed pp. 16–17 use physical, spiritual, and mental-health language, describe broad population access, and admit payment is unknown. Those statements occur in interpretive background, not as identities or services demonstrated by the 0.1%-at-most sample. | **PASS.** Fit D for a medieval mental-health service, universal access, payment, patient identity, or efficacy is correct. |
| Schoemann I 21 witness | SBB-PK printed pp. 96–97 describes 89 gĕbang leaves, black ink, West Javanese script/linguistic features, a Śaka 1389 (=1467 CE) colophon, Old Javanese prose with Sanskrit verses, and codex-unicus status. It expressly bases the Merapi–Merbabu/Windu Sono history on nineteenth-century reports and conditions the scriptoria/hermitage inference on their accuracy. | **PASS WITH ATTRIBUTION.** The 1467 date is the surviving copy date, not a proven composition date. Keep the route “reportedly” and do not convert a network hypothesis into a demonstrated itinerary. |
| DhP edition and interpretation | Acri 2022 printed pp. 60–64 gives edition-derived Old Javanese/Sanskrit passages and English translations at DhP 194.11–13, 196.8–14, 290.10–13, 294.14–17, and 298.2–4. They frame `samādhi`, `citta`, `sukha viśeṣa`, yoga, and release through Soul, Śiva, and soteriology; the text even denies that stillness of mind alone is the final goal. | **PASS AS L2-A/B FOR ACRI'S EDITION/INTERPRETATION.** The critical edition/manuscript itself was not independently collated, and the 2021/2022/2024 works share Acri's edition chain. Keep the public language/edition hold. |

## Source level, fit, and transmission audit

- `SRC-022000` is L1-A for clearly preserved edited Sanskrit and L1-B where letters or clauses are
  restored; it is C/D for implementation or experience. The XML revision history labels the edition
  `draft`, which must be visible in its edition/version and limitations rather than calling it an
  unqualified current critical edition.
- `SRC-022001` and `SRC-022002` are dependent K.368 edition/translation layers. Honda is L2-A for
  what he prints and argues, C/D for historical poor relief or Buddhist causation.
- `SRC-022003` is L1-A for the field team's reported units, finds, custody, and method; L2-B/C for
  function; D for mental-health service, access, patient identity, and efficacy.
- `SRC-022004–SRC-022007` remain inside `DEP-022002`. Exact quotations in Acri 2022 are direct
  evidence of Acri's edition/translation, not an independent collation of Schoemann I 21. Acri/Hunter
  2020 can contextualize Old Javanese translation/commentary practice but adds no independent DhP
  witness.
- `SRC-022008` is usable only after the object/repository license conflict below is resolved.
- `SRC-022009` is a method diagnostic and carries no historical relationship.

The dependence groups are directionally correct. K.209 and K.368 are separate physical witnesses
but dependent evidence for the repeated formula and not independent observations of operation.
Tonle is one preliminary campaign/report. The DhP records are one codex and overwhelmingly one
modern editor chain. Researcher audits add no historical corroboration.

## Record and graph audit

The file contains 10 source IDs, 16 evidence IDs, 15 claim IDs, 23 relationship IDs, four
disagreement IDs, and five dependency IDs, all within the 022xxx range. No duplicate relationship
ID or unresolved simple `EVD`/`CLM` endpoint was found, and every claim has an incoming typed edge.
That syntactic coverage does not make the canonical records schema-valid.

### Source records

The source records contain most substantive metadata, but `opened_by` and `opened_on` are inherited
from a file-level sentence rather than present on each canonical record. Cache filename/SHA and
claim-relative level/fit are also separated from the source records. The active batch requires one
schema-complete per-record entry. Normalize every source so each field is explicit per ID, including
separate `opened_by`, `opened_on`, controlled `verification_status`, `cached_file`, SHA/disposition,
and source level/claim fit or an explicit resolution to the corresponding relationship.

### Evidence records

The evidence table does not implement the canonical evidence schema. It uses `source_id(s)` rather
than required singular `source_id`; merges `verbatim_or_description`, `translation`, and
`original_text`; merges context, speaker/subject, recorder, and method; merges directness with
representativeness and limitations with sensitivity; and inherits `extracted_by/on` globally.

Seven records (`EVD-022000–EVD-022004`, `EVD-022011`, and `EVD-022015`) list multiple source IDs;
`EVD-022014` uses a source-ID range. Split distinct source/translation jobs into atomic evidence
records, or create a clearly identified project-generated method/audit source and link the audit to
its enumerated inputs without pretending the inputs are one `source_id`. Split `EVD-022014` into at
least the lived-voice audit and continuity audit. Each retained evidence record needs all required
fields and its own `extracted_by` and `extracted_on`.

### Claim records

Split the combined `created_by/on` field into canonical `created_by` and `created_on` values per
record. `archival_silence` in `CLM-022014` is not a controlled claim type; retype it to a controlled
value while preserving its bounded selected-corpus wording. `CLM-022012` is typed
`broad_cultural`, whose minimum burden is multiple independent sources and internal variation, but
it rests on one dependent formula chain. Retype it as a bounded textual/interpretive proposition or
meet the broad-cultural burden; do not expand the claim.

### Relationships

After evidence splitting, regenerate every `REL-022xxx` endpoint and dependence field and rerun
coverage. `REL-022005` must show K.209 B11 as L1-B because of restoration. `REL-022006` should not
count the noncommensurable Tonle sample as independent support for what the formula itself states;
remove it or retarget/contextualize it to a distinct implementation-limit claim. `REL-022015` must
not count a coauthored method article within the Acri chain as independent DhP witness support.

## Cache, rights, and reproducibility

All four cached files exist, are ignored by `.gitignore`, and are untracked. Recorded byte counts and
SHA-256 hashes match the files. `xmllint --noout` passes for the K.209 XML. No restricted PDF or
manuscript image is cached.

One rights error is mandatory to repair:

- the K.209 XML's own `publicationStmt/availability/licence` says **CC BY-SA 4.0**;
- the cached repository-level `LICENCE.txt` says **CC BY 4.0**; and
- `SRC-022000`, `SRC-022008`, the cache manifest, and handoff currently record only CC BY 4.0.

Record the conflict and apply the object-level/more restrictive CC BY-SA 4.0 to the XML and any
derivative unless DHARMA clarifies otherwise. Keep the Jina rendering internal and state its
derivative status. A repository license record may remain CC BY 4.0 for the repository-level fact,
but it cannot overwrite the embedded object license.

The cached XML hash exactly matches the file at full commit
`d99f25aabe9900787423b1fe20b288f91aaf9667`, at the last file-affecting commit
`64a9c366784783759893fde6fe9e89b5458b8417`, and at review-time master
`54f38cf1f061abe5fc71d7d994b93f2f34a858cb`. Replace the mutable `/master/` archive URL with a
commit-pinned raw/blob URL and distinguish the page/build commit from the last commit that changed
this XML. Preserve the cached SHA as the final replay authority.

## Lived experience, power, custody, and myth audit

The lived/archive audit passes its substantive boundary checks:

- royal inscriptional prescription is not patient testimony or implementation;
- named gendered labor is not evidence of voluntariness, pay, mobility, or authority;
- four-`varṇa` language is not modern equality, universal admission, or observed access;
- Tonle material cannot identify patient, healer, poor, elite, military, foreign, or household
  persons without independent evidence;
- divine/literary DhP speakers and a normative yogin are not observed practitioners;
- APSARA custody and the current removal ceremony are kept current, not back-projected;
- the reported colonial route of Schoemann I 21 remains visible; and
- no community approval, image reuse, patient voice, efficacy, or continuity is invented.

The spirit-only, Indianization-as-copying, therapy/mindfulness, and timeless-continuity safeguards
are appropriately bounded to the opened corpus. They are not complete public reception histories.
Keep the packet's existing public hold and its requirement for dated exemplars, independent language
review, Cambodian and Indonesian consultation, and a documented multi-stage chain for any modern
continuity claim.

## Mandatory repair list

1. Normalize every canonical source, evidence, and claim record to separate required per-record
   fields; do not inherit opener/extractor/creator dates from file-level prose.
2. Enforce one `source_id` per evidence record. Split the seven multi-source rows and the source
   range in `EVD-022014`; split lived-voice from continuity auditing.
3. Change `EVD-022005`'s Honda locator from p. 408 to reverse-paginated printed p. 409 and propagate
   it to every method/handoff reference.
4. Change the Tonle iron-tool locator from p. 81 to printed pp. 99–100 in `SRC-022003`,
   `EVD-022007`, `EVD-022008`, and replay instructions; preserve that identification is speculative.
5. Narrow `CLM-022006` so material activity does not itself prove hospital function or a care
   encounter; retain the excavators' site identification as an attributed layer.
6. Rate K.209 B11 and its `catvāro varṇā` relationship L1-B because the clause is substantially
   restored; keep K.368/Honda/Finot as dependent edition/translation layers and exclude Honda's
   parenthetical “equally” from Sanskrit fact.
7. Resolve the K.209 CC BY-SA 4.0 object license versus CC BY 4.0 repository license; correct every
   source/cache/rights statement and keep derivatives under the more restrictive disposition until
   clarified.
8. Pin the K.209 XML archive route to a full commit, identify the XML as a draft edition, and separate
   build/version commit from last file-affecting commit.
9. Replace invalid claim type `archival_silence`; retype or adequately support the under-burdened
   `broad_cultural` `CLM-022012`; split `created_by` and `created_on` per claim.
10. Rebuild all affected REL endpoints and dependency annotations. Remove or retarget
    `REL-022006`'s noncommensurable “independent” role and do not treat `REL-022015` as an
    independent DhP witness.
11. Rerun ID uniqueness, endpoint resolution, one-source evidence, incoming-claim coverage,
    controlled-value, required-field, cache hash/byte, XML, ignore, and tracked-cache checks. Append
    a disposition log mapping each item above to exact repaired IDs/files.

## Non-blocking publication gaps after repair

- Independent Sanskrit review of K.209/K.368, including restored letters and translation.
- Direct full critical-edition or authorized manuscript collation for the retained DhP loci, plus
  independent Old Javanese/Sanskrit review.
- Pigeaud/current catalog replay for Schoemann I 21 if detailed object/provenance prose is planned.
- Later Tonle Snguot publication search and Cambodian archaeological review.
- A culturally governed search for household, vernacular, affected-person, worker, and community
  evidence without using later ethnography as transparent medieval testimony.
- APSARA/Cambodian and Indonesian/Sundanese/Javanese consultation and explicit image permission.
- Dated public exemplars and upstream reception histories before naming first/universal/free,
  therapy, mindfulness, or unchanged-tradition myths in public.

## Gates

- **Repair gate:** **RETURN.** The coordinator must not extract this packet into outline
  reconciliation until all eleven mandatory groups are repaired and independently replayed.
- **Internal outline gate after repair:** eligible for **PASS WITH GAPS** only for the three named,
  separately bounded settings and the exact claims that survive repair.
- **Public writing/publication gate:** **HOLD** pending language, archaeology, community/custody,
  rights, reception-history, and citation-wording review. No public prose is approved.

## Reviewer closure after repair replay — 2026-08-18

**Closure verdict:** **PASS WITH GAPS** for internal outline reconciliation of the three bounded
settings only. This closure supersedes the earlier `RETURN` repair gate; it does not approve public
prose or publication. The packet and cache were read-only during this replay.

### Mandatory-repair disposition

| Repair group | Independent replay | Closure |
|---|---|---|
| 1. Per-record schemas | `SRC-022000`–`SRC-022009` each expose all required source fields across their canonical block and per-record workflow row, including separate opener/date, status, cache/hash, and dual rating fields. `EVD-022000`–`EVD-022029` each occur once in both the content and context/workflow tables with separate extractor/date fields. All 15 claims have separate creator/date fields. | **PASS** |
| 2. Atomic evidence | The rebuilt evidence graph has 30 unique EVD records. Every content row has exactly one syntactically valid, resolved `source_id`; no source range or compound source cell remains. Lived-voice audits are `EVD-022014`, `EVD-022024`, and `EVD-022025`; continuity audits are separately represented by `EVD-022026`–`EVD-022028`. | **PASS** |
| 3. Honda locator | Full-article replay places Honda's provisions-to-poor-relief inference on reverse-paginated printed p. 409. `EVD-022005`, `CLM-022004`, `REL-022011`, `DIS-022001`, and handoff language now use p. 409 and attribute the inference to Honda rather than the inscription. | **PASS** |
| 4. Tonle locator | Full-report replay places the domestic/activity discussion at printed pp. 99–100 and the radiography/cleaning caution plus possible blade and nail-like implement on printed p. 100. `SRC-022003`, `EVD-022007`–`EVD-022008`, findings, and replay instructions use pp. 99–100; no stale p. 81 remains. | **PASS** |
| 5. Material/function boundary | `CLM-022006` now establishes material activity within a compound that the excavators identify as a hospital site while expressly withholding function, care encounter, identity, payment, efficacy, and network implementation from the material alone. `REL-022013` and `REL-022014` preserve that observation/inference boundary. | **PASS** |
| 6. Restoration and translation | Direct XML replay shows substantial uncertainty at K.209 B11 (`cikitsyā`, `Atra catvāro`, and `varṇā` include unclear letters). `EVD-022004` and `REL-022009` therefore carry **L1-B**. `EVD-022022`/`REL-022010` treat K.368 and Honda/Finot as dependent edition/translation layers and explicitly exclude Honda's parenthetical “equally” from Sanskrit fact. | **PASS** |
| 7. Rights conflict | The cached XML embeds CC BY-SA 4.0, while the cached repository `LICENCE.txt` states CC BY 4.0. `SRC-022000`, `SRC-022008`, the manifest, and handoff preserve the conflict and apply the object-level BY-SA disposition to XML derivatives pending clarification; the Jina rendering remains internal. | **PASS WITH PUBLIC HOLD** |
| 8. Version and draft status | The cached XML exactly matches the full-commit raw file at `d99f25aabe9900787423b1fe20b288f91aaf9667`. GitHub path history identifies `64a9c366784783759893fde6fe9e89b5458b8417` (2026-07-17) as the latest commit affecting that XML. The TEI `revisionDesc` marks its changes `draft`; the source record distinguishes draft edition, snapshot/build commit, and last XML-affecting commit and contains no mutable `/master/` archive route. | **PASS** |
| 9. Claim types and fields | All 15 claim rows use controlled types. `CLM-022012` is a formula-bounded `interpretive` proposition, not a regional cultural generalization; `CLM-022014` is a bounded `interpretive` genre audit and does not infer non-survival. No stale `broad_cultural` or `archival_silence` label remains. | **PASS** |
| 10. Relationships and dependence | The graph has 34 unique typed relationships; every EVD/CLM endpoint and DEP annotation resolves, and all 15 claims have incoming coverage. Tonle sampling qualifies only `CLM-022006`. `REL-022020` places Acri/Hunter in `DEP-022002` and states that it adds no independent DhP witness; the other Acri records remain in the same chain. | **PASS** |
| 11. Validation and disposition | Automated replay found 10 unique sources, 30 evidence records in each paired table, 15 claims, 34 relationships, four disagreements, and five dependency groups, all in the 022xxx range. Required table cells were nonempty; controlled claim, universality, label, review-status, source-status, evidence-status, and relationship values passed. All claim endpoints have incoming coverage. The four cache files match recorded bytes/SHA-256, are ignored and untracked, and the K.209 XML passes `xmllint --noout`. | **PASS** |

### Final boundaries and gates

The repairs resolve the reproducibility and graph defects that caused `RETURN`. Internal outline
reconciliation may now use only the separately bounded K.209/K.368 formula chain, the preliminary
Tonle Snguot campaign, and the Schoemann I 21/*Dharma Pātañjala* manuscript/edition chain, with
their exact source levels, fit limits, and dependence annotations.

The following gaps and holds remain mandatory and are not downgraded by this closure:

- **Epigraphy and translation:** independent Sanskrit review of damaged/restored K.209/K.368
  wording, with Finot/Barth upstream retrieval where needed.
- **Old Javanese/Sanskrit:** independent collation or authorized surrogate review for the retained
  DhP passages; Acri's related publications remain one dependent modern chain.
- **Archaeology:** later Tonle Snguot research and Cambodian archaeological review before stronger
  claims about function, care, chronology, materials, or network operation.
- **Lived and community evidence:** no patient or practitioner first-person account was recovered;
  Cambodian and Indonesian/Sundanese/Javanese custodial, scholarly, and community consultation is
  still required, without back-projecting later ethnography.
- **Rights and images:** the K.209 BY-SA/BY conflict remains subject to clarification, and all other
  source images, manuscript folios, and extended text remain link-only or permission-controlled.
- **Reception and continuity:** dated upstream exemplars are still required before publicly naming
  origin, universal/free-care, therapy/mindfulness, or unchanged-tradition myths; no modern
  continuity chain is established here.

- **Internal outline gate:** **PASS WITH GAPS**, limited to the exact repaired claims and three named
  settings.
- **Public writing/publication gate:** **HOLD**. No public prose is approved by this review.
