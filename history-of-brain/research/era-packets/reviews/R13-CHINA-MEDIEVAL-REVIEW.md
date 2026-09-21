# Independent cross-review — R13-CHINA-MEDIEVAL

**Review date:** 2026-08-18
**Reviewer:** independent Codex packet reviewer
**Reviewed state:** five packet outputs and six ignored cache artifacts; packet and cache remained read-only
**Verdict:** **RETURN**
**Public-content state:** **blocked; no public prose**

## Decision

The packet has a strong, carefully bounded research core. Independent replay confirms the
pivotal Sun, Xu/Puji, disputed *Shanghan jiushi lun*, Yuan Cai, Song Ci, and modern Song Ci
reception passages. The packet also does unusually good work separating prescriptions from
implementation, narrated patients from direct testimony, historical terms from modern
diagnoses, and medieval sources from twentieth-century priority stories.

It must nevertheless return before coordinator reconciliation. The blockers are repairable
record and source-layer defects, not a failure of the selected corpus:

1. one claim has two propositions and an invalid compound evidence label;
2. one relationship says an institutional catalog “repeats” a scholarly source when it
   actually repeats the priority story that the scholar analyzes;
3. the *Qianjin yifang* quotation silently converts the 1770 witness to simplified/normalized
   characters while calling it a transcription from that witness;
4. the dysentery-case English layer is attributed only to Chen although Chen explicitly says
   her translation is based on Goldschmidt;
5. several attributed scholarly positions are labeled “Strongly supported” without multiple
   independent evidentiary routes;
6. the Yuan Cai digital/witness layer and facsimile locators are not precise enough for the
   packet's L1-A wording claims; and
7. the Song Ci exact-wording relationships combine an unproofread transcription with L1-A
   language before a facsimile or critical-edition collation.

This is a bounded repair return. It is not a request to broaden the packet beyond the three
named settings.

## Materials and method

Read in full:

- `PROJECT-BRAIN.md`;
- `BATCH-04-INDEX.md`;
- `sources/EVIDENCE-MODEL.md`;
- `sources/SOURCE-RATING-AND-CAPTURE-PROTOCOL.md`;
- R13 `BRIEF.md`; and
- all five R13 packet outputs.

Risk-based replay used Agent Reach/Jina, direct institutional pages and files, and complete
opened texts. Agent Reach v1.5.0 reported Jina Reader available and Exa unavailable; the
packet's stated fallback is accurate. `agent-reach check-update` reported v1.5.0 current on
2026-08-18. Search snippets and abstracts were not accepted as evidence.

The replay included the complete or relevant full source for:

- *Beiji qianjin yaofang* juan 1 and its base-image locator;
- Steavu 2017, especially pp. 40–41 and n. 75;
- Kyoto RB00002954's complete IIIF manifest and canvases p1209–p1210;
- Fang's complete two-page dissertation notice;
- Chen 2023, especially pp. 79–82, 96–98, and notes 64–67;
- the complete received *Shanghan jiushi lun* page and base scan around the selected scene;
- the complete opened Yuan Cai juan pages and the cached 1928 scan;
- the complete opened *Xiyuan jilu* juan 1 page;
- Asen 2017, pp. 185–207; and
- Kyoto's current reuse page and the six cached artifacts.

## Risk-based source replay

| Chain / issue | Exact replay result | Disposition |
|---|---|---|
| Sun physician-ethics passage | CTP chapter 408492/base image `file=100217&page=5` displays the retained sequence beginning `凡大醫治病必當安神定志…` and the nondiscrimination list. | **PASS.** It is a received normative passage, not implementation, access, outcome, or a patient survey. Public quotation still needs the packet's named-edition/translation repair. |
| Steavu's interpretation | Steavu 2017, pp. 40–41 and n. 75, gives the same locus at 1.16b and explicitly frames it through Buddhist/Āyurvedic elements and Buddhist vocabulary. | **PASS WITH ATTRIBUTION.** The packet properly blocks “Chinese Hippocratic Oath” and sole-origin language. `CLM-020202` documents Steavu's position; one scholar is not enough for “Strongly supported” as an independent historical consensus. |
| Kyoto object, date, and rights | The IIIF manifest identifies RB00002954, right-to-left presentation, Main Library custody, the layered Sun/Lin/Wang attribution, and the 1770 Japanese print witness. Its `rights` field points to Kyoto's free-license route. Kyoto's reuse page permits reuse of Main Library image data with holder credit, a link, and disclosure of modifications. | **PASS.** Keep the work, recension/re-edit, witness, and digitization layers separate. State the reuse conditions more exactly than “attribution required” when an image is routed toward publication. |
| *Qianjin yifang* p1209–p1210 | Both consecutive canvases show “禁邪病第十五,” the behavioral/category sequence, multi-person restraint, force calibrated to the person's strength, an injury precaution, interrogation, and dispatch/substitution procedure. | **PASS** for the 1770 witness and for describing the prescription as coercive. **REPAIR** the quotation layer: the image uses traditional witness forms such as `著`, `詠`, `稱`, `癲狂`, and `狀`; the displayed packet quotation silently normalizes them to simplified forms while claiming witness transcription. Label a normalized transcription or reproduce the witness diplomatically. |
| Fang and the 1307 witness | Fang's complete notice, pp. 543–544, says her full annotated *Jinjing* translation was established from the oldest extant version then identified, dated 1307. | **PASS WITH LIMIT.** This documents Fang's reported basis, not independent inspection of the 1307 witness. `CLM-020205` must preserve “Fang reports/used,” and Tang wording/use remains unresolved. |
| Secure Xu corpus and disputed *Ninety Discussions* | Chen 2023, pp. 79–82, places *Puji benshifang* after 1143, distinguishes the seven works named in Xu's writings, notes no Xu/Southern Song notice of *Ninety Discussions*, identifies its first fragments in the 1408 *Yongle dadian*, gives the Chen Baxian/Liang Wudi anachronism and prescription/language differences, and proposes later compilation using drafts or inherited material. | **PASS WITH DISPUTE.** Chen's position is directly documented. The underlying authorship/date proposition remains disputed until the full Goldschmidt counter-reading is replayed. Do not label one side “Strongly supported” as though the packet measured a consensus. |
| Mr. Qiu case | Chen 2023, pp. 96–97 and n. 64, represents household impatience/rudeness, Xu's refusal to change course, a claimed five-day cure, and the author's caution to physicians. | **PASS.** The patient is silent; household speech is physician-mediated; the outcome is an authorial claim. |
| Dysentery/clouded-mind case | Chen 2023, pp. 97–98 and n. 65, gives the selected symptom and reasoning sequence. Note 65 identifies *Puji benshifang* 9.152–53 and says the translation is based on Goldschmidt, *Medical Practice*, pp. 287–89. | **REPAIR.** `EVD-020106` and its method/collector/translation fields currently say “Chen English” and “Chen as translator/historian.” Record Chen's explicit Goldschmidt dependency and add the unopened upstream translation to the dependence/limitation trail. Do not imply an independent Chen translation. |
| Chen's genre caution | Chen p. 98 asks whether the narrated disputes happened or were plots constructed to display erudition and says the lack of other evidence prevents a concrete answer. | **PASS.** `EVD-020107` is correctly mandatory wherever a narrated event or cure is used. |
| *Shanghan jiushi lun* received scene | The full CTP received text/base scan includes the selected woman/husband scene at base page 128. | **PASS** only as received, date-uncertain transmission. No twelfth-century event, Xu authorship, diagnosis, or outcome follows. Keep `CLM-020210` Plausible and the direct-Song hold. |
| Yuan Cai passages | The opened middle and lower juan pages contain the anger/tone passage, beating and accidental-death warning, `恐有輕生而自殘者`, hanging response, and neighbor-treatment/official-notification instruction for a servant without kin. | **PASS** for authorial prescription and represented hierarchy. The packet correctly preserves stereotypes, liability, coercion, motive uncertainty, and silence of servants. |
| Yuan Cai witness layer | The Wikisource landing identifies its own received-text/editorial layer, while the cached object is a 1928 NLC reprint. The packet has phrase locators but no scan page/folio alignment for the selected passages. | **REPAIR.** Name the exact Wikisource base/recension and record whether its punctuation/characters are editorial. Add facsimile page/folio locators from the cached witness, or downgrade exact-witness relations until collation. Do not let the 1178 work date, 1179/1190 prints, later received recension, 1928 reprint, and present transcription collapse. |
| Song Ci self-hanging category | Wikisource juan 1 displays `人力女使因被捶撻，在主家自害自縊之類…` within the difficult-investigation section. | **PASS** for what the displayed transcription represents: a procedural category, not a case dossier, prevalence evidence, motive testimony, or psychiatric diagnosis. |
| Song Ci testimony caution | The same juan instructs officials to compare accounts, avoid reliance on one or two statements, and recognizes scribal mediation for people who cannot write. | **PASS** as a procedural norm. No compliance, fairness, or implementation follows. |
| Song Ci text layer/rating | The only opened wording layer is an explicitly unproofread Wikisource transcription; no named critical edition or facsimile page was collated. | **REPAIR.** `REL-020320`, `REL-020321`, `REL-020328`, and `REL-020336` cannot use `L1/L3-A` as though the exact underlying 1247/received wording has been independently checked. Use L3-A for what the web transcription displays and B/Unknown for exact received-text wording until `GAP-020505` closes, or open and record the critical/facsimile witness now. |
| Asen reception chain | Asen 2017, pp. 185–188 and the full article, treats “father of world legal medicine” and world-first language as modern reception/origin-story making, contrasting Song's modern prominence with his more modest earlier status. | **PASS.** This is modern legal-medicine reception history, not medieval forensic psychiatry. |
| LOC comparison | The LOC record is an institutional object/catalog route, not an independent study of Song Ci reception or forensic-psychiatric priority. | **REPAIR.** `REL-020324` presently says `SRC-020010 repeats SRC-020009`; that is semantically false. The catalog may repeat/originate institutional priority language connected to a priority/reception claim, but it does not repeat Asen's critique and must not target Asen's source record. |

## Source level, claim fit, translation, and dependence

| Source / group | Review disposition |
|---|---|
| `SRC-020000`, `DEP-020000-SUN-RECEIVED` | L1 for the displayed/base-image witness and L3 for CTP's transcription is defensible. A applies to visible received wording; B to seventh-century attribution; D to implementation/diagnosis. |
| `SRC-020001–020002`, `DEP-020001-QJYF-RECEIVED` | L1-A for the 1770 object and L2-A for Fang's statement about her dissertation basis are sound, but they are one transmission-control chain for this purpose. Fang does not independently verify the unopened 1307 wording here. |
| `SRC-020003`, `DEP-020002-SUN-SCHOLARSHIP` | L2-A for the bounded, attributed Steavu reading; B for broader transmission; D for practice. This chain is independent of the received passage as interpretation, not a second copy of the passage. |
| `SRC-020004–020005`, `DEP-020003-CHEN-XU` | L2-A for Chen's attributed textual-history argument and case analysis; B/C for narrated events; D for transparent outcomes/current diagnoses. Add Goldschmidt as an upstream translation dependency for `EVD-020106`. The disputed CTP text is L1-A only for its displayed later wording, C for Song attribution/event. |
| `SRC-020006–020007`, `DEP-020004-YUAN-RECEIVED` | L1-A is supportable only after the selected phrases are aligned to the named opened witness. Ebrey's restricted translation remains a same-work chain, not independent proof. Her full relevant pages/appendices remain unopened, so no relation should imply that 1179/1190 wording has been checked. |
| `SRC-020008`, `DEP-020005-XIYUAN-RECEIVED` | L3-A for what the current unproofread transcription displays; B/Unknown for exact underlying received wording until a critical/facsimile collation; D for case prevalence, implementation, motive, or diagnosis. The current combined `L1/L3-A` relationship shorthand overstates verification. |
| `SRC-020009–020010`, `DEP-020006-SONGCI-RECEPTION` | Asen is L2-A for modern reception and D for medieval psychiatric priority. LOC is L3-A for catalog/object metadata and D for independent priority proof. They are not two independent confirmation chains. |

The dependence groups are directionally sound, and the packet does not count a scan plus its
transcription as two confirmations. Preserve that. Repair the Goldschmidt subdependency and
the LOC relationship semantics before reconciliation.

## Claim and relationship audit

All 11 source IDs, 20 evidence IDs, 22 claim IDs, 41 relationship IDs, and 14 disagreement IDs
resolve syntactically. Every retained claim has at least one incoming relationship. This does
not cure the following semantic/schema defects.

### Mandatory claim repairs

1. **Split `CLM-020217`.** It currently joins (a) Asen's documented account of a modern
   legal-medicine origin story and (b) a bounded failure to establish “first forensic
   psychiatry.” These have different source burdens and statuses. Keep one proposition under
   the old ID and allocate a new in-range claim ID for the other. Give the search-negative a
   declared corpus/query/method evidence record if retained.

2. **Use one controlled evidence label per claim.** `Strongly supported for modern reception;
   Unsupported for forensic psychiatry` is not a valid value. The controlled set is
   `Documented`, `Strongly supported`, `Plausible`, `Disputed`, and `Unknown`. “Unsupported” may
   remain explanatory prose, but the claim record must use a controlled value.

3. **Normalize attributed-position labels.** `CLM-020202` is `Documented` for “Steavu argues.”
   `CLM-020206` is `Documented` for “Chen argues,” while the underlying *Shanghan jiushi lun*
   authorship/date remains `Disputed`. “Strongly supported” requires multiple sufficiently
   independent strong sources or a demonstrated consensus, neither of which is present here.

4. **Split or narrow `CLM-020221`.** It combines several terms from different genres with two
   broad negatives: timeless mind-body holism and continuity with modern clinical categories
   and professions. The passage-specific terminology audit is documented; continuity across
   the entire interval has not been researched and is `Unknown`, not “Strongly supported.”
   Create passage- or burden-appropriate claims, or retain only the bounded statement that
   these selected occurrences do not by themselves establish either proposition.

5. **Normalize claim types.** `CLM-020200` is not an `archival_silence` claim; it is a bounded
   comparative/broad-cultural method conclusion. `CLM-020204` is principally a
   quotation/prescription-versus-event boundary, not evidence that a searched archive lacks
   the events. Use `archival_silence` only with a named corpus/search boundary.

6. **Recheck universality against the actual witness burden.** `CLM-020211`, `CLM-020213`, and
   `CLM-020214` are currently `regional` although their direct evidence is one elite author's
   prescriptions in a later received witness. Use `local` or `unknown` unless regional reach is
   separately evidenced. For Song Ci, distinguish a manual's intended jurisdictional scope
   from proved regional implementation.

### Mandatory relationship repairs

- Replace `REL-020324` with a relation whose target is the relevant reception/priority claim or
  evidence record, not `SRC-020009`. State explicitly that institutional repetition adds no
  independence or proof.
- Update the split `CLM-020217` relations so Asen supports the modern reception proposition,
  while a declared search/corpus audit only qualifies or leaves Unknown the forensic-
  psychiatry priority proposition.
- Update `REL-020310` to expose the Chen→Goldschmidt translation dependency.
- Re-rate `REL-020320`, `REL-020321`, `REL-020328`, and `REL-020336` to match the actually opened
  unproofread digital layer until a critical/facsimile source is opened.
- After the `CLM-020221` split/narrowing, ensure each term/continuity proposition has only the
  evidence and A–D fit appropriate to its own burden. D-rated mismatch evidence may qualify a
  claim; it cannot be counted as positive support.

## Lived experience, safety, diagnosis, and implementation

This part **passes** and should be preserved through repair.

- The affected person in the ritual manual is represented by the manual and operator, not
  recovered as a consenting patient or first-person witness.
- Mr. Qiu and the unnamed dysentery patient are physician-mediated narrative subjects; Chen's
  p. 98 uncertainty is attached.
- Yuan Cai's servants, women, household dependents, and people without kin are represented
  inside elite household governance that includes corporal punishment and liability concerns.
- Song Ci's deceased servant is a procedural category, not a named dossier or motive statement.
- The packet does not convert `dian/kuang`, clouded mind/raving, anger, self-injury, or hanging
  terminology into psychosis, mania, delirium, depression, suicide motive, or another modern
  diagnosis.
- Norms and procedures are never treated as implementation, prevalence, efficacy, fairness,
  access, outcome, or patient satisfaction.
- The content-note, non-actionable-treatment, living-tradition, specialist-translation, and
  community-review gates are appropriate.

Do not weaken these controls while repairing the graph. `GAP-020506–020508` and
`GAP-020510` remain genuine publication gates.

## Dispute and myth-audit review

| Dispute | Review result |
|---|---|
| Unified timeless “TCM” or medieval psychology | **PASS.** The selected settings are explicitly bounded and different. Avoid claiming global disproof from three settings. |
| Sun ethics as purely indigenous/Buddhist or a “Chinese Hippocratic Oath” | **PASS.** Exact norm plus attributed Steavu interpretation; exclusive origin and oath equivalence remain quarantined. |
| Ritual manual as Tang psychiatry or treatment event | **PASS.** The 1770 witness, 1307 report, and Tang attribution remain separate. |
| Xu authorship of *Shanghan jiushi lun* | **PASS WITH OPEN COUNTER-READING.** Chen is replayed; Goldschmidt remains mandatory. Underlying authorship is Disputed. |
| Transparent Xu cases/verified cures | **PASS.** Chen p. 98 caveat is correctly integral. |
| Yuan Cai as humane social work/wellness reformer | **PASS.** Hierarchy, stereotypes, beating, liability, mediation, and Unknown implementation remain visible. |
| Servant self-harm motive/prevalence | **PASS.** Both authors provide scenarios/inferences, not affected-person motive or frequency. |
| Song Ci as “first forensic psychiatrist/psychiatry” | **REPAIR THE RECORD.** Asen supports only the modern legal-medicine reception critique. The packet's bounded search did not locate credible psychiatry support, but the negative must have its own method/corpus record and controlled `Unknown`/quarantined status. |
| Rational medicine versus superstition | **PASS.** The packet describes overlapping source categories and rejects the binary. |
| Timeless mind-body holism/modern clinical continuity | **REPAIR THE CLAIM.** The selected passages do not establish these propositions, but a passage audit is not a completed transhistorical continuity study. Split and mark the unresearched continuity question Unknown. |

## Rights and cache replay

The ignored cache contains exactly six declared artifacts. Independent byte and SHA-256 replay
matched every ledger row:

| Cached file | Bytes | SHA-256 replay | Disposition |
|---|---:|---|---|
| `asen-2017-song-ci.pdf` | 370438 | `ec96892468f0523f899d936e124348d15746ba00b25848906543f23d776e9a39` | **PASS**; copyrighted, ignored local research cache; do not redistribute. |
| `chen-2023-good-formulas.pdf` | 12441558 | `9664c5a25752002518bbdcf51a69be1b74223ea1297ef52c74b6b33e424b4657` | **PASS**; PDF states CC BY-NC-ND 4.0 for author-created content, not separately copyrighted matter. |
| `kyoto-rb00002954-manifest.json` | 1867185 | `c20a621c2414355827b70a36fba527e57690833dc97453d4f2e238ba7dd611ef` | **PASS**; valid IIIF Presentation 3 JSON and rights route. |
| `qianjin-yifang-juan30-p1209.jpg` | 376261 | `4568557d408b11bda5257f78c906844ab44cabf77b0caafb1e01e1317aecb149` | **PASS**; Kyoto server derivative, 2000 px. |
| `qianjin-yifang-juan30-p1210.jpg` | 385233 | `00fd6f12ef19f019a7718b7113cc462d3cec74831757c8c48b40b963fe4f82f6` | **PASS**; Kyoto server derivative, 2000 px. |
| `yuan-cai-yuanshi-shifan-nlc.pdf` | 4069793 | `f0b03660ef078f7a5bf79419681ec496f014c2f770ab51876d3653987cfbc74e` | **PASS**; Commons PD-scan/PD-China route recorded. |

`git check-ignore -v` confirmed that all six files resolve through the project source-cache
ignore rule. No cached source appears in the publishable repository diff.

For publication, expand the Kyoto image-rights note to include Main Library attribution, a
link to the archive, and alteration disclosure where applicable. Keep Chen's license caveat
that separately copyrighted material is excluded.

## Scope and gate

The packet stays within the brief's required boundary:

- no general history of China or all Chinese medicine;
- no East/Southeast Asian reception history beyond the named Japanese witness/custody control;
- no invented Silk Road route;
- no modern diagnosis, therapy, psychiatry, wellness, social-work profession, or efficacy
  continuity;
- no claim that elite prescriptions describe all regions, classes, genders, or implementation;
  and
- no public prose.

### Mandatory repair checklist

1. Split `CLM-020217`; assign one controlled evidence label to each proposition; add a bounded
   search/corpus evidence record if the psychiatry-priority negative is retained.
2. Repair `REL-020324` so LOC priority language relates to the priority/reception claim and is
   explicitly non-independent, not a false source-to-source repetition of Asen.
3. Label the p1209 quotation as normalized/simplified or replace it with a diplomatic witness
   transcription; propagate the translation/transcription layer through `EVD-020102` and
   related claims.
4. Record Chen's explicit Goldschmidt translation dependency for `EVD-020106`/`REL-020310` and
   keep the upstream page-level replay gap visible.
5. Normalize `CLM-020202` and `CLM-020206` to documented attributed positions; keep the
   underlying *Shanghan jiushi lun* authorship proposition Disputed.
6. Split/narrow `CLM-020221`; separate documented passage-specific terminology from Unknown
   transhistorical continuity/modern-profession propositions.
7. Normalize `CLM-020200` and `CLM-020204` claim types; use `archival_silence` only for a named
   corpus/search boundary.
8. Recheck Yuan Cai universality values and distinguish authorial/jurisdictional reach from
   implementation.
9. Name the exact Yuan Cai digital recension/editorial layer and add scan page/folio locators
   for each retained exact-witness passage, or downgrade those relations until collated.
10. Re-rate the four Song Ci exact-wording relations to the unproofread L3 web layer, or close
    `GAP-020505` with a named critical/facsimile witness and exact locators.
11. Rerun ID/endpoint/controlled-label/claim-type/universality/dependence/cache validation and
    append a dated packet repair disposition before reviewer closure.

**Internal gate:** returned; do not merge claims into the master evidence graph until the
eleven repairs above are replayed.
**Public gate:** blocked. Existing `GAP-020500–020510` publication holds remain active even
after structural closure.
**Reviewer closure required:** yes.

## Reviewer closure replay — 2026-08-18

**Closure verdict:** **RETURN — two narrow repairs remain**
**Internal outline gate:** blocked pending correction and one final replay
**Public gate:** **HOLD; unchanged**

The repaired packet was re-read without modifying its files or cache. Full-source replay included
the two cached Kyoto canvases, Chen's complete cached book at the cited chapter and note, the cached
1928 Yuan Cai scan at PDF pp. 61 and 90–94, the complete cached Asen article, the live Song Ci
Wikisource juan through Jina, the current LOC JSON object description, and all six cache artifacts.
Ten substantive repair groups are closed or materially correct, but repair group 9 contains one
wrong facsimile locator and group 11 contains one invalid controlled workflow value. The packet's
own “all selected loci aligned” and “zero controlled-value errors” assertions therefore cannot yet
close.

### Closure matrix

| original repair group | replay result | closure disposition |
|---|---|---|
| 1 — split `CLM-020217` / controlled labels | `CLM-020217` now contains only Asen's documented reception argument. `CLM-020222` separately records the declared three-source priority audit as `Unknown`; its incoming edges qualify rather than prove a global negative. | **CLOSED** |
| 2 — `REL-020324` semantics | The edge is now `EVD-020121 illustrates CLM-020217`; its note says the LOC legal-medicine formula is a non-independent reception example, not repetition/corroboration of Asen's critique. `REL-020343` separately qualifies the Unknown psychiatry-priority question. | **CLOSED** |
| 3 — Kyoto diplomatic forms | Visual replay of p1209–p1210 confirms the witness forms `著`, `詠`, `稱`, `癲狂`, and `狀`. `EVD-020102` calls these diplomatic witness forms and separately labels packet punctuation. | **CLOSED** |
| 4 — Chen→Goldschmidt dependence | Chen's p. 172 n. 65 states that the *Puji benshifang* 9.152–153 translation is based on Goldschmidt pp. 287–289. `SRC-020011`, `EVD-020106`, and `REL-020310` expose that unopened upstream dependency and add no independent confirmation; `GAP-020502` remains open. | **CLOSED substantively; workflow-value defect listed below** |
| 5 — attributed-position labels | `CLM-020202` and `CLM-020206` are each `Documented` only for Steavu's and Chen's attributed positions. The underlying *Shanghan jiushi lun* authorship/date remains explicitly `Disputed`. | **CLOSED** |
| 6 — terminology / continuity split | `CLM-020221` is passage-specific and `Documented`; `CLM-020223` separately leaves transhistorical clinical/professional continuity `Unknown`. Its relations are D-fit qualifiers, not positive continuity support. | **CLOSED** |
| 7 — claim types | `CLM-020200` is `comparative`; `CLM-020204` is `quotation_or_position`. The remaining `archival_silence` claim, `CLM-020218`, names the selected packet corpus and does not assert historical non-survival. | **CLOSED** |
| 8 — Yuan Cai universality | `CLM-020211`, `CLM-020213`, and `CLM-020214` are `local`, bounded to one elite manual/authorial setting, named later witnesses, and Unknown implementation. | **CLOSED** |
| 9 — Yuan recension / facsimile locators | The 1781 Siku editorial base, current transcription layer, 1928 reprint, and 1179/1190 publication gap are now distinct. Visual replay confirms the anger locus at PDF p. 61/printed p. 72; household discipline across pp. 90–91/111–112; hanging procedure at p. 93/114 (continuing in the broader pp. 93–94/114–115 range); and illness-without-kin instruction at p. 94/115. However, `恐有輕生而自殘者` is visibly on **PDF p. 93 / printed p. 114**, not `EVD-020110`'s PDF p. 92 / printed p. 113. | **OPEN — mandatory locator correction** |
| 10 — Song Ci ratings | `REL-020320`, `REL-020321`, `REL-020328`, and `REL-020336` now rate the source L3-A only for what the unproofread web transcription displays, B for exact underlying received wording, with C/D limits where relevant. Live replay confirms the cited displayed passages; no facsimile/critical-edition claim is smuggled in. | **CLOSED; `GAP-020505` remains a publication hold** |
| 11 — validation / public state | The graph has 12 sources, 22 evidence records, 24 claims, and 47 unique relations; all REL endpoints resolve and every claim has incoming evidence. All six cache bytes/SHA-256 values match, all are ignored/untracked, and the public holds remain. But `SRC-020011` uses `verification_status: discovery_lead`; the controlled source-workflow vocabulary permits `lead`, `obtained`, `opened`, `extracted`, `verified`, `restricted`, or `rejected`. | **OPEN — normalize to `lead`, then rerun controlled-value validation** |

### Exact mandatory repairs before final closure

1. In both canonical rows for `EVD-020110`, replace “1928 scan PDF p. 92, printed p. 113” and
   “exact sentence collated to scan PDF p. 92” with **PDF p. 93, printed p. 114**. Propagate the
   corrected locator to any replay/disposition text that claims an exact page for this phrase.
2. Change `SRC-020011`'s canonical `verification_status` from invalid `discovery_lead` to controlled
   `lead`. Its source type may remain a discovery/upstream lead, its level must remain LX, and the
   source must remain unopened and ineligible as evidence.
3. Rerun the controlled-value and exact-locator checks. Do not change the existing Goldschmidt,
   early-Yuan-witness, Song Ci facsimile, safety, language, community, or public-writing holds.

No other mandatory defect was found in this closure replay. The packet remains **RETURN** only for
the two exact repairs above; it is not approved for master reconciliation or public prose.

## Final reviewer closure replay — 2026-08-18

**Closure verdict:** **PASS WITH GAPS for internal outline/reconciliation only**
**Public gate:** **HOLD; unchanged**

The two remaining defects from the preceding replay are closed:

1. **`EVD-020110` locator — CLOSED.** Both canonical locator rows now identify the visually
   replayed phrase `恐有輕生而自殘者` at 1928 scan PDF p. 93 / printed p. 114. The page image
   shows printed page number 114 and the phrase in the rightmost column; no `EVD-020110` row
   retains PDF p. 92 or printed p. 113.
2. **`SRC-020011` workflow/evidence status — CLOSED.** The canonical workflow row now uses the
   controlled value `lead`. The source remains `LX`, not opened, not cached, and explicitly
   ineligible as evidence. No `EVD` record cites `SRC-020011`; it functions only as the disclosed
   upstream Goldschmidt dependency behind Chen's translation route.

Final machine replay returned the unchanged graph totals of 12 sources, 22 evidence records, 24
claims, and 47 unique rated/dependence-explicit relationships. IDs remain unique, every endpoint
resolves, every retained evidence record is used, and every retained claim has incoming coverage.
All six cache artifacts remain byte- and SHA-256-identical to the ledger, ignored, and untracked.

This closure does not resolve the open Goldschmidt page-level replay, early Yuan Cai witness
collation, Song Ci facsimile/critical-edition check, translation, implementation, diagnosis,
priority, safety, lived-experience, language, or community/custody gaps. Those limits and all
public-writing holds remain mandatory.

**Final internal gate:** PASS WITH GAPS; eligible for bounded internal reconciliation with all
holds carried forward.
**Final public gate:** HOLD.
**Further reviewer closure required for these two repairs:** no.
