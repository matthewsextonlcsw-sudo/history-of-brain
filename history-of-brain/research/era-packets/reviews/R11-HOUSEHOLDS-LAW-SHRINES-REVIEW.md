# Independent cross-review — R11-HOUSEHOLDS-LAW-SHRINES

**Review date:** 2026-08-18
**Reviewer:** independent Codex packet reviewer
**Reviewed state:** five packet outputs and seven ignored cache artifacts; packet/cache remained read-only
**Verdict:** **RETURN**
**Public-content state:** **blocked; no public prose**

## Decision

The packet has a useful, unusually careful bounded core. Full-source replay supports the two
letter records, the named rules in al-Kasani and Hamilton, the three selected P.KRU deed
discussions, the separation of norms from implementation, and most of the voice and power
limits. The packet does not turn historical terms into diagnoses, count related Hanafi texts as
court practice, or flatten the P.KRU status dispute into a settled label.

It must nevertheless return before coordinator reconciliation. The blockers are material rather
than cosmetic:

1. the source, evidence, claim, and disagreement records do not implement the required evidence
   model fields;
2. the Geniza propositions combine Judaeo-Arabic transcription with an English editorial
   description even though no English translation was opened;
3. the exact Arabic al-Marghinani passage and full specialist legal history remain absent;
4. the brief's implementation-evidence requirement remains unmet;
5. the P.KRU chain still depends on one modern article, without the base edition, Till translation,
   or opened competing interpretation;
6. the P.KRU 80 consent-silence claim is broader than Schenke's opened excerpts permit;
7. the purported reception-chain audits do not identify or trace actual popular claim chains; and
8. claim-relative L1–L5/LX and A–D ratings are not consistently resolved through the evidence and
   relationship graph.

This is a bounded repair return. It is not a request to add more settings, write a history of the
Islamicate world, or turn the packet into public prose.

## Materials and method

Read in full:

- `PROJECT-BRAIN.md`;
- `BATCH-03-INDEX.md`;
- `sources/EVIDENCE-MODEL.md`;
- `sources/SOURCE-RATING-AND-CAPTURE-PROTOCOL.md`;
- R11 `BRIEF.md`; and
- all five R11 packet outputs.

Risk-based replay used Agent Reach/Jina, direct institutional pages, public-domain scans, and
full documents. Agent Reach v1.5.0 reported Jina Reader available and Exa unavailable; direct
primary/scholarly web-search fallback was therefore used. Search snippets, publisher abstracts,
and AI summaries were not accepted as evidence. A background-reader slot required by the
research workflow was unavailable because the shared agent limit was full; the replay was
completed directly instead.

Full or bounded full-text replay included:

- Princeton Geniza Project records and transcriptions for T-S 6J4.20 and AIU VII.E.149;
- the PGP “How to Cite” guidance;
- Library of Congress images 148–49 and OCR for Hamilton, vol. 2, pp. 134–35;
- al-Kasani's full Arabic theft chapter, vol. 7, p. 67;
- a directly opened Arabic parallel reproducing the relevant *al-Hidāya* formulation in *Naṣb
  al-rāya*, used as reviewer verification rather than silently added packet evidence;
- Schenke's complete accepted manuscript and appendices; and
- Crum and Steindorff's public-domain 1912 *Koptische Rechtsurkunden* scan, including the P.KRU
  79/80/104 locations, used as reviewer replay rather than a substitute for packet capture and
  Coptic specialist collation.

## Risk-based pivotal replay

| chain / issue | replay result | disposition |
|---|---|---|
| T-S 6J4.20 identity, date, and setting | The current PGP record identifies the shelfmark, Judaeo-Arabic letter, uncertain sender location, addressees probably in Fustat, and a **perhaps twelfth-century** editorial date. | **PASS WITH ATTRIBUTION.** “Perhaps” and “probably” are evidentiary qualifiers and must remain. This is Fustat-linked, not securely a Fustat sender. |
| T-S 6J4.20 wording | The transcription and PGP description support crying, fasting, sitting in a corner, `hamm`, heart/fire language, the instruction not to neglect Manṣūr, and the request for a response. A CUL image confirms the physical fragment and marginal layout, but no fresh specialist Judaeo-Arabic collation was completed. | **PASS WITH MEDIATION.** `CLM-017001` is safe as a claim about the PGP-described letter. It is not a clinical symptom inventory. English semantic detail comes from Elbaum's description, not an opened line-by-line translation. |
| AIU VII.E.149 identity, date, and setting | The current PGP record gives the father as probably in Fustat, Isḥāq probably in the Rīf, a **probably fourteenth-century** date, and a Judaeo-Arabic transcription. | **PASS WITH ATTRIBUTION.** Do not convert the editorial place/date estimates to certainties. No manuscript image was displayed in the opened record. |
| AIU VII.E.149 action sequence | The PGP description/transcription supports reported relapse, a command to return, proposed consultation with `al-ḥukamāʾ`, and the household's stated frailty. | **PASS WITH MEDIATION.** It establishes the father's proposal, not the son's assent, travel, consultation, treatment, or outcome. The “physicians” gloss is editorial/contextual and must remain attributed. |
| Geniza affected-person voice | A woman and a father speak directly through letters, as mediated by fragment survival and Elbaum's edition. Manṣūr and Isḥāq do not speak in the two opened records. | **REPAIR.** Replace “no reply survives” with “no reply is linked or identified in the two opened PGP records” unless a defined wider Geniza-corpus search is documented. Archive silence cannot exceed the searched corpus. |
| PGP translation and use layer | Both records display descriptions and Judaeo-Arabic transcriptions; neither displays an English translation. PGP says anyone may use its descriptions/transcriptions with citation and requires shelfmark, editor credit, version, and access date. | **REPAIR.** Split transcription evidence from editorial-description evidence; add PGP version/access metadata. Do not label English paraphrase as direct L1 translation. |
| al-Kasani, vol. 7, p. 67 | The opened Arabic page states that reason and maturity are conditions for the fixed theft penalty, that a minor and a `majnūn` are not subjected to it, that they remain liable for the stolen property, and that conduct during `junūn` is distinguished from conduct during `ifāqa`. | **PASS** for the bounded printed doctrine; **Unknown** for implementation. The unversioned web presentation still requires print/critical-edition provenance before publication quotation. |
| Hamilton, Book VIII, pp. 134–35 | LOC images show the reported disagreement among Abu Hanifa/Zufar and Abu Yusuf about a robbery party containing an “infant or lunatic,” including the principal/dependent-act reasoning. | **PASS** for Hamilton's 1791 wording. It is a translation through Persian, uses dated English, and does not establish the underlying Arabic terminology or a court outcome. |
| Direct Arabic *al-Hidāya* control | A full reviewer replay found the parallel Arabic structure—`ṣabī aw majnūn`, Abu Hanifa/Zufar, Abu Yusuf, and principal/dependent reasoning—in the opened *Naṣb al-rāya* page reproducing the *al-Hidāya* passage. It was not a critical *al-Hidāya* edition and is not in the packet. | **GAP CONFIRMED, NOT REPAIRED BY REVIEW.** Add a critical or otherwise edition-accountable Arabic witness as its own source/evidence chain and collate it explicitly with Hamilton. Al-Kasani is an adjacent doctrinal witness, not a translation check of `CLM-017006`. |
| law versus implementation | The two juristic passages are normative doctrine. No court record, responsum applying the rule, petition, or case outcome was opened. | **FAIL AGAINST BRIEF.** Keep every legal claim at rule/category level and add implementation evidence or mark implementation **Unknown** in a documented required-evidence record. Exemption from a fixed penalty is not a general right, diagnosis, mercy regime, or social outcome. |
| P.KRU 104 | Schenke pp. 8–9 and appendix Text 1 support a 771–772 date, an adult self-donation, capacity/non-force formula, narrated severe illness and shrine-water healing, and lifelong service. The document's beginning is lost. | **PASS WITH FORMULA LIMIT.** The deed represents capacity and voluntariness; it does not independently prove unconstrained choice, healing, performance, or exit rights. |
| P.KRU 79 | Schenke p. 13 and appendix Text 2 support the widow Kalisthene's deed and its report that Merkourios wished and agreed after reaching age. | **PASS WITH MEDIATION.** The son's assent is embedded in a family/institutional legal instrument; there is no separate account or later appraisal. |
| P.KRU 80 | Schenke pp. 13 and 18 support the father Zael's donation/security narrative, the 12 March 776 date, and duties involving sweeping, sprinkling, basin water, lamp care, wider orders, and outside wages. Schenke does not print the complete deed in the appendix. | **REPAIR.** The opened source supports “Schenke's discussion does not report the child's assent,” not “P.KRU 80 does not preserve the child's consent.” The latter requires full base-text/translation replay. |
| P.KRU provision and control | Schenke's contextual discussion of P.KRU 87/90 reports nourishment/clothing and obedience; P.KRU 79/80/104 supply donation, service, payment, and authority material. | **PASS WITH SCOPE.** `CLM-017009` must visibly distinguish the three-item core from contextual P.KRU 87/90. “Care” is an interpretation of represented provision, not an affected person's appraisal. |
| P.KRU status dispute | Schenke argues for cult/shrine service while acknowledging ownership, lifelong obligation, service language, and prior poverty/labor interpretations. The competing works were not opened. | **FAIL FOR DISPUTE CLOSURE.** Preserve `DIS-017001`; do not publish “slave,” “free laborer,” “employee,” “monk,” or “patient” as settled. Open at least one serious competing interpretation and the editions on which it relies. |
| P.KRU date and provenance | Schenke states that none of the documents has secure find-provenance and infers a likely Apa Phoibammon archive from content. Crum–Steindorff's original edition is 1912; 1971 is a reprint in later bibliographies. | **REPAIR.** Record each deed's date/range, repository/shelfmark when recoverable, insecure find-provenance, inferred archive, original 1912 edition, and any consulted reprint separately. Do not turn inferred archive origin into excavated provenance. |

## Legal, medical, moral, and social category audit

The packet generally passes the category-separation test:

- `majnūn/junūn/ifāqa` perform work inside named juristic rules; they are not modern diagnoses;
- reason/maturity and a deed's capacity formula are not one transhistorical concept of legal
  capacity;
- the P.KRU healing narratives are religious/legal representations, not verified clinical
  outcomes;
- the letters document appeals actually written, not successful care episodes;
- a proposed visit to `al-ḥukamāʾ` does not establish specialty, treatment, cost, or efficacy; and
- legal exemption from one corporal penalty does not establish comprehensive civil incapacity,
  tolerance, benevolence, or equal status.

Preserve those limits. In particular, do not group the Hanafi `majnūn` rule, the distressed letter
writer, the ill Geniza addressees, and the shrine donors under one modern “mentally ill”
population. The packet contains intersecting evidence relevant to mental-health history, not a
single historical category.

## Affected-person voice and lived-experience audit

| person/group | review disposition |
|---|---|
| unnamed writer of T-S 6J4.20 | Strongest first-person voice in the packet. Her rhetorical, embodied, and relational words may be described with exact mediation; no diagnosis or treatment motive may be inferred. |
| Manṣūr and Isḥāq | Discussed/addressed by relatives but silent in the two opened records. Their consent, interpretation, adherence, and outcome are **Unknown**. |
| father in AIU VII.E.149 | Direct family voice for the appeal and reported barrier. He cannot stand in for the son's experience or medieval household practice. |
| persons categorized as `majnūn` | Abstract legal subjects. No named person's speech, household, case, physician, or court implementation survives in the opened legal core. |
| Petronios in P.KRU 104 | Adult first-person legal representation, but the opening is lost and the deed/form/institution mediate every capacity and voluntariness formula. |
| Merkourios in P.KRU 79 | Assent is reported inside his mother's legal instrument. It is evidence of the deed's representation, not unmediated testimony. |
| Abraham in P.KRU 80 | The father and institution control the surviving account. Assent, refusal, age-specific understanding, daily experience, and later outcome are **Unknown**. |
| women/girls, enslaved/dependent people, poor households, shrine workers | The packet records one widowed donor and one woman letter-writer, names status and material dependence, and notes an all-male deed corpus. It does not recover girls' shrine access, affected workers' testimony, household budgets, or an enslaved person's appraisal. |

The lived/archive output is therefore directionally strong. Repair every unbounded “does not
survive” statement to name the searched corpus or record set. Missing testimony is an archive
finding, not evidence of agreement, gratitude, coercion, tolerance, or neglect.

## Source-level, fit, and dependence audit

| source IDs | review disposition |
|---|---|
| `SRC-017000–017001` | The physical letters are primary, but the consulted web records are PGP digital editions/descriptions. Use L3-A for PGP catalog/description propositions; use L1 only for a source-language reading actually checked against the manuscript/edition. English claims are not L1 translations. Both records share `DEP-017000`, although the underlying letters are distinct. |
| `SRC-017002` | L3-A for PGP's own citation/editorial policy is sound. It is method evidence only and cannot corroborate either letter's meaning. |
| `SRC-017003` | L3-A for Hamilton's exact historic English wording is sound; C for original Arabic terminology and D for implementation are sound. It remains in `DEP-017001`. |
| `SRC-017004` | The Arabic passage directly fits the narrow doctrinal claims, but the unversioned web presentation lacks a documented critical/print-edition chain. Rate the consulted presentation L3-B pending collation; do not call it an authoritative L1 critical edition without edition provenance. |
| `SRC-017005` | L2-A is sound for Schenke's translations and attributed interpretation. The embedded instruments do not become independently opened L1 evidence merely because Schenke prints or quotes them. All P.KRU claims remain in `DEP-017002`. |
| `SRC-017006` | L3-A for ORA metadata/accepted-manuscript status only; same work as `SRC-017005`, never an independent historical confirmation. |
| `SRC-017007–017008` | `LX-D` for substantive use is correct because only abstract/metadata layers were opened. They remain upstream priorities, not evidence. |
| `SRC-017009` | Not reproducible as written. It aggregates unnamed pages, dates, wording, and chains into one source ID. Enumerate exact exemplars and upstream citations as separate L5-D leads or remove this record and call the present exercise a heuristic myth audit, not a completed reception-chain audit. |

The four dependency groups are directionally correct. Preserve these specific burdens:

- `DEP-017000`: two separate manuscripts but one PGP/Elbaum editorial chain; shared modern
  wording cannot count as independent corroboration;
- `DEP-017001`: Hamilton/al-Marghinani and al-Kasani are related Hanafi doctrinal evidence, not
  independent evidence of courts, families, diagnoses, or treatment;
- `DEP-017002`: P.KRU 79/80/104 and contextual 87/90 are multiple documents but every modern
  translation/interpretation in the packet passes through Schenke; and
- `DEP-017003`: packet audits derive from the first three groups and create no new independent
  evidence.

## Record-architecture audit

### Source records

The compact source ledger does not satisfy the canonical source schema or minimum ledger row.
Each `SRC` record must explicitly resolve controlled `source_type` plus subtype; creator role;
creation/publication/edition dates; version; container; publisher/holder; consulted and original
language; translator; identifier; stable and archival URL; accessed/opened dates and researcher;
full-text location; geography/time/population; provenance; rights; cultural protocol; source
position; limitations; independence; verification status; exact locator; claim-relative level and
fit; and upstream check. Restricted/rejected records require a controlled status and reason.

Do not use a single row to rate an underlying manuscript L1 while the only consulted English
meaning comes from an L3 description. Resolve source layer and claim job explicitly.

### Evidence records

The evidence table omits required evidence form, minimally sufficient quotation/description,
translation and translator, original-text handling, context, speaker/subject, recorder/editor,
method, directness, representativeness, limitations, sensitivity, researcher note, extractor/date,
and controlled verification status.

Several current source links also require exact repair:

- `EVD-017000` must enumerate the seven core items/passages rather than cite the inclusive
  `SRC-017000–017006` range, which includes method/metadata records and does not itself identify
  three P.KRU deeds;
- split `EVD-017001` and `EVD-017002` where source-language transcription and PGP English
  description do different evidentiary work;
- `EVD-017003` must define the exact two-record search that supports its archive-silence claim;
- `EVD-017006` must not treat al-Kasani as a collation of Hamilton/al-Marghinani;
- `EVD-017008` must distinguish the complete Schenke appendices for P.KRU 79/104 from her
  excerpted discussion of P.KRU 80;
- `EVD-017009` must identify P.KRU 87 and 90 as contextual material outside the three-item core;
- `EVD-017010` and `EVD-017012` currently cite other evidence IDs as though they were source
  records; encode them as explicit researcher audits with method and upstream source set;
- `EVD-017011` has malformed abbreviated source IDs (`017001`, `017003`–`017005`); expand every
  source ID in full; and
- `EVD-017013` and `EVD-017014` use “all retained sources” rather than an auditable exact source
  list and search method.

### Claim and disagreement records

The claim entries contain useful narrative limits but omit controlled `claim_type`, complete
time/geography/population, universality, controlled evidence label, current-evidence note where
relevant, explicit anachronism risk, sensitivity, creator/date, and controlled review status.
Normalize them without deleting the existing prose limits.

The three `DIS` rows do not implement the required disagreement record: bounded scope,
steel-manned credible positions, evidence relationships, reasons for difference, areas of
agreement, current expert distribution when knowable, rejected fringe readings, approved public
wording, and reviewer/date. `DIS-017001` especially cannot be resolved from Schenke alone.

## Claim and relationship dispositions

All 15 retained claim IDs resolve within `CLM-017000–017014`; all 18 relationship IDs resolve
within `REL-017000–017017`; all relationship endpoints exist; every claim has at least one typed
edge. There are 10 source IDs, 15 evidence IDs, and three disagreement IDs. This is syntactic
coverage, not semantic validation.

| claim / relationship | disposition and required repair |
|---|---|
| `CLM-017000`; `REL-017000` | Retain after the seven-item core and archive groups are explicitly enumerated. Method/metadata sources do not count as additional historical items. |
| `CLM-017001`; `REL-017001` | Retain as a claim about one letter in Elbaum's PGP edition/description. Split transcription from editorial-description evidence and add manuscript-image/specialist status. |
| `CLM-017002`; `REL-017002` | Retain as the father's proposed response. Attribute “physicians” to the PGP gloss and keep action, assent, encounter, treatment, and outcome Unknown. |
| `CLM-017003`; `REL-017003` | Narrow to “no reply is linked or identified in the two opened PGP records.” A wider “survives” claim requires a defined corpus search. |
| `CLM-017004–017005`; `REL-017004–017005` | Retain as al-Kasani's printed doctrine with provisional project glosses. Downgrade the current unversioned web presentation pending print/critical-edition provenance. No implementation follows. |
| `CLM-017006`; `REL-017006–017007` | Hamilton supports what Hamilton reports. Add direct Arabic al-Marghinani evidence for the underlying dispute. Move or retype `REL-017007`: al-Kasani is related doctrinal context, not a direct qualification/collation of this reported disagreement. |
| `CLM-017007`; `REL-017008` | Retain as P.KRU 80's represented narrative and prescribed duties through Schenke. Do not state cure, performance, benevolence, assent, or outcome as fact. |
| `CLM-017008`; `REL-017009` | **Mandatory narrowing.** Replace the P.KRU 80 clause with “Schenke's opened discussion does not report the child's assent” until the complete deed/translation is opened. Keep P.KRU 79 assent and P.KRU 104 capacity formula as mediated legal representations. |
| `CLM-017009`; `REL-017010–017011` | Retain only with core/context split. Nourishment/clothing comes from contextual P.KRU 87/90 in Schenke; authority/labor/payment is distributed across documents. Add competing status scholarship before elevating the interpretation. |
| `CLM-017010`; `REL-017012` | Retain as a bounded corpus limitation, not a cultural conclusion. “Cannot support either universal” is safer than a finding about actual prevalence. |
| `CLM-017011`; `REL-017013` | Retain only as “the selected packet corpus does not support a demonology-only account.” It does not complete a popular origin/continuity chain or quantify explanations in any community. |
| `CLM-017012`; `REL-017014–017015` | Retain as a warning against an absolute binary across two separate settings. The sources do not show quantified coexistence, one integrated system, or local combination of every response type. |
| `CLM-017013`; `REL-017016` | Retain. Add the missing implementation source/search result required by the brief and keep every negative bounded to the opened corpus. |
| `CLM-017014`; `REL-017017` | Retain as a modern-diagnosis prohibition. It is an evidence limit, not a current-science diagnosis or proof that no historical condition existed. |

Every consequential `REL` must carry or resolve to the actual claim-relative L1–L5/LX level,
A–D fit, and dependence group. Method, rights, metadata, a related doctrine, and several deeds
within one translation chain cannot be counted as independent corroboration.

## Reception-chain audit

The packet's four cautions are worthwhile, but only as bounded research safeguards in their
current form:

| popular story | review status |
|---|---|
| universal family care | Two letters and several deeds cannot establish or refute a universal social pattern. The packet can say its corpus contains both support and pressure/dependence. |
| universal tolerance | A fixed-penalty rule, family appeals, and shrine deeds do not supply a commensurable tolerance measure. Avoid the category unless a defined historical proposition and chain are named. |
| demonology-only | The selected sources include non-demonological categories and therefore do not support an exclusive account of this corpus. This is not a prevalence result or a completed history of the popular claim. |
| religion versus medicine | The selected evidence defeats an absolute packet-level binary. It does not establish universal harmony, secularization, or a stable “religion”/“medicine” division. |

To call these reception-chain audits, enumerate the exact popular exemplars, access dates,
wording, citations, shared origins, and upstream evidence. `SRC-017009` cannot stand for several
unnamed webpages. Otherwise relabel the section “myth-risk safeguards” and preserve all broad
historical questions as deferred.

## Rights and cache replay

The ignored cache contained exactly seven files. Independent replay matched every ledger hash:

| file | replayed SHA-256 | rights / disposition |
|---|---|---|
| `pgp-ts-6j4-20.html` | `835fbd0ae0146ff9d3fd44fa78982d8fc51ea71d82301e4ab0a901931451f222` | Private ignored research capture. PGP explicitly permits use of descriptions/transcriptions with citation; record site version/access date. Do not infer a license for manuscript images. |
| `pgp-aiu-vii-e-149.html` | `3c632db6afa951a0ac258bf55a8d3df9cfe086d403f824fbc6e303ed9221684c` | Same disposition. No manuscript image is contained in the cache. |
| `hedaya-v2-image-148.jpg` | `7e2b701f374afb1a2e8883edbb33cbd8712e57c4db65723597e2f7f5471b4b48` | LOC “no known restrictions” page capture; cache-safe. |
| `hedaya-v2-image-148-ocr.txt` | `2fda01d2916a7eca38b5390acb8068676db24268d4d2fdb3668d34c0e4af1b59` | Derivative OCR of same LOC page; same dependence, not separate evidence. |
| `hedaya-v2-image-149.jpg` | `48d671487b38ad87f86f3edbc6a257ab12c7f996694c664b2136d43b9518bbd0` | LOC “no known restrictions” page capture; cache-safe. |
| `hedaya-v2-image-149-ocr.txt` | `f542124bbe864c3e903b0bd829e544e59c66a73ded840bb411471091b81c3dc1` | Derivative OCR of same LOC page; same dependence, not separate evidence. |
| `schenke-phoibammon-accepted-manuscript-2016.pdf` | `741884c9410016391cbeaa4e244d55f5bd5377677f6b224519f1f52f62329f9f` | Copyrighted accepted manuscript; private research only, no redistribution or public quotation beyond lawful limits. |

All seven files resolve through `.gitignore`, and `git ls-files` returned no tracked cache file.
The cache therefore passes the technical ignore/checksum gate. The ledger should still separate
“PGP permits cited use of descriptions/transcriptions” from a claim that complete captured HTML
is openly licensed; keep the HTML private/ignored. ORA supplies repository access and metadata,
not a general redistribution license for the Schenke manuscript.

## Exact mandatory repairs

1. **Normalize the canonical schemas.** Expand all 10 `SRC`, 15 `EVD`, 15 `CLM`, three `DIS`,
   and 18 `REL` records to the evidence-model fields and controlled values. Preserve IDs.
2. **Separate the Geniza layers.** Distinguish manuscript/transcription, PGP catalog record,
   English editorial description, and any translation. Add PGP version/access date and exact
   editor/translator status for each proposition.
3. **Narrow `CLM-017003` / `EVD-017003` / `REL-017003`.** Limit reply silence to the two opened
   PGP records unless a wider defined corpus search is performed.
4. **Add the exact Arabic al-Marghinani control.** Open an edition-accountable Arabic
   *al-Hidāya* witness for Book VIII, record exact page/line/edition, and collate it with Hamilton.
   Keep Hamilton as a historically mediated 1791 English witness.
5. **Repair `REL-017007`.** Al-Kasani may contextualize related Hanafi doctrine but cannot
   qualify or validate Hamilton's exact al-Marghinani dispute without direct collation.
6. **Add full specialist legal and social history.** Open Dols or an equivalent full specialist
   treatment and trace its upstream legal texts. Do not use an abstract. Record credible
   differences among category, legal capacity, penalty, guardianship, status, and practice.
7. **Meet the implementation-evidence requirement.** Add a court record, responsum/case,
   petition, shrine account/dispute, or a documented systematic unsuccessful search. Mark every
   unobserved action/outcome **Unknown**; do not treat manuals or deeds as compliance data.
8. **Open the P.KRU edition/translation chain.** Add Crum–Steindorff's original 1912 Coptic
   edition, identify any 1971 reprint separately, open Till's translation, and record exact
   repository/shelfmark/date/provenance for P.KRU 79, 80, and 104. A reviewer replay is not a
   packet source record.
9. **Repair P.KRU 80 consent wording.** Until the complete deed/translation is replayed, say only
   that Schenke's opened discussion does not report the child's assent. Update `EVD-017008`,
   `CLM-017008`, `REL-017009`, findings, and lived-experience wording consistently.
10. **Open a competing P.KRU interpretation.** Replay at least one serious status/labor/poverty
    reading cited by Schenke plus its source basis. Complete `DIS-017001`; keep public status
    wording blocked meanwhile.
11. **Separate P.KRU core from context.** Identify P.KRU 87/90 as contextual parallels wherever
    they support nourishment/clothing; do not present them as part of the three-deed core or as
    affected-person testimony.
12. **Repair evidence-source resolution.** Replace source ranges, abbreviated IDs, other-EVD
    pseudo-sources, and “all retained sources” with exact source sets and explicit researcher-audit
    methods.
13. **Normalize dual ratings.** Rate the consulted PGP descriptions and unversioned al-Kasani web
    text as the layers actually opened; resolve each consequential relationship to source level,
    claim fit, and dependence. Do not count OCR, metadata, related doctrine, or one editor/article
    twice.
14. **Make reception work auditable.** Enumerate and trace the popular exemplars represented by
    `SRC-017009`, or quarantine/delete that aggregate and rename the present sections as
    myth-risk safeguards rather than completed reception chains.
15. **Preserve rights precision.** Record PGP's explicit cited-use guidance and site version,
    keep the HTML private/ignored, keep Schenke private/ignored and nonredistributable, and rerun
    all seven hashes and tracked-file checks after repair.
16. **Complete an independent closure replay.** Recheck the pivotal source locators, all 017xxx
    endpoints, claim coverage, dependency groups, ratings, rights, and scope before changing the
    internal gate.

## Nonblocking future/publication gaps

Even after the mandatory packet repair, publication would still require specialist
Judaeo-Arabic/Coptic/Arabic wording review, quotation clearance, fuller social and disability
history, current community/stakeholder review appropriate to sacred and custodial materials, and
additional affected-person or implementation evidence where discoverable. These are not license
to invent missing experience.

The packet must remain bounded to two Fustat-linked letters, named late-twelfth-century Hanafi
texts, and the Apa Phoibammon/Jeme deed chain. It cannot stand for all Jewish households, Copts,
Hanafi law, medieval families, shrines, or the Islamicate world between 750 and 1400.

## Final gate

**RETURN.** The packet is not eligible for internal-outline extraction, Batch 03 seam synthesis,
or public prose until all 16 mandatory repair groups are completed and independently replayed.
The existing careful wording is worth preserving, but it does not substitute for the missing
source layers, implementation evidence, canonical record fields, and reproducible reception
chains.

## Independent closure replay — 2026-08-18

**Closure reviewer:** independent Codex packet reviewer
**Packet/cache state during replay:** read-only
**Closure verdict:** **RETURN — five narrow record/wording repairs remain**
**Internal-outline gate:** **closed**
**Public-prose gate:** **closed**

### Closure decision

The substantive return work is largely successful. Direct replay confirms that the packet now
separates the Geniza transcription and editorial-description layers; limits reply silence to the
two opened PGP records; collates Hamilton with an edition-accountable Arabic *al-Hidāya*;
retypes al-Kasani as related Hanafi context; opens the Crum–Steindorff base text and Richter's
competing P.KRU interpretation; narrows P.KRU 80 assent to what Schenke's discussion reports;
separates the three-deed core from P.KRU 87/90 context; quarantines the unreproducible popular
aggregate; and preserves source dependence, rights, and missing affected-person voice.

The packet cannot yet pass the canonical-record and reproducibility parts of the return. Nine
claims use values outside the evidence model's controlled `universality` vocabulary, the claimed
implementation-search result links are absent, and one lived-experience sentence still says the
competing P.KRU works were not opened even though Richter is now an opened core counter-reading.
Two findings sentences also exceed their replayed source: al-Kasani's opened chapter is a theft
discussion, not itself a “theft/robbery discussion,” and an all-male donation/service dossier does
not establish male-only shrine or healing access. These are bounded record defects. They do not
reopen the packet's historical scope or authorize new public prose.

### Sixteen-group replay

| repair group | closure result | replay evidence and remaining action |
|---|---|---|
| 1. Canonical schemas | **RETURN** | All 16 `SRC`, 19 `EVD`, 15 `CLM`, three `DIS`, and 24 `REL` records now expose the required fields, and source/claim types and evidence labels are controlled. However, `CLM-017000`, `017003`–`017006`, `017008`–`017009`, and `017013`–`017014` use `local/corpus`, `individual/corpus`, `local/textual`, or `corpus`. The evidence model permits only `individual`, `local`, `regional`, `transregional`, `global`, or `unknown`. Normalize these nine records without changing their corpus/textual scope fields. |
| 2. Geniza layers | **PASS** | `SRC-017000`/`017001` and `EVD-017001`/`017002` versus `017015`/`017016` separate PGP English descriptions from Judaeo-Arabic transcriptions and explicitly state that no English translation is displayed. The cached pages show Elbaum's 2022/2023 editions and PGP v4.30.0. L3-A description and L1-B checked-transcription jobs are not counted independently. |
| 3. Reply silence | **PASS** | Both opened PGP records currently display `Related Documents (0)`. `CLM-017003`, `EVD-017003`, findings, and lived/archive wording consistently limit the claim to no reply linked or identified in those two records; wider Geniza survival remains Unknown. |
| 4. Arabic al-Marghinani | **PASS** | Direct inspection of Bakdash, *al-Hidāya*, vol. 4, pp. 153–54 confirms `ṣabī aw majnūn`, the Abu Hanifa/Zufar–Abu Yusuf disagreement, and principal/dependent-act reasoning. Hamilton's printed pp. 134–35/LOC images 148–49 report the same dispute through Persian and dated English. `SRC-017010`/`EVD-017006` preserve the two layers and do not claim court implementation. |
| 5. `REL-017007` | **PASS EDGE; ONE FINDINGS WORDING REPAIR** | The edge is now `EVD-017004 contextualizes CLM-017006`, L3-C, `DEP-017001`; it no longer treats al-Kasani as a translation check or direct qualification of al-Marghinani. `FINDINGS.md` nevertheless calls al-Kasani's page a “theft/robbery discussion”; the opened chapter is specifically a theft discussion. Narrow that phrase without changing the related-doctrine relationship. |
| 6. Specialist legal/social history | **PASS WITH PUBLICATION HOLD** | Full Alaghbri is opened and explicitly bounded to five Ashʿari jurist-theologians, mostly Shafiʿi; it qualifies category/capacity collapse but is D-fit for the named Hanafi rule or practice. Dols remains incomplete/rejected and Mian remains unopened. The requested broad Hanafi legal/social history is therefore still a publication gap and must not be inferred from Alaghbri. |
| 7. Implementation evidence/search | **RETURN FOR RECORD REPAIR; SUBSTANTIVE RESULT REMAINS UNKNOWN** | `SRC-017015` and the handoff preserve four exact queries and broad result classes, and every rule/deed claim correctly refuses to infer compliance or outcome. But `SRC-017015` says “result URLs in handoff”; the handoff contains no result URLs, screened-result inventory, result count, or named search engine. Either add the actual reproducible screened-result trail, or relabel this as a bounded heuristic search rather than a documented systematic search. In either case, implementation remains Unknown and public use remains blocked. |
| 8. P.KRU edition/translation chain | **PASS WITH TILL HOLD** | `SRC-017012` correctly separates Crum–Steindorff's original 1912 edition from the consulted later facsimile reprint and records P.KRU 79 pp. 256–60, 80 pp. 260–63, and 104 pp. 321–23, dates, historical shelfmarks, insecure find-provenance, and inferred archive. Till 1964 is catalogued but unopened/restricted (`SRC-017013`, LX-D) and adds no substantive evidence. Full translation-level publication remains blocked. |
| 9. P.KRU 80 assent | **PASS** | Every retained claim says only that Schenke's opened discussion does not report Abraham's assent. `EVD-017008`, `CLM-017008`, findings, and lived/archive notes prohibit a full-deed silence claim until Till or another complete translation is opened. |
| 10. Competing P.KRU interpretation | **RETURN FOR ONE CONSISTENCY REPAIR** | Richter 2005 is opened in full and supplies a serious counter-reading at pp. 244–45, 251–54, and 259–61; `DIS-017001`, `EVD-017018`, and `REL-017011`/`017022`/`017023` preserve lexical, labor, formula, and agency disputes. But `LIVED-EXPERIENCE-AND-ARCHIVE.md` still says the competing poverty/unwanted-child works “were not opened.” Narrow that sentence: Richter is opened; other earlier works he and Schenke map were not independently opened; individual poverty remains unresolved. Settled status labels stay blocked. |
| 11. Core/context split | **PASS SPLIT; ONE SCOPE-WORDING REPAIR** | P.KRU 79/80/104 remain the core; nourishment and clothing are explicitly attached to contextual P.KRU 87/90 in `EVD-017009`, `CLM-017009`, findings, and handoff. No contextual deed is counted as an additional core item or affected-person voice. But `FINDINGS.md` says the documents show “male-only access.” The opened evidence establishes an exclusively male donation/service dossier, not male-only shrine or healing access; narrow that sentence. |
| 12. Evidence-source resolution | **PASS** | Evidence records enumerate full `SRC-017xxx` sets; no source range, abbreviated source ID, EVD-as-source endpoint, or “all retained sources” remains. Researcher audits state their method and add no independent historical weight. |
| 13. Dual ratings and dependence | **PASS, SUBJECT TO GROUP 1 NORMALIZATION** | PGP descriptions are L3-A; transcriptions are L1-B only for checked source-language wording; al-Kasani is L3-B; Hamilton is L3-A for his wording and D for implementation; Till and incomplete Dols are LX-D. `DEP-017000`–`017006` prevent OCR, metadata, related doctrine, editions, or shared dossiers from being double-counted. Every relationship carries level/fit/dependence and a permitted verb. |
| 14. Reception work | **PASS BY QUARANTINE** | `SRC-017009` is rejected LX-D, has no evidence or relationship edge, and findings are consistently labeled “myth-risk safeguards (not completed reception chains).” The packet does not claim origin, prevalence, or continuity of the four popular stories. |
| 15. Rights/cache precision | **PASS** | The cache contains exactly 12 ignored, untracked files. All 12 SHA-256 values match the ledger. PGP permits cited use of descriptions/transcriptions but not blanket page/image reuse; the T-S image permission is separately restrictive. Hamilton/LOC is recorded no-known-restrictions; Schenke, Bakdash, Richter, Alaghbri, Dols, and PGP HTML captures remain private/ignored under their recorded dispositions. |
| 16. Independent closure replay | **COMPLETE WITH RETURN** | All pivotal locators, source layers, record counts, graph endpoints, dependencies, rights, and cache hashes were replayed independently. Because groups 1 and 7, the group-10 consistency sentence, and the two findings precision defects remain, this closure cannot open the internal gate. |

### Structural and cache validation

- Records: **16 unique sources**, **19 unique evidence records**, **15 unique claims**, **24 unique relationships**, and **three unique disagreements**, all within `017000–017999`.
- Graph: all 24 relationship IDs are unique; all evidence and claim endpoints resolve; all verbs
  are permitted; claim coverage is **15/15** and evidence coverage is **19/19**.
- Source resolution: every `SRC-017xxx` named in an evidence record resolves. `SRC-017009` is
  quarantined; `SRC-017013` and `SRC-017008` add no substantive evidence.
- Cache: exactly **12** files; all ledger hashes replay; every file resolves through `.gitignore`;
  `git ls-files` returns no cached artifact.

### Exact repairs required for the next closure replay

1. Replace the nine non-controlled `universality` values with one allowed value per claim; keep
   “corpus” and “textual” in population/geographic/wording limits rather than encoding them as a
   second universality vocabulary.
2. Repair `SRC-017015`'s false pointer to result URLs. Add a reproducible screened-result trail or
   explicitly downgrade the four-query exercise to a bounded heuristic search. Do not alter the
   Unknown implementation conclusion.
3. Update the stale lived/archive sentence so it acknowledges Richter as opened while preserving
   that other antecedent poverty/exposure interpretations were not independently replayed and no
   individual poverty motive is established.
4. In `FINDINGS.md`, narrow al-Kasani's “theft/robbery discussion” to “theft discussion”; keep
   robbery-party doctrine attached to al-Marghinani/Hamilton and the existing contextual edge.
5. In `FINDINGS.md`, replace “male-only access” with “an exclusively male donation/service
   dossier” or equally bounded wording. Do not infer male-only shrine or healing access.

### Publication gaps that remain mandatory even after these repairs

- **Till/translation:** Till 1964 and a complete translation-level replay of P.KRU 80 remain
  unavailable; no complete-deed consent-silence claim or settled status label may publish.
- **Legal history:** Dols is incomplete, Mian is unopened, and Alaghbri is Ashʿari rather than a
  Hanafi social/practice history. No broad capacity, guardianship, status, or practice synthesis
  may publish.
- **Implementation:** the search is bounded and currently nonreproducible as a screened result set;
  no court application, compliance, enforcement, resistance, treatment, or outcome is established.
- **Language and voice:** Judaeo-Arabic, Arabic, and Coptic wording still requires specialist review;
  affected addressee/child appraisal remains absent from the opened core.

**Final closure verdict: RETURN.** The historical repairs may be retained, but the internal-outline
gate remains closed until the five exact record/wording defects above are corrected and replayed. Public
prose remains closed regardless, with the Till, specialist legal-history, implementation, language,
rights, and missing-voice holds carried forward.

## Final five-repair replay — 2026-08-18

**Closure reviewer:** independent Codex packet reviewer
**Packet/cache state during replay:** read-only
**Closure verdict:** **RETURN — one narrow relationship-rating repair remains**
**Internal-outline gate:** **closed**
**Public-prose gate:** **closed**

### Decision

The five requested record and wording corrections now pass. Universality values are controlled;
`SRC-017015` is transparently a heuristic memo rather than a reproducible systematic search;
Richter's opened status and the unopened antecedent scholarship are separated; al-Kāsānī's page
is correctly described as theft rather than robbery doctrine; and the surviving donation/service
dossier is described as all male without converting that corpus fact into an exclusion claim
about shrine or healing access.

One dependent graph field was not updated with the `SRC-017015` downgrade. `REL-017003` still
assigns `L3/L5-A` to the combined silence relationship and says that the “two-record/link search”
bounds silence. The opened PGP record/link states can carry **L3-A** for the exact observation
that neither record links or identifies a reply. The nonreproducible `SRC-017015` heuristic memo
is **L5-D** for absence, survival, implementation, or outcome and adds no proof to that
observation. The edge must distinguish those two ratings and jobs before the final internal gate
opens.

### Five requested repairs

1. **Controlled universality: PASS.** All 15 canonical claims now use only `individual`,
   `local`, or `unknown`, all allowed by `EVIDENCE-MODEL.md`. Corpus and textual bounds remain
   in scope and wording fields rather than being encoded as compound universality values.
2. **`SRC-017015` heuristic/Unknown repair: PASS, subject to `REL-017003` below.** The source
   record contains the four exact queries, states that no candidate-by-candidate screened-result
   trail survives, removes the false result-URL pointer, and rates itself L5-D for implementation
   evidence or nonexistence. `CLM-017013`, `EVD-017013`, findings, and handoff consistently keep
   implementation and unobserved outcomes **Unknown**.
3. **Richter wording: PASS.** The lived/archive audit now states that Richter was opened and
   summarizes his competing economic/status readings. It separately says that antecedent works
   mapped by Richter and Schenke were not independently opened and refuses to assign poverty as
   the motive of any individual donation.
4. **Theft versus robbery: PASS.** Findings now describes al-Kāsānī's direct page as a theft
   discussion. Al-Marghīnānī/Hamilton remains the distinct robbery-party doctrine chain, and the
   contextual relationship does not turn al-Kāsānī into a translation check.
5. **All-male dossier without access inference: PASS.** Findings and the lived/archive audit
   limit the observation to the known donation/service dossier discussed in the packet. The
   latter explicitly states that this does not prove girls were excluded from shrine access or
   healing.

### Residual mandatory repair

- In `CLAIM-MAP.md`, revise `REL-017003` so its level/fit field distinguishes **L3-A for the two
  opened PGP record/link states** from **L5-D for the `SRC-017015` heuristic memo**. Its rationale
  must state that only the opened record/link state supports the bounded observation and that the
  heuristic adds no absence or non-survival proof. Do not change the retained two-record wording
  or upgrade the implementation conclusion.

### Graph, cache, and preserved gaps

- Structural replay remains otherwise clean: **16 sources**, **19 evidence records**, **15
  claims**, **24 relationships**, and **three disagreements**; all IDs are unique and in range,
  all relationship verbs and endpoints are valid, claim coverage is **15/15**, evidence coverage
  is **19/19**, and every evidence source ID resolves.
- The private cache contains exactly **12 files** totaling **55,348,405 bytes**. Every SHA-256
  value matches the manifest; all 12 files are ignored and none is tracked. The differentiated
  PGP, LOC, copyrighted/private, repository, OCR-dependence, and rejected-Dols rights notes remain
  intact.
- **Publication gaps remain unchanged:** Till 1964 and complete P.KRU translation replay;
  broader Hanafi legal/social and disability history; reproducible implementation/application
  evidence; specialist Judaeo-Arabic, Arabic, and Coptic review; quotation and rights review;
  and missing affected-person voice. No court application, compliance, enforcement, resistance,
  treatment, or outcome may be inferred from the heuristic search.

**Final gate:** **RETURN.** Correct the single `REL-017003` rating/job mismatch and replay that
edge. The five requested content corrections remain accepted; public prose remains closed
regardless, with the Till, legal-history, implementation, language, rights, and voice holds
preserved.

## Final one-edge closure — 2026-08-18

**Closure verdict:** **PASS WITH GAPS**
**Packet/cache state during replay:** read-only
**Internal-outline gate:** **open with controls**
**Public-prose gate:** **closed**

The last structural defect is closed. `REL-017003` now assigns **L3-A** only to the two opened
PGP record/link states supporting the bounded proposition that neither opened record links or
identifies a reply. It separately assigns **L5-D** to the nonreproducible `SRC-017015` heuristic
memo and states that the heuristic contributes no proof of absence, non-survival, or historical
corroboration. `CLM-017003` remains limited to the two opened records; wider Geniza survival is
not inferred.

Independent graph replay is unchanged and clean: **16 sources**, **19 evidence records**, **15
claims**, **24 relationships**, and **three disagreements**; all relationship verbs and endpoints
are valid; claim coverage is **15/15** and evidence coverage is **19/19**. The private cache is
also unchanged: **12 files**, **55,348,405 bytes**, all manifest SHA-256 values match, all files
are ignored, and none is tracked.

The packet may now enter bounded outline reconciliation with every existing source-layer,
dependency, anachronism, sensitivity, and missing-voice control intact. This closure does not
upgrade the heuristic memo, establish implementation, or authorize public prose.

Publication holds remain mandatory: Till 1964 and a complete translation-level P.KRU replay;
broader Hanafi legal/social and disability history; reproducible implementation/application
evidence; specialist Judaeo-Arabic, Arabic, and Coptic review; quotation and rights review; and
missing affected-person voice. No court application, compliance, enforcement, resistance,
treatment, outcome, complete-deed consent silence, settled status label, or wider reply-survival
claim is authorized.
