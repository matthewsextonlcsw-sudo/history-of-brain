# Independent cross-review — R15-EUROPE-MEDIEVAL

**Review date:** 2026-08-18
**Reviewer:** independent Codex packet reviewer
**Reviewed state:** five packet outputs and 35 ignored cache artifacts; packet and cache remained read-only
**Verdict:** **RETURN**
**Public-content state:** **blocked; no public prose**

## Decision

This packet has a strong bounded core. Independent replay confirms the selected Canterbury
case passages, the pivotal Hildegard clauses, the 1536 Latin *De melancholia* text, the
Arabic-to-Latin comparison cautions, the printed *Prerogativa Regis* clauses, and the packet's
refusal to turn Bethlem or the “Great Confinement” into medieval origin stories. Its lived-
experience audit is especially careful about linguistic mediation, household economics,
restraint, bereavement, consent, outcome, and the difference between a recorder's miracle or
medical narrative and a patient voice.

The packet nevertheless requires return before coordinator reconciliation. The substantive
case readings are not the problem. The blockers are graph and record defects, over-broad or
compound claims, an unproven Hildegard source-layer rating, and a missing implementation
chain for the English royal-law lane:

1. machine-readable independence groups do not represent shared parent texts, and REL rows
   do not carry a normalized dependence group;
2. all four disagreement records are missing required canonical fields;
3. several claim types, labels, and atomicity boundaries overstate what the opened evidence
   establishes;
4. two RELs use invalid compound fit grades, one Hildegard REL overstates fit, and one Bethlem
   relationship assigns evidentiary work to a catalog that does not perform it;
5. the opened Hildegard web transcription is rated like an opened critical edition even
   though its edition basis was not documented;
6. the *Prerogativa* lane opens normative wording and later scholarship but no manuscript and
   no concrete pre-1350 implementation record; and
7. the cache manifest lacks the required byte-count and transformation fields.

This is a bounded repair return. It is not a request to add more regions, authors, or a general
survey of medieval Europe.

## Materials and method

Read in full:

- `PROJECT-BRAIN.md`;
- `BATCH-04-INDEX.md`;
- `sources/EVIDENCE-MODEL.md`;
- `sources/SOURCE-RATING-AND-CAPTURE-PROTOCOL.md`;
- R15 `BRIEF.md`; and
- all five R15 packet outputs.

Risk-based replay used Agent Reach/Jina, direct institutional records, and the full cached
texts or page images. Agent Reach reported Jina Reader available and Exa unavailable; the
packet's stated Jina/direct-source fallback is accurate. Search snippets and abstracts were
treated as discovery aids only.

The replay covered:

- Robertson's 1876 *Materials for the History of Thomas Becket*, vol. 2, Book IV.19 and
  IV.37, together with Trenery's complete dissertation discussion;
- the Latin *Scivias* protestificatio and its opened UC Davis/Penguin teaching translation,
  plus Foxhall's complete reception-history article;
- the 1536 Basel *De melancholia* witness at printed p. 280 and the complete opened Pormann
  and Ben Yahia comparison passages;
- the printed *Statutes of the Realm* wording, Buhrer's complete dissertation discussion,
  and current Harvard, National Library of Scotland, and Parker Library manuscript records;
- Historic England's Bethlem page, the Bethlem archive catalog, the museum's specialist-
  referenced history page, and upstream charter/1403 visitation leads; and
- the complete opened Coldefy article for the later “Great Confinement” frame.

## Risk-based source replay

| Chain / issue | Exact replay result | Disposition |
|---|---|---|
| Canterbury: Hermer and medical cost | Robertson Book IV.19, printed pp. 198–199, gives `Consulit pater medicos non paucos`, the physician's demand for excessive payment, and the father's poverty. Trenery pp. 100–103 and 111 place the case in the selected miracle corpus. | **PASS.** This supports a recorder's representation of consultation, cost, and household constraint; it is not a patient statement, prevalence measure, treatment-effect estimate, or proof of ordinary practice. |
| Canterbury: Matilda's restraint and speech | Robertson Book IV.37, printed pp. 208–209, gives restraint for four or five hours and speech in her own language that the recorders could scarcely understand. Trenery pp. 100–103 and 132–138 supplies the modern corpus/genre analysis. | **PASS.** The packet correctly treats the infant-death context, restraint, and linguistic mediation with empathy and without diagnosing Matilda or making spectacle of her distress. |
| Canterbury corpus generalization | Trenery's two selected cases and broader dissertation analysis establish a bounded modern reading of a collected miracle corpus, not medieval-European prevalence or a complete care system. | **REPAIR.** Rewrite `CLM-024204` as an attributed Trenery position and label it **Documented**, or add independent corpus evidence adequate to the present `broad_cultural` / **Strongly supported** burden. |
| Hildegard's reported visionary state | The opened Latin has `non ... in phrenesi`, `vigilans et circumspecta in pura mente`, and the delayed-writing explanation involving doubt, illness, a noble young woman, and a man. The opened English page renders the pivotal clauses but identifies a Penguin Classics teaching layer rather than documenting a critical edition. | **PASS FOR DISPLAYED WORDING; RATING REPAIR REQUIRED.** The web transcription can show what that transcription displays. It cannot be called an opened L1 critical edition until its edition/manuscript basis is named and checked. Preserve genre, self-report, recorder, and translation limits. |
| Hildegard retrospective diagnosis | Foxhall's complete article says Singer first proposed the retrospective diagnosis in 1913, published it in 1917, and traces later reuse. | **PASS WITH ATTRIBUTION.** The packet is right to reject the diagnosis as Hildegard's own claim. `CLM-024209` must not silently turn one reception-history route into independently established “first” and downstream consensus; attribute, split, or open the relevant upstream Singer/reception nodes. |
| Constantine's Latin definitions | The 1536 Basel witness, printed p. 280, visibly contains the opening distinction between hypochondriac and cerebral forms, fear and sadness, loss of a loved thing, and expectation of harm. | **PASS** for this printed Latin witness and these exact opening propositions. It is not the Arabic original and does not by itself date a translation event or prove medieval implementation. |
| Arabic/Latin relationship | Pormann pp. 14–16 describes Constantine as translator at Monte Cassino and reports Garbers's comparison: fairly faithful to a point in Book II, then divergence and added therapies. Ben Yahia pp. 156–162 reports comparison with a Munich Arabic manuscript and substantial agreement of plan, ideas, and definitions. | **PASS WITH DEPENDENCE CONTROL.** “Translation/adaptation largely derived, later divergence” is defensible as a bounded scholarly conclusion. Garbers as reported by Pormann is not a new independent collation, and the unopened Arabic/Garbers layer remains a publication hold. |
| Constantine omnibus content claim | `CLM-024210` joins the opening definitions to body, imagination, memory, reason, regimen, and humor claims across the work, while `EVD-024112` locates only pp. 280–281. | **REPAIR.** Split/narrow the claim or supply exact page-specific evidence records and locators for every retained proposition. Do not treat an opening-page replay as a whole-work audit. |
| Constantine witness date | The Tübingen object record confirms Basel 1536, shelfmark/identifier, DOI/URN, and public-domain routing. `EVD-024112`, however, is presently a text-passage record, while `REL-024327` says it performs object-metadata/date work. | **REPAIR.** Add a dedicated metadata EVD or expand an atomic evidence record to capture the object date and identifier, then rewire the relationship. A source-ledger metadata field alone does not complete Source→EVD→Claim traceability. |
| *Prerogativa* wording and status | The printed edition contains the retained §§XI–XII wording. Buhrer p. 76 n. 76 reports that the earliest extant manuscripts are fifteenth century, gives the late-thirteenth-century/1324 dating split, and warns that classification as a statute is mistaken. Current Harvard, NLS, and Parker records independently confirm late-fourteenth-/fifteenth-century manuscript witnesses. | **PASS** for the printed normative wording and a genuinely disputed date/status. **REPAIR** the upstream manuscript chain: open and record at least one institutional manuscript record, with folio/date/hand limits, rather than leaving the key status caution inside later scholarship only. |
| *Prerogativa* implementation | No manuscript image or concrete pre-1350 inquisition, custody action, wardship record, or other implementation record was opened. | **RETURN BLOCKER.** Open at least one bounded pre-1350 action/implementation chain and trace it upstream to the record or an edition with an exact locator. Separate norm, administrative action, household/property interest, coercion, and outcome. If the evidence cannot be obtained, narrow the lane and state the documented gap rather than implying implementation. |
| Bethlem 1247/1403 | Historic England reports a 1247 foundation and says people called “lunatic” formed a majority by 1403. The Bethlem catalog starts its surviving institutional series much later and does not independently prove either proposition. A specialist museum history says the 1247 foundation was a priory/alms/hospitality foundation and reports six mentally captive and three other sick people in the 1403 visitation. | **REPAIR.** Split `CLM-024217`: (a) what the 1247 foundation evidence does not establish by 1350, and (b) an explicitly attributed 1403 report outside the packet boundary. Open the charter/visitation edition if retaining exact historical counts or firm institutional claims. Keep “first psychiatric hospital” withdrawn. |
| “Great Confinement” | The opened Coldefy article describes the named Foucauldian frame through Paris/France and 1656, well outside the packet's medieval boundary. | **PASS.** Its only valid role here is a later historiographic boundary check. The medieval claim remains withdrawn; no medieval evidence should inherit this relationship. |

## Source levels, claim fit, and translation layers

### Source-layer findings

- `SRC-024001`/`SRC-024002` can support the exact printed Canterbury wording and a modern
  specialist interpretation respectively, provided their distinct jobs remain visible.
- `SRC-024005` is not demonstrated to be an original-language critical edition. It is an
  online Latin transcription whose edition basis is not stated on the opened page. Rate it
  for the displayed transcription (normally L3-A for that page's wording), or open and cite
  the named critical edition/manuscript before retaining L1. Apply the correction consistently
  to `EVD-024109` and `REL-024316`, `REL-024319`, `REL-024321`, and `REL-024347`.
- `SRC-024006` is a teaching/translation page and is correctly not a medieval primary voice.
  It must retain named translator/commentator and edition limitations wherever quoted.
- `SRC-024008` is L1 for the 1536 printed Latin witness. It is not L1 for Ishaq's Arabic,
  Constantine's lost working exemplar, the translation event, or medieval practice.
- `SRC-024009` and `SRC-024010` are specialist scholarly routes. Record when both depend on
  the same Arabic/Latin comparison tradition instead of counting every citation as an
  independent evidentiary route.
- `SRC-024011` is a public heritage summary, useful for its current institutional claim and
  for tracing that claim upstream. It is not sufficient for a priority claim or exact 1403
  historical counts without the underlying record.
- `SRC-024012` establishes archive scope. It does not repeat or independently prove a 1247
  function, 1403 patient majority, or medieval treatment regime.

### Relationship defects

- Change `REL-024321` from fit A to fit C: Hildegard's Latin self-description contextualizes
  or qualifies a later retrospective-diagnosis history; it does not directly establish that
  reception chronology.
- `REL-024339` (`L3-A/D`) and `REL-024344` (`L2-B/D`) use invalid compound fit grades. Every
  consequential relationship must have one exact source level and one A–D job. Split the
  relationship if it truly performs two jobs, or select the actual job.
- Remove or retarget the Bethlem-catalog relationship to `CLM-024217`; the catalog's date
  range/holdings scope does not independently support the heritage page's medieval-history
  proposition.
- Recompute affected claim labels after the repaired relationships. A claim cannot inherit
  **Strongly supported** merely from multiple records that share one parent text or reception
  chain.

## Independence and citation-chain audit

The packet's prose recognizes dependence, but the canonical fields do not. Current unique
`independence_group` values make dependent routes look machine-independently corroborative:

- the Becket Latin edition and Trenery's use/translation of the same miracle material;
- the Hildegard Latin transcription and the modern English teaching translation;
- the printed *Prerogativa* and scholarship analyzing that printed/manuscript tradition;
- Constantine's Latin witness and modern comparison accounts, including Pormann's report of
  Garbers; and
- Bethlem heritage/catalog routes that refer to the same institutional history without
  independently reproducing the medieval records.

Add a shared parent-text/citation-chain group to every affected SRC/EVD and a normalized,
machine-readable dependence field to every REL. It is acceptable to retain distinct
analytical-route identifiers in addition to the shared parent group. It is not acceptable to
use unique labels that make common ancestry disappear. Then rerun label calculations using
independent routes rather than relationship count.

## Claim schema, atomicity, and disagreement audit

### Claims requiring repair

- `CLM-024202` is not `individual_experience`; its proposition concerns mediation and
  provenance. Retype it as `interpretive` or `quotation_or_position` and preserve the human
  subject separately in the lived/archive record.
- `CLM-024204` is too broad and too strong for one modern dissertation route. Attribute and
  narrow it, or meet the present broad-cultural burden with independent corpus evidence.
- `CLM-024209` combines an origin/priority statement with later reuse. Split those propositions
  and either open the Singer/upstream reception chain or state “Foxhall reports/traces” with a
  **Documented** label.
- `CLM-024210` is an omnibus whole-work claim without whole-work locators. Split or narrow as
  described above.
- `CLM-024217` combines a negative inference about 1247/1350 with a reported 1403 institutional
  composition. Split it; 1403 is outside the packet boundary and only an attributed summary
  until the visitation record is opened.
- `CLM-024220` is an omnibus archival-silence claim spanning three settings and six separate
  questions: prevalence, ordinary care, consent, coercion, treatment effects, and durable
  outcomes. Decompose it into corpus-specific, atomic Unknown/absence audits with named search
  boundaries. Do not infer absence in Hildegard or Bethlem from Canterbury, Constantine, and
  royal-law source subsets.

### Disagreement records

`DIS-024401` through `DIS-024404` do not satisfy the canonical disagreement schema. For each,
add:

- bounded time, place, population, and historical terminology;
- explicit linked EVD and SRC IDs for each side;
- the evidentiary reason for disagreement;
- whether the dispute concerns text, date, authorship, interpretation, diagnosis, practice,
  or outcome;
- the observed expert distribution and what has not been measured;
- mainstream/minority/fringe/rejected status without false balance; and
- review date and reviewer.

Do not manufacture a two-sided controversy where the packet has only one opened scholarly
route. In that case, mark the expert distribution Unknown and keep the public claim on hold.

## Lived experience, trauma, coercion, and status

**PASS.** This is the packet's strongest control layer.

The audit correctly records that:

- Matilda's and Hermer's experiences reach us through miracle collectors and later editors,
  not first-person testimony;
- Matilda's restraint, bereavement context, and poorly understood speech require an empathetic,
  non-spectacular account, with no diagnosis or cure claim added;
- Hermer's household poverty and physician-payment episode cannot stand in for general access
  or ordinary practice;
- Hildegard's self-description belongs to a visionary/theological genre and cannot be reduced
  to a modern neurological or psychiatric label;
- legal custody/wardship language concerns property, authority, and administration as well as
  any represented impairment; and
- prescriptions, norms, institutional summaries, administrative actions, and treatment
  outcomes are different evidence classes.

Keep the current public holds on diagnosis, prevalence, consent, treatment effectiveness,
durable outcome, and direct patient voice. The required *Prerogativa* implementation addition
must receive the same status/gender/property/coercion audit rather than being treated as a
neutral example of care.

## Myth, priority, and scope audits

- **Bethlem as the first psychiatric hospital:** correctly withdrawn. Preserve withdrawal.
- **Hildegard as a securely diagnosed migraine patient:** correctly rejected as a direct
  historical diagnosis. Preserve the reception-history framing and uncertainty.
- **Constantine as a simple original author or a verbatim translator throughout:** correctly
  rejected. Preserve Arabic/Latin layer and later-divergence controls.
- **The Church uniformly opposed medicine:** correctly blocked; the packet's selected material
  cannot support that universal.
- **Possession as the universal medieval explanation:** correctly blocked; no universal follows
  from this bounded corpus.
- **Families simply abandoned distressed relatives:** correctly blocked; the packet shows
  mediated household involvement but cannot establish prevalence or a universal pattern.
- **A medieval European Great Confinement:** correctly withdrawn as an anachronistic import from
  a later French/Parisian historiographic frame.

All five withdrawn myth claims have reasons and graph relationships. Preserve the withdrawal
mechanism while repairing the surrounding dependence model.

## Cache, rights, and reproducibility

The 35 cached artifacts were checked against the packet manifest:

- all 35 SHA-256 values match;
- all artifacts remain ignored and untracked;
- the total local cache size is 350,238,812 bytes;
- rights strings are present and generally conservative;
- the Foxhall article's CC BY 3.0 statement and the Tübingen public-domain route were visible
  in the opened source/material; and
- copyrighted scholarly materials remain private research cache with no redistribution route.

**Repair required:** add the actual byte count and transformation note for every cached object,
including whether the object is an original download, OCR/text derivative, XML extraction,
page image, or generated research aid. Recompute hashes after any cache change. Do not put the
ignored research cache into git.

## Mandatory repair checklist

1. **Normalize citation dependence.** Add shared parent-text/citation-chain groups across
   dependent SRC/EVD records, add a machine-readable dependence group to every REL, and
   recalculate labels from genuinely independent routes.
2. **Repair Hildegard's text layer.** Open/name the critical edition or downgrade the online
   Latin transcription and every dependent EVD/REL consistently; document the translation
   edition and locator limits.
3. **Complete all four disagreement records.** Add every canonical field, exact SRC/EVD links,
   reasons, expert distribution, fringe/rejected status, review date, and reviewer.
4. **Retype and recalibrate Canterbury claims.** Retype `CLM-024202`; rewrite `CLM-024204` as an
   attributed bounded position with a defensible label or add adequate independent support.
5. **Split the Hildegard reception claim.** Separate “first proposed” from later reuse; open
   Singer/reception nodes or attribute the full chronology to Foxhall and mark it Documented.
6. **Decompose Constantine's omnibus claim.** Give every retained body/faculty/regimen/humor
   proposition its own exact locator and evidence record, or narrow to the replayed opening
   pp. 280–281. Preserve Arabic-original and practice holds.
7. **Create a Constantine metadata EVD.** Capture the 1536 object metadata/identifier and rewire
   `REL-024327` so that evidence, not ledger metadata alone, supports `CLM-024212`.
8. **Complete the royal-law evidence chain.** Record at least one institutional manuscript
   record and one concrete pre-1350 implementation/action record with exact locators and an
   upstream check. If unavailable, narrow the lane and explicitly document the failed search.
9. **Split and rerate Bethlem.** Separate the 1247 foundation/function inference from the 1403
   report, identify 1403 as outside boundary, open the charter/visitation if retaining firm
   details, and remove the catalog's unsupported evidentiary role.
10. **Decompose `CLM-024220`.** Create corpus-specific atomic Unknown/absence claims with named
    search boundaries; do not bundle six questions across three settings.
11. **Repair REL grades and semantics.** Change `REL-024321` to fit C; replace `L3-A/D` and
    `L2-B/D` with one grade per relationship or split them; audit every changed claim's inbound
    qualifiers/contradictions and regenerate affected RELs.
12. **Complete cache provenance.** Add per-object bytes and transformation notes, preserve
    rights/redistribution controls, rerun all hashes, and include a repair-disposition log.
13. **Rerun full validation.** Check unique 024 IDs, required atomic SRC/EVD/CLM fields,
    controlled vocabularies, typed REL endpoints/verbs, no orphan retained claims or evidence,
    complete disagreement/withdrawal records, dependence-aware label arithmetic, cache hashes,
    rights, ignore state, and `git diff --check`.

## Nonblocking but publication-critical gaps

These are not permission to broaden the packet during the bounded repair. They remain gates
for later public prose:

- a named Hildegard critical edition and a publication-grade translation;
- the Arabic Ishaq witness and/or Garbers's direct comparison, with an Arabic-capable reviewer;
- a manuscript-image check for the selected *Prerogativa* wording and transmission;
- direct charter and 1403 visitation editions before exact Bethlem counts or institutional
  function claims;
- more than one specialist route before presenting a Hildegard retrospective-diagnosis
  reception chronology as consensus;
- any defensible prevalence, ordinary-care, treatment-effect, or durable-outcome estimate;
- evidence from outside these three tightly selected settings; and
- direct patient voice, which this packet does not recover.

## Gates

### Internal reconciliation gate

**Closed.** Reopen only after all 13 mandatory repair groups are disposed item by item and a
reviewer replays the changed pivotal passages, claim graph, dependence groups, cache manifest,
and validation output.

### Public-content gate

**Closed.** No public prose may be drafted from this packet until the internal gate passes and
the relevant publication-critical holds are either resolved or stated explicitly in the
public claim boundary. A repaired packet would authorize only the bounded propositions it
actually evidences; it would not authorize claims about “medieval Europe” as a whole.

## Independent reviewer closure — 2026-08-18

**Closure verdict:** **PASS WITH GAPS**
**Internal reconciliation gate:** **Open for the repaired, bounded claims only**
**Public-content gate:** **Closed**

I independently replayed the repaired packet rather than accepting its disposition log. The
thirteen mandatory repair groups are materially closed. The packet may now enter bounded
coordinator reconciliation, but it is not publication-ready and does not license a general
account of medieval Europe.

### Repair-by-repair closure

| repair group | closure | independent replay |
|---|---|---|
| 1. Dependence normalization | **Pass** | Every SRC and EVD has a machine-readable `parent_text_group`; all 66 RELs have a normalized dependence group. Becket, *Scivias*, Singer reception, *Prerogativa*, the 1285 Crown action, Ishaq–Constantine, Bethlem, and Great Confinement chains remain visibly non-independent. |
| 2. Hildegard text layer | **Pass with publication hold** | The Bibliotheca Augustana web transcription and UC Davis teaching translation are no longer treated as critical-edition witnesses. EVD-024109 and its dependent RELs are consistently L3; CLM-024207 and CLM-024230 retain the critical-edition and publication-grade-translation holds. |
| 3. DIS schemas | **Pass** | DIS-024401–404 each contains the canonical question, scope, terminology, two positions, exact evidence for the difference, dispute type, agreement, expert-distribution statement, status weighting, approved wording, date, and reviewer. Unknown distributions are not presented as balanced expert camps. |
| 4. Canterbury claim types | **Pass** | CLM-024202 is now an interpretive/provenance claim about the opened record's mediation. CLM-024204 is a bounded attribution to Trenery, with the two replayed cases marked as illustrations rather than independent validation of a corpus-scale result. |
| 5. Hildegard reception split | **Pass with publication hold** | CLM-024209 is limited to Foxhall's report about Singer's 1913/1917 proposal; CLM-024221 separately attributes later reuse to Foxhall. Neither claim is counted as independent confirmation of firstness, diagnosis, or consensus. |
| 6. Constantine claim scope | **Pass with specialist hold** | CLM-024210 is narrowed to the opening definitions on printed pp. 280–281 of the Basel 1536 witness. Unlocated faculty, regimen, humor, therapy, practice, and outcome propositions were not retained. |
| 7. Constantine METS evidence | **Pass** | EVD-024123 now captures the Basel 1536 object, shelfmark `Ja 1.2, 1. Stück`, DOI `10.20345/digitue.21543`, URN, SWB identifier, logical `De melancholia` span 280–298, object page 301, and PDM rights field. REL-024327 correctly supports CLM-024212 from this metadata evidence. |
| 8. Royal-law chain | **Pass with implementation hold** | The NLS catalogue record identifies Adv.MS.28.7.5 as an early-fifteenth-century English witness and locates *Prerogativa Regis* at fols. 179r–184r. The official Close Roll calendar at printed pp. 343–344 supplies one concrete conditional order dated 15 November 1285. CLM-024222 is an administrative-action claim; CLM-024228 keeps examination, execution, consent, support quality, and outcome Unknown. |
| 9. Bethlem split and rerating | **Pass with primary-record and priority holds** | CLM-024217 attributes current 1247 summaries; CLM-024223 states only a named pre-1350 search gap; CLM-024224 attributes the museum page's 1403 report and marks it outside the packet boundary. CLM-024218 remains withdrawn. Neither the charter nor the 1403 visitation has been opened. |
| 10. Silence decomposition | **Pass** | CLM-024220 and CLM-024225–230 now separate two-record voice mediation, consent, durable outcome, Constantine implementation, Andrew follow-through, Bethlem catalogue scope, and Hildegard critical/diagnostic limits. Each names its corpus or source boundary and forbids historical-absence inference. |
| 11. REL grades and semantics | **Pass** | All RELs use one L1–L5/LX source level, one A–D fit, and a controlled verb. REL-024321 is L3-C. Changed claims have appropriately bounded supporting, qualifying, contextualizing, or contradicting edges. |
| 12. Cache provenance | **Pass** | The 35-row manifest matches 35 local cache objects. All SHA-256 hashes and byte counts replay; total size is 350,238,812 bytes. Every row records a transformation/derivation and rights restriction. Cache paths remain ignored and none is tracked by git. |
| 13. Full validation | **Pass** | Reparse found 16 unique SRC, 23 unique EVD, 30 unique CLM, 66 unique REL, and four DIS records, all in the 024 namespace. All endpoints resolve; no evidence or claim is orphaned; controlled ratings/verbs validate; `git diff --check` passes. |

### Pivotal source replay

- **Hildegard:** the opened Latin web text displays the pivotal waking/clear-mind and delayed-writing
  passages, but no critical-edition basis is displayed. The teaching translation identifies its
  modern translator/commentator but is not a publication-grade textual authority. Foxhall's
  peer-reviewed reception article supports attributed reception-history claims and the warning
  against retrospective diagnostic certainty, not a diagnosis.
- **Constantine:** the cached Tübingen METS record independently confirms the 1536 object's
  identifiers, extent, and public-domain metadata. The retained substantive claim stops at the
  directly replayed opening on printed pp. 280–281; Arabic-original and practice claims remain
  held.
- **Royal law:** the NLS institutional catalogue supports only one witness's date, place,
  language, and folio range. The Close Roll calendar records a conditional future-tense action,
  not its execution. The NLS site was bot-blocked in Jina/direct replay, so its full official
  catalogue result was reopened through the documented primary-source web fallback; the Close
  Roll was replayed in the official Public Record Office/HMSO calendar scan.
- **Bethlem:** the museum page distinguishes the 1247 priory/reception account from its
  out-of-boundary 1403 report, while Historic England supplies a modern heritage characterization.
  These modern institutional pages do not substitute for the unopened charter or visitation and
  do not satisfy a cross-regional “first psychiatric hospital” burden.

### Nonblocking graph hygiene

Three exact evidence-to-claim support tuples are duplicated inside their existing dependence
groups: REL-024327/REL-024361, REL-024353/REL-024363, and
REL-024339/REL-024358. Their notes explicitly deny extra independence, and the packet's label
arithmetic rule prevents inflation, so they do not reopen a mandatory repair. The coordinator
should deduplicate these edges before graph export.

### Publication holds preserved

The public gate remains closed pending, at minimum, the claim-specific work required for any
prose selected for publication:

- a named Hildegard critical edition and publication-grade translation, plus direct Singer and
  downstream reception nodes before any priority or consensus claim;
- an Arabic witness and/or Garbers comparison with Arabic-capable review for the
  Ishaq–Constantine relationship, and a specialist check of the selected Latin;
- manuscript-image or critical-edition collation for the selected *Prerogativa* wording;
- follow-through evidence for the Andrew le Merk order before any execution, consent, care,
  coercive-experience, or outcome statement;
- the 1247 Bethlem charter, the 1403 visitation in the later packet, defined comparison terms,
  and a cross-regional predecessor survey before any institutional-priority language;
- a larger and more varied archive for ordinary practice, non-success, long-term care,
  prevalence, and lived experience; and
- direct patient voice, which this packet does not recover.

**Final closure:** the internal gate is open only for bounded reconciliation under the packet's
existing wording limits. The public gate remains closed. All firstness, modern-diagnosis,
continent-wide, prevalence, treatment-effect, and recipient-experience claims remain withdrawn,
Unknown, attributed, or held exactly as recorded in the repaired claim map.
