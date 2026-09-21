# Independent review — R23 Mexico: La Castañeda and Alberto Nicolat, 1918–1932

**Packet:** `R23-MEXICO-LA-CASTANEDA-NICOLAT-1918-1932`
**Review date:** 2026-08-19
**Reviewer:** `/root/review_casebooks`
**Review scope:** packet and ignored cache read-only; pivotal full-source and locator replay;
dependency, translation, access, rights, privacy and harm gates; canonical graph and cache
validation.
**Public prose:** none authorized.

## Verdict

**RETURN / HOLD CONFIRMED.** The packet's refusal to turn a strong affected-person publication
lane and one strong scholarly route into a public case history is correct. The complete Oneto
thesis and consequential AHSSA folios remain unopened; file-dependent family, diagnosis,
treatment, legal-responsibility, ancestry and later-event claims therefore remain secondary and
held. A qualified second Spanish-language/specialist review and item-specific archive/publication
decision also remain open.

The packet is not yet a structural pass. The review found a current official AHSSA service and
policy route that the packet's one-URL audit missed, and every canonical source record uses prose
instead of a controlled `rights_status` value. These defects require repair even though neither
one unlocks the sensitive case-file lane.

## Decisive findings

### F-01 — Current AHSSA general policies exist; the packet's access-state claim is obsolete

**Severity:** return-level factual and coverage defect.

The packet records only an obsolete `gob.mx` URL and concludes in `CLM-035030`, `CLM-035032`, the
source ledger, and the handoff that current AHSSA access, privacy and reproduction conditions were
not established. A direct current Secretaría de Salud route supplies both:

- the official [Centro de Documentación Institucional service page](https://dgti.salud.gob.mx/cdi/serviciosCDI.html),
  including the AHSSA consultation email, service description, address, hours and link to policy;
- the complete official 11-page [Políticas del Archivo Histórico del Centro de Documentación
  Institucional](https://dgti.salud.gob.mx/cdi/docsAH/Politicas_Archivo_Historico_CDI_2023.pdf),
  created in January 2023 and still linked by the current service page at review time.

The policy was opened in full. It establishes general consultation procedures; an exception route
and confidentiality agreement for confidential custodial material; protection of personal data;
personal rather than group consultation; identification and room controls; a prohibition on
cellphone/tablet photography; supervised, scheduled, paid reproduction with the researcher's own
camera; and a rule against reproducing complete files or complete publications.

This discovery does **not** establish that `Fondo Manicomio General, Sección Expedientes
Clínicos, caja 97, expediente 25` is open to this project, reproducible, quotable, publishable, or
commercially reusable. The current general policy does not waive item-level privacy, legal,
copyright, dignity, descendant, or publication review. The correct unresolved proposition is
therefore narrower: general current policy and a contact route are available, but the Nicolat
file's classification, access eligibility, reproduction limits, quotation/publication conditions,
and consequential folios have not been confirmed directly with AHSSA.

### F-02 — Canonical `rights_status` values are not controlled

**Severity:** return-level schema defect.

The evidence model permits `public domain`, `licensed`, `permission required`, `restricted`,
`unknown`, or `link-only`. All ten source records instead place compound explanatory prose in
`rights_status`; several combine mutually distinct states such as `restricted/unknown` or
`unknown; link-only`. The reasoning is generally cautious, but it is not machine-valid controlled
data.

Each source needs one controlled value. Preserve the existing nuance in a separate `rights_note`
or `limitations` field and preserve `allowed_use` separately. The Nicolat scan, Ríos article,
UNAM pages, AHSSA policy, restricted case file and unavailable thesis must not be collapsed into
one rights state merely because they are linked from public institutional websites.

### F-03 — One evidence label overstates independent support

**Severity:** repair required; it does not alter the hold.

`CLM-035021` is labeled `Strongly supported`, but its core evidentiary route is Ríos's single
article/dependency chain, with same-project UNAM context. The bounded proposition—that Ríos's
compound narrative must be separated into its embedded source layers—is directly documented by
the opened article. The appropriate label is `Documented`, not `Strongly supported`, because the
latter is reserved for multiple sufficiently independent strong sources or strong scholarly
consensus.

### F-04 — Relationship dependence is readable but not fully canonicalized

**Severity:** structural normalization gap.

All 50 relationship rows resolve from evidence to claim and inherit a source through the evidence
record. Their `independence_note` fields usually preserve the important dependency distinctions.
However, the relationship rows do not carry an explicit `source_id`, `independence_group`, or
separate dependence note/status fields used in Batch 06 validation surfaces. Either normalize the
50 rows to the agreed Batch 06 relationship schema or document and validate the indirect
`REL → EVD → SRC` resolution as the canonical design. Do not leave the relationship schema
implicit while calling it schema-complete.

The disagreement record is substantively useful, but its `reviewer` remains `independent review
pending`. Repair it only after the returned packet is revised and independently closed; this
review does not approve public wording.

### F-05 — The substantive primary-source hold is correct

**Severity:** publication stop.

- The complete Gregorio Oneto Barenque 1924 thesis was not obtained. Ríos's citations and page
  references are a reproducible lead, not a substitute for the thesis, its examination method,
  its reported wife interview, or its medico-legal argument.
- The AHSSA parent file and consequential folios were not opened. Ríos's article remains one L2
  route for detention, treatment, diagnosis, law, family, ancestry, alleged crime, readmission and
  death.
- No primary family-authored source was opened. Wife, children and relatives remain mediated
  traces, not family experience.
- The generic racialized category reported through the file/article chain cannot identify a
  Nation, community, language, self-identification, biology or cultural authority.
- No opened evidence supports treatment safety, efficacy, injury, cure, voluntariness, recovery,
  prevalence, or institution-wide patient experience.
- This review independently replayed pivotal Spanish pages, but it is not the qualified Mexican
  psychiatry/medical-legal historian, translator, disability/survivor, privacy or descendant
  review required before a named public case narrative.

## Pivotal full-source replay

### Alberto Nicolat, *El sueño de un loco realizado*

The complete 96-image official UNAM scan in the ignored cache was opened. The following image/
printed-page anchors were visually replayed against the page image rather than accepted from OCR:

| Scan / printed page | Review result |
|---|---|
| scan 3 / title and edition page | Nicolat, title, Lerdo imprint, and the book's own 1,000/2,000/5,000 edition statements are present. The numbers remain paratext claims, not independently verified circulation. |
| scans 4 and 6 / pp.3 and 5 | The text dates the peace-piece origin to 19 February 1922 in a cell and dates the present work at Veracruz, 16 October 1928. These are the author's published framing. |
| scans 8–9 / pp.7–8 | Benito Fentanes is credited with language correction; the extent of editing is unknown. |
| scans 28–32 / pp.27–31 | Wife/children are reported by Nicolat; historical diagnostic wording is reproduced; workshop/savings, removal to cell 8, pacing for sleep, Christian reflection, intentional imagination, notebook and an unnamed woman's mediation appear. These remain distinct self-report, embedded institutional language, and mediated-third-person layers. |
| scans 35–37 / pp.34–36 | The Ruhr/news composition prompt and peace-campaign memories are authorial claims, not independent event verification. |
| scans 89–91 / pp.88–90 | A separately attributed women's-association appeal is not Nicolat's own voice and cannot stand for women's experience. |
| scan 95 / p.91 | Nicolat presents himself as owner/seller, supplies order addresses and a 50-centavo price. This supports deliberate publication, not sales volume or commercial reuse rights today. |

The packet's primary-publication claims and its self/proxy/embedded-voice distinctions survive
this replay. Its refusal to infer modern diagnosis, efficacy, consent, voluntariness, prevalence,
family experience or representativeness also survives.

### Andrés Ríos Molina, 2009

The complete 26-page journal PDF and its official DOI landing page were opened. Pages 71–93 and
the relevant notes were replayed. They support, at Ríos's scholarly layer:

- the exact AHSSA call number and the Oneto thesis/source route;
- the medico-legal stakes and reported wife-interview dependency;
- Ríos's dialogic/polyphonic archive method;
- the reported racialized heredity category and the need not to naturalize it;
- compound file/Oneto/self-writing/work/treatment layers;
- the reported clinician and Oneto positions and Ríos's cultural interpretation;
- the sensitive 1932 newspaper/readmission/death reconstruction.

The article does not make the unopened thesis, file folios, interview, newspaper or death record
independent primary evidence. The official journal landing page identifies the issue/article as
CC BY-NC-ND 4.0; that permits citation/linking but does not authorize commercial adaptation of
the article.

### Institutional and access surfaces

The current UNAM `Los casos`, `Los pacientes`, `Participantes`, thesis collection/list and article
landing surfaces were replayed. They support source-map, project-dependency, dataset-description,
credits and stated website/article-rights claims only. They are not independent corroboration of
Nicolat's case. The raw patient spreadsheet remained unopened, correctly preserving the packet's
data-minimization and reidentification boundary.

The official AHSSA service page and complete 2023 policy PDF were separately replayed as described
in F-01. They add a general current access/privacy/reproduction route, not case-file evidence.

## Canonical graph validation

Parsing the canonical JSON/JSONL records by their record identifiers produced:

| Record | Declared | Parsed | Integrity result |
|---|---:|---:|---|
| Sources | 10 | 10 | unique; all `035xxx`; 8 opened sources carry evidence; unavailable `SRC-035007`/`SRC-035008` correctly carry none |
| Evidence | 30 | 30 | unique; every `source_id` resolves; all evidence is relationship-covered |
| Claims | 32 | 32 | unique; every claim is relationship-covered; all disagreement links resolve |
| Relationships | 50 | 50 | unique; all evidence and claim endpoints resolve; no duplicate evidence–claim edge; verbs and `active` statuses are controlled |
| Disagreements | 1 | 1 | identifier and referenced evidence resolve; reviewer closure remains pending |

Controlled value replay found:

- relationship verbs: 22 `supports`, 14 `originates`, 6 `contextualizes`, 6 `qualifies`,
  2 `illustrates`;
- source levels and claim fits in relationship rows are within the permitted ranges;
- evidence directness: 16 `Direct`, 9 `reported`, 5 `reconstructed`;
- evidence sensitivity: 22 `sensitive`, 6 `Public`, 2 `restricted`;
- claim evidence labels: 21 `Documented`, 9 `Plausible`, 1 `Strongly supported`, 1 `Unknown`;
- claim review statuses: 22 `source-verified`, 10 `evidence-linked`;
- no broken source, evidence, claim or disagreement reference; no uncovered evidence or claim.

The `rights_status` failure and implicit relationship-dependence schema remain the structural
exceptions described above. Compound descriptive `level_default` strings are useful notes but
must not be treated as substitutes for the controlled claim-relative `source_level` and
`claim_fit` values in relationships.

## Cache and workspace regression

The ignored cache contains exactly two payload PDFs plus two metadata files:

| File | Bytes | SHA-256 replay |
|---|---:|---|
| `Nicolat-c1928-El-sueno-de-un-loco-realizado.pdf` | 9,507,276 | `59c4eae74868bc98b1c77eff3cdc5cd5043701740fa89f6a8558052677cf531e` |
| `Rios-Molina-2009-Mesias-ladron-paranoico.pdf` | 186,743 | `6a3d50611b22c635830ccf380ef1fad80d203eb07cb145ebbec6c1639fd8c96f` |

Payload total is 9,694,019 bytes. `MANIFEST.tsv` contains exactly those two bindings and matches
format, source ID, URL, transformation, use boundary, bytes and hash. `SHA256SUMS` contains exactly
the same two payload hashes. Both PDFs open as valid complete documents. The cache remains ignored
and untracked. `git diff --check` reports no packet whitespace errors.

The reviewer-opened AHSSA policy copy remained temporary under `/tmp` and was not added to the
packet or cache. For reproducibility, the official 11-page PDF observed at review time was 553,791
bytes with SHA-256 `c903df09ed2505c72a0a3e394e791c0de3fd89c811eaa79da70d7c87c53c782b`.

## Exact repair checklist

1. Add separate canonical source/evidence/claim/relationship records for the current official
   AHSSA service page and 2023 policy PDF. Preserve the obsolete `gob.mx` route only as a narrow
   failed-route observation.
2. Rewrite `CLM-035030` to distinguish known general policy from unknown item-specific status.
   Remove “current AHSSA terms unavailable” from `CLM-035032`, the source ledger, findings and
   handoff. The return should instead cite missing item-specific access/publication confirmation,
   unopened consequential folios, the missing Oneto thesis and missing qualified reviews.
3. In the AHSSA handoff, record that confidential material may require an exception route and
   confidentiality agreement; cellphone/tablet photography is prohibited; reproduction is
   supervised/scheduled/paid; and complete files may not be reproduced. Ask AHSSA directly how
   these rules apply to caja 97, expediente 25 and to quotation/publication/commercial use.
4. Normalize all source `rights_status` fields to one allowed value. Move detailed license,
   permission, privacy, commercial-use and asset-use reasoning into separate notes/limitations.
5. Change `CLM-035021` from `Strongly supported` to `Documented`, unless genuinely independent
   evidence is added.
6. Normalize the 50 relationship records to the coordinator's agreed canonical dependence schema,
   or formally document and validate the indirect source/dependency join. Preserve all same-chain
   warnings.
7. Replace `DIS-035001`'s reviewer placeholder only after repaired graph, source and wording review.
8. Obtain and fully open the Oneto thesis. Classify every cited passage as Oneto's argument,
   examination, quotation, paraphrase, case-file copy or wife-interview layer; do not infer
   interview consent or voice form.
9. Through the current AHSSA route, obtain item-specific permission and inspect the mapped folios
   plus necessary neighbors. Record folio-level creator, date, genre, recorder, insertion history,
   voice class, sensitivity and dependency. Do not cache or publish restricted pages merely
   because consultation is allowed.
10. Complete qualified Spanish/Mexican medical-legal-history, disability/survivor, privacy and
    descendant reviews. Community-authority review is required before any specific Indigenous
    cultural interpretation; otherwise omit the ancestry narrative.
11. Re-run graph, cache, rights and hold validation. No public page, quotation, image, SEO/GEO
    narrative, Reel or video script may proceed until independent closure.

## Holds that remain in force

- no retrospective diagnosis or modern diagnostic equivalence;
- no settled criminal-responsibility, simulation, capacity or dangerousness verdict;
- no treatment safety, efficacy, injury, recovery or recommendation claim;
- no inference of consent, voluntariness, therapeutic labor or benefit;
- no family voice or motive from Nicolat, Oneto or Ríos mediation;
- no crime/death hook, intimate allegation, case image, long quotation or raw patient data;
- no ancestry, Nation, culture, language, heredity or biology claim from a generic archival label;
- no claim that one named case represents La Castañeda, Mexico, Latin America, a diagnosis or an
  era;
- no commercial republication or image reuse without source- and asset-specific rights review.

**Closure condition:** return the packet for the exact structural and current-policy repairs
above. Even after those repairs, retain the substantive publication hold until Oneto, the
consequential AHSSA folios, item-specific archive/publication permission, and qualified specialist
reviews are complete and independently rechecked.

---

## Independent repair closure addendum — 2026-08-19

**Closure verdict: PASS WITH GAPS FOR BOUNDED INTERNAL RECONCILIATION; SUBSTANTIVE HOLD
UNCHANGED.** This addendum supersedes the original review's structural `RETURN` findings against
the repaired packet state. It does not supersede the publication stop, approve public wording, or
authorize a page, quotation, image, SEO/GEO narrative, Reel, video, diagnosis, treatment claim, or
named-case story.

The repaired packet and ignored cache were independently replayed read-only. Only this review was
appended.

### Original return findings closed

1. **AHSSA route and policy — closed at the general-policy layer.** `SRC-035011` and
   `SRC-035012`, `EVD-035031`–`EVD-035033`, and `CLM-035033`–`CLM-035034` now record the current
   official Secretaría de Salud service page and complete January 2023 policy. The service page
   directly supplies the AHSSA consultation email, service description, Donceles 39 address,
   weekday hours, and policy link. The complete 11-page policy supports the bounded consultation,
   confidentiality, personal-data, supervised-reproduction, no-mobile-device-capture and
   no-complete-file-reproduction claims.

   `CLM-035030` now correctly distinguishes known general policy from unknown item-specific
   classification, access, reproduction, quotation/publication and commercial-use conditions.
   `CLM-035032` correctly retains the substantive gate without repeating the obsolete claim that
   no current general policy exists. The service page's 09:00–14:00 hours and the policy's
   09:00–15:00 hours are both preserved with a direct-confirmation warning. Neither surface is
   treated as permission for caja 97, expediente 25.

2. **Controlled rights states — closed.** All 12 canonical source records now contain exactly one
   permitted `rights_status`: six `licensed`, three `link-only`, one `permission required`, one
   `unknown`, and one `restricted`. Detailed legal, commercial, asset, privacy and ethical limits
   remain separately visible in `rights_note`, `allowed_use`, `limitations` and
   `cultural_protocol`. Public access is not treated as commercial, privacy, dignity or image-use
   clearance.

3. **Evidence-label overstatement — closed.** `CLM-035021` is now `Documented`, not `Strongly
   supported`. Its wording and edges continue to show that the compound Ríos account must be split
   into its embedded primary layers before public use.

4. **Relationship dependence schema — closed.** All 57 relationships now use the explicit Batch
   06 `predicate`, `source_id`, `dependence_group`, `dependence_note`, `status` and
   `withdrawal_reason` structure. Every relationship source equals its evidence source; every
   relationship/evidence dependence group equals the linked source independence group. The new
   AHSSA policy edges share `AHSSA-CURRENT-POLICY` and explicitly avoid false corroboration between
   the service page and policy sections.

### Final graph replay

| Record | Parsed | Result |
|---|---:|---|
| Sources | 12 | unique `035xxx` IDs; required fields and controlled source type, rights and verification values pass |
| Evidence | 33 | unique; all source endpoints and dependence groups resolve; all evidence is edge-covered |
| Claims | 34 | unique; required fields, controlled types/labels/universality/workflow values and disagreement links pass; all claims are edge-covered |
| Relationships | 57 | unique; all source/evidence/claim endpoints resolve; no duplicate evidence–claim–predicate tuple; all active |
| Disagreements | 1 | four positions and seven valid evidence references resolve; no public wording is approved |

Relationship mix is 26 `supports`, 14 `originates`, 8 `contextualizes`, 7 `qualifies`, and 2
`illustrates`. Ten opened sources have evidence. `SRC-035007` and `SRC-035008` correctly have none:
the unavailable Oneto thesis and unopened clinical file were not converted into extracted primary
evidence.

`DIS-035001.reviewer` remains `independent review pending` in the author-owned packet because this
closure task was expressly review-only. This addendum supplies the independent structural closure;
the disagreement's `approved_public_wording` remains `None`, consistent with the substantive hold.

### Cache replay

The ignored cache contains three valid PDF payloads plus `MANIFEST.tsv` and `SHA256SUMS`:

| Payload | Bytes | SHA-256 |
|---|---:|---|
| `Nicolat-c1928-El-sueno-de-un-loco-realizado.pdf` | 9,507,276 | `59c4eae74868bc98b1c77eff3cdc5cd5043701740fa89f6a8558052677cf531e` |
| `Rios-Molina-2009-Mesias-ladron-paranoico.pdf` | 186,743 | `6a3d50611b22c635830ccf380ef1fad80d203eb07cb145ebbec6c1639fd8c96f` |
| `AHSSA-Politicas-Archivo-Historico-CDI-2023.pdf` | 553,791 | `c903df09ed2505c72a0a3e394e791c0de3fd89c811eaa79da70d7c87c53c782b` |

Payload total is 10,247,810 bytes. The three manifest rows match filenames, source bindings,
formats, URLs, access dates, transformations, rights/use boundaries, byte counts and hashes.
`SHA256SUMS` matches the same three payloads. All five cache files are ignored; none is tracked.
The cached AHSSA PDF is the complete 11-page official file and matches the source record.

### Gaps and holds that remain

The structural repair is closed, but the packet remains below the publication threshold because:

- the complete Gregorio Oneto Barenque thesis is still unavailable;
- AHSSA has not issued an item- and use-specific determination for caja 97, expediente 25;
- the consequential case-file folios and necessary neighboring pages remain unopened;
- the independent qualified Spanish/Mexican medical-legal-history, disability/survivor, privacy,
  descendant and—if relevant—community-authority reviews remain incomplete.

Accordingly, every prior hold on retrospective diagnosis, criminal-responsibility adjudication,
treatment efficacy or safety, consent, voluntariness, labor benefit, family voice, intimate or
later-event allegations, ancestry/cultural inference, raw patient data, images, long quotations,
commercial reuse, sensational framing and geographic/population generalization remains in force.

**Final state:** the review-return repair is independently closed as `PASS WITH GAPS` for bounded
internal reconciliation. Public and outline-ready narrative status remains **HOLD** until the
named primary, item-specific and qualified-review gates are completed and independently reviewed.
