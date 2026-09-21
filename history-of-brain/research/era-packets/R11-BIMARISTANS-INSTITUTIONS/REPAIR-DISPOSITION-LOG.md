# R11 Bīmāristāns and Institutions — Repair Disposition Log

**Controlling review:** `reviews/R11-BIMARISTANS-INSTITUTIONS-REVIEW.md`
**Repair date:** 2026-08-18
**Repair owner:** R11 packet researcher
**Scope:** packet and ignored R11 cache only; review file untouched
**State:** independent closure complete; PASS WITH GAPS; public holds preserved

| Mandatory group | Disposition | Exact repair | Remaining gate |
|---|---|---|---|
| 1. Relationship graph and canonical records | **REPAIRED** | Rebuilt 48-row graph using only `supports`, `qualifies`, `contradicts`, `contextualizes`, `illustrates`, `originates`, `repeats`; every endpoint is an exact defined ID. Added explicit withdrawn affirmative myths CLM-016082/083, controlled claim labels, canonical claim/source/evidence controls, and valid incoming coverage for every claim. | Independent schema replay. |
| 2. Ibn Jubayr attribution | **REPAIRED INTERNALLY; PUBLIC TRANSLATION HOLD** | Added public-domain scan to cache; collated printed p. 283 page-image lines 8–14 and 14–16. EVD-016027/CLM-016066 now cover the new hospital only; EVD-016044/CLM-016085 cover old-hospital treatment/chains only. Updated lived audit and synthesis; neither institution is called al-Nūrī. | Named rights-cleared modern translation or independently reviewed project translation before public quotation. |
| 3. Source levels / verification | **REPAIRED** | Removed inherited L1 language for unopened RCEA, deed, appointment, al-Nuwayrī, and al-Maqrīzī texts. EVD-016021 and EVD-016029–033 now rate only the opened L2/L3 conduit. CLM-016061 and CLM-016068–072 are attributed and HOLD. | Upgrade only after direct collation. |
| 4. Nūrī epigraphy | **PROTECTED BY HOLD; UPSTREAM NOT OPENED** | Reworded EVD/CLM to Sabatier's displayed French translation, removed direct-inscription implication, and made “expected to recover” explicitly translation-sensitive. | Open 549/1154 inscription and RCEA 4820 diplomatic editions; capture Arabic lines, translation authority, material location, restoration/reading uncertainty. |
| 5. Qalāwūn documents/chronicles | **PROTECTED BY HOLD; UPSTREAM NOT OPENED** | Added SRC-016018 as resolvable unopened Tadhkira dependency; modern-source claims are transparent reports. Fernandes remains L2 document identification. Al-Maqrīzī remains Qalawun VR's displayed translation; deed/chronicle/appointment layers stay separate. | Open/collate Tadhkira, Awqāf 1010, appointment texts, al-Nuwayrī, and al-Maqrīzī. |
| 6. Myth chains | **REPAIRED; MUSIC PUBLIC HOLDS REMAIN** | Corrected Dols Nūrī locator to note 55. Authoritative catalogues resolve Prisse work to 1877 (parts 1869–77), exposing Dols's 1887 as error/unresolved edition reference; exact p. 138 still unopened. Added SRC-016016/017. Replaced occupational pseudo-source with dated query/exemplar audit SRC-016015. Preserved rejected first/music-ward/occupational claims and Horden authorized-route publication hold. | Open Prisse p. 138/upstream; open Evliya vol. 13 p. 268/translation; authorized Horden replay before public citation. |
| 7. Current site/custody/date control | **REPAIRED WITH DAMASCUS UNKNOWN** | EVD-016043 and CLM-016084 date-stamp Egyptian Ministry's 2026-accessed current eye/dentistry statement. Removed current al-Nūrī museum inference from TDV 2007. Added UNESCO SRC-016019 as city-wide context only and CLM-016086 Unknown for institution-specific current Damascus status. Preserved MWNF 1284–85 versus Ministry 1283–84 conversion discrepancy. | Institution-specific Syrian/DGAM verification and named date-conversion authority before publication; recheck time-sensitive Cairo statement. |
| 8. Rights/access provenance | **REPAIRED** | Added exact lawful access/download URL, access date, rights basis, and private/public handling for every cached file; marked Jina-derived CC BY-NC-ND files private-only/no redistribution. Added full Ibn Jubayr scan hash. Manifest and actual cache replay exactly. | Continue link-only/minimum-excerpt handling; no redistribution of restricted/transformed copies. |

## Claims whose gate changed

- CLM-016061: `READY` → attributed `HOLD`.
- CLM-016068–CLM-016072: `READY` → attributed `HOLD`.
- CLM-016066: rewritten as new-hospital-only report.
- CLM-016085: new old-hospital restraint/treatment claim.
- CLM-016082 and CLM-016083: explicit withdrawn affirmative priority myths.
- CLM-016084: new dated current Egyptian Ministry representation.
- CLM-016086: new Unknown current al-Nūrī state.
- CLM-016076, CLM-016077, CLM-016078, and CLM-016081: valid relationship coverage restored without relaxing their wording/public gates.

## Validation replay

The final automated replay must confirm:

1. all `SRC`, `EVD`, `CLM`, and `REL` references resolve and remain in `016xxx`;
2. every claim has a valid incoming relationship using a controlled predicate;
3. every relationship endpoint is a defined record ID;
4. the cache manifest filenames, byte counts, and SHA-256 values exactly match actual ignored files;
5. no cached artifact is tracked;
6. only the R11 packet/cache changed in this repair task; and
7. all public holds named above remain visible.

### Final replay result — PASS

- 20 defined sources, 25 evidence records, 27 claims, and 48 relationships; all unique and in `016xxx`.
- No undefined references, malformed endpoints, or predicates outside the seven controlled verbs.
- Every claim has at least one valid incoming relationship.
- 12 ignored cache files total 33,250,233 bytes; all filenames, byte counts, and SHA-256 values match the ledger.
- Every cached file has an exact access/download route, access date, rights basis, and handling rule; none is tracked.
- Agent Reach is current at v1.5.0; Jina/direct fallback and Exa unavailability remain documented.
- Owned-scope status shows only the R11 packet outputs and this log as untracked changes; cache remains ignored.

This structural PASS does not self-approve the independent evidence-review gate or relax any public HOLD.

## Canonical-record closure disposition — 2026-08-18

**Disposition:** **STRUCTURAL REPAIR COMPLETE; ready for independent bounded recheck.**

- Replaced the incomplete source control matrix with 20 schema-complete JSONL source records,
  one object per `SRC-016000`–`SRC-016019`. Every required `EVIDENCE-MODEL.md` source field is
  present on every object; Unknown and `not_applicable` values are explicit.
- Replaced the incomplete evidence matrix with 25 schema-complete JSONL evidence records,
  one object per `EVD-016020`–`EVD-016044`. Multi-source audits identify one controlling
  `source_id` plus explicit `additional_source_ids`; no global prose supplies a missing field.
- Replaced the grouped claim-type/range assignments with 27 schema-complete JSONL claim
  records, one object per `CLM-016060`–`CLM-016086`, each carrying exactly one controlled
  `claim_type`, one controlled evidence label, and all required claim fields.
- Retired `EVD-016041` as a rejected redundant composite. Its narrower observations remain in
  `EVD-016021`, `EVD-016029`, and `EVD-016032`; its identifier is reserved and its lack of a
  relationship is intentional. All 24 active evidence records participate in the graph.

### Machine validation replay

- JSON parse: 20 source, 25 evidence, and 27 claim objects; all IDs unique and in `016xxx`.
- Schema: zero missing or empty required fields across all 72 canonical objects.
- Controls: zero invalid source types, claim types, claim labels, or claim review statuses.
- Graph: 48 unique relationships; zero invalid predicates or endpoints; 27/27 claims have an
  incoming relationship; 24/24 active evidence records have relationship use; `EVD-016041` is
  the sole rejected evidence record.
- Cache: 12 ignored and zero tracked artifacts; live SHA-256 values continue to match the
  existing manifest. No cache content or rights disposition changed in this structural repair.

### Gates preserved

This closure changes schema structure only. It does not upgrade any conduit, priority,
translation, practice, outcome, current-site, rights, or recipient-voice claim. The internal
outline gate still requires the independent reviewer to close this last structural return. The
public prose gate and all previously recorded publication holds remain closed.
