# R13-KOREA-JAPAN-MEDIEVAL claim map

State: internal claim graph; no public wording approved

Relationship vocabulary: `supports`, `qualifies`, `contradicts`, `contextualizes`, `illustrates`, `originates`, `repeats`

## Canonical claim-field key

Each `### CLM-021xxx` block is one atomic claim record. `claim` is `claim_text`; the remaining
named fields map directly to the project schema. `place_scope` is the claim's
`geographic_scope`. Shared fields unless a block overrides them:
`current_evidence_note=not_applicable; this packet makes no current-clinical comparison and
rejects retrospective diagnostic identity`; `sensitivity=clinical/identity/sacred`, with
`trauma/violence` added for `CLM-021003`, `CLM-021009`, and `CLM-021017`;
`disagreement_id=none` except `CLM-021002` (`DIS-021000`), `CLM-021011` (`DIS-021002`), and
`CLM-021013` (`DIS-021001`); `wording_limits` are the restrictions in `status`, supplemented by
the mandatory holds in GAPS-AND-HANDOFF.md; `created_by=R13 packet researcher`;
`created_on=2026-08-18`; `review_status=source-verified` (internal only; not wording-verified
or approved); `withdrawal_reason=not_applicable`. Evidence labels use only Documented,
Strongly supported, Plausible, Disputed, or Unknown; phrases after a slash explain the bounded
job rather than introduce another label.

## Atomic claims

### `CLM-021000`

- `claim`: The selected Hyetong material is preserved in a late-thirteenth-century Korean compilation, not a contemporaneous seventh-century case record.
- `claim_type`: `date_or_sequence`
- `time_scope`: compilation ca. 1281–1289; represented setting earlier
- `place_scope`: Goryeo compilation about Silla/Tang
- `population_scope`: bounded text, not a population
- `evidence_label`: Documented
- `universality`: individual
- `anachronism_risk`: high
- `anachronism_note`: high if the late compilation is called a contemporaneous clinical chart
- `status`: outline-safe with date/genre seam; public review required

### `CLM-021001`

- `claim`: The Hyetong cluster narratively links royal illness, incantation, material objects, spirit/dragon expulsion, and claimed recovery.
- `claim_type`: `quotation_or_position`
- `time_scope`: represented seventh-century setting; compiled late thirteenth century
- `place_scope`: Tang and Silla as represented
- `population_scope`: two unnamed royal women in the narrative
- `evidence_label`: Documented
- `universality`: individual
- `anachronism_risk`: medium
- `status`: outline-safe only with “the story says” attribution

### `CLM-021002`

- `claim`: Identifying Hyetong's “Wuwei Tripitaka” with Śubhakarasiṃha conflicts with the chronology preserved in the same narrative chain.
- `claim_type`: `date_or_sequence`
- `time_scope`: claimed return 665 versus Śubhakarasiṃha's Tang arrival 716
- `place_scope`: Tang/Silla
- `population_scope`: named religious figures
- `evidence_label`: Disputed
- `universality`: individual
- `anachronism_risk`: low
- `status`: outline-safe as dispute, not resolved biography

### `CLM-021003`

- `claim`: In the return-to-Silla episode, the royal daughter's illness and claimed recovery are embedded in royal command, execution/pardon, appointment, and legitimation.
- `claim_type`: `quotation_or_position`
- `time_scope`: represented early Silla; compiled later
- `place_scope`: Silla as represented
- `population_scope`: court figures
- `evidence_label`: Documented
- `universality`: individual
- `anachronism_risk`: medium
- `status`: outline-safe with genre seam

### `CLM-021004`

- `claim`: The selected Korean narrative does not preserve the princess's or royal daughter's own account, symptoms, consent, cost, or follow-up.
- `claim_type`: `archival_silence`
- `time_scope`: bounded narrative
- `place_scope`: Tang/Silla as represented
- `population_scope`: unnamed royal women
- `evidence_label`: Documented
- `universality`: individual
- `anachronism_risk`: low
- `status`: required context

### `CLM-021005`

- `claim`: The Hyetong narrative does not establish treatment efficacy.
- `claim_type`: `causal`
- `time_scope`: selected narrative only
- `place_scope`: Korea/Tang as represented
- `population_scope`: the two narrated royal recipients only
- `evidence_label`: Unknown
- `universality`: unknown
- `anachronism_risk`: high
- `anachronism_note`: a narrated recovery is not a measured effect
- `status`: mandatory hold; independent outcome verification is absent

### `CLM-021006`

- `claim`: *Ishinpō* scroll 3 chapters 21–23 organize `言語錯亂`, `癲`, and `狂` through bodily, behavioural, spirit-language, and prescriptive materials drawn from multiple named works.
- `claim_type`: `quotation_or_position`
- `time_scope`: 984 compilation layer as witnessed in an 1854–1860 edition
- `place_scope`: Japanese compilation of continental textual materials
- `population_scope`: generic persons described by authoritative texts
- `evidence_label`: Documented
- `universality`: individual
- `anachronism_risk`: medium
- `status`: outline-safe after translation review

### `CLM-021007`

- `claim`: `言語錯亂`, `癲`, and `狂` in these chapters are not established equivalents of any single modern diagnosis.
- `claim_type`: `comparative`
- `time_scope`: historical terms versus current taxonomies
- `place_scope`: transregional textual compilation
- `population_scope`: not applicable
- `evidence_label`: Documented
- `universality`: individual
- `anachronism_risk`: high
- `anachronism_note`: one-to-one retrospective diagnosis would erase the chapters' historical category assemblages
- `current_evidence_note`: no validated modern clinical-historical crosswalk was opened; this is a bounded corpus/method finding, not a claim that equivalence is impossible
- `status`: mandatory publication rule; preserve terms and bounded features

### `CLM-021008`

- `claim`: The selected *Ishinpō* chapters do not support a simple split in which bodily explanations are “medical” and spirits are a separate “superstitious” layer.
- `claim_type`: `interpretive`
- `time_scope`: selected compilation text
- `place_scope`: Japanese textual compilation / continental sources
- `population_scope`: not applicable
- `evidence_label`: Plausible
- `universality`: individual
- `anachronism_risk`: high
- `status`: outline-safe with evidence examples

### `CLM-021009`

- `claim`: Chapters 22–23 prescribe procedures with substantial coercion, pain, restraint, exposure, and intimate-body risk.
- `claim_type`: `quotation_or_position`
- `time_scope`: prescriptive text
- `place_scope`: textual repertoire, not established Japanese practice
- `population_scope`: generic recipients
- `evidence_label`: Documented
- `universality`: individual
- `anachronism_risk`: low
- `anachronism_note`: implementation risk is high, but the claim is explicitly about prescription rather than delivered practice
- `status`: required harm context; public safety review

### `CLM-021010`

- `claim`: The selected *Ishinpō* chapters document a prescriptive repertoire but not its delivery, consent, frequency, safety, cost, access, or outcome in Japan.
- `claim_type`: `archival_silence`
- `time_scope`: selected chapters
- `place_scope`: Japan cannot be inferred from compilation location alone
- `population_scope`: no documented recipients
- `evidence_label`: Documented
- `universality`: individual
- `anachronism_risk`: medium
- `status`: mandatory qualifier

### `CLM-021011`

- `claim`: *Ishinpō* is neither adequately described as an indigenous Japanese invention nor as a passive unchanged copy: the selected chapters visibly quote continental works, while a Japanese court compiler selected and arranged them.
- `claim_type`: `interpretive`
- `time_scope`: 984 compilation and later transmission
- `place_scope`: continental textual sources / Japanese court compilation
- `population_scope`: learned textual networks
- `evidence_label`: Strongly supported
- `universality`: transregional
- `anachronism_risk`: medium
- `anachronism_note`: modern national categories can obscure both continental textual dependence and Japanese compilation agency
- `status`: outline-safe with Poletto's heuristic-country caution

### `CLM-021012`

- `claim`: The consulted scroll-2 edition explicitly attributes a medicine-taking chant to `新羅法師方`.
- `claim_type`: `quotation_or_position`
- `time_scope`: citation in the 984 compilation layer as witnessed in the 1854–1860 print
- `place_scope`: Japanese compilation naming Silla
- `population_scope`: textual user of medicine, not a documented patient group
- `evidence_label`: Documented
- `universality`: individual
- `anachronism_risk`: medium
- `status`: outline-safe after edition/translation review

### `CLM-021013`

- `claim`: The `新羅法師方` citation does not establish a surviving standalone Silla work.
- `claim_type`: `existence_or_event`
- `time_scope`: pre-984 cited layer unresolved
- `place_scope`: Silla/Japan contact question
- `population_scope`: one title-like attribution in one compilation passage
- `evidence_label`: Unknown
- `universality`: unknown
- `anachronism_risk`: high
- `anachronism_note`: a title-like attribution can be over-read as a recovered national book
- `status`: mandatory hold; unity, author, exact date, use, prevalence, and efficacy remain wording limits rather than parts of this claim

### `CLM-021014`

- `claim`: Labeling the selected 984 textual material as timeless “Kampo” is not supported by this packet and can hide ritual, hemerological, and mixed-source dimensions.
- `claim_type`: `continuity_or_change`
- `time_scope`: 984 material versus modern terminology
- `place_scope`: Japan
- `population_scope`: not applicable
- `evidence_label`: Unknown
- `universality`: unknown
- `anachronism_risk`: high
- `anachronism_note`: a later category can flatten ritual, hemerological, Buddhist, and mixed-source dimensions
- `current_evidence_note`: no current Kampo taxonomy or continuity study was opened; Poletto's historical terminology warning is the only modern comparison route
- `status`: avoid in public prose unless separately historicized

### `CLM-021015`

- `claim`: The selected Korean evidence does not establish widespread delivery of a professional service called “Buddhist therapy.”
- `claim_type`: `broad_cultural`
- `time_scope`: represented Silla/Tang and later interpretation
- `place_scope`: Korea/Tang as represented
- `population_scope`: no population denominator
- `evidence_label`: Unknown
- `universality`: unknown
- `anachronism_risk`: high
- `anachronism_note`: modern professional-service language can be reified from narrative and later scholarly terminology
- `status`: mandatory hold; no denominator or delivery archive

### `CLM-021016`

- `claim`: A “first psychiatry” priority claim is not supportable from this bounded corpus.
- `claim_type`: `priority_or_first`
- `time_scope`: all history would be required; not performed
- `place_scope`: global comparison required but absent
- `population_scope`: not applicable
- `evidence_label`: Unknown
- `universality`: global
- `anachronism_risk`: high
- `anachronism_note`: neither a stable definition nor a global competitor survey was performed
- `status`: Unknown and quarantined; reject the superlative

### `CLM-021017`

- `claim`: Across both lanes, authoritative male compilers and institutional/court actors dominate, while patient, family, household, non-elite, and practitioner voices are absent or mediated.
- `claim_type`: `archival_silence`
- `time_scope`: selected sources only
- `place_scope`: Korean and Japanese lanes
- `population_scope`: named and generic recipients in selected sources
- `evidence_label`: Documented
- `universality`: unknown
- `anachronism_risk`: low
- `status`: required context

### `CLM-021018`

- `claim`: The strongest outline use is a comparison of how narratives and compilations organized distress and authority, not a claim about what medieval Korean or Japanese patients generally experienced.
- `claim_type`: `interpretive`
- `time_scope`: packet boundary
- `place_scope`: Korea/Japan lanes kept separate
- `population_scope`: no general population
- `evidence_label`: Strongly supported
- `universality`: unknown
- `anachronism_risk`: low
- `status`: internal handoff guidance

### `CLM-021019`

- `claim`: The selected Hyetong units do not establish how prevalent the represented healing practices were.
- `claim_type`: `prevalence_or_scale`
- `time_scope`: represented Silla/Tang settings through a late-thirteenth-century compilation
- `place_scope`: Tang and Silla as represented
- `population_scope`: no denominator or defined practice population
- `evidence_label`: Unknown
- `universality`: unknown
- `anachronism_risk`: medium
- `anachronism_note`: two narrative episodes cannot supply prevalence
- `status`: mandatory hold; no denominator or implementation corpus

### `CLM-021020`

- `claim`: Typical patient experience cannot be recovered from the two selected Hyetong narrative episodes.
- `claim_type`: `individual_experience`
- `time_scope`: bounded narrative units
- `place_scope`: Tang and Silla as represented
- `population_scope`: two unnamed royal women, both mediated and silent
- `evidence_label`: Unknown
- `universality`: unknown
- `anachronism_risk`: low
- `anachronism_note`: silence cannot be converted into satisfaction, refusal, benefit, or harm
- `status`: mandatory lived-experience hold

### `CLM-021021`

- `claim`: The selected Korean sources do not establish a professional service historically named or organized as “Buddhist therapy.”
- `claim_type`: `existence_or_event`
- `time_scope`: represented Silla/Tang settings and later Korean reception
- `place_scope`: Korean lane only
- `population_scope`: no documented profession, service roster, or recipient population
- `evidence_label`: Unknown
- `universality`: unknown
- `anachronism_risk`: high
- `anachronism_note`: modern “therapy” language is a scholarly framing, not a recovered service name
- `status`: mandatory terminology/profession hold

### `CLM-021022`

- `claim`: The transmission route by which the `新羅法師方` attribution entered *Ishinpō* is not established by the opened sources.
- `claim_type`: `existence_or_event`
- `time_scope`: pre-984 cited layer; route unresolved
- `place_scope`: Silla/Japan contact question
- `population_scope`: textual transmitters not identified
- `evidence_label`: Unknown
- `universality`: individual
- `anachronism_risk`: medium
- `anachronism_note`: textual attribution does not itself show movement, intermediary, or route
- `status`: mandatory contact-route hold; author, exact date, use, prevalence, and efficacy remain wording limits

### `CLM-021023`

- `claim`: The selected Korean narrative does not establish a widespread pattern of humane care.
- `claim_type`: `broad_cultural`
- `time_scope`: represented Silla/Tang settings through one later compilation
- `place_scope`: Korean lane only
- `population_scope`: no defined care population
- `evidence_label`: Unknown
- `universality`: unknown
- `anachronism_risk`: medium
- `anachronism_note`: an empathetic modern category cannot be inferred from isolated authority narratives
- `status`: mandatory hold; no ordinary-care corpus

### `CLM-021024`

- `claim`: Patient satisfaction is not recoverable from the selected Korean narrative units.
- `claim_type`: `individual_experience`
- `time_scope`: bounded Hyetong units
- `place_scope`: Tang and Silla as represented
- `population_scope`: two unnamed royal women with no preserved evaluation
- `evidence_label`: Unknown
- `universality`: unknown
- `anachronism_risk`: low
- `anachronism_note`: narrated recovery cannot substitute for recipient evaluation
- `status`: mandatory patient-voice hold

### `CLM-021025`

- `claim`: The selected Korean sources do not establish a continuous clinical lineage from the represented Hyetong episodes into later practice.
- `claim_type`: `continuity_or_change`
- `time_scope`: represented seventh-century settings through Goryeo and later reception
- `place_scope`: Korea
- `population_scope`: practitioners and institutions not traced continuously
- `evidence_label`: Unknown
- `universality`: unknown
- `anachronism_risk`: high
- `anachronism_note`: later genealogy and repeated narrative do not establish continuous practice
- `status`: mandatory continuity hold

### `CLM-021026`

- `claim`: A “first psychotherapy” priority claim is not supportable from this bounded corpus.
- `claim_type`: `priority_or_first`
- `time_scope`: all history would be required; not performed
- `place_scope`: global comparison required but absent
- `population_scope`: not applicable
- `evidence_label`: Unknown
- `universality`: global
- `anachronism_risk`: high
- `anachronism_note`: neither a stable definition nor a global predecessor survey was performed
- `status`: Unknown and quarantined; reject the superlative

### `CLM-021027`

- `claim`: A “first Buddhist therapy” priority claim is not supportable from this bounded corpus.
- `claim_type`: `priority_or_first`
- `time_scope`: all relevant Buddhist and non-Buddhist histories would be required; not performed
- `place_scope`: global/transregional comparison required but absent
- `population_scope`: not applicable
- `evidence_label`: Unknown
- `universality`: global
- `anachronism_risk`: high
- `anachronism_note`: “therapy” is undefined and the predecessor/translation survey was not performed
- `status`: Unknown and quarantined; reject the superlative

### `CLM-021028`

- `claim`: A first Korean or Japanese mental-health-treatment priority claim is not supportable from this bounded corpus.
- `claim_type`: `priority_or_first`
- `time_scope`: complete Korean/Japanese predecessor histories would be required; not performed
- `place_scope`: Korea and Japan, kept distinct
- `population_scope`: not applicable
- `evidence_label`: Unknown
- `universality`: regional
- `anachronism_risk`: high
- `anachronism_note`: modern “mental-health treatment” is undefined and neither national corpus was surveyed comprehensively
- `status`: Unknown and quarantined; reject the superlative

### `CLM-021029`

- `claim`: Kim interprets Hyetong's activities as spreading and familiarizing incantatory Buddhist healing.
- `claim_type`: `quotation_or_position`
- `time_scope`: modern interpretation of represented early material
- `place_scope`: Korea / represented Silla-Tang networks
- `population_scope`: Kim's scholarly position, not a measured medieval population
- `evidence_label`: Documented
- `universality`: individual
- `anachronism_risk`: medium
- `anachronism_note`: the modern interpretive wording must remain attributed to Kim
- `status`: outline-safe only as an attributed modern position

### `CLM-021030`

- `claim`: Kim infers that the `新羅法師方` medicine-taking chant may have been used beyond specialist monks.
- `claim_type`: `quotation_or_position`
- `time_scope`: modern interpretation of a pre-984 attributed textual layer
- `place_scope`: Korea/Japan contact reception
- `population_scope`: Kim's inferred users; no historical denominator
- `evidence_label`: Documented
- `universality`: individual
- `anachronism_risk`: medium
- `anachronism_note`: the inference is an attributed scholarly position, not implementation or prevalence evidence
- `status`: outline-safe only with attribution and explicit non-corroboration

## Typed relationship graph

| Relationship ID | Subject | Type | Object | Level | Fit | Dependence group | Independence / job note |
|---|---|---|---|---|---|---|---|
| `REL-021000` | `EVD-021000` | supports | `CLM-021000` | L3 | A | `DEP-021000-SY-genre` | NIKH bibliographic route; same compilation tradition as AKS, not event corroboration |
| `REL-021001` | `EVD-021001` | illustrates | `CLM-021000` | L1 | B | `DEP-021001-Hyetong-text` | Primary compiled unit illustrates earlier setting through later narrative |
| `REL-021002` | `EVD-021003` | supports | `CLM-021001` | L1 | A | `DEP-021001-Hyetong-text` | Direct for what the compilation narrates; not independent event proof |
| `REL-021003` | `EVD-021005` | supports | `CLM-021001` | L1 | A | `DEP-021001-Hyetong-text` | Same narrative chain; direct for represented royal-daughter sequence |
| `REL-021004` | `EVD-021004` | qualifies | `CLM-021001` | L1 | B | `DEP-021001-Hyetong-text` | Bounded recipient/clinical silence qualifies the narrative linkage |
| `REL-021005` | `EVD-021002` | supports | `CLM-021002` | L3 | A | `DEP-021001-Hyetong-text` | Institutional annotation maps the chronology dispute; derivative from same text chain |
| `REL-021006` | `EVD-021001` | originates | `CLM-021002` | L1 | A | `DEP-021001-Hyetong-text` | Originates the teacher wording being tested, not a resolved identification |
| `REL-021007` | `EVD-021005` | supports | `CLM-021003` | L1 | A | `DEP-021001-Hyetong-text` | Direct narrative sequence for royal coercion/pardon/office context |
| `REL-021008` | `EVD-021000` | contextualizes | `CLM-021003` | L3 | C | `DEP-021000-SY-genre` | Later compilation/genre context; independent metadata job, not event proof |
| `REL-021009` | `EVD-021004` | supports | `CLM-021004` | L1 | A | `DEP-021001-Hyetong-text` | Bounded Tang-princess silence |
| `REL-021010` | `EVD-021005` | supports | `CLM-021004` | L1 | B | `DEP-021001-Hyetong-text` | Royal-daughter unit shows the same missing-perspective fields |
| `REL-021011` | `EVD-021003` | qualifies | `CLM-021005` | L1 | C | `DEP-021001-Hyetong-text` | Narrated recovery is not independent efficacy evidence |
| `REL-021012` | `EVD-021006` | illustrates | `CLM-021005` | L2 | C | `DEP-021002-Kim-reception` | Kim's interpretation is not outcome evidence for the early episode |
| `REL-021013` | `EVD-021006` | originates | `CLM-021029` | L2 | A | `DEP-021002-Kim-reception` | Originates Kim's attributed diffusion/familiarization position; no historical corroboration |
| `REL-021014` | `EVD-021007` | contextualizes | `CLM-021006` | L1 | C | `DEP-021003-Ishinpo-scroll3` | Identifies the consulted nineteenth-century witness |
| `REL-021015` | `EVD-021008` | supports | `CLM-021006` | L1 | A | `DEP-021003-Ishinpo-scroll3` | Direct chapter-21 wording from the consulted scan |
| `REL-021016` | `EVD-021009` | supports | `CLM-021006` | L1 | A | `DEP-021003-Ishinpo-scroll3` | Direct chapter-22 taxonomy/prescription wording |
| `REL-021017` | `EVD-021011` | supports | `CLM-021006` | L1 | A | `DEP-021003-Ishinpo-scroll3` | Direct chapter-23 bodily/behavioural framing |
| `REL-021018` | `EVD-021013` | supports | `CLM-021006` | L1 | A | `DEP-021003-Ishinpo-scroll3` | Direct named-source plurality in the selected witness |
| `REL-021019` | `EVD-021021` | supports | `CLM-021007` | L1 | B | `DEP-021003-Ishinpo-scroll3` | Historical assemblages support bounded non-equivalence; no clinical crosswalk |
| `REL-021020` | `EVD-021009` | illustrates | `CLM-021007` | L1 | B | `DEP-021003-Ishinpo-scroll3` | `癲` bundle is heterogeneous within the same witness |
| `REL-021021` | `EVD-021011` | illustrates | `CLM-021007` | L1 | B | `DEP-021003-Ishinpo-scroll3` | `狂` appears within its own historical body-cosmology |
| `REL-021022` | `EVD-021008` | supports | `CLM-021008` | L1 | B | `DEP-021003-Ishinpo-scroll3` | Bodily and spirit-language material share one chapter; interpretive fit, not practice proof |
| `REL-021023` | `EVD-021015` | contextualizes | `CLM-021008` | L2 | B | `DEP-021005-Ishinpo-method` | Poletto's independent method route cautions against the modern binary |
| `REL-021024` | `EVD-021010` | supports | `CLM-021009` | L1 | A | `DEP-021003-Ishinpo-scroll3` | Direct chapter-22 invasive/intimate prescriptions |
| `REL-021025` | `EVD-021012` | supports | `CLM-021009` | L1 | A | `DEP-021003-Ishinpo-scroll3` | Direct chapter-23 force/restraint/pain prescriptions |
| `REL-021026` | `EVD-021014` | supports | `CLM-021010` | L1 | A | `DEP-021003-Ishinpo-scroll3` | Bounded implementation-field absence in selected chapters |
| `REL-021027` | `EVD-021010` | qualifies | `CLM-021010` | L1 | B | `DEP-021003-Ishinpo-scroll3` | Harm is documented as prescription, not delivered act |
| `REL-021028` | `EVD-021012` | qualifies | `CLM-021010` | L1 | B | `DEP-021003-Ishinpo-scroll3` | Same prescription/practice seam |
| `REL-021029` | `EVD-021013` | supports | `CLM-021011` | L1 | B | `DEP-021003-Ishinpo-scroll3` | Continental attributions are visible; national interpretation remains separate |
| `REL-021030` | `EVD-021015` | supports | `CLM-021011` | L2 | B | `DEP-021005-Ishinpo-method` | Poletto's “reworked” framing is attributed, not implementation proof |
| `REL-021031` | `EVD-021007` | contextualizes | `CLM-021011` | L1 | C | `DEP-021003-Ishinpo-scroll3` | Consulted Japanese compilation witness; not proof of uniform transformation |
| `REL-021032` | `EVD-021016` | supports | `CLM-021012` | L1 | A | `DEP-021006-Ishinpo-Silla-citation` | Direct surviving attribution on PDF p. 59 right-hand leaf |
| `REL-021033` | `EVD-021017` | supports | `CLM-021012` | L2 | B | `DEP-021006-Ishinpo-Silla-citation` | Dependent modern collation; cross-check, not independent witness |
| `REL-021034` | `EVD-021017` | qualifies | `CLM-021013` | L2 | C | `DEP-021006-Ishinpo-Silla-citation` | Collator's book inference exceeds the surviving fragment |
| `REL-021035` | `EVD-021018` | originates | `CLM-021030` | L2 | A | `DEP-021002-Kim-reception + DEP-021006-Ishinpo-Silla-citation` | Originates Kim's attributed broad-user inference; no prevalence corroboration |
| `REL-021036` | `EVD-021019` | qualifies | `CLM-021013` | L4 | C | `DEP-021007-popular-Silla-book` | Popular book/use claim repeats the upstream fragment/reception chain |
| `REL-021037` | `EVD-021016` | qualifies | `CLM-021013` | L1 | C | `DEP-021006-Ishinpo-Silla-citation` | Exact title-like attribution does not establish a standalone surviving work |
| `REL-021038` | `EVD-021015` | supports | `CLM-021014` | L2 | B | `DEP-021005-Ishinpo-method` | Poletto's terminology/category caution is the modern comparison route |
| `REL-021039` | `EVD-021013` | contextualizes | `CLM-021014` | L1 | C | `DEP-021003-Ishinpo-scroll3` | Mixed inherited sources complicate a timeless label |
| `REL-021040` | `EVD-021006` | qualifies | `CLM-021015` | L2 | C | `DEP-021002-Kim-reception` | Named broad-therapy interpretation exists but does not establish delivery or scale |
| `REL-021041` | `EVD-021004` | qualifies | `CLM-021015` | L1 | C | `DEP-021001-Hyetong-text` | Missing recipient perspective blocks humane/satisfaction inference, not prevalence alone |
| `REL-021042` | `EVD-021022` | contextualizes | `CLM-021016` | L3 | C | `DEP-021004-Ishinpo-object` | Object-level museum superlative is not a psychiatry priority survey |
| `REL-021043` | `EVD-021019` | illustrates | `CLM-021016` | L4 | C | `DEP-021007-popular-Silla-book` | Derivative book/priority reception does not prove a mental-health first |
| `REL-021044` | `EVD-021020` | supports | `CLM-021017` | L1 | B | `DEP-021001-Hyetong-text` | Tang-princess voice absence is one bounded component, not a cross-lane omnibus |
| `REL-021045` | `EVD-021004` | illustrates | `CLM-021017` | L1 | A | `DEP-021001-Hyetong-text` | Silent royal woman in Korean lane |
| `REL-021046` | `EVD-021014` | illustrates | `CLM-021017` | L1 | A | `DEP-021003-Ishinpo-scroll3` | Generic recipients/no implementation fields in selected Japanese chapters |
| `REL-021047` | `EVD-021000` | supports | `CLM-021018` | L3 | B | `DEP-021000-SY-genre` | Genre/distance requires narrative comparison, not population history |
| `REL-021048` | `EVD-021014` | supports | `CLM-021018` | L1 | B | `DEP-021003-Ishinpo-scroll3` | Text/practice seam blocks generalized patient history |
| `REL-021049` | `EVD-021020` | supports | `CLM-021018` | L1 | B | `DEP-021001-Hyetong-text` | One bounded archive limitation helps structure the outline |
| `REL-021050` | `EVD-021021` | qualifies | `CLM-021018` | L1 | B | `DEP-021003-Ishinpo-scroll3` | Modern-diagnosis story arc prohibited by historical assemblages |
| `REL-021051` | `EVD-021022` | qualifies | `CLM-021018` | L3 | C | `DEP-021004-Ishinpo-object` | Object-level priority wording cannot become an origin story |
| `REL-021052` | `EVD-021023` | supports | `CLM-021000` | L3 | A | `DEP-021000-SY-genre` | AKS metadata route; independent institution but same work/date job |
| `REL-021053` | `EVD-021024` | contextualizes | `CLM-021006` | L3 | C | `DEP-021004-Ishinpo-object` | Nakarai object history; no content collation of selected chapters |
| `REL-021054` | `EVD-021025` | contextualizes | `CLM-021006` | L3 | C | `DEP-021003-Ishinpo-scroll3` | Same-object file/date/rights metadata, not content corroboration |
| `REL-021055` | `EVD-021026` | qualifies | `CLM-021010` | L2 | C | `DEP-021005-Ishinpo-method` | Independent method route; Poletto does not study implementation of these chapters |
| `REL-021056` | `EVD-021027` | contextualizes | `CLM-021012` | L3 | C | `DEP-021006-Ishinpo-Silla-citation` | Same-object file/date/rights metadata, not attribution corroboration |
| `REL-021057` | `EVD-021028` | qualifies | `CLM-021013` | L4 | C | `DEP-021007-popular-Silla-book` | Second reception node repeats the same attribution/scholarship chain |
| `REL-021058` | `EVD-021029` | supports | `CLM-021017` | L1 | B | `DEP-021001-Hyetong-text` | Silla royal-daughter voice absence, same narrative chain |
| `REL-021059` | `EVD-021030` | supports | `CLM-021017` | L1 | B | `DEP-021003-Ishinpo-scroll3` | Scroll-3 generic-recipient/voice absence |
| `REL-021060` | `EVD-021031` | supports | `CLM-021017` | L1 | B | `DEP-021006-Ishinpo-Silla-citation` | Contact-passage user-voice absence |
| `REL-021061` | `EVD-021032` | qualifies | `CLM-021007` | L2 | B | `DEP-021005-Ishinpo-method` | Independent modern-category caution; no validated diagnostic crosswalk |
| `REL-021062` | `EVD-021003` | qualifies | `CLM-021019` | L1 | C | `DEP-021001-Hyetong-text` | One narrated episode supplies no prevalence denominator |
| `REL-021063` | `EVD-021006` | qualifies | `CLM-021019` | L2 | C | `DEP-021002-Kim-reception` | Diffusion interpretation is not scale evidence for the represented period |
| `REL-021064` | `EVD-021004` | supports | `CLM-021020` | L1 | A | `DEP-021001-Hyetong-text` | Tang-princess perspective is absent within the bounded unit |
| `REL-021065` | `EVD-021029` | supports | `CLM-021020` | L1 | A | `DEP-021001-Hyetong-text` | Royal-daughter perspective is absent within the bounded unit |
| `REL-021066` | `EVD-021006` | qualifies | `CLM-021021` | L2 | C | `DEP-021002-Kim-reception` | Modern therapy terminology does not establish a named professional service |
| `REL-021067` | `EVD-021016` | qualifies | `CLM-021022` | L1 | C | `DEP-021006-Ishinpo-Silla-citation` | Attribution records no intermediary or transmission route |
| `REL-021068` | `EVD-021017` | qualifies | `CLM-021022` | L2 | C | `DEP-021006-Ishinpo-Silla-citation` | Dependent collation does not recover the route |
| `REL-021069` | `EVD-021005` | qualifies | `CLM-021023` | L1 | C | `DEP-021001-Hyetong-text` | One authority narrative cannot establish widespread humane care |
| `REL-021070` | `EVD-021004` | qualifies | `CLM-021023` | L1 | C | `DEP-021001-Hyetong-text` | Recipient silence blocks experience inference; no population burden met |
| `REL-021071` | `EVD-021004` | supports | `CLM-021024` | L1 | A | `DEP-021001-Hyetong-text` | Tang-princess evaluation is absent |
| `REL-021072` | `EVD-021029` | supports | `CLM-021024` | L1 | A | `DEP-021001-Hyetong-text` | Royal-daughter evaluation is absent |
| `REL-021073` | `EVD-021006` | qualifies | `CLM-021025` | L2 | C | `DEP-021002-Kim-reception` | Later genealogy does not establish continuous clinical practice |
| `REL-021074` | `EVD-021022` | contextualizes | `CLM-021026` | L3 | C | `DEP-021004-Ishinpo-object` | Museum object superlative is not a psychotherapy survey |
| `REL-021075` | `EVD-021022` | contextualizes | `CLM-021027` | L3 | C | `DEP-021004-Ishinpo-object` | Museum object superlative is not a Buddhist-therapy priority survey |
| `REL-021076` | `EVD-021022` | contextualizes | `CLM-021028` | L3 | C | `DEP-021004-Ishinpo-object` | Museum object designation is not a Korean/Japanese mental-health-treatment survey |
| `REL-021077` | `EVD-021016` | qualifies | `CLM-021030` | L1 | C | `DEP-021006-Ishinpo-Silla-citation` | Prescriptive chant wording has no user denominator; qualifies Kim's inference |

## Disagreements and unresolved questions

### `DIS-021000` — Who is “Wuwei Tripitaka”?

- `question`: Does the Hyetong narrative identify a historically possible teacher, specifically Śubhakarasiṃha?
- `scope`: claimed seventh-century Tang/Silla chronology in one late-thirteenth-century Korean compilation.
- `position_a`: identify the teacher with Śubhakarasiṃha and adjust other chronology.
- `position_b`: treat the association as later authority-enhancing construction; consider other identities.
- `evidence`: `EVD-021001`–`EVD-021002`
- `reason_for_difference`: identity inference versus chronology and source-formation method.
- `area_of_agreement`: the compilation calls the teacher Wuwei Tripitaka; the chronology needs explanation.
- `expert_distribution`: not responsibly established from the full specialist literature opened here.
- `rejected_fringe`: none classified; the packet does not manufacture equal “sides.”
- `resolution`: unresolved identity; chronology conflict must be stated.
- `public_wording`: none approved.
- `reviewed_on_by`: 2026-08-18, R13 packet researcher.

### `DIS-021001` — Does `新羅法師方` name a complete Silla book?

- `question`: What bibliographic entity stands behind the title-like attribution in *Ishinpō*?
- `scope`: one pre-984 attributed layer as witnessed in an 1854–1860 scroll-2 print; Silla/Japan contact.
- `position_a`: Shin and popular reception infer a standalone Unified Silla medical book.
- `position_b`: the surviving evidence establishes only a title-like attribution embedded in *Ishinpō*; work identity, unity, author, and route are unknown.
- `evidence`: `EVD-021016`–`EVD-021019`, `EVD-021028`
- `reason_for_difference`: national-bibliographic inference from a title versus stricter manuscript/work-identity burden.
- `area_of_agreement`: *Ishinpō* displays the string `新羅法師方` and attaches it to the chant.
- `expert_distribution`: not established; a full bibliography/manuscript survey was not executed.
- `rejected_fringe`: professional-use, superiority, and priority claims without new evidence receive no evidentiary weight.
- `resolution`: position B governs until a manuscript/bibliographic chain is opened.
- `public_wording`: “*Ishinpō* attributes this passage to `新羅法師方`”; no stronger noun phrase.
- `reviewed_on_by`: 2026-08-18, R13 packet researcher.

### `DIS-021002` — Imported copy or Japanese creation?

- `question`: How should continental textual dependence and Japanese compilation be described without a modern national false binary?
- `scope`: *Ishinpō* work context and selected scroll-3 chapters, 984 compilation through later manuscripts/print.
- `position_a`: treat *Ishinpō* as Chinese material copied into Japan.
- `position_b`: emphasize Japanese selection/reworking and court setting.
- `evidence`: `EVD-021007`, `EVD-021013`, `EVD-021015`, `EVD-021024`–`EVD-021025`
- `reason_for_difference`: different weighting of source origin, compilation agency, and national categories.
- `area_of_agreement`: continental works are explicitly quoted and Tanba no Yasuyori compiled/arranged the work in Japan.
- `expert_distribution`: not quantified; Poletto supplies the strongest opened specialist framing.
- `rejected_fringe`: pure indigenous invention and passive unchanged copying are both rejected as overstatements.
- `resolution`: false binary. State both continental textual dependence and Japanese compilation/arrangement; do not infer practice from either.
- `public_wording`: none approved pending specialist review.
- `reviewed_on_by`: 2026-08-18, R13 packet researcher.

## Graph gates

- Every retained claim has at least one incoming typed relationship.
- `repeats` relationships never count as corroboration.
- Korean and Japanese claims are not connected by a lineage relationship; the only cross-regional object is the bounded scroll-2 attribution.
- No `USE-021xxx` page-use records exist. Public prose gate remains closed.
