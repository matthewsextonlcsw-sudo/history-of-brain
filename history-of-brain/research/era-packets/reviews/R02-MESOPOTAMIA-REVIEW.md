# Independent Cross-Review — R02 Mesopotamia

**Packet reviewed:** `R02-MESOPOTAMIA`
**Review date:** 2026-08-18
**Review status:** **PASS WITH GAPS**
**Use boundary:** internal research and outline planning only; no public prose reviewed or authorized
**Reviewer scope:** this file only; the packet files were not edited

## Verdict

The packet's central interpretation passes: it distinguishes learned textual classification from patient history, preserves translation uncertainty, refuses a modern mind/body or medicine/magic ladder, treats *Ludlul bēl nēmeqi* as a literary first person rather than a patient memoir, and correctly identifies the “first psychiatry” publications as a dependent modern citation lineage.

The packet should **not be returned for wholesale re-research**. It can inform the outline after the mandatory corrections below. One *Ludlul* subclaim must be held until its locator and wording are repaired. Several source records also need protocol normalization before the packet could become source-verified or support public drafting.

## Review basis

Fully read:

- `PROJECT-BRAIN.md`;
- `sources/EVIDENCE-MODEL.md`;
- `sources/SOURCE-RATING-AND-CAPTURE-PROTOCOL.md`;
- the R02 brief;
- all five R02 outputs; and
- all seven cached R02 files.

Risk-based verification used local full texts, Jina/direct pages, current eBL chapter APIs, Crossref rights metadata, CDLI artifact/transliteration records, and direct checks of the full-text first-priority publications. Search results and abstracts were not used as evidence for ancient historical propositions.

## Gate result by review question

| Review question | Result | Audit note |
|---|---|---|
| Core scope and period control | **PASS WITH GAP** | Strong first-millennium coverage and explicit early-period gap; little evidence supports the 3200 BCE end of the authorized boundary. The packet properly warns against implying continuous coverage. |
| Diagnostic-prognostic corpus | **PASS WITH GAPS** | Steinert and Al-Rashid support corpus structure and translation cautions. Several individual entries still depend on secondary reproduction rather than a directly opened current edition. |
| *Ludlul* text and genre | **PASS WITH REPAIR** | Current eBL lines support the main suffering/care claims, and Hurowitz supports a hymnic, autobiographical-confessional, didactic/wisdom discussion. Translation metadata is incomplete and one restoration locator overstates the surviving text. |
| Ritual and material care | **PASS WITH BOUNDARY** | Texts document prescribed water, rubbing, plants, beer, oil, figurines, offerings, and recitation. This is textual evidence for prescribed/performed-in-literature actions, not archaeological proof of frequency, delivery, experience, or efficacy. |
| “First psychiatry” chain | **PASS** | Three priority/diagnosis narratives are correctly traced to one Reynolds/Kinnier Wilson lineage and rejected or held. Abstract-only papers support only the narrow fact that their authors made those claims. |
| Source levels and fit | **PASS WITH GAPS** | Most pivotal ratings are appropriately claim-relative. Narrative records do not yet contain every required minimum-ledger field. |
| Edition and translation control | **PASS WITH REPAIRS** | Al-Rashid's gloss cautions are accurately located. eBL's chapter editor, revisers, and English translator must be recorded. Hurowitz's page locators are not reproducible from the consulted HTML. |
| Independence | **PASS** | The four independence groups prevent false corroboration. eBL/Annus-Lenzi/Hurowitz roles are separated appropriately; Hurowitz is independent for genre argument, not witness count. |
| Archive and lived voice | **PASS** | Literary, ritual, diagnostic, prescriptive, network, and retrospective-clinician voices are consistently distinguished. Missing patient, caregiver, non-elite, women, children, disabled, enslaved/dependent, outcome, and consent evidence is visible. |
| Rights and cache | **PASS WITH METADATA REPAIRS** | All hashes match and every cache file is ignored. Two OA chapter licenses can be made exact rather than left for recheck. |
| Contrary scholarship | **PASS WITH UPGRADE** | Retrospective-diagnosis disagreement is strong. The *Ludlul* genre discussion should add a later post-Oshima/current-five-chapter treatment before public drafting. |

## Mandatory repairs before outline extraction

### R02-REV-001 — Record the actual eBL edition and translator metadata

**Finding:** SRC-002001 cites “Enrique Jiménez et al., eds.” but does not identify the editor or English translator used for the lines quoted throughout the packet. The current chapter records for I–V identify:

- editor: Aino Hätinen;
- English translator: Benjamin R. Foster;
- revisions: Zsombor J. Földi for I–II, plus Adrian C. Heinrich, Enrique Jiménez, and Tonio D. N. Mitto as shown by the chapter records;
- chapter publication timestamp: 2022-08-30; and
- live, updateable chapter records with a blank exposed version string.

**Evidence checked:** eBL chapter APIs for `L/2/2/SB/I` through `V`; eBL About page, “How to Cite” and “Editions in the Library.”

**Why it matters:** the evidence protocol requires translator and edition/version control when claims depend on translated words. The current ledger makes Foster's English sound like an anonymous project translation.

**Exact repair:** revise SRC-002001 to name Hätinen as editor, Foster as English translator, the chapter-specific revisers, publication timestamp, access date, and the platform's updateable/preliminary status. Cite each public quotation by chapter and line plus access date. Do not imply that the eBL English translation is by Jiménez.

### R02-REV-002 — Correct the *Ludlul* III “social restoration” locator

**Finding:** the current eBL edition supports:

- III 46: the swathe is entrusted to “the people taking care of me” (`ana muttabbilīya`);
- III 49–106: extensive bodily recovery; and
- III 107: a fragment concerning possessions and companions.

III 108–117 and 119–120 are substantially or wholly lacunose; III 118 concerns overgrown nails. The statement that III 107–120 narrates “social restoration” is therefore too broad for the current edition.

**Affected records:**

- SRC-002001 pivotal locator;
- FINDINGS EVD-002014 and executive finding 5;
- CLM-002015; and
- LIVED-EXPERIENCE-AND-ARCHIVE LEA-002002.

**Exact repair:** change the bounded claim to “III 49–106 represents bodily recovery; III 46 mentions people taking care of the speaker; III 107 fragmentarily begins to mention possessions/companions.” If a broader public/social restoration claim is needed, extract and verify exact lines from Chapter V—for example the public procession beginning at V 26 and the Babylonian audience at V 69–75—rather than filling the lacuna in III.

**Interim decision:** CLM-002015 is **QUALIFY/HOLD FOR LOCATOR REPAIR**, not fully outline-ready in its present wording.

### R02-REV-003 — Replace nonexistent Hurowitz page locators

**Finding:** the consulted and cached Hurowitz source is an unpaginated HTML review essay. The ledger assigns pp. 1–4, 5–10, and 10–13, but those locators cannot be reproduced from the saved file or journal landing page.

**Evidence checked:** cached XHTML; JHS article landing page; DOI `10.5508/jhs.2011.v11.r53`.

**Exact repair:** either obtain an official paginated version and checksum it, or replace page ranges with stable paragraph anchors/incipits. Useful incipits include:

- “For half a century the standard edition…” for manuscript/reconstruction history;
- “Ludlul divides generically into two sections…” for hymn/confession analysis;
- “The fact that the protagonist in Ludlul is named…” for credibility versus autobiography; and
- “All these factors support the classification…” for Hurowitz's wisdom-literature position.

Also record the bibliographic nuance: journal volume 11 is dated 2011; the current landing page gives publication date 2012-02-20.

### R02-REV-004 — Correct Steinert's conclusion locator

**Finding:** SRC-002003 says “pp. 188–190 (conclusions).” In the opened chapter, the conclusion begins on p. 176 and continues on p. 177. Pages 178–186 are notes and pp. 187–194 are references. Page 185 n. 96 contains a useful caution that Mesopotamian medicine does not clearly divide somatic and mental pathologies, but it is a note, not the chapter conclusion.

**Affected records:** SRC-002003; FINDINGS executive finding 1; DIS-002000; CLM-002008; and any other use of “pp. 184–190” or “pp. 188–190” as the chapter's conclusion.

**Exact repair:** cite pp. 176–177 for Steinert's conclusion about dynamic, diverse, locally varying systems and mixed traditions. Cite p. 185 n. 96 specifically for the mental/somatic classification caution. Do not use pp. 188–190 as evidence; they are bibliography.

### R02-REV-005 — Upgrade BAM 234 object/provenance control from the current CDLI record

**Finding:** GAP-002001 states that a direct object record and provenance remain to be identified. A current authoritative record is available:

- CDLI `P285320`, “BAM 3, 234”;
- excavated at Assur (modern Qalat Sherqat);
- excavation number `Ass 13955go`;
- museum collection and museum number remain unknown in CDLI;
- CDLI's period and language fields are blank; and
- an approved transliteration by J. Cale Johnson is exposed, with current inscription revision `2311569` dated 2026-03-14.

**Stable records:** https://cdli.earth/artifacts/285320 and https://cdli.earth/inscriptions/2311569.

**Why it matters:** BAM 234 is the central case in the “anxiety state” to “agitated depression” chain. The object-level provenance should not remain “not established” when an authoritative catalogue now establishes Assur and an excavation number.

**Exact repair:** add a new L1-A source record for CDLI's bounded catalogue/transliteration claims; update the primary-text control register and GAP-002001. Preserve what CDLI does **not** establish: current museum number, period/date, full translation, authorship, and outcome. The direct CDLI transliteration does not replace a critical translation or Maul/Ritter-Kinnier Wilson comparison.

## Required repairs before source-verification or public drafting

### R02-REV-006 — Normalize minimum ledger fields

The narrative ledger contains much of the needed information but does not consistently expose the protocol's minimum row fields. At minimum, every SRC-002000–SRC-002011 record should explicitly include:

`verification_status`, `source_type`, `creator_role`, `publisher_or_holder`, `date/version`, `language/original language/translator`, `identifier`, `stable_url`, `archive_url`, `opened_on/by`, `exact_locator`, claim-specific `claim_fit`, `limitations`, `independence_group`, `rights_status`, `cached_file`, `sha256`, and `upstream_checked`.

Do not infer missing values. Use `not applicable`, `not established`, or `lead/abstract-only` where appropriate. The packet-wide “Access checked” date does not replace per-source `opened_on/by` under the active protocol.

### R02-REV-007 — Make the two Routledge chapter licenses exact

Crossref's records for both chapter DOIs expose CC BY-NC-ND 4.0:

- Steinert, DOI `10.4324/9780203703045-9`;
- Couto-Ferreira, DOI `10.4324/9780203703045-15`.

**Exact repair:** replace “publisher-provided open access; recheck license” with “CC BY-NC-ND 4.0,” preserve the DOI rights URL, and retain the no-derivatives/noncommercial limits. This does not change the verified cache hashes.

### R02-REV-008 — Keep textual material care distinct from material archaeology

CLM-002004 and CLM-002012–002013 are supported as claims about what texts prescribe or represent. They do not establish archaeological frequency, delivery, practitioner compliance, patient acceptance, or efficacy.

**Exact repair:** wherever the outline uses these claims, prefer “the surviving text prescribes/represents…” over “Mesopotamians treated…” unless object, residue, excavation, or documentary practice evidence is added. Keep GAP-002012 active.

### R02-REV-009 — Do not upgrade secondary translations of individual technical texts

The packet correctly marks BAM 202, BAM 316, BAM 323, KAR 32, Suālu IV, CT 4 8a, and LKA 154/157 as dependent on editions reproduced through Al-Rashid, Steinert, or Couto-Ferreira. These are adequate for outline mapping with attribution but not yet L1 line-level public quotations.

**Exact repair:** before public drafting, open the named critical edition for each quoted line, record translator/editor and witness, and compare wording where the public claim turns on `libbu`, `ṭēmu`, fear, voice, agency, or remedy. Do not count the modern synthesis and the edition it reproduces as independent evidence.

### R02-REV-010 — Upgrade the post-2014 *Ludlul* genre/version discussion

Hurowitz's review addresses the four-tablet/Annus-Lenzi reconstruction current in 2011. eBL's current introduction follows Oshima's five-chapter structure and identifies Šubši-mešrê-Šakkan as a historical character. Hurowitz remains valid for his own hymn, confession, didactic, and wisdom argument, but he does not independently review the current five-chapter edition.

**Exact repair:** retain “Hurowitz argues” language. Before public drafting, open Oshima 2014 or a later specialist treatment of the five-chapter reconstruction and record whether the added/repositioned material changes the genre or biographical discussion. Do not infer autobiography from the protagonist's historicity.

## Pivotal source verification notes

### Al-Rashid thesis — PASS

- p. 122 n. 84 explicitly says “Depression” does not refer to Major Depressive Disorder or any modern disorder.
- pp. 169–204 expose competing analyses of `ḫīp libbi`, including bodily-insides and affective possibilities.
- pp. 220–225 expose the semantic range and translation difficulty of `ṭēmu`.
- pp. 365–370 explicitly separate scribal observation/imagination from retrospective diagnosis and develop change/somatization as analytic patterns.

The two cached volumes preserve continuous printed pagination: volume 1 ends at p. 267 and volume 2 begins at p. 268. Future ledger locators should state the cache volume as well as the printed page for faster reproduction.

### Steinert — PASS WITH LOCATOR REPAIR

- pp. 141–143 support the corpus genres and entry structures.
- pp. 151–154 support integrated bodily, environmental, divine, incantatory, and technical framing.
- pp. 176–177, not 188–190, contain the conclusion.
- p. 185 n. 96 supports the narrow mental/somatic caution.

### Couto-Ferreira — PASS

- pp. 261–263 explicitly critique retrospective psychiatric classification.
- pp. 263–265 give BAM 234's sign cluster and ritual response.
- pp. 265–267 clearly frame LKA 154/157 as ritual text and scripted first-person material.
- pp. 267–270 support ghost relations, bodily applications, Suālu IV, BAM 202, and translation ambiguity.

The packet correctly rates these reproduced text passages B rather than pretending the chapter is an independent physical tablet witness.

### eBL *Ludlul* — PASS WITH METADATA AND LOCATOR REPAIRS

Directly checked:

- I 43–53: withdrawal of divine/protective relations, expulsion from the house, unresolved divination, hostile street signs;
- I 79–95: family, city, brother, friend, household-dependent, and reputation estrangement;
- II 49–58: assembled calamities;
- II 59–107: extensive embodied crisis;
- II 108–120: failed experts, tomb preparations, kin/enemy reactions;
- III 1–8: altered alertness/reason and waking/sleep;
- III 9–48: three dream sequences, water, spell, rubbing, attendants, care people, favorable sign;
- III 49–106: bodily recovery; and
- III 107–120: mostly fragmentary, not adequate for the packet's broad social-restoration wording.

### Hurowitz — PASS WITH LOCATOR REPAIR

The full review supports:

- hymn-of-praise framing;
- autobiographical-confessional features without simple autobiography;
- didactic address to a human audience;
- a cautious wisdom-literature classification;
- the possibility that a named protagonist increases credibility without proving authorship; and
- strong limits on a Job comparison.

The packet's claim should continue to say “Hurowitz argues”; it should not present one review essay as a settled genre consensus.

### Kinnier Wilson and Reynolds 1990 — PASS FOR HISTORIOGRAPHY, NOT PRIORITY

Pages 185–186 verify the two witnesses, their different provenance statuses, the tablet-number uncertainty, and the authors' “oldest written account” assertion. The article itself states that the surviving documents are copies and bases the older date on a proposed Sakikkû compilation. It also embeds modern “epilepsy” and demon/possession categories in its interpretation.

The packet correctly rates the witness discussion higher than the retrospective labels and priority claim.

### Robson — PASS

- pp. 3–5 support caution about modern category labels, including physician/exorcist, and limits on recovering individual motivations.
- pp. 7–8 support exclusive court scholarship and later private consultation.
- p. 86 explicitly warns that conclusions are compromised by uneven preservation.
- chapter 4 supports mobile court/household scholarly networks.

The archive-position and non-prevalence claims are appropriately bounded.

## “First psychiatry” chain audit

### Oldest epilepsy account — PASS AS REJECTED PRIORITY CLAIM

The 1990 paper directly makes the claim, but it rests on modern disease boundaries, a proposed composition history, survival/discovery contingencies, and a historical edition. The packet correctly permits only attributed historiography.

### Oldest psychosis of epilepsy — PASS AS HOLD

Only the title/abstract was opened. The packet does not use the abstract to establish the ancient diagnosis. It correctly records the article in the same author lineage and holds the proposition.

### First clinical foundations of neurology/psychiatry — PASS AS REJECT

The 2013 full text openly shows the lineage: the authors cite their own earlier epilepsy, stroke, psychosis, OCD, and behavior papers and end with the proposition that clinical description began with Babylonians. The 2014 abstract repeats that framing. These are not independent discoveries.

The packet correctly contrasts that lineage with Al-Rashid, Steinert, and Couto-Ferreira's philological and classificatory cautions.

## Cache and rights audit

All seven cache hashes match the ledger exactly:

| File | SHA-256 result | Rights finding |
|---|---|---|
| `al-rashid-2014-vol1.pdf` | Match | ORA download; no reuse license verified; local research only is appropriate |
| `al-rashid-2014-vol2.pdf` | Match | Same as volume 1 |
| `couto-ferreira-2020-disturbing-disorders.pdf` | Match | Crossref: CC BY-NC-ND 4.0 |
| `hurowitz-2011-ludlul-review.html` | Match | JHS landing links CC BY 2.5; cached file is XHTML despite `.html` suffix |
| `robson-2019-ancient-knowledge-networks.pdf` | Match | Title page: CC BY-NC-ND 4.0; third-party image credits remain separate |
| `steinert-2020-disease-concepts.pdf` | Match | Crossref: CC BY-NC-ND 4.0 |
| `wilson-reynolds-1990-epilepsy.pdf` | Match | PMC access does not erase CUP/British Museum rights; local research-only handling is appropriate |

`git check-ignore -v` confirms that every file resolves through the packet source-cache ignore rule. No restricted full text was found in the cache.

eBL's text editions are licensed CC BY-NC-SA 4.0, but tablet images have separate institutional permissions and cannot be reproduced under the text license. The packet correctly cached neither corpus data nor images.

## Claims safe for outline use after repairs

After R02-REV-001 through R02-REV-005 are applied, the following clusters are suitable for outline mapping:

- corpus and manuscript-survival cautions;
- diagnostic/prognostic entry form as learned classification;
- `asû`/`āšipu` role cautions;
- translation laboratories for `ašuštu`, `ḫīp libbi`, `libbu`, and `ṭēmu`;
- BAM 234 as a case in translation and modern diagnostic overreach;
- textual repertoires combining material and spoken/ritual actions;
- *Ludlul* social abandonment, embodied crisis, care people, dream actions, and bodily recovery with exact lines;
- archive inequality and missing patient/outcome/prevalence evidence; and
- the dependent “first psychiatry” historiography.

## Claims still held or rejected

- *Ludlul* III 107–120 as a broad social-restoration passage: **HOLD pending repair**.
- Ancient Mesopotamian treatment efficacy, outcome rates, consent, or satisfaction: **HOLD/UNKNOWN**.
- BAM 234 as “agitated depression,” “panic disorder,” or a Hammurabi-era patient record: **REJECT**.
- Sakikkû as the neutral “oldest epilepsy account”: **REJECT as fact; attributed historiography only**.
- “Oldest psychosis of epilepsy”: **HOLD**.
- Babylonians as founders of neurology/psychiatry: **REJECT**.
- A direct Mesopotamia-to-Greek/Islamic/modern psychiatric continuity: **HOLD**.
- Representative claims about women, children, non-elite people, disabled people, enslaved/dependent people, family caregivers, or average patients: **HOLD/UNKNOWN**.
- Archaeological proof of routine material remedies: **HOLD; current packet is textual**.

## Final gate

**PASS WITH GAPS.** The packet's conceptual and ethical architecture is reliable enough for outline planning. Do not mark it source-verified and do not extract CLM-002015 as written until the five mandatory repairs are made. Public drafting additionally requires the ledger normalization, current-edition upgrades, material-evidence boundary, and later *Ludlul* genre review identified above.

## Closure replay — 2026-08-18

**Replay scope:** the current five R02 packet outputs, the seven cached files, the live eBL chapter records, current CDLI P285320 artifact/inscription records, the Hurowitz full XHTML and journal landing page, the Steinert full chapter, and Crossref rights records. The R02 packet was not edited during this replay. This section supersedes the pre-repair gate immediately above.

### Correction to this reviewer's earlier CDLI assertion

R02-REV-005 above incorrectly identified CDLI inscription revision `2311569` as current and dated it 2026-03-14. That was my review error, not a packet error. The live P285320 JSON exposes inscription `2323449` with `is_latest: true`; CDLI's artifact history records J. Cale Johnson's revision `2323449` as approved on 2019-02-04. Revision `2311569` is an older approved revision dated 2018-05-23. The repaired packet records this correctly. “Current on 2026-08-18” is the access-state statement, not the revision's creation date.

### Mandatory-repair disposition

| Review item | Closure result | Verification and remaining boundary |
|---|---|---|
| R02-REV-001 — eBL editor/translator/version metadata | **CLOSED — PASS** | Live chapter records I–V confirm Aino Hätinen as editor, Benjamin R. Foster as English translator, Földi/Heinrich/Jiménez/Mitto as the chapter-specific revisers stated in the ledger, publication timestamp 2022-08-30, and a blank exposed version string. The official eBL About content describes Library editions as preliminary/constantly updated and licenses edition text CC BY-NC-SA 4.0; image rights remain separate. |
| R02-REV-002 — narrowed *Ludlul* III locator/claim | **CLOSED — PASS** | Current eBL III 46 names “the people taking care of me”; III 49–106 carries bodily recovery; III 107 is fragmentary; III 108–117 and 119–120 cannot support broad social restoration; III 118 concerns overgrown nails. SRC-002001, EVD-002014, CLM-002015, LEA-002002, and the executive finding now preserve that boundary. |
| R02-REV-003 — Hurowitz locators | **CLOSED — PASS** | The packet uses reproducible paragraph incipits from the cached unpaginated XHTML and records the journal-volume/publication-date nuance: volume 11 (2011), landing-page publication 2012-02-20. It retains “Hurowitz argues” rather than current consensus. |
| R02-REV-004 — Steinert conclusion locator | **CLOSED — PASS** | Full chapter recheck confirms the Conclusion on printed pp. 176–177 and the somatic/mental caution at p. 185 n. 96. The ledger and claims no longer use bibliography pp. 188–190 as the conclusion. |
| R02-REV-005 — BAM 234/CDLI object control | **CLOSED — PASS WITH CORRECTED REVIEW RECORD** | SRC-002012 and downstream records correctly give P285320, Assur/Qalat Sherqat, `Ass 13955go`, clay tablet, blank period/language/collection fields, unknown museum number, and current transliteration `2323449`. CDLI does not establish date, translation, diagnosis, encounter, outcome, or custody. |
| R02-REV-006 — minimum source fields | **CLOSED — PASS FOR PACKET USE** | SRC-002000–SRC-002012 each have a protocol-normalized supplement containing verification, type/role, holder, date/version, language/translator, identifiers/URLs, locators, fit, limits, independence, rights, cache/hash, and upstream fields. The supplement's explicit `opened_on/by` inheritance rule applies 2026-08-18 / packet researcher to every record; a future structured export should materialize inherited values per row. |
| R02-REV-007 — Routledge licenses | **CLOSED — PASS** | Live Crossref records for DOIs `10.4324/9780203703045-9` and `10.4324/9780203703045-15` both expose CC BY-NC-ND 4.0, rights start 2020-07-21, version of record. The packet records the noncommercial/no-derivatives limits. |
| R02-REV-008 — textual versus archaeological care | **CLOSED — PASS** | Findings, CLM-002004/012/013, the source-level corpus limits, and GAP-002012 consistently say texts “prescribe/represent” actions and do not infer frequency, delivery, acceptance, efficacy, or material practice. |
| R02-REV-009 — secondary technical-text translations | **GUARDRAIL CLOSED; SOURCE UPGRADE OPEN** | The packet keeps BAM 202/316/323, KAR 32, Suālu IV, CT 4 8a, and LKA 154/157 as attributed outline mappings through secondary reproductions and explicitly bars L1 public quotation. GAP-002014 remains correctly open for the critical editions, witnesses, translators, and variants. |
| R02-REV-010 — post-2014/five-chapter *Ludlul* treatment | **GUARDRAIL CLOSED; SOURCE UPGRADE OPEN** | Hurowitz is bounded to his four-tablet/2010-edition argument; eBL's introduction identifies Oshima's five-chapter structure; CLM-002016 and GAP-002013 prohibit a current genre/biographical consensus claim. Oshima 2014 or a later specialist treatment still must be opened before public synthesis. |

### Relationship and cache replay

- **Independence: PASS.** The packet preserves the Reynolds/Kinnier Wilson publication lineage, the dependent BAM 234 edition chain, the shared *Ludlul* witness/edition tradition, the edited-volume overlap, and CDLI's object-only independence.
- **Human-readable trace: PASS WITH ONE OMISSION.** All 20 evidence records appear in the evidence-to-claim trace. Twenty-four of 25 claims appear there; CLM-002023 cites sources directly but has no EVD entry in the trace.
- **Stable relationship schema: OPEN.** The packet has no `REL-002xxx` records and uses ranges such as `EVD-002012–EVD-002013` rather than one stable typed link per evidence/claim relationship. This does not invalidate manual internal outline mapping, but it blocks source-verified status, automated relationship validation, and public extraction under the evidence model.
- **Cache: PASS.** All seven cached-file SHA-256 values exactly match the ledger, all seven files remain ignored, and no newly cached restricted source was found.

### Final internal-outline gate

**PASS WITH GAPS — CONDITIONAL INTERNAL OUTLINE USE ONLY.** The original five substantive mandatory repairs are closed, and the remaining five requirements are either closed guardrails or explicitly preserved source upgrades. CLM-002015 may now enter the internal outline only in its narrowed wording. CLM-002016 remains an attributed Hurowitz position, not current consensus. Textual remedy claims must retain “prescribes/represents.” The rejected “first psychiatry” lineage remains rejected as neutral history.

Do **not** mark R02 source-verified, public-ready, or relationship-complete. Before public drafting or automated extraction, the coordinator still needs:

1. stable typed `REL-002xxx` records for every retained evidence-to-claim link and an evidence relationship for CLM-002023;
2. Oshima 2014 or later five-chapter *Ludlul* genre/biography review;
3. the direct critical editions listed in GAP-002014 and the upstream BAM 234 study/plate chain;
4. current eBL access-date/version recheck for every quotation;
5. a secure BAM 234 date, museum/custody identity, and critical translation comparison if those facts enter prose;
6. archaeological/material evidence before claims about routine performed care;
7. earlier-period, household/patient, outcome/consent, marginalized-voice, and cross-regional transmission upgrades already listed in the gaps file; and
8. continued quarantine of abstract-only priority/diagnosis claims and all neutral “first psychiatry” wording.

**Closure verdict:** **PASS WITH GAPS for internal outline planning; NOT SOURCE-VERIFIED; NOT PUBLICATION-READY.**

## Structural normalization closure — August 18, 2026

This section supersedes only the relationship-schema and CLM-002023 omissions recorded in the
closure replay above. The remaining source, regional, material, genre, date/custody, and public
drafting gaps remain open.

- **Stable relationship schema: CLOSED — PASS.** `REL-002000`–`REL-002042` now provide one
  stable typed row for every retained evidence-to-claim link used by the normalized map. The
  register uses only the evidence-model verbs `supports`, `qualifies`, `contextualizes`,
  `illustrates`, `originates`, and `repeats`.
- **CLM-002023 omission: CLOSED AS HOLD/HANDOFF.** `EVD-002020` documents SRC-002006 as the
  origin of the categorical brain/psychological-function assertion; `EVD-002021` documents
  SRC-002010's same-lineage repetition. The packet does not decide the ancient historical
  proposition. GAP-002010 still requires the dedicated anatomy, trauma, stroke/facial-palsy,
  and lexical review.
- **Dependent priority chains: PASS.** EVD-002019 → CLM-002022 and EVD-002021 → CLM-002023
  are typed `repeats`, so neither later same-author statement can count as independent
  corroboration. Genre, method, translation, archive, and scope constraints use `qualifies`,
  `contextualizes`, or `illustrates` rather than substantive-support inflation.
- **Mechanical validation: PASS.** The packet contains 13 unique source records, 22 unique
  evidence records, 25 unique retained claims, and 43 unique relationships. All IDs are within
  `002000`–`002999`; every relationship endpoint and evidence source reference resolves; every
  claim has at least one relationship; no evidence record is orphaned. Relationship counts are
  19 `supports`, 6 `qualifies`, 2 `contextualizes`, 9 `illustrates`, 5 `originates`, and 2
  `repeats`.

**Revised relationship verdict: COMPLETE FOR THE CURRENT INTERNAL PACKET. Overall verdict remains
PASS WITH GAPS for conditional internal outline planning; NOT SOURCE-VERIFIED; NOT
PUBLICATION-READY.**

## Independent reviewer-signed structural gate — August 18, 2026

**Review scope:** bounded replay of EVD-002020–EVD-002021, the rewritten CLM-002023,
REL-002000–REL-002042, and the immediately preceding structural-normalization closure.
The preceding closure was supplied by the packet author after the earlier cross-review. It is
therefore treated as a repair submission, not as its own acceptance. This reviewer-owned gate
supersedes that section for acceptance status; it does not supersede the substantive gaps and
publication restrictions recorded above.

### Source and claim replay

- **EVD-002020: PASS.** Direct replay of the complete PMC article confirms that SRC-002006
  makes the categorical brain/psychological-function assertion in the Introduction and repeats
  it in the final Discussion paragraph. The record's named-section and printed-page locators are
  adequate for this bounded authors-said claim. Its split fit is correct: A for documenting the
  authors' wording and D for using that article to establish the ancient historical proposition.
- **EVD-002021: PASS.** Direct replay of the PubMed record for PMID 25037816 confirms that
  SRC-002010's abstract repeats both the no-knowledge assertion and the “first clinical
  foundations” framing. The abstract-only boundary, L5-D source status, and IG-002000
  dependence remain explicit.
- **CLM-002023: PASS AS HOLD/HANDOFF.** Its verbs are attribution verbs—SRC-002006
  “originates” and SRC-002010 “repeats”—not factual endorsement of the proposition. The claim
  identifies the counter-corpora this packet did not test, sets historical knowledge to unknown,
  prohibits both the categorical negative and an unsupported positive-localization claim, and
  routes the question to GAP-002010. No ancient fact has been invented or authorized.

### Relationship replay

- **Identity and endpoints: PASS.** The register has 43 unique consecutive records,
  REL-002000–REL-002042. Every `from` value resolves to one of 22 EVD records; every `to`
  value resolves to one of 25 CLM records; all 25 claims have at least one relationship; and all
  22 evidence records are used. All controlled IDs remain inside `002000`–`002999`.
- **Allowed verbs: PASS.** The replay found 19 `supports`, 6 `qualifies`, 2
  `contextualizes`, 9 `illustrates`, 5 `originates`, and 2 `repeats`, with no verb outside the
  evidence model. Each relationship note preserves the stated evidentiary boundary. The two
  qualification rows that extend beyond a claim table's central Evidence cell—REL-002029 and
  REL-002035—are legitimate constraints on biography and priority, not added substantive proof.
- **Independence and propagation: PASS.** `Repeats` appears only on REL-002040 and
  REL-002042, both same-lineage IG-002000 propagation records. Neither is counted as
  corroboration. `Originates` marks the bounded source of an attributed disclaimer, argument,
  category, or priority assertion; it does not certify the underlying ancient proposition.
- **Reference normalization: PASS.** Every EVD record names at least one resolving SRC record;
  every EVD and SRC identifier used in the claim table resolves; every claim-table EVD reference
  has a corresponding relationship. No evidence record or claim is structurally orphaned.

### Final structural gate

**REVIEWER VERDICT: PASS — STRUCTURALLY COMPLETE FOR THE CURRENT INTERNAL PACKET.** The new
brain-function records, CLM-002023 hold rewrite, and typed relationship register may be used for
internal outline planning under their recorded decisions and qualifications.

This is **not** a source-verification, publication, public-prose, or historical-truth gate.
Overall R02 remains **PASS WITH GAPS for conditional internal outline planning; NOT
SOURCE-VERIFIED; NOT PUBLICATION-READY.** The open Oshima/five-chapter, critical-edition,
BAM 234 date/custody/translation, material-practice, archive/lived-voice, regional-comparison,
and public-quotation upgrades listed above remain mandatory. CLM-002023 remains HOLD/HANDOFF
until the dedicated brain/body counter-corpus review is completed.

**Signed:** Independent R02 cross-review agent `/root/research_africa_americas_oceania`
**Date:** August 18, 2026
