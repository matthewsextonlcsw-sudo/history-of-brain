# R17 — Material and reproduction gate

**Default:** no cultural material enters the cache, evidence graph, translation workflow, or public
draft until both authority and each intended use are resolved. “Publicly available” describes access;
it does not answer cultural authority, privacy, copyright, or ethical reuse.

## Intake screen

Record these fields before opening more than public catalog/governance metadata:

`candidate_id | exact_item_or_collection | holder | creator_or_recorder | date_layers |
language_and_variant | provenance | present_affiliation | disputed_or_shared_affiliation |
material_class | living_or_deceased_person_risk | applicable_law | repository_terms |
copyright | community_authority | authority_mandate | proposed_uses | disclosure_to_authority |
decision | effective_date | review_due | expires_on | withdrawal_route`

If `present_affiliation`, `community_authority`, `authority_mandate`, or `proposed_uses` is unknown,
the candidate is `AUTHORITY_UNRESOLVED` and stays link-only at the public catalog level.

## Default restricted/non-reproduction classes

The classes below are project safety gates, not claims that every community classifies material in
the same way. Local authority can impose additional or stricter rules. Local Contexts documents
community-specific sacred/ceremonial, gendered, seasonal, sensitive, secret/sacred, commercial,
noncommercial, community-only, and outreach conditions
([TK Labels](https://localcontexts.org/labels/traditional-knowledge-labels/)); only the community can
select/customize its Labels.

| material class | initial project status | prohibited pending clearance | minimum authority question | additional gate |
|---|---|---|---|---|
| human remains, burials, graves, or ancestral remains | `RESTRICTED` | view beyond allowed metadata; download; describe anatomy; measure; analyze; image; exhibit; index | which lineal descendants and all potentially affiliated peoples/communities control access and description? | for NAGPRA-defined human remains or cultural items under 43 CFR 10.1(d), the museum, Federal agency, or DHHL duty actor must consult and obtain consent from specified lineal descendants, Indian Tribes, or NHOs before exhibition, access, or research; § 10.1(b) applicability actors are not synonymous with those duty actors; absence of identified parties remains a stop |
| funerary belongings, sacred objects, or objects of cultural patrimony | `RESTRICTED` | open images/details; cache; quote; translate; illustrate; describe restricted function; index | who determines classification and use, and is each affected community represented? | NAGPRA where applicable; repository classification cannot replace community determination |
| sacred, ceremonial, secret, initiation-restricted, gender-restricted, clan/family-restricted, or seasonal knowledge | `RESTRICTED` | access outside authorized people/time; transcription; translation; quotation; summary; illustration; indexing | who is entitled to see, hear, interpret, translate, and decide timing/audience? | customized TK Label or equivalent community protocol only if supplied/approved by community |
| songs, prayers, narratives, ritual instructions, performance, or dance | `RESTRICTED` | play; transcribe; translate; quote; notate; reproduce audio/video; make searchable | who owns/holds performance, recording, language, and cultural permissions, including performers/heirs? | copyright/performer/privacy and community authority are separate |
| recordings, voices, photographs, film, or likenesses | `RESTRICTED` | stream; download; transcribe; voice-clone; translate; make embeddings; illustrate; train/index | did the recorded person, family, and community authorize this specific modern use and audience? | check consent wording, deceased-person rules, copyright, privacy, and platform/model use |
| sensitive sites, burials, sacred places, caves, medicinal/specimen locations, or vulnerable archaeological coordinates | `RESTRICTED` | publish coordinates or enabling detail; map; geotag; add structured data; reveal access route | who controls location disclosure and what granularity is safe? | repository precision must be reduced or withheld if authority requires |
| deceased-person material subject to name/image/voice/knowledge restriction | `RESTRICTED` | name; show; quote; translate; narrate; index | which family, community, cultural, or legal authority governs deceased-person use and mourning periods? | individual copyright/privacy survival and community protocol checked separately |
| inadequately consented, coerced, extracted, stolen, mission-collected, school-collected, carceral, medical, or ethnographic community knowledge | `RESTRICTED` | treat historic possession/publication as consent; republish; translate; aggregate; index | can present authority validate, restrict, contextualize, or refuse reuse, and must material be returned/removed? | provenance review and collector/recorder power analysis required |
| identifying family, health, school, welfare, legal, carceral, or case records | `RESTRICTED` | identify; connect records; infer diagnosis; quote; publish family trees; index | what individual/family/community and legal privacy approvals apply? | privacy/data-protection, archives law, human-subjects review, and harm assessment |
| biocultural/genetic/genomic, specimen, digital sequence, environmental, or biodiversity-linked knowledge/data | `RESTRICTED` | download; analyze; combine; geolocate; infer ancestry; share; index; train | which people/community controls data/specimen use and benefit; does Nagoya/domestic ABS or another agreement apply? | Nagoya Article 7 is considered only for traditional knowledge associated with genetic resources; check country/party/domestic implementation |
| medicinal knowledge, plant use, preparation, collection site, dosage, or healing instruction | `RESTRICTED` | extract recipes; translate instructions; recommend/medicalize; commercialize; geolocate; index | who controls knowledge, who may transmit it, and were commercial, safety, future-use, and benefit terms disclosed? | health/safety, intellectual-property, ABS/biocultural, and community gates |
| community-customized Local Contexts TK/BC Label, label text, or permanent identifier | `DO_NOT_USE` unless supplied for this project | self-assign; customize; copy from another project; alter icon; imply permission | did the community apply/share the Label and approve this publication/display context? | Local Contexts license/usage rules and community approval |
| researcher/institution Local Contexts Notice | `LINK_ONLY` until selected through the current eligible Hub workflow | customize fixed text/icon; generate/apply outside the correct account; present Notice as community approval | is the chosen Disclosure/Engagement Notice appropriate, is a subscribed institution or researcher account authorized to generate/apply it, and has Collections Care engagement already occurred? | Local Contexts FAQ revision 2026-07-24 says Notices can only be generated/applied by subscribed institution/researcher accounts; Disclosure/Engagement Notices may not require community approval, Collections Care Notices require engagement, and no Notice is permission |
| other material with possible Indigenous rights/interests but unresolved affiliation | `AUTHORITY_UNRESOLVED` | full-text/image/audio opening; cache; extraction; translation; public description; indexing | what is the provenance and who are all potentially affiliated communities? | use public catalog/governance metadata only; a Notice may expose unresolved interests if used under Local Contexts rules |

First Archivists Circle recommends consultation and concurrence, special treatment for culturally
sensitive material, and rethinking public access rather than assuming archives' default openness
([Protocols, Introduction and “Culturally Sensitive Materials”](https://www2.nau.edu/libnap-p/protocols.html#Culturally)).
Its 2007 text is a protocol, not a legal permission and not a substitute for current local rules.

## Proposed-use matrix

Authorization is atomic. A `yes` in one column never propagates to another.

| use_id | proposed use | decision that must be explicit | default if omitted |
|---|---|---|---|
| `USE-01` | public catalog-metadata discovery | may the project retain the item's public identifier/title and authority-contact lead? | `LINK_ONLY` |
| `USE-02` | read/view/listen for scoping | which named team members may access what portion, where, and for how long? | `AUTHORITY_UNRESOLVED` |
| `USE-03` | internal extraction/notes | what may be transcribed/described, at what precision, and where stored? | `RESTRICTED` |
| `USE-04` | local cache/download | which files may be stored, encrypted or not, copied, backed up, and deleted/returned when? | `RESTRICTED` |
| `USE-05` | quotation | exact passage/word limit, language, context, attribution, audience, and review? | `RESTRICTED` |
| `USE-06` | translation/transliteration | who selects/reviews translator, dialect/variant, sacred terminology, and disputed meanings? | `RESTRICTED` |
| `USE-07` | image/audio/video reproduction | exact asset, crop/edit, resolution, caption, accessibility text, platform, and audience? | `RESTRICTED` |
| `USE-08` | paraphrase or historical interpretation | what propositions, uncertainty, community framing, and counter-reading can appear? | `RESTRICTED` |
| `USE-09` | public website draft | may material appear on a public, globally reachable, ad/traffic-oriented site? | `RESTRICTED` |
| `USE-10` | search-engine indexing/SEO | may titles, names, terms, snippets, images, and structured data be crawled and cached? | `RESTRICTED` |
| `USE-11` | GEO/AI retrieval | may the content be surfaced, summarized, embedded, or reproduced by generative/retrieval systems? | `RESTRICTED` |
| `USE-12` | commercial context | was traffic generation, business benefit, advertising/affiliate context, and downstream reuse disclosed? | `RESTRICTED` |
| `USE-13` | research data/model use | may text/audio/image/data be mined, embedded, used for evaluation, or used to train/fine-tune a model? | `DO_NOT_USE` |
| `USE-14` | derivative/future use | who approves a new medium, language, edition, dataset, partner, or audience? | new authorization required |
| `USE-15` | attribution, benefit, return, and access | required credit, authorship, copies, access controls, payment/benefit, capacity, return/repatriation? | no authorization |
| `USE-16` | community review and disagreement | who reviews outline/draft/final; how are changes and unresolved disagreements represented? | no public draft |
| `USE-17` | correction, pause, withdrawal, deletion | contact route, response time, public correction/removal, cache purge, archive/takedown limits? | immediate internal hold |

CARE's published exposition says Indigenous nations/communities determine data-governance protocols
and assess benefits, harms, and potential future uses ([Carroll et al. 2020, pp. 6–7](https://doi.org/10.5334/dsj-2020-043)).
TCPS 2 Article 9.11 likewise treats agreements as the place to specify mutual expectations,
benefit/review, and updates in its Canadian human-research scope
([TCPS 2 Chapter 9, Article 9.11](https://ethics.gc.ca/eng/tcps2-eptc2_2022_chapter9-chapitre9.html?wbdisable=true)).

## Decision issuance

Only these statuses may be issued:

| status | project meaning |
|---|---|
| `AUTHORIZED_FOR_SCOPING` | authority has approved a named, narrow metadata/provenance task; no cultural extraction |
| `AUTHORIZED_FOR_INTERNAL_EXTRACTION` | authority has approved named people, materials, fields, storage, and internal uses; not public use |
| `AUTHORIZED_FOR_PUBLIC_DRAFT` | authority has approved the exact draft uses, public/commercial/search/GEO context, review route, and term |
| `LINK_ONLY` | retain only a lawful public link and nonsensitive catalog/governance metadata under stated limits |
| `RESTRICTED` | material/use is identified as controlled; do not access or reproduce beyond the recorded allowance |
| `AUTHORITY_UNRESOLVED` | affiliation, authority, mandate, affected parties, or proposed-use decision is unresolved |
| `DO_NOT_USE` | authority refuses, provenance/consent is unacceptable, law prohibits, harm cannot be mitigated, or project elects permanent exclusion |

An authorization record is invalid unless it includes:

- candidate and use IDs;
- authority's full name, body, role, and mandate source;
- all affected communities/rights holders and representation check;
- exact permitted and prohibited actions;
- disclosure that Couch Commons is public, traffic-oriented, searchable, and GEO/AI-discoverable;
- storage/location/access/deletion terms;
- translation, attribution, benefit/return, review, correction, and disagreement terms;
- effective date, `review_due`, `expires_on`, and who can renew;
- pause/withdrawal contact and required response time; and
- a non-sensitive audit copy whose retention the authority allows.

## Expiry, review, and withdrawal

- `AUTHORITY_UNRESOLVED`, `RESTRICTED`, and `DO_NOT_USE` do not expire into permission.
- Any positive authorization expires on its recorded date or immediately when material, use, team,
  platform, commercial model, language, audience, or custody changes.
- Review must occur before each new research phase and at least every 90 days while a public draft
  is active, unless the authority requires a shorter period.
- A community/authority pause creates an immediate `RESTRICTED` state. No more viewing,
  extraction, translation, drafting, publishing, indexing, or redistribution occurs while reviewed.
- Withdrawal triggers the agreed public correction/removal, local cache purge/return, downstream
  notice, and audit-record handling. Technical inability to erase third-party caches must be disclosed
  before authorization, not after publication.

## Current packet result

No candidate cultural corpus has passed this gate. The ignored R17 cache contains governance
documents only. All future cultural lanes remain `AUTHORITY_UNRESOLVED`; no public draft, search
indexing, GEO/AI use, translation, asset use, or internal cultural extraction is authorized.
