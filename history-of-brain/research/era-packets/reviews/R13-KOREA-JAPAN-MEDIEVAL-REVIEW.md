# Independent cross-review — R13-KOREA-JAPAN-MEDIEVAL

**Review date:** 2026-08-18
**Reviewer:** independent Codex packet reviewer
**Reviewed state:** five packet outputs and five ignored cache artifacts; packet/cache read-only
**Verdict:** **RETURN**
**Public-content state:** **blocked; no public prose**

## Decision

The packet's substantive historical boundaries are strong. The selected Korean lane, Japanese
lane, and single contact question remain separate; the pivotal passages support the packet's
careful claims about narrative authority, textual categories, prescriptive coercion, and a
transmitted Silla-monk attribution. The packet also correctly refuses to manufacture patient
experience, Japanese implementation, timeless Kampo, a Buddhist-therapy profession, efficacy,
or national priority.

The packet must nevertheless return before outline reconciliation because:

1. the contact passage's pivotal cached-PDF locator is wrong by one page;
2. nine evidence records attach multiple source IDs to one `EVD`, contrary to the atomic
   evidence schema;
3. all 52 relationships omit claim-relative L1–L5/LX, A–D fit, and dependence group;
4. several claims combine independent Unknown or priority propositions that have different
   research burdens;
5. `anachronism_risk` is not normalized to its controlled vocabulary; and
6. the cross-corpus diagnostic/priority negatives need bounded method records rather than one
   omnibus multi-source evidence record.

This is a bounded structural/locator return. It does not require another regional lane.

## Materials and method

Read in full:

- `PROJECT-BRAIN.md`;
- `BATCH-04-INDEX.md`;
- `sources/EVIDENCE-MODEL.md`;
- `sources/SOURCE-RATING-AND-CAPTURE-PROTOCOL.md`;
- R13-KOREA-JAPAN-MEDIEVAL `BRIEF.md`; and
- all five packet outputs.

Risk replay used Agent Reach/Jina, direct institutional pages, the complete cached PDFs, and
page-image inspection of the pivotal *Ishinpō* passages. Agent Reach v1.5.0 reported Jina
Reader available and Exa unavailable. Snippets and abstracts were not accepted as evidence.

Full or bounded-full replay included NIKH/AKS *Samguk yusa* records and compilation metadata;
Kim 2021; the 49-page scroll-3 scan; the 85-page scroll-2 scan; the e-Museum Nakarai object
record; Poletto 2021; Shin 1995; and both Commons file/rights records.

## Risk-based source replay

| Chain / issue | Exact replay result | Disposition |
|---|---|---|
| *Samguk yusa* compilation date/genre | NIKH and AKS identify Iryeon and a late-thirteenth-century compilation; NIKH places work underway around 1281 and possible completion in Iryeon's final years. | **PASS.** This supports a late compilation representing earlier settings, not a seventh-century chart or direct event record. |
| Hyetong apprenticeship/chronology | The selected narrative says Hyetong sought instruction from “Wuwei Tripitaka.” NIKH note 023 contrasts the story's 665 return with Śubhakarasiṃha's 716 Tang arrival and preserves competing source-formation readings. | **PASS WITH DISPUTE.** Keep `CLM-021002` Disputed; do not resolve the teacher identity from this packet. |
| Tang princess episode | The compiled unit represents an unnamed ill princess, ritual work with beans/vessels, a fleeing `jiaolong`, and claimed recovery. | **PASS** as narrative wording only. Symptoms, consent, delivery outside the story, safety, independent outcome, efficacy, and prevalence remain unavailable. |
| Silla royal-daughter episode | The unit places illness and claimed recovery within royal command, execution/collective punishment, pardon, appointment, and legitimation. | **PASS.** The patient is silent and the episode cannot establish ordinary care, voluntary treatment, or outcome. |
| Kim 2021 | The complete article discusses `新羅法師方` at pp. 11–13, links Hyetong to diffusion of incantatory Buddhist healing, and uses “therapy” language. | **PASS** for Kim's attributed modern interpretation; **C/D** for early practice, wide use, efficacy, or professional continuity. |
| Scroll-3 consulted edition and date | Commons file metadata identifies the complete 49-page object as a Japanese Ansei 1–Man'en 1 publication, 1854–1860, from NLC. The cached object matches. | **PASS.** The packet's corrected 1854–1860 date is supported. It is not a 984 autograph or the Nakarai witness. |
| Nakarai manuscript/object layer | e-Museum identifies the work as written in 984, the object as Heian/12th century, and the set as the oldest complete transcription: 27 Heian scrolls, one Kamakura scroll, and later Edo supplements. It also says the set was loaned to the Tokugawa shogunate in 1854. | **PASS.** The packet correctly separates 984 compilation, twelfth-century principal manuscript layer, later supplements, and the consulted nineteenth-century print. The Nakarai record is not a content collation of chapters 21–23. |
| Scroll 3, chapter 21 | Cached PDF p. 39 displays `治中風言語錯亂方第二十一`, the *Bingyuan lun* wind/blood/qi account, spirit-language and behavior/perception descriptions, and prescriptions. | **PASS.** Researcher glosses remain provisional; no modern diagnosis or Japanese implementation follows. |
| Scroll 3, chapter 22 | Cached pp. 40–42 display the five named `癲` categories, represented signs, drugs, bloodletting, moxibustion, rooster-comb blood, and intimate-body loci. | **PASS.** Preserve `癲`, named source layers, harm context, and Unknown delivery/outcome. |
| Scroll 3, chapter 23 | Cached pp. 42–43 display `治中風狂病方第二十三`, the wind/yang/yin/blood/qi account, represented behaviors, cold-water exposure, binding, moxibustion at intimate sites, and needling below the great-toe nail. | **PASS.** The coercive prescription is directly visible; actual restraint, consent, safety, frequency, and outcome remain Unknown. |
| Wikisource scroll-3 transcription | The current page contains the selected headings/passages but is incomplete/uncorrected and includes corrupt text. | **PASS AS LEAD ONLY.** Keep `SRC-021006` out of standalone evidence and mark it as a dependent locator aid, not a second witness. |
| Named continental sources / imported-copy question | The scan visibly attributes material to several named works. Poletto independently argues that continental materials were reworked through Japanese compilation and warns against modern category binaries. | **PASS WITH ATTRIBUTION.** The primary scan documents selection/juxtaposition; “reworked through Japanese eyes” remains Poletto's specialist framing. Neither indigenous invention nor passive unchanged copying is supportable. |
| Scroll-2 edition/date | Commons metadata identifies the complete 85-page scan with the same 1854–1860 publication range and PDM route. | **PASS.** Work date, pre-984 cited layer, nineteenth-century print, and modern scan remain distinct. |
| `新羅法師方` locator | Direct replay of the cached 85-page PDF places `服藥頌`, `新羅法師方云凡服藥呪曰`, the chant, and `向東誦一遍乃服藥` on **PDF page 59, right-hand leaf**. PDF page 60 begins the following calendrical contraindication material. | **RETURN / CORRECT.** `SRC-021010`, `EVD-021016`, the gap validation claim, and every downstream locator currently say PDF p. 60. Change them to p. 59 and replay the exact leaf. |
| Shin 1995 | The full 24-page PDF collates the passage using the Asakura-based photographic text and a modern punctuated edition, records variants, and gives two Korean renderings. Its broader conclusion infers standalone books, national ownership, dates, superiority, and active exchange from embedded titles/fragments. | **PASS NARROWLY.** Use as dependent collation/reception, not independent proof of a standalone Silla book, route, practice, or priority. |
| Popular Silla-book chain | The opened modern pages repeat book/clinician-use claims whose traceable historical basis stops at *Ishinpō* excerpts and modern Korean medical-history interpretation. | **PASS AS RECEPTION ONLY.** They are L4-A for current/public claims and LX-D for historical identity, use, and route. |

## Source language, translation, and textual history

The packet's language controls pass and should remain publication gates:

- the Korean lane uses Classical Chinese displayed by NIKH plus an unnamed modern Korean
  translation; the unnamed translator prevents publication attribution of interpretive choices;
- the Japanese lane uses a nineteenth-century Classical Chinese/kanbun print; no accountable
  modern translation of chapters 21–23 was opened;
- Shin's Korean renderings apply to the Silla-attribution passage, not the scroll-3 chapters;
- Wikisource character conversion/corruption is not an edition; and
- all English chapter titles and descriptions are internal researcher glosses pending a kanbun
  specialist and Nakarai/critical-edition collation.

The public holds for a Nakarai/critical scroll-3 collation, an accountable translation, and
source-boundary/variant checking are mandatory. Do not promote L1-A for the 1854–1860 witness
into A for exact 984 wording.

## Source level, fit, and independence audit

| Source IDs / group | Review disposition |
|---|---|
| `SRC-021000`, `SRC-021014`; `DEP-021000-SY-genre` | L3-A for compilation/genre metadata, D for Hyetong event historicity. They describe one compilation tradition and do not independently corroborate episodes. |
| `SRC-021001–021003`; `DEP-021001-Hyetong-text` | L1-A for displayed compiled wording; L3-A for portal translation/annotation; C/D for represented seventh-century events and outcomes. Three units are one narrative chain. |
| `SRC-021004`; `DEP-021002-Kim-reception` | L2-A for Kim's attributed interpretation; B/C for reception context; C/D for early diffusion, prevalence, or delivery. |
| `SRC-021005–021006`, `SRC-021009`; `DEP-021003-Ishinpo-scroll3` | One nineteenth-century content witness plus dependent transcription and metadata. L1-A for the scan's displayed wording; L5-A only for the transcription's locator job; L3-A for metadata/rights; D for practice/outcome. |
| `SRC-021007`; `DEP-021004-Ishinpo-object` | L3-A for Nakarai object history and 984/12th-century/later layer control; C for the exact selected chapter wording because no folio collation was performed. |
| `SRC-021008`; `DEP-021005-Ishinpo-method` | L2-A/B for Poletto's category/compilation method; D for implementation of the selected scroll-3 procedures, which his practice evidence does not study. |
| `SRC-021010–021011`, `SRC-021015`; `DEP-021006-Ishinpo-Silla-citation` | One later-edition primary witness, a dependent modern collation/interpretation, and same-object rights metadata. Correct the primary locator to PDF p. 59. B/C for a pre-984 cited layer; D for route, standalone work identity, practice, and efficacy. |
| `SRC-021012–021013`; `DEP-021007-popular-Silla-book` | L4-A for modern reception only and LX-D for historical book/use/priority. No corroboration. |

## Evidence-record architecture

The shared evidence-field key is useful, but `source_id` must resolve to one source record.
Nine `EVD` records currently collapse different source jobs or cross-corpus method into one ID:

| Evidence ID | Problem | Required repair |
|---|---|---|
| `EVD-021000` | Two institutional sources in one `source_id`. | Split NIKH and AKS evidence or keep one source as the evidence and connect the other through a separate record/relation. |
| `EVD-021007` | Primary scan, Nakarai object record, and Commons metadata are three distinct jobs. | Split consulted-print identity, Nakarai object history, and same-object metadata/rights. Preserve two dependence groups. |
| `EVD-021008–021012` | Each names `SRC-021005` plus transcription aid `SRC-021006` in the `source_id` line. | Keep the primary scan as the sole `source_id`; record Wikisource in method/dependency or create explicit `repeats` locator-aid records that never corroborate. |
| `EVD-021014` | Primary bounded absence and Poletto's methodological distinction are combined. | Split textual absence from scholarly method; relate both to `CLM-021010` with their own ratings/dependence. |
| `EVD-021016` | Primary passage and rights/edition record are combined. | Keep `SRC-021010` as passage evidence; create/use separate metadata evidence for `SRC-021015`. Correct passage locator to p. 59. |
| `EVD-021019` | Two popular sources plus two upstream sources are one omnibus record. | Create one reception evidence record per source; use `repeats`/dependency links for the citation chain. |
| `EVD-021020` | Four primary units are one cross-lane archive audit. | Either create one archive-silence record per source/actor group or define a researcher method record outside `EVD`; do not use four `source_id` values. |
| `EVD-021021` | Primary term assemblage and Poletto's modern method are combined. | Split historical-language evidence from modern category caution. |
| `EVD-021022` | `SRC-021000–SRC-021015` is not a valid atomic source link and the record bundles several unrelated priority questions. | Replace with a declared bounded search/method record per priority proposition, or leave each global priority question Unknown without pretending the whole source range is one evidence item. |

After splitting, every record must retain evidence form, one source ID, exact locator,
verbatim/description, translation and original-text layer, context, subject, recorder/editor,
method, directness, representativeness, limitations, sensitivity, researcher note,
extractor/date, and controlled verification status. Do not let shared prose obscure fields that
differ by source.

## Claim-schema and atomicity audit

All 19 claim IDs are defined and have incoming relationships. Evidence labels use the
controlled five-value set, but the following repairs are mandatory:

1. **Normalize `anachronism_risk`.** The controlled value must be exactly `none`, `low`,
   `medium`, or `high`, with explanation in a separate reason/note. Current values such as
   `very high`, `high if...`, `low; implementation risk high`, and `medium due...` are not
   controlled values. This affects `CLM-021000`, `005`, `007`, `009`, `011`, and `013–016` at
   minimum.

2. **Narrow `CLM-021005`.** Efficacy, prevalence, typical patient experience, and existence of
   a professional Buddhist-therapy service are four different Unknown propositions. Split them
   or retain one bounded claim and move the rest to wording limits/holds.

3. **Normalize `CLM-021007`.** The bounded claim that the selected sources do not establish a
   one-to-one modern diagnostic equivalence is `Documented` as a corpus/method result or
   `Unknown` as an actual equivalence question. “Strongly supported” incorrectly implies an
   independent clinical-historical crosswalk or consensus that was not opened. Add a specific
   `current_evidence_note`; the shared statement that no current-clinical comparison occurs is
   false for this comparative claim.

4. **Narrow `CLM-021013`.** A standalone work's existence, unity, author, exact date, route,
   use, prevalence, and efficacy are separate questions. Retain the exact attribution in
   `CLM-021012`; split only the Unknowns needed for the contact question, and move the rest to
   wording limits. Do not let a compound negative masquerade as one atomic existence claim.

5. **Narrow `CLM-021015`.** Widespread Buddhist therapy, humane care, patient satisfaction,
   and continuous clinical lineage have different populations and burdens. Split or keep them
   as separate publication holds rather than one broad-cultural claim.

6. **Split `CLM-021016`.** “First psychiatry,” “first psychotherapy,” “first Buddhist therapy,”
   and first Korean/Japanese mental-health treatment require different definitions and search
   corpora. If no full priority searches were performed, each remains Unknown/quarantined; a
   single omnibus priority claim is not atomic.

7. **Check `CLM-021011` wording.** Retain continental textual dependence plus Japanese
   selection/arrangement. Attribute “reworked through Japanese eyes” to Poletto and do not use
   it as proof of local implementation, national essence, or transformation of every borrowed
   passage.

8. **Give per-claim current-evidence notes** to `CLM-021007` and `CLM-021014`; both explicitly
   compare medieval terms/material to modern diagnostic or Kampo categories and therefore
   cannot inherit `not_applicable`.

## Relationship graph and disputes

The graph is syntactically complete: 16 sources, 23 evidence IDs, 19 claims, 52 unique
relationship IDs, and three dispute IDs are declared; all retained claims have incoming
relationships and all evidence IDs are used. The semantics are not yet compliant.

Every `REL-021xxx` must add:

- the claim-relative L1–L5/LX source level;
- A–D fit for that exact relationship;
- the applicable dependence group; and
- a note showing whether the relation is independent, derivative, or a method/absence check.

Specific verb/fit repairs:

- `REL-021013` says Kim's evidence “repeats” `CLM-021015`; an evidence record does not repeat a
  claim. It **originates** or **illustrates** Kim's modern broad-therapy/diffusion interpretation
  and adds no proof of the medieval proposition.
- `REL-021035` similarly treats Kim's broad-use inference as repeating an Unknown compound
  claim. Repoint after atomic split and use `originates` for the attributed modern position or
  `qualifies` for the historical Unknown.
- `REL-021036` must split with `EVD-021019`; each popular source repeats the same upstream
  reception chain and is L4-A only for its own published wording, LX-D for historical work/use.
- `REL-021042` cannot treat omnibus `EVD-021022` as positive support for four global priority
  negatives. A bounded search audit may qualify an Unknown priority claim; absence of a global
  survey is not proof of the global negative.
- `REL-021019–021021` must follow the `CLM-021007` normalization. Historical heterogeneity can
  illustrate why direct equivalence is not established; it does not independently prove a
  modern diagnostic proposition.

The three dispute records otherwise pass. Preserve:

- unresolved Wuwei identity/chronology;
- title-like `新羅法師方` attribution versus standalone-work inference; and
- the imported-copy/indigenous-invention false binary.

No expert distribution is invented, and the packet clearly says when full specialist
literature was not opened.

## Practice, patient voice, safety, and modern-category holds

This audit **passes** and must survive structural repair.

- Korean royal women are unnamed/silent narrative recipients, not patients whose consent,
  symptoms, satisfaction, or outcomes are recovered.
- Hyetong's stories are hagiographic/authority narratives; claimed cure is not efficacy.
- The Japanese chapters contain generic prescriptive subjects, not named Japanese recipients
  or delivery records.
- Cold-water exposure, binding, bloodletting, burning/moxibustion, intimate-body treatment,
  and needling are described as potentially coercive/harmful prescriptions without claiming
  they were implemented.
- `言語錯亂`, `癲`, and `狂` remain historical terms inside their textual assemblages; no
  psychosis, mania, epilepsy, DSM/ICD, or other diagnosis is assigned.
- The archive gives no cost, access, provider, family, consent/refusal, adverse-event,
  prevalence, or outcome data for Japanese implementation.
- Timeless Kampo, Buddhist therapy/psychotherapy, uniquely humane care, patient satisfaction,
  continuous clinical lineage, and national mental-health priority remain blocked.
- The packet does not infer a Korea→Japan route from one Silla attribution and does not treat
  similar content as transmission evidence.

Keep every corresponding publication hold, translation review, safety review, and lived-
experience gap active after graph repair.

## Rights and cache replay

All five declared files are present, repository-ignored, and match the ledger exactly:

| Cached file | Bytes | SHA-256 replay | Disposition |
|---|---:|---|---|
| `SRC-021004-kim-2021.pdf` | 1008437 | `a253aef4855149acd8e336b0d6fe9371c13cdc7fc0dd65a985c8f8c6fd266d65` | **PASS**; journal copyright, ignored local research cache, no redistribution. |
| `SRC-021005-ishinpo-scroll-3-ansei-manen-1854-1860.pdf` | 13875269 | `4f3aa11e117c8dba91a9c35ec1683189e1ba4a0d2ff6a8579ca787817f5521b0` | **PASS**; Commons/NLC mechanical scan, PDM 1.0. |
| `SRC-021008-poletto-2021.pdf` | 656888 | `5b5e3c8c42ab48f047802f39fb30fcc61d3406939ee8042c5f894eceee7e0a99` | **PASS**; article states CC BY 4.0. |
| `SRC-021010-ishinpo-scroll-2-ansei-manen-1854-1860.pdf` | 25139800 | `c00e864569f8ba6e2a5a9cd88cedc8965953b6772774b1e1db9cb49e411d9ef7` | **PASS**; Commons/NLC mechanical scan, PDM 1.0. Correct contact locator to p. 59. |
| `SRC-021011-korean-medical-literature-1995.pdf` | 155575 | `ee436836f84ba9e3fc5073154c75d7eabf432aff74ae31b31ca3cd73207662e3` | **PASS**; journal copyright, ignored local research cache, no redistribution. |

`git check-ignore -v` resolves all five files through the project source-cache ignore rule.
No derived OCR, page image, or extracted text remains in the packet cache.

## Scope and mandatory repairs

The one-lane/one-lane/one-contact shape passes. No Korean/Japanese cultural merger, China-as-
default explanation, inferred route from similarity, general Kampo history, or public prose
entered the packet.

Mandatory repair checklist:

1. Correct the `新羅法師方` cached-PDF locator from p. 60 to **p. 59, right-hand leaf** in the
   source, evidence, validation, and handoff records; replay the complete passage.
2. Split every multi-source `EVD` into one-source atomic records, including metadata/rights,
   transcription aid, modern scholarship, popular reception, and cross-corpus audit jobs.
3. Give all evidence records complete record-specific schema fields after the splits.
4. Add source level, A–D fit, dependence group, and independence semantics to all 52
   relationships.
5. Repair `REL-021013`, `035`, `036`, and `042` verbs/targets so modern interpretations,
   derivative reception, and bounded search absence cannot count as historical support.
6. Normalize every `anachronism_risk` to `none|low|medium|high`, moving reasons to a separate
   note.
7. Narrow/split `CLM-021005`, `CLM-021013`, `CLM-021015`, and `CLM-021016` into atomic
   propositions or move extra Unknowns to wording-limit/publication-hold fields.
8. Normalize `CLM-021007` to a bounded documented/Unknown non-equivalence finding and add its
   actual current-evidence note.
9. Add a current-evidence note for the Kampo comparison in `CLM-021014`.
10. Preserve the Nakarai/translation/implementation/contact-route/lived-experience/safety and
    priority publication holds without treating them as closed by structural repair.
11. Rerun ID uniqueness, endpoint resolution, one-source-per-EVD, controlled-value,
    REL-rating/dependence, cache/hash/ignore, and owned-path diff validation; append a dated
    packet repair disposition for reviewer closure.

**Internal gate:** returned; do not reconcile into the master evidence graph until all eleven
repairs are independently replayed.
**Public gate:** blocked; existing publication holds remain mandatory.
**Reviewer closure required:** yes.

## Reviewer closure replay — 2026-08-18

**Closure verdict: PASS WITH GAPS for internal outline/reconciliation only.** The repaired
packet closes all eleven mandatory structural and evidentiary repairs in this review. The
public gate remains **HOLD**; this verdict does not close the packet's translation,
implementation, contact-route, safety, lived-experience, continuity, diagnosis, or priority
gaps.

### Independent replay

- **Contact leaf and passage — PASS.** The cached Scroll 2 scan places `服藥頌`, the
  `新羅法師方云凡服藥呪曰` attribution, the chant, and `向東誦一遍乃服藥` on cached-PDF
  p. 59, right-hand leaf. Cached-PDF p. 60 begins the following calendrical material. The
  ledger, evidence record, relationship, validation note, and handoff now use p. 59 and retain
  the title-like-attribution versus standalone-work dispute.
- **Evidence normalization — PASS.** `FINDINGS.md` contains 33 unique evidence records. Each
  record names exactly one `source_id` and one `SRC-021xxx` source; metadata, transcription,
  scholarship, popular reception, and cross-corpus audit functions are no longer combined in
  a single evidence record.
- **Atomic claims — PASS.** The graph contains 31 claims. Efficacy, prevalence, typical
  experience, professional Buddhist therapy, standalone-work status, route, humane-care,
  satisfaction, continuity, and the four distinct priority propositions are separately
  represented. The historical-term claim is bounded to this corpus and does not silently make
  a modern diagnostic assertion.
- **Relationship normalization — PASS.** All 78 relationships have a controlled source level,
  A-D fit, and an explicit dependence group/independence statement. All endpoints resolve;
  every retained evidence record is used, and every retained claim has incoming coverage.
- **Kim semantics — PASS.** `REL-021013` and `REL-021035` use `originates` for Kim's attributed
  modern interpretations and do not convert them into medieval proof. `REL-021036` treats the
  standalone-work proposition as Unknown and the popular account as derivative reception.
  `REL-021042` uses `contextualizes` for the bounded priority audit and supplies no positive
  proof of a global or national priority claim.
- **Anachronism and current evidence — PASS.** All 31 `anachronism_risk` fields use only
  `none|low|medium|high`, with reasons in separate notes. `CLM-021007` records the absence of
  an opened validated modern diagnostic crosswalk, and `CLM-021014` records that no current
  Kampo taxonomy or continuity study was opened.
- **Full-source replay — PASS.** The Kim article supports the attributed reception claims and
  not treatment efficacy or prevalence. Poletto's full article explicitly describes
  *Ishinpo* as a Chinese-source compilation “reworked through Japanese eyes,” supporting the
  packet's exchange-without-route-invention limit rather than an indigenous/imported binary.
- **Cache and rights — PASS.** All five declared cache files are present, ignored, byte- and
  SHA-256-identical to the ledger, and carry rights/redistribution dispositions. No cache file
  is tracked.
- **Graph replay — PASS.** Machine checks returned 16 sources, 33 one-source evidence records,
  31 claims, and 78 rated/dependence-explicit relationships, with unique IDs, resolved
  endpoints, complete evidence/claim coverage, and controlled anachronism values.

### Gaps that remain publication-blocking

This closure does not establish a medieval Korean-to-Japanese transmission route, a discrete
Silla-authored standalone work, implementation of the Japanese prescriptions, safety or
efficacy, patient consent/satisfaction/outcomes, modern diagnostic equivalence, continuous
Kampo lineage, professional Buddhist psychotherapy, or any national/global mental-health
priority. The later Nakarai witnesses still require specialist textual/translation review for
public quotation and broader historical inference.

**Final internal gate:** PASS WITH GAPS; eligible for bounded internal reconciliation with all
holds carried forward.
**Final public gate:** HOLD.
**Further reviewer closure required for these repairs:** no.
