# R24 Crichton and the New Moon — Independent cross-review

**Review state:** `RETURN WITH REPRODUCIBLE LANES` confirmed; **not approved** for public use.

**Scope:** Read-only review of the packet, ignored cache, and the cited repository/official
sources. This review creates no public prose and does not authorize quotation, imagery, SEO/GEO,
or drafting.

## Decision

The return decision is correct. The verified lanes are real and bounded, but they do not satisfy
the frozen corpus: the six-stratum contribution census is incomplete, the 1862–63 issue/item
locators are unresolved, and the required annual-report, case-record, staff-register, and Adam
Richardson correspondence lanes are absent from the defined cache. The legal and Commission
lanes establish authority and official description, not implementation, outcome, or lived
experience.

## Verified source replay

| packet lane | independent replay | result |
|---|---|---|
| `DGH1/7/1/1/4`, *New Moon* | Wellcome record `w7ymcqk2` describes the December 1844–November 1857 Browne-bound copy, 630 images, CC BY-NC 4.0, and archive-directed commercial-reproduction inquiry. Cached canvases 1, 223, 529, 532, 617, 621, and 624 exist. | pass, rights hold remains |
| `DGH1/7/1/1/1`, *New Moon* | Wellcome record `pz3fx6eu` describes 1,354 images, loose editions plus a 1861–63 bound volume, photocopy variation, CC BY-NC 4.0, and archive-directed commercial-reproduction inquiry. Manifest gives no issue/item-level 1862–63 labels. | pass for object existence; HOLD for target-item replay |
| 1857 Royal Commission | Wellcome `jyxfe6kn` identifies a 944-image, 1857 Commission report under Public Domain Mark. Cached Commission image 131 visibly carries printed p.89 and supports the bounded gardening/amusement evidence. Cached image 401 visibly carries printed p.45 and supports the private/pauper separation and capacity evidence. | pass, subject to correction below |
| Lunacy (Scotland) Act 1857 | Official enacted route and cached 54-page PDF reproduce the Board provisions and section LX Crichton/Southern Counties obligation. | pass; law-only boundary retained |

Source routes:

- https://wellcomecollection.org/works/w7ymcqk2
- https://wellcomecollection.org/works/pz3fx6eu
- https://wellcomecollection.org/works/jyxfe6kn
- https://www.legislation.gov.uk/ukpga/Vict/20-21/71/enacted

## Graph and cache validation

| check | observed | result |
|---|---:|---|
| canonical sources | 8 | pass |
| evidence records | 20 | pass |
| claims | 21 | pass |
| relationships | 34 | pass |
| disagreements | 1 | pass |
| duplicate IDs, malformed canonical JSON, unresolved evidence/claim endpoints, uncovered active evidence or claims | none found | pass |
| relationship verbs | controlled values only | pass |
| cache files | 2,944 | pass |
| logical bytes | 724,121,888 | pass |
| disk use | 716,404 KiB | pass |
| `b22667611` images | 1,354 JPEGs | pass |
| `b22671079` images | 630 JPEGs | pass |
| Commission OCR | 944 JSON files | pass |
| selected Commission images | 10 JPEGs | pass |
| manifests | 4 JSON files | pass |
| root PDFs | 2 | pass |
| cache tracking/ignore | 0 tracked files; sampled PDF and JPEG resolve to `.gitignore:32` | pass |

The six primary checksums recorded in `GAPS-AND-HANDOFF.md` match the cache, including the
Commission PDF, Act PDF, and all four listed manifests.

## Exact repairs required

1. **Correct `EVD-036013`: 150, not 160.** The evidence record states that Southern Counties
   was built for 160 pauper patients. The cited source, Commission Appendix B printed p.45,
   IIIF canvas 401, says **150**. Correct the evidence description and any derivative prose.
   `CLM-036013` does not repeat the wrong number, so it may remain after a targeted replay.

2. **Make the missing 1846–48 stratum explicit.** The frozen brief requires six *New Moon*
   strata. The packet has source-verified anchors for December 1844, July 1849, January 1856,
   and October/November 1857, but no declared 1846–48 issue locator or contribution census.
   `HOLD-R24-02` implies this through the all-six-strata requirement; it should separately name
   the absent early stratum and require exact issue canvases, all-contribution capture, and
   item-level voice/genre/editor/print-labor/uncertainty fields before sampling.

3. **Retain the 1862–63 stop.** The 1,354-image object makes this a reproducible repair lane,
   not evidence of absence. It still lacks a defensible issue boundary and item locator in the
   packet, so it cannot satisfy either the final stratum or the declared 24–30-item microcorpus.

4. **Do not weaken the remaining frozen-corpus holds.** Exact annual reports, twelve internally
   coded case records, the staff engagement register, and Richardson's 1862–63 correspondence
   are all absent from the defined cache. They remain required before the question can be
   answered across authority, class, work, and professional printing.

## Rights, harm, and voice review

- The *New Moon* objects are CC BY-NC 4.0. Their pages are not cleared for Couch Commons'
  commercial use; the packet correctly defaults to links and requires an archive decision for
  reproduction.
- The Commission's Public Domain Mark does not turn official description into patient testimony
  or remove dignity/privacy obligations.
- The Act establishes legal authority only. The packet correctly prevents statute-to-practice,
  practice-to-benefit, and benefit-to-efficacy shortcuts.
- The January 1856 appeal is correctly held as an unidentified, institution-mediated,
  affected-person-positioned contribution. Its source layer cannot establish author identity,
  consent, editorship, printing role, or representativeness.
- No ordinary-worker, family, case-record, or Richardson voice has been improperly promoted.

## Closure condition

Repair item 1, then complete and replay the explicitly declared six-stratum census and all
missing frozen lanes. Re-run the graph, cache, rights, privacy/dignity, historical-language, and
independent-review gates. Until then, retain `RETURN WITH REPRODUCIBLE LANES` and no-public-use
status.

## Final repair-closure replay — 2026-08-19

**Verdict: `PASS WITH HOLDS`; retain `RETURN WITH REPRODUCIBLE LANES` and no-public-use status.**

- **Capacity correction passes.** `EVD-036013` now gives **150** pauper patients and names
  Commission Appendix B printed p.45 / IIIF canvas 401. Independent image replay of cached
  `selected-hires/commission-canvas-401.jpg` reads: “The Southern Counties Asylum was built to
  receive 150 pauper patients.” No active claim repeats the former 160 figure.
- **The 1846–48 stratum is explicitly and correctly quarantined.** Cached b22667611 canvas 65
  visibly carries the April 3, 1846 masthead, and canvas 69 visibly begins the May 4, 1846 issue.
  `HOLD-R24-00`, `EVD-036020`, `CLM-036018`, the ledger, findings, and lived-experience audit
  consistently require a complete contribution census and item-level coding for canvases 65–68
  before sampling or substantive use.
- **Integrity replay passes.** The graph remains 8 canonical sources, 20 evidence records, 21
  claims, 34 relationships, and 1 disagreement, with no malformed JSON, duplicate IDs, orphan
  active endpoints, or uncovered active claims. The ignored cache remains 2,944 files: 1,354
  b22667611 images, 630 b22671079 images, 944 Commission OCR JSON files, 10 selected Commission
  images, 4 manifests, and 2 root PDFs; it has zero tracked files.
- **Holds and harm/rights controls remain effective.** The unresolved 1862–63 locator,
  annual-report, case-record, staff-register, and Richardson lanes remain held. The packet
  continues link-only treatment for CC BY-NC *New Moon* images pending an archive reproduction
  decision, keeps the Commission and statute distinct from lived testimony, and prohibits public
  quotation, imagery, SEO/GEO, or narrative use.

This closure verifies the two requested repairs and the preserved gates only. It does not convert
the packet into a complete corpus or authorize public drafting.
