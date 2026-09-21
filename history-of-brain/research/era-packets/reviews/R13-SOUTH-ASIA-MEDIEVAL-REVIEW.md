# R13-SOUTH-ASIA-MEDIEVAL — independent evidence review

**Packet reviewed:** `R13-SOUTH-ASIA-MEDIEVAL`

**Review date:** August 18, 2026

**Reviewer role:** independent second reader

**Review scope:** research controls only; this is not public prose

**Verdict:** **RETURN**

## Decision

Return the packet for bounded repair before internal-outline assembly. Its conceptual controls
are strong: it keeps three named settings separate; does not write “the South Asian view”;
distinguishes learned taxonomy, endowed provision, and devotional lyric; treats the
Tirumukkūḍal inscription as a sponsor/administrative record rather than an implementation
audit; quarantines “psychiatric hospital” and all priority/continuity honorifics; and gives
caste/status, gender, labor, access, disability, consent, outcome, and patient-voice absences
real analytical weight.

The packet cannot pass yet because several pivotal locators and metadata assertions fail replay,
the exact calendrical date is stated more strongly than the opened epigraphic source permits,
and the source/claim/disagreement/cache structures do not meet the governing machine-checkable
schema. In particular:

1. `EVD-019100` places *Mādhavanidāna* 20.1 on printed p. 60, but the verse begins on printed
   p. 59; the associated scan-image indices also need normalization.
2. `EVD-019108` assigns Wujastyk's patient-experience conclusion to pp. 35–36, but it is on
   printed p. 28 (PDF page 30); pp. 35–36 are bibliography.
3. `EVD-019111` omits printed p. 26, where Nasti actually states that the ninth-century view is
   now widely held.
4. `SRC-019001` has the wrong publication date and imprecise creator roles: the consulted Brill
   chapter is 2019, with translation and annotation by Bruce Inksetter and Emilie Savage-Smith,
   not a “2020–2025 digital edition.”
5. the opened Ayyar edition establishes the sixth regnal year and a late-eleventh-century
   setting, but does not itself convert this record to a bare 1069; the packet repeats 1069 as
   settled throughout without a dedicated chronology source or disagreement record;
6. the current EAP record says “18th century,” not “1700–1799,” and does not label its bare
   extent value of 199 as folios;
7. the selected poem-4 evidence supports Pope's “demon” wording, but `CLM-019210` also relies on
   “madman” and “maniac,” wording found in the preceding hymn rather than the bounded poem-4
   loci; and
8. sources and claims are split across continuation tables/blocks, disagreement records omit
   required fields, and cache rows omit required per-file source/access/transformation fields.

These are mandatory repairs to the existing bounded corpus, not a request for new public prose
or an expanded survey of medieval South Asia.

## Materials and method

The reviewer read `BRIEF.md`, all five packet outputs, `BATCH-04-INDEX.md`,
`EVIDENCE-MODEL.md`, and `SOURCE-RATING-AND-CAPTURE-PROTOCOL.md`. The replay prioritized
*Mādhavanidāna* chapter 20; the Ayyar edition and translation of the Tirumukkūḍal inscription;
Wujastyk's institutional and archive analysis; the full Somasundaram inference chain; Pope's
poem-4 text and translation; Nasti's chronology/authorship and affect argument; the current EAP
catalog; the Arabic-reception annotation; all `019` identifiers and typed relationships; and
the four cached files.

Agent Reach diagnostics reported Jina Reader available and Exa unavailable because its
configured route was absent. Jina full-page reading, direct repository/source access, local
full-file replay, and the approved primary/scholarly web-search fallback were therefore used.
Search snippets and abstracts were leads only. The attempted Agent Reach `search` subcommand
was not available in the installed CLI; it supplied no evidence. No packet or cache file was
modified.

## Risk-based source replay

| Risk area | Full source / locator replayed | Result | Review finding |
|---|---|---:|---|
| *Mādhavanidāna* 20.1 | 1943 printed Sanskrit witness, chapter opening | **RETURN LOCATOR** | Verse 20.1 begins at the bottom of printed p. 59, not p. 60. Printed p. 60 carries the continuation/commentary and 20.2–5. The claim about the displayed words is supportable as a claim about this printed witness, but no public translation or modern-diagnosis equivalence follows. |
| *Mādhavanidāna* 20.2–5 | Same witness, printed p. 60 | **PASS WITH IMAGE-INDEX REPAIR** | The terms recorded in `EVD-019101` occur in the cited verse sequence. The packet assigns 20.1 and 20.2–5 to the same “DJVU image 69,” which did not match the page sequence on replay. Preserve the stable printed page/verse locator and verify or remove repository-specific image indices. |
| *Mādhavanidāna* 20.15–34 | Same witness, printed pp. 62–64 | **PASS WITH IMAGE-INDEX REPAIR** | The selected later sequence and chapter colophon are present. The packet appropriately treats this as textual taxonomy, not patient testimony, prevalence, supernatural fact, or implementation evidence. Normalize image numbering against the exact cached file. |
| Composition date / Arabic reception | Inksetter and Savage-Smith, “Physicians of India,” ch. 12, §12.1 n. 9 | **PASS AS ATTRIBUTED L2; RETURN METADATA** | The note identifies Arabic *K. al-Nidān* with the Sanskrit work, says it was composed “about 700,” reports quotation by al-Ṭabarī, probable translation under Hārūn al-Rashīd, and a small al-Rāzī fragment. NCBI's citation metadata identifies Brill 2019, DOI `10.1163/9789004410312_052`, and chapter translation/annotation by Bruce Inksetter and Emilie Savage-Smith. The claim is a modern editorial reconstruction whose Ullmann/Sezgin/Wujastyk/Kahl chain remains only partly reopened. It does not establish place of composition, a named translator, a complete Arabic witness, or continuous clinical use. |
| Tirumukkūḍal physical/language setting | Ayyar, pp. 220–221 | **PASS** | The edition reports an east-wall inscription, copied in 1915–16, consisting of 55 lines in two sections, in Tamil language/alphabet with some Grantha letters, with damaged/obstructed places. These are editor/copy-state claims, not a current conservation survey. |
| Tirumukkūḍal date | Ayyar, pp. 221 and 226; regnal framing | **RETURN** | The text is assigned to Vīrarājendra's sixth regnal year and the editor calls the characters late eleventh century. The opened article does not give this inscription a direct calendrical date of 1069. Its chronology discussion uses an accession calculation, and modern secondary sources do not state the conversion uniformly. Until a source devoted to the record's calendrical conversion is opened and linked, use “sixth regnal year of Vīrarājendra” and “late eleventh century,” or create a dated chronology disagreement with the evidence for 1069 and alternatives. |
| Institutional beneficiaries | Ayyar, p. 223; translated ll. 42–45, pp. 249–250 | **PASS** | The edition connects provision to hospital patients and the attached institutional community, including servants, teachers, and students. It does not establish surrounding-public admission, universal access, free care, actual receipt, or outcomes. |
| Beds, workers, rations, stocks | Ayyar, pp. 223–225; translated ll. 43–48, pp. 249–250 | **PASS AS NORMATIVE ALLOCATION** | Fifteen inpatient rations, a named prescribing physician, one surgical role, two herb/fuel/preparation workers, two attendants administering medicine, a barber, water, lamp, and stocks are present in the editor's translation. “Nurse” and role/gender wording remain translation-sensitive. The packet correctly avoids turning the endowment into an operational audit. |
| Sponsor view | Wujastyk 2022, pp. 21–22 | **PASS** | Wujastyk explicitly contrasts the physician's view in the Caraka material with the financial sponsor's view at Tirumukkūḍal and repeats Ayyar's institutional details. This is analysis of the same inscriptional chain, not independent medieval corroboration. |
| Patient-experience limit | Wujastyk 2022, printed p. 28, PDF p. 30 | **RETURN LOCATOR** | The conclusion says the surveyed evidence may never yield rich patient-experience detail and that the inscriptions instead illuminate patronage/funding. `EVD-019108`, the ledger verification row, findings, and handoff incorrectly cite pp. 35–36; those pages are bibliography. |
| Psychiatric-hospital inference | Somasundaram et al. 2014, full PMC article, paragraphs after medicine list and conclusion | **PASS AS QUARANTINED RECEPTION** | The authors explicitly say the epigraph gives no indications, import indications from other Ayurvedic texts, then say it “could be surmised” that mentally ill people were treated. The packet correctly retains this as a modern inference and bars “psychiatric hospital,” “mental ward,” and documented mental-treatment wording. The relationship must also disclose that this is not independent medieval evidence and partly repeats Ayyar's epigraphic chain. |
| Pope poem 4 | Pope 1900, Hymn IV, printed pp. 32–34, especially lines 36–40 and 59–73 | **PASS WITH CLAIM-SCOPE REPAIR** | The bounded locus presents embodied devotional language and a speaker mocked/called a “demon.” The packet responsibly treats this as lyric persona and colonial translation, not biography, prevalence, or diagnosis. “Madman” and “maniac” appear in Hymn III on printed p. 28, outside the selected poem-4 locus. Narrow `CLM-019210`, `DIS-019402`, and related handoff language to the actually selected wording, or explicitly expand the evidence record and scope; narrowing is preferred. |
| Tamil electronic witness | GRETIL / Project Madurai, poem 4 displayed lines 36–40 and 60–73 | **PASS AS DEPENDENT L3** | The displayed romanized Tamil supports a translation-layer audit. It has no critical apparatus, is not independent of the received poem chain, and is reference-only. It cannot decide semantic equivalence or diagnosis. |
| Nasti chronology/authorship | Nasti 2022, printed pp. 7 and 23–26 | **RETURN LOCATOR; PASS SUBSTANCE** | Page 7 supports the “constellation” before the eleventh century; pp. 23–25 present authorship and first-to-fourteenth-century dating debates; printed p. 26—not pp. 22–25—says the ninth-century view is now widely held. Add p. 26 and retain the attribution to one scholar's synthesis rather than a measured field survey. |
| Nasti affect argument | Nasti 2022, printed p. 44 | **PASS** | The source argues that extended suffering and the timing of exuberance complicate an all-ecstasy reading and contribute to a tragic affective focus. The packet correctly attributes the interpretation and does not convert devotional genre into therapy or diagnosis. |
| EAP witness/custody | Current EAP `EAP1217/1/480` page | **RETURN METADATA; PASS CUSTODY** | The page currently says creation date “18th century,” Tamil, manuscript, extent 402, digitisation date 2021, and original custody at the Palmleaf Manuscript Department of Tamil University, Thanjavur. The descriptive text also gives an unlabeled extent value of 199. Replace “1700–1799” with the catalog's own wording and do not turn 199 into “folios” unless a field definition is documented. Preserve Tamil University as original holder and EAP as digitization/catalog access. |

## Mandatory repairs

### 1. Rebuild canonical source and claim records as atomic entries

`BATCH-04-INDEX.md` requires one schema-complete per-record canonical entry for every source,
evidence record, and claim. `SOURCE-LEDGER.md` currently defines each `SRC` across four
continuation tables plus dependency prose, and `CLAIM-MAP.md` splits each `CLM` between a
narrative block and a later authorship/withdrawal table. Rebuild every `SRC-019000–019008` and
`CLM-019200–019215` so one row/block contains every required field exactly once. Preserve the
existing IDs. Do not use “field continuation” as a substitute for an atomic record. Evidence
records are already per-record blocks, but validate every required field after the source and
claim rebuild.

### 2. Correct the *Mādhavanidāna* locators everywhere

- Change `EVD-019100` to printed p. 59, verse 20.1, with p. 60 only when explicitly referring
  to commentary/continuation.
- Keep `EVD-019101` at printed p. 60 for 20.2–5.
- Keep `EVD-019102` at printed pp. 62–64 for 20.15–34 and the colophon.
- Verify the page/image numbering directly against the cached 330-page DjVu. If the repository
  image number cannot be made stable, remove it and retain printed page plus verse number.
- Repair all downstream references in `FINDINGS.md`, `GAPS-AND-HANDOFF.md`, source verification
  notes, and replay instructions.

### 3. Normalize the Arabic-reception source metadata and burden

For `SRC-019001`, record the consulted chapter as Brill 2019, DOI
`10.1163/9789004410312_052`, with Bruce Inksetter and Emilie Savage-Smith as translators and
annotators. Keep Ibn Abī Uṣaybiʿah's thirteenth-century compiler role separate from the modern
chapter creators/editors. Replace “2020–2025 digital edition” with accountable publication and
consulted-version metadata. `EVD-019103` and `CLM-019204` must remain attributed to the modern
editorial note; record Ullmann, Sezgin, Wujastyk, and Kahl as partly unopened upstream chains.
No direct Arabic manuscript, complete Arabic translation, named translator, or place of Sanskrit
composition has been established.

### 4. Repair Tirumukkūḍal chronology

Remove bare 1069 from retained claims and packet headings unless a full, accountable chronology
source for this specific inscription is opened and related. The directly verified formulation is
“the Tirumukkūḍal inscription of Vīrarājendra's sixth regnal year, late eleventh century.” If
1069 is retained as a proposed conversion, create an evidence record and disagreement record
showing source, method, alternatives, expert distribution, and approved wording. Propagate the
repair through `SRC-019002`, `EVD-019104–019106`, `CLM-019200`, `CLM-019205–019208`,
`DIS-019401`, findings, lived/archive notes, and handoff.

### 5. Correct Wujastyk's conclusion locator

Change `EVD-019108` from printed pp. 35–36 to printed p. 28 (PDF p. 30). Update the source
ledger's verification status, `FINDINGS.md`, `LIVED-EXPERIENCE-AND-ARCHIVE.md`, and the replay
list in `GAPS-AND-HANDOFF.md`. Preserve the distinction between Wujastyk's direct methodological
statement and the Ayyar-derived institutional facts.

### 6. Correct Nasti's chronology locator

Expand `EVD-019111` to printed pp. 7 and 23–26, or split it into atomic evidence records for:
early reference constellation; authorship debate; date range; and the widely held ninth-century
placement. The “widely held” sentence is on p. 26. Keep `CLM-019211` `Disputed` and attribute
the field description to Nasti; do not turn it into a quantified consensus claim.

### 7. Keep Pope evidence inside the selected poem

Narrow `CLM-019210` and `DIS-019402` to Pope's “demon” rendering and the Tamil terms actually
located in poem 4. Remove “madman” and “maniac” from the selected-poem claim, findings, and
publication gates unless a new evidence record deliberately expands the selected corpus to
Hymn III, printed p. 28. Do not use wording from one hymn to characterize another. Continue to
state that the poem is devotional lyric, the speaker is a persona, Pope is a missionary-era
translator, and no therapy, diagnosis, biography, prevalence, or outcome is established.

### 8. Correct EAP date, extent, URL, and custody metadata

Use the current EAP record as the stable consulted URL and record “18th century” exactly. Record
extent 402 and digitisation date 2021 as the catalog displays them. If the descriptive extent 199
is retained, label it only as the catalog's separate unlabeled/descriptive extent until the unit
is verified; do not call it 199 folios. Preserve `TU_TAMIL_0327_0480`, Tamil University original
custody, Tamil language/script, and the item's CC BY-NC 4.0 condition. Repair `SRC-019007`,
`EVD-019113`, `CLM-019212`, findings, lived/archive notes, and handoff.

### 9. Complete every disagreement record

Rebuild `DIS-019400–019404` with all fields required by `EVIDENCE-MODEL.md`: exact question;
bounded time, place, population, and terminology; strongest fair positions; explicit source and
evidence relationships for each position; reasons; agreement; responsibly knowable expert
distribution; rejected fringe/disproven positions; approved public wording or an explicit public
hold; review date; and reviewer. Current records omit several of those fields and use “approved
internal wording” instead of a public-wording disposition. Add a Tirumukkūḍal date dispute if
repair 4 retains an exact proposed conversion.

### 10. Make dependence explicit at the relationship level

Keep all Wujastyk repetitions of Ayyar in `DEP-019002-TIRUMUKKUDAL-INSCRIPTION`. For
`EVD-019114`, state in `REL-019312`/`REL-019332` that Somasundaram is independent evidence only
for the authors' modern 2014 argument/admission, not for medieval practice; its hospital facts
repeat Ayyar, and its mental-treatment inference imports indications from other texts. Do not
count the modern article plus Ayyar as two independent confirmations of treatment. Preserve
the same-poem dependence for Pope/GRETIL and the editorial-upstream dependence for the Arabic
chain.

### 11. Complete the cache manifest schema

For each of the four cached files, one manifest row must include: source ID; exact filename and
format; exact lawful access URL; access date; byte count; page/image count; SHA-256; rights
disposition; allowed use; and transformation note. The current rows omit source ID and access
date/URL and do not consistently state transformation. Keep the *Epigraphia Indica* scan
internal-only because the repository supplies no reuse license and the packet's Indian-term
inference is not a complete public-reuse determination.

### 12. Rerun and record schema/graph/cache validation

After repair, record counts and demonstrate that every `SRC`, `EVD`, `CLM`, `REL`, and `DIS`
ID is unique and in `019000–019999`; every relationship endpoint resolves; every retained claim
has an incoming typed relationship; every evidence record participates; predicates remain in
the controlled vocabulary; every source/evidence/claim is atomic and schema-complete; all four
cache hashes/bytes match; and all four remain ignored. Keep all current public holds.

## Claim dispositions

| Claim(s) | Disposition | Reason |
|---|---:|---|
| `CLM-019200` | **RETURN DATE/SCHEMA; PASS SCOPE** | The bounded-three-settings caution is strong, but the bare 1069 must be repaired and the claim rebuilt atomically. |
| `CLM-019201–019203` | **PASS SUBSTANCE AFTER LOCATOR REPAIR** | The historical taxonomy and no-modern-equivalence limits survive; `EVD-019100` page and scan indices do not. |
| `CLM-019204` | **PASS AS ATTRIBUTED L2 AFTER METADATA REPAIR** | “About 700” and Arabic reception are modern editorial reconstruction; place, translator, direct Arabic witness, and continuous practice remain unestablished. |
| `CLM-019205–019206` | **PASS NORMATIVE CONTENT; RETURN DATE/SCHEMA** | Ayyar supports the recorded allocations and beneficiary boundary, not implementation, universal access, or outcomes. Exact 1069 is not directly established by the opened source. |
| `CLM-019207` | **PASS AS HOLD** | The negative psychiatric-treatment disposition is correct. Make the modern article's dependency and cross-textual inference explicit. |
| `CLM-019208` | **PASS AFTER WUJASTYK LOCATOR REPAIR** | Sponsor/archive and absent patient-experience claims are appropriately bounded; p. 28 is the correct conclusion locator. |
| `CLM-019209` | **PASS** | The poem/speaker formulation, lyric genre, and no-diagnosis limit are appropriate. |
| `CLM-019210` | **RETURN / NARROW** | “Demon” is in the selected poem-4 locus; “madman/maniac” are drawn from another hymn and lack an incoming scoped evidence record. |
| `CLM-019211` | **PASS SUBSTANCE AFTER LOCATOR REPAIR** | Nasti supports the debate and qualified ninth-century center, with p. 26 required for the “widely held” statement. |
| `CLM-019212` | **RETURN METADATA; PASS TRANSMISSION LIMIT** | Current custody/later-witness logic is sound; date must be “18th century” and 199 must not be called folios without verification. |
| `CLM-019213` | **PASS** | Nasti's literary-affect argument is attributed and not mislabeled as therapy or diagnosis. |
| `CLM-019214` | **PASS** | The bounded archive-silence claim accurately preserves caste/status, gender, disability, access, consent, coercion, household, and outcome gaps. |
| `CLM-019215` | **PASS AS QUARANTINED NEGATIVE AUDIT** | No priority or continuity claim has met its burden; keep every positive honorific prohibited. |

## Relationship and identifier audit

The packet defines 9 sources (`SRC-019000–019008`), 15 evidence records
(`EVD-019100–019114`), 16 claims (`CLM-019200–019215`), 34 relationships
(`REL-019300–019333`), and 5 disagreements (`DIS-019400–019404`). All 34 relationship IDs are
unique and in range. Every evidence record participates in at least one relationship, every
claim has at least one incoming relationship, and all relationship verbs are controlled:
10 `supports`, 8 `qualifies`, 7 `contextualizes`, 5 `originates`, 3 `illustrates`, and 1
`repeats`. No unresolved relationship endpoint was found in the canonical relationship table.

That semantic graph passes, subject to repair 10's dependence wording. The packet still fails
the structural graph gate because a parser cannot recover a schema-complete source or claim from
one canonical row/block, and the disagreement records are incomplete. Counts alone do not cure
that structural defect.

## Lived experience, social position, and archive

**PASS.** The lived/archive file is one of the packet's strongest components. It does not turn
prescriptive Sanskrit categories into patient experience; it recognizes the inscription's
sponsor/administrative viewpoint and differentiated work/material allocations; it does not
infer nurses' gender; it distinguishes named institutional beneficiaries from outsiders whose
access is unknown; and it treats poem 4 as represented sacred lyric rather than testimony from
a diagnosed patient. It expressly marks missing caste, poverty, disability, household,
consent/refusal, coercion, cost, adverse-event, recovery, and death evidence.

Preserve these controls during repair. The packet must not infer that absent voices imply absent
experience, invent a patient vignette, describe recipients as grateful or mistreated, or use
administrative provision as proof of delivery. Consultation with Tamil epigraphy, Sanskrit/
Ayurveda, Tamil literary/translation, Tamil Śaiva/community, and local heritage authorities
remains a publication prerequisite, not a reason to extract living sacred knowledge.

## Cache and rights replay

All four cached artifacts exist, match the packet's byte counts and SHA-256 values, and are
ignored by `.gitignore` line 32:

| Source | Cached file | Bytes | SHA-256 | Rights replay |
|---|---|---:|---|---|
| `SRC-019000` | `madhavanidana-sudhalahari-1943.djvu` | 7,680,546 | `75f5c671c5241f01a8e5602f7f29da9dde284c7d395336da241951fee76c06ac` | Commons API reports 330 pages, the same byte size, and public-domain status. |
| `SRC-019002` | `epigraphia-indica-v21-1931-ia-9580.pdf` | 18,153,852 | `88812fb07f82c932456f452e27c97d5369558e22f461535d41b0f9a7729b0eb3` | 431-page Government of India scan. Repository license absent; internal-only/public redistribution hold is appropriate. |
| `SRC-019004` | `tiruvacagam-pope-1900-ia.pdf` | 28,384,013 | `1c64f50877eae7afb1a5baea1765ad1371ae47662e4f8a21fa77de57648c01a1` | 554-page scan of the 1900 edition; Commons marks the work public domain. |
| `SRC-019003` | `wujastyk-hospitals-2022.pdf` | 2,678,566 | `67252044c0ec804f3184263c6a876091d80aed0554962e3519813b89c1cdf03e` | 46-page journal PDF; front matter states CC BY-SA 4.0. |

The bytes, hashes, file counts, and ignore state pass. The manifest schema does not: its rows
need the exact source ID, access URL/date, and transformation note required by the batch and
capture protocol. No copyrighted Nasti PDF, EAP manuscript images, Brill chapter, GRETIL text,
or PMC article was added to the packet cache.

## Publication and outline gates that remain after repair

- No public translation, quotation, or modern diagnostic mapping for *Mādhavanidāna* chapter
  20 until a suitable critical edition/translation and Sanskrit/Ayurvedic review are secured.
- No precise composition place, named Arabic translator, complete Arabic witness, or unbroken
  transmission/practice claim.
- No exact Tirumukkūḍal calendrical year until its conversion is directly sourced; sixth regnal
  year/late eleventh century is the current safe formulation.
- No claim that the Tirumukkūḍal allocation was implemented exactly as endowed, open to the
  surrounding public, universal, free, equitable, psychiatric, effective, or experienced in a
  particular way.
- No “first hospital,” “first psychiatric hospital,” “first psychotherapist,” universal
  tolerance, timeless Ayurveda/yoga/mindfulness, or unbroken wellness-continuity language.
- No Pope diagnostic-sounding English in public body prose until Tamil translation and living
  tradition/community review; poem/speaker, translator, date, and genre must stay visible.
- No ninth-century-autograph implication from the eighteenth-century EAP witness, and no BL
  ownership implication for the Tamil University original.
- No current clinical comparison without separate current, authoritative evidence and a clear
  non-equivalence frame.
- No public prose or master-outline promotion until all 12 mandatory repair groups close and an
  independent reviewer replays the corrected locators, records, graph, and cache manifest.

## Closure condition

The next reviewer may change **RETURN** to **PASS WITH GAPS** only after every mandatory repair
above has an explicit disposition, the corrected exact-source locators replay, all atomic
records validate, every disagreement is schema-complete, the dependence graph remains honest,
the four cache entries remain hash-identical/ignored/rights-safe, and all publication holds are
preserved. The remaining scholarship, translation, community, and lived-voice gaps may then
remain documented handoff gates rather than packet-structure failures.

## Independent closure replay — August 18, 2026

**Closure reviewer:** independent second reader for `R13-SOUTH-ASIA-MEDIEVAL`

**Current verdict:** **PASS WITH GAPS**

**Gate:** eligible for internal reconciliation and outline assembly only. The original
**RETURN** above remains the historical pre-repair verdict and is superseded for the packet's
current state by this closure. No claim is approved for public prose.

The reviewer reopened the repaired five-file packet read-only, replayed the pivotal full
witnesses and current catalog/article pages, parsed the canonical records and graph, and
recomputed the cache checks. Agent Reach v1.5.0 was current and Jina Reader was available;
Exa remained unavailable, so direct repositories, Jina full-page reading, local full-file
inspection, and the approved primary/scholarly search fallback were used. Snippets and
abstracts were not treated as evidence. No packet or cache file was changed during closure.

### Mandatory-repair closure

| Review group | Replay | Closure |
|---|---|---:|
| 1. Atomic source and claim records | Parsed 9 one-line canonical `SRC-019000–019008` records and 16 one-line canonical `CLM-019200–019215` records. Every field required by `EVIDENCE-MODEL.md` is present exactly once in each record. Earlier claim prose is explicitly marked superseded/noncanonical. The 15 evidence records remain one complete canonical block each and contain every required semantic field group. | **PASS** |
| 2. *Mādhavanidāna* locators | The full 330-page witness shows 20.1 beginning on printed p. 59, the continuation and 20.2–5 on p. 60, 20.15 onward on p. 62, 20.23–31 on p. 63, and 20.32–34 plus the chapter colophon on p. 64. `EVD-019100–019102` use those stable printed-page/verse locators and no repository image index. | **PASS** |
| 3. Arabic-reception metadata | The NCBI/Brill chapter citation identifies “Physicians of India,” chapter 12, Brill 2019, DOI `10.1163/9789004410312_052`, translated and annotated by Bruce Inksetter and Emilie Savage-Smith. Editorial note 9 contains the attributed “about 700,” Arabic-title, al-Ṭabarī, probable Hārūn-era translation, and small al-Rāzī-fragment chain. The packet keeps Ibn Abī Uṣaybiʿah's compiler role distinct and leaves the upstream Ullmann/Sezgin/Wujastyk/Kahl and direct-witness questions open. | **PASS WITH GAP PRESERVED** |
| 4. Tirumukkūḍal date | Ayyar pp. 220–221 establish the copied material setting, inscription form/languages, sixth regnal year, and late-eleventh-century palaeographic framing. They do not directly supply a calendrical 1069 for this record. Canonical source/evidence/claim records now use “Vīrarājendra's sixth regnal year, late eleventh century”; exact 1069 appears only in explicit removal/gap notes, not as a retained proposition. | **PASS BY NARROWING** |
| 5. Wujastyk conclusion locator | Full PDF replay confirms the sponsor-view contrast on printed pp. 21–22 and the patient-experience/patronage conclusion on printed p. 28, PDF p. 30. `EVD-019108` and all operative downstream wording use p. 28/PDF p. 30, not bibliography pp. 35–36. | **PASS** |
| 6. Nasti locators and dating | The full dissertation supports the pre-eleventh-century evidence constellation on printed p. 7, authorship and first-to-fourteenth-century dating debates on pp. 23–25, the specifically attributed “widely held” ninth-century view on p. 26, and the suffering/exuberance/tragic-affect argument on p. 44. `EVD-019111–019112` preserve those locators and treat the chronology as an attributed synthesis rather than measured consensus. | **PASS** |
| 7. Pope poem boundary | The full 1900 bilingual edition places “Madman distraught” and “maniac” in Hymn III, printed p. 28. Hymn IV/poem 4, printed pp. 32–34, contains Pope's “demon” at lines 59–73. The current GRETIL/Project Madurai witness displays the poem-4 Tamil strings including `toḻutu uḷam uruki aḻutu uṭalkampittu`, `cakam pēy eṉṟu tammaic cirippa`, and `kaṟṟā maṉam eṉak kataṟiyum pataṟiyum`. Canonical `CLM-019210` uses only the bounded “demon” translation issue and explicitly excludes the Hymn III language. | **PASS BY NARROWING** |
| 8. EAP metadata and custody | Current `EAP1217/1/480` replay gives creation date “18th century,” extent 402, digitisation date 2021, original reference `TU_TAMIL_0327_0480`, and original location at the Palmleaf Manuscript Department of Tamil University, Thanjavur. The page separately embeds an unlabeled descriptive extent 199. `SRC-019007`, `EVD-019113`, and `CLM-019212` preserve those distinctions and do not call 199 folios or the BL owner of the original. | **PASS** |
| 9. Disagreement schema | Parsed `DIS-019400–019404`. Each is atomic and includes the exact question; time, place, population, and terminology; fair positions with evidence/source IDs; reasons for difference; agreement; bounded expert-distribution statement; rejected wording; explicit public wording/hold; review date; and reviewer. | **PASS** |
| 10. Dependence and reception | `REL-019312` and `REL-019332` correctly make Somasundaram et al. independent only for the authors' 2014 admission/inference. Full PMC replay confirms that the article says the epigraph supplies no indications, imports indications from other texts, and then says treatment “could be surmised.” The article therefore does not independently corroborate medieval mental-health practice. Wujastyk/Ayyar, Pope/GRETIL, and editorial-upstream dependency groups remain explicit. | **PASS** |
| 11. Cache manifest | All four manifest rows now include source ID, exact filename/format, access URL and date, bytes, page/image count, SHA-256, rights disposition, allowed use, and transformation. *Epigraphia Indica* remains internal-only because the repository gives no explicit reuse license. | **PASS** |
| 12. Schema, graph, and cache validation | The independent parser and filesystem audit passed all counts, required fields, ranges, uniqueness, endpoints, controlled predicates, evidence/claim coverage, evidence-array synchronization, hashes, bytes, file signatures/page counts, and ignore checks described below. | **PASS** |

### Independent validation record

- **Canonical records:** 9 unique sources, 15 unique evidence records, 16 unique claims,
  34 unique relationships, and 5 unique disagreements; every identifier remains in the
  `019xxx` range.
- **Schemas:** all source and claim required fields parsed without omission; all five
  disagreements contain every required semantic field; all 15 evidence blocks contain the
  complete required semantic field groups and resolve to one defined source each.
- **Graph:** all 34 relationship endpoints resolve; only `supports`, `qualifies`,
  `contradicts`, `contextualizes`, `illustrates`, `originates`, and `repeats` occur; every
  evidence record participates; every retained claim has incoming evidence; and every claim's
  `evidence_ids` array exactly matches its incoming evidence relationships.
- **Cache:** the four files remain present and ignored. Bytes and SHA-256 values match the
  manifest: `7,680,546` /
  `75f5c671c5241f01a8e5602f7f29da9dde284c7d395336da241951fee76c06ac`;
  `18,153,852` /
  `88812fb07f82c932456f452e27c97d5369558e22f461535d41b0f9a7729b0eb3`;
  `28,384,013` /
  `1c64f50877eae7afb1a5baea1765ad1371ae47662e4f8a21fa77de57648c01a1`;
  and `2,678,566` /
  `67252044c0ec804f3184263c6a876091d80aed0554962e3519813b89c1cdf03e`.
  PDF page counts remain 431, 554, and 46; the DjVu repository/file record remains 330 pages.
- **Rights:** public-domain status remains recorded for the 1943 *Mādhavanidāna* and 1900
  Pope witnesses; Wujastyk remains CC BY-SA 4.0; the Ayyar scan remains internal-only; modern
  copyrighted/restricted or reference-only full texts remain link-only rather than cache or
  publication assets.

### Remaining publication gaps and holds

This closure removes packet-structure defects only. It does not close the packet's research,
translation, community, clinical, rights, or lived-voice gaps:

- **Psychiatric-hospital and clinical claims remain held.** The inscription does not document
  a mental/behavioral condition, medicine indication, treatment encounter, mental ward,
  outcome, modern diagnosis, or “first psychiatric hospital.”
- **Language and translation remain held for public quotation.** Sanskrit/Ayurvedic review,
  a current critical Tamil edition, accountable translations, and exact semantic review remain
  required. Pope's “demon” cannot appear as transparent diagnostic language.
- **Chronology remains bounded.** No exact Tirumukkūḍal calendrical year, exact
  *Mādhavanidāna* year/place, complete Arabic transmission chain, settled Māṇikkavācakar
  biography, unitary authorship, autograph, or continuity claim is approved.
- **Community and heritage review remain active.** Tamil epigraphic/local-heritage review and
  Tamil Śaiva/literary/community consultation are prerequisites for public image, sacred-text,
  translation, ownership, and performance framing.
- **Lived experience remains absent or represented, not recovered.** No direct patient or
  household testimony, consent/refusal, coercion, access, cost, caste/status, gender,
  disability, recovery, adverse-event, or outcome record was established. The poetic speaker
  is not a diagnosed patient or settled biography.
- **Priority, universality, and public reuse remain blocked.** No “first psychotherapist,”
  timeless yoga/mindfulness, universal tolerance/access, unbroken wellness continuity, cache
  redistribution, or public prose follows from this closure.

**Reviewer-signed structural gate:** all twelve mandatory repair groups are independently
closed. `R13-SOUTH-ASIA-MEDIEVAL` may enter internal reconciliation and outline assembly as a
bounded, cited evidence packet under the surviving holds above. **Final verdict: PASS WITH
GAPS.**
