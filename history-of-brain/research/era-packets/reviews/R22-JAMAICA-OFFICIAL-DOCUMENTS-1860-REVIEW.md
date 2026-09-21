# Independent cross-review — R22-JAMAICA-OFFICIAL-DOCUMENTS-1860

**Review date:** 2026-08-19

**Reviewer:** independent Codex packet reviewer

**Reviewed state:** the frozen brief, five packet outputs, complete dossier, and ignored source
cache; packet and cache remained read-only

**Verdict:** **RETURN FOR MANDATORY SCHEMA REPAIR**

**Public-content state:** **blocked; no public prose, quotation, patient image, or facsimile reuse**

## Decision

The historical and ethical research is strong enough for bounded internal use after repair, but
the packet cannot enter outline reconciliation in its present form because every relationship
record is structurally noncanonical and 21 evidence controlled values use the wrong case. These
are systematic validation defects, not historical disagreements: all 57 relationship records use
`relationship_type` and `review_status` instead of `relation` and `status`, and none contains the
required `withdrawal_reason`. Seventeen `directness` values use `direct` rather than `Direct`; four
`sensitivity` values use `public` rather than `Public`.

The dossier itself survived independent replay. The packet properly treats *Official Documents*
as a government-directed institutional counter-dossier that also preserves inquiry procedure and
competing statements. It attributes rather than adjudicates allegations, keeps worker and former-
patient statements bounded to what each speaker said or observed, and does not infer race from
speech, occupation, a mark, or institutional role. It also keeps Ann Pratt's separate pamphlet and
the 1861 commission testimony/report unopened at `LX/HOLD`.

No substantive claim needs withdrawal on the present evidence. The return is required so the
typed evidence graph is machine-valid and cannot silently diverge from the project's canonical
`SRC -> EVD -> CLM -> REL` model.

## Materials and method

The reviewer read `PROJECT-BRAIN.md`, the governing evidence model and source protocol, the packet
brief, all five packet outputs, the complete OCR route, and the complete 56-page historical object.
The twelve declared pivotal Wellcome images were replayed against the packet's evidence records.
The adjacent printed p.56 image was also checked because it completes the governor's distribution
direction begun on p.55. Current Wellcome catalog metadata and the Public Domain Mark were checked
at the institutional record.

The review did not open or infer the wording of Pratt's separate *Seven Months* pamphlet, the 1861
commission testimony, or the commission report. It did not adjudicate alleged acts, assign a
modern diagnosis, infer patient or worker identity from stereotype, or authorize any public use.

## Dossier and image replay

| Wellcome leaf | Printed page | Risk-bearing material replayed | Result |
|---:|---:|---|---:|
| 12 | 9 | Pratt's elicited account of arrival, clothing/food controls, forced bathing, stripping, and handling | **PASS** — correctly attributed as her report, not adjudicated fact |
| 14 | 11 | Pratt's report of blocked complaint, sexualized and racialized degradation, and physical handling | **PASS** — minimum-necessary description and harm controls retained |
| 31 | 28 | John Hall's bounded denials, uncertainty outside his presence, and reported patient food complaints | **PASS** — denial and uncertainty are not generalized |
| 35 | 32 | Catharine Fare on bathing, food, clothing, patient assistance, and mixed satisfaction | **PASS** — mixed account preserved |
| 38 | 35 | Fare's help holding another patient, limits on what she saw, and examination procedure | **PASS** — worker/participant position remains explicit |
| 43 | 40 | Mary Donaldson on complaints, fear, reporting routes, and institutional questioning | **PASS** — reported speech and observation remain separate |
| 46 | 43 | Caleb Hall on a black eye, staff explanation, complaints, and refusal to contact Reverend Watson outside his duty | **PASS** — observation, hearsay, and duty boundary remain distinct |
| 48 | 45 | Trench's clergy-mediated family chain concerning another patient | **PASS** — no direct family voice is invented |
| 51 | 48 | certified-copy and enclosure chain plus Hanover response concerning Pratt's pamphlet | **PASS** — bureaucratic mediation is visible |
| 55 | 52 | hostile legal, capacity, family, police, and credibility material | **PASS** — institutional character attack is not adopted as fact |
| 57 | 54 | Brebner's retrospective period classifications, bodily/intimate material, and restraint account | **PASS** — period labels are not converted into modern diagnosis |
| 58 | 55 | mother/friend traces, transport account, and beginning of the governor's publication order | **PASS** — family mediation and institutional purpose stay bounded |

Printed p.56, Wellcome leaf 59, completes the circulation order: island officials, religious
ministers, legislators, West India interests, former Jamaica residents, British newspapers, and
medical journals were named recipients. This supports `EVD-034001` and `CLM-034001` without
requiring an inference that every intended recipient actually received or read the pamphlet.

## Voice, procedure, and power audit

The packet passes the substantive voice test:

- Pratt's dossier statement is identified as elicited, read back, corrected, signed, and
  witnessed, while remaining institutionally recorded and distinct from her unopened pamphlet.
- Her refusal of an ex parte or private appearance and request for counsel/supporters are treated
  as bounded procedural agency, not as consent to confinement, treatment, publication, or every
  later question.
- Emma Steele and Catharine Fare remain former-patient examinations with mixed accounts; John
  Hall, Mary Donaldson, and Caleb Hall remain differently situated worker/officer records.
- family material remains mediated through warrants, officials, clergy, surgeons, or reported
  speech. The packet does not manufacture a family-authored statement.
- official denial, medical classification, witness selection, and hostile credibility material
  remain evidence of institutional positions and archival power, not proof that allegations were
  true or false.

The packet also passes the scope ceiling. One Kingston-centered dossier cannot establish
institutional prevalence, representative outcomes, consent, efficacy, all Jamaican practice, a
Caribbean pattern, or a global history. Historical terms including *mania* and *melancholia* remain
source categories. No graph edge treats the Wellcome and Internet Archive conduits as independent
corroboration of the same Glasgow object.

## Disagreement audit

All four disagreement records preserve serious positions without false equivalence:

1. `DIS-034000` separates reports of coercion, injury, blocked complaint, and fear from denials,
   narrowing, and official reframing; it does not adjudicate intimate allegations.
2. `DIS-034001` keeps the warrant's no-support formula in tension with later mediated mother,
   relative, and friend traces while identifying the absence of direct family testimony.
3. `DIS-034002` treats the object as both inquiry artifact and institutionally controlled counter-
   publication rather than calling it either a neutral transcript or simple propaganda.
4. `DIS-034003` preserves distinct reported meanings and uses of forced bathing or “tanking”
   rather than imposing one universal purpose.

Their `approved_public_wording` fields are research ceilings only. Each record remains explicitly
`not approved`, so none is a publication authorization.

## Unopened-source holds

The three `LX/HOLD` boundaries survive review:

- `SRC-034007` / `EVD-034025`: Pratt's separate *Seven Months* pamphlet, mapped to TNA
  `CO 137/350`, dispatch 118, fols.429–441, was not opened. Its exact wording, authorship layers,
  and relation to the dossier statement remain unknown.
- `SRC-034008` / `EVD-034026`: the five 1861 commission testimony volumes at
  `CO 137/359–363` were not opened. A specialist's archival lead does not supply testimony.
- `SRC-034009` / `EVD-034027`: the commission report at `CO 137/364` was not opened. Its findings,
  reasoning, and exact language remain unknown.

Fryar and Jones may route future acquisition and contextualize the larger archive; they do not
replace unseen primary folios. The packet correctly blocks claims that the inquiry, publication,
law, building, or commission caused improved care.

## Rights, privacy, community, and harm controls

The Wellcome institutional record currently identifies the 1860 object as Public Domain Mark,
describes a 56-page Kingston publication supplied by University of Glasgow Library, and supplies
a credit line. The packet correctly separates that legal-access layer from ethical clearance.
The 61 cached JPEGs comprise the Wellcome PDF's rights/credit leaf plus its sixty object images;
the catalog's “60 images” count is therefore not a cache discrepancy.

No public use is cleared. Jamaican history/language review, disability and survivor review,
dignity and privacy review, descendant/community-risk review, rights review, and harm review
remain required. Named historical people and patient-associated testimony are not anonymous
content stock. Racialized, sexualized, bodily, and violent details may not be used as SEO hooks,
shock framing, or decorative facsimiles.

## Graph and schema audit

Independent machine replay confirms the advertised object counts:

- **10** unique `SRC-034xxx` records;
- **29** unique `EVD-034xxx` records;
- **27** unique `CLM-034xxx` records;
- **57** unique `REL-034xxx` records; and
- **4** unique `DIS-034xxx` records.

All IDs remain in the allocated `034xxx` range. All relationship evidence, claim, and source
endpoints resolve; every relationship source matches its evidence source. Coverage is 10/10
sources, 29/29 evidence records, and 27/27 claims. No duplicate
`(evidence_id, claim_id, relationship_type)` tuple was found. All disagreement links and their
listed evidence/source endpoints resolve. Relationship verbs are within the controlled set, and
the L1/L2/L3/LX and A/B/C/D values are semantically appropriate.

The graph nevertheless fails the canonical record contract:

- all 57 records omit required `relation`, using `relationship_type` instead;
- all 57 omit required `status`, using `review_status:"source-verified"` instead; and
- all 57 omit required `withdrawal_reason`.

The canonical active form is `relation:"supports"` (or the existing controlled verb),
`status:"active"`, and `withdrawal_reason:""`. `created_by` and `created_on` may remain as
extensions, but they cannot substitute for required relationship fields.

Evidence required-field coverage is otherwise complete. Controlled-value casing fails in exactly
21 places:

- `directness:"direct"` must become `directness:"Direct"` in `EVD-034000`, `EVD-034001`,
  `EVD-034002`, `EVD-034003`, `EVD-034004`, `EVD-034006`, `EVD-034007`, `EVD-034008`,
  `EVD-034009`, `EVD-034010`, `EVD-034011`, `EVD-034015`, `EVD-034018`, `EVD-034019`,
  `EVD-034020`, `EVD-034024`, and `EVD-034028`;
- `sensitivity:"public"` must become `sensitivity:"Public"` in `EVD-034000`, `EVD-034001`,
  `EVD-034024`, and `EVD-034028`.

The other evidence values—`reported`, `reconstructed`, `unknown`, `sensitive`, and
`restricted`—are controlled as written.

## Cache and reproducibility audit

The ignored cache contains exactly **64** files: two complete PDFs, one locally derived OCR text
file, and 61 Wellcome JPEG leaves. Every manifest row resolves to one cache object. Independent
recomputation matched all 64 recorded byte counts and SHA-256 hashes. Both spot-checked cache
paths are covered by the repository's source-cache ignore rule, and no cache object is authorized
as a public asset.

The two source conduits remain correctly dependent:

- Wellcome PDF: 61 leaves, 14,105,433 bytes, SHA-256
  `3337aa2e15b8fc0ec4316c8c9e0ddc9756585c426186f85b189b6436f2ca8089`;
- Internet Archive derivative: 60 pages, 2,521,882 bytes, SHA-256
  `abd46fe28e95f3f5383c60e52e63feb32cf12480a5834353cd1802b3b8300b6b`;
- OCR text: 137,768 bytes, SHA-256
  `c01000887920095fea6030d958ee7c3b0d7f1fcd2d8a7dc4a270f46dd787c0c4`.

## Mandatory repairs

These repairs are conditions of the verdict. They do not authorize substantive expansion or
opening any held source.

### 1. Normalize all 57 relationship records

For `REL-034000` through `REL-034056`:

- rename `relationship_type` to `relation` without changing the controlled verb;
- replace `review_status:"source-verified"` with `status:"active"`;
- add `withdrawal_reason:""`;
- retain all IDs, endpoints, levels, fits, dependence groups/notes, and rationales unchanged.

Then revalidate required fields, unique IDs, endpoint resolution, evidence/source equality,
controlled verbs, active status, and duplicate `(evidence_id, claim_id, relation)` tuples.

### 2. Normalize evidence controlled-value casing

- Change the 17 listed `directness:"direct"` values to `directness:"Direct"`.
- Change the four listed `sensitivity:"public"` values to `sensitivity:"Public"`.
- Do not alter the historical descriptions, locators, directness of reported/reconstructed
  material, or sensitivity of patient-associated evidence.

### 3. Record and validate disposition

After repairs, add a dated packet disposition stating that the packet is eligible only for
bounded internal outline reconciliation, with all public gates and `SRC-034007–034009` holds
unchanged. Record the final validator counts and confirm the cache remains 64/64 hash-exact and
ignored.

## Holds that remain after repair

Even after schema repair, public drafting remains blocked until:

1. the separate Pratt pamphlet and 1861 commission primary materials are lawfully obtained,
   opened, and recorded—or every claim dependent on them remains explicitly Unknown;
2. Jamaican history/language and plural community/descendant-risk review address framing,
   naming, quoted speech, and archival power;
3. disability/survivor, privacy/dignity, and trauma/harm reviewers clear each proposed use;
4. asset-specific rights and credit review distinguishes the PDM historical object from site
   content, modern scholarship, and any proposed facsimile treatment; and
5. public wording preserves speaker, recorder, elicitation, directness, disagreement, scope, and
   the difference between reported experience and adjudicated event.

No modern diagnosis, prevalence, efficacy, consent, representative institutional outcome,
simple reform-causation, transparent patient voice, inferred racial identity, neutral-archive, or
regional/global claim is cleared by this review.

## Final disposition

**RETURN FOR MANDATORY SCHEMA REPAIR.** The source work, dossier replay, voice controls, power
analysis, disagreement records, holds, and cache are substantively sound. Once the 57 relationship
records and 21 controlled-value instances are normalized and the validator/disposition is
recorded, the packet may be independently closure-replayed for bounded internal outline use. It
is not public-prose ready.

## Final repair closure — 2026-08-19

**Closure verdict:** **PASS WITH GAPS — MANDATORY SCHEMA REPAIRS VERIFIED AND CLOSED**

The reviewer re-opened the repaired packet and cache read-only. All conditions of the return are
now satisfied:

- `REL-034000–034056` are 57 canonical relationship records. Each contains `relation`,
  `source_id`, `source_level`, `claim_fit`, `independence_group`, `dependence_note`, `rationale`,
  `status:"active"`, and `withdrawal_reason`. The noncanonical `relationship_type` and
  relationship-level `review_status` fields are absent.
- Evidence controlled values now contain 17 `Direct`, 5 `reported`, 4 `reconstructed`, and 3
  `unknown` directness values; sensitivity contains 4 `Public`, 22 `sensitive`, and 3
  `restricted`. No lowercase `direct` or `public` evidence value remains.
- Claim universality is controlled as 8 `Individual`, 16 `local`, 1 `transregional`, and 2
  `unknown`. The repaired capitalization does not broaden any claim.

Machine replay confirms **10 SRC / 29 EVD / 27 CLM / 57 REL / 4 DIS**, all unique and in the
`034xxx` allocation. Every relationship evidence, claim, and source endpoint resolves; every
relationship source matches the evidence source. Active coverage is 10/10 sources, 29/29
evidence records, and 27/27 claims. No duplicate `(evidence_id, claim_id, relation)` tuple exists.
The controlled relationship mix is 21 `supports`, 12 `qualifies`, 10 `originates`, 6
`contextualizes`, 6 `illustrates`, and 2 `contradicts`. All claim disagreement links and every
listed disagreement evidence/source endpoint resolve.

The 64-object ignored cache also closes cleanly: two complete PDFs, one OCR text file, and 61
Wellcome JPEG leaves. All 64 manifest paths exist and independently recomputed byte counts and
SHA-256 hashes match. The Wellcome PDF remains 61 leaves / 14,105,433 bytes and the Internet
Archive derivative 60 pages / 2,521,882 bytes; both are valid and unencrypted. No cache object is
tracked or authorized as a public asset.

The substantive source holds are unchanged. `SRC-034007` (Pratt's separate *Seven Months*
pamphlet), `SRC-034008` (1861 commission testimony), and `SRC-034009` (commission report) remain
`restricted`, `LX`, and unopened except for specialist routing metadata. Their associated claims
remain Unknown or access-bounded; no wording, testimony, finding, family voice, adjudication,
reform result, or causal outcome has been imported from secondary descriptions.

The original twelve-image replay and its voice/procedure/power findings therefore stand without
substantive expansion. The packet is eligible for **bounded internal outline reconciliation
only**. Jamaican historical/language review, disability/survivor review, privacy and dignity,
descendant/community-risk, item-specific rights, accessibility, and trauma/harm review remain
mandatory. Public prose, quotation, facsimile use, SEO/GEO content, Reel or video scripting,
modern diagnosis, prevalence, efficacy, consent, representative outcome, inferred race, and
simple reform-causation remain blocked.
