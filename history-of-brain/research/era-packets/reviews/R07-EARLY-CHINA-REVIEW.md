# R07-EARLY-CHINA — independent evidence review

**Packet reviewed:** `R07-EARLY-CHINA`

**Review date:** August 18, 2026

**Reviewer role:** independent second reader

**Review scope:** research controls only; this is not public prose

**Verdict:** **RETURN**

## Decision

The packet's historical architecture is strong, but it must be returned for repair before it
enters outline assembly. The return is caused by four record-integrity defects, not by a
failure of the underlying research thesis:

1. `SRC-010018` and every downstream mention attribute a pivotal UCSB dissertation to
   **Xiaohong Sun**, but the opened dissertation is by **Moonsil Lee Kim**;
2. `EVD-010025` uses `cross-corpus` instead of a valid `SRC-010xxx` link, contrary to the
   required evidence-record schema, and two relationships depend on that invalid record;
3. `REL-010033` says the ancient *Lingshu* passage **contradicts** the methodological claim
   that modern diagnostic mappings are reception, although that evidence supports or
   contextualizes the distinction rather than conflicting with it; and
4. the sole cached JSON file does not contain the revision ID or timestamp that the ledger
   and manifest say make it an exact revision capture.

The central synthesis survives replay: excavated and received witnesses are kept separate;
the checked texts preserve multiple accounts of `xin`, `qing`, cultivation, embodied
disturbance, ritual and medical action, law, and household obligation; and the packet
correctly refuses a timeless Chinese system, a simple religion-to-science sequence, and
retrospective psychiatric diagnosis. Guodian, Baoshan, *Xunzi*, *Neiye*, *Lingshu*, Wuwei,
the widow case, and the Qin letters all have defensible bounded uses. The phlegm and modern
diagnostic chains are responsibly held rather than promoted.

## Materials and method

The reviewer read `BRIEF.md`, all five packet outputs, `EVIDENCE-MODEL.md`, and
`SOURCE-RATING-AND-CAPTURE-PROTOCOL.md`. Verification used a risk-based sample focused on
thesis-bearing locators, excavated-versus-received controls, Chinese text and translation,
chronology and anachronism, law and household claims, lived experience, source
independence, and cached-artifact rights/provenance.

Agent Reach's Jina route and direct full-source access were used. Agent Reach reported Exa
unavailable, so the approved built-in primary-source search fallback was used for discovery.
Search-result snippets and abstracts were not treated as proof. Copyrighted full texts were
opened for verification and not added to the repository. The local cache SHA-256 was
recomputed.

## Risk-based verification log

| Risk area | Full source and locator checked | Result | Review finding |
|---|---|---:|---|
| Excavated versus received controls | Hubei Provincial Museum Guodian *Laozi* B record; CUHK Guodian project description; all packet witness labels | **PASS** | The museum object is correctly restricted to Guodian Tomb M1 corpus context, not represented as an object record for *Xing zi ming chu*. Guodian and Baoshan are distinguished from received *Mengzi*, *Xunzi*, *Guanzi/Neiye*, and *Lingshu*. “Excavated” is not treated as unedited and “received” is not treated as false. |
| Guodian text and normalization | Lisa Raphals, “Body and Mind in the Guodian Manuscripts,” pp. 6–7, 13–16; XZMC slips 323–26, 345, 350 | **PASS WITH APPARATUS HOLD** | The cited passages and translations check. Raphals explicitly says she uses the editors' emendations for transcription and that her translations are indebted to Cook. The packet records this dependence and blocks graph-level/public quotation pending the 1998 plates/apparatus and Cook. |
| `xin` / `qing` / `xing` | CText *Xunzi*, “Zhengming,” anchors `n12625` and `n12638`; Seok, SEP §§1–3 | **PASS WITH TRANSLATION HOLD** | The Chinese lines are exact. The packet correctly excludes CText's generated English and treats `qing` as passage- and chronology-sensitive. A current human critical translation remains mandatory before English public wording. The broad “Strongly supported” label for the semantic claim should not be strengthened further without another independent specialist philological source. |
| *Neiye* cultivation | CText *Neiye*, passages beginning `凡心之刑` and `四體既正，血氣既靜`; R. Eno course translation | **PASS WITH EXISTING GAP** | The Chinese includes affect terms, bodily ordering, blood-*qi*, and `憂鬱生疾`; Eno supports an internal English orientation. The packet correctly refuses “mindfulness,” psychotherapy, uptake, or efficacy. Roth or Rickett remains necessary for publication quotation and stronger dating claims. |
| Baoshan named illness sequence | Raphals, “Divination and Medicine in China and Greece,” pp. 1–10; slips 197–250, especially 207, 221, 223, 236–248 | **PASS** | The named Shao Tuo sequence, embodied signs, repeated consultations, five diviners, and differing forecasts/remedies check. The packet properly excludes retrospective cardiac diagnosis and does not manufacture fear, hope, satisfaction, or a patient-authored voice. |
| *Lingshu* chapter 22 | Cached Wikisource Chinese; Kanripo coordinates `[009-004b]–[009-005b]`; Lee's opened study | **PASS WITH EDITION HOLD** | The chapter title and Chinese beginning `癲疾始生，先不樂` and `狂始生，先自悲也` check, as do heterogeneous bodily/behavioral signs and needle, bleeding, and moxa responses. The packet correctly preserves `dian/kuang` and refuses DSM equivalence. A critical Chinese edition and full scholarly translation remain publication requirements. |
| *Lingshu* chronology | Karchmer and Herman, SEP §§1–2; Lee | **PASS** | Composite/layered status and commonly proposed early-imperial compilation are responsibly stated. The packet explicitly avoids using a compilation range to date chapter 22 itself. |
| Wuwei corpus | Yang and Brown, *Early China* 40 (2017), pp. 241–301, especially pp. 241–243 and 249–250 | **PASS** | Early Eastern Han tomb context, a bag of 78 documents, predominance of drug formulae, some acupuncture, lost archaeological context, no trace of exorcism in this corpus, and transmission prohibitions all check. The packet correctly says corpus contrast rather than social disappearance of ritual or divine healing. |
| Widow, grief, and legal judgment | Paul Goldin, pp. 16–18; *Zouyanshu* slips 180–196, especially 187 | **PASS** | The preliminary opinion treats represented conduct/grief as unfilial; the final decision releases the widow. Goldin's bounded negative finding about checked Shuihudi documents also checks. The packet preserves both rulings and the absence of the widow's private feelings. |
| Zhangjiashan codicology | Jingrong Li, full dissertation, especially printed pp. 70–82, not only the repository abstract | **REPAIR LOCATOR** | The full chapter supports likely 186 BCE production, selected statutes/ordinances, three scribes, errors, and Li's funerary-copy argument. The packet currently cites only the repository abstract while claiming that no abstract supports retained substance. Replace the abstract-only locator with the opened full pages and retain attribution to Li's argument. |
| Household succession | Moonsil Lee Kim, *Food Redistribution during China's Qin and Han Periods*, printed pp. 125–126; Wu Dongming, printed pp. 68–70 | **RETURN** | Both opened sources reproduce the succession sense, but the packet names the first author incorrectly. The sequence is conditional: no male descendant; then father or mother; if neither, widow; if no widow, daughter; then later kin. The sources share one Zhangjiashan manuscript witness; two translations can check translation sense but are not independent evidence of implementation. |
| Qin soldiers' letters | Wu, printed pp. 69–70, Chinese and English; source note to Enno Giele pp. 456–464 | **PASS WITH ATTRIBUTION** | Heifu and Jing request money and clothing from their mother; the urgent death formula and ca. 223 BCE Shuihudi M4 context check. The direct voices are the men's, not the mother's. “Low-class family” and maternal property-management conclusions are Wu's interpretations and should remain attributed rather than being presented as self-evident object facts. |
| Phlegm chronology | Natalie Köhle, ISAW “Fluid Fire” event description | **PASS AS HOLD ONLY** | The page says the *Neijing* does not mention `tan`, sketches a second-century CE appearance and much later development, and proposes transregional influence. It is an event summary, not the underlying demonstration. `CLM-010013` is correctly held; no “first phlegm” claim may be published from this source. |
| Modern `dian/kuang` mapping | Elsevier textbook sample; ancient chapter 22 | **PASS AS RECEPTION** | The sample documents that bipolar/manic-depression and phlegm-fire mappings circulate. It is not evidence for an ancient diagnosis or translation. The packet correctly makes this a modern origin-chain object, but the chain has not yet been traced upstream. |
| Rights and cache | R07 cache manifest; cached JSON; Wu article license statement | **REPAIR REQUIRED** | The JSON checksum and byte count match, its Wikisource reuse basis is adequate, and Wu explicitly carries CC BY 4.0. The JSON contains only `parse.title`, `parse.pageid`, and `parse.wikitext`; it does not contain revision `1748600`, timestamp `2019-10-21T19:51:54Z`, or the retrieval query. Exact-revision provenance is therefore not independently recoverable from the cached artifact. |
| Typed evidence structure | all 28 EVD, 18 CLM, and 37 REL records | **RETURN** | IDs are unique, in range, and resolved; all claims have REL coverage and all verbs are permitted. `EVD-010025` alone has no valid source link, and `REL-010033` uses the wrong semantic relation. |

## Claim dispositions

| Claim(s) | Disposition | Reason |
|---|---:|---|
| `CLM-010000` | **REPAIR REQUIRED** | The bounded plurality thesis is sound, but its strongest relationship currently depends on invalid synthetic evidence record `EVD-010025`. Replace it with direct relationships from the constituent evidence records and avoid counting method/context as independent corroboration. |
| `CLM-010001` | **PASS** | Excavated and received witnesses are explicitly and accurately separated. |
| `CLM-010002` | **PASS WITH EXISTING HOLD** | Exact Raphals locators check; normalized graphs and Cook/1998 dependence keep public quotation blocked. |
| `CLM-010003` | **PASS WITH GAP** | The non-equivalence/polysemy warning is justified. Preserve the dispute language and add another independent specialist philological source before any consensus-style promotion. |
| `CLM-010004` | **PASS WITH EXISTING HOLD** | The *Mengzi* examples are bounded as normative arguments; modern translation review remains appropriate. |
| `CLM-010005` | **PASS IN CHINESE / HOLD IN ENGLISH** | Direct Chinese locators check; generated English is excluded. |
| `CLM-010006` | **PASS WITH EXISTING GAP** | The *Neiye* synthesis is appropriately text-specific; current critical edition remains needed for publication. |
| `CLM-010007` | **PASS** | Named elite episode, repeated care, archive mediation, and diagnostic restraint all check. |
| `CLM-010008–010009` | **PASS WITH EXISTING HOLDS** | The received, layered witness and heterogeneous sign/intervention wording are accurate; critical edition/translation and institutional-history gaps remain. |
| `CLM-010010` | **PASS** | Wuwei supports a bounded corpus contrast, not secularization or disappearance. |
| `CLM-010011` | **PASS** | Preliminary and final rulings and missing interior voice are preserved. |
| `CLM-010012` | **HOLD / REPAIR REQUIRED** | Underlying translation sense checks, but a source is misattributed, the statutory sequence is compressed, strip-level locator support is not transparent, and the two modern renderings share one manuscript witness. |
| `CLM-010013` | **PASS AS HOLD** | Event-summary chronology is correctly quarantined from definitive priority language. |
| `CLM-010014` | **PASS AS ATTRIBUTED ARGUMENT** | Brown's historiographic argument and the Baoshan illustration support the bounded correction; contrary specialist work remains a publication gap. |
| `CLM-010015` | **REPAIR REQUIRED** | Archive-silence reasoning is sound, but one supporting relationship depends on invalid `EVD-010025`. Replace it with direct corpus/source relationships. |
| `CLM-010016` | **REPAIR RELATIONSHIP** | The reception claim is valid; `REL-010033` must not say the ancient evidence contradicts it. |
| `CLM-010017` | **PASS WITH ATTRIBUTION** | Direct requests and missing maternal reply check. Keep Wu's status/household-management interpretations attributed and retain the no-suicide-diagnosis rule. |

## Mandatory repairs

These are return conditions, not optional enrichment.

### 1. Correct the UCSB dissertation identity everywhere

- Change `SRC-010018` from “Xiaohong Sun” to **Moonsil Lee Kim**.
- Use the full citation: Moonsil Lee Kim, *Food Redistribution during China's Qin and Han
  Periods: Accordance and Discordance among Ideologies, Policies, and Their
  Implementation* (PhD diss., University of California, Santa Barbara, 2014), printed
  pp. 125–126.
- Prefer the stable [eScholarship full PDF](https://escholarship.org/content/qt8x89q4t1/qt8x89q4t1.pdf)
  or repository record; retain the Alexandria download only as a legacy access route if it is
  still useful.
- Correct “Xiaohong Sun” / “Sun” in `FINDINGS.md`, `LIVED-EXPERIENCE-AND-ARCHIVE.md`,
  `SOURCE-LEDGER.md`, `CLAIM-MAP.md`, and any chain or handoff prose.
- Do not create a second source record for the same dissertation merely to preserve the
  mistaken name.

### 2. Repair the household-succession locator, sequence, and independence statement

- Retain the verified page locators: Kim printed pp. 125–126 and Wu printed pp. 68–70
  (the succession text itself is on printed p. 69 in Wu).
- Do not retain `strips 379–381` as an exact locator unless it is checked against the 2007
  *Ernian lüling yu Zouyan shu* edition or another full critical edition. The opened modern
  sources clearly support the passage and page locators, but the packet does not expose a
  verified strip-range derivation.
- State the conditional order accurately: when there is no male descendant, father or mother;
  absent both, the widow; absent a widow, the daughter; then the later named kin. A shortened
  list must not obscure those conditions. Use “widow” unless a different translation of `寡`
  is explicitly attributed.
- Reword “independently matched” / “independent full check” to **independent modern
  translation check of the same Zhangjiashan witness**. It is not independent ancient
  corroboration and cannot establish implementation, equality, or frequency.
- Keep `CLM-010012` on hold until the base edition/variant reading has been opened.

### 3. Replace invalid synthetic evidence record `EVD-010025`

- An evidence record requires a `source_id` linked to a consulted source. `cross-corpus` is
  not a source identifier, and evidence records are not the place to hide a researcher-created
  synthesis.
- Withdraw/reserve `EVD-010025` or rewrite it only if all specific consulted `SRC-010xxx`
  records and exact constituent locators are explicitly linked. Do not invent a project source.
- Preferred repair: relate the existing constituent evidence records directly to
  `CLM-010000` and `CLM-010015`, with each relationship carrying only the support it can
  bear. Replace `REL-010000` and `REL-010030`; update the claim evidence lists.
- Method/context records may qualify scope but must not be counted as additional independent
  corroboration.

### 4. Correct `REL-010033`

- Change `EVD-010014 contradicts CLM-010016` to `supports`, `qualifies`, or
  `contextualizes` according to the final boundary note. The ancient passage's heterogeneous
  signs and lack of modern diagnostic terminology do not conflict with the claim that modern
  equations are reception.
- Keep `EVD-010024 supports CLM-010016` as the direct evidence that the modern mapping is
  repeated.
- Do not convert absence of a DSM label in the ancient passage into proof that every possible
  comparison is false; the defensible claim is historical non-equivalence and reception
  control.

### 5. Replace the Zhangjiashan abstract-only locator with the opened full source

- `SRC-010017` may remain L3-A for repository metadata, but `EVD-010021` currently retains
  substantive codicological conclusions while citing only an abstract.
- Cite Jingrong Li's full dissertation, especially printed pp. 70–82, for likely 186 BCE
  production, selected statutes/ordinances, multiple scribes, errors, practical-use problems,
  and the funerary-copy argument.
- Attribute “produced for the funeral” to Li's argument rather than stating it as an
  unqualified archaeological observation.
- Amend the validation checklist's “no abstract retained as substantive evidence” statement
  only after this full-source locator repair is made.

### 6. Make the cached *Lingshu* revision provenance self-verifying

- The recomputed JSON checksum is
  `31e38de96469b4feed1adf3e3ce9e40c0d08fbe10b0c45b90cf20052e77aee9f`, matching the
  manifest, and its size is 21,798 bytes.
- The file does **not** contain revision `1748600`, timestamp
  `2019-10-21T19:51:54Z`, or the API request that selected that revision.
- Either replace/add a lawful API metadata export containing `revid`, timestamp, page ID,
  and the exact old-revision query, or remove the exact-revision assertion and describe the
  file only as a retrieval-date parse export.
- If the cached artifact changes, recompute byte count and SHA-256 and update the manifest,
  ledger, and handoff together. The current Wikisource CC BY-SA/GFDL attribution and
  public-domain-source distinction are adequate.

### 7. Normalize source-status and full-text statements

- The packet's general statement that abstracts are leads only is correct, but it conflicts
  with the current `EVD-010021`; resolve that through repair 5.
- Keep Köhle's event page at L3-C and `CLM-010013` held. Do not describe it as a full
  publication or use it for a definitive first-appearance claim.
- Keep the Elsevier sample L4-A only for documenting modern repetition and D for ancient
  historical fit. The modern `dian/kuang` and phlegm-fire chain remains untraced upstream.
- Keep Wu at L2-A for the bounded translations/analysis and record that the article explicitly
  carries CC BY 4.0. Do not confuse open-access rights with an independent ancient witness.

## Structural audit

| Record type | Count | Unique | Range | Resolution/coverage |
|---|---:|---:|---|---|
| `SRC` | 22 | 22 | `SRC-010000–SRC-010021` | all identifiers unique; `SRC-010018` bibliographic identity wrong |
| `EVD` | 28 | 28 | `EVD-010000–EVD-010027` | 27 have valid source links; `EVD-010025` does not |
| `CLM` | 18 | 18 | `CLM-010000–CLM-010017` | all have at least one typed relationship |
| `REL` | 37 | 37 | `REL-010000–REL-010036` | endpoints resolve and verbs are from the permitted list; `REL-010033` is semantically wrong |

Relationship coverage ranges from one to three links per claim. Numeric uniqueness and ID
range pass. Coverage alone does not cure invalid provenance or false independence.

## Cache audit

| Cached file | Recomputed SHA-256 | Integrity | Rights/provenance disposition |
|---|---|---:|---|
| `LINGSHU-VOL5-WIKISOURCE-API-2026-08-18.json` | `31e38de96469b4feed1adf3e3ce9e40c0d08fbe10b0c45b90cf20052e77aee9f` | match | reuse basis adequate; **revision provenance repair required** |
| `CACHE-MANIFEST.md` | `183e94c594161065712e232529680b5b774210c7990b2deada3f9eaff0e731dc` | informational | manifest is consistent on bytes/hash but overstates what the JSON itself records |

The cache directory is ignored by Git as intended. No packet or cache file was modified in
this review.

## Closure recheck — August 18, 2026

**Closure verdict:** **PASS WITH GAPS for internal outline assembly**
**Public-prose gate:** **CLOSED**

The packet owner repaired every mandatory RETURN item. This closure independently reread the five
repaired outputs, replayed the pivotal full sources, recomputed the cache checks, and revalidated
all active identifiers and relationships. The original bibliographic, evidence-schema,
relationship-semantic, full-source-locator, and cache-provenance defects are closed. Remaining
items are publication and specialist-review gaps, not unresolved record-integrity failures.

### Mandatory-disposition closure

| original return condition | closure replay | disposition |
|---|---|---:|
| `SRC-010018` author identity | The official UCSB/eScholarship dissertation title page names **Moonsil Lee Kim**. `SOURCE-LEDGER.md`, `FINDINGS.md`, `CLAIM-MAP.md`, and `LIVED-EXPERIENCE-AND-ARCHIVE.md` now use that identity and the 2014 dissertation. No “Xiaohong Sun” remains in the packet outputs. | **PASS / CLOSED** |
| Household sequence and locators | Kim printed pp. 125–126 gives the Chinese and conditional order: no male descendant; father or mother; absent both, surviving spouse/widow; absent that person, daughter; later kin. Wu printed p. 69 gives the same sequence. The packet removes the unverified strip range, uses the conditional order, keeps pp. 125–126 and pp. 68–70/p. 69, and calls Wu an independent **modern translation check of the same Zhangjiashan witness**. It explicitly denies independent ancient corroboration, implementation, equality, frequency, and care-access inference. | **PASS / CLOSED; `CLM-010012` remains publication-held** |
| Invalid `EVD-010025` | The evidence-table row is gone. A visible note permanently reserves/withdraws the ID; no relationship cites it. Its former work is decomposed into bounded constituent links, including `REL-010000`, `REL-010037–010040` for `CLM-010000` and `REL-010030–010031`, `REL-010036`, `REL-010041–010042` for `CLM-010015`. Method/context records are `illustrates`/`qualifies`, not counted as independent ancient corroboration. | **PASS / CLOSED** |
| `REL-010033` semantics | `EVD-010014 contextualizes CLM-010016`. The boundary note says the ancient heterogeneous signs/interventions are the comparison object and that absence of a modern label alone does not disprove every comparison. `EVD-010024 supports CLM-010016` remains the direct modern-reception link. | **PASS / CLOSED** |
| Jingrong Li full-source locator | The ledger and `EVD-010021` now cite Li's full dissertation, printed pp. 70–82. Direct replay confirms the 186 BCE argument, selected statutes/ordinances, multiple scribes and uncorrected errors, impractical physical format, and Li's proposed hurried funerary production. The packet attributes the funeral conclusion to Li rather than to excavation as an unqualified fact. | **PASS / CLOSED** |
| *Lingshu* cache provenance | The JSON remains 21,798 bytes with SHA-256 `31e38de96469b4feed1adf3e3ce9e40c0d08fbe10b0c45b90cf20052e77aee9f`. It contains only `parse.title`, `parse.pageid`, and `parse.wikitext`; the repaired ledger, manifest, and handoff now say exactly that. Revision `1748600`, timestamp `2019-10-21T19:51:54Z`, and exact-revision wording are absent from the packet/cache metadata. The file is correctly described only as a retrieval-date parse export. | **PASS / CLOSED** |
| Source-status/full-text normalization | `SRC-010017` is L2-A for the full Li argument and L3-A for repository metadata; `EVD-010021` uses full pages rather than the abstract. Köhle remains an event-summary lead and held. The Elsevier sample remains L4-A only for modern repetition/D for ancient history. Wu is L2-A, CC BY 4.0, and explicitly one modern rendering of a shared ancient witness. | **PASS / CLOSED** |

### Structural and chain revalidation

- 22 unique source rows, `SRC-010000–SRC-010021`.
- 27 active unique evidence rows, `EVD-010000–EVD-010024` and `EVD-010026–EVD-010027`;
  `EVD-010025` is reserved/withdrawn and does not count as active evidence.
- 18 unique claim rows, `CLM-010000–CLM-010017`, each with at least one resolved relationship.
- 43 unique relationship rows, `REL-010000–REL-010042`; every subject resolves to an active
  evidence row, every object resolves to a claim, and every verb is permitted: `supports`,
  `qualifies`, `contextualizes`, or `illustrates`.
- Kim and Wu are two modern translation checks of one Zhangjiashan witness. Li adds codicological
  source criticism, not implementation evidence. The *Lingshu* transcription, Kanripo comparison,
  Lee, and later translation/synthesis routes remain one received textual tradition rather than
  independent ancient witnesses.

### Endpoint and cache replay

All 31 unique HTTP(S) endpoints retained across the five packet outputs and cache manifest were
rechecked. Twenty-six returned HTTP 200 directly. Four access-controlled routes returned HTTP 403
to command-line retrieval (Brill PDF/DOI and the two eScholarship routes), but the full Brill PDF,
the official eScholarship record, and the official no-splash dissertation PDF replay through the
reader/search route. Kanripo timed out in direct command-line retrieval but replayed in the web
reader at `[009-004b]–[009-005b]`. These are access-route fragilities, not missing-source failures;
the official no-splash Kim PDF is the preferred fallback if the retained generic eScholarship PDF
route challenges automated access.

The cache directory remains ignored. Recomputed checks:

| cached artifact | bytes | SHA-256 | closure result |
|---|---:|---|---:|
| `LINGSHU-VOL5-WIKISOURCE-API-2026-08-18.json` | 21,798 | `31e38de96469b4feed1adf3e3ce9e40c0d08fbe10b0c45b90cf20052e77aee9f` | **match** |
| `CACHE-MANIFEST.md` | 1,284 | `3d6cfb714e63ca9fca7fd84e59ee2f95947b0efdcfa41ea36d130d9c531a817e` | **current informational manifest** |

### Final gates

Internal outline assembly may proceed with the packet's existing wording limits. Public drafting
remains blocked on the Guodian plates/apparatus and Cook, a human critical *Xunzi* translation,
critical *Neiye* and *Lingshu* editions/translations, publication-level phlegm chronology, the 2007
Zhangjiashan base edition/variants for the succession provision, gender/status and nonelite social
history, a contrary specialist response to Brown, and the upstream modern *dian/kuang* diagnostic
reception chain. `CLM-010012` and `CLM-010013` remain explicit holds. No ancient DSM equivalence,
prevalence, efficacy, implementation, equality, coercion, consent, satisfaction, or direct maternal
voice is cleared.

## Disputes, missing voices, and publication gaps that remain after repair

- **Guodian reconstruction:** Raphals's normalized Chinese is useful but depends on the 1998
  editorial reconstruction and Cook. The plates, apparatus, and Shanghai Museum parallel
  remain necessary for graph-level confidence.
- **`Qing` is not a settled one-word category:** competing chronologies and glosses must stay
  visible. One received *Xunzi* passage and one reference synthesis should not be presented as
  a universal early-Chinese theory of emotion.
- **Received *Lingshu* is not a Han casebook:** chapter 22's transmission, layer, and terms
  remain matters for critical edition and semantic history. `Dian/kuang` must not silently
  become bipolar disorder, schizophrenia, psychosis, mania, or depression.
- **Phlegm chronology remains unverified at publication level:** `tan`, `yin`, later
  phlegm-fire synthesis, and proposed Indic/Islamic transmission require Köhle's underlying
  publications and independent textual checks.
- **Institutional and lived experience are unevenly preserved:** Shao Tuo is represented in an
  elite tomb archive; the widow appears through official judgment; Heifu and Jing speak in
  letters, but their mother's reply is absent. Ordinary recipients of Wuwei remedies, women,
  children, servants, enslaved or penalized people, caregivers, and poor households remain
  largely missing.
- **Prescription is not experience or implementation:** statutes do not demonstrate routine
  enforcement, medical texts do not demonstrate treatment uptake or efficacy, and archive
  silence does not demonstrate absence.
- **The “first secular naturalist” claim is historiography:** Brown's correction should remain
  attributed and should gain a serious contrary or alternative specialist reading before it is
  treated as settled.

## Sources opened for this review

The packet ledger remains the bibliographic source of record. This list identifies the full
items independently replayed for the risk sample:

1. Hubei Provincial Museum, [Guodian Chu slips: *Laozi* B](https://www.hbww.org.cn/bambooslips/p/11903.html).
2. Chinese University of Hong Kong, [Guodian manuscript database description](https://www.history.cuhk.edu.hk/en/elkt/a-database-of-the-chu-bamboo-manuscripts-of-guodian-2001/).
3. Lisa Raphals, [“Body and Mind in the Guodian Manuscripts”](https://faculty.ucr.edu/~raphals/pubs/2019%20Body%20mind%20Guodian.pdf), pp. 1–16.
4. *Xunzi*, [“Zhengming”](https://ctext.org/xunzi/zheng-ming/ens), anchors `n12625`, `n12638`.
5. *Guanzi*, [“Neiye”](https://ctext.org/guanzi/nei-ye/ens), named Chinese passages, with R. Eno's opened course translation.
6. Bongrae Seok, [“The Emotions in Early Chinese Philosophy”](https://plato.stanford.edu/entries/emotions-chinese/), SEP §§1–3.
7. Lisa Raphals, [“Divination and Medicine in China and Greece”](https://faculty.ucr.edu/~raphals/pubs/2005baoshan.pdf), pp. 78–103 / PDF locators used by the packet.
8. *Huangdi neijing lingshu*, [Wikisource fascicle 5](https://zh.wikisource.org/wiki/%E9%BB%83%E5%B8%9D%E5%85%A7%E7%B6%93/%E9%9D%88%E6%A8%9E%E7%AC%AC%E4%BA%94%E5%8D%B7), chapter 22, and [Kanripo comparison](https://krx.kanripo.org/text/KR5d0042/009).
9. Yang Yong and Miranda Brown, [“The Wuwei Medical Manuscripts”](https://resolve-he.cambridge.org/core/services/aop-cambridge-core/content/view/428F79323358B94C190AE4BD7A030D67/S0362502817000037a.pdf/wuwei_medical_manuscripts_a_brief_introduction_and_translation.pdf), *Early China* 40 (2017): 241–301.
10. Paul R. Goldin, [“Han Law and the Regulation of Interpersonal Relations”](https://ealc.sas.upenn.edu/sites/default/files/bio/%5Buser-raw%5D/papers/Han%20Law%20and%20the%20Regulation%20of%20Interpersonal%20Relations.pdf), pp. 1–31.
11. Jingrong Li, [*The Ernian lü ling Manuscript*](https://ediss.sub.uni-hamburg.de/bitstream/ediss/5557/1/Dissertation.pdf), especially printed pp. 70–82.
12. Moonsil Lee Kim, [*Food Redistribution during China's Qin and Han Periods*](https://escholarship.org/content/qt8x89q4t1/qt8x89q4t1.pdf), especially printed pp. 125–126.
13. Wu Dongming, [“‘Women in Charge’ and Empires in Change”](https://brill.com/view/journals/bsms/8/1/article-p57_3.pdf), printed pp. 68–70.
14. Natalie Köhle, [“Fluid Fire”](https://isaw.nyu.edu/events/archive/2017/fluid-fire), ISAW event description.
15. Elsevier, [“Bipolar Disorder (Manic-Depression)” sample chapter](https://booksite.elsevier.com/samplechapters/9780702029882/Chapter%2019.pdf), opened only as a modern-reception object.

## Release gate

Recheck all seven mandatory repairs before changing the verdict. The recheck must verify the
corrected Kim citation in every packet file, the exact household wording/locator and shared
chain, valid evidence-to-source links replacing `EVD-010025`, the repaired `REL-010033`,
Li's full-source locator, and cache revision provenance. Only then may the packet move to
**PASS WITH GAPS** for internal outline assembly. Critical-edition, human-translation,
phlegm-chronology, modern-origin-chain, access, and missing-voice gaps will still block public
prose.

**Original review disposition: RETURN — superseded by the August 18, 2026 closure recheck above.**
