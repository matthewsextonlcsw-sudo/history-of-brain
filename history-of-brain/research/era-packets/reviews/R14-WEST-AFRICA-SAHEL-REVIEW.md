# Independent cross-review — R14-WEST-AFRICA-SAHEL

**Review date:** 2026-08-18
**Reviewer:** independent Codex packet reviewer
**Reviewed state:** all five packet outputs and the ignored cache; packet/cache remained read-only
**Verdict:** **RETURN**
**Public-content state:** **blocked; no public prose**

## Decision

The packet has a defensible three-setting scope and unusually good archive boundaries. It does not
turn Arabic into Ajami, does not make a 1980–1981 Songhay performance into fifteenth-century
testimony, does not treat archaeology as access to inner life, and does not hide the external,
elite-male, colonial-edition, custody, or affected-voice limits of its sources. The distinction among
Ibn Battuta's fourteenth-century travel account, al-Saʿdi's later local chronicle, Gao/Gao-Saney
material and epigraphic archives, and Nouhou Malio's recorded performance is suitable for eventual
outline reconciliation.

The packet must nevertheless return. The Ibn Battuta condolence event is attached to the wrong
death, the *Tarikh al-Sudan* witness labels are wrong in one handoff and its pivotal p. 87 passage is
missing a material manuscript-layer qualification, the Gao-Saney epigraphic and radiocarbon records
omit source-internal chronology cautions, and the 1684 dossier does not date the surviving witness as
precisely as the packet implies. Four `REL` rows are not evidence-to-claim links, three evidence
statuses and every source-level field fail controlled normalization, the internal search audit uses
`LX` while actively supporting claims, and one cited full-text URL is dead. These are reproducibility
and source-exactness failures, not invitations to expand the packet into all of West Africa.

## Materials and method

The reviewer read `PROJECT-BRAIN.md`, `BATCH-04-INDEX.md`,
`sources/EVIDENCE-MODEL.md`, `sources/SOURCE-RATING-AND-CAPTURE-PROTOCOL.md`, this
packet's `BRIEF.md`, and all five packet outputs. Risk replay used Agent Reach/Jina, direct
institutional files, Internet Archive OCR paired with the cached scans, and primary-source web-search
fallback. Agent Reach v1.5.0 reported Jina Reader available and Exa unavailable. Search snippets and
abstracts were leads only.

Full or bounded full-text replay included:

- Defrémery and Sanguinetti's 1858 Arabic/French edition of Ibn Battuta, printed pp. 397–400;
- Houdas's 1900 French *Tarikh al-Sudan*, introduction pp. xiv–xvi and printed pp. 87–88;
- Moraes Farias's complete 2003 inscription corpus, especially printed pp. 5–7, 17, 20–21 and the
  relevant source-critical sections;
- Takezawa and Cissé's complete Gao excavation article, especially HTML paragraphs 17–18 and
  23–31;
- the complete Columbia World Epics presentation of Nouhou Malio's 1980–1981 performance;
- Jansen's complete 2012 *Oral Tradition* article through the correct article/complete-issue routes;
- Ngom's repository record and the packet's bounded use of the full archive survey; and
- the complete UNESCO nomination dossier for *Shifa al-Asqam*.

## Risk-based source replay

| Chain / issue | Replay result | Disposition |
|---|---|---|
| Ibn Battuta illness | Printed pp. 397–400 report six ill travelers, one death, Ibn Battuta's fainting, an Egyptian's root/anise/sugar preparation, vomiting, and two months of illness. The packet correctly refuses cause, botanical identification, safety, consent, efficacy, prevalence, or a specifically local medical tradition. | **PASS.** `EVD-023100` / `CLM-023200` remain a single attributed traveler/redactor/edition chain. |
| Ibn Battuta condolence banquet | Printed p. 400 says Mansa Sulayman later held the banquet for “our master Abu al-Hasan,” the deceased Marinid sultan of Morocco. The Qur'an was read and supplications were made for Abu al-Hasan and for the living Mansa Sulayman. It was not a memorial for the unnamed travel companion, and Abu al-Hasan was not Mansa Sulayman's father. | **MANDATORY REPAIR.** Rewrite `EVD-023101`, `CLM-023201`, the lived-archive row, findings summary, node 3, transition notes, and every dependent wording. Separate the preceding illness/death episode from the later royal commemoration. |
| Ibn Battuta coercion / affected voice | Printed pp. 418–419 represent an enslaved woman brought with leg restraints and hands bound to her neck and ordered to say what she knew in a political accusation. | **PASS.** `EVD-023103` / `CLM-023203` correctly treat this as narrator-mediated, coercion-conditioned representation, not voluntary or transparent testimony. |
| *Tarikh al-Sudan* historical position | Al-Saʿdi is a locally situated seventeenth-century author representing earlier people/events; Houdas is a later French editor/translator using colonial acquisition and commissioning networks. The packet keeps chronicle representation separate from contemporaneous event proof. | **PASS WITH TRANSMISSION REPAIRS BELOW.** Do not weaken the current retrospective and French-layer wording limits. |
| Houdas witnesses | Introduction pp. xiv–xvi identifies manuscripts **A, B, and G**, not A/B/C. A is BnF 5147 from the Archinard lot; B is BnF 5256, commissioned by Félix Dubois at Timbuktu in 1896; G reached Houdas through René Basset and Dr Tautain and was completed 20 January 1792. | **MANDATORY REPAIR.** Correct `G8` and any replay notes to A/B/G, retain the acquisition differences, and do not claim current custody without repository readback. |
| Houdas p. 87 category passage | The French says the shaykh's mind/spirit became troubled and observers thought him “fou,” within a sacred/hagiographic sequence. Footnote 2 says the preceding part of the sentence was absent from A and B and from the printed Arabic; G arrived only after that portion had been printed. | **MANDATORY REPAIR.** Add the exact A/B/printed-Arabic/G transmission issue to `EVD-023107`, `CLM-023207`, and `G1`; retain HOLD pending Arabic and modern critical-edition replay. Create a disagreement/transmission record or equivalently explicit typed structure rather than leaving `disagreement_id` as `not_applicable`. |
| Gao-Saney inscriptions | Moraes Farias's inscription 3a/3b gives Saturday, 3 Rabi I 502 AH / 11 October 1108, then notes that 11 October was Sunday by mathematical calendars. Nos. 14 and 18 retain the packet's material, naming, local-manufacture, loss, and tentative-dating cautions. The six-women/al-Malika office proposal remains one scholar/corpus chain. | **MANDATORY PRECISION REPAIR.** Add the inscription 3 day/date mismatch to `EVD-023113`, `CLM-023213` limitations, and handoff. Keep `CLM-023214` Plausible and do not count `SRC-023003` as independent corroboration. |
| Gao-Saney archaeology | Paragraphs 17–18 confirm about 2,000 clandestine pits and two small undisturbed trenches. Paragraph 28 reports seven charcoal samples, discounts two anomalously early samples, derives early eighth–mid-tenth century from the remaining samples, and then extends the site's interpreted span to late tenth century by comparison with a separate Malian Institute sample whose context is unclear. | **MANDATORY PRECISION REPAIR.** Split direct sample result from expanded interpretive span in `EVD-023118` / `CLM-023217`; name the two discounted samples and the separate late-tenth-century comparison. Preserve small-sample/looting limits and do not present palace, ethnicity, exchange, care, or inner life as direct material observation. |
| Nouhou Malio performance | The Columbia page identifies Nouhou Malio, accompanist Soumana Abdou, Saga, Niger, and recording dates 30 December 1980 and 26 January 1981. It identifies the 1990 bilingual publication as University Press of Florida and the 1996 English student edition as Indiana University Press. | **PASS CONTENT; REPAIR METADATA.** `SRC-023007` correctly uses the performance only as 1980–1981 evidence, but its publisher/holder field must name the University Press of Florida 1990 layer separately from Indiana's 1996 layer and Columbia's later web excerpt. |
| Oral protocol | Jansen's Kela/Maninka case documents continuing, constituency-sensitive responsibilities and conflict around recordings. It is not the Songhay/Malio chain and grants no permission for it. The packet keeps it methodological and nonidentical. | **PASS CONTENT; REPAIR LINK.** Keep the direct Malio/Songhay authority, reuse-scope, consent, descendant/tradition-holder, and no-audio/image-cache holds. |
| No local Ajami claim | Ngom distinguishes Arabic and Ajami and warns that much owner-community material remains uncatalogued. The packet opened no specific local-language Ajami item dated 800–1600 and calls that a bounded search gap, not historical absence. | **PASS.** Do not relabel Arabic sources, Malio's later Songhay performance, or an internal search result as a medieval Ajami witness. |
| 1684 handoff | The UNESCO dossier associates Ahmad al-Raqqadi al-Kunti/work with 1096 AH/1684, but says no autograph was found and places the nominated document in the seventeenth century through expert/user opinion. It identifies the Mamma Haïdara Library at nomination time, not verified current custody. | **MANDATORY PRECISION REPAIR.** Replace unqualified “1684 manuscript/work” wording in `SRC-023009`, `EVD-023123`, `CLM-023225`, and handoff with the dossier's exact author/work association and non-autograph witness dating. Retain outside-1600 quarantine, no-practice/outcome inference, and current-custody HOLD. |

## Source position, dependence, and claim burden

- `SRC-023000` is one traveler–redactor–1858 edition/translation chain. Its illness and banquet
  events are not independent from one another merely because they occupy separate records.
- `SRC-023001` is a locally authored chronicle reached through Houdas's French edition and three
  differently obtained witnesses. A locally authored later representation is not a contemporary
  witness to every earlier event, and the French p. 87 wording is not an independently collated
  Arabic category.
- `SRC-023002` and `SRC-023003` share author and corpus. The web chapter does not independently
  corroborate the monograph's al-Malika/office argument.
- `SRC-023004` is one excavation/report chain. Its two trenches and five retained charcoal dates do
  not become multiple independent witnesses to settlement function or occupants' identities.
- `SRC-023007` is one 1980–1981 performance plus Hale's edition/translation and a later Columbia
  excerpt. The 1990 and 1996 editions are publication layers, not independent oral witnesses.
- `SRC-023008` is a nonidentical ethics case. It contextualizes a protocol obligation but cannot
  authorize, date, or corroborate Malio's performance.
- `SRC-023009` is a nomination dossier, not the manuscript/autograph or critical edition; its
  advocacy, catalog, content-summary, custody-at-nomination, and efficacy claims require different
  fits.
- `SRC-023010` records the researcher's bounded packet state. It is not historical evidence that
  Ajami, affected people, care, or testimony did not exist.

The packet's strongest myth-audit claims remain usable internally only after the Ibn banquet and
Gao chronology repairs propagate. “Demonology only” may be rejected for this opened corpus because
the sources display multiple distinct registers; that does not establish a secular/spiritual split or
regional prevalence. “Universal communal care” is appropriately rejected by status, enslavement,
coercion, and access limits. “No history before colonialism” is rejected only through bounded,
dated sources. “Timeless African spirituality” remains disallowed because archive, place, language,
date, genre, and transmission are not interchangeable.

## Record and graph audit

The packet contains 11 source records (`SRC-023000–010`), 25 evidence records
(`EVD-023100–124`), 27 claim records (`CLM-023200–226`), and 54 relationship rows
(`REL-023300–353`). IDs are unique and remain inside the 023xxx range. Every evidence and claim
participates in at least one syntactically valid evidence-to-claim edge after the four invalid rows
below are excluded. This apparent coverage does not cure the schema and semantic defects.

### Rating and workflow normalization

The protocol requires source level and claim fit as separate axes. All 11 source records and all 25
evidence records instead place fit letters inside `source_level` strings such as `L1-A/L2-B` or
`L2-A/B`, while also maintaining a separate `claim_fit`. Normalize `source_level` to controlled
`L1`–`L5`/`LX` values for each specified job and keep A–D only in `claim_fit`; where a source has
multiple jobs, encode those jobs as atomic rating rows or structured per-claim notes rather than a
hybrid label.

Three evidence statuses are outside the evidence model's controlled values:

- `EVD-023107`: `checked against French source; Arabic replay required`;
- `EVD-023123`: `checked against dossier`; and
- `EVD-023124`: `checked against packet`.

Use the controlled status `checked against source` and carry the French/Arabic, dossier, and packet
limits in explicit fields. `SRC-023009` is only `extracted` while `CLM-023225` is `source-verified`;
either verify the source record or lower the claim workflow state.

`SRC-023010` / `EVD-023124` use `LX-A` to support `CLM-023218` and `CLM-023226`. `LX` means
rejected or unusable and cannot be retained as active evidence. Reclassify the bounded project audit
under a defensible nonhistorical method/source job (at most a discovery/method record with fit A for
packet state and D for historical absence) or withdraw its supporting edges. Never count it as
historical corroboration.

### Relationship shape and coverage

The evidence model's canonical `REL` is an evidence-to-claim link. Four rows violate that shape:

- `REL-023316`: `SRC-023003 repeats SRC-023002`;
- `REL-023351`: `SRC-023001 originates EVD-023104`;
- `REL-023352`: `SRC-023002 originates EVD-023113`; and
- `REL-023353`: `SRC-023007 originates EVD-023121`.

Reserve/withdraw these IDs and move source-source dependence and source-evidence provenance into
the source/evidence records or dependency records. If any ID is repurposed, it must become an actual
`EVD-023xxx` → permitted verb → `CLM-023xxx` edge supported by the opened evidence. Do not invent
evidence to preserve a count.

The redundant `evidence_ids` arrays disagree with the typed graph for three claims:

- `CLM-023212` omits contextual `EVD-023120` / `REL-023350`;
- `CLM-023213` omits qualifying `EVD-023116` / `REL-023348`; and
- `CLM-023215` omits contextual `EVD-023112` / `REL-023347`.

Regenerate those arrays from the retained relationship graph or remove the redundant field. After
all source-exact repairs, rerun endpoint resolution, permitted-verb, incoming-claim, evidence
participation, dependence, and evidence-label burden checks.

## Cache, rights, and link audit

The cache contains exactly two files. Both exist, are ignored by `.gitignore`, and are untracked:

| File | Bytes | SHA-256 | Result |
|---|---:|---|---|
| `ibn-battuta-v4-1858.pdf` | 15,424,507 | `db0a044c55c50759797d54b1d47dbc42fa6c5b7d547be8a7d0a56672cd6b157c` | matches ledger |
| `tarikh-al-sudan-houdas-1900.pdf` | 38,214,928 | `2ae943ab30c091ddccaa6d51c95f62b9edada05ad1bf17a62972298b31fef9e7` | matches ledger |

The public-domain dispositions are adequate for internal research cache. Farias, Ngom, Malio/Hale,
Jansen, OpenEdition, and the UNESCO dossier remain link-only; no restricted full text, performance
audio, transcription images, or manuscript images are cached. Public quotation/image use remains a
separate rights, dignity, and cultural-authority decision.

Nine of ten web source IDs have external URLs. On 2026-08-18, eight resolved with HTTP 200. Two
link repairs/notes are required:

- `SRC-023008` points to `.../13_27.2.pdf`, which returns **404**. Jansen's article is
  `https://journal.oraltradition.org/wp-content/uploads/files/articles/27ii/06_27.2.pdf`; the archived
  complete issue is also a reproducible fallback. Replace the dead URL and replay its checksum only
  if a lawful local cache is later authorized.
- `SRC-023003`'s OpenEdition URL resolves but redirects from `/48241` to canonical `/29920`; update
  the stable URL or record the redirect as nonblocking maintenance.

## Lived experience, custody, and community protocol

The packet passes its principal ethical controls:

- the unnamed restrained woman is not made a voluntary witness and her interior experience is not
  invented;
- Aisha al-Fulaniya remains represented through a male descendant/chronicle and is not converted
  into direct testimony;
- court hospitality, kin visiting, and bedside companionship remain elite/status-conditioned
  examples, not universal care or treatment efficacy;
- inscriptional titles and funerary formulas do not reveal grief, personality, access, belief, or
  everyday gender equality;
- archaeology supplies material and chronology, not patient/personhood evidence;
- Malio's performance is dated to 1980–1981, and current Songhay performer/descendant/tradition-
  holder permission remains unresolved;
- Jansen's Kela case is not universalized to Songhay communities;
- Houdas's European edition and object/manuscript dispersal do not erase Malian holders or current
  authority; and
- Mamma Haïdara/SAVAMA custody is stated only as of nomination until direct current readback.

There is still no direct affected-person account independently describing care outcome in this
selected corpus. That is an archive and discovery limit, not proof that affected people lacked
experience, speech, care, or knowledge. Community review and current custody are publication gates,
not formalities that link access or public-domain status can satisfy.

## Mandatory repair list

1. Correct `EVD-023101` / `CLM-023201` and every dependent file: the banquet commemorated the
   deceased Marinid sultan Abu al-Hasan, not the unnamed travel companion or Mansa Sulayman's
   father; prayers were for Abu al-Hasan and living Mansa Sulayman.
2. Correct Houdas witness labels from A/B/C to A/B/G in `G8` and related notes, preserve BnF
   5147/5256 and the distinct G provenance/date, and retain the repository/current-custody gap.
3. Add Houdas p. 87 footnote 2 to `EVD-023107`, `CLM-023207`, `G1`, and a formal transmission/
   disagreement structure: the preceding sentence portion is absent from A, B, and printed Arabic;
   G reached Houdas after printing. Keep Arabic lexical/public quotation HOLD.
4. Add Moraes Farias's inscription 3a/3b day/date mismatch—inscribed Saturday versus calculated
   Sunday 11 October 1108—to `EVD-023113`, `CLM-023213` limits, and handoff. Preserve all name,
   material, provenance, loss, and tentative-date uncertainty.
5. Repair `EVD-023118` / `CLM-023217`: identify the two anomalous charcoal samples, distinguish
   the retained early-eighth–mid-tenth result from the separately extended late-tenth interpretation,
   and keep small-trench/looting/sample-context limits.
6. Repair `SRC-023009`, `EVD-023123`, `CLM-023225`, and handoff to distinguish the dossier's
   1096 AH/1684 author/work association from its expert-opinion seventeenth-century dating of a
   non-autograph nominated witness. Preserve the 1600 cutoff, no-efficacy/practice inference, and
   current-custody HOLD.
7. Complete `SRC-023007`'s publication chain: University Press of Florida (1990 bilingual), Indiana
   University Press (1996 student edition), then Columbia's later excerpt. Do not alter the direct
   1980–1981 evidence boundary.
8. Replace `SRC-023008`'s dead `13_27.2.pdf` URL with the correct `06_27.2.pdf` article route;
   optionally canonicalize `SRC-023003`'s redirected OpenEdition URL.
9. Normalize all source levels and claim-fit grades as separate controlled axes; normalize
   `EVD-023107`, `EVD-023123`, and `EVD-023124` workflow statuses; resolve the
   `SRC-023009` extracted / `CLM-023225` source-verified mismatch.
10. Remove active `LX` support from `SRC-023010` / `EVD-023124`: reclassify the bounded packet
    audit under a defensible method job or withdraw its claim edges. It cannot prove historical
    absence.
11. Withdraw or rebuild `REL-023316` and `REL-023351–353` so every active `REL` is an evidence-
    to-claim edge. Preserve Farias dependence and source/evidence provenance outside the canonical
    relationship table.
12. Synchronize or remove redundant `evidence_ids` arrays for `CLM-023212`, `CLM-023213`, and
    `CLM-023215`; rerun schema, ID, controlled-value, graph, dependence, label-burden, cache, rights,
    ignore, tracked-cache, and HTTP validations. Append a dated disposition log mapping every item
    above to exact repaired records/files.

## Nonblocking publication and protocol gaps after repair

- Direct Arabic and modern critical-edition replay for every lexical or quoted *Tarikh al-Sudan*
  passage, plus exact current repository/custody records for A, B, and G.
- Independent Arabic/epigraphic specialist replay of inscriptions, calendrical conversions, title
  readings, and the al-Malika office argument.
- Later Gao/Gao-Saney excavation publication search and Malian archaeological/custodial review.
- A culturally governed search for specific 800–1600 local-language/Ajami, household, healer,
  disability, gender, status, and affected-person materials without converting archive silence into
  absence.
- Direct current authority and consent/reuse review for Nouhou Malio/Hale materials; no audio,
  transcription image, or culturally controlled excerpt publication from web availability alone.
- Direct Mamma Haïdara/SAVAMA readback and Arabic/critical-edition replay before any early-modern
  handoff uses *Shifa al-Asqam* beyond the bounded dossier statement.
- Trauma, dignity, descendant/community, image, funerary-object, and colonial-provenance review.
- Upstream public-reception audit before publishing named demonology-only, no-precolonial-history,
  universal-communal-care, or timeless-spirituality myths.

## Gates

- **Repair gate:** **RETURN.** Do not extract R14 into outline reconciliation until all twelve
  mandatory groups are repaired and independently replayed.
- **Internal outline gate after repair:** eligible for **PASS WITH GAPS** only for the three named,
  separately bounded settings and the exact claims surviving repair.
- **Public writing/publication gate:** **HOLD** pending Arabic/epigraphic/archaeological review,
  community and affected-voice protocol, current custody, rights, dignity, and reception-history
  gates. No public prose is approved.

## Independent repair-closure replay — 2026-08-18

**Closure reviewer:** independent Codex packet reviewer
**Reviewed state:** repaired packet outputs and ignored cache; packet/cache remained read-only
**Closure verdict:** **PASS WITH GAPS**
**Public-content state:** **blocked; no public prose**

### Closure decision

All twelve mandatory repair groups are closed. The repaired packet now preserves the pivotal
source distinctions that caused the original return, uses schema-complete controlled records, and
has a resolvable evidence-to-claim graph. No remaining defect requires another packet return. This
verdict permits only bounded internal outline reconciliation; it does not clear public quotation,
current-custody claims, living-tradition reuse, patient-experience prose, or a general history of
West African mental health.

### Source-exact replay

- **Ibn Battuta, printed pp. 397–400:** the six-person illness episode, one unnamed death,
  Egyptian-supplied root/anise/sugar preparation, vomiting, and two-month illness remain one
  traveler/redactor/edition chain. The later condolence banquet is now correctly separated: Mansa
  Sulayman reportedly commemorated the deceased Marinid sultan Abu al-Hasan; the Quran was read,
  and prayers were offered for Abu al-Hasan and the living Mansa Sulayman. `EVD-023101`,
  `CLM-023201`, findings, lived-archive analysis, and handoff wording agree.
- **Houdas, introduction pp. xiv–xvi and p. 87 n. 2:** the repaired ledger correctly identifies A
  as BnF 5147 from the Archinard lot, B as BnF 5256 commissioned by Félix Dubois in Timbuktu in
  1896, and G as supplied through René Basset and Dr Tautain and completed 20 January 1792. The
  p. 87 record now says the preceding sentence portion was absent from A, B, and printed Arabic,
  and that G reached Houdas after the relevant printing. `DIS-023400` formally retains the
  transmission question and Arabic lexical/public-quotation hold.
- **Moraes Farias, inscription 3a/3b, printed pp. 5–7:** the edition says Saturday, 3 Rabi I
  502 AH / 11 October 1108 and explicitly notes that 11 October was Sunday by mathematical
  calendars. `EVD-023113`, `CLM-023213`, and the Gao handoff retain rather than harmonize that
  mismatch. The Hakkiya reading, imported/local material distinction, loss, tentative dating, and
  same-author dependence of `SRC-023002/003` remain qualified.
- **Takezawa and Cissé, paragraphs 17–18 and 28 with nn. 13–14:** the repaired evidence records
  about 2,000 clandestine pits and two small undisturbed trenches; names GS1-2 and GS3-1 as the two
  discounted anomalously early samples; assigns the remaining five-sample result to early eighth
  through mid-tenth century; and separately identifies the context-unclear 1000±70 BP Malian
  Institute comparison used to extend the interpretation to late tenth century. Observation,
  chronology, palace/network inference, and inner-life/care claims remain distinct.
- **UNESCO *Shifa al-Asqam* dossier, especially §§1, 4.1–4.5, and 5.1–5.2:** the packet now
  distinguishes the dossier's 1096 AH/1684 author/work association from its expert/user-opinion
  dating of the nominated non-autograph witness only to the seventeenth century. The dossier's
  internal “original copy” language does not override its statement that no autograph was found.
  The witness remains outside the 800–1600 boundary, with practice, efficacy, autograph, and
  current-custody claims held.
- **Nouhou Malio / Hale / Columbia:** the 30 December 1980 and 26 January 1981 Saga recording
  dates, Nouhou Malio and Soumana Abdou, University Press of Florida 1990 bilingual edition,
  Indiana University Press 1996 English student edition, and later Columbia excerpt are now
  separate layers. The performance remains direct evidence only of the 1980–1981 performance.
- **Jansen:** the corrected `06_27.2.pdf` article route resolves and the Kela/Maninka case remains a
  nonidentical methodological source; it neither dates nor authorizes the Songhay/Malio material.

### Mandatory-group dispositions

| Original repair group | Closure result |
|---|---|
| 1. Ibn Battuta banquet | **Closed.** All dependent wording separates the unnamed traveler's death from Abu al-Hasan's royal commemoration. |
| 2. Houdas A/B/G witnesses | **Closed.** Labels, BnF identifiers, acquisition/commissioning routes, G date, and current-custody uncertainty are synchronized. |
| 3. Houdas p. 87 transmission | **Closed.** `EVD-023107`, `CLM-023207`, `DIS-023400`, and G1 preserve the A/B/printed-Arabic omission, G's post-print arrival, and public hold. |
| 4. Inscription 3 calendar | **Closed.** Saturday versus calculated Sunday remains explicit in evidence, claim limits, and handoff. |
| 5. Gao-Saney radiocarbon | **Closed.** Two anomalies, five retained samples, direct range, separate comparison, looting, trench, and inference limits are all retained. |
| 6. *Shifa* witness dating | **Closed.** Author/work association, witness date, non-autograph status, cutoff, efficacy/practice, and current-custody boundaries are distinct. |
| 7. Malio metadata | **Closed.** Recording, 1990 Florida, 1996 Indiana, and later Columbia layers are explicit. |
| 8. Links | **Closed.** The corrected Jansen and canonical Moraes Farias routes resolve. All ten external source URLs returned HTTP 200 during closure replay. |
| 9. Ratings and workflow | **Closed.** Eleven source and twenty-five evidence records use controlled `L1–L5` levels separately from A–D fit; all evidence statuses are `checked against source`; `SRC-023009` is verified. |
| 10. Active LX support | **Closed.** `SRC-023010` / `EVD-023124` are L5 method records, fit A only for bounded packet state and D for historical absence; claims remain `Unknown`/`HOLD`. |
| 11. Relationship shape | **Closed.** `REL-023316` and `REL-023351–353` are withdrawn/reserved outside the active table; all 50 active rows are evidence-to-claim links using permitted verbs. |
| 12. Arrays and full validation | **Closed.** `CLM-023212/213/215` arrays match their incoming edges; schema, IDs, endpoints, coverage, dependence, cache, rights, ignore, tracked-cache, and link checks pass. |

### Structural, dependence, cache, and rights replay

- Parsed records: 11 unique `SRC-023xxx`, 25 unique `EVD-023xxx`, 27 unique
  `CLM-023xxx`, and one `DIS-023400`; every required source, evidence, claim, and
  disagreement field is present and controlled values validate.
- Parsed graph: 50 unique active `REL-023xxx`; every evidence record participates, every retained
  claim has an incoming edge, all endpoints resolve, only the seven permitted predicates occur,
  and every claim's `evidence_ids` array exactly matches its incoming relationships.
- Dependence remains explicit: Ibn Battuta is one traveler/redactor/edition chain; Houdas is one
  edition across differently obtained witnesses; `SRC-023003` repeats the Farias corpus rather
  than independently corroborating it; the Gao excavation is one report; Malio/Hale publication
  layers are one performance chain; Jansen is a nonidentical protocol case; and the project audit
  is not historical corroboration.
- The ignored cache still contains exactly two files. `ibn-battuta-v4-1858.pdf` is 15,424,507
  bytes with SHA-256 `db0a044c55c50759797d54b1d47dbc42fa6c5b7d547be8a7d0a56672cd6b157c`;
  `tarikh-al-sudan-houdas-1900.pdf` is 38,214,928 bytes with SHA-256
  `2ae943ab30c091ddccaa6d51c95f62b9edada05ad1bf17a62972298b31fef9e7`.
  Both match the ledger, are ignored, and do not appear in tracked status. No copyrighted full
  monograph, article, performance, audio, transcription image, or manuscript image entered cache.

### Gaps and gates preserved after closure

- No specific local-language/Ajami item dated 800–1600 was opened; this is a bounded discovery
  gap, never a historical absence claim.
- Houdas's French category wording still requires direct Arabic, modern critical-edition, and
  specialist replay before quotation or lexical comparison.
- Gao/Gao-Saney needs epigraphic/calendar review, later-excavation search, Malian heritage review,
  and direct current object/custody/image-permission readback.
- Nouhou Malio/Hale material remains on source-specific current authority, performer/descendant or
  relevant tradition-holder, consent, and reuse hold. Jansen cannot supply that permission.
- *Shifa al-Asqam* remains an early-modern handoff requiring direct Arabic/critical-edition and
  Mamma Haïdara/SAVAMA current-custody review.
- No direct affected-person account independently evaluates care or outcomes in this opened
  corpus. Coercion, restraint, enslavement, status, archive silence, funerary dignity, colonial
  provenance, and community authority remain mandatory context.
- Public myth correction, body prose, quotation, images, audio, and SEO/GEO extraction remain
  blocked pending the packet's Arabic, specialist, rights, dignity, community, custody, and
  reception-history protocols.

**Final gate:** **PASS WITH GAPS for bounded internal outline reconciliation only. Public writing
remains HOLD.**
