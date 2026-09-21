# Independent review — R36 Gorizia, *Il Picchio* and assembly records, 1962–1968

**Reviewed:** 2026-08-19

**Reviewer:** Codex (`/root/review_early_modern_print`)

**Packet reviewed:** `R36-GORIZIA-IL-PICCHIO-ASSEMBLY-RECORDS-1962-1968`

**Review mode:** packet and cache read-only; acquisition/STOP audit

**Verdict:** **RETURN FOR REPAIR — the acquisition STOP, Gorizia-only boundary, voice controls, rights/privacy controls, graph topology, and cache integrity are sound, but pivotal page locators and source-access metadata are not replay-accurate.**

## Decision

R36 is correctly designed as an acquisition dossier, not a history of Gorizia. No *Il Picchio* issue, assembly minute, clinical object, or page of *L'istituzione negata* is present in the packet or cache. The packet therefore does not claim direct patient, worker, clinician, visitor, editor, or family testimony; does not infer treatment delivery or outcome; does not expand to Trieste, law 180, national reform, or a liberation narrative; and does not authorize names, quotation, facsimiles, images, SEO/GEO extraction, or public prose.

Those boundaries must remain. The return is for exact reproducibility defects, not for scope expansion. The most important defects are:

1. the SAN finding-aid locators for series 3 and fascicles 1 and 4 are shifted;
2. the Menato PDF is 66 pages, not 36;
3. the complete Setaro chapter is now reproducibly readable through the current UPL Open download URL with Agent Reach/Jina, so the packet's “full source blocked” state and the claim that no opened source reports the issue-41-plus-special formula are no longer accurate;
4. several populated `sha256` fields contain prose or byte counts rather than hashes, and the Setaro source records do not carry the same source-level independence group despite the graph correctly treating them as one holdings chain.

After these repairs, the dossier should be eligible for **PASS WITH GAPS as an internal acquisition dossier only**. The substantive and public gates remain `STOP` regardless.

## Material reviewed and replay method

I read the brief, all five canonical outputs, cache manifest and acquisition controls, and governing evidence and source-capture protocols. I independently replayed:

- the cached 156-page SAN inventory as text and rendered page images;
- the current SAN copyright page;
- the current Archivio Basaglia access/location page;
- the complete Menato article in its host PDF;
- the current UPL Open Setaro landing, download route, complete 28-page chapter through Jina, and the book licence page;
- the complete five-page Atlante contributor document;
- the current FVG Council statement;
- the current BSI reproduction page;
- the University of Siena Pirella holder page;
- the complete 75-page official Pirella inventory;
- the current ASUGI socio-health-record access page; and
- the graph, identifiers, controlled values, endpoints, evidence/claim coverage, cache bytes, hashes, rights fields, ignore state, and repository diff scope.

No source copy or research payload was added to the workspace during review.

## Official SAN inventory replay

The inventory securely supports the packet's bounded catalogue propositions, but the packet's page pairings are wrong.

The rendered sequence is:

| PDF page | Printed page | Material |
|---:|---:|---|
| 18 | 16 | series 3 introduction and statement that the series was constituted during archival reordering from four original folders |
| 19 | 17 | busta 3, fascicle 1: *Il Picchio* nos. 3, 6, and 40 in a mixed fourteen-document fascicle, plus correspondence, press material, and a possibly nurse-authored protest leaflet |
| 20 | 18 | fascicle 4: header `1967 ott. 1 - dic. 23`, detailed assembly minutes through `13 set. 1968`, and the undated final minute joined during reordering |

The packet currently places fascicle 1 at printed page 17/PDF page 20, fascicle 4 at printed page 17/PDF page 20, and the series introduction at printed page 16/PDF page 19. Only the printed page for fascicle 1 and the PDF page for fascicle 4 are correct. The evidence descriptions themselves are accurate, including the unresolved fascicle-4 chronology conflict; the locators are not.

The privacy and custody layering is otherwise correct. Printed page 9/PDF page 12 records the 2014 San Servolo custody state and says some fascicles are unavailable to protect personal data. The current Archivio Basaglia page instead gives the Campo Santo Stefano location and a request process at least four weeks in advance. These are different dated layers, not contradictory statements about one date. Neither page confirms current availability, copying, or reuse of fascicles 1 or 4.

## *Il Picchio* run and holdings layers

The SAN inventory directly describes only three issues in one mixed fascicle. It does not establish a complete run, issue contents, editorial control, or present availability.

The complete Menato article supports a dated, incomplete holdings report: the first issue is reported as 1 August 1962, the last known issue as 1966, both known Gorizia collections as incomplete, the provincial historical collection as nos. 8–17, and selected BSI numbers in the concluding list. It invites acquisition of missing numbers. Its host PDF is **66 pages and 2,718,598 bytes**, not the 36 pages recorded in `SRC-048003` and the acquisition log. The article remains printed pages 12–14, so the article locator does not change.

The five-page Atlante contributor card reports “42 mensili,” a digital reproduction of 41 fascicles at the former-hospital archive, and no. 2 as then `irreperibile`. This is a contributor report, not a current custodian inventory. The packet properly limits the safe internal formulation to “reported unlocated in 2024” and rejects destroyed, suppressed, permanently missing, or lost.

The Setaro holdings map remains one dependent author chain. The chapter and contributor card do not independently corroborate one another, and neither is a current written answer from Gorizia, BSI, or Siena. The overlap in the chapter's BSI wording—no. 35 appears separately and again inside 34–41—is real and must remain unresolved.

## Setaro full-source replay and required layer correction

The packet accurately logs that ordinary direct requests to the UPL Open and OAPEN PDF routes returned `403` and that an older route returned `404`. It does not, however, record the current download URL exposed on the live UPL Open landing:

`https://uplopen.com/chapters/e/686/files/02e8354f-83ec-4f08-8f63-844b7106ca58.pdf`

Agent Reach/Jina returns a complete, page-sequenced 28-page extraction of that chapter. The extraction includes chapter pages 57–84, notes, and bibliography. It makes the following later-scholarly statements replayable:

- note 5, printed page 80: the reported Gorizia, BSI, and Pirella issue ranges and the author's inability to consult no. 2;
- note 21, printed page 82: publication ending in 1966 with issue 41, with a special edition in December 1962.

The current UPL Open book page identifies the work as peer reviewed and CC BY 4.0. That licence does not by itself authorize reuse of archival illustrations or *Il Picchio* facsimiles credited to repositories, and the review did not copy them.

This new replay does **not** open the underlying periodical, minutes, or repository inventories. It therefore must not become substantive voice evidence. It does require the chapter to move from L5/D “indexed discovery lead” to an opened specialist-scholarship layer for what the chapter itself reports. The packet must continue to describe the holdings and run as later scholarly reports pending original-object and current-custodian confirmation.

In particular, `CLM-048003` is no longer accurate when it says no opened external source establishes the specific “nos. 1–41 plus a December 1962 special” formulation. The repaired claim should say that the complete Setaro chapter reports issue 41 plus a December 1962 special, while R36 still lacks the original special, a complete serials collation, and current custodian confirmation. That is a reported bibliographic proposition, not an established historical-object fact.

## Voice, editorial dependence, and family-voice audit

The packet's core voice conclusion passes and must not be weakened during repair:

- no frozen historical object was opened;
- catalogue titles and later scholarship cannot identify whose exact words appear in an issue or minute;
- speaker, author, recorder, chair, typist, editor, correction, omission, translation, censorship, dissent, and consent remain separate and unknown;
- an institutionally produced or patient-associated periodical is not automatically transparent first-person testimony;
- an assembly description is not a verbatim or complete transcript;
- participation does not prove equal editorial power, consensus, voluntariness, benefit, or outcome.

The family-voice boundary also passes. No family-authored item is identified in the opened descriptions of the frozen periodical/fascicle-4 corpus. The Pirella finding aid separately describes a 1966 family-signed letter in busta 2, but the item is unopened and outside the frozen corpus. The packet correctly says family voice is absent from the opened frozen-corpus descriptions, not absent from Gorizia history or the wider archive.

The complete Setaro chapter contains the author's analysis and quoted/translated historical passages, but it remains later scholarly mediation. It cannot be converted into directly authenticated affected-person, worker, or family voice for R36.

## Custody, access, reproduction, and privacy

The packet correctly keeps these gates separate:

- SAN's CC BY-NC-SA 4.0 statement applies to site and finding-aid text unless otherwise specified; it does not license the described archival objects or personal data.
- Archivio Basaglia's location and appointment page does not confirm item availability, remote access, copying, quotation, or publication.
- BSI has distinct study and editorial/commercial reproduction routes, watermarks study copies, and conditions self-photography. These general rules neither confirm holdings nor grant item-specific website reuse.
- The University of Siena page identifies the Pirella archive and library holder but does not enumerate *Il Picchio* numbers or authorize use.
- The 75-page Pirella public inventory is a privacy-managed archival finding aid. Its lack of an *Il Picchio* title hit does not prove absence from separately described bibliographic holdings. Its patient-sensitive exclusions and the external family-letter description cannot be bypassed.
- The FVG Council page proves that a councillor asked for clarification of title, location, and consultation. It does not prove attributed degradation, ownership, holdings, or access.
- ASUGI's current socio-health-document policy is a privacy warning, not the access policy for this historical corpus.

Current legal title, physical custody, digital custody, consultation authority, copy supply, copyright, privacy review, quotation, image rights, and public/commercial reuse remain unresolved per object. No name, diagnosis, signature, family detail, quotation, page image, or facsimile is approved.

## Schema, graph, and cache replay

The current graph parses as:

- `13 SRC / 17 EVD / 16 CLM / 41 REL / 5 DIS`;
- all identifiers unique and inside `048xxx`;
- all relationship endpoints resolve;
- every relationship's `source_id` agrees with its evidence source;
- every evidence record and claim has at least one active relationship;
- relationship distribution: 24 `supports`, 11 `qualifies`, 5 `contextualizes`, and 1 `repeats`;
- level distribution: 7 L1, 2 L2, 28 L3, 1 L4, and 3 L5;
- fit distribution: 21 A, 9 B, 8 C, and 3 D.

The three D-fit edges all belong to the formerly blocked Setaro chapter. Their discovery-only relationship types prevent current promotion, but their level/fit and evidence wording must be rebuilt after complete-source replay. New or revised edges may support only bounded propositions such as “Setaro reports X,” qualify current holdings/run uncertainty, or record dependence. They may not support participant voice, treatment, experience, outcome, prevalence, equality, causation, or a public historical narrative.

The source-level independence fields for `SRC-048004` and `SRC-048005` currently read `SETARO-2024` and `SETARO-ATLANTE`, while all relevant relationships correctly use `SETARO-HOLDINGS-CHAIN`. Because the packet explicitly says the two publications are the same contributor-dependent holdings chain, the canonical source records and human index should use the shared group as well.

The `sha256` field also needs normalization. Populated values must be a bare 64-character digest, not a byte-count note, prose, or a digest followed by a parenthetical. Current lawful replay produced:

- Menato PDF: `2d96d069f14c71a83864bc39cc958447eebf11b694586e7ac74eae1c8d47d6bc`;
- Atlante PDF: `fc96da365f5f0b9dd0420685183043d4e131b82e13c8f467338e05dcfd6b5714`;
- Pirella PDF: `78504e9fcce0e2904288980f46906fe2f73caaa7e6c0890ee542912475bf64b7`.

If ephemeral link-only objects are not intended to carry hashes, leave `sha256` empty and move integrity notes elsewhere. `SRC-048012` should likewise point to per-object manifest hashes in a note rather than put prose in a singular hash field.

The ignored cache itself passes. It contains four physical files: the manifest plus three manifested payloads. The payloads total 3,246,210 bytes:

- `san-inventario-1581.pdf`: 3,242,523 bytes; SHA-256 `4b65311f76c932b26fe11ea12229dbd188650a2e0754e058e57e43b1bbce7d59`;
- `acquisition-attempts.tsv`: 3,298 bytes; SHA-256 `302a218045b638590c0d6d7c569a52e30578a3acdc90c1ca852f38cb07e9af97`;
- `agent-reach-status.txt`: 389 bytes; SHA-256 `f2831aa0d3229e4a656796fc5a7fc04970f42f18e5ddf6e301944a732d39903e`.

All four files are ignored and untracked. The manifest's payload count, aggregate bytes, source bindings, transformations, rights basis, and allowed-use fields validate. No periodical, minute, clinical record, sensitive object, book, or scholarly PDF is cached.

## Mandatory repairs

1. Correct `SRC-048000` key locators to printed pages 9 and 16–18 / PDF pages 12 and 18–20.
2. Correct `EVD-048001` to printed page 17 / PDF page 19.
3. Correct `EVD-048002` and its `original_text` note to printed page 18 / PDF page 20.
4. Correct `EVD-048003` to series introduction printed page 16 / PDF page 18 and fascicle-4 note printed page 18 / PDF page 20.
5. Replace “complete 36-page” with “complete 66-page” for the Menato host PDF in `SRC-048003` and `acquisition-attempts.tsv`; preserve article locators at printed pages 12–14.
6. Replay the complete Setaro chapter through the current UPL Open download URL and Agent Reach/Jina. Update `SRC-048004`, `EVD-048006`, `EVD-048014`, the acquisition log, human index, access narrative, and all affected graph edges from blocked/index-only status. Record the complete 28-page chapter and exact printed locators.
7. Revise `CLM-048003` and `DIS-048000` to distinguish the opened later-scholarly report of issue 41 plus a December 1962 special from still-unopened original objects and current custodian confirmation. Add or split evidence for note 21 rather than silently broadening the holdings-footnote evidence.
8. Keep the Setaro chapter as specialist interpretation/reporting, not primary, affected-person, worker, family, assembly, or editorial voice. Preserve shared dependence with the Atlante card and do not count the two as independent corroboration.
9. Align `SRC-048004` and `SRC-048005` source-level `independence_group` values with `SETARO-HOLDINGS-CHAIN`, or document a canonical rule that explains why source and relationship groups differ. The present packet asserts shared dependence, so the former repair is clearer.
10. Normalize every populated `sha256` field to one bare digest or empty; move byte-count, ephemeral-file, and per-object-manifest prose to the appropriate notes.
11. Re-run counts, endpoints, source/evidence agreement, evidence and claim coverage, controlled values, DIS positions, cache hashes/bytes/ignore state, and owned diff scope after repair. Update the reported graph totals if evidence is split or added.

## Public gate

**Closed.** The repair does not authorize public history, blog or article copy, snippets, FAQ/schema answers, reels, video scripts, thumbnails, quotation, translation, images, facsimiles, names, or SEO/GEO publication.

The dossier remains `STOP / NO PUBLIC PROSE / NO HISTORICAL CONTENT CLAIM / NO QUOTATION / NO FACSIMILE / NO SEO-GEO USE` until complete original issues and minutes are lawfully acquired and page-collated, current holders confirm objects and conditions, and independent language, editorial, archival, privacy/dignity, survivor/disability, worker, family/community, and rights reviews pass.

Final status: **RETURN FOR REPAIR; retain acquisition STOP and every public hold.**

## Repair closure replay — 2026-08-19

**Closure verdict:** **RETURN FOR ONE NARROW SCHEMA REPAIR.**

The substantive repair groups pass. The SAN locators now replay at printed pages 9 and 16–18 / PDF pages 12 and 18–20. The Menato host PDF is correctly recorded as 66 pages. The complete 28-page Setaro chapter is now an opened L2 specialist-scholarship layer, with note 5 and note 21 split into bounded evidence. `CLM-048003`, `REL-048007`, and `DIS-048000` attribute the issue-41-plus-December-1962-special formula to Setaro without promoting it to an original-object or current-custodian fact. The Setaro chapter and Atlante card share `SETARO-HOLDINGS-CHAIN`, and none of their edges supports patient, worker, family, assembly, editorial, treatment, experience, or outcome claims. Populated source `sha256` values are bare 64-character digests.

The graph otherwise validates at `13 SRC / 18 EVD / 16 CLM / 41 REL / 5 DIS`: all IDs are unique and inside `048xxx`; all endpoints and source/evidence bindings resolve; all 18 evidence records and 16 claims have active coverage; DIS position and top-level references resolve; and there are no duplicate relationship tuples. The repaired relationship distribution is 26 `supports`, 11 `qualifies`, 3 `contextualizes`, and 1 `repeats`; levels are 7 L1, 5 L2, 28 L3, and 1 L4; fits are 23 A, 10 B, and 8 C.

One controlled-field defect remains. The governing evidence model permits evidence `representativeness` values `individual example`, `defined sample`, `institution`, `community`, `region`, or `unknown`, and evidence `verification_status` values `Draft extraction`, `checked against source`, `second-checked`, or `rejected`. Five current fields fall outside those sets:

1. `EVD-048006.verification_status`: replace `checked against complete source` with `checked against source`.
2. `EVD-048007.verification_status`: replace `checked as document statement only` with `checked against source`; preserve the document-layer limitation in `limitations`/`researcher_note`.
3. `EVD-048011.representativeness`: replace `individual statement` with `individual example`; the evidence description already preserves that it is one attributed political statement.
4. `EVD-048013.verification_status`: replace `checked as profile only` with `checked against source`; preserve the profile-only qualification in `evidence_form`, `limitations`, and `researcher_note`.
5. `EVD-048017.verification_status`: replace `checked against complete source` with `checked against source`.

The ignored cache passes independently: three manifested payloads total `3,246,624` bytes, with no missing or extra payload and exact byte/SHA-256 agreement. All cache files are ignored and untracked. No periodical, minute, clinical object, sensitive record, chapter, or other scholarly PDF is cached.

The acquisition and public gates remain unchanged: **STOP / NO PUBLIC PROSE / NO HISTORICAL CONTENT CLAIM / NO QUOTATION / NO FACSIMILE / NO SEO-GEO USE**. After the five literal controlled-value substitutions and a repeat validation, the packet should be eligible for **PASS WITH GAPS as an internal acquisition dossier only**.

Closure status: **RETURN FOR CONTROLLED-VALUE NORMALIZATION; all substantive repairs and every public hold pass.**

## Final schema closure — 2026-08-19

**Final verdict:** **PASS WITH GAPS — internal acquisition dossier only.**

The five literal controlled-value repairs replay exactly: `EVD-048006`, `EVD-048007`, `EVD-048013`, and `EVD-048017` now use `verification_status: checked against source`; `EVD-048011` now uses `representativeness: individual example`. Their existing limitations and researcher notes preserve the complete-source, document-statement, individual-political-statement, and profile-only qualifications without placing prose in controlled fields.

Final validation passes at `13 SRC / 18 EVD / 16 CLM / 41 REL / 5 DIS`. All identifiers, schemas, controlled values, endpoints, source/evidence bindings, DIS top-level and position references, relationship tuples, and active evidence/claim coverage validate. Relationship, level, and fit distributions remain 26 `supports` / 11 `qualifies` / 3 `contextualizes` / 1 `repeats`; 7 L1 / 5 L2 / 28 L3 / 1 L4; and 23 A / 10 B / 8 C.

The ignored cache remains unchanged and valid: three manifested payloads, `3,246,624` bytes, exact byte/SHA-256 agreement, no missing or extra payload, and all files ignored and untracked. The cache contains no periodical, minute, clinical object, sensitive record, chapter, or other scholarly PDF.

This pass does not change the research or publication disposition. R36 remains an acquisition dossier with complete original issues/minutes, current issue-level custodian confirmation, voice/editorial replay, and rights/privacy review still missing. The gate remains **STOP / NO PUBLIC PROSE / NO HISTORICAL CONTENT CLAIM / NO QUOTATION / NO FACSIMILE / NO SEO-GEO USE**.

Final closure status: **PASS WITH GAPS FOR INTERNAL ACQUISITION RECONCILIATION ONLY; SUBSTANTIVE AND PUBLIC USE REMAIN STOP.**
