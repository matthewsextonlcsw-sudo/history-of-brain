# Independent cross-review — R15-EARLY-MODERN-ENGLISH-CASEBOOKS

**Review date:** 2026-08-19

**Reviewer:** independent Codex packet reviewer

**Reviewed state:** the packet's five outputs and ignored cache; packet and cache remained read-only

**Verdict:** **RETURN**
**Public-content state:** **blocked; no public prose or manuscript-image reuse**

## Decision

The packet's historical and ethical ceiling is sound and should be preserved. It treats the
sample as a purposive microcorpus rather than England, keeps Forman and Napier as distinct
practice settings, distinguishes subject from querent, preserves self/proxy/mixed consultation
routes, refuses to modernize consent notation, separates historical words from diagnosis, and
does not convert treatment, financial, or subsequent-event facets into implementation, payment,
efficacy, or outcome. Its lived-experience and archive audit is unusually clear about recorder,
proxy, editorial, and digital mediation.

The packet must nevertheless return before internal-outline extraction. Every claim record uses
five noncanonical field names, all 39 claim workflow states are uncontrolled, three source types,
nine claim types, five evidence labels, all 38 evidence verification states, multiple directness
values, and 39 relationship source-level values fail the approved controlled sets. Several source
records and evidence records fuse distinct webpages or source layers. The saved cache does not
contain the person master-list entries or XML schema chain that the packet says were replayed.
Most importantly, CASE18910's transcription identifies the querent as Matthew Altham's brother,
while its XML `cb:querent` points to an externally inferred female participant; the packet presents
the brother route without recording this internal contradiction. These are bounded graph and
source-exact repairs, not reasons to widen the sample.

## Materials and method

The reviewer read `PROJECT-BRAIN.md`, `BATCH-05-INDEX.md`, the packet `BRIEF.md`,
`sources/EVIDENCE-MODEL.md`, `sources/SOURCE-RATING-AND-CAPTURE-PROTOCOL.md`, and all five
packet outputs. The review used the saved primary XML, CUDL manuscript-image derivatives, IIIF
manifests, edition-method pages, complete saved scholarship, dataset license, permissions page,
and cache manifests. No snippet, search summary, or AI summary was accepted as evidence.

Independent replay covered all 26 XML files computationally and a risk-based manuscript/image
selection across both practice settings:

- CASE671: Forman, proxy, consent no, knowledge yes, urine, judgment, and treatment facet;
- CASE31759: Napier, self-querent, consent unrecorded, self-harm wording, treatment and financial
  facets;
- CASE32140: Napier, proxy, consent yes, transcribed `disquieted in minde`, and separate
  haunted/witchcraft, treatment, and financial metadata;
- CASE41111: Napier, proxy, consent yes, whole-entry transcription, request for a comforting
  letter and possible physic;
- CASE46520: Napier, mixed self/proxy route, consent unrecorded, treatment request, witchcraft
  allegation, and no chart;
- CASE48779: Napier, proxy, consent no, whole-entry transcription, hostile allegations, and no
  chart; and
- CASE8280, CASE18910, and CASE19524: the three-record Matthew Altham dependency chain across
  three separate folios/manuscripts.

The selected images visibly confirm page-level entry placement, charts or their absence, dense
neighboring entries, corrections, and the material limits of low-resolution replay. The reviewer
did not claim a new diplomatic transcription of faint or untranscribed text.

## Sample-design replay

The declared sample counts reproduce from the 26 saved XML records:

| Measure | Replayed result | Disposition |
|---|---:|---|
| Practice assignment | 10 Forman / 16 Napier | **PASS.** These are edition practice assignments; copied or Napier-written Forman material remains identified as such. |
| Asking route | 16 proxy / 9 self / 1 mixed | **PASS WITH SOURCE CONFLICT.** The aggregate route counts hold, but CASE18910's querent identity conflicts internally. |
| Consent field | 4 yes / 7 no / 15 unrecorded | **PASS.** Preserve “encoded/recorded consent”; unrecorded remains Unknown. |
| Judgment facet | 23 present / 3 absent | **PASS.** Presence only. |
| Treatment facet | 8 present / 18 absent | **PASS.** No delivery, use, safety, adherence, or efficacy inference. |
| Financial facet | 2 present / 24 absent | **PASS.** No amount, payment, or burden inference. |
| Subsequent-event facet | 3 present / 23 absent | **PASS.** No recovery or outcome inference. |
| Transcription extent | 24 question-only / 2 whole-entry | **PASS.** Whole-entry still excludes charts/astrological notes. |
| Astrological figures | 22 one figure / 2 two figures / 2 none | **PASS.** This is record construction, not a client-belief statistic. |

The event/person arithmetic also closes: 26 digital records become 24 consultation events after
the three Altham records are treated as one event; the two George French records remain two
consultations. CASE46520 contains two subjects, while the Altham and French repetitions reduce the
record-level subject instances to 24 distinct encoded subjects. None of these counts has a
population denominator.

## Edition, archive, and voice replay

The saved edition documentation directly supports the packet's most important limits:

- `What am I searching?` says the edition fully transcribes the editorially bounded opening
  “question” but not most of the remainder. It warns that the “question” seldom preserves exactly
  what a querent asked and that judgments can mix charts, urine, practitioner questioning,
  knowledge, and information from patients, querents, or messengers.
- Topic and consultation facets cover encoded material, not every occurrence in the manuscripts.
  Some topics can be informed by untranscribed judgment material. They are retrieval/editorial
  layers, not historical diagnoses or transparent speech.
- The editorial guidelines state that consent and knowledge attributes require explicit evidence;
  a missing attribute is silence. The young-child consent/presence rule is identified by the
  editors as a working hypothesis.
- “Patient” is an edition role for the investigated subject and is not automatically a modern
  medical-patient category. “Querent” is the person asking.
- Treatment, financial, and subsequent-event tags indicate recorded information presence. They do
  not establish implementation, payment, outcome, or efficacy.

The packet therefore passes the practitioner/subject distinction, direct-versus-reported-voice
test, modern-diagnosis hold, modern-consent-equivalence hold, prevalence hold, and efficacy hold.
It also correctly treats CASE32140's witchcraft metadata separately from the visible transcribed
question and CASE44800's degrading language as recorder stance rather than subject identity.

## Source-exact case findings

### CASE18910 querent conflict — mandatory repair

CASE18910's transcribed opening reads “Mr Althoms brother.” Its participant list defines male
`#a1` as Mr Altham and explicitly relates `#a1` to Matthew as brother. The same XML's
`cb:querent`, however, points to `#a2`, an externally inferred female participant with a married
Altham surname. The packet's finding, evidence, claim, and lived-experience prose state a brother
proxy without recording that the encoded querent field conflicts with the transcription and
relationship element.

Preserve both layers. Do not silently choose the text or metadata. `CLM-030107` can state that the
transcription identifies a brother while the XML querent pointer conflicts; the unresolved
identity does not alter the aggregate proxy count. Update `EVD-030107`, the sample table, the
Altham dependency discussion, and any computed-participant wording.

### Matthew Altham one-event dependence — pass with repair

The three records share the name, date, close time, family route, and reported event, and their
folios visibly differ. Treating them as one event is strongly supported and essential to avoid
false corroboration. The `repeats` edges and shared dependence group are correct.

The saved cache, however, contains no `PERSON405` master-list item or persistent-person page even
though `EVD-030009` and three case locators say that master list was replayed. The local XML uses
file-local `#ma` identifiers; it does not itself preserve a cross-file persistent-person link.
Either save and ledger the rights-safe master-list evidence with its exact stable locator, or
remove the persistent-link claim and label the one-event conclusion according to the evidence
actually preserved. Do not call three dependent records independent witnesses.

### Other source-layer corrections

- `EVD-030113` correctly says the grammar of CASE28191 is compressed, but `CLM-030113` resolves it
  into an association between grief and the husband's melancholy. Preserve the source phrase or
  state the grammatical uncertainty; do not assign grief or melancholy more precisely than the
  record permits.
- CASE44800's XML gives `when="1617-04-30" n="Wednesday"`, while the transcription encodes a
  Venus/Friday symbol and gloss. The date claim need not be withdrawn, but the weekday-layer
  conflict should be recorded rather than presenting all normalized fields as internally
  consistent.
- `REL-030025` gives Carter's article an A-fit `qualifies` edge to the individual Margery Turnam
  record. Carter does not discuss Margery Turnam in the saved article. The article supplies
  historiographic/postpartum context, not direct qualification of the recorded event. Change this
  to `contextualizes` with C fit, or link it to a separate bounded historiographic caution claim.

## Source identity and dependence audit

The declared dependence controls are otherwise strong:

- case page, XML, display transcription, and manuscript image are one evidence chain, not four
  independent witnesses;
- all Casebooks edition-method pages belong to one editorial-method chain;
- Kassell's studies are method/interpretation, not independent event witnesses;
- Kassell 2005 and Forman's *Judgmentes* are partly dependent;
- Carter depends on the same casebook corpus and does not independently verify case events;
- the Altham records repeat one event; and
- the George French pair documents two consultations without proving why the second occurred.

The canonical source inventory nevertheless needs repair under the evidence model's “distinct
work, object, dataset, recording, archival item, webpage, or edition” rule:

1. `SRC-030008` combines “What are the casebooks?” and “Casebooks Project,” two distinct pages.
2. `SRC-030012` combines the Casebooks permissions page and the dataset license, while
   `EVD-030010` additionally folds in a CUDL IIIF-manifest attribution belonging to another source.
3. `SRC-030011` and `EVD-030007` combine Forman's primary transcription with a separate modern
   editorial introduction while using a split source level.
4. `method/anatomy-of-a-case.md`, `method/patients.md`, and
   `method/what-did-the-astrologers-record.md` are cached as consulted method/context payloads but
   have no canonical source records.
5. Each case evidence record `EVD-030100–EVD-030125` says it is a paired edition/image replay but
   names only `SRC-030001`; the facsimile source is not linked to those individual propositions.

Split fused source/evidence records or explicitly restructure them so every evidence record has
one reproducible source job. Add separate non-independent image/facet edges where a claim needs
both. The resulting source/evidence/relationship counts may legitimately change; do not preserve
the advertised 13/38/52 counts by hiding source layers.

## Record and graph audit

The current files parse as:

- 13 source records;
- 38 evidence records;
- 39 claims; and
- 52 typed relationships.

All identifiers are unique, inside `030000–030999`, and have resolved graph endpoints. All 13
sources participate in evidence, all 38 evidence records participate in at least one relationship,
all 39 claims have an incoming relationship, all seven used relationship verbs are controlled,
and no duplicate `(evidence, claim, relation)` tuple was found. Those structural counts pass.

### Mandatory schema and controlled-value normalization

The packet's “zero missing required fields” claim does not pass the approved evidence schema:

1. All 39 claims use `text`, `type`, `time`, `geography`, and `population` instead of required
   `claim_text`, `claim_type`, `time_scope`, `geographic_scope`, and `population_scope`.
2. `SRC-030001.source_type=scholarly_edition`, `SRC-030002.source_type=primary_visual`, and
   `SRC-030003.source_type=dataset` are not controlled source types. Map them to an approved type
   while preserving their more exact description in `subtype` and source-position fields.
3. All 38 evidence records use `verification_status="verified"`; evidence status must be one of
   `Draft extraction`, `checked against source`, `second-checked`, or `rejected`. This review
   second-checked only the declared risk sample, not every evidence record.
4. Eight directness fields use descriptive composites rather than `Direct`, `reported`,
   `reconstructed`, `inferred`, or `unknown`: `EVD-030002`, `030003`, `030004`, `030007`,
   `030009`, `030109`, `030111`, and `030118`. `EVD-030008` and `030010` use lowercase `direct`;
   normalize capitalization if the validator is exact.
5. Nine claim types are uncontrolled: three `institution_or_practice`, five `interpretation`, and
   one `absence_or_silence`. Use the appropriate approved values such as `existence_or_event`,
   `interpretive`, or `archival_silence` after testing claim atomicity.
6. Five claims use the nonexistent evidence label `Supported`: `CLM-030003`, `030006`, `030007`,
   `030009`, and `030012`. Do not blanket-promote them to Strongly supported; split documented
   observations from inference limits and assign Documented, Strongly supported, Plausible, or
   Unknown to each exact proposition.
7. All 39 claim `review_status` values are uncontrolled phrases such as “ready for packet review,”
   “public hold,” or “trauma-aware review required.” Use the controlled workflow values and keep
   safety/publication holds in their dedicated fields and handoff register.
8. Seven claims use `very high` anachronism risk, outside the None/low/medium/high scale:
   `CLM-030009`, `030109`, `030114`, `030118`, `030120`, `030121`, and `030124`.
9. Thirty-nine relationships use composite `source_level="L1/L3"`. A relationship-specific
   source level must be exactly one of `L1–L5/LX`; split primary record/image facts from editorial
   metadata facts instead of placing two levels in one field.

The current graph also bundles observation and inference gates in `CLM-030007`, `CLM-030011`, and
`CLM-030012`. Prefer an atomic documented proposition—such as what coexists in the selected
records or that the purposive sample lacks a population denominator—and move prohibited causal,
prevalence, access, and efficacy extrapolations into `wording_limits`, or allocate separate claims
with labels matching their burdens.

## Saved-source reproducibility

The packet says the XML files parse through the pinned dataset schema/entity chain. The ignored
cache contains `method/entities.dtd`, but the XML declarations point to
`../schema/entities.dtd`, and no `casebooks.rng` schema is saved in the packet cache. A generic XML
parse succeeds for all 26 files, but the saved packet cannot reproduce the stronger schema-chain
validation as written. Either cache and ledger the rights-safe pinned schema files in their
reproducible relative structure and rerun validation, or narrow the final claim to the parse that
was actually preserved.

Likewise, `EVD-030009` names master lists `PERSON2936` and `PERSON405`, but neither master-list
payload nor a canonical source/evidence record is saved. Preserve those exact records or remove the
claim that a second researcher can replay the persistent links from this cache.

## Rights and cache audit

The public rights hold is correct. The dataset license is CC BY-NC-SA 4.0. The cached Casebooks
permissions page says manuscript downloads are CC BY-NC 3.0, while the sampled CUDL IIIF manifests
state CC BY-NC 4.0 for downloadable images/metadata and separately state that zooming images are
Bodleian copyright/all rights reserved. Record the 3.0/4.0 route/version difference explicitly;
do not collapse the three rights sources. Because Couch Commons is commercial, no cached
manuscript image or noncommercial dataset payload is cleared for public reuse by this packet.

Independent cache replay passed:

- 92 payload rows plus one manifest header;
- 92 payload files totaling exactly 35,482,992 bytes;
- 92/92 SHA-256 checks;
- 26/26 XML files well-formed under a generic parser;
- 27/27 JPEG derivatives recognized as valid JPEG images;
- 20/20 IIIF manifests valid JSON;
- 94 total cache/control files ignored; and
- zero cache files tracked by git.

The 92 payloads include `CACHE-NOTES.md`; `CACHE-MANIFEST.tsv` and `SHA256SUMS` are the two
additional ignored control files. The packet's 94-file count is therefore internally consistent.

## Lived experience, safety, and publication holds

The packet passes the empathy and missing-voice audit. It correctly blocks:

- direct-patient-diary, verbatim-transcript, or transparent-interiority claims;
- depression, psychosis, anxiety, trauma, postpartum, addiction, or other retrospective diagnosis;
- prevalence, sex-difference, class-access, treatment-rate, and outcome-rate claims;
- modern informed-consent or capacity equivalence;
- astrology, religion, or witchcraft as a single cause of consultation or universally shared belief;
- treatment delivery, dosing, adherence, safety, efficacy, recovery, or financial-burden claims;
- sensational self-harm, degrading-label, intimate-allegation, and witchcraft framing;
- all-England, all-Europe, or generic early-modern-patient generalization; and
- public manuscript-image reuse without separate commercial permission and ethical approval.

The packet explicitly names absent subject-authored records, non-consulters, people represented by
proxies, people unable or unwilling to consult, untranscribed lower-page material, unrecorded
outcomes, and alternate understandings the practitioner did not preserve. These gaps should remain
visible after structural repair; they are not defects to fill with imagination.

## Mandatory repair list

1. Record and resolve-at-the-wording-level the CASE18910 brother-versus-`#a2` querent conflict in
   evidence, claim, findings, sample table, and lived-experience surfaces. Keep the proxy aggregate.
2. Add reproducible `PERSON405`/`PERSON2936` master-list evidence or remove unsupported persistent-
   link wording; retain Altham and French dependence without false corroboration.
3. Normalize all canonical field names and controlled source types, evidence statuses/directness,
   claim types/labels/statuses/risks, and relationship source levels listed above.
4. Split fused source/evidence layers, add records for cached consulted pages, and connect
   individual image/facet evidence to the claims it actually supports. Recompute counts and graph
   coverage after the split.
5. Repair `REL-030025` to contextual/C fit or a separate Carter-method claim; recheck the remaining
   method relationships so A fit means direct fit to the exact proposition.
6. Preserve CASE28191's grammatical ambiguity and record CASE44800's normalized-weekday versus
   transcribed-symbol conflict.
7. Save the pinned XML schema/entity chain in a reproducible rights-safe layout or narrow the final
   validation statement; a generic well-formed parse is not schema validation.
8. Split the permissions page, dataset license, and CUDL manifest rights evidence; record the
   CC BY-NC 3.0/4.0 route difference and preserve the commercial-use hold.
9. Append a repair disposition and rerun JSON/schema, controlled-value, ID/range, endpoint,
   source/evidence/claim coverage, dependence, sample counts, selected manuscript replay, cache
   bytes/hashes, ignored/tracked-file, and five-output diff validation. Keep every public,
   sensitivity, diagnosis, efficacy, prevalence, consent, specialist, and rights hold.

## Gate after repair

If all nine repair groups close, the packet may reach **PASS WITH GAPS for internal-outline use**.
That would authorize only bounded nodes about consultation networks, record technology, consent
notation and uncertainty, source mediation, and historical vocabulary. It would not release public
case narratives, modern diagnoses, population claims, efficacy claims, sensitive self-harm or
witchcraft framing, manuscript images, commercial reuse of edition data, or any wording still
subject to historical, paleographic, Latin, clinical, trauma, rights, and human editorial review.

## Repair recheck closure — 2026-08-19

**Closure verdict: RETURN.** Eight repair groups and the substantive portion of the graph repair
now pass. One controlled-field defect remains, so the packet's statements that all controlled
values validate and that schema repair is closed are not yet reproducible.

### Replayed repairs that pass

- **CASE18910:** the sample table, `EVD-030107`, `CLM-030107`, findings, and lived-experience file
  now preserve both source layers: the transcription says “Mr Altham's brother,” while the XML
  `cb:querent` points to externally inferred female participant `#a2`. The proxy identity remains
  unresolved, and the record remains proxy for aggregate arithmetic. The cached XML independently
  confirms male `#a1`, the brother relation between `#a1` and Matthew `#ma`, female inferred `#a2`,
  and `cb:querent ref="#a2"`.
- **Record and sample arithmetic:** a fresh parse of all 26 cached XML records reproduces 10
  Forman / 16 Napier; 16 proxy / 9 self / 1 mixed; consent 4 yes / 7 no / 15 unrecorded; 23
  judgment / 8 treatment / 2 financial / 3 subsequent-event facets; 22 records with one active
  chart, 2 with active-plus-deleted charts, and 2 with no chart. Applying only the declared
  PERSON405 and PERSON2936 dependence links yields 24 subjects and collapsing the three Altham
  records yields 24 consultation events.
- **Persistent-person provenance:** the pinned GitHub tree at commit
  `9d42295d72b5ba8889575a32d79311cc72bce73a` independently returns blob
  `738a48e054f6642d234026448414cf7d519b58f0` for `names-both-forman-napier.xml` and blob
  `2ca9ebc73a1d8b3897ca35188061721210a280ce` for `names-forman-only.xml`. Direct replay of the
  exact XML items confirms PERSON405 links Matthew Altham to CASE8280, CASE18910, and CASE19524,
  while PERSON2936 links George French to CASE2478 and CASE2513. The packet correctly treats
  these as editorial dependence evidence, not independent witnesses.
- **Carter/Margery:** Carter has only two corpus/method C-fit edges (`REL-030024` and
  `REL-030025`). Neither supports Margery Turnam's case. `REL-030025` explicitly says Carter does
  not discuss Margery, and the individual CASE31759 claim is supported only by its edition record
  and illustrated by its dependent facsimile.
- **Ambiguity:** `EVD/CLM-030113` retain CASE28191's compressed grammar without assigning grief or
  melancholy beyond the source arrangement. `EVD/CLM-030117` retain CASE44800's XML Wednesday
  versus transcription Venus/Friday conflict without harmonizing it. Selected folio images for
  CASE18910, both CASE28191 pages, and CASE44800 confirm the declared page locations and complex
  manuscript layout; the packet correctly limits this replay to placement/materiality rather than
  claiming a new diplomatic transcription.
- **XML claim:** all 26 cached XML files are generically well-formed. The repaired packet no longer
  claims RNG/schema validation and explicitly states that `casebooks.rng` is absent.
- **Rights:** the three source layers are now distinct and source-exact: the cached Casebooks
  permissions page states CC BY-NC 3.0 for manuscript downloads; the pinned dataset license is CC
  BY-NC-SA 4.0; and all 20 CUDL manifests state CC BY-NC 4.0 for downloadable images/metadata while
  reserving Bodleian zoom-image rights. Commercial image/data holds remain active.
- **Cache:** the manifest has 92 unique payload rows and the cache has those 92 payloads plus two
  control files, for 94 ignored files total and zero tracked cache files. All 92 manifest and
  `SHA256SUMS` hashes pass; declared and actual payload bytes both total 35,483,644; there are no
  missing, extra, duplicate, or byte-mismatched payloads. Formats pass for 26/26 XML, 20/20 JSON,
  and 27/27 JPEG files.
- **Public and safety holds:** direct-voice, retrospective-diagnosis, prevalence, modern-consent,
  treatment delivery/safety/efficacy, outcome, belief-causation, sensational self-harm/witchcraft,
  degrading-label, manuscript-image, and commercial data-reuse holds remain explicit. The packet
  remains research support only, with specialist and human editorial review still required.

### Remaining exact return defect

The graph structurally contains 21 unique sources, 74 unique evidence records, 40 unique claims,
and 88 unique relationships. JSON parses; IDs are in the assigned ranges; all endpoints resolve;
each relationship's `source_id` matches its evidence record; source/evidence/claim coverage is
21/21, 74/74, and 40/40; relationship tuples are unique; and all tested source types, workflow
statuses, directness values, claim types, evidence labels, universality values, anachronism risks,
relationship verbs, source levels, and claim-fit grades are canonical.

However, the governing evidence model limits evidence `sensitivity` to `Public`, `sensitive`,
`restricted`, `culturally controlled`, `private`, or `unknown`. Only seven records currently use
an allowed value (`Public`: `EVD-030013` through `EVD-030016` and `EVD-030019` through
`EVD-030021`). The other **67 evidence records** use topical phrases such as `family distress`,
`self-harm and spiritual attribution`, `copyright and custody`, or `standard`. Those phrases are
useful annotations but are not values in the controlled field.

Exact repair: assign each of those 67 records the appropriate allowed sensitivity value, preserve
the topical detail in `researcher_note` or a clearly declared extension field such as
`sensitivity_topics`, then rerun the same 21/74/40/88 schema, controlled-value, endpoint, coverage,
sample, cache, rights, and public-hold checks. No further substantive or cache repair is requested
by this closure.

## Final sensitivity replay closure — 2026-08-19

**Superseding verdict: PASS WITH GAPS for internal-outline use.** The remaining controlled-field
defect is closed. This supersedes the RETURN verdict immediately above; it does not change any
public, rights, specialist-review, sensitivity, or editorial hold.

- All 74 evidence records now use only the governing controlled values: 11 `Public`, 60
  `sensitive`, and 3 `restricted`. No invalid or empty `sensitivity` value remains.
- All 74 evidence records preserve a nonempty `sensitivity_note`. Replay confirms the former topic
  annotations remain available there, including pregnancy, consent, coercion, self-harm, family,
  stigma, spiritual-attribution, medical-safety, archive, voice, and copyright/rights detail.
- The full typed graph remains 21 unique sources / 74 unique evidence records / 40 unique claims /
  88 unique relationships. All JSON parses; IDs remain in range and unique; every endpoint
  resolves; relationship source IDs match their evidence sources; source/evidence/claim coverage
  remains 21/21, 74/74, and 40/40; relationship tuples remain unique; and the complete controlled-
  value replay reports zero defects.
- Cache regression passes unchanged: 92 unique payload rows plus 2 control files, 94/94 files
  ignored, zero tracked, 35,483,644 declared and actual payload bytes, 92/92 SHA-256 checks, no
  missing/extra/byte-mismatched paths, and valid formats for 26/26 XML, 20/20 JSON, and 27/27 JPEG
  files.
- CASE18910's unresolved brother-transcription/female-`#a2` conflict, the PERSON405/PERSON2936
  dependence links, Carter's non-Margery contextual role, CASE28191's grammatical ambiguity,
  CASE44800's Wednesday/Venus-Friday conflict, and the generic-well-formedness-only XML statement
  remain intact.
- Dataset CC BY-NC-SA 4.0, Casebooks-download CC BY-NC 3.0, CUDL-download/metadata CC BY-NC 4.0,
  and Bodleian reserved zoom-image rights remain separate. Commercial image/data reuse remains
  held.
- Direct-voice, retrospective-diagnosis, prevalence, modern-consent, treatment delivery/safety/
  efficacy, outcome, belief-causation, sensational self-harm/witchcraft, degrading-label,
  all-England/all-Europe, public-image, specialist-review, and human-editorial holds remain active.

This closure authorizes only bounded internal-outline reconciliation. It does not authorize public
prose, manuscript-image publication, commercial reuse, modern diagnosis, population inference, or
claims beyond the packet's named Forman/Napier settings and declared purposive sample.
