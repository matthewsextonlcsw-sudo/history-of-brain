# Independent cross-review — R04-LEVANT

**Review date:** August 18, 2026
**Reviewer:** independent packet cross-review
**Decision:** **RETURN**
**Public prose authorized:** no

## Decision

R04 has a strong methodological center. Its passage-level cautions, translation comparisons,
archive audit, and refusal to diagnose literary figures are mostly responsible and reproducible.
The packet nevertheless does not pass the research gate in its current form.

Return is required because:

1. the named Kirta core is labeled Documented from an incomplete, dependent `L3-C` webpage
   even though no critical text or complete scholarly translation was opened;
2. the translation-sensitive Lachish 3 claim is labeled Documented without opening the
   upstream epigraphic edition or a second translation;
3. a Psalm 42–43 interpretation is labeled Strongly supported although the decisive support is
   one specialist article and the packet itself says the reading must be attributed;
4. the completion checklist says a popular Saul/music-therapy citation chain was traced, but
   the packet contains no identified popular source and no upstream/downstream replay of the
   “David invented music therapy” formulation;
5. all 49 cached filenames are absent from the ledger, 17 cached hashes are absent, several
   files have misleading creator names, and several discovery artifacts have no source record
   or rights disposition; and
6. the stable Sefaria version URL in `SRC-005001` now returns HTTP 404.

The central safe conclusion—that selected texts distribute life, agency, distress, and conduct
across several embodied and relational terms rather than one timeless English “mind”—may
remain as a research synthesis. It is not approved as public wording by this review.

## Review scope and method

The review read the five required R04 outputs, `BRIEF.md`, `EVIDENCE-MODEL.md`, and
`SOURCE-RATING-AND-CAPTURE-PROTOCOL.md` in full. It then checked a risk-based sample against
full sources or authoritative records. Jina Reader was used for complete publisher webpages;
publisher PDFs, source APIs, and repository records were opened directly where those were the
stronger primary route. Search results and abstracts were used only to identify gaps.

The checked sample emphasized:

- Hebrew/Greek/English translation claims in Genesis 2:7, Deuteronomy 6:5, Psalm 42–43,
  1 Samuel 16:14–23, and Daniel 7:15;
- broad anthropology claims about *nepeš* and heart language;
- the Psalm 42–43 ritual/rhetorical reading;
- the 1QS Treatise on the Two Spirits and Community Rule textual plurality;
- the Kirta chain;
- the Saul diagnosis/music-therapy chain;
- Lachish Ostracon 3's first-person heart idiom; and
- every cached checksum and the principal rights statements.

## Risk-based source and locator replay

| source / claim | direct check | result | required disposition |
|---|---|---|---|
| `SRC-005000`, Hebrew terms | The cached, hashed Westminster Leningrad Codex XML contains `Gen.2.7` *le-nepeš ḥayyāh*, `Deut.6.5` *levav/nepeš/me'od*, and Aramaic `Dan.7.15` *ruḥi* at the cited verse identifiers. The record correctly calls this a medieval Masoretic witness rather than an ancient autograph. | **PASS** | Preserve passage-specific wording and manuscript qualification. XML line numbers are secondary locators; verse IDs plus the file hash are the durable locators. |
| `SRC-005001`, RJPS | The selected Sefaria API JSON contains the stated readings: Genesis 2:7 “living being,” Deuteronomy 6:5 heart/soul/might, Daniel 7:15 spirit/mind, and Psalm 42's “soul” note “Or ‘throat.’” The JSON reports `CC-BY-NC`. | **PASS WITH LINK REPAIR** | Replace the 404 version URL with stable, tested passage/API URLs or a working per-book Versions page such as [Genesis versions](https://www.sefaria.org/Genesis?tab=versions). Record each exact API URL and JSON pointer (`versions[0].text`). |
| `SRC-005002`–`005005`, NETS | The complete official PDFs replay the locators exactly: Genesis PDF p. 7 says “a breath of life” and “living being”; Deuteronomy PDF p. 12 says mind/soul/power and then heart/soul; 1 Reigns PDF p. 17 says the spirit tormented Saul and David's playing brought relief; Psalms PDF p. 27 gives “deeply grieved” and “throwing me into confusion.” [NETS editions](https://ccat.sas.upenn.edu/nets/edition/) | **PASS** | State that the four cached PDFs are three-page extracts, not complete PDFs. Add filenames, extraction method/page ranges, and hashes for the generated `.txt` files. Do not infer Greek lexemes from the English translation alone. |
| `SRC-005006`, Erbele-Küster | Full publisher/Jina text and PDF pp. 209–211 support vitality/vulnerability, the quoted Wolff formula, and physiological/emotive/cognitive heart functions. The article itself says it “infers” a nondualist embodied mind and later revises simple synthetic-body models. [Publisher full text](https://www.tandfonline.com/doi/full/10.1080/0039338X.2024.2426129) | **PASS** | Continue to attribute the nondualist synthesis; do not make one lexeme a universal anthropology. |
| `SRC-005007`, Davis | Full article pp. 601–615 supports the metonymic/apostrophic distinction and the desire/doubt reading. Footnote 14 says the speaker's gender is open. Footnote 36, p. 611, explicitly says a ritual text is not the ritual itself. [Article](https://doi.org/10.1017/S0017816025100977) | **PASS on extraction; rating repair required** | `CLM-005004` should be Documented for poetic features and **Plausible / attributed to Davis** for ritual effect and “orientation toward God,” unless an independent route or consensus synthesis is added. One article does not satisfy the model's Strongly supported burden. |
| `SRC-005008` / `SRC-005009`, Community Rule | Metso pp. 23–25 supports the lists, heart struggle, healing, distress, purification, and reward. Introduction pp. 5–7 supports textual fluidity, 4QSd beginning at the equivalent of 1QS V, and the warning that copy-text choice does not imply 1QS priority. The IAA record independently confirms 1Q28/1QS, Cave 1, Hebrew, square script, Hasmonean, parchment, and 25 images. [Metso edition](https://www.sbl-site.org/wp-content/uploads/2024/12/9780884140566_txt.pdf), [IAA manuscript record](https://www.deadseascrolls.org.il/explore-the-archive/manuscript/1Q28-2?locale=en_US) | **PASS** | Preserve the 1QS-specific scope and variant-edition caveat. Do not call the IAA metadata independent evidence for the Treatise's meaning. |
| `SRC-005010` / `SRC-005011`, Kirta | The Hanson page supplies metadata and only KTU 1.14 I.1–52. It is an adapted translation based on older works and does not show 1.15–1.16. The Göttingen page confirms the corpus project but supplies no critical text. [Hanson page](https://kchanson.com/ANCDOCS/westsem/kret.html), [Göttingen corpus](https://eupt.uni-goettingen.de/Korpus.html) | **FAIL for `CLM-005013` as Documented** | Downgrade the opening claim to **Plausible / lead-supported** or move Kirta out of the named researched core until a current edition and complete translation are opened. Remove “Documented” and “ready for outline use.” Add an authoritative object/provenance record before asserting high-priest-house find context, date, and present custody. |
| `SRC-005012`, Williams and le Roux | The full SciELO article explicitly proposes depression/PTSD, epileptic-like fits, tumor, psychosis, and “music therapy,” and ultimately prefers depression/PTSD. It is therefore direct evidence that this retrospective-diagnosis argument was published, and fit D for diagnosing Saul. [Full article](https://scielo.org.za/scielo.php?pid=S0259-94222012000100009&script=sci_arttext) | **PASS for reception counterexample** | Do not describe this single specialist article as a “popular citation chain.” Record its downstream/upstream chain separately. |
| `SRC-005013`, Balfour | The Durham record and publisher identify a CC BY article, but direct and Jina attempts still returned bot verification; only metadata/abstract and search-indexed fragments were available. [Repository record](https://durham-repository.worktribe.com/output/1176819/rejection-realized-saul-the-evil-spirit-and-the-loss-of-kingship) | **PASS as `LX-D` / access gap** | Do not use the unseen argument. The acquisition gap is correctly stated. |
| `SRC-005016`, Lachish 3 | Na'aman pp. 64–65 quotes lines 4–13 and credits the English to Dobbs-Allsopp et al., p. 309. That upstream edition was not opened. This is one dependent translation chain, not direct epigraphy. [SBL volume](https://www.sbl-site.org/wp-content/uploads/2024/12/Contextualizing_Israels_Schmidt_SBL.pdf) | **FAIL for L1 and Documented translation** | Rate Na'aman L2-B for context and C for the exact translation until the cited epigraphic edition is opened. Acquire the source edition and an independent translation; record transliteration and object line numbers before restoring Documented status. Replace “everyday” with “nonliterary administrative.” |
| `SRC-005017`, LOC | The catalog proves a 1934–39 glass-negative photograph titled “Lachish letter No. 3,” with reproduction ID and “no known restrictions.” It is not an archaeological object catalog and does not independently establish the ancient object's provenance, dating, transcription, or present custody. [LOC record](https://www.loc.gov/pictures/item/2019691532/) | **PASS for photograph metadata; rating repair required** | Keep L1-A only for the photograph/catalog facts. Use L3-C for ancient-object identification and do not call it independent material confirmation without a repository/object record. |

## Claim-label and wording audit

### Labels that may remain

- `CLM-005000`, `005003`, `005006`, `005007`, `005009`, `005010`, and `005011` are
  responsibly bounded to a passage, version, literary representation, or named manuscript.
- `CLM-005005`, `005008`, `005012`, `005014`, and `005016` correctly block diagnosis,
  universalization, or use of unopened material.
- `CLM-005001`, `005002`, and `005017` are defensible as research syntheses if the packet keeps
  their genre, version, and corpus qualifications visible.

### Mandatory label repairs

1. **`CLM-005004`:** split into a Documented textual claim and a Plausible/attributed Davis
   interpretation. Do not call the whole proposition Strongly supported from one decisive
   interpretive source.
2. **`CLM-005013`:** remove Documented status. `SRC-005010` is explicitly `L3-C`, incomplete,
   and dependent; that fit cannot establish a pivotal named-core claim.
3. **`CLM-005015`:** remove Documented status until the Dobbs-Allsopp edition and a second
   translation are opened. The LOC photograph does not repair the translation chain.
4. **`EVD-005005`:** “the scene does literary and political work” should be marked as project
   inference or supported by a fully opened literary source. The source sequence documents the
   succession context; it does not by itself settle the scene's function.
5. **Greek handoff:** `GAPS-AND-HANDOFF.md` names *dianoia/psychē* although the ledger opens
   NETS English translations, not an authoritative Greek text. Add a critical Septuagint Greek
   edition with exact words/locator or remove the Greek-lexeme wording.

## Popular-claim and independence audit

The internal independence map is generally good: translations of one text are not counted as
independent lived evidence, the 1QS edition and IAA record are assigned different jobs, and the
LOC photograph is not treated as an independent translation.

The popular-claim requirement is not complete:

- `CLM-005005` refers only to “Popular modern wording” without a source ID, exact wording,
  date, URL, or upstream chain.
- `GAPS-AND-HANDOFF.md` calls the “David invented music therapy” item a myth-correction box,
  but no consulted source is shown making that exact claim.
- `SRC-005012` is a peer-reviewed retrospective-diagnosis article, not evidence that a wording
  is popular, highly ranked, or widely repeated.

Required repair: add at least one dated, accountable example for each public misconception the
packet intends to discuss, trace its citations to the source text and scholarly chain, assign
`repeats/originates/contradicts` relationships, and avoid prevalence language unless a defined
search sample supports it. If no such audit is performed, remove the claim that the popular
chain was completed and describe the proposed questions only as unverified discovery leads.

## Missing contradictory or qualifying scholarship

- **Saul:** Balfour remains a valid acquisition gap. A newer peer-reviewed interpretation also
  requires review: David E. Basher, “Saul and the Not-So-Holy Ghost: 1 Samuel 16:14–23 and
  Ghost-Induced Illness,” *Journal of Biblical Literature* 144.3 (2025), DOI
  [10.15699/jbl.1443.2025.3](https://doi.org/10.15699/jbl.1443.2025.3). Only its abstract was
  available in this review, so it is a lead, not evidence. It matters because it advertises an
  ancient-context Mesopotamian ghost-illness/music comparison rather than either a modern
  diagnosis or a purely succession-literary reading. Add it as restricted/lead and acquire the
  full article before presenting the current interpretive field.
- **Kirta:** current critical text, two full translations, object/provenance authority, and
  specialist readings remain blocking, not optional enrichment.
- **Lachish 3:** the upstream edition and a second translation are mandatory because the
  packet's lived-language claim turns on the metaphorical wording.
- **1QS social history:** the packet correctly records this as a gap; do not infer actual group
  practice, “Essene” identity, gender composition, or excluded-person experience from the
  normative text.

No substantive R04 claim was found to rely silently on an abstract, snippet, or access-denied
page. Restricted sources are visibly quarantined. This is a **PASS** on the full-text rule.

## Rights, cache, and checksum audit

### What passed

- The entire R04 cache is covered by the repository's git-ignore rule.
- There are 49 local cache files and 49 distinct computed SHA-256 values.
- Every one of the 32 hashes printed in the source ledger matches a current cache file.
- The principal rights calls are appropriately conservative: OSHB public-domain/CC BY split,
  RJPS CC BY-NC, Erbele-Küster and Davis CC BY, NETS/SBL copyright restrictions, IAA
  link-only treatment, and LOC “no known restrictions.”
- Copyrighted full text is in the ignored cache rather than the publishable packet.

### What failed

- **0 of 49 cached basenames appears in the ledger.** The protocol requires exact filenames.
- **17 of 49 cache hashes are absent from the ledger:**

  - `Balfour-2022-Saul-access-denied.html`
  - `Balfour-2022-repository-jina.md`
  - `Carlson-2024-ruah-jina.md`
  - `Carlson-access-denied.html`
  - `Dietrich-Loretz-Keret-jina.md`
  - `Erbele-Kuester-2024-embodied.txt`
  - `Frevel-2024-embodied-practices-jina.md`
  - `Lewis-access-denied.html`
  - `Metso-Community-Rule-critical-edition.txt`
  - `NETS-1Reigns.txt`
  - `NETS-Deuteronomy.txt`
  - `NETS-Genesis.txt`
  - `NETS-Psalms.txt`
  - `NRSVue-selected-passages-jina.md`
  - `Schroer-Staubli-2013-jina.md`
  - `Van-den-Bosch-2018-Athiratu-access-denied.html`
  - `Van-den-Bosch-2018-Athiratu-jina.md`

- Two retained Jina files have misleading creator filenames:
  `Pleijel-2026-Nephesh-Psalm42-jina.md` contains the Andrew R. Davis article, and
  `Pretorius-2012-Saul-jina.md` contains the Williams/le Roux article. A third,
  `Frevel-2024-embodied-practices-jina.md`, contains the Erbele-Küster article.
- `NRSVue-selected-passages-jina.md` and the Van den Bosch artifacts have no source row or
  explicit rights/disposition record.
- The four cached NETS PDFs are three-page extracts from larger official PDFs, but the ledger
  does not disclose that transformation or identify the extracted page range.

Required repair: add a cache manifest covering every retained file with source ID, exact
filename, format, original URL, access date, rights/allowed use, transformation or extraction
history, and SHA-256. Correct misleading filenames or explicitly map them. Discovery failures
may be removed from the cache only by the packet owner, or retained with a source/lead ID and
rights/disposition record.

## Scope and archive audit

The packet otherwise adheres well to the ban on “the biblical view,” retrospective diagnosis,
demon-versus-medicine binaries, and invented patient testimony. The voice/mediation matrix is
a strong deliverable.

One scope boundary requires an explicit decision: the brief starts approximately 1200 BCE,
while `SRC-005010` dates Kirta to the fourteenth century BCE. Either justify Kirta as a named
Bronze Age prelude, revise the packet's time boundary with coordinator approval, or hand it to
the appropriate earlier packet. Do not leave the discrepancy implicit.

## Required repairs before re-review

1. Downgrade or re-source `CLM-005004`, `CLM-005013`, and `CLM-005015` as specified above.
2. Open the upstream Lachish epigraphic edition and an independent translation; correct
   `SRC-005016`/`005017` job-specific ratings.
3. Either acquire current critical Kirta text, complete translations, and object provenance,
   or remove Kirta from the researched core/outline-ready list.
4. Perform the promised popular-claim citation replay or remove the completion claim and
   unsourced “popular” wording.
5. Add Basher 2025 as an abstract-only lead and acquire it before summarizing the current Saul
   interpretive field; keep Balfour quarantined until full access.
6. Repair the Sefaria URL and add exact API/passage locators.
7. Add an authoritative Greek-text source before naming Greek lexemes in handoff language, or
   remove those lexeme claims.
8. Build a complete 49-file cache manifest, correct creator/file mappings, and record rights
   and hashes for all retained artifacts.
9. Resolve or explicitly justify Kirta's pre-1200-BCE scope.
10. Re-run link, checksum, source-ID, evidence-ID, and claim-label validation and submit the
    repaired packet for a new independent review.

**Gate state:** returned to packet owner. No claim or packet state is approved for public use.

---

## Closure re-review — August 18, 2026

**Re-review decision:** **PASS WITH GAPS** for internal outline planning
**Public prose authorized:** no
**Effect on prior decision:** this closure supersedes the earlier **RETURN** gate only for the
repaired internal research packet; it does not erase the original findings or approve any claim
for publication.

### Closure decision

All ten mandatory return dispositions were rechecked against the repaired packet. The packet
owner either supplied the missing evidence required for a bounded internal claim or reduced,
quarantined, or removed the claim so that it no longer outruns the opened evidence. No returned
label, retired Sefaria URL, unqualified Greek-lexeme handoff, misleading creator filename, or
unmanifested cache artifact remains.

R04 may now supply the internal outline with its bounded translation-history, embodied-language,
Psalm, Job, Saul-narrative, and 1QS modules. Lachish 3 remains a provisional internal comparator.
Kirta is not an R04 result. The packet remains unavailable for public prose because its named
publication gaps and the project's human editorial gate remain open.

### Ten-disposition replay

| return disposition | repaired state rechecked | closure result |
|---|---|---|
| 1. Repair `CLM-005004`, `CLM-005013`, and `CLM-005015` | `CLM-005004` now separates Documented poetic features from Davis's Plausible/attributed ritual interpretation; `CLM-005013` is Unknown/quarantined; `CLM-005015` is Plausible pending a second independent translation. Davis PDF pp. 601–615, especially p. 610 n. 36, directly preserves the text/performance limit. | **PASS** |
| 2. Repair the Lachish translation chain and ratings | Zammit's complete 129-page Oxford volume was reopened. PDF pp. 7–10 identify her own readings/translations and physical examination; Lachish 3 obverse lines 6–8 supply the transliteration and “sick at heart” rendering; IAA `1938–127` and field no. `4024` are recorded. Na'aman remains L2-B for context/C for dependent wording; LOC remains L1-A only for photograph/catalog facts and L3-C for ancient-object identification. The Dobbs-Allsopp route and a second independent complete translation remain unavailable, so the claim was not restored to Documented. | **PASS WITH PUBLICATION GAP** |
| 3. Remove or fully source Kirta | Every substantive Kirta proposition is Unknown or a quarantined lead. `SRC-005010` remains incomplete L3-C/D for outline claims; `SRC-005011` is corpus-list context only. Findings, claim map, lived-experience audit, source ledger, and handoff all place Kirta outside the R04 core and before the approximately 1200 BCE boundary. | **PASS** |
| 4. Replay the promised Saul public claim or remove it | `SRC-005023`, Greenberg's dated Psychology Today article, was opened in full. Its title and relevant paragraphs call David the first music therapist and say he cured Saul's depression. Replay to the RJPS/NETS/OSHB passages reaches narrated torment, playing, relief, and departure of the spirit, not diagnosis, cure, modern profession, or priority. The article's Alter branch is named and explicitly stops because the book was not opened. No prevalence/popularity claim is made. | **PASS WITH OPEN ALTER BRANCH** |
| 5. Add and quarantine Basher 2025 | `SRC-005024` records the complete citation and an EBSCO abstract-only locator as LX-D. Direct Jina replay recovered only metadata/abstract; no body text, notes, or Mesopotamian sources are used substantively. | **PASS** |
| 6. Repair Sefaria access and locators | The Genesis Versions page and all seven exact Sefaria API URLs returned HTTP 200 both directly and through Jina. Each cached JSON contains the named RJPS version at `versions[0]`, with evidence at `versions[0].text`; the JSON license field is `CC-BY-NC`. The retired all-Tanakh URL is absent. | **PASS** |
| 7. Add Greek text or remove Greek-lexeme handoff claims | The handoff now describes only the opened NETS English renderings and explicitly bars Greek-lexeme claims until an authoritative Greek edition is opened. No `dianoia` or `psychē` wording remains in the handoff. | **PASS** |
| 8. Build the complete cache manifest and repair mappings | The retained cache contains 43 files and the manifest contains 43 rows. Basename comparison is exact; all rows include source ID, origin/transformation, rights/allowed use, and SHA-256. The former Pleijel/Pretorius/Frevel creator mismatches are absent, and the corrected Davis, Williams/le Roux, and Erbele-Küster files contain the represented works. | **PASS** |
| 9. Correct the NETS transformation statement | Direct `pdfinfo` replay confirms complete publisher PDFs: Genesis 43 pages, Deuteronomy 34, 1 Reigns 28, and Psalms 80. The claimed passage locators replay on cached PDF pp. 7, 12, 17, and 27 respectively; the companion `.txt` files are identified as full `pdftotext -layout` derivatives. | **PASS** |
| 10. Re-run validation | All 43 current hashes match the manifest; all 43 files are git-ignored; manifest filenames are one-to-one with the cache; every packet `SRC-005xxx` resolves to a ledger row; repaired Markdown tables are structurally consistent; and no returned label or retired wording was found. | **PASS** |

### Link and locator replay notes

- The repaired Sefaria Versions/API routes, Greenberg article, Oxford Zammit file, LOC record, and
  Davis DOI resolved successfully on this re-review.
- Jina replay of the Taylor & Francis Erbele-Küster full page remains complete and supports the
  packet locators. A direct automated publisher-file probe returned HTTP 403 during the closure
  audit; the cached CC BY PDF still matches its recorded SHA-256. This is a current access-route
  limitation, not evidence of a cache or citation mismatch.
- The Brill Dobbs-Allsopp route still returns HTTP 403/no credentials. The packet correctly
  records failure documentation rather than treating the inaccessible edition as opened.
- Zammit's locator is reproducible: the catalog and physical-examination statement occur in the
  opened volume's PDF pp. 7–10, and the relevant Lachish 3 wording is at obverse lines 6–8.
- Na'aman's dependent translation and attribution to Dobbs-Allsopp replay at printed pp. 64–65,
  cached PDF pp. 74–75.
- Davis's distinction between the ritual text and performed ritual replays at p. 610 n. 36;
  claims about ritual effect therefore remain attributed and Plausible.

### Cache, checksum, and rights closure

- **Files / manifest:** 43 / 43.
- **Exact filename matches:** 43 / 43; no cache-only, manifest-only, or duplicate basename.
- **SHA-256 matches:** 43 / 43; no mismatch or duplicate hash.
- **Rights/disposition fields:** 43 / 43 populated.
- **Git-ignore coverage:** 43 / 43.
- The Dobbs-Allsopp artifact is explicitly an access-failure record, Basher is abstract-only,
  and neither contains or substitutes for a restricted full argument.
- Copyrighted NETS, Metso, SBL, Oxford, and other material remains in the ignored research cache
  with research-only/no-redistribution limits. Openly licensed files retain attribution terms;
  LOC's “no known restrictions” applies to the historic photograph record, not to an ancient
  translation or unrestricted object interpretation.

### Remaining publication gaps

1. **Lachish 3:** obtain the named Dobbs-Allsopp page or another complete authoritative edition
   and a second independent complete translation before public wording; until then the heart
   idiom is Plausible and internal only.
2. **Kirta:** no R04 use. An earlier Bronze Age packet must open a current critical KTU/CAT text,
   two complete scholarly translations, object/provenance authority, and specialist
   counter-readings before any Kirta claim advances.
3. **Saul's current interpretive field:** open Balfour 2022 and Basher 2025 in full, inspect their
   primary-source chains, add an independent Samuel specialist, and compare Masoretic/Old Greek
   textual differences. Greenberg's Alter branch also remains unverified.
4. **Greek wording:** add an authoritative Greek edition and exact locators before naming Greek
   lexemes or making a Greek-versus-Hebrew semantic claim.
5. **Broader semantic and emotion history:** obtain Carlson on *rûaḥ* and Kipfer on sadness/grief
   before expanding beyond the packet's passage-level claims.
6. **1QS social history:** add independent work on textual communities, gender/family,
   disability/impurity, discipline, exclusion, and the debated relationship between manuscripts
   and settlement before reconstructing lived group practice.
7. **Regional breadth:** Phoenician and other Levantine comparators remain unresearched and must
   be a separately sourced packet or supplement rather than an implied part of this core.
8. **Editorial gate:** every future public claim still requires claim-level source replay,
   sensitivity/translation review, and human editorial approval under the project evidence
   model.

**Final gate status:** **PASS WITH GAPS for internal outline planning.** Kirta is excluded;
Lachish is provisional; no public prose or public claim promotion is authorized.
