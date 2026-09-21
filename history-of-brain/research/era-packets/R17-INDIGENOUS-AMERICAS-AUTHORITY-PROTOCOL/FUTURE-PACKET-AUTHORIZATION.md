# R17 — Future packet authorization

**Gate result:** no Indigenous Americas cultural/history packet is authorized. Governance-only
authority discovery may continue without opening cultural material. Every substantive lane is
`AUTHORITY_UNRESOLVED` and **HOLD**.

## Authorization register

`review_due` is a mandatory recheck, not an automatic promotion. An unresolved status never expires
into permission.

| lane | exact proposed corpus | allowed action now | status | GO/HOLD | review_due | expires_on | withdrawal/pause trigger | decision_id |
|---|---|---|---|---|---|---|---|---|
| R17 governance maintenance | public governance frameworks only; no cultural material | verify versions, legal status, authority-discovery contacts, and this gate | `AUTHORIZED_FOR_SCOPING` | **GO — protocol only** | before any new framework use and 2026-11-19 | 2026-11-19 unless coordinator renews; cultural authority never implied | any framework/authority requests pause; scope drifts into cultural content | `CLM-029100` |
| U.S. Tribal Nations | none identified | read public governance/contact metadata only; do not select a Nation to fill coverage | `AUTHORITY_UNRESOLVED` | **HOLD** | before any source search and 2026-11-19 | no positive authorization exists; status persists until replaced | affiliation/authority dispute, restricted material, or Nation pause | `CLM-029116` |
| Alaska Native communities | none identified | read public governance/contact metadata only | `AUTHORITY_UNRESOLVED` | **HOLD** | before any source search and 2026-11-19 | same | same; regional/health body outside remit | `CLM-029116` |
| Native Hawaiian organizations/communities | none identified | read public governance/contact metadata only | `AUTHORITY_UNRESOLVED` | **HOLD** | before any source search and 2026-11-19 | same | shared/disputed affiliation; NHO list treated as permission | `CLM-029116` |
| First Nations | none identified | verify FNIGC/TCPS framework scope only; no community material | `AUTHORITY_UNRESOLVED` | **HOLD** | before any source search and 2026-11-19 | same | OCAP® treated as generic or local approval absent | `CLM-029116` |
| Inuit regions/communities | none identified | verify NISR/TCPS framework scope and possible mandated authority routes only; no community material | `AUTHORITY_UNRESOLVED` | **HOLD** | before any source search and 2026-11-19 | same | exact corpus/affected parties absent; representational or appointed body's mandate unverified; NISR document treated as permission | `CLM-029116` |
| Métis governments/communities | none identified | verify TCPS and prospective authority-discovery method only | `AUTHORITY_UNRESOLVED` | **HOLD** | before any source search and 2026-11-19 | same | OCAP® applied; exact Métis government/community absent | `CLM-029116` |
| Mexico, future lane | none identified | verify national/treaty framework only after a corpus is proposed | `AUTHORITY_UNRESOLVED` | **HOLD** | before any source search and 2026-11-19 | same | historic ethnonym or national archive substituted for present authority | `CLM-029116` |
| Central America, future lane | no country, corpus, people, or community identified | no cultural search; governance path only after corpus definition | `AUTHORITY_UNRESOLVED` | **HOLD** | before any source search and 2026-11-19 | same | regional label or treaty treated as permission | `CLM-029116` |
| Andes, future lane | no country/site/corpus/people/community identified | no cultural search; governance path only after corpus definition | `AUTHORITY_UNRESOLVED` | **HOLD** | before any source search and 2026-11-19 | same | archaeology/repository substituted for community authority | `CLM-029116` |
| Amazonia, future lane | no country/river/territory/corpus/people/community identified | no cultural search; cross-border authority map only after corpus definition | `AUTHORITY_UNRESOLVED` | **HOLD** | before any source search and 2026-11-19 | same | any affected cross-border community omitted | `CLM-029116` |
| Southern Cone, future lane | no country/corpus/people/community identified | no cultural search; governance path only after corpus definition | `AUTHORITY_UNRESOLVED` | **HOLD** | before any source search and 2026-11-19 | same | current border or historic label used as authority shortcut | `CLM-029116` |
| Caribbean, future lane | no island/territory/corpus/people/community identified | no cultural search; governance path only after corpus definition | `AUTHORITY_UNRESOLVED` | **HOLD** | before any source search and 2026-11-19 | same | colonial archive or asserted absence/extinction used as permission | `CLM-029116` |
| Nahua central Mexico, 1519–1606 proposal | period/region only; no exact manuscript/object/testimony, place, language variant, holder, or present affiliated community set | preserve proposal metadata; no cultural source opening, extraction, translation, quotation, or public drafting | `AUTHORITY_UNRESOLVED` | **HOLD** | only after exact corpus and present-day affiliation are defined; administrative recheck 2026-11-19 | no positive authorization exists; status persists until replaced | archive/scholar/national body treated as authority; any community unresolved or pauses | `CLM-029117` |

## Conditions for any future transition

| requested transition | minimum evidence required | actions still not authorized |
|---|---|---|
| `AUTHORITY_UNRESOLVED` → `AUTHORIZED_FOR_SCOPING` | exact corpus/provenance; all potential affiliations; actual authority body and mandate; written scope approval for metadata/provenance work; review/expiry/withdrawal | cultural extraction, quotation, translation, asset reuse, public draft, indexing |
| `AUTHORIZED_FOR_SCOPING` → `AUTHORIZED_FOR_INTERNAL_EXTRACTION` | item-level access decision; named team; exact fields; storage/access/deletion; sensitive-material screen; translation/recorder method; collective/individual approvals; benefit/return; expiry | public prose, public assets, search/GEO/AI use, commercial display |
| `AUTHORIZED_FOR_INTERNAL_EXTRACTION` → `AUTHORIZED_FOR_PUBLIC_DRAFT` | exact passages/assets/claims; community review; disagreement process; language/translation approval; attribution/benefit; public global/commercial/SEO/GEO/AI disclosure; correction/withdrawal route | any use not specifically listed; model training; future editions/partners unless included |
| any positive status → `RESTRICTED` | pause, dispute, changed scope, expired approval, new affected party, restricted-class discovery, or uncertain consent | all further access/use except minimum allowed audit/return action |
| any status → `DO_NOT_USE` | authority refusal; illegal or unethical provenance/use; unmitigable harm; project permanent exclusion | all cultural use; retain only an allowed non-sensitive decision audit |

## Canonical decision/claim records — proposition and scope

These are governance-framework facts and project authorization decisions only.

| claim_id | claim_text | claim_type | time_scope | geographic_scope | population_scope | universality |
|---|---|---|---|---|---|---|
| `CLM-029100` | R17 authorizes only governance/protocol source verification and authority discovery; it does not authorize cultural/historical research or public prose. | `quotation_or_position` | 2026-08-19 until replaced | global | future researchers and lanes | local |
| `CLM-029101` | CARE is a cross-cutting data-governance framework requiring authority, benefit, responsibility, and ethics; it does not designate the decision maker for a particular corpus. | `quotation_or_position` | 2018–present | global framework | data stewards and Indigenous rights holders | global |
| `CLM-029102` | OCAP® is specifically a First Nations framework and must not be treated as universal Indigenous authority or automatically applied to Inuit, Métis, or other peoples. | `comparative` | 1990s–present | Canada/First Nations scope | First Nations information governance | regional |
| `CLM-029103` | NISR identifies Inuit representational organizations or appointed institutions as FPIC and governance routes; the strategy document is not an authorization record, but a relevant national, regional, sub-regional, licensing, community, family, or appointed body may be an actual authority where its verified mandate covers the exact corpus and proposed use. | `quotation_or_position` | 2018 strategy; actions scoped to 2018–2022 | Inuit Nunangat | Inuit representational organizations, appointed institutions, affected communities/families, and research-governance stakeholders | regional |
| `CLM-029104` | TCPS 2 Chapter 9 distinguishes institutional ethics review, relevant community engagement/review, research agreements, and individual consent in its Canadian scope. | `comparative` | 2022–present | Canada | First Nations, Inuit, Métis human-research contexts | regional |
| `CLM-029105` | Local Contexts community Labels and researcher/institution Notices have different issuers, approval rules, and Hub-account workflows: Labels require a confirmed community account and authorized community representative, while Notices require a subscribed institution/researcher account; this packet applies neither and may not self-assign or customize a community's TK/BC Label. | `comparative` | FAQ revision 2026-07-24, current at 2026-08-19 access | international | Local Contexts users/communities | global |
| `CLM-029106` | Copyright/licensing, repository access, legal/ethics compliance, and community authority are separate gates; passing one does not pass the others. | `interpretive` | project rule | all jurisdictions | all proposed corpora | global |
| `CLM-029107` | A repository or contact directory may establish custody, access terms, or a lead, but cannot by itself establish cultural affiliation, community mandate, or permission. | `interpretive` | project rule | all jurisdictions | repositories, communities, researchers | global |
| `CLM-029108` | Under 43 CFR 10.1, § 10.1(b) applicability actors are broader than the museums, Federal agencies, and DHHL bound by §§ 10.1(c)–(d); those duty actors must obtain consent from specified lineal descendants, Indian Tribes, or NHOs before exhibition, access, or research on defined human remains or cultural items, and the rule cannot be generalized into universal U.S. Indigenous research permission. | `quotation_or_position` | current regulation | United States statutory scope | applicability actors; museum/Federal agency/DHHL duty actors; lineal-descendant/Indian Tribe/NHO consent parties; defined human remains/cultural items | regional |
| `CLM-029109` | For NAGPRA-defined human remains or cultural items under the duty of care, inability to identify the lineal descendants, Indian Tribes, or NHOs from whom the museum, Federal agency, or DHHL must obtain consent does not clear access or research; NPS guidance keeps those actions stopped. | `quotation_or_position` | 2024 guidance/current rule | United States statutory scope | museum/Federal agency/DHHL duty actors; unidentified consulting or consent parties; defined human remains/cultural items | regional |
| `CLM-029110` | UNDRIP, the OAS Declaration, and ILO Convention 169 can supply rights or legal-policy floors within their scopes, but none supplies project-specific community authorization. | `comparative` | 1989–present instruments | global/Americas/ratifying states | Indigenous Peoples and states | transregional |
| `CLM-029111` | ILO Convention 169 applicability is country-specific and must be rechecked against current ratification and domestic implementation before use in a future lane. | `date_or_sequence` | decision-time/current | ratifying states | prospective country lanes | transregional |
| `CLM-029112` | Nagoya Protocol Article 7 is a conditional gate for traditional knowledge associated with genetic resources, subject to domestic law; it is not a general rule for every cultural or medicinal record. | `quotation_or_position` | 2010–present | parties/domestic implementation | communities holding relevant knowledge | transregional |
| `CLM-029113` | Future packets must keep material evidence, authorized oral evidence, later-recorded tradition, colonial/administrative records, modern Indigenous-governed interpretation, and specialist synthesis as separate evidentiary layers. | `interpretive` | project rule | all future lanes | all record subjects/holders | global |
| `CLM-029114` | Human remains/funerary, sacred/restricted, voice/recording, sensitive-site, privacy, inadequately consented, biocultural/genetic, medicinal, and community-controlled metadata classes default to restriction pending relevant authority and use clearance. | `interpretive` | project rule | all future lanes | affected individuals/families/communities | global |
| `CLM-029115` | Reading, extraction, caching, quotation, translation, asset reuse, public website publication, SEO indexing, GEO/AI retrieval, commercial context, model use, review, benefit/return, and withdrawal are separate proposed uses requiring explicit decisions. | `interpretive` | project rule | all future lanes | authorities, researchers, audiences | global |
| `CLM-029116` | Every generic future regional/jurisdictional lane is `AUTHORITY_UNRESOLVED` because no exact corpus, complete affiliation map, actual authority mandate, and allowed-use agreement has been established. | `interpretive` | 2026-08-19 | listed Americas lanes | future project lanes | transregional |
| `CLM-029117` | The Nahua central-Mexico 1519–1606 proposal remains `AUTHORITY_UNRESOLVED`; period/region alone does not identify present-day authority or allowed actions. | `interpretive` | 2026-08-19 | proposed central-Mexico lane | unresolved affected communities | local |
| `CLM-029118` | A positive authorization must have an effective date, review date, expiry, defined renewal and withdrawal process; a pause, scope change, new affected party, or expiry immediately returns the affected use to a hold. | `interpretive` | project rule | all future lanes | authorities and research team | global |
| `CLM-029119` | A Native Nation's written research standards apply to its own research relationships; examples from another Nation may guide questions but cannot authorize or govern by analogy. | `quotation_or_position` | current scholarship/code landscape | United States focus | Native Nations and research institutions | regional |
| `CLM-029120` | Silence, nonresponse, public availability, or repository permission is not community consent. | `interpretive` | project rule | all jurisdictions | all proposed corpora | global |
| `CLM-029121` | Even where Canadian policy does not formally require engagement for some public-record research, it recommends culturally informed advice when findings may affect identity or heritage; “public” is therefore not an automatic project clearance. | `quotation_or_position` | 2022–present | Canada | public-record researchers and affected communities | regional |
| `CLM-029122` | No cultural future packet may begin until an exact corpus precedes authority discovery; selecting a community merely to satisfy geographic coverage is outside R17's authorization. | `interpretive` | 2026-08-19 | all future lanes | project researchers and prospective communities | global |

## Canonical decision/claim records — evaluation and workflow

| claim_id | evidence_label | current_evidence_note | anachronism_risk | sensitivity | disagreement_id | wording_limits | created_by | created_on | review_status | withdrawal_reason |
|---|---|---|---|---|---|---|---|---|---|---|
| `CLM-029100` | Documented | direct internal brief | low — current internal governance rule | cultural authority | not_applicable | governance-only; never imply community permission | R17 Codex protocol researcher | 2026-08-19 | `source-verified` | not_applicable |
| `CLM-029101` | Documented | final CARE article; local authority intentionally absent | medium — global framework could be projected as local permission | data sovereignty | not_applicable | “framework,” never “permission” | R17 Codex protocol researcher | 2026-08-19 | `evidence-linked` | not_applicable |
| `CLM-029102` | Documented | FNIGC explicit scope statement | high — pan-Indigenous extension would erase jurisdiction | identity/jurisdiction/trademark | not_applicable | retain First Nations-specific wording and OCAP® mark | R17 Codex protocol researcher | 2026-08-19 | `evidence-linked` | not_applicable |
| `CLM-029103` | Documented | ITK strategy printed pp. 11, 13–16, 29, and 32 | high — strategy language or one body's remit could be projected as current blanket approval | Inuit self-determination | not_applicable | strategy document is not authorization; do not demote a national/regional/appointed body whose verified mandate covers the corpus/use; preserve 2018–2022 action horizon | R17 Codex protocol researcher | 2026-08-19 | `evidence-linked` | not_applicable |
| `CLM-029104` | Documented | TCPS articles opened in full | medium — policy could be projected beyond Canada or its date | collective/individual consent | not_applicable | Canada/institutional policy scope always stated | R17 Codex protocol researcher | 2026-08-19 | `evidence-linked` | not_applicable |
| `CLM-029105` | Documented | Local Contexts FAQ revision 2026-07-24 and labels page | high — tool/account eligibility could be mistaken for community authorization | cultural metadata/IP | not_applicable | eligible Hub account and current usage rules are mandatory; Notices disclose but do not approve; no Label/Notice applied or Label reproduced | R17 Codex protocol researcher | 2026-08-19 | `evidence-linked` | not_applicable |
| `CLM-029106` | Strongly supported | multiple independent framework/protocol sources | low — current project gate separates contemporaneous controls | rights/authority | not_applicable | separate gates; do not rank one as sufficient | R17 Codex protocol researcher | 2026-08-19 | `evidence-linked` | not_applicable |
| `CLM-029107` | Strongly supported | repository, archive protocol, and directory warning | medium — custody could be mistaken for authority across periods | affiliation/representation | not_applicable | “lead/custody,” never authority | R17 Codex protocol researcher | 2026-08-19 | `evidence-linked` | not_applicable |
| `CLM-029108` | Documented | current regulation §§ 10.1(b)–(d) and guidance | high — applicability, duty, consent, and material roles could be collapsed or projected universally | human remains/sacred items | not_applicable | name applicability actors, duty actors, consulting/consent parties, defined materials, and controlled actions separately | R17 Codex protocol researcher | 2026-08-19 | `evidence-linked` | not_applicable |
| `CLM-029109` | Documented | NPS FAQ p. 6 | high — current covered-material rule could be projected beyond scope | human remains/sacred items | not_applicable | covered material only | R17 Codex protocol researcher | 2026-08-19 | `evidence-linked` | not_applicable |
| `CLM-029110` | Strongly supported | direct instrument texts | medium — instruments have different dates and legal scopes | sovereignty/rights | not_applicable | rights floor, not private permission | R17 Codex protocol researcher | 2026-08-19 | `evidence-linked` | not_applicable |
| `CLM-029111` | Documented | treaty ratification mechanism; current country table quarantined as lead | low — claim concerns the treaty mechanism, not a present country list | legal applicability | not_applicable | current table and domestic law must be checked at decision time | R17 Codex protocol researcher | 2026-08-19 | `evidence-linked` | not_applicable |
| `CLM-029112` | Documented | exact Article 7 | high — narrow genetic-resource condition could be projected onto all knowledge | genetic/medicinal knowledge | not_applicable | retain association-with-genetic-resources condition | R17 Codex protocol researcher | 2026-08-19 | `evidence-linked` | not_applicable |
| `CLM-029113` | Documented | project brief requires six layers | high — later or colonial records could be projected backward | archive/lived voice | not_applicable | classification, not cultural hierarchy | R17 Codex protocol researcher | 2026-08-19 | `source-verified` | not_applicable |
| `CLM-029114` | Strongly supported | internal brief plus Local Contexts/PNAAM/NAGPRA/Nagoya | high — generic restriction classes could be mistaken for local classification | restricted knowledge/privacy/remains | not_applicable | project default, not universal community classification | R17 Codex protocol researcher | 2026-08-19 | `source-verified` | not_applicable |
| `CLM-029115` | Strongly supported | CARE/TCPS/tribal-code and internal process evidence | low — current prospective-use gate | future use/commercial/AI | not_applicable | no bundled consent | R17 Codex protocol researcher | 2026-08-19 | `source-verified` | not_applicable |
| `CLM-029116` | Unknown | authority/corpus/permission intentionally absent | high — regional labels invite pan-Indigenous projection | all cultural authority | not_applicable | HOLD is successful result, not evidence of no authority existing | R17 Codex protocol researcher | 2026-08-19 | `evidence-linked` | not_applicable |
| `CLM-029117` | Unknown | only period/region proposal exists | high — colonial-period label could be projected onto present authority | Nahua identity/colonial archive | not_applicable | no pan-Nahua or archive-as-authority inference | R17 Codex protocol researcher | 2026-08-19 | `evidence-linked` | not_applicable |
| `CLM-029118` | Documented | internal required-process decision supported by agreements framework | low — current prospective governance rule | withdrawal/community control | not_applicable | unresolved/expired never becomes allowed | R17 Codex protocol researcher | 2026-08-19 | `source-verified` | not_applicable |
| `CLM-029119` | Documented | Carroll et al. explicit discussion | high — one Nation's code could be projected onto another | sovereignty | not_applicable | examples are question leads only | R17 Codex protocol researcher | 2026-08-19 | `evidence-linked` | not_applicable |
| `CLM-029120` | Strongly supported | NAGPRA, protocol, repository, Local Contexts controls | medium — modern access concepts could be conflated across regimes | consent | not_applicable | absence/silence is Unknown, not consent | R17 Codex protocol researcher | 2026-08-19 | `source-verified` | not_applicable |
| `CLM-029121` | Documented | TCPS Article 9.2 example 8/9.15 | medium — Canadian policy could be projected beyond its remit | public identity/heritage | not_applicable | bounded to Canadian policy; project adopts stricter hold | R17 Codex protocol researcher | 2026-08-19 | `evidence-linked` | not_applicable |
| `CLM-029122` | Documented | direct R17 boundary/stop condition | high — regional coverage could drive ahistorical community selection | community selection/representation | not_applicable | corpus first; no coverage-matrix recruitment | R17 Codex protocol researcher | 2026-08-19 | `source-verified` | not_applicable |

## Typed relationships

| rel_id | source_or_evidence_id | relationship | target_id | rating_for_relation | dependence_group | note |
|---|---|---|---|---|---|---|
| `REL-029200` | `EVD-029025` | supports | `CLM-029100` | L1-A | `DEP-029013-PROJECT-GATE` | direct packet boundary |
| `REL-029201` | `EVD-029000` | supports | `CLM-029101` | L2-A | `DEP-029000-CARE` | community determines protocols |
| `REL-029202` | `EVD-029001` | supports | `CLM-029101` | L2-A | `DEP-029000-CARE` | future-use/harms assessment |
| `REL-029203` | `EVD-029002` | supports | `CLM-029102` | L1-A | `DEP-029001-OCAP` | explicit First Nations-not-Indigenous scope |
| `REL-029204` | `EVD-029003` | contextualizes | `CLM-029102` | L1-A | `DEP-029001-OCAP` | local expression and governed actions |
| `REL-029205` | `EVD-029004` | supports | `CLM-029103` | L1-A stated authority routes; D authorization without verified mandate/use decision | `DEP-029002-NISR` | possible national/regional/sub-regional/appointed authority within remit; strategy alone is not permission |
| `REL-029206` | `EVD-029005` | supports | `CLM-029104` | L1-A | `DEP-029003-TCPS` | engagement scope |
| `REL-029207` | `EVD-029006` | supports | `CLM-029104` | L1-A | `DEP-029003-TCPS` | institutional/community/individual layers and agreement |
| `REL-029208` | `EVD-029008` | supports | `CLM-029105` | L1-A | `DEP-029004-LOCAL-CONTEXTS` | issuer, approval, confirmed-community-account, and subscribed-Notice-account workflow |
| `REL-029209` | `EVD-029010` | contextualizes | `CLM-029105` | L1-A taxonomy; D local application | `DEP-029004-LOCAL-CONTEXTS` | community-specific conditions |
| `REL-029210` | `EVD-029009` | supports | `CLM-029106` | L1-A | `DEP-029004-LOCAL-CONTEXTS` | extra-legal/copyright separation |
| `REL-029211` | `EVD-029011` | supports | `CLM-029106` | L1/L2-B | `DEP-029005-ARCHIVAL-PROTOCOLS` | archive access and community consultation separate |
| `REL-029212` | `EVD-029021` | illustrates | `CLM-029107` | L3-A custody; D authority | `DEP-029010-NARA` | federal-record provenance only |
| `REL-029213` | `EVD-029026` | supports | `CLM-029107` | L3-A | `DEP-029006-NAGPRA` | directory is incomplete/discovery-only |
| `REL-029214` | `EVD-029011` | supports | `CLM-029107` | L1/L2-B | `DEP-029005-ARCHIVAL-PROTOCOLS` | consultation/concurrence needed beyond holder |
| `REL-029215` | `EVD-029013` | supports | `CLM-029108` | L1-A | `DEP-029006-NAGPRA` | exact current duty actors, consent parties, defined materials, and controlled actions |
| `REL-029216` | `EVD-029014` | supports | `CLM-029109` | L1-A | `DEP-029006-NAGPRA` | unresolved parties retain stop |
| `REL-029217` | `EVD-029015` | supports | `CLM-029110` | L1-A text; B project floor | `DEP-029007-INTERNATIONAL-RIGHTS` | representation/FPIC rights standard |
| `REL-029218` | `EVD-029016` | supports | `CLM-029110` | L1-A text; B project floor | `DEP-029007-INTERNATIONAL-RIGHTS` | knowledge/heritage rights standard |
| `REL-029219` | `EVD-029017` | supports | `CLM-029110` | L1-A text; B project floor | `DEP-029007-INTERNATIONAL-RIGHTS` | Americas regional standard |
| `REL-029220` | `EVD-029018` | supports | `CLM-029110` | L1-A text; B ratifying-state floor | `DEP-029008-ILO169` | treaty scope |
| `REL-029221` | `EVD-029019` | supports | `CLM-029111` | L1-A | `DEP-029008-ILO169` | live status required |
| `REL-029222` | `EVD-029018` | contextualizes | `CLM-029111` | L1-A treaty text | `DEP-029008-ILO169` | article duties depend on applicability |
| `REL-029223` | `EVD-029020` | supports | `CLM-029112` | L1-A | `DEP-029009-NAGOYA` | exact conditional subject scope |
| `REL-029224` | `EVD-029025` | supports | `CLM-029113` | L1-A | `DEP-029013-PROJECT-GATE` | six layers required by brief |
| `REL-029225` | `EVD-029010` | supports | `CLM-029114` | L1-A taxonomy; B project default | `DEP-029004-LOCAL-CONTEXTS` | community-specific restricted classes |
| `REL-029226` | `EVD-029012` | supports | `CLM-029114` | L1/L2-B | `DEP-029005-ARCHIVAL-PROTOCOLS` | archival sensitivity/clearance |
| `REL-029227` | `EVD-029013` | supports | `CLM-029114` | L1-A within NAGPRA scope | `DEP-029006-NAGPRA` | remains/cultural items legal gate |
| `REL-029228` | `EVD-029020` | supports | `CLM-029114` | L1-A within Article 7 scope | `DEP-029009-NAGOYA` | genetic-resource-associated knowledge gate |
| `REL-029229` | `EVD-029001` | supports | `CLM-029115` | L2-A/B | `DEP-029000-CARE` | future uses/harms require authority assessment |
| `REL-029230` | `EVD-029006` | supports | `CLM-029115` | L1-A/B | `DEP-029003-TCPS` | agreement records mutual commitments |
| `REL-029231` | `EVD-029023` | contextualizes | `CLM-029115` | L2-B | `DEP-029011-TRIBAL-CODES` | codes demonstrate nonbundled controls/future use |
| `REL-029232` | `EVD-029025` | supports | `CLM-029116` | L1-A project state | `DEP-029013-PROJECT-GATE` | no authorization by default |
| `REL-029233` | `EVD-029022` | qualifies | `CLM-029116` | L2-A/B | `DEP-029011-TRIBAL-CODES` | authority likely local but must be identified, not assumed |
| `REL-029234` | `EVD-029025` | supports | `CLM-029117` | L1-A | `DEP-029013-PROJECT-GATE` | explicit Nahua hold |
| `REL-029235` | `EVD-029000` | qualifies | `CLM-029117` | L2-A framework; D actual authority | `DEP-029000-CARE` | cross-cutting authority duty cannot name affected Nahua communities |
| `REL-029236` | `EVD-029006` | supports | `CLM-029118` | L1-B project rule | `DEP-029003-TCPS` | agreements include review/updating |
| `REL-029237` | `EVD-029001` | supports | `CLM-029118` | L2-B project rule | `DEP-029000-CARE` | future uses/harm assessment supports re-review |
| `REL-029238` | `EVD-029025` | supports | `CLM-029118` | L1-A project requirement | `DEP-029013-PROJECT-GATE` | withdrawal/expiration fields required |
| `REL-029239` | `EVD-029022` | supports | `CLM-029119` | L2-A | `DEP-029011-TRIBAL-CODES` | explicit each-Nation limitation |
| `REL-029240` | `EVD-029023` | contextualizes | `CLM-029119` | L2-B | `DEP-029011-TRIBAL-CODES` | variation among selected codes |
| `REL-029241` | `EVD-029014` | supports | `CLM-029120` | L1-A within NAGPRA; B broader project rule | `DEP-029006-NAGPRA` | nonresponse/unidentified parties do not clear |
| `REL-029242` | `EVD-029011` | supports | `CLM-029120` | L1/L2-B | `DEP-029005-ARCHIVAL-PROTOCOLS` | public-access assumptions require consultation |
| `REL-029243` | `EVD-029021` | qualifies | `CLM-029120` | L3-A access; D consent | `DEP-029010-NARA` | public/repository access metadata cannot prove consent |
| `REL-029244` | `EVD-029007` | supports | `CLM-029121` | L1-A | `DEP-029003-TCPS` | explicit public-record/harm distinction |
| `REL-029245` | `EVD-029025` | supports | `CLM-029122` | L1-A | `DEP-029013-PROJECT-GATE` | corpus-first and stop rule |
| `REL-029246` | `EVD-029026` | contextualizes | `CLM-029122` | L3-A discovery; D authority | `DEP-029006-NAGPRA` | directories only after corpus/affiliation question exists |
| `REL-029247` | `EVD-029024` | illustrates | `CLM-029119` | L1-A bounded route; D other remits | `DEP-029012-ANTHC` | actual review body has specific organizational/health remit |

## Return-review repair disposition — 2026-08-19

1. **NISR authority and mandate — repaired.** `SRC-029003`, `EVD-029004`, `CLM-029103`,
   `REL-029205`, and the Inuit route now recognize representational organizations and appointed
   institutions as possible actual authorities within a verified corpus/use mandate. Full PDF replay
   located the FPIC passage on printed p. 11, route detail on pp. 13–16, governance partnership on
   p. 29, and “rightful gatekeepers” language on p. 32; printed pp. 12 and 33 contain a figure and
   capacity section, respectively. The 2018–2022 action horizon remains explicit, and the Inuit lane
   remains `AUTHORITY_UNRESOLVED`/**HOLD**.
2. **NAGPRA actor, material, and action precision — repaired.** The source, decision tree, U.S.
   route, material gate, and `CLM-029108` now separate § 10.1(b) applicability actors from the
   museums, Federal agencies, and DHHL bound by §§ 10.1(c)–(d), the lineal descendants/Indian
   Tribes/NHOs who are consulting or consent parties, the defined human remains/cultural items, and
   the exhibition/access/research actions. `EVD-029013`–`EVD-029014` and their locators are retained.
3. **Local Contexts Hub workflow — repaired.** `SRC-029006` now records the 2026-07-24 FAQ
   revision. `EVD-029008`, `CLM-029105`, `REL-029208`, and the Notice gate now require the
   confirmed-community-account/authorized-representative route for Labels and subscribed
   institution/researcher accounts for Notices. Eligible Notices remain disclosure rather than
   permission; Collections Care still requires engagement; this packet applies neither a Label nor
   a Notice.

## Dependence and graph audit

- CARE page and article share `DEP-029000-CARE`; they are not counted as two independent chains.
- Current regulation, NPS FAQ, and consultation resources share `DEP-029006-NAGPRA`.
- Local Contexts pages share `DEP-029004-LOCAL-CONTEXTS`.
- ILO text/status table share `DEP-029008-ILO169`.
- The tribal-code article's table and conclusion are one synthesis chain. Future application requires
  opening the exact Nation's current code and verifying its authority/version.
- `23` claims/decisions (`CLM-029100–CLM-029122`) each have at least one incoming relation.
- `48` relationships (`REL-029200–REL-029247`) use controlled verbs and resolve to defined evidence
  and claims.

## Publication and handoff gate

- **GO:** R17 governance-framework maintenance and authority discovery only.
- **HOLD:** every substantive future lane listed in the register.
- **Public draft:** none.
- **Public quotation/assets/indexing:** none.
- **Nahua 1519–1606:** `AUTHORITY_UNRESOLVED`; no active R18 packet may begin.
- **Next responsible packet:** a governance-only pre-packet may begin only after a coordinator supplies
  a concrete corpus candidate. Its first deliverable is an authority/affiliation record, not history.
