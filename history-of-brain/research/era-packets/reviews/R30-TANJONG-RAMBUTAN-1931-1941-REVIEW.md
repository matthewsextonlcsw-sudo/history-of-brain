# Independent review — R30 Tanjong Rambutan, 1931–1941

**Reviewed:** 2026-08-19

**Reviewer:** Codex (`/root/review_early_modern_print`)

**Packet reviewed:** `R30-TANJONG-RAMBUTAN-1931-1941`

**Review mode:** read-only acquisition/STOP audit

**Verdict:** **PASS WITH GAPS — keep substantive research and every public-use lane at `STOP`; remove four trailing-space defects before commit.**

## Decision

This is a sound acquisition dossier, not a history packet. It proves only that four exact catalogue records were opened, that their described archival files were not opened, and that the next access and review gates are known. The packet does not turn catalogue titles into institutional history, patient experience, diagnosis, outcome, or a public narrative. Its `STOP` decision is therefore supported.

The dossier may close as a completed `STOP` packet after the four-line formatting repair below. This verdict does **not** authorize internal synthesis, quotation, image reuse, SEO/GEO extraction, or public drafting.

## Material reviewed and replay method

I read the packet brief, all five standard outputs, the cache manifest, both cached acquisition logs, and the governing evidence/source protocol. I then independently replayed the four official Arkib Negara Malaysia (ANM) catalogue routes without logging in or bypassing access controls; replayed ANM's registration and use terms; downloaded and inspected the complete 2017 contextual article; and reran record, endpoint, controlled-value, coverage, cache-hash, ignore, and diff checks.

The web-research environment was healthy (`agent-reach` v1.5.0, current as of review). No web-derived content was written into the packet or its cache during review.

## ANM catalogue and access replay

| ANM accession | Record date | Official route | Independent result |
|---|---:|---|---|
| `1957/0272573W` | 1931-10-05 | <https://ofa.arkib.gov.my/ofa/collection/asset/335843> | Exact record opened; `Mukasurat Akses` was blank; Kuala Lumpur copy shown as orderable; login/registration required; no item images or file pages exposed. |
| `1957/0417828W` | 1932-03-12 | <https://ofa.arkib.gov.my/ofa/collection/asset/503824> | Same bounded access state; no complete file or page-level witness opened. |
| `1957/0422109W` | 1935-04-01 | <https://ofa.arkib.gov.my/ofa/collection/asset/513251> | Same bounded access state; no complete file or page-level witness opened. |
| `1957/0423885W` | 1941-09-14 | <https://ofa.arkib.gov.my/ofa/group/asset/515533> | Exact group record opened; same bounded access state; no complete file or page-level witness opened. |

Direct unauthenticated HTTP replay also reproduced the packet's recorded 200 statuses and byte counts: 13,725; 13,912; 14,023; and 14,737 bytes. The returned pages contained the login and orderability markers recorded by the packet and no `digitdoc`, `lores`, or `renderPdf` item-content route. These checks validate catalogue identity and access state only.

The packet properly rejects all stronger inferences. An archival title is repository metadata, not the described document, a verified event, the language of the file, an affected person's words, or evidence of treatment delivery or outcome.

## Access, copyright, and reuse

ANM's official terms at <https://ofa.arkib.gov.my/ofa/site/tncreg> support the packet's account of the access ladder: permission/registration for research-facility use, limited digital preview for eligible records, physical reservation, and a separate subscriber route for fuller digital access where available. They also separate reference/research copying from commercial reuse, which requires prior Director General permission and source credit, and subject copying to the applicable archive law and fee rules.

Those platform terms are not an item-specific reproduction license. “Can be ordered” does not mean “digitized,” “complete,” “openly licensed,” “privacy-cleared,” or “publishable.” The packet correctly keeps access, ordering, copyright, commercial permission, privacy, dignity, and community authority as separate gates.

The complete contextual article was independently opened from the journal site as a 16-page PDF (253,491 bytes; SHA-256 `3dbdc32a2326284b41602701874337e0e26bac31ab0ff52a3b48a9f1c2753553`, matching the ledger). It describes archival and field-research methods and supplies later scholarly context, but it does not open any of the four frozen ANM files and cannot substitute for them. The PDF bears a 2017 copyright notice and no open-license marker found during review. Its L2/C treatment is appropriate.

The packet also correctly declines to rely on a timed-out official English Act 629 route. No legal proposition depends on an unopened witness.

## Voice, language, privacy, and harm gates

The packet consistently records that **no affected-person, family, worker, clinician, court, translator, or official voice has been opened**. It does not relabel catalogue metadata as testimony. It also preserves these required controls:

- A qualified Malay/Jawi review must precede transcription, translation, language identification beyond catalogue metadata, or quotation. Catalogue language/script labels do not establish a bilingual edition or the file's actual contents.
- Exact names and sensitive catalogue titles remain internal acquisition identifiers. No name, clinical or family detail, alleged offense, self-harm detail, facsimile, or searchable excerpt is cleared for public use.
- The self-harm-related record is described only as a catalogue allegation. The dossier makes no inference about diagnosis, intent, dangerousness, blame, or institutional quality.
- Malaysian/postcolonial review, Chinese- and Malay-community authority, survivor/privacy review, family-law review where applicable, and item-level rights review remain mandatory and non-substitutable.
- Cultural sovereignty, dignity, copyright, and privacy are independent vetoes even if repository access is later granted.

These are appropriate minimum controls for a colonial psychiatric archive. The archive's survival and description practices are themselves mediated; completeness, representativeness, and consent must not be assumed.

## Schema, graph, and cache validation

Machine and manual replay passed the substantive structure:

- `7 SRC / 9 EVD / 11 CLM / 28 REL / 3 DIS`, all unique and within the allocated `042xxx` range.
- Every required field is present; every relationship uses the canonical 12-key schema; all endpoints resolve.
- Relationship source IDs agree with their evidence records; every source, evidence record, and claim is covered.
- All active relationship grades are A–C; no grade-D support is promoted.
- All disagreement top-level and nested endpoints resolve.
- Controlled vocabularies pass for source type/verification/rights, evidence directness/sensitivity, claim type/label/universality/review status, and relationship verb/level/fit.
- The cache contains only `MANIFEST.json`, a 1,699-byte two-object acquisition log/status payload, and no ANM file content or article PDF. Both payload hashes match the manifest, source binding and use/rights notes are present, and all cache files are ignored by Git.

The three disagreements are genuine provenance/interpretive cautions rather than artificial “both sides” balance. Their `HOLD` outcomes are consistent with the packet-wide `STOP`.

## Exact mandatory repair

`SOURCE-LEDGER.md` lines 3–6 each end in two trailing spaces:

- line 3, `Packet`
- line 4, `State`
- line 5, `Opened on`
- line 6, `Opened by`

`git diff --no-index --check /dev/null SOURCE-LEDGER.md` reports all four. Remove those trailing spaces, using blank-line paragraph formatting if separation is desired. Until then, the dossier's stated `git diff --check` target will fail when the currently untracked file is staged. No content or graph repair is otherwise required by this review.

## Unresolved gaps and reopening conditions

These are deliberate STOP conditions, not permission to fill gaps from summaries:

1. Acquire complete, page-order-verifiable copies of all four ANM files through an authorized route, or preserve repository correspondence proving that access is unavailable.
2. Record item-level pagination, language/script, completeness, rights, reuse, and privacy conditions; reconcile every new object to the frozen accessions.
3. Open and authenticate the controlling legal witness before making legal claims.
4. Complete qualified Malay/Jawi translation review and the Malaysian/postcolonial, community-authority, survivor/privacy, family-law, self-harm/trauma, dignity, and rights reviews.
5. Build new page-anchored evidence from the complete files; do not convert these catalogue-derived records into substantive evidence.

Unless all relevant gates are satisfied, the packet remains an internal acquisition record. It is not ready for historical synthesis or publication.

## Closure replay — 2026-08-19

**Final verdict: PASS WITH GAPS.** The requested repair is complete: `SOURCE-LEDGER.md` lines 3–6 no longer contain trailing spaces, and independent `git diff --no-index --check` replay passes on all five packet outputs.

The evidence state is unchanged at `7 SRC / 9 EVD / 11 CLM / 28 REL / 3 DIS`. Identifier uniqueness, source/evidence/claim coverage, relationship source binding, all relationship endpoints, and disagreement top-level and position endpoints replay successfully. The ignored cache remains a two-payload, 1,699-byte control cache; both byte counts and SHA-256 hashes still match `MANIFEST.json`, and all three cache files remain covered by the repository ignore rule.

No further packet repair is required. The gaps listed above remain acquisition and expert-review gates, so substantive research, synthesis, quotation, image use, and every public-use lane remain at `STOP`.
