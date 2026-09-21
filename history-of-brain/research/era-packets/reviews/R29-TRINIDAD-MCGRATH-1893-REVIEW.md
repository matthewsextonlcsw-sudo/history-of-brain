# R29 Trinidad McGrath 1893 — independent acquisition/STOP review

**Verdict:** `RETURN FOR STRUCTURAL REPAIR`; the substantive `STOP / NO-GO` is correct and must
remain in force.

**Review date:** 2026-08-19
**Review scope:** Read-only replay of the five packet outputs, the ignored cache, and pivotal TNA,
Banton, and Internet Archive acquisition sources. This review creates no public prose and does
not authorize a purchase, visit, account, form submission, outreach, quotation, image use,
SEO/GEO use, or historical narrative.

## Decision

R29 correctly refuses to manufacture history from an archive catalogue. The complete frozen
object, `CO 295/345/44`, folios 616–661, was not obtained or image-replayed. The retained claims
are limited to catalogue identity, current access routes, rights and copying conditions, bounded
search results, the defined local-cache state, and research STOP decisions. The packet does not
promote the catalogue description or Banton's downstream summary into affected-person voice,
diagnosis, care, confinement, response, outcome, authorship, representativeness, or event truth.

That substantive discipline passes. The packet nevertheless returns because its project-authored
cache evidence is misbound to the TNA catalogue, one active relationship has D claim fit, evidence
controlled-value casing fails, and the cache manifest lacks required acquisition provenance. Two
cached Internet Archive responses are also described as `link-only`, which does not satisfy Batch
07's cache-rights rule without a verified lawful/open reuse basis.

## Independent source and access replay

| lane | direct replay | result |
|---|---|---|
| TNA catalogue, Discovery `C11731573` | The live record identifies `CO 295/345/44`, former reference `11802/1893`, date 15 June 1893, and folios 616–661. It says the record has not been digitised and cannot be downloaded, and offers Kew consultation or a copy request. | **PASS for catalogue/access metadata only.** The description is not the file. |
| Record-specific page check | The public pre-submission page currently states a £9.92 non-refundable page check, after which staff decide whether copying is possible and, if so, quote the separate copying cost. No submission or transaction occurred. | **PASS.** It does not prove full-file copyability, completeness, cost, or success. |
| Generic copying guidance and terms | Current guidance says copying depends on item type, size, condition, and preservation; whole/high-volume digitisation may require another service. Generic guidance currently says about 29 working days while the record-specific page says about 24. | **PASS because the packet retains no fee or turnaround claim and requires a future recheck.** |
| TNA reuse guidance | The guidance separates website text, Crown material, third-party material, supplied copies, transcription/quotation, image reuse, online publication, and commercial use. | **PASS.** Public-record/open-description status is not publication clearance. |
| Banton, 2nd ed., printed p. 58 n. 12 | The complete licensed PDF contains the cited call-number/date route inside a broader Colonial Office correspondence discussion. It also summarizes the unopened file. | **PASS only as L2 archive routing/context.** The packet correctly quarantines the summary from substantive use. |
| Internet Archive exact queries | The two cached complete API responses each report `numFound: 0` for the recorded exact query. | **PASS only for those two dated query results.** No object-absence or non-survival inference is permitted. |

Direct routes replayed:

- https://discovery.nationalarchives.gov.uk/details/r/C11731573
- https://discovery.nationalarchives.gov.uk/pagecheck/start/C11731573
- https://www.nationalarchives.gov.uk/help-with-your-research/record-copying/
- https://www.nationalarchives.gov.uk/terms-and-conditions/record-copying/
- https://www.nationalarchives.gov.uk/terms-and-conditions/copyright/use-of-the-national-archives-materials/
- https://uolpress.co.uk/wp-content/uploads/wpallimport/files/pdfs/9781912702787.pdf

Agent Reach v1.5.0 was current. Jina/full-page reading was available; Exa remained unavailable.

## Zero-substantive-claim, voice, and harm audit

**PASS.** The dossier consistently states that the following remain Unknown: internal document
inventory and order, creators and hands, exact wording, authorship, mediation, voice classes,
institutional acts, care, confinement, diagnosis, consent, response, outcome, family, and worker
traces. Its silence language is correctly bounded to the defined cache and opened routes rather
than converted into historical absence.

The packet also preserves the distinctions among catalogue metadata, Banton's later summary,
the unopened archival file, any future images, transcription, OCR, and public interpretation.
It prohibits a searchable clinical record, sensational use of the pamphlet title, modern
diagnosis, regional generalization, image reuse, and public drafting. Trinidad regional,
disability/survivor, privacy/dignity, descendant/community, historical-language, rights, and
human editorial gates remain explicit.

The lack of a disagreement record is acceptable: no substantive historical dispute is retained.
`SRC-041000` is intentionally unrepresented by evidence or relationships because the target file
was not opened; inventing an evidence row merely to obtain source coverage would weaken the STOP.

## Graph and schema audit

| check | observed | result |
|---|---:|---|
| sources | 8 (`SRC-041000–041007`) | range/uniqueness pass |
| evidence | 11 (`EVD-041000–041010`) | range/uniqueness pass |
| claims/decisions | 11 (`CLM-041000–041010`) | range/uniqueness pass |
| relationships | 21 (`REL-041000–041020`) | range/uniqueness pass |
| disagreements | 0 | acceptable for acquisition STOP |
| resolved relationship endpoints | 21/21 | pass |
| relationship source equals evidence source | 21/21 syntactically | pass, but provenance defect below |
| evidence coverage | 11/11 | pass |
| claim coverage | 11/11 | pass |
| source coverage | 7/8 | deliberate unopened-target exception |
| duplicate evidence/claim/relation tuples | 0 | pass |
| controlled relation verbs | 21/21 | pass |
| active D-fit edges | 1 (`REL-041010`) | **return** |

All source, evidence, claim, and relationship records contain their required fields. Relationship
extensions `created_by` and `created_on` are permissible because the canonical required fields
are also present; they are not a repair item.

### Mandatory repair 1 — bind the local cache audit to its actual source

`EVD-041009` describes a project-authored filesystem, byte, and manifest audit, but its
`source_id` is `SRC-041001`, the TNA catalogue/API source. The five relationships using this
evidence (`REL-041001`, `REL-041009`, `REL-041012`, `REL-041017`, and `REL-041020`) therefore
attribute a local project measurement to the archive catalogue while assigning the different
independence group `R29-CACHE-AUDIT`.

Add a schema-complete `041xxx` source record for the project-authored acquisition/cache audit,
with exact audit artifacts, date, method, limitations, rights, and `R29-CACHE-AUDIT` dependence.
Rebind `EVD-041009` and its five relationships to that source. Rate the dated defined-cache
measurement independently of historical or archive-wide absence; the analogous claim must remain
strictly local. Re-run source/evidence/relationship coverage after rebinding.

### Mandatory repair 2 — remove active D-fit graph support

`REL-041010` is active, links Banton `EVD-041004` to the Unknown-content claim `CLM-041005`, and
uses `claim_fit:"D"`. D means mismatch/rejection and cannot function as active evidence for a
retained claim. The cleanest repair is to withdraw/reserve this relationship with its reason;
`EVD-041004` remains covered by `REL-041006`, and `CLM-041005` remains covered by the correctly
rebound local-cache evidence. If a relationship is retained instead, it must express only a
genuine contextual/qualifying proposition with an honestly justified non-D fit and no suggestion
of independent historical corroboration.

### Mandatory repair 3 — normalize evidence controlled values

Ten evidence rows (`EVD-041000–041003` and `EVD-041005–041010`) use
`directness:"direct"`; the controlled value is `Direct`. `EVD-041004`'s
`directness:"reconstructed"` is controlled as written. Ten rows (`EVD-041000–041008` and
`EVD-041010`) use `sensitivity:"public"`; normalize them to `Public`.
`EVD-041009`'s `restricted` value is controlled as written. Preserve explanatory nuance in the
existing note/limitations fields.

## Cache, provenance, and rights audit

The physical cache integrity passes:

- 9 manifested payloads plus 2 control files = 11 files;
- 7,568,965 manifested payload bytes and 7,571,912 total bytes;
- all 9 payload byte counts and SHA-256 hashes match;
- the manifest hash is
  `f0a3842f512931f5b5a7fb48dd6dfb04f2ae85408f02fe4e9a4bffd394f0c3fa`;
- the rights-readme hash is
  `8fad5f460a9698dce9a05aec3f57eff8133b5b047e73581bceb17c1b597dde4f`;
- all 11 files are ignored and untracked; and
- file signatures match the declared PDF, JSON, Markdown, and TSV formats.

The cache contains zero folio image, transcription, or pamphlet page from `CO 295/345/44`.
Banton's PDF is an unmodified 444-page publisher file whose copyright page states CC BY-NC-ND
4.0. TNA website/catalogue material is separated from the unopened archival object and future
supplied images.

### Mandatory repair 4 — complete cache provenance fields

`CACHE-MANIFEST.tsv` has filename, bytes, SHA-256, source binding, rights status, and allowed use,
but it omits the Batch 07 required exact acquisition URL, access date, provenance, and
transformation for every payload. Add those fields per row. Distinguish unmodified publisher PDF,
direct API JSON, Jina-rendered Markdown, and any locally created derivative. Re-run byte/hash,
file-signature, ignored/untracked, and manifest/object-set checks afterward.

### Mandatory repair 5 — resolve the two `link-only` cached API responses

`SRC-041007` classifies the Internet Archive search source as `rights_status:"link-only"`, while
the full API responses are cached and manifested. Batch 07 permits cached source artifacts only
when their lawful public-domain or open-license basis is recorded. Either establish and cite an
authoritative reuse basis that permits these exact cached API responses, updating the source and
manifest consistently, or remove the response payloads from the cache/manifest and preserve only
a project-authored reproducible query log plus direct query URLs. Do not weaken the bounded-query
language or treat the results as substantive evidence.

## Acquisition-condition audit

The future recipe correctly requires separate human authority for any purchase, visit, account,
form, or outreach; requests the complete folio range and all sides/enclosures; requires raw-file
hashing, order and omission reconciliation, image-before-OCR replay, document-layer separation,
rights review, and automatic NO-GO when completeness or harm gates fail.

One nonblocking precision improvement is advisable: the current generic TNA page directs
whole/high-volume digitisation enquiries to a separate service, while the record-specific page
check is designed to decide whether identified material can be copied. Describe page check as the
verified record-specific starting route rather than guaranteeing it is the preferred route for a
complete 46-folio object; include the high-volume route or authorized Kew visit as contingent
human options. No contact or order should occur without new authority.

## Closure conditions

Disposition all five mandatory repairs, then independently replay:

1. schema/controlled values;
2. source/evidence/claim/relationship IDs, endpoints, coverage, dependence, and active-fit values;
3. the project-authored cache-audit source binding;
4. all manifest provenance, rights, byte, hash, object-set, ignore, and tracking fields; and
5. the unchanged zero-primary-payload and zero-substantive-history STOP.

If those repairs close, R29 may pass as a reproducible acquisition dossier **with the substantive
STOP still in force**. It cannot pass into synthesis, public prose, quotation, imagery, SEO/GEO,
or publication unless the exact complete object is later lawfully acquired and independently
replayed under every stated rights, dignity, regional, disability/survivor, privacy, and human
review gate.

## Final closure replay — 2026-08-19

**Closure verdict: `PASS WITH GAPS` as a reproducible acquisition dossier. Substantive research remains `STOP / NO-GO`, and every public-use hold remains in force.**

All five mandatory repair groups close on independent replay:

1. `SRC-041008` is a schema-complete L1 record for the project-authored, defined-cache acquisition audit. `EVD-041009` and `REL-041001/009/012/017/020` now bind to that source and the `R29-CACHE-AUDIT` dependence group, not to the TNA catalogue.
2. `REL-041010` is retained only as a withdrawn D-fit audit row with an exact withdrawal reason. The graph contains 21 relationships: 20 active and one withdrawn. Active fits are 18 A and 2 B; no active D-fit relationship remains.
3. Evidence controlled values replay as 10 `Direct` plus one `reconstructed`, and 10 `Public` plus one `restricted`. The casing defects identified above are closed.
4. The seven-row `CACHE-MANIFEST.tsv` supplies a nonempty source binding, exact acquisition URL, access date, provenance, transformation, rights status, allowed use, byte count, and SHA-256 for every payload. Every source binding resolves, the manifested object set equals the payload set, and all byte/hash checks pass.
5. The two third-party Internet Archive API payloads are absent. Their link-only source remains uncached, while the project-authored `internet-archive-query-log.md` preserves the two direct replay URLs, parameters, dated zero-result observations, and limits under `SRC-041008`. The redundant TNA search-API payload is also absent. No unsupported open-license claim was substituted.

The final graph is unchanged at **9 SRC / 11 EVD / 11 CLM / 21 REL / 0 DIS**, with unique contiguous `041xxx` identifiers and all relationship endpoints and source bindings resolved. Every evidence and claim record has active coverage. Eight sources have active coverage; `SRC-041000` is correctly uncovered because it is the deliberately unopened target rather than evidence.

The ignored cache remains exactly **7 manifested payloads / 2 controls / 9 files**, with **7,114,955 payload bytes** and **7,119,470 total bytes**. The manifest remains 3,292 bytes with SHA-256 `534e71ca4862c80eca0b6161f2f60736a7866ee47c5f0ad6c2b92d3c431cebf8`; the rights readme remains 1,223 bytes with SHA-256 `1db13106f87a8aef9f445d8ea6cfa072cb6cf67f5ee79680b0be4ff8538e4243`. All nine files remain ignored and untracked. No primary folio, image, transcription, or pamphlet page is present.

Diff-check replay passes all five packet outputs. No further structural repair is required. The unresolved gap is still the complete, lawfully acquired and independently replayed primary object. Until that gap and every regional, disability/survivor, privacy/dignity, descendant/community, language, rights, quotation, image, and human-editor gate close, R29 authorizes no historical narrative, lived-experience claim, quotation, image, searchable personal record, SEO/GEO use, reel, video, or publication.
