# Evidence Model — History of the Mind and Mental Health

**Pass:** 2 of 12 — Build the evidence model

**Status:** Approved v1 by direction to continue on Aug 18, 2026

**Public destination:** Couch Commons, Understanding shelf

**Authority:** This file applies `../PROJECT-BRAIN.md` and the approved
`../outline/SCOPE-MAP.md`. The project brain wins if these documents conflict.

**Last updated:** Aug 18, 2026

## What this document does

This model defines the chain between a source and a sentence a reader sees. It prevents a
bibliography from looking impressive while failing to show which evidence supports which
claim, where the support appears, what its limits are, or whether anyone opened the source.

The durable unit is not “an article with citations.” It is:

> **Source → evidence record → claim → page use → public citation**

Every arrow must remain inspectable. A source can support many evidence records. An evidence
record can support, qualify, or contradict many claims. A claim can appear on many pages.
Public wording may change without losing the underlying research trail.

This document designs the system. It does not claim that any historical source has already
been found, opened, or verified.

## Non-negotiable rules

1. Never cite a source that has not been opened and checked.
2. Never treat a search result, snippet, AI response, citation list, or another page's
   footnote as evidence by itself.
3. Record the exact page, folio, timestamp, table, figure, object number, or passage supporting
   a claim whenever the source permits it.
4. Separate what a source says from what the project concludes.
5. Separate direct testimony from testimony reported by someone else.
6. Separate a contemporary source from later historical interpretation.
7. Preserve disagreement, uncertainty, translation choices, archival silence, and source bias.
8. Use the strongest source appropriate to the claim; “primary” does not automatically mean
   accurate, representative, ethical, or sufficient.
9. Do not count copied citation chains as independent corroboration.
10. A link is access, not proof. Record what was checked and when.
11. No factual or interpretive claim becomes publishable because it sounds plausible.
12. No citation record becomes a public claim without human editorial approval.

## The seven record types

### 1. Source

A distinct work, object, dataset, recording, archival item, webpage, or edition that a
researcher actually consults.

One book is one source. A translated edition is a separate source record linked to the
original. An archival folder may be a source when items cannot be reliably separated; use
item-level records whenever possible. A webpage that changes materially over time may require
dated snapshots as separate versions.

### 2. Evidence

The exact portion or feature of a source used in reasoning: a passage, image detail, table,
measurement, artifact feature, testimony segment, finding, or absence in a defined archive.

Evidence records preserve what the source contains before the project paraphrases it. They
also record context, limitations, translation, speaker position, and what the evidence cannot
establish.

### 3. Claim

A precise proposition the project may assert, qualify, compare, or reject. Claims should be
small enough to verify. A paragraph containing a date, a causal explanation, a prevalence
estimate, and an interpretation contains multiple claims.

### 4. Relationship

A typed link between evidence and claim:

- **supports** — evidence directly strengthens the claim;
- **qualifies** — evidence narrows, conditions, or complicates the claim;
- **contradicts** — evidence conflicts with the claim or another source;
- **contextualizes** — evidence explains setting without proving the central proposition;
- **illustrates** — evidence gives an example but cannot establish prevalence or universality;
- **originates** — the source is the origin of a quotation, category, argument, or recorded act;
- **repeats** — the source repeats a claim without independent support.

“Repeats” never counts as corroboration unless the later source adds independent evidence.

### 5. Page use

The exact wording, visual, table, caption, or interactive element in which a claim appears.
This record connects research to a public page, records the citation surface used, and allows
a corrected claim to be found everywhere it appears.

### 6. Disagreement

A structured record for credible competing interpretations. It identifies the question,
positions, evidence behind each, reasons for disagreement, degree of consensus when known,
and the wording the project will use.

### 7. Asset

An image, audio clip, video, map, diagram, document facsimile, quotation display, or other
non-body-text material. It carries provenance, rights, ethical review, caption, alt text,
crop/edit history, and its connection to evidence and claims.

## Stable identifiers

Use readable, immutable identifiers:

| Record | Pattern | Example |
|---|---|---|
| Source | `SRC-000001` | `SRC-000184` |
| Evidence | `EVD-000001` | `EVD-000392` |
| Claim | `CLM-000001` | `CLM-000075` |
| Relationship | `REL-000001` | `REL-000811` |
| Page use | `USE-000001` | `USE-000129` |
| Disagreement | `DIS-000001` | `DIS-000014` |
| Asset | `AST-000001` | `AST-000053` |

Identifiers never encode a date, geography, topic, author, confidence, or status. Those facts
change. Once assigned, an identifier is not recycled, even when a record is withdrawn.

## Source record

Every source record must contain:

| Field | Requirement |
|---|---|
| `source_id` | Required immutable identifier. |
| `source_type` | Required controlled value from the source-type table below. |
| `subtype` | More specific description: diary, monograph, court file, dataset, oral history, etc. |
| `title` | Title as published or a supplied archival description in brackets. |
| `creator` | All relevant authors, speakers, artists, organizations, or creators. |
| `creator_role` | Author, editor, translator, interviewer, witness, institution, artist, etc. |
| `date_created` | Original creation date or range; preserve uncertainty. |
| `date_published` | Publication or release date when distinct. |
| `edition_or_version` | Edition, revision, web snapshot, dataset release, or object state. |
| `container` | Journal, collection, archive, book, website, series, or repository. |
| `publisher_or_holder` | Publisher, archive, museum, government, or rights holder. |
| `language` | Language of the consulted source. |
| `original_language` | Required when consulting a translation. |
| `translator` | Translator or translation authority when applicable. |
| `identifier` | DOI, ISBN, PMID, archival call number, catalog ID, stable handle, or accession number. |
| `url` | Consulted URL, if any. Prefer a stable landing page to a temporary download URL. |
| `archive_url` | Preserved snapshot when lawful, ethical, and technically possible. |
| `accessed_on` | Absolute date the consulted version was opened. |
| `full_text_location` | Local or institutional access note; never publish protected credentials or paths. |
| `geographic_scope` | Places the source directly concerns. |
| `time_scope` | Period the source directly concerns. |
| `people_or_population` | People represented, studied, described, or omitted. |
| `provenance` | How the item was created, preserved, obtained, and described. |
| `rights_status` | Public domain, licensed, permission required, restricted, unknown, or link-only. |
| `cultural_protocol` | Community authority, access restriction, sacred/sensitive status, or attribution rule. |
| `source_position` | Relationship of creator to the people or events described. |
| `limitations` | Biases, missing context, selection effects, methodological limits, or known errors. |
| `independence_group` | Shared origin or copied chain used to avoid false corroboration. |
| `opened_by` | Researcher who directly consulted the source. |
| `opened_on` | Absolute verification date. |
| `verification_status` | `lead`, `obtained`, `opened`, `extracted`, `verified`, `restricted`, or `rejected`. |
| `rejection_reason` | Required when rejected. |

### Source types

Source type describes function, not automatic quality:

| Controlled value | Includes | Primary use |
|---|---|---|
| `primary_textual` | Letters, diaries, records, newspapers, manuals, laws, case files, original papers | What a person or institution recorded at the time |
| `primary_material` | Objects, buildings, remains, instruments, art, photographs, physical traces | Material evidence and visual culture |
| `primary_oral` | Oral histories, testimony, interviews, recorded traditions | Direct voice with context of collection and transmission |
| `primary_quantitative` | Datasets, registers, surveys, censuses, clinical or administrative counts | Defined numerical claims with method and population |
| `scholarly_synthesis` | Peer-reviewed articles, academic monographs, critical editions, systematic reviews | Interpretation, context, historiography, and current evidence |
| `institutional_reference` | Archives, museums, libraries, universities, governments, professional bodies | Catalog facts, official records, standards, and stable context |
| `investigative_journalism` | Original reporting with named evidence and editorial accountability | Recent events, investigation, interviews, and public reception |
| `community_knowledge` | Community-controlled histories, knowledge-holder accounts, local archives | Knowledge requiring provenance, relationship, and protocol |
| `popular_secondary` | Documentaries, trade books, magazines, educational media | Orientation and public reception; verify important claims elsewhere |
| `discovery_lead` | Search results, unsourced pages, encyclopedias, AI output, citation lists | Leads only; never final evidence by itself |

Do not rank all source types in one ladder. A diary may be the strongest evidence for what its
writer said and weak evidence for how common that view was. A modern review may be strongest
for current scientific consensus and unable to recover an undocumented patient's experience.

## Evidence record

Every evidence record must contain:

| Field | Requirement |
|---|---|
| `evidence_id` | Required immutable identifier. |
| `source_id` | Required link to the consulted source. |
| `locator` | Page, folio, timestamp, table, figure, object number, archive box/folder, or query. |
| `evidence_form` | Quotation, paraphrasable passage, measurement, image detail, object feature, absence, etc. |
| `verbatim_or_description` | Exact text or disciplined description; use the minimum necessary excerpt. |
| `translation` | Consulted translation plus translator, or project translation clearly marked. |
| `original_text` | Preserve when licensing, expertise, and storage rules allow. |
| `context_before_after` | Context needed to avoid quote mining or visual misreading. |
| `speaker_or_subject` | Who is speaking, represented, measured, or observed. |
| `collector_or_recorder` | Who elicited, selected, recorded, translated, or preserved it. |
| `method` | How the evidence was produced or selected. |
| `directness` | Direct, reported, reconstructed, inferred, or unknown. |
| `representativeness` | Individual example, defined sample, institution, community, region, or unknown. |
| `limitations` | What this evidence cannot prove. |
| `sensitivity` | Public, sensitive, restricted, culturally controlled, private, or unknown. |
| `researcher_note` | Interpretation and follow-up questions, clearly separated from source content. |
| `extracted_by` | Researcher. |
| `extracted_on` | Absolute date. |
| `verification_status` | Draft extraction, checked against source, second-checked, or rejected. |

### Quotation discipline

- Preserve spelling, punctuation, omissions, and editorial insertions accurately.
- Mark ellipses and brackets; never splice separate passages into one apparent quotation.
- Store only the minimum copyrighted text required for verification and analysis.
- A translated quotation must identify the translator or state that it is a project translation.
- A memorable sentence is not automatically representative of a person, institution, culture,
  or period.
- Public quotation length must respect rights, context, dignity, and reader need.

## Claim record

Every claim record must contain:

| Field | Requirement |
|---|---|
| `claim_id` | Required immutable identifier. |
| `claim_text` | One precise proposition, written independently of article prose. |
| `claim_type` | Controlled value from the burden table below. |
| `time_scope` | Date, range, period, or `not_applicable`. |
| `geographic_scope` | Place, network, institution, population, or `not_applicable`. |
| `population_scope` | Who the claim concerns and who it does not. |
| `universality` | Individual, local, regional, transregional, global, or unknown. |
| `evidence_label` | Documented, strongly supported, plausible, disputed, or unknown. |
| `current_evidence_note` | Required when comparing historical belief with current knowledge. |
| `anachronism_risk` | None, low, medium, high, with reason. |
| `sensitivity` | Standard, clinical, identity, trauma, self-harm, violence, private-person, sacred, etc. |
| `disagreement_id` | Link when credible dispute exists. |
| `wording_limits` | Terms, causal language, generalizations, or analogies the evidence does not permit. |
| `created_by` | Researcher or writer. |
| `created_on` | Absolute date. |
| `review_status` | Proposed, evidence-linked, source-verified, wording-verified, approved, withdrawn. |
| `withdrawal_reason` | Required when withdrawn; identifier remains reserved. |

### Claim types and evidence burdens

| Claim type | Examples | Minimum burden before publication |
|---|---|---|
| `existence_or_event` | A text, institution, law, treatment, or event existed | Appropriate primary or authoritative catalog evidence plus reliable context |
| `date_or_sequence` | Something occurred before, after, or during a period | Dated primary evidence or strong chronology; record date disputes |
| `quotation_or_position` | A person or institution said or argued something | Original source and exact locator; quotation context checked |
| `individual_experience` | A person described fear, relief, coercion, pain, hope, etc. | Direct testimony when available; otherwise label reported or inferred |
| `prevalence_or_scale` | A practice or belief was common, rare, increasing, or widespread | Defined population and method; examples alone are insufficient |
| `causal` | A policy, treatment, condition, or event caused an outcome | Evidence designed or argued for causality plus credible limitations and alternatives |
| `interpretive` | A practice expressed a belief or served a social function | Strong scholarly reasoning and primary evidence; competing readings preserved |
| `comparative` | Two regions, periods, or systems differed or resembled each other | Commensurable evidence and terms; avoid comparison by unequal archive survival |
| `priority_or_first` | First discovery, first diagnosis, invention, or origin | Broad predecessor and translation search; use cautious wording when incomplete |
| `continuity_or_change` | An idea persisted, disappeared, returned, or transformed | Evidence across the relevant interval; absence in one archive is not disappearance |
| `consensus_or_current_science` | Current evidence supports, rejects, or qualifies a historical claim | Recent high-quality synthesis or authoritative review appropriate to the question |
| `broad_cultural` | A society, culture, profession, or era believed or practiced something | Multiple independent sources, internal variation, and tightly bounded place/time wording |
| `archival_silence` | A voice or practice is absent from a defined record | Named archive/corpus and search boundary; never convert silence into inner experience |

“Minimum burden” is a floor, not a formula. Sensitive, causal, universal, priority, and
identity-related claims usually require more than one independent evidentiary route.

## Evidence labels

Labels describe the state of a claim, not the prestige of a source:

| Label | Use when | Public language |
|---|---|---|
| **Documented** | Appropriate direct evidence establishes the bounded proposition | State directly while preserving scope |
| **Strongly supported** | Multiple strong, sufficiently independent sources or a strong scholarly consensus support it | “Evidence indicates,” “historians broadly agree,” or direct wording when scope is clear |
| **Plausible** | Evidence permits the interpretation but does not establish it | “May,” “could,” “one interpretation is,” with the missing proof named |
| **Disputed** | Credible experts materially disagree | Name the question, serious positions, evidence, and uncertainty |
| **Unknown** | Available evidence cannot responsibly answer | Say what is unknown and why; do not fill the gap narratively |

Labels can move in either direction as research changes. Every change requires a dated note.

## Independence and corroboration

Three webpages repeating one unsourced statement are one weak chain, not three sources.

For each apparent corroboration, determine:

1. Did the sources observe, collect, or analyze evidence independently?
2. Do they cite the same earlier work, archive, press release, or anecdote?
3. Are authors, institutions, datasets, translations, or editorial processes shared?
4. Does the later source add evidence or merely repeat language?
5. Could apparent agreement result from the same archival bias or exclusion?

Assign an `independence_group` when sources share an origin. A claim cannot become “strongly
supported” by counting multiple members of one group.

## Disagreement record

Every disagreement record contains:

- `disagreement_id`;
- the exact question under dispute;
- bounded time, place, population, and terminology;
- each credible position stated in its strongest fair form;
- evidence and source relationships for each position;
- reasons the sources differ: evidence, method, definition, translation, theory, politics,
  archive, chronology, or values;
- areas of agreement;
- current distribution of expert opinion when responsibly knowable;
- rejected fringe or disproven positions and why they do not receive equal weight;
- approved public wording;
- review date and reviewer.

“Both sides” means serious evidence-backed interpretations. It does not require equal space,
equal certainty, or equal placement.

## Special evidence protocols

### Prehistory and archaeology

- Separate physical observation from behavioral inference and belief inference.
- Record dating method, range, archaeological context, preservation, and alternative readings.
- Trepanation, burial, injury, care, or unusual treatment of remains cannot by itself establish
  a diagnosis, motive, ritual meaning, or subjective experience.
- Use “may,” “suggests,” and “cannot tell us” precisely, not as decorative caveats.

### Translation and cross-cultural evidence

- Record original term, script or transliteration when useful, translator, edition, and date.
- Do not assume an apparent English equivalent carries the same category or boundaries.
- Compare multiple translations when a claim turns on a word.
- Identify colonial, missionary, medical, administrative, or scholarly mediation.
- Do not turn one community, text, healer, or informant into a whole culture.

### Patient and survivor testimony

- Prefer direct accounts and preserve the conditions under which testimony was produced.
- Record whether speech was voluntary, prompted, translated, edited, coerced, anonymized, or
  preserved by an institution with power over the speaker.
- An account establishes that person's report, not automatically prevalence or medical cause.
- Do not require institutional confirmation for a person to have reported an experience.
- Do not expose private or identifying details merely because an archive permits access.

### Institutional and professional records

- Treat records as evidence of what institutions recorded and did, not transparent access to
  patient experience or social reality.
- Record administrative purpose, incentives, missing populations, euphemisms, and classification
  changes.
- A diagnostic count may measure rules, access, funding, or recordkeeping as much as prevalence.

### Indigenous and community knowledge

- Record the specific people, place, knowledge holder, repository, and access protocol.
- Follow community attribution, restriction, sacred-material, and reuse requirements.
- Public availability does not erase collective authority or ethical limits.
- Do not extract a practice from living relationships and present it as timeless folklore.
- Seek community-authored or community-governed sources when available.

### Quantitative claims

- Preserve numerator, denominator, population, geography, dates, measure, sampling, missingness,
  uncertainty, and changes in definitions.
- Do not compare counts across periods or places without testing whether categories and data
  systems are commensurable.
- Avoid false precision when historical records are estimates.
- Charts inherit the same claim and citation requirements as prose.

### Current science and clinical comparisons

- Use recent synthesis appropriate to the question, not a single attention-getting study.
- Distinguish mechanistic evidence, association, clinical outcome, expert consensus, and policy.
- State population, outcome, date, limitations, and uncertainty.
- Do not turn a “what we know now” section into diagnosis or treatment advice.
- Time-sensitive claims require a recheck date.

### Historical diagnosis

- Describe the person's documented words, behavior, context, and period categories.
- Do not assign a modern diagnosis to a historical person as a settled fact.
- If scholars debate a retrospective diagnosis, make the debate—not the diagnosis—the claim.
- Never use diagnostic speculation as a headline hook.

### Harm, coercion, and sensitive material

- Separate intended purpose, claimed benefit, observed outcome, patient experience, coercion,
  consent, and later assessment.
- Avoid shock framing, dehumanizing reproduction, and images included only for attention.
- Preserve moral clarity without inventing emotion or flattening historical context.
- Record safety, dignity, privacy, and cultural concerns even when copyright permits use.

### Living people and recent records

- Use heightened privacy and reputational review.
- Prefer public, on-record, purpose-relevant material.
- Do not publish sensitive health information merely because it is technically accessible.
- Allegations require reliable attribution, status, response, and current verification.
- Corrected, removed, or contested web content must remain visibly dated in the research record.

## Source workflow

### Stage 1 — Discover

Record the lead, discovery route, likely relevance, and original source to pursue. A lead is
not eligible for citation.

### Stage 2 — Obtain

Secure lawful, ethical access to the complete relevant source or a reliable edition. Record
access limits, version, language, and repository.

### Stage 3 — Open

The named researcher directly consults the source and records `opened_by` and `opened_on`.
Metadata copied from another citation does not satisfy this stage.

### Stage 4 — Extract

Create evidence records with exact locators, necessary context, limitations, translation,
directness, and sensitivity.

### Stage 5 — Form claims

Write small, bounded propositions. Assign claim type, time, place, population, universality,
anachronism risk, and preliminary evidence label.

### Stage 6 — Link and challenge

Connect evidence through typed relationships. Seek qualification, contradiction, source
dependence, missing voices, and alternative explanations—not only confirmation.

### Stage 7 — Verify

Check evidence against the source again, verify quotation and locator, test wording limits,
and review sensitive or high-burden claims. A different reviewer should second-check pivotal,
disputed, causal, priority, broad-cultural, and current-clinical claims when practical.

### Stage 8 — Use

Create page-use records for exact public wording, tables, captions, visuals, and analogies.
Choose the appropriate body link, end citation, dated badge, or claim card.

### Stage 9 — Approve

Pass citation, context, empathy, global-scope, readability, and editorial gates. Approval
belongs to exact wording, not a topic in general.

### Stage 10 — Maintain

Recheck time-sensitive sources, repair links, propagate corrections to every use, preserve
withdrawal history, and record why wording changed.

## Citation output for Couch Commons

Every public page uses two layers:

### Body layer

- Link descriptive words to the best stable source or source landing page.
- Place the link immediately after or within the supported statement.
- Do not attach one citation to a paragraph containing several unrelated claims.
- Use a dated badge when the check date is part of the evidence.
- Use no more than two pulled-out claim cards per article; reserve them for claims the page
  genuinely rests on.

### End-citation layer

List every cited source used on the page. Each entry should contain, as applicable:

1. Creator or responsible institution.
2. Title.
3. Editor or translator.
4. Container, publisher, archive, or repository.
5. Edition or version.
6. Publication or creation date.
7. Exact pages, folios, timestamps, table, figure, or archival identifier used.
8. DOI, stable handle, catalog record, or stable URL.
9. Access date for changeable online material.
10. Archived version when appropriate and lawful.

Use one consistent house presentation generated from structured records. Do not hand-format
the same source differently on multiple pages.

### Public evidence language

The page should tell readers how we know when it materially improves understanding:

- “A surviving letter records…”
- “The hospital register counts…, but it does not record…”
- “Historians disagree because…”
- “The physical evidence shows…; it cannot tell us…”
- “This translation renders the term as…, although…”
- “No direct patient account is known from this archive.”

These are not ritual disclaimers. Use them to expose the actual reasoning.

## Page-use record

Every public use contains:

| Field | Requirement |
|---|---|
| `use_id` | Immutable identifier. |
| `page_id` | Stable internal page identifier, not only a mutable URL slug. |
| `claim_id` | Claim being expressed. |
| `public_wording` | Exact approved sentence, caption, label, chart note, or script line. |
| `use_type` | Body, heading, summary, metadata, FAQ, caption, chart, timeline, video, or interactive. |
| `citation_surface` | Body link, end citation, dated badge, claim card, or combined. |
| `source_ids_shown` | Sources visible to the public for this use. |
| `analogy` | Analogy text plus explicit note that it is explanatory, if applicable. |
| `approved_by` | Editor. |
| `approved_on` | Absolute date. |
| `implemented_status` | Draft, local, published, or verified live. |
| `last_checked_on` | Recheck date for links and time-sensitive evidence. |

## Asset record

Every asset contains:

- `asset_id` and descriptive title;
- creator, date, source, repository, and catalog/accession identifier;
- source and evidence links;
- original file or stable landing page;
- rights status, license, credit line, and allowed modifications;
- cultural protocol and community authority when relevant;
- people depicted, identifiability, consent information when known, and sensitivity;
- ethical decision: approved, restricted, contextual-use-only, or rejected;
- rejection or restriction reason;
- edit history including crop, color, labels, restoration, or compositing;
- factual caption with evidence links;
- alt text describing what matters for understanding;
- page uses and approval dates.

Legal availability never substitutes for ethical approval.

## Corrections and versioning

- Never overwrite a verified claim without a dated change record.
- Withdrawn claims retain their identifiers and evidence history.
- A correction record states what changed, why, who approved it, and every public use affected.
- Fix all known uses of a claim together or mark the inconsistency as an incident.
- Archived sources preserve what was checked; they do not justify keeping a claim known to be
  wrong.
- Public correction notes are required when the error materially affected reader understanding,
  a person's reputation, a sensitive history, or the page's central conclusion.
- Silent fixes are acceptable for spelling, formatting, or link repair that does not change
  meaning; still retain normal version history.

## Minimum publishability gate

A page cannot move from **Drafted** to **Verified** until:

1. Every factual, quantitative, quoted, causal, comparative, priority, broad-cultural, and
   current-science claim has at least one linked evidence record appropriate to its burden.
2. Every source shown publicly was opened and its metadata and locator checked.
3. Source independence was assessed for apparent corroboration.
4. Credible disagreement and meaningful uncertainty are visible in the wording.
5. Translations identify the edition or translator and preserve material ambiguity.
6. Direct testimony, institutional description, and project inference remain distinguishable.
7. Geographic, temporal, and population scope match the evidence.
8. High-risk claims received a second check when practical or carry an explicit review gap.
9. Every image, quotation display, chart, audio clip, and video has provenance, rights, and
   ethical review.
10. Body links and end citations resolve to the intended source or stable record.
11. The page states what cannot be known when the gap matters.
12. Matthew approves the exact text after all other reviews pass.

## Data implementation direction

The pilot should test these records before the application schema changes. During research:

- store canonical structured records in version-controlled, human-readable data;
- keep narrative source notes in Markdown linked by stable identifiers;
- validate required fields and identifier relationships automatically;
- generate end citations and review tables from records rather than retyping them;
- keep copyrighted full text, restricted archives, private data, and credentials outside the
  public repository and reference them only through safe access notes;
- export only public-safe fields into Couch Commons;
- design corrections so a claim can locate every page use.

The exact storage format—JSONL, YAML, SQLite, or a combination—remains open until the pilot
shows volume, collaboration, query, and publication needs. Do not lock the application to a
schema based only on this planning document.

## Evidence-model acceptance gate

Pass 2 is complete when Matthew agrees that:

1. The seven record types preserve the full path from source to public wording.
2. Source and evidence records capture provenance, location, context, limitations, and access.
3. Claim types impose stronger burdens on causal, priority, broad-cultural, quantitative,
   sensitive, and current-science claims.
4. Direct testimony, institutional description, scholarly interpretation, and project inference
   cannot be silently merged.
5. The model can represent credible disagreement without false balance.
6. Translation, Indigenous and community knowledge, prehistoric evidence, archival silence,
   sensitive material, and living people have adequate special protocols.
7. Couch Commons can display readable body links and end citations without losing the
   claim-level research trail.
8. Corrections can find and repair every use of a claim.
9. The pilot—not this document alone—will decide the final storage and application schema.

**Result:** Approved v1. Passes 3–10 used this model to create the first source-backed,
Mapped master outline. Page-level claim extraction and verification have not begun.
