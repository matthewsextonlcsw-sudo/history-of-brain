# R09-TRANSLATION-NETWORKS — source ledger

**State:** internal research packet; not public prose
**Coverage:** two bounded Greek–Arabic translation chains, with Syriac only where the record demonstrates or leaves open an intermediary, approximately 500–1000 CE
**Opened:** 2026-08-18
**ID reservation:** `013000–013999`

## Method and discovery record

- This ledger applies `PROJECT-BRAIN.md`, `EVIDENCE-MODEL.md`, `SOURCE-RATING-AND-CAPTURE-PROTOCOL.md`, `BATCH-03-INDEX.md`, and this packet's `BRIEF.md`.
- The packet retains two chains: (1) the Arabic version of Galen's *Commentary on Hippocrates' Epidemics VI* produced in the circle of Ḥunayn ibn Isḥāq, and (2) two Arabic versions of Aristotle's *De anima*, one associated with Isḥāq ibn Ḥunayn and one conventionally called pseudo-Isḥāq.
- Agent Reach v1.5.0 (`check-update`: current) reported Jina Reader active on 2026-08-18. Exa was unavailable because `mcporter`/Exa were not installed or configured. Jina full-page reads and direct institutional/full-text endpoints were used; built-in primary/scholarly web search was the discovery fallback. Search results, abstracts, snippets, and AI summaries were leads only.
- Full relevant works or bounded full sections were opened. One anti-bot-blocked article (`SRC-013006`) is quarantined as `LX-D` and supports no retained claim.
- `opened_by` is the R09 Codex packet researcher for every row; every source was opened or access-tested on 2026-08-18.
- Levels and claim fit are claim-relative: L1 direct/authoritative evidence; L2 specialist scholarship or a named scholarly translation; L3 authoritative institutional reference; L4 accountable secondary account; L5 discovery lead; LX rejected/unusable. Fit A is direct, B strong indirect, C context/illustration, and D mismatch.

## Consulted sources

| source_id | Full citation and stable access | Type, languages, and material checked | Level / fit | Position, limits, and independence | Rights / local capture |
|---|---|---|---|---|---|
| `SRC-013000` | Ḥunayn ibn Isḥāq, *Epistle* (*al-Risālah*), preface 2.12–3.2 and nos. 3, 20, 115, in Uwe Vagelpohl and Ignacio Sánchez, “Why Do We Translate? Arabic Sources on Translation,” in Dimitri Gutas, ed., *Why Translate Science?* (Brill, 2022), ch. 5, §§III.1–4, DOI [10.1163/9789004472648_006](https://doi.org/10.1163/9789004472648_006), [full NCBI chapter](https://www.ncbi.nlm.nih.gov/books/NBK622612/) | `primary_textual` through a named modern scholarly edition/translation; Arabic→English. Checked the full chapter and exact translated passages: preface; *On Demonstration*; *On Sects*; *Method of Healing*. | L2-A for what the named English translations render; B for general workshop practice | A participant's retrospective letter to a patron, probably begun 855–856 and revised. Later additions and recensions exist. It documents named commissions, languages, manuscript searches, collation, correction, collaborators, and losses, but one chain cannot be projected onto every translation. Same anthology file as `SRC-013001`; primary passages and modern essay are not independent. | Chapter is CC BY 4.0. Cached unchanged with `SRC-013001` as `SRC-013000-013001-why-translate-science-ch5-2022.pdf`; SHA-256 `503e26525ac05f3d724f3f52e47a4569bb01de33ff1cddb44778c515b5f377ed`. |
| `SRC-013001` | Uwe Vagelpohl and Ignacio Sánchez, “Why Do We Translate? Arabic Sources on Translation,” in *Why Translate Science?* (Brill, 2022), ch. 5, [full NCBI chapter](https://www.ncbi.nlm.nih.gov/books/NBK622612/) | `scholarly_synthesis` plus critical anthology; English. Checked essay §§I–IV, source introductions, patron/translator documents II.1–11, methods III.1–7, notes, and bibliography. | L2-B for movement/source criticism; A for its edition metadata and source-dependency warnings | Distinguishes participant records, bibliography/biography, later anecdotes, propaganda, and apocrypha. It is the upstream source for several embedded translations, so those excerpts are not independent confirmations of its synthesis. | CC BY 4.0; same cached PDF and hash as `SRC-013000`. |
| `SRC-013002` | Uwe Vagelpohl, “In the Translator's Workshop,” *Arabic Sciences and Philosophy* 21 (2011): 249–288, DOI [10.1017/S0957423911000038](https://doi.org/10.1017/S0957423911000038), [full PMC article](https://pmc.ncbi.nlm.nih.gov/articles/PMC3783994/) | `scholarly_synthesis`; English with Arabic/Greek examples. Checked the full article, especially the introduction; categories of the seventeen `qāla Ḥunayn` notes; Greek/Syriac/Arabic source problems; later revision; Christian scholarly settings; conclusions. | L2-B; A for its transcribed translator-note evidence | Specialist study of the same *Epidemics* translation later edited in `SRC-013003`. It is not independent corroboration of that text. Its reconstruction of influence on Ḥunayn is explicitly tentative. | PMC access does not by itself grant reuse; article copyright/license was not shown as open. Link-only; no retained full text. |
| `SRC-013003` | Galen, *Commentary on Hippocrates' Epidemics Book VI, Parts I–VIII*, Arabic version ed. and English trans. Uwe Vagelpohl, vol. 1 (De Gruyter/CMG Suppl. Or. V 3, 2022), DOI [10.1515/9783110774993](https://doi.org/10.1515/9783110774993), [full NCBI record/PDF](https://www.ncbi.nlm.nih.gov/books/NBK621961/) | `primary_textual` through a current critical edition and translation; Arabic→English, with Greek witnesses/variants in apparatus. Checked full vol. 1, especially intro pp. 75–87; Arabic/English Part II 45, pp. 392–397; manuscript and authorship sections. | L1-A for the edited Arabic witness and apparatus; L2-A for the English translation; B for ninth-century authorship/source-language reconstruction | The edition attributes the Arabic version to Ḥunayn's workshop but records that the surviving Arabic manuscripts do not directly name him, the *Epistle* does not state the immediate source language, and stylistic attribution is not conclusive. The translator notes make direct Greek use or Greek checking likely. The Arabic and English are one textual/edition chain, not independent evidence. | CC BY-NC-ND 4.0; cached unchanged as `SRC-013003-galen-epidemics-vi-arabic-v1-2022.pdf`; SHA-256 `6db4851c8ff6f82f2b0841474fd20d3ad1247ff9ee70ed0cd9bc2d36b1a51294`. No derivative public redistribution without license review. |
| `SRC-013004` | Jawdath Jabbour, “Le manuscrit Ṭabāṭabāʾī 1367, les *Taʿlīqāt* d'Avicenne au *De Anima* et la découverte de la traduction arabe du *De Anima* I 1–II 2 par Isḥāq ibn Ḥunayn,” *Studia graeco-arabica* 13 (2023): 137–156, DOI [10.12871/97888333988157](https://doi.org/10.12871/97888333988157), [full journal PDF](https://learningroads.cfs.unipi.it/wp-content/uploads/SGA-13-2023-Jabbour-137-156-2.pdf) | `scholarly_synthesis`; subtype `edition_announcement_and_manuscript_study`; French, Greek, Arabic. Checked entire article, manuscript description pp. 137–141; transcriptions/comparisons pp. 149–155; footnotes and stated limits. | L2-A for the printed Arabic/Greek comparison and manuscript locators; B for original-translation attribution and codicology | Specialist discovery/edition announcement. The author did not physically inspect the Tehran manuscript because travel was not possible; Teymour Morel checked pagination and structure locally. The fragment has no dated colophon or named copyist. The author explicitly cannot decide whether differences arose in Greek exemplars, translation, or manuscript transmission. | © 2023 Pisa University Press; no open reuse license identified. Link-only; temporary local PDF/OCR deleted/not placed in packet cache. |
| `SRC-013005` | Institute for the Study of the Ancient World, NYU, “Aristotle, *De anima*,” *Romance and Reason* exhibition object, [full object record](https://isaw.nyu.edu/exhibitions/romance-reason/rrobjects/aristotle-de-anima) | `institutional_reference`; English metadata for National Library of Israel MS Heb. 1108, fol. 93r. Full object record checked. | L3-A for object metadata; C for the ninth-century Arabic chain | Identifies a later Hebrew manuscript (dated 1380–1420) and a Greek→Arabic→Hebrew attribution. It illustrates later reception only and cannot establish wording, date, or method of Isḥāq's original Arabic translation. | Link-only; image/object rights not assumed; no cache. |
| `SRC-013006` | Alexander Treiger, “Reconstructing Isḥāq ibn Ḥunayn's Arabic Translation of Aristotle's *De Anima*,” *Studia graeco-arabica* 7 (2017): 193–211, [repository PDF endpoint](https://opendata.uni-halle.de/bitstream/1981185920/97907/1/Treiger_2017_Reconstructing_Ibn_Hunayn.pdf) | `discovery_lead`; bibliographic record for an underlying scholarly article. Access attempted through direct and Jina routes; both returned an Anubis anti-bot challenge, not the article. | LX-D | Bibliographic lead cited by Jabbour. The full argument was not opened; it supports no retained claim. | Restricted by technical access; no cache. |
| `SRC-013007` | U.S. National Library of Medicine, “Galen: Arabic Medical Manuscripts,” [full institutional catalog page](https://mainweb.awsprod.nlm.nih.gov/hmd/arabic/galen.html) | `institutional_reference`; manuscript-catalog summaries. Checked full page, including NLM MS A 30.1 and its report of a Greek→Syriac→Arabic chain for *On the Usefulness of the Parts*. | L3-A for catalog/object metadata; D for either selected chain | Useful comparator showing that some Galen chains have a named Syriac intermediary. It concerns a different work and cannot fill the missing immediate-language link for *Epidemics VI*. | Link-only; image rights not assumed; no cache. |
| `SRC-013008` | P. N. Singer, “The Essence of Rage: Galen on Emotional Disturbances and Their Physical Correlates,” in Richard Seaford, John Wilkins, and Matthew Wright, eds., *Selfhood and the Soul* (Oxford University Press, 2017), pp. 161–196, [full NCBI chapter](https://www.ncbi.nlm.nih.gov/books/NBK441817/) | `scholarly_synthesis`; English with Greek passages. Full chapter opened, including Galen's terminology, genre, and physiological framing of emotion. | L2-C | Context for why mental and emotional observations appear in medical works not labeled “psychology.” It does not establish the transmission or wording of either selected chain and is not counted as corroboration. | © Oxford University Press 2017; no chapter-level open reuse license identified. Link-only; no cache. |
| `SRC-013009` | Khan Academy, “Golden age of Islam,” educational video, uploaded 17/18 February 2017 depending display timezone, [Khan Academy transcript](https://www.khanacademy.org/humanities/world-history/medieval-times/cross-cultural-diffusion-of-knowledge/v/golden-age-of-islam), [YouTube version](https://www.youtube.com/watch?v=K5XKjk0-hCo) | `popular_secondary`; subtype `educational_video`; English. Full 11-minute transcript and timed captions opened. YouTube `upload_date=20170218`; timestamp `1487384981` is 2017-02-18 02:29:41 UTC and 2017-02-17 in U.S. time zones. Checked 02:30–02:47, 02:47–03:12, 04:31–04:38, and 08:50–09:05. | L4-A for what the video says; D for the medieval location/purpose of either selected chain | Downstream reception exemplar. It first says al-Maʾmūn created the House of Wisdom and calls it a center of learning, then shifts to later Abbasid caliphs, multilingual translation, and collection in libraries. Separately, it calls Hindu numerals a bridge “to the West” and later calls the Islamic world/empires a bridge of human knowledge during Europe's “Dark Ages.” These adjacent/separate statements must not be fused. No claim-specific citations are supplied; origins are unknown. | Copyright Khan Academy/YouTube; link-only. Timed captions used transiently for verification and not cached. |
| `SRC-013010` | Bink Hallum, “Ḥunayn ibn Isḥāq and the Rise of Arabic as a Language of Science,” Qatar Digital Library / British Library, 14 October 2014, [full article](https://www.qdl.qa/en/%E1%B8%A5unayn-ibn-is%E1%B8%A5%C4%81q-and-rise-arabic-language-science) | `popular_secondary`; subtype `institutional_expert_essay`; English. Full article opened, especially `Overview`, opening paragraphs, and `Tell It to Me Straight, Doc!`. | L4-A for the essay's own framing; C/D for personal authorship, total-corpus, and broad audience-effect claims | Downstream personalizing exemplar. Hallum says Ḥunayn “managed to translate” the Galen books available to him, that his terminology decision “helped establish” Arabic as an international scientific language, and that he was “instrumental” through his efforts and decision. A secondary bibliography is listed but no item/locator is attached to these sentences. Origin is unknown; these qualified verbs must not be strengthened into sole personal authorship or sole causation. | CC BY-NC 4.0 page text; link-only; no cache. |

## Required-field crosswalk

| source_id | Date/version and identifier | Geography / time / represented population | Sensitivity / cultural protocol | Verification and upstream status |
|---|---|---|---|---|
| `SRC-013000` | participant letter c. 855–856 with later revisions; modern 2022 edition/translation | Baghdad-linked Christian physician-translator network, patrons, collaborators, manuscript travel | confession/community, labor credit, later additions | Full translated excerpts opened; Bergsträsser edition and modern adapters named; no Arabic source-language edition independently replayed here |
| `SRC-013001` | 2022; DOI above; NCBI Bookshelf `NBK622612` | wide Abbasid and later Arabic literary archive; elite literate actors | distinguish propaganda, polemic, anecdote, and participant record | Full chapter opened; primary excerpts kept in dependency group with anthology |
| `SRC-013002` | 2011; DOI above; PMC `PMC3783994` | ninth-century Baghdad/Syriac-Christian translation setting reconstructed from one medical corpus | do not reduce Christian communities to a single school or ethnic label | Full article opened; same *Epidemics* origin as `SRC-013003` |
| `SRC-013003` | Arabic critical edition/English translation 2022; ISBN 978-3-11-077209-8 | Greek Galenic source layer; ninth-century Baghdad workshop; later Arabic manuscript witnesses; unnamed patients in prescriptive text | illness, deception/disclosure, class judgment, insulting historical labels; no modern diagnosis | Full 588-page vol. 1 opened; exact Arabic/English pages and apparatus checked |
| `SRC-013004` | 2023; Tehran MS Ṭabāṭabāʾī 1367; Ayasofya 2450 | Greek source; ninth-/early-tenth-century Arabic translations; later Iranian/Ottoman manuscript survival | Iranian manuscript custody; author lacked autopsy; retain local catalog/manuscript identifiers | Full article opened; printed Greek/Arabic transcriptions and limits checked; copyright link-only |
| `SRC-013005` | Hebrew MS 1108, fol. 93r; 1380–1420 | later Hebrew reception of Arabic Aristotle | object provenance/rights | Full object record opened; not upstream proof of ninth-century wording |
| `SRC-013006` | 2017 | specialist reconstruction | none beyond access limits | LX: challenge page only; no claim use |
| `SRC-013007` | modern NLM catalog; MS A 30.1 | later Arabic Galen manuscript | institutional object rights | Full catalog page opened; comparator work only |
| `SRC-013008` | 2017 chapter, pp. 161–196 | Galenic medical/philosophical corpus | emotion language; avoid diagnosis | Full chapter opened; contextual only |
| `SRC-013009` | YouTube `upload_date=20170218`; timestamp `1487384981` = 2017-02-18 02:29:41 UTC / 2017-02-17 in U.S. time zones; video `K5XKjk0-hCo` | modern global-history education; Abbasid Baghdad and imagined “West” | religious/civilizational identity; avoid making a classroom compression a medieval fact | Full transcript/timed captions opened; exact segments at 02:30–02:47, 02:47–03:12, 04:31–04:38, and 08:50–09:05; no claim-specific upstream citation |
| `SRC-013010` | 2014-10-14 institutional expert essay | modern British/Qatar heritage interpretation of ninth-century Galenic translation | confession/community and labor credit | Full article opened; broad bibliography present but no claim-specific source mapping; downstream repetition only |

## Dependency groups

| group | Members | Independence rule |
|---|---|---|
| `DEP-013000-HUNAYN-RISALA-ANTHOLOGY` | `SRC-013000`, portions of `SRC-013001` | Modern essay, introductions, and translated *Risālah* excerpts share one anthology/editorial team and must not be counted as independent confirmation. |
| `DEP-013001-EPIDEMICS-VI` | `SRC-013002`, `SRC-013003` | The article and critical edition study the same Arabic translation and overlapping translator notes. The later edition supersedes the earlier article for exact text/locators. |
| `DEP-013002-DE-ANIMA-JABBOUR` | `SRC-013004`, `SRC-013005`, `SRC-013006` | Jabbour supplies the opened direct comparison. The ISAW object is a later witness only; inaccessible Treiger adds no evidentiary weight. |
| `DEP-013003-CONTEXT-ONLY` | `SRC-013007`, `SRC-013008` | Different Galenic works may contextualize but cannot repair missing links or wording in the selected chain. |
| `DEP-013004-MODERN-MYTH-RECEPTION` | `SRC-013009`, `SRC-013010` | Independently produced modern educational/heritage framings. They document public repetition only and add no medieval corroboration. Their upstream origin is unknown because neither exact proposition carries a claim-specific citation. |

## Canonical source records

The consulted-sources table is the human-readable index. The records below are the schema-complete source records; `unknown` is intentional and is not permission to infer a value.

```yaml
- source_id: SRC-013000
  source_type: primary_textual
  subtype: participant_epistle_in_scholarly_edition
  title: Epistle (al-Risālah), selected entries
  creator: Ḥunayn ibn Isḥāq; Uwe Vagelpohl; Ignacio Sánchez
  creator_role: historical author; modern editors and translators
  date_created: probably 855–856 CE, with later revisions
  date_published: 2022
  edition_or_version: Why Translate Science?, chapter 5, sections III.1–4
  container: Why Do We Translate? Arabic Sources on Translation
  publisher_or_holder: Brill; NCBI Bookshelf
  language: English translation with Arabic references
  original_language: Arabic
  translator: Uwe Vagelpohl and Ignacio Sánchez
  identifier: DOI 10.1163/9789004472648_006; NCBI Bookshelf NBK622612
  url: https://www.ncbi.nlm.nih.gov/books/NBK622612/
  archive_url: not_created
  accessed_on: 2026-08-18
  full_text_location: ignored cache SRC-013000-013001-why-translate-science-ch5-2022.pdf
  geographic_scope: Baghdad-linked Abbasid translation networks
  time_scope: chiefly ninth century CE; later recensional history
  people_or_population: translators, patrons, collaborators, manuscript owners; ordinary recipients largely omitted
  provenance: participant retrospective preserved through later recensions and consulted in a named modern edition/translation
  rights_status: licensed
  cultural_protocol: retain confession/community distinctions and named labor credit
  source_position: elite participant writing to a patron
  limitations: self-presentation, later additions, selective catalog, and translation mediation
  independence_group: DEP-013000-HUNAYN-RISALA-ANTHOLOGY
  opened_by: R09 Codex packet researcher
  opened_on: 2026-08-18
  verification_status: verified
  rejection_reason: not_applicable
- source_id: SRC-013001
  source_type: scholarly_synthesis
  subtype: critical_anthology_and_historiographical_essay
  title: Why Do We Translate? Arabic Sources on Translation
  creator: Uwe Vagelpohl and Ignacio Sánchez
  creator_role: authors, editors, and translators
  date_created: 2022
  date_published: 2022
  edition_or_version: Why Translate Science?, chapter 5
  container: Why Translate Science?
  publisher_or_holder: Brill; NCBI Bookshelf
  language: English with translated Arabic sources
  original_language: Arabic for embedded historical texts
  translator: Uwe Vagelpohl and Ignacio Sánchez for embedded texts
  identifier: DOI 10.1163/9789004472648_006; NCBI Bookshelf NBK622612
  url: https://www.ncbi.nlm.nih.gov/books/NBK622612/
  archive_url: not_created
  accessed_on: 2026-08-18
  full_text_location: ignored cache SRC-013000-013001-why-translate-science-ch5-2022.pdf
  geographic_scope: Abbasid and later Arabic literary networks
  time_scope: ninth century through later Arabic historiography
  people_or_population: translators, patrons, bibliographers, secretaries, and elite scholarly networks
  provenance: modern specialist essay and anthology built from named editions and translated excerpts
  rights_status: licensed
  cultural_protocol: distinguish participant record, polemic, propaganda, anecdote, and later repetition
  source_position: modern specialist editors interpreting a heterogeneous archive
  limitations: embedded translations and synthesis share one editorial chain; not independent confirmations
  independence_group: DEP-013000-HUNAYN-RISALA-ANTHOLOGY
  opened_by: R09 Codex packet researcher
  opened_on: 2026-08-18
  verification_status: verified
  rejection_reason: not_applicable
- source_id: SRC-013002
  source_type: scholarly_synthesis
  subtype: peer_reviewed_article
  title: In the Translator's Workshop
  creator: Uwe Vagelpohl
  creator_role: author and philologist
  date_created: 2011
  date_published: 2011
  edition_or_version: Arabic Sciences and Philosophy 21, pages 249–288
  container: Arabic Sciences and Philosophy
  publisher_or_holder: Cambridge University Press; PMC access copy
  language: English with Arabic and Greek examples
  original_language: not_applicable
  translator: not_applicable
  identifier: DOI 10.1017/S0957423911000038; PMC3783994
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC3783994/
  archive_url: not_created
  accessed_on: 2026-08-18
  full_text_location: institutional full-text endpoint; link-only
  geographic_scope: ninth-century Baghdad and Syriac-Christian scholarly settings
  time_scope: ninth century CE with later manuscript transmission
  people_or_population: translators and scholarly collaborators in one Galenic corpus
  provenance: specialist analysis of translator notes later incorporated into SRC-013003's edition
  rights_status: link-only
  cultural_protocol: do not collapse Syriac-Christian communities into one school, ethnicity, or institution
  source_position: modern specialist reconstruction
  limitations: same textual chain as SRC-013003; some influence claims are tentative
  independence_group: DEP-013001-EPIDEMICS-VI
  opened_by: R09 Codex packet researcher
  opened_on: 2026-08-18
  verification_status: verified
  rejection_reason: not_applicable
- source_id: SRC-013003
  source_type: primary_textual
  subtype: critical_edition_and_named_translation
  title: Galen, Commentary on Hippocrates' Epidemics Book VI, Parts I–VIII, volume 1
  creator: Galen; Uwe Vagelpohl
  creator_role: historical author; modern editor and translator
  date_created: ancient Greek work; Arabic version associated with ninth-century workshop
  date_published: 2022
  edition_or_version: CMG Supplementum Orientale V 3, volume 1
  container: Corpus Medicorum Graecorum
  publisher_or_holder: De Gruyter; NCBI Bookshelf
  language: Arabic critical text and English translation with Greek apparatus
  original_language: Greek; Arabic translation is the edited witness
  translator: Uwe Vagelpohl for Arabic to English; historical Arabic translator qualified
  identifier: DOI 10.1515/9783110774993; ISBN 978-3-11-077209-8; NBK621961
  url: https://www.ncbi.nlm.nih.gov/books/NBK621961/
  archive_url: not_created
  accessed_on: 2026-08-18
  full_text_location: ignored cache SRC-013003-galen-epidemics-vi-arabic-v1-2022.pdf
  geographic_scope: Greek source tradition, Baghdad workshop orbit, later Arabic manuscript witnesses
  time_scope: ancient source; ninth-century Arabic translation; later manuscript preservation; 2022 edition
  people_or_population: authors, translators, unnamed patients and attendants represented through medical prescription
  provenance: critical edition from surviving Arabic manuscripts with apparatus and authorship/source-language analysis
  rights_status: licensed
  cultural_protocol: preserve illness and disability language historically; no retrospective diagnosis; protect unnamed patients from invented voice
  source_position: elite medical author and translator/editorial chain
  limitations: manuscripts do not directly name Ḥunayn; immediate source language unresolved; edition and translation are one chain
  independence_group: DEP-013001-EPIDEMICS-VI
  opened_by: R09 Codex packet researcher
  opened_on: 2026-08-18
  verification_status: verified
  rejection_reason: not_applicable
- source_id: SRC-013004
  source_type: scholarly_synthesis
  subtype: edition_announcement_and_manuscript_study
  title: Le manuscrit Ṭabāṭabāʾī 1367, les Taʿlīqāt d'Avicenne au De Anima et la découverte de la traduction arabe du De Anima I 1–II 2 par Isḥāq ibn Ḥunayn
  creator: Jawdath Jabbour
  creator_role: author and philologist
  date_created: 2023
  date_published: 2023
  edition_or_version: Studia graeco-arabica 13, pages 137–156
  container: Studia graeco-arabica
  publisher_or_holder: Pisa University Press
  language: French with Greek and Arabic transcriptions
  original_language: Greek and Arabic for compared passages
  translator: historical Arabic translators discussed; modern project used Jabbour's French analysis
  identifier: DOI 10.12871/97888333988157; Tehran MS Ṭabāṭabāʾī 1367; Ayasofya 2450
  url: https://learningroads.cfs.unipi.it/wp-content/uploads/SGA-13-2023-Jabbour-137-156-2.pdf
  archive_url: not_created
  accessed_on: 2026-08-18
  full_text_location: publisher PDF consulted transiently; link-only
  geographic_scope: Greek source tradition; Arabic translation; Iranian and Ottoman manuscript preservation
  time_scope: ninth or early tenth-century translation; later composite witness; 2023 study
  people_or_population: translators, commentators, copyists, manuscript custodians; ordinary readers omitted
  provenance: modern study using manuscript images/local structural confirmation and printed comparisons; full edition announced as forthcoming
  rights_status: link-only
  cultural_protocol: retain Iranian manuscript custody and local identifiers; do not imply researcher autopsy
  source_position: modern specialist who did not physically inspect the Tehran manuscript
  limitations: no dated colophon or named copyist; fragmentary composite witness; cause of variants unresolved; complete edition forthcoming
  independence_group: DEP-013002-DE-ANIMA-JABBOUR
  opened_by: R09 Codex packet researcher
  opened_on: 2026-08-18
  verification_status: verified
  rejection_reason: not_applicable
- source_id: SRC-013005
  source_type: institutional_reference
  subtype: exhibition_object_record
  title: Aristotle, De anima
  creator: Institute for the Study of the Ancient World, New York University
  creator_role: holding and describing institution
  date_created: manuscript dated 1380–1420
  date_published: current web record; exact release date unknown
  edition_or_version: Romance and Reason exhibition object record
  container: Romance and Reason
  publisher_or_holder: Institute for the Study of the Ancient World; National Library of Israel
  language: English metadata; Hebrew manuscript
  original_language: Arabic source tradition as described by catalog
  translator: historical Greek-to-Arabic and Arabic-to-Hebrew translators as cataloged; names not established here
  identifier: NLI MS Heb. 1108, folio 93r
  url: https://isaw.nyu.edu/exhibitions/romance-reason/rrobjects/aristotle-de-anima
  archive_url: not_created
  accessed_on: 2026-08-18
  full_text_location: institutional object page; link-only
  geographic_scope: later Hebrew reception of Arabic Aristotle
  time_scope: 1380–1420 manuscript; later modern object record
  people_or_population: manuscript makers and later scholarly readers; original translation actors not established
  provenance: institutional description of a held Hebrew manuscript object
  rights_status: link-only
  cultural_protocol: retain object provenance and repository attribution
  source_position: modern institutional cataloger
  limitations: later reception only; cannot establish ninth-century wording, method, patron, or purpose
  independence_group: DEP-013002-DE-ANIMA-JABBOUR
  opened_by: R09 Codex packet researcher
  opened_on: 2026-08-18
  verification_status: verified
  rejection_reason: not_applicable
- source_id: SRC-013006
  source_type: discovery_lead
  subtype: inaccessible_scholarly_article
  title: Reconstructing Isḥāq ibn Ḥunayn's Arabic Translation of Aristotle's De Anima
  creator: Alexander Treiger
  creator_role: author
  date_created: 2017
  date_published: 2017
  edition_or_version: Studia graeco-arabica 7, pages 193–211
  container: Studia graeco-arabica
  publisher_or_holder: journal and Universität Halle repository endpoint
  language: unknown because full work was not opened
  original_language: not_applicable
  translator: not_applicable
  identifier: repository filename Treiger_2017_Reconstructing_Ibn_Hunayn.pdf
  url: https://opendata.uni-halle.de/bitstream/1981185920/97907/1/Treiger_2017_Reconstructing_Ibn_Hunayn.pdf
  archive_url: not_created
  accessed_on: 2026-08-18
  full_text_location: unavailable; anti-bot challenge only
  geographic_scope: Arabic Aristotle transmission, inferred from title only
  time_scope: medieval transmission, inferred from title only
  people_or_population: Isḥāq ibn Ḥunayn and manuscript tradition, inferred from title only
  provenance: bibliographic lead cited by SRC-013004; access attempt returned challenge page
  rights_status: restricted
  cultural_protocol: do not bypass access controls
  source_position: unopened modern specialist article
  limitations: no full text, argument, method, or locator consulted
  independence_group: DEP-013002-DE-ANIMA-JABBOUR
  opened_by: R09 Codex packet researcher
  opened_on: 2026-08-18
  verification_status: rejected
  rejection_reason: Anubis anti-bot challenge prevented full-source consultation
- source_id: SRC-013007
  source_type: institutional_reference
  subtype: manuscript_catalog_page
  title: "Galen: Arabic Medical Manuscripts"
  creator: U.S. National Library of Medicine
  creator_role: holding and describing institution
  date_created: current web catalog; exact date unknown
  date_published: current web catalog; exact date unknown
  edition_or_version: web page opened 2026-08-18
  container: Islamic Medical Manuscripts at the National Library of Medicine
  publisher_or_holder: U.S. National Library of Medicine
  language: English catalog metadata
  original_language: Arabic and Syriac for described manuscript traditions
  translator: historical translators as cataloged
  identifier: NLM MS A 30.1
  url: https://mainweb.awsprod.nlm.nih.gov/hmd/arabic/galen.html
  archive_url: not_created
  accessed_on: 2026-08-18
  full_text_location: institutional page; link-only
  geographic_scope: Arabic Galen manuscript transmission
  time_scope: medieval manuscript tradition; modern catalog
  people_or_population: translators, copyists, manuscript holders
  provenance: institutional catalog descriptions of held manuscripts
  rights_status: link-only
  cultural_protocol: retain call number and institutional custody
  source_position: modern institutional cataloger
  limitations: comparator work only; cannot fill the selected Epidemics VI language link
  independence_group: DEP-013003-CONTEXT-ONLY
  opened_by: R09 Codex packet researcher
  opened_on: 2026-08-18
  verification_status: verified
  rejection_reason: not_applicable
- source_id: SRC-013008
  source_type: scholarly_synthesis
  subtype: scholarly_book_chapter
  title: "The Essence of Rage: Galen on Emotional Disturbances and Their Physical Correlates"
  creator: P. N. Singer
  creator_role: author and historian of medicine
  date_created: 2017
  date_published: 2017
  edition_or_version: Selfhood and the Soul, pages 161–196
  container: Selfhood and the Soul
  publisher_or_holder: Oxford University Press; NCBI Bookshelf
  language: English with Greek passages
  original_language: Greek for embedded Galenic passages
  translator: P. N. Singer where translated in chapter
  identifier: NCBI Bookshelf NBK441817
  url: https://www.ncbi.nlm.nih.gov/books/NBK441817/
  archive_url: not_created
  accessed_on: 2026-08-18
  full_text_location: institutional full-text endpoint; link-only
  geographic_scope: Galenic medical and philosophical corpus
  time_scope: Roman imperial Galen; 2017 scholarship
  people_or_population: medical authors and subjects represented in Galenic works
  provenance: modern specialist chapter interpreting named Galenic passages
  rights_status: link-only
  cultural_protocol: retain historical emotion language and avoid retrospective diagnosis
  source_position: modern specialist synthesis
  limitations: context only; does not establish transmission, wording, or selected-chain practice
  independence_group: DEP-013003-CONTEXT-ONLY
  opened_by: R09 Codex packet researcher
  opened_on: 2026-08-18
  verification_status: verified
  rejection_reason: not_applicable
- source_id: SRC-013009
  source_type: popular_secondary
  subtype: educational_video
  title: Golden age of Islam
  creator: Khan Academy
  creator_role: educational media publisher
  date_created: 2017
  date_published: "2017-02-17/2017-02-18 depending display timezone; YouTube upload_date 20170218"
  edition_or_version: "11-minute web video and timed transcript; timestamp 1487384981 = 2017-02-18 02:29:41 UTC and 2017-02-17 in U.S. time zones"
  container: Khan Academy world history; YouTube mirror
  publisher_or_holder: Khan Academy
  language: English
  original_language: not_applicable
  translator: not_applicable
  identifier: YouTube K5XKjk0-hCo
  url: https://www.khanacademy.org/humanities/world-history/medieval-times/cross-cultural-diffusion-of-knowledge/v/golden-age-of-islam
  archive_url: not_created
  accessed_on: 2026-08-18
  full_text_location: public video/transcript; transient captions not cached
  geographic_scope: modern global-history account of Abbasid Baghdad and an imagined West
  time_scope: medieval history as represented in 2017
  people_or_population: caliphs, scholars, and civilizational categories; ordinary historical actors omitted
  provenance: downstream educational video without claim-specific citations; timed statements kept separate where speaker or proposition changes
  rights_status: link-only
  cultural_protocol: avoid turning classroom compression into Islamic or European historical fact
  source_position: modern popular educator
  limitations: no claim-specific upstream citations; date display is timezone-sensitive; unsuitable for medieval event or purpose claims
  independence_group: DEP-013004-MODERN-MYTH-RECEPTION
  opened_by: R09 Codex packet researcher
  opened_on: 2026-08-18
  verification_status: verified
  rejection_reason: not_applicable
- source_id: SRC-013010
  source_type: popular_secondary
  subtype: institutional_expert_essay
  title: Ḥunayn ibn Isḥāq and the Rise of Arabic as a Language of Science
  creator: Bink Hallum
  creator_role: author and manuscript curator
  date_created: 2014
  date_published: 2014-10-14
  edition_or_version: Qatar Digital Library web article
  container: Qatar Digital Library
  publisher_or_holder: Qatar Foundation Partnership; British Library
  language: English
  original_language: not_applicable
  translator: not_applicable
  identifier: stable QDL article URL
  url: https://www.qdl.qa/en/%E1%B8%A5unayn-ibn-is%E1%B8%A5%C4%81q-and-rise-arabic-language-science
  archive_url: not_created
  accessed_on: 2026-08-18
  full_text_location: public institutional web article; link-only
  geographic_scope: Abbasid translation history presented through British/Qatar heritage interpretation
  time_scope: ninth-century history as represented in 2014
  people_or_population: Ḥunayn and scholarly translation networks; collaborators compressed by headline framing
  provenance: modern expert public essay with broad bibliography but no sentence-level source mapping
  rights_status: licensed
  cultural_protocol: preserve Syriac-Christian and Abbasid network distinctions and distributed labor credit
  source_position: modern curator interpreting manuscripts for a public audience
  limitations: documents reception framing only; personal total-corpus and broad causal claims are not independently established
  independence_group: DEP-013004-MODERN-MYTH-RECEPTION
  opened_by: R09 Codex packet researcher
  opened_on: 2026-08-18
  verification_status: verified
  rejection_reason: not_applicable
```

## Cache manifest and rights check

| cached file | bytes/pages | SHA-256 | Rights decision |
|---|---:|---|---|
| `SRC-013000-013001-why-translate-science-ch5-2022.pdf` | 794,486 bytes / 123 PDF pages | `503e26525ac05f3d724f3f52e47a4569bb01de33ff1cddb44778c515b5f377ed` | CC BY 4.0; unchanged lawful research capture. |
| `SRC-013003-galen-epidemics-vi-arabic-v1-2022.pdf` | 4,964,113 bytes / 588 pp. | `6db4851c8ff6f82f2b0841474fd20d3ad1247ff9ee70ed0cd9bc2d36b1a51294` | CC BY-NC-ND 4.0; unchanged research capture; derivative/public reuse requires license review. |

Both cache files resolve under the ignored `research/source-cache/R09-TRANSLATION-NETWORKS/` path. Copyrighted Jabbour and Vagelpohl 2011 full text, restricted Treiger, object images, and institutional page renders were not cached.
