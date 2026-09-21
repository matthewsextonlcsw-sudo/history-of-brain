# R25 Brazil — Lima Barreto, HNA, 1919–1920 independent cross-review

**Verdict:** `RETURN FOR STRUCTURAL, PROVENANCE, AND TRANSCRIPTION REPAIR`. The bounded
autograph-writing/transmission lane is viable for internal reconciliation. The institutional
record, newspaper, public quotation, translation, facsimile, portrait, and public-prose lanes
must remain `HOLD`.

**Review date:** 2026-08-19
**Scope:** Read-only replay of the five packet outputs, ignored cache, pivotal manuscript images,
complete FBN inventory and Birman article, and current official repository, rights, and law
routes. This review does not authorize public prose, quotation, translation, facsimile, medical
image use, archive outreach, SEO/GEO use, or publication.

## Decision

The packet's central source boundary passes. R25 directly opened two FBN autograph objects and
correctly treats the diary as situated affected-person self-writing and the unfinished novel as
literary transformation rather than independent clinical or event corroboration. It correctly
uses Birman only for her argument and source map, not as a substitute for the unopened 1919
observation page. It also correctly refuses to fill the missing newspaper and institutional
lanes from later quotations.

The packet returns because its asserted validation is not reproducible under the governing
canonical model. All 42 relationships use noncanonical field names; all evidence controlled
values fail casing; the disagreement record is incomplete; one prose reference points to a
nonexistent evidence ID; two project search audits are incorrectly sourced to unopened primary
objects and rated L1; the manuscript's stored “diplomatic” opening silently modernizes visible
orthography; and the graph's independence labels do not implement its own diary/novel dependence
decision. These defects must be repaired before internal batch synthesis.

## Full-source and object replay

### Autograph manuscripts

Both official FBN object routes remain live and match the cached delivered objects:

- *Diário do Hospício*, Manuscritos `34A,01,010`:
  https://objdigital.bn.br/objdigital2/acervo_digital/div_manuscritos/mss1428160/mss1428160.pdf
  — 23,863,176 bytes and 177 PDF pages.
- *O cemitério dos vivos*, Manuscritos `34A,01,005`:
  https://objdigital.bn.br/objdigital2/acervo_digital/div_manuscritos/mss1428165/mss1428165.pdf
  — 13,764,701 bytes and 117 PDF pages.

The diary's PDF p.2/manuscript leaf 1 supports the bounded statement that Barreto wrote in the
first person that he had been in several institutional departments since the 25th of the prior
month. The same opening sequence contains the observation-pavilion and police-mediated-entry
language. This is direct for authored wording, not independent administrative confirmation,
diagnosis, legal status, motive, prevalence, or another person's experience.

The novel's PDF p.1 contains a French epigraph, chapter marker, and a descriptive literary
opening about Rio. It is materially distinct from the diary opening. Birman, printed pp.33–34,
explicitly describes the unfinished novel as written from diary material. That establishes a
textual-development relationship, not a second witness.

### Inventory, archive provenance, and Birman

The complete 328-page FBN inventory was replayed. Its PDF p.276 identifies `34A,01,005`, preserves
the uncertain `[192-?]` date, and notes the pencilled `7-2-20`; p.277 identifies `34A,01,010`,
preserves `[entre 1919 e 1920]`, handwriting attribution, and 17 attached note leaves; p.321 gives
the 158-page manuscript extent. The delivered 177-page wrapper must remain distinct from that
catalogued extent.

The current FBN collection page confirms the repository's statement that the 1,134-document
archive was acquired from relatives in 1947 and later digitized/recatalogued:
https://bndigital.bn.gov.br/artigos/colecoes-da-secao-de-manuscritos-lima-barreto/ . This is
provenance, not family testimony, blanket consent, or proof of original order.

The complete Birman article and journal record were replayed:

- https://doi.org/10.17851/2317-2096.24.2.31-47
- https://periodicos.ufmg.br/index.php/aletria/article/download/18587/15396

Printed p.38 supports the attributed statement that Birman describes the 1919 Pavilhão record as
one page and gives its limited field scope. Printed p.47 identifies the 1919 observation book at
the Biblioteca do Instituto de Psiquiatria/UFRJ. Printed pp.33 and 46–47 support the packet's
attributed anti-naturalization reading of photograph, label, and documentary frame. The article
is L2/A for Birman's own position and source map, but only derivative L2/B–C for the unopened
record's content. Its CC BY 4.0 license does not independently clear the embedded clinical
photographs.

### Unopened institutional and newspaper layers

The one-page 1919 observation record and exact 31 January 1920 *A Folha* page were not directly
opened in this review. Search replay found later scholarly references to the interview title and
date, but no complete issue/page, issue context, stable primary identifier, or current item terms.
The packet's substantive `HOLD` is therefore correct. Later editions and scholarship may be
source-map leads only and cannot supply primary wording, tone, chronology, intention, diagnosis,
or institutional “balance.”

## Mandatory repairs

### 1. Normalize all 42 relationship records

Every `REL-037001–REL-037042` row uses `predicate` instead of canonical `relation` and
`dependence_group` instead of canonical `independence_group`. Normalize every row to:

`relationship_id, evidence_id, claim_id, relation, source_id, source_level, claim_fit,
independence_group, dependence_note, rationale, status, withdrawal_reason`.

Preserve the controlled verbs and one L-level/one A–D fit per edge. Do not treat schema aliases as
canonical fields, and do not delete meaningful dependence notes during normalization.

### 2. Normalize evidence controlled values

All 19 rows currently using `directness:"direct"` must use controlled `Direct`. The three
`reported` rows may remain as written. All nine rows using `sensitivity:"public"` must use
controlled `Public`; the existing `sensitive` and `restricted` values may remain as written.
This is casing normalization only and must not upgrade manuscript transcription, derivative
record descriptions, or access audits.

### 3. Rebuild `DIS-037001` as a schema-complete disagreement record

The current record uses fused or noncanonical fields (`bounded_scope`, `areas_of_agreement`,
`rejected_or_disproven_positions`, `approved_public_wording`) and omits required top-level
bounded time/place/population/terms, evidence/source unions, uncertainty, controlled review
status, and creation fields. Rebuild it with:

`disagreement_id, question, bounded_time, bounded_place, bounded_population, bounded_terms,
positions, evidence_ids, source_ids, reasons_for_difference, agreement, uncertainty,
expert_distribution, rejected_conclusions, approved_wording, review_status, created_by,
created_on, review_date, reviewer`.

Each position must carry its own evidence and source IDs. Preserve that the primary institutional
page remains unopened and that this is not a two-independent-sides or surveyed-consensus record.

### 4. Repair project-audit provenance for `EVD-037021` and `EVD-037022`

These rows describe the packet researcher's access/search state, but they are bound to
`SRC-037008` and `SRC-037009`, the two explicitly unopened primary objects. The resulting
`REL-037023`, `REL-037025`, `REL-037039`, and `REL-037040` incorrectly rate project search
telemetry as L1 evidence originating in objects that were never consulted.

Create one or more schema-complete project acquisition/search-audit sources, normally L5, with
exact routes, query strings, dates, returned states, and reproducibility limits; rebind the two
evidence rows and all affected relationships. Keep `SRC-037008` and `SRC-037009` restricted and
with no evidence endpoints until their complete primary objects are directly opened. If the
search cannot be reconstructed exactly, downgrade/withdraw the search claims rather than
inventing telemetry.

Also identify the exact opened secondary source/locator that supplies the *A Folha* title/date,
or label those details as brief-supplied discovery metadata and Unknown pending source-chain
verification. “Later scholarship” without a named source is not provenance.

### 5. Correct the manuscript transcription layer

`EVD-037002` calls its stored text a “short diplomatic reading,” but the page image visibly uses
historical spellings that the record silently modernizes, including forms corresponding to
`Hospicio/Hospício`, `varias/várias`, `dependencias/dependências`, `delle/dele`, and `mez/mês`.
`EVD-037003` likewise stores accented modern `polícia` as purported original text without a
completed paleographic review. A modernized reading may be useful, but it is not diplomatic
transcription and cannot occupy `original_text` without editorial disclosure.

Either (a) obtain the required Brazilian-Portuguese paleographic check and store a genuinely
diplomatic reading with uncertainty/editorial marks plus a separately labeled modernization, or
(b) remove the unverified verbatim/original-text strings and retain only a bounded page-image
description until that gate passes. Audit `EVD-037006` under the same rule and keep the French
epigraph unused unless separately checked. Do not weaken the existing no-public-quotation and
no-translation holds.

### 6. Make the dependence graph implement the prose decision

`SRC-037001` uses `BARRETO-DIARY-MS`, while `SRC-037002` uses
`BARRETO-DIARY-NOVEL-CHAIN`. Those different labels allow the graph to count the two manuscripts
as independent even though `CLM-037008` and the packet prose explicitly prohibit that. Give the
diary and novel edges an honest shared overarching independence group wherever the claim turns
on the same author/experience/textual-development chain.

For `REL-037012` and `REL-037013`, also record that Birman's diary-to-novel conclusion is an
interpretation of that same manuscript chain, not independent historical corroboration. A
relationship-level group may differ from a source's general source-family label when the exact
claim depends on an upstream chain; explain this in `dependence_note`.

### 7. Repair claim labels/types that overstate the graph

`CLM-037007` is labeled `Strongly supported`, but its two edges are one literary-manuscript
example and one later interpretation dependent on the same manuscripts. Either rewrite it as an
attributed, bounded documented position or lower the label; do not imply multiple independent
support.

`CLM-037020` is typed `broad_cultural` and labeled `Documented`, while both edges are C-fit
illustration/qualification from one named person's archive chain. Retype it as the packet's
bounded methodological/nonrepresentativeness decision and connect it to an appropriate project
method source, or mark the broader archive-population proposition Unknown. Preserve the ban on
using Barreto as a proxy for Black, poor, police-referred, or institutionalized populations.

### 8. Resolve the nonexistent evidence reference

`FINDINGS.md` cites `EVD-037023`, but the evidence sequence ends at `EVD-037022`. Replace the
reference with the intended existing record—apparently `EVD-037018` for Birman's archival-source
list—or create a genuinely new record if distinct evidence is intended. Re-run a whole-packet
textual reference scan; no prose-only identifier may remain unresolved.

### 9. Narrow FBN rights labels and record present access friction

The current FBN reproduction page supports the packet's conservative image hold:
https://www.gov.br/bn/pt-br/servicos/reproducao-do-acervo-1/reproducao-do-acervo . It requires
conservation/copyright review, curator feasibility review, and a responsibility form for
laboratory-supplied images. The gov.br footer's CC BY-ND 3.0 statement applies to site content; it
does not by itself establish a license for every attached inventory PDF or manuscript image.

Accordingly, `rights_status:"licensed"` for `SRC-037003`, `SRC-037004`, and `SRC-037006` is too
broad unless the exact consulted layer is named. Separate site-page text, attached inventory,
and manuscript-image rights; use `unknown`, `link-only`, or `permission required` where an
item-specific license has not been established. Preserve the current link-first, no-facsimile,
no-commercial-use-without-clearance policy.

The cached inventory remains intact and hash-valid, but its recorded direct `@@download/file`
route returned HTTP 403 to unauthenticated command-line replay during review while the landing
page remained identifiable. Record this as current access friction, not disappearance or cache
invalidity; reacquire through a normal lawful browser/repository route if future verification
requires a fresh copy.

## Graph and cache audit

| check | observed | result |
|---|---:|---|
| sources | 9: 7 opened/verified, 2 restricted/unopened | content pass; audit provenance return |
| evidence | 22 | endpoint pass; casing/transcription/provenance return |
| claims/research decisions | 22 | coverage pass; two label/type repairs |
| disagreements | 1 | endpoint pass; schema return |
| relationships | 42 active | endpoint pass; schema/dependence return |
| unique canonical IDs and `037xxx` range | all | pass |
| relationship evidence/claim/source endpoints | 42/42 | pass before audit rebinding |
| relationship source equals evidence source | 42/42 | syntactic pass; two provenance bindings fail substantively |
| active claim coverage | 22/22 | pass |
| active evidence coverage | 22/22 | pass |
| duplicate evidence/claim/verb tuples | 0 | pass |
| unresolved prose identifiers | 1: `EVD-037023` | return |

The cache itself passes integrity review:

- 4 payload PDFs, 67,945,089 payload bytes;
- `MANIFEST.tsv` plus `SHA256SUMS`, 67,947,687 total cache bytes;
- all four SHA-256 values match both the files and manifest;
- 177/117/328/17-page structures match the packet descriptions;
- all six cache objects are ignored and untracked; and
- no cache payload is approved as a publication bundle.

The FBN manuscript files are public-viewable repository objects but facsimile use remains held.
The Birman article is CC BY 4.0 while its embedded archival portraits remain separately gated.
The private ignored cache may retain the complete article for verification; no portrait crop or
medical-image asset may be exported.

## Language, voice, privacy, and harm gates

**PASS; preserve every hold.** The packet correctly distinguishes author from narrator,
self-writing from institutional classification, and FBN provenance from family consent. It does
not require institutional confirmation before acknowledging Barreto's report, but it also does
not turn that report into diagnosis, prevalence, or another person's experience. Other confined
people are not surfaced as a roster, and the medical portrait is rejected by default.

The required Brazilian-Portuguese historical-language/paleographic review and independent
English check are appropriate and remain unmet. No English translation, French-epigraph use,
long Portuguese quotation, modern diagnosis, causal alcohol narrative, 1914 expansion, 1920
revolt narrative, family motive, proxy family voice, worker voice, national survey, or population
representativeness claim is approved.

Brazil's official copyright statute, arts.14, 24, 41, and 45, supports only the packet's cautious
preliminary underlying-text term screen:
https://www.planalto.gov.br/ccivil_03/leis/l9610.htm . It does not resolve the separate edition,
translation, facsimile, repository, moral-rights, dignity, privacy, or foreign-jurisdiction gates.

## Closure requirements

Before reviewer replay, the packet author must:

1. disposition all nine mandatory repair groups in an appended repair log;
2. preserve the institutional/newspaper/translation/image/public-prose holds;
3. re-run schema, controlled-value, ID-range, endpoint, source-binding, relationship-tuple,
   dependence, active-coverage, and whole-text reference validation;
4. re-run cache manifest/hash/byte/file-count/ignore/track checks; and
5. report exact post-repair counts and any remaining publication gaps.

No public or synthesis gate passes merely because the structural graph is repaired. The 1919
institutional page, exact newspaper page, posthumous-edition collation, qualified paleography,
translation, item-specific rights, dignity review, and Matthew's exact editorial approval remain
separate future gates.

## Final closure replay — 2026-08-19

**Final verdict:** `PASS WITH GAPS` for bounded internal reconciliation of the autograph-writing
and transmission lane only. The earlier `RETURN` is closed. This verdict does **not** approve
public prose, manuscript quotation or transcription, translation, facsimile, medical portrait,
institutional-record detail, newspaper content, SEO/GEO use, scripting, implementation, or
publication.

### Repair dispositions

1. **Relationship schema — CLOSED.** All 43 active rows use canonical `relation` and
   `independence_group`; none retains `predicate` or `dependence_group`. Every row has the full
   required field set, one permitted verb, one L1–L5 rating, one A–C fit, an explanatory
   dependence note, active status, and a resolved source/evidence/claim binding.
2. **Evidence controlled values — CLOSED.** The 23 evidence rows use `Direct` (20) or
   `reported` (3), and `Public` (9), `sensitive` (10), or `restricted` (4). Capitalization did
   not change access, mediation, or evidentiary strength.
3. **Disagreement schema — CLOSED.** `DIS-037001` now supplies bounded time, place, population,
   and terms; three position-level evidence/source sets; top-level unions; reasons, agreement,
   uncertainty, expert distribution, rejected conclusions, approved wording, controlled review
   state, creation fields, review date, and reviewer. All nine evidence and three source
   endpoints resolve. It explicitly rejects two-independent-sides and consensus readings.
4. **Project-audit provenance — CLOSED WITH PRIMARY HOLDS.** New `SRC-037010` is a
   schema-complete L5 project acquisition/method audit. `EVD-037021–EVD-037023` and five L5/A
   edges bind to that source. The record explicitly says exact query telemetry was not preserved
   and makes no exhaustive-search or historical-content claim. `SRC-037008` and `SRC-037009`
   remain restricted, unopened, and endpoint-free. The newspaper/date are brief-supplied
   discovery metadata; the exact headline, issue, page, interviewer, and wording remain Unknown.
5. **Transcription layer — CLOSED WITH LANGUAGE HOLD.** `EVD-037002`, `EVD-037003`, and
   `EVD-037006` no longer store the modernized strings as diplomatic/original text. They now
   contain bounded page-image descriptions, name the removed modernization, and withhold exact
   Portuguese and French wording pending qualified paleographic/language review. No English
   translation is present or approved.
6. **Dependence — CLOSED.** Claim-specific diary, novel, and Birman edges use
   `BARRETO-DIARY-NOVEL-CHAIN` when they derive from the shared author/experience/textual chain.
   In particular, `REL-037012` and `REL-037013` state that Birman's diary-to-novel conclusion
   depends on the upstream manuscripts and adds no independent historical witness;
   `REL-037037` and `REL-037038` place the two internal lanes in one shared chain.
7. **Claim burden — CLOSED.** `CLM-037007` is now a bounded, attributed `Documented` Birman
   position rather than `Strongly supported`. `CLM-037020` is an `interpretive`, individual-scope
   no-proxy method decision, with its A-fit support supplied by the L5 corpus audit rather than
   by treating two C-fit examples as population evidence.
8. **Reference integrity — CLOSED.** The earlier incorrect narrative pointer now uses
   `EVD-037018`; `EVD-037023` is a separate real method record. Whole-packet scanning finds no
   unresolved `037xxx` reference.
9. **Rights and access — CLOSED WITH PUBLIC HOLDS.** `SRC-037003` is `unknown` for the attached
   inventory PDF, and `SRC-037004`/`SRC-037006` are `link-only`; none treats the gov.br footer as
   a manuscript or attachment license. The inventory manifest records the present unauthenticated
   `@@download/file` 403 as access friction rather than disappearance. Birman's article remains
   CC BY 4.0 while its embedded medical portraits remain separately restricted by the packet's
   dignity and repository gates.

### Final graph and integrity replay

| check | final result |
|---|---:|
| canonical sources | 10: 8 verified, 2 restricted/unopened |
| evidence records | 23 |
| claims/research decisions | 22 |
| active typed relationships | 43 |
| disagreement records | 1 |
| distinct IDs in allocated `037xxx` range | 99/99 |
| parsed canonical JSON objects | 99/99 |
| relationship endpoint/source alignment | 43/43 |
| active claim coverage | 22/22 |
| active evidence coverage | 23/23 |
| duplicate evidence/claim/relation tuples | 0 |
| unresolved textual references | 0 |
| evidence endpoints on held `SRC-037008–SRC-037009` | 0 |

All required source, evidence, claim, relationship, and disagreement fields are present. Source
types, claim types, universality values, evidence labels, review states, relationship verbs,
levels, fits, and statuses are controlled. No active D-fit edge exists.

The ignored cache also passes final replay: four payload PDFs; 67,945,089 payload bytes;
67,947,946 bytes including `MANIFEST.tsv` and `SHA256SUMS`; matching SHA-256 values for all four
payloads; 177/117/328/17-page structures; six ignored/untracked objects; no missing or extra
payload. The changed control-file byte total reflects the repaired rights/access descriptions,
not a payload alteration.

### Preserved gaps and gates

The 1919 IPUB/UFRJ page, official identifier, complete context, recorder/photographer details,
and current access/reuse terms remain unopened. The exact *A Folha* issue/page and named source
chain remain unopened. A posthumous edition and its editorial method have not been collated to
the autographs. Brazilian-Portuguese historical-language paleography, an independently checked
English translation, French review if the epigraph is ever used, item-specific FBN/IPUB rights,
medical-image dignity review, and editorial approval remain outstanding.

Therefore preserve every existing hold: no modern diagnosis or causal alcohol story; no medical
portrait, observation-page crop, signature, handwriting decoration, facsimile, long quotation,
translation, family motive, proxy-family voice, roster of other confined people, population
representativeness, 1914 expansion, 1920 revolt narrative, national survey, firstness, efficacy,
prevalence, SEO/GEO page, timeline copy, blog, script, reel, video, implementation, or
publication. `PASS WITH GAPS` permits internal batch reconciliation only.

Agent Reach v1.5.0 was current; Jina/full-page replay was available and Exa remained unavailable.
