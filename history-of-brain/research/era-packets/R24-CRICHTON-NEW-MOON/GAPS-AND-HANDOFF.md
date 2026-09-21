# R24 gaps and handoff

**Packet result:** `RETURN WITH REPRODUCIBLE LANES`

**Public state:** prohibited

**Next operation:** repair only; do not draft

## What is complete enough to hand off

- Two parent *New Moon* archive objects have complete local image runs and checked manifests.
- Exact active issue locators exist for December 1844, July 1849, January 1856, October 1857 and
  November 1857.
- The complete Commission and enacted Act are locally available.
- Pivotal Commission claims were replayed at printed pp.89-90 and Appendix B pp.44-49.
- All active source, evidence, claim, disagreement and relationship records use the `036xxx`
  allocation and controlled values.
- Source roles remain separated: contributor, editor, institutional printer, commissioner,
  legislature and archive are not collapsed.

## Exact holds

| hold | required repair evidence | prohibited inference while held |
|---|---|---|
| `HOLD-R24-00` | For the predeclared April 3, 1846 issue in DGH1/7/1/1/1, b22667611 canvases 65-68: capture every contribution and code exact item canvas span, attributed writer/pseudonymity, voice status, genre, editor/selection evidence, print labor and uncertainty before sampling | No 1846-48 sampled item, voice, genre, authorship, print-labor or representativeness claim |
| `HOLD-R24-01` | Exact issue and item canvases for the 1862-63 stratum in DGH1/7/1/1/1 | No 1862-63 contribution, printer, editor, work or transition claim |
| `HOLD-R24-02` | Declared 24-30-item census across all six brief strata, including every contribution in each selected issue before sampling | No representative “patient voice” or genre/prevalence claim |
| `HOLD-R24-03` | Exact 1844, 1849, 1857 and 1862-63 annual-report objects/pages | No institutional-statistics, continuity or implementation claim |
| `HOLD-R24-04` | Twelve internal-coded case records balanced as predeclared, with lawful access and image replay | No clinical, treatment, discharge, family, private/pauper experience or efficacy claim |
| `HOLD-R24-05` | Staff engagement register object/entries | No ordinary-worker recruitment, tenure, identity or experience claim |
| `HOLD-R24-06` | Adam Richardson 1862-63 printing/employment correspondence | No professional-printer, payment, employment or production-transfer narrative |
| `HOLD-R24-07` | Current Dumfries commercial reproduction decision and asset-specific rights | No public image/facsimile or commercial reproduction |
| `HOLD-R24-08` | Independent historical-language, disability/survivor, privacy/dignity and harm review | No public quotation, case story or search hook |

## Cache integrity audit

The following values must be generated from the final local audit rather than copied from an
earlier session. They are inserted below after validation:

Final audit on 2026-08-19:

- total files: **2,944**; total logical bytes: **724,121,888**; `du -sk`: **716,404 KiB**;
- `images-b22667611-1024`: **1,354 JPEGs**;
- `images-b22671079-1024`: **630 JPEGs**;
- `commission-ocr`: **944 JSON files**;
- `selected-hires`: **10 JPEGs**;
- `manifests`: **4 JSON files**;
- root PDFs: **2**;
- `git ls-files` below the packet cache: **0**;
- `git status --untracked-files=all` below the cache: **no output**;
- `git check-ignore -v` binds sampled PDF and JPEG files to `.gitignore:32`.

Primary-file checksums:

| file | SHA-256 |
|---|---|
| `commission-1857-b21780109.pdf` | `89122c33bca4e5c58696aabcbd71d12c68ddded9a6d7e2bfb3082b5aa07366cb` |
| `lunacy-scotland-act-1857-enacted.pdf` | `0fb58a3265bc0b013e4d46204e2545848ba19738324946a1bf7720df72e58dff` |
| `manifests/b21780109-IIIF-v2.json` | `11fb8be44e51b2d0d9f2fb416440b6469bcac1c13fe28dfb4b4fb905ff74b422` |
| `manifests/b22667611-IIIF-v2.json` | `33f1c3c5323764ea466cd3ccac754b87d3c0d05af9b881ee8c40d6a9ccf1fb78` |
| `manifests/b22671079-IIIF-v2.json` | `2869a601f97ed43864bbc5ef97b14bbfdb6dcabeae8023d1b29474cd9063b405` |
| `manifests/jyxfe6kn-work.json` | `3448640da0f58fda5193e07c7fbd6bed356758bdf22a8d8713812f22df4469f3` |

Expected structural checks:

- `images-b22667611-1024/`: 1,354 JPEG files.
- `images-b22671079-1024/`: 630 JPEG files.
- `commission-ocr/`: 944 JSON annotation files.
- `selected-hires/`: 10 JPEG files.
- Root PDFs: Commission and enacted Act only.
- Manifests: four JSON files.
- Entire `research/source-cache/` path ignored by git.
- No cache file tracked or exposed as a normal untracked file.

## Review acceptance tests

An independent reviewer should reject the packet if any of these fail:

1. Every `SRC-036xxx`, `EVD-036xxx`, `CLM-036xxx`, `REL-036xxx` and `DIS-036xxx` ID is unique and
   within allocation.
2. Every evidence source exists; every relationship endpoint exists; every active evidence and
   claim has graph coverage.
3. Source levels are only `L1`, `L2`, `L3`, `L4`, `L5`, `LX`; claim fit only `A`-`D`;
   relationship verbs only the seven controlled values.
4. The 1849 issue is not narrated as causing separation.
5. The October 1857 issue is not narrated as proving Act implementation.
6. Patient contribution is not promoted to patient control, free expression or
   representativeness.
7. Commission labor/amusement judgments remain attributed and do not become efficacy or
   voluntariness claims.
8. No worker, family, case, Richardson or 1862-63 content claim bypasses its hold.
9. No archive image, quote or identifiable case material is authorized for public use.

## Coordinator handoff

The verified lanes may be used only to map an internal seam among institutional print, official
inspection, class separation and enacted authority. R24 cannot yet answer its full frozen question.
It must not be counted as a completed Batch 06 packet until repair, independent review, mandatory
repair response and independent closure replay all finish.

## Independent-review repair disposition — 2026-08-19

| review item | disposition | exact packet action |
|---|---|---|
| `EVD-036013` capacity error | `ACCEPTED_AND_CORRECTED` | Replayed Commission Appendix B printed p.45/IIIF canvas 401; the corrected capacity is 150 and the evidence note records the replay. `CLM-036013` did not contain the erroneous figure and remains bounded. |
| Missing 1846-48 stratum | `ACCEPTED_AND_QUARANTINED` | Predeclared the April 3, 1846 issue at b22667611 canvases 65-68; added `HOLD-R24-00` for all-contribution capture and item-level coding before sampling. No substantive contribution claim was created. |
| 1862-63 stop | `RETAINED` | `HOLD-R24-01` and `CLM-036018` continue to prohibit final-stratum and microcorpus claims until exact issue/item locators exist. |
| Remaining frozen lanes | `RETAINED` | Annual reports, twelve coded cases, staff engagement register and Richardson correspondence remain held exactly as reviewed. |
| Packet/public state | `UNCHANGED` | `RETURN WITH REPRODUCIBLE LANES`; no public prose, quotation, imagery, SEO/GEO or drafting authorization. |
