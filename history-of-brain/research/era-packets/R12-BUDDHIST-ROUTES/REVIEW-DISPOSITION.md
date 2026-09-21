# R12-BUDDHIST-ROUTES — mandatory-review repair disposition

**Repair date:** 2026-08-18
**Repairer:** R12 Codex packet researcher
**Review addressed:** `reviews/R12-BUDDHIST-ROUTES-REVIEW.md`
**State:** original 14 groups plus four closure-return repairs dispositioned; final independent replay required
**Public/internal-outline state:** blocked

## Dispositions

| review group | disposition | changed records / result |
|---|---|---|
| 1. Normalize 17 source records | **Completed.** The ledger now has a single 17-row definition table and keyed field continuations covering controlled type/subtype, creator role, date/edition/version, container/holder, language/original language/translator, identifiers/access/workflow, scope/population, provenance/source position/limits, rights/protocol, dependence, level/fit, upstream check, and rejection reason. | `SOURCE-LEDGER.md`; `SRC-018000–018016`. `SRC-018010` remains controlled `discovery_lead`, L5-D, status `lead`. |
| 2. Normalize evidence records | **Completed.** The original 22 records were normalized and five atomic records added. Every evidence record now has source, locator, form, description, translation/original handling, context, speaker, recorder, method/directness, representativeness, limits, sensitivity, extractor/date, and controlled verification status. | `CLAIM-MAP.md`; `EVD-018100–018126`. |
| 3. Normalize claim records | **Completed.** Original claims were normalized and two split/date claims added. Each has controlled claim type, time/geography/population, controlled universality and evidence label, current-evidence note, anachronism, sensitivity, dispute, wording, creator/date, and controlled review status. | `CLAIM-MAP.md`; `CLM-018200–018220`. |
| 4. Split compound records | **Completed.** `EVD-018107` now contains date proposal only; `EVD-018122` contains Bodleian custody. `CLM-018206` now contains date only; `CLM-018219` contains custody. `EVD-018109` is Sanskrit only and `EVD-018123` Hoernle English. `EVD-018117` is rights only and `EVD-018124` principles. `EVD-018120–121` are formal researcher audits with exact source sets/method. | New atomic IDs `EVD-018122–018124`; `CLM-018219`; updated `REL-018312`, `018315–316`, `018323`, `018327`, `018336`, `018339–342`. |
| 5. Repair CKM chronology | **Completed.** Baums 2014's “probably second century” proposal is atomic `EVD-018125` / `CLM-018220`; Neelis's possible carriage after the late first/second century stays separate in `EVD-018103`. Findings distinguish date, copying place, reported recovery, manufacture, movement, and use. | `CLAIM-MAP.md`, `FINDINGS.md`; `REL-018343–344`. |
| 6. Repair Bower chain | **Completed with upstream gap preserved.** Purchase at Kucha, reported exact find context, seven texts/multiple hands, Wujastyk date proposal, and current Bodleian custody are separate. Date remains proposal-only pending Dani/Sander. Derivative GRETIL and shared Dani/Sander chains have explicit `repeats` edges. | `CLM-018205–209`, `018219`; `EVD-018105–110`, `018122–123`; `REL-018346–347`; `GAP-018503–507`. |
| 7. Repair witness inventory | **Completed.** “Complete” is bounded to Yao's four compared witnesses. Ninth-century dating is attributed. Ancient translator and proofreader roles are separate; transliteration variants Palgyi Lhünpo/dPal gyi lhun po are preserved. | `EVD-018111`, new `EVD-018126`; `CLM-018210`, `018212`; `REL-018321`, `018345`; `FINDINGS.md`, `LIVED-EXPERIENCE-AND-ARCHIVE.md`. |
| 8. Repair care claim | **Completed with gap preserved.** `CLM-018213` is now limited to 84000 v1.1.5's Tibetan-based English 1.70–1.81. Roles are “rendered” as layman/novice/monk; the note's Sanskrit `śrāmaṇeraka`, Chinese `求寂`, and Tibetan `dge sbyong` comparison is recorded. No lay-worker demographic or cross-witness role equivalence is inferred. | `EVD-018115–116`; `CLM-018213`; `REL-018324–326`, `018341`; `GAP-018509–511`; findings/lived audit. |
| 9. Separate textual genealogy and route | **Completed.** `CLM-018200` now describes three carrier/witness/source problems, not three route histories. `CLM-018211` is selected-locus textual genealogy. `CLM-018217` is Neelis's bounded route model. Former route relations `REL-018334–335` now target textual genealogy and archive conditions. `DIS-018407` excludes variants/custody from physical-route proof. | `CLAIM-MAP.md`, `FINDINGS.md`. |
| 10. Repair claims 214–217 and verbs | **Completed.** `CLM-018214` now says custody conditions shape the available archive, not that custody is an untested causal part. `CLM-018215` documents modern reception and marks ancient identity unsupported. `CLM-018216` is Unknown/not established with handoffs. `CLM-018217` is regionally bounded. `originates` and `illustrates` now distinguish modern exemplars from ancient evidence. | `REL-018327–335`; `DIS-018406–407`. |
| 11. Complete or defer myth chains | **Completed as explicit deferral.** Cohen and Prasad remain dated psychology/psychotherapist/MRI reception evidence. Modern mindfulness and broader psychologization/neuroscience genealogies remain `GAP-018514` handoffs. `DIS-018402` now says unsupported/category mismatch rather than contradicted. | `CLM-018215–216`; `DIS-018402`, `018406`; `FINDINGS.md`; `GAPS-AND-HANDOFF.md`. |
| 12. Normalize source ratings | **Completed.** `SRC-018007` is L3 derivative transcription; `SRC-018012` is L2-A for its named English and C/Unknown for implementation; `SRC-018016` is L1-A for the exact 2013 formulation and L2 for synthesis. Each consequential REL now resolves level/fit/dependence. `SRC-018010` is non-evidentiary except for a `repeats` dependence edge. | `SOURCE-LEDGER.md`, relationship table. |
| 13. Normalize 84000 rights | **Completed.** Fixed PDF 3.0 versus current draft-page 4.0 is preserved; all 84000 content is link/paraphrase-only. The unsupported issue date was removed and replaced with “undated DRAFT, opened 2026-08-18.” No 84000 text is cached. | `SRC-018012–014`; `EVD-018117`, `018124`; rights sections in all outputs. |
| 14. Re-run structural/cache validation | **Completed locally; independent replay pending.** Results below. | All owned files; ignored cache unchanged. |

## Initial repair validation — superseded where noted below

- Unique in-range IDs: 17 `SRC`, 27 `EVD`, 21 `CLM`, 48 `REL`, 8 `DIS`, 16 `GAP`.
- Definition tables: 17 source, 27 evidence, 21 claim, and 48 relationship rows.
- Relationship verbs: 21 `supports`, 8 `qualifies`, 8 `contextualizes`, 8 `illustrates`,
  1 `originates`, and 2 `repeats`; all are allowed.
- Relationship endpoints: all resolved. `REL-018346–347` are source-to-source dependence edges.
- Claim coverage: 21/21 retained claims have at least one evidence relationship.
- Controlled claim universality values: 10 individual, 3 local, 2 regional, 3 transregional,
  3 unknown.
- Controlled claim review statuses: 16 source-verified, 5 evidence-linked; none approved.
- Controlled evidence verification statuses: 24 checked against source, 3 second-checked.
- Cache contains exactly two files, both public-domain historical scans and both ignored/untracked:
  - `SRC-018005-hoernle-bower-introduction-edition-1912.pdf`, SHA-256
    `36f9a5732038fc34fc67487bea41544e8aed28d87f9979cb27c2bc0e5d6f3aac`;
  - `SRC-018006-hoernle-bower-revised-translation-1909.pdf`, SHA-256
    `ab5f35479204f091a8dc7e5da987cf4d7e3b664e286778682cb899adf08f9cee`.
- `git ls-files` returned zero R12 cache files. No restricted or copyrighted full text was added.
- `git diff --check` passed for the packet.
- Chain count remains three. East/Southeast regional reception and Tibet-wide implementation
  remain explicit handoffs.

## Holds preserved

- Direct Sander/Dani replay remains `GAP-018504`; Bower date stays proposal-only.
- Four-witness collation of the care locus remains `GAP-018509`; `CLM-018213` remains limited to
  84000's Tibetan-based English.
- Rule implementation, affected-person/community voices, source-community consultation,
  regional reception, modern myth genealogies, and publication permissions remain
  `GAP-018510–018515`.
- No R12 claim is `approved`; no internal outline extraction, seam synthesis, quotation, image,
  or public prose is authorized until independent closure.

## Closure-return repair disposition — 2026-08-18

This section supersedes the initial validation counts and any earlier disposition language that
treated merged schema columns or `REL-018347` as closed.

| remaining repair | disposition | exact result |
|---|---|---|
| Fully atomic per-record source/evidence/claim fields | **Completed.** Source definitions now separate `creator`, `creator_role`, `title`, `container`, `date_created`, `date_published`, `edition`, and `version`; workflow rows separately populate `opened_by` and `opened_on` for all 17 sources. Evidence records now have per-record atomic `translation`, `original_text`, `method`, `directness`, `limitations`, `researcher_note`, `extracted_by`, and `extracted_on` fields for all 27 IDs. Claims now have per-record `created_by`, `created_on`, and `withdrawal_reason` for all 21 IDs. Unknown/not-applicable values are explicit. | `SOURCE-LEDGER.md`; `CLAIM-MAP.md`. |
| Correct CKM Baums 2014 locator | **Completed.** `EVD-018125` now cites the date table on printed p. 185 and the explicit sentence on printed p. 186. The old pp. 187–188 locator was removed from active evidence. | `EVD-018125`, `CLM-018220`, `REL-018343–344`, findings remain attributed. |
| Attribute Tibetan ninth-century dating | **Completed.** `EVD-018126` now records that Yao calls the translation ninth-century while 84000 i.6 says it “seems to have taken place in the ninth century.” `CLM-018212`, findings, chronology, and handoff preserve those source-specific levels of caution. Translator and proofreader roles remain separate. | `EVD-018126`, `CLM-018212`, `FINDINGS.md`, `GAPS-AND-HANDOFF.md`. |
| Withdraw unsupported `REL-018347` | **Completed by quarantine.** No relevant full `SRC-018010` Bower passage was opened. The active edge was removed; its ID is preserved in a withdrawn-relationship register with the exact reason. `SRC-018010` is now outside `DEP-018002-BOWER-DATE`, L5-D, and explicitly unable to support Bower date or dependence. | Active graph ends at `REL-018346`; `REL-018347` reserved/withdrawn; `SRC-018010` quarantined. |

### Post-closure-repair validation

- Active definitions: 17 `SRC`, 27 `EVD`, 21 `CLM`, 47 active `REL`, 8 `DIS`, 16 `GAP`;
  one additional relationship ID (`REL-018347`) is reserved as withdrawn/quarantined.
- Active verbs: 21 `supports`, 8 `qualifies`, 8 `contextualizes`, 8 `illustrates`, 1
  `originates`, and 1 `repeats`.
- All active relationship endpoints resolve. Active claim coverage is 21/21 and evidence coverage
  is 27/27. `REL-018347` has zero occurrences inside the active relationship table.
- Atomic schema-header replay found the required source creator/date/opened keys, evidence
  translation/directness/extractor keys, and claim creator/withdrawal keys.
- CKM replay found p. 185 and p. 186 in both `EVD-018125` field layers; no active pp. 187–188
  locator remains.
- Tibetan dating replay found Yao attribution and 84000's “seems” caution in evidence, claim,
  findings, and handoff records.
- Cache remains exactly two public-domain Hoernle scans. SHA-256 values remain
  `36f9a5732038fc34fc67487bea41544e8aed28d87f9979cb27c2bc0e5d6f3aac` and
  `ab5f35479204f091a8dc7e5da987cf4d7e3b664e286778682cb899adf08f9cee`; both files are ignored,
  neither is tracked, and no restricted source was added.
- `git diff --check` passes for the packet.

**Gate after repair:** ready for the requested final independent replay. Internal-outline and
public-prose gates remain closed until that replay records a passing closure.

## Final locator repair — 2026-08-18

The final closure replay identified one locator-layer error without changing the proposition.

- `EVD-018126` now cites **Yao 2018, Introduction body, printed p. 91** for the assertion that
  the Tibetan translation is ninth-century and for the named translation-team statement.
- Its atomic method row now records the same p. 91 Introduction-body locator.
- Yao 2018 note 3 remains attached only to `EVD-018111`'s witness inventory/locators and the
  note's Yao 2015 pointer; it no longer supports `EVD-018126`.
- 84000 introduction i.6 remains the parallel source and preserves its cautious “seems to have
  taken place in the ninth century” wording.
- The claim, finding, dependency, rights, voice, and public-hold dispositions are unchanged.

Post-repair replay again found 17 sources, 27 evidence records, 21 claims, 47 active
relationships plus one withdrawn reservation, 21/21 claim coverage, 27/27 evidence coverage,
resolved active endpoints, and no active `REL-018347`. Both cache hashes, ignored/untracked
status, and zero-restricted-cache result remain unchanged. `git diff --check` passes.

**Gate:** ready for final independent replay; internal-outline and public-prose gates remain
closed until that replay records closure.
