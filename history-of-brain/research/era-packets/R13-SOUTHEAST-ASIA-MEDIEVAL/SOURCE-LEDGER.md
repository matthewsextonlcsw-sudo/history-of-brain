# R13-SOUTHEAST-ASIA-MEDIEVAL source ledger

**State:** internal research packet; public gate closed. **Opened by/on:** R13 researcher,
2026-08-18. Agent Reach diagnostic reported Jina available and Exa unavailable. Jina Reader,
direct institutional downloads, and primary/scholarly web-search fallback were therefore used.
Search snippets and abstracts were discovery leads only; every retained substantive record below
was opened as a complete text, complete article/chapter, or complete relevant report section.

## Declared core before research

The core is deliberately limited to three named settings in two connected exchange zones:

1. the K.209 Ta Ke Pong and K.368 Say Fong witnesses of Jayavarman VII's 1108 Śaka
   `ārogyaśālā` formula, treated as one dependent inscriptional chain;
2. Tonle Snguot, north of Angkor Thom, as one preliminary hospital-chapel archaeological test;
3. *Dharma Pātañjala* in West Javanese codex Schoemann I 21, dated Śaka 1389/1467 CE, as one
   Old Javanese–Sanskrit textual/manuscript corpus.

“Connected” means participation in wider Indic and Southeast Asian textual/material exchange. It
does **not** establish direct contact, copying, or a single medical system between these corpora.

## Canonical source records

`Level / fit` is relationship-relative. `Full-text location` distinguishes lawful cache from
link-only consultation. The per-record workflow table below makes `opened_by`, `opened_on`,
`verification_status`, cache/hash, source-level, and claim-fit fields explicit for every source;
none of those fields is inherited from file-level prose.

### `SRC-022000`

- `source_type`; `subtype`: `primary_textual`; current TEI/EpiDoc critical edition.
- `title`; `creator`; `creator_role`: “K. 209. Stela from Prasat Ta Ke Pong (inscription of hospital
  of King Jayavarman VII), 1108 Śaka”; historical author unnamed / Kunthea Chhom; royal
  inscription / digital editor.
- `date_created`; `date_published`; `edition_or_version`: 1108 Śaka (1186/1187 CE); current web
  edition; **draft** TEI edition, page/build snapshot full commit
  `d99f25aabe9900787423b1fe20b288f91aaf9667`, last XML-affecting commit
  `64a9c366784783759893fde6fe9e89b5458b8417` (2026-07-17).
- `container`; `publisher_or_holder`: DHARMA Khmer epigraphy; DHARMA/EFEO estampage no. 454.
- `language`; `original_language`; `translator`: Sanskrit in Khmer script; Sanskrit; no complete
  translation on this page (Barth 1903 French only for stanza 48).
- `identifier`; `url`; `archive_url`: `DHARMA_INSCIK00209`;
  https://dharmalekha.info/texts/INSCIK00209;
  https://github.com/erc-dharma/tfc-khmer-epigraphy/blob/d99f25aabe9900787423b1fe20b288f91aaf9667/texts/xml/DHARMA_INSCIK00209.xml.
- `accessed_on`; `full_text_location`: 2026-08-18; ignored raw XML and Jina rendering listed in
  cache manifest below.
- `geographic_scope`; `time_scope`; `people_or_population`: Prasat Ta Ke Pong, Angkorian Khmer
  realm; late twelfth century; royal foundation, named staff categories, `rogin`/sick people.
- `provenance`: edition based on EFEO estampage no. 454; reconstructed letters remain visibly
  bracketed/parenthesized. `rights_status`: the XML's embedded `publicationStmt/availability`
  specifies **CC BY-SA 4.0**, while repository `LICENCE.txt` specifies CC BY 4.0. The object-level,
  more restrictive CC BY-SA 4.0 governs the XML and derivatives pending DHARMA clarification;
  attribution to DHARMA and editor is required. `cultural_protocol`: identify Sanskrit/Khmer-script mediation,
  present-day Cambodian custodial interests, and avoid decorative extraction of sacred language.
- `source_position`; `limitations`: royal eulogy and administrative prescription; no patient voice,
  implementation, outcome, prevalence, modern diagnosis, or proof every formula witness operated.
- `independence_group`; `verification_status`; `rejection_reason`: `DEP-022000`; `verified`; n/a.
- `exact_locator`; `level_fit`; `upstream_check`: A25–26; B5–28; C1–20; D9–20; L1-A for edited
  Sanskrit wording, L1-B where damaged/restored, C/D for practice or patient experience; compared
  with K.368/Honda, which are the same textual chain.

### `SRC-022001`

- `source_type`; `subtype`: `primary_textual`; digital critical/diplomatic presentation plus an
  inherited French translation.
- `title`; `creator`; `creator_role`: “K.368, Say Fong”; unnamed historical composer / Louis Finot,
  Megumu Honda, Siddham editors; royal inscription / editors and translators.
- `date_created`; `date_published`; `edition_or_version`: 1108 Śaka formula; current page; critical
  text “Based on: Finot 1903; Collated: Honda 1965,” French translation attributed to Finot.
- `container`; `publisher_or_holder`: Siddham: The Asian Inscription Database; SOAS-linked project.
- `language`; `original_language`; `translator`: Sanskrit edition and French translation;
  Sanskrit; Louis Finot, with Honda variants in edition.
- `identifier`; `url`; `archive_url`: K.368;
  https://siddham.network/inscription/k368/?section=inscription and
  https://siddham.network/inscription/k368/?section=translation; none.
- `accessed_on`; `full_text_location`: 2026-08-18; link-only, no reuse license located.
- `geographic_scope`; `time_scope`; `people_or_population`: Say Fong near present Vientiane,
  Angkorian realm; late twelfth century; royal foundation/staff/sick people as represented.
- `provenance`; `rights_status`; `cultural_protocol`: modern web collation of Finot/Honda; rights
  unclear/link-only; cite witness, edition, translation, and present location separately.
- `source_position`; `limitations`: dependent formula and translation chain; K.368 A/B XIII has
  damaged/variant text where K.209 is clearer; French translation is dated; no implementation.
- `independence_group`; `verification_status`; `rejection_reason`: `DEP-022000`; `verified`; n/a.
- `exact_locator`; `level_fit`; `upstream_check`: critical stanza XIII and translation stanzas
  13, 16–45; L2-A for displayed Finot/Honda chain, B for disputed words, D implementation;
  checked against `SRC-022000` and full Honda article.

### `SRC-022002`

- `source_type`; `subtype`: `scholarly_synthesis`; full article containing an English edition,
  partial translation, and interpretation.
- `title`; `creator`; `creator_role`: “The SAY-FONG Inscription of Jayavarman VII”; Megumu Honda;
  scholar/editor-translator.
- `date_created`; `date_published`; `edition_or_version`: n/a; 1965; *Journal of Indian and Buddhist
  Studies* 14.1, 417–405 (reverse pagination), DOI 10.4259/ibk.14.417.
- `container`; `publisher_or_holder`: J-STAGE; Japanese Association of Indian and Buddhist Studies.
- `language`; `original_language`; `translator`: English with Sanskrit; Sanskrit; Honda.
- `identifier`; `url`; `archive_url`: DOI 10.4259/ibk.14.417;
  https://www.jstage.jst.go.jp/article/ibk1952/14/1/14_1_417/_pdf/-char/en; none.
- `accessed_on`; `full_text_location`: 2026-08-18; full 13-page PDF opened, link-only; no reuse
  license inferred.
- `geographic_scope`; `time_scope`; `people_or_population`: Say Fong/Khmer realm; 1186/87 source,
  1965 scholarship; royal/staff/caste categories as represented.
- `provenance`; `rights_status`; `cultural_protocol`: scholarly re-edition citing Finot, Barth,
  Coedès, Majumdar; copyright unclear/link-only; preserve outdated vocabulary as attributed history.
- `source_position`; `limitations`: translates only selected stanzas; explicitly skips 19b–41;
  “relief of the poor” and Buddhist-causation statements are Honda's inference, not inscription text.
- `independence_group`; `verification_status`; `rejection_reason`: `DEP-022000`; `verified`; n/a.
- `exact_locator`; `level_fit`; `upstream_check`: pp. 410–408 (stanzas 13–19a), 407 (44–45);
  L2-A for Honda's own reading/translation, L2-C/D for social-function inference; full text replayed
  against K.209/K.368.

### `SRC-022003`

- `source_type`; `subtype`: `primary_material`; full preliminary excavation report.
- `title`; `creator`; `creator_role`: *Tonle Snguot: Preliminary Research Results from an Angkorian
  Hospital Site*; D. Kyle Latinis, Ea Darith, Károly Belényesy, Hunter I. Watson; archaeologists.
- `date_created`; `date_published`; `edition_or_version`: 2017 fieldwork; 2018; NSC AU Archaeology
  Report Series No. 8, 128-page PDF.
- `container`; `publisher_or_holder`: ISEAS–Yusof Ishak Institute / APSARA National Authority.
- `language`; `original_language`; `translator`: English; material record/Khmer site; n/a.
- `identifier`; `url`; `archive_url`: AU8;
  https://www.iseas.edu.sg/wp-content/uploads/pdfs/AU8Tonle_Snguot_v2.pdf; none.
- `accessed_on`; `full_text_location`: 2026-08-18; complete report opened, link-only; © authors.
- `geographic_scope`; `time_scope`; `people_or_population`: Tonle Snguot north of Angkor Thom;
  chiefly twelfth–thirteenth-century site deposits; excavators, custodians, unnamed site users.
- `provenance`: six 2017 test units totaling 61.5 m², estimated at most 0.1% of site, plus pond cores;
  preliminary analyses. `rights_status`: © authors, link-only; image/object rights not inferred.
  `cultural_protocol`: APSARA custody; field ceremony and statue-removal protocol recorded; obtain
  Cambodian institutional/community permissions before image reuse.
- `source_position`; `limitations`: preliminary archaeology; chapel/compound activity does not by
  itself establish diagnosis, treatment, mental-health care, patient identity, access, payment,
  efficacy, or typical network implementation. Report's broad health claims precede excavation data.
- `independence_group`; `verification_status`; `rejection_reason`: `DEP-022001`; `verified`; n/a.
- `exact_locator`; `level_fit`; `upstream_check`: printed pp. 16–17 (broad interpretation), 49–52
  (sampling/chronology), 56–74 (ceremony/finds/custody), **99–100** (speculative iron-tool limit); L1-A for excavation
  observations/custody, L2-B/C interpretation, D for mental-health or patient-care claims.

### `SRC-022004`

- `source_type`; `subtype`: `scholarly_synthesis`; full specialist chapter quoting and translating
  Old Javanese passages from the author's edition.
- `title`; `creator`; `creator_role`: “From Isolation to Union: Pātañjala vis-à-vis Śaiva
  Understandings of the Meaning and Goal of Yoga”; Andrea Acri; philologist/translator.
- `date_created`; `date_published`; `edition_or_version`: n/a; 2022; in *Verità e Bellezza*, vol. 1,
  pp. 35–72, UniOr Press.
- `container`; `publisher_or_holder`: Festschrift for Raffaele Torella; Università L'Orientale.
- `language`; `original_language`; `translator`: English with Old Javanese and Sanskrit;
  Old Javanese/Sanskrit; Acri.
- `identifier`; `url`; `archive_url`: ISBN 978-88-6719-249-6;
  https://unora.unior.it/retrieve/d456a3dd-dc8c-4290-82fc-197bae151c43/Torella%27s%20Festschrift%2C%20vol.%201.pdf; none.
- `accessed_on`; `full_text_location`: 2026-08-18; complete chapter opened within full volume,
  link-only/all rights reserved.
- `geographic_scope`; `time_scope`; `people_or_population`: pre-Islamic Java textual milieu;
  codex copied 1467, composition uncertain; learned Śaiva textual agents, not patients/population.
- `provenance`; `rights_status`; `cultural_protocol`: quotes Acri's 2017 edition of a codex unicus;
  restricted/link-only; retain sacred/soteriological frame and colonial manuscript custody.
- `source_position`; `limitations`: same scholar/edition chain as `SRC-022005` and `SRC-022007`;
  textual doctrine does not prove performance, prevalence, therapeutic use, or wellness outcomes.
- `independence_group`; `verification_status`; `rejection_reason`: `DEP-022002`; `verified`; n/a.
- `exact_locator`; `level_fit`; `upstream_check`: pp. 60–64, especially DhP 194.11–13,
  196.8–14, 290.10–13, 294.14–17, 298.2–4; L2-A for quoted edition/translation, B for
  interpretation, C/D for practice/therapy; full argument opened.

### `SRC-022005`

- `source_type`; `subtype`: `scholarly_synthesis`; full handbook chapter.
- `title`; `creator`; `creator_role`: “Yoga and Meditation Traditions in Insular Southeast Asia”;
  Andrea Acri; historian/philologist.
- `date_created`; `date_published`; `edition_or_version`: n/a; 2021; *Routledge Handbook of Yoga
  and Meditation Studies*, pp. 273–290.
- `container`; `publisher_or_holder`: Routledge; Taylor & Francis.
- `language`; `original_language`; `translator`: English with Old Javanese/Sanskrit; mixed;
  translations by Acri.
- `identifier`; `url`; `archive_url`: chapter in ISBN 9781138484863;
  https://cdn.angkordatabase.asia/libs/docs/2021_Yoga_and_Meditation_Traditions_in_I.pdf; none.
- `accessed_on`; `full_text_location`: 2026-08-18; complete chapter opened; link-only/reuse rights
  not established.
- `geographic_scope`; `time_scope`; `people_or_population`: insular Southeast Asia; medieval to
  modern survey, with DhP codex copied 1467; textual specialists/practitioners as represented.
- `provenance`; `rights_status`; `cultural_protocol`: author synthesis based on own edition;
  restricted/link-only; distinguish ancient text, later manuscript, scholarship, and modern practice.
- `source_position`; `limitations`: broad survey and same edition chain as `SRC-022004`; cannot
  independently corroborate DhP wording, use, prevalence, or continuity.
- `independence_group`; `verification_status`; `rejection_reason`: `DEP-022002`; `verified`; n/a.
- `exact_locator`; `level_fit`; `upstream_check`: pp. 278–280 and notes 17, 20–24; L2-B context,
  C/D practice/continuity; checked to the more exact 2022 passage treatment.

### `SRC-022006`

- `source_type`; `subtype`: `scholarly_synthesis`; full peer-reviewed article on textual method.
- `title`; `creator`; `creator_role`: “Translation as Commentary in the Sanskrit-Old Javanese
  Didactic and Religious Literature from Java and Bali”; Andrea Acri and Thomas M. Hunter;
  philologists.
- `date_created`; `date_published`; `edition_or_version`: n/a; 2020; *Medieval Worlds* 11,
  pp. 213–240.
- `container`; `publisher_or_holder`: Austrian Academy of Sciences Press / *Medieval Worlds*.
- `language`; `original_language`; `translator`: English with Sanskrit/Old Javanese; mixed; authors.
- `identifier`; `url`; `archive_url`: DOI 10.1553/medievalworlds_no11_2020s213;
  https://medievalworlds.net/0xc1aa5572_0x003ba1d4.pdf; none.
- `accessed_on`; `full_text_location`: 2026-08-18; full 28-page article opened; link-only because no
  explicit reuse license was found in the PDF.
- `geographic_scope`; `time_scope`; `people_or_population`: Java/Bali; c. ninth–sixteenth centuries;
  textual producers/consumers inferred from works, not population sample.
- `provenance`; `rights_status`; `cultural_protocol`: peer-reviewed comparative philology;
  link-only; credit local-language intellectual agency.
- `source_position`; `limitations`: method/context source, not independent DhP manuscript witness;
  one author overlaps the DhP edition chain and the article samples multiple other works.
- `independence_group`; `verification_status`; `rejection_reason`: `DEP-022002`; `verified`; n/a.
- `exact_locator`; `level_fit`; `upstream_check`: pp. 213–216 and case-study/conclusion sections;
  L2-B for localization/reconfiguration framework, D for any specific DhP practice.

### `SRC-022007`

- `source_type`; `subtype`: `institutional_reference`; full institutional collection essay with
  codex photographs and custody synopsis.
- `title`; `creator`; `creator_role`: “Pre-Islamic religion and philosophy in Java: Transmission and
  cultural significance of the codex unicus Dharma Pātañjala (AD 1467)”; Andrea Acri; specialist
  invited by Staatsbibliothek zu Berlin.
- `date_created`; `date_published`; `edition_or_version`: codex 1467; 2024; bilingual exhibition
  volume *A Passion for Collecting, A Thirst for Knowledge*, pp. 96–97.
- `container`; `publisher_or_holder`: Staatsbibliothek zu Berlin—Preußischer Kulturbesitz.
- `language`; `original_language`; `translator`: English/German with manuscript description;
  Old Javanese/Sanskrit codex; essay bilingual, translator unspecified.
- `identifier`; `url`; `archive_url`: Schoemann I 21, digital ISBN 978-3-88053-224-3;
  https://repository.crossasia.org/servlets/MCRFileNodeServlet/crossasia_derivate_00000503/Sammellust_und_Wissensdrang_2024.pdf; none.
- `accessed_on`; `full_text_location`: 2026-08-18; full 204-page volume and pp. 96–97 opened;
  link-only, all rights reserved.
- `geographic_scope`; `time_scope`; `people_or_population`: West/Central Java custody narrative;
  1467 codex and nineteenth-century removal; author, scribal network hypotheses, collectors.
- `provenance`: 89 gĕbang leaves, black ink, West Javanese script/linguistic features, colophon Śaka
  1389; reportedly from Merapi–Merbabu/Windu Sono collection, acquired by Friederich, passed via
  Schoemann to SBB-PK. `rights_status`: © 2024 SBB-PK, all rights reserved; images not reusable.
  `cultural_protocol`: colonial collecting and reported provenance must remain visible; consult
  SBB and relevant Indonesian custodial/community experts before reproducing folios.
- `source_position`; `limitations`: institutional essay by same modern DhP specialist; nineteenth-
  century provenance is explicitly report-based; no living-community authority was identified.
- `independence_group`; `verification_status`; `rejection_reason`: `DEP-022002`; `verified`; n/a.
- `exact_locator`; `level_fit`; `upstream_check`: printed pp. 96–97, figs. 1–2; L3-A for institutional
  shelfmark/physical description, L2-B for provenance/intellectual interpretation, D historical use.

### `SRC-022008`

- `source_type`; `subtype`: `institutional_reference`; research-access and rights metadata.
- `title`; `creator`; `creator_role`: DHARMA repository license and platform/repository descriptions;
  ERC-DHARMA; institution.
- `date_created`; `date_published`; `edition_or_version`: project 2019–2026; current; repository
  license at snapshot commit `d99f25aabe9900787423b1fe20b288f91aaf9667`, opened 2026-08-18.
- `container`; `publisher_or_holder`: GitHub/DHARMA; ERC-DHARMA consortium.
- `language`; `original_language`; `translator`: English; n/a; n/a.
- `identifier`; `url`; `archive_url`: `tfc-khmer-epigraphy/LICENCE.txt`;
  https://raw.githubusercontent.com/erc-dharma/tfc-khmer-epigraphy/d99f25aabe9900787423b1fe20b288f91aaf9667/LICENCE.txt; none.
- `accessed_on`; `full_text_location`: 2026-08-18; ignored license file in cache.
- `geographic_scope`; `time_scope`; `people_or_population`: project corpus; current; editors/users.
- `provenance`; `rights_status`; `cultural_protocol`: repository-authored; repository-level CC BY
  4.0. This record does not override an individual object's embedded license; K.209 XML is governed
  as CC BY-SA 4.0 pending clarification. Follow attribution and object-level cultural cautions.
- `source_position`; `limitations`: establishes repository reuse terms only, no historical claim.
- `independence_group`; `verification_status`; `rejection_reason`: `DEP-022003`; `verified`; n/a.
- `exact_locator`; `level_fit`; `upstream_check`: complete license; L3-A rights, D history; direct.

### `SRC-022009`

- `source_type`; `subtype`: `discovery_lead`; local tool-capability diagnostic.
- `title`; `creator`; `creator_role`: Agent Reach `doctor --json`; Agent Reach; method tool.
- `date_created`; `date_published`; `edition_or_version`: 2026-08-18; same; installed local version.
- `container`; `publisher_or_holder`: local research environment; researcher.
- `language`; `original_language`; `translator`: JSON/English; n/a; n/a.
- `identifier`; `url`; `archive_url`: none; none; none.
- `accessed_on`; `full_text_location`: 2026-08-18; ignored diagnostic JSON in cache.
- `geographic_scope`; `time_scope`; `people_or_population`: method only; current; n/a.
- `provenance`; `rights_status`; `cultural_protocol`: command output; project-generated; n/a.
- `source_position`; `limitations`: records Jina availability and Exa unavailability only; no
  discovery result or historical evidence.
- `independence_group`; `verification_status`; `rejection_reason`: `DEP-022003`; `verified`; excluded
  from historical claims.
- `exact_locator`; `level_fit`; `upstream_check`: service-status fields; L5-D; direct diagnostic.

## Rejected or quarantined leads

- Finot 1903 and Barth 1903 Persée PDFs returned access restrictions in this session. Their full
  arguments were not treated as independently opened; only their displayed inheritance in
  `SRC-022000`–`SRC-022002` is used.
- Pigeaud's 1975 Berlin catalogue was a discovery lead only and was not needed for a retained
  claim; `SRC-022007` supplies the current institutional metadata while preserving “reportedly.”
- Search snippets calling Angkorian hospitals mental-health services, universal free hospitals, or
  ancient wellness centers are reception leads only. No snippet supports a claim.
- No ethnography, modern clinical account, tourism page, or “traditional medicine” continuity page
  was admitted as medieval evidence.

## Cache manifest

All cache files are ignored research material. No restricted PDF or manuscript image is cached.

| basename | source/route | transformation | bytes | SHA-256 | rights / disposition |
|---|---|---|---:|---|---|
| `DHARMA_INSCIK00209.xml` | commit-pinned raw GitHub route in `SRC-022000` | none | 37991 | `e16fe0b7c5c2dbc5bcd1dd51ea0b4b59d140ee2a7a9e00d23afbee30bd47fc3a` | embedded object license CC BY-SA 4.0; private cache, attribution/share-alike required |
| `dharmalekha-INSCIK00209-jina-2026-08-18.md` | DHARMA page through `r.jina.ai/http://...` | HTML-to-Markdown reader rendering | 13407 | `0081c6a6f095058758b125f35d8e7b5fa939fdaf49c54a2063959104b2691192` | derivative of CC BY-SA 4.0 edition; internal only; do not redistribute |
| `dharma-tfc-khmer-epigraphy-LICENCE.txt` | raw GitHub repository license | none | 18650 | `7e7170e3cebf88a9f60c7b8421418323c09304da1af4d5e90f4da1dc1c8a2661` | CC BY 4.0 license text |
| `agent-reach-doctor-2026-08-18.json` | local `agent-reach doctor --json` | command output | 4134 | `6677be775dd8332e1eb6ea99500f7b1c56962d0597fce1ffac6d97fa7d2dcdf1` | project-generated method record |

Honda, Tonle Snguot, Acri 2021/2022/2024, Siddham, and the *Medieval Worlds* article remain
link-only because the review did not establish a reuse license broad enough to justify retention.

## Per-record workflow and file fields

This table completes the canonical source schema per source. Nothing in it is inherited from the
file-level prose. `cached_file: none` means the complete source was opened through its lawful link
but was not retained. Claim fit remains relationship-relative and is resolved again on every
`REL-022xxx` edge.

| source_id | opened_by | opened_on | verification_status | cached_file | cached_sha256 | source_level | claim_fit |
|---|---|---|---|---|---|---|---|
| `SRC-022000` | R13 researcher | 2026-08-18 | `verified` | `DHARMA_INSCIK00209.xml`; `dharmalekha-INSCIK00209-jina-2026-08-18.md` | `e16fe0b7c5c2dbc5bcd1dd51ea0b4b59d140ee2a7a9e00d23afbee30bd47fc3a`; `0081c6a6f095058758b125f35d8e7b5fa939fdaf49c54a2063959104b2691192` | L1 | A for preserved edited wording; B for restored wording; D for implementation/experience |
| `SRC-022001` | R13 researcher | 2026-08-18 | `verified` | none | not_applicable | L2 | A for displayed edition/translation; B for disputed wording; D for implementation |
| `SRC-022002` | R13 researcher | 2026-08-18 | `verified` | none | not_applicable | L2 | A for Honda's printed position; C/D for poor-relief or historical-function inference |
| `SRC-022003` | R13 researcher | 2026-08-18 | `verified` | none | not_applicable | L1 for excavation record; L2 for report interpretation | A for reported method/finds/custody; B/C for function; D for mental-health service, access, or patient care |
| `SRC-022004` | R13 researcher | 2026-08-18 | `verified` | none | not_applicable | L2 | A for Acri's edition-derived passages; B for interpretation; D for practice/therapy |
| `SRC-022005` | R13 researcher | 2026-08-18 | `verified` | none | not_applicable | L2 | B for synthesis/context; D for practice or continuity |
| `SRC-022006` | R13 researcher | 2026-08-18 | `verified` | none | not_applicable | L2 | B for translation/commentary method; D for specific DhP practice |
| `SRC-022007` | R13 researcher | 2026-08-18 | `verified` | none | not_applicable | L3 for institutional metadata; L2 for specialist interpretation | A for shelfmark/material metadata; B for reported provenance; D for historical use |
| `SRC-022008` | R13 researcher | 2026-08-18 | `verified` | `dharma-tfc-khmer-epigraphy-LICENCE.txt` | `7e7170e3cebf88a9f60c7b8421418323c09304da1af4d5e90f4da1dc1c8a2661` | L3 | A for repository-level rights; D for historical claims |
| `SRC-022009` | R13 researcher | 2026-08-18 | `verified` | `agent-reach-doctor-2026-08-18.json` | `6677be775dd8332e1eb6ea99500f7b1c56962d0597fce1ffac6d97fa7d2dcdf1` | L5 | D for historical claims; method status only |
