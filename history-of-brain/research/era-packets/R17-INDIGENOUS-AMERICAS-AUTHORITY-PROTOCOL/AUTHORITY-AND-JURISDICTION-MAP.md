# R17 — Authority and jurisdiction map

**Purpose:** locate a real decision maker before opening a cultural corpus. This map is not a list
of permissions and does not authorize outreach, extraction, or publication.

## Authority-discovery decision tree

1. **Define the proposed corpus before naming an authority.** Record the exact object, file,
   recording, site, collection, language, date layer, repository/holder, known creator or recorder,
   and every intended use. A region, language family, historic label, or repository collection title
   is not a sufficient corpus identity.
2. **Establish present-day affiliation without guessing.** Use provenance, current community-
   governed sources, and the affected peoples' own identification. If affiliation is shared,
   disputed, multiple, or unknown, set `AUTHORITY_UNRESOLVED`; do not choose the most convenient
   claimant.
3. **Ask the affected people who is empowered to decide this use.** The path may lead to a
   government, traditional or hereditary authority, cultural office, archive, research-review body,
   Elders or knowledge-holder council, family, or several bodies. A directory entry is a lead only.
   The tribal-code synthesis specifically warns that each Native Nation's written standards apply
   only to research relationships with that Nation ([Carroll et al. 2022, Discussion](https://pmc.ncbi.nlm.nih.gov/articles/PMC8977641/#sec5-genes-13-00525)).
4. **Run legal and institutional gates in parallel, not in place of authority.** Determine the
   governing nation-state/local law, treaty status, human-participant or privacy review, repository
   terms, copyright, and special-material rules. For NAGPRA, distinguish § 10.1(b) applicability
   actors from the museums, Federal agencies, and DHHL bound by §§ 10.1(c)–(d). For human remains
   or cultural items under § 10.1(d), the duty actor must obtain consent from the specified lineal
   descendants, Indian Tribes, or NHOs before exhibition, access, or research
   ([current eCFR §10.1(d)](https://www.ecfr.gov/current/title-43/subtitle-A/part-10/subpart-A/section-10.1)).
5. **Resolve representation and affected parties.** Record who selected the representative, the
   representative's mandate, whether family/individual and collective approvals are both needed,
   whether people living away from the jurisdiction are affected, and whether every jointly
   affiliated community has been invited. Formal leadership cannot silently erase dissenting,
   marginalized, family, gendered, youth, disabled, or other relevant authority/voice.
6. **Obtain an itemized, use-specific decision.** Reading, internal notes, local storage, machine
   processing, quotation, translation, image/audio reuse, public web publication, search indexing,
   GEO/AI retrieval, commercial traffic generation, derivative works, and model/training uses are
   separate proposed uses. Silence or repository access is not approval.
7. **Record review and withdrawal.** Every approval must name effective date, reviewer/contact,
   permitted and prohibited actions, required attribution/benefit/return, community review stages,
   review date, expiry, and a rapid pause/withdrawal route.

If any step fails, stop at `AUTHORITY_UNRESOLVED`, `RESTRICTED`, or `DO_NOT_USE`.

## Jurisdiction-first route map

The “route” is a verification sequence, not a declaration that the named framework or body is the
final authority.

| proposed lane | framework/legal floor to check | authority-discovery route | body that cannot authorize by itself | current gate | missing condition |
|---|---|---|---|---|---|
| U.S. Tribal Nation | the specific Nation's law/code; applicable federal/state law; NAGPRA only within its defined actor/material/action scopes; CARE as a governance framework | identify exact Nation(s) and affiliation → official Nation government → ask which cultural, historic-preservation, archive, family/knowledge-holder, or research-review body has delegated authority for each use; separately, § 10.1(b) includes Indian Tribes on Tribal lands as applicability actors while §§ 10.1(c)–(d) bind museums, Federal agencies, and DHHL, which must obtain consent from specified lineal descendants, Indian Tribes, or NHOs before covered access/research | museum/archive; federal Tribal Leaders or NAGPRA directory; researcher IRB; another Nation | `AUTHORITY_UNRESOLVED` | no corpus, Nation, delegated authority, or allowed-use agreement identified |
| Alaska Native community | exact Tribe/village/community and organization; applicable Alaska/federal law; NAGPRA where covered; local research rules | identify exact material and people(s) → relevant Tribe/village/community governance → any locally designated regional, cultural, health, or research body; ANTHC is a documented route only for research within its health remit ([ANTHC Research Review](https://anthc.org/research-applied-studies/)) | Alaska-wide category; Native corporation without demonstrated mandate for this material/use; ANTHC outside its remit; repository or IRB alone | `AUTHORITY_UNRESOLVED` | no exact people, remit, or delegated decision maker identified |
| Native Hawaiian organization/community | Native Hawaiian community-specific protocols; Hawaiʻi law; NAGPRA only where covered; other federal law as applicable | identify island/place, material, genealogy/affiliation, and all affected groups → ask those groups which organization, cultural authority, family, or knowledge holder has mandate; for covered NAGPRA material use the statutory consulting-party process | DOI NHO notification list alone; museum; Office of Hawaiian Affairs or any NHO outside a demonstrated mandate | `AUTHORITY_UNRESOLVED` | no material-specific affiliation, affected parties, or mandate established |
| First Nation in Canada | local Nation's law/protocol; OCAP® where adopted/applied; TCPS 2 Chapter 9; provincial/federal law | identify exact First Nation(s) → Nation government/designated research, data, archive, cultural, or hereditary authority → individual/family consent where required | FNIGC or OCAP® as a universal permission; university REB; repository | `AUTHORITY_UNRESOLVED` | no Nation or local expression of OCAP®/other rules identified |
| Inuit region/community in Canada | relevant Inuit national, regional, sub-regional, community, licensing, family, or appointed-institution rules; NISR; TCPS 2 Chapter 9; territorial/federal law | identify the exact corpus, region(s), community/communities, and affected parties → verify which Inuit representational organization, appointed institution, licensing body, community, or family authority has a mandate covering that corpus and each proposed use → obtain the separate use-specific decision and any individual/family consent required | the NISR document by itself; any body, including ITK, outside a demonstrated mandate; university REB; repository | `AUTHORITY_UNRESOLVED` | no corpus, affected-party map, verified representational mandate, or delegated use-specific decision identified |
| Métis government/community in Canada | specific Métis government's/community's current law/protocol; TCPS 2 Chapter 9; provincial/federal law | establish the exact affected Métis government/community from provenance → ask it to designate the research/data/cultural and family authority for the use | OCAP®; a pan-Indigenous organization; university REB; repository | `AUTHORITY_UNRESOLVED` | no exact community/government or current protocol identified |
| Mexico, unspecified future lane | community/people-specific law and protocol; Mexican federal/state/local law; applicable treaty status; UNDRIP/OAS as rights floors; ILO 169 only after current ratification/applicability check | corpus/provenance first → identify named present-day people(s)/community or communities in their own terms → verify representative institution(s), local/communal/municipal authority, custodian/family, and state process required for the specific material/use | national archive, university, municipality, state agency, historic ethnonym, or international declaration alone | `AUTHORITY_UNRESOLVED` | no corpus or present-day affiliated community named |
| Central America, unspecified future lane | community-specific rules; exact country's law; applicable UNDRIP/OAS/ILO 169 obligations | corpus and country first → present-day people(s)/community → their chosen representative/cultural/family authorities → national/local compliance | regional label, nation-state ministry, archive, or treaty alone | `AUTHORITY_UNRESOLVED` | no country, corpus, community, or authority identified |
| Andes, unspecified future lane | community-specific rules; exact country's national/subnational law; applicable UNDRIP/OAS/ILO 169 obligations | site/object/record and custody first → all affiliated communities/peoples → their own decision institutions and custodians → state/repository gates | archaeological project, museum, colonial archive, academic expert, or “Andean” label alone | `AUTHORITY_UNRESOLVED` | no corpus, locality, affiliation, or authority identified |
| Amazonia, unspecified future lane | community-specific rules; exact country/countries and subnational law; applicable rights/treaty floor | material, river/territory, language, collector, and custody first → all potentially affiliated peoples/communities, including cross-border parties → their chosen authorities → all national/legal gates | researcher, NGO, mission archive, national agency, or one side of a border alone | `AUTHORITY_UNRESOLVED` | no bounded corpus or complete affected-party map identified |
| Southern Cone, unspecified future lane | community-specific rules; exact national/subnational law; applicable rights/treaty floor | corpus and provenance first → named people(s)/communities → community-designated government/cultural/family authorities → state/repository gates | regional category, national archive, or current country boundary alone | `AUTHORITY_UNRESOLVED` | no bounded corpus, affiliation, or authority identified |
| Caribbean, unspecified future lane | community-specific rules and diasporic/local authority; exact island/territory/state law; applicable rights floor | corpus, island/territory, collector, custody, and present-day affiliation first → all self-identifying affected communities and their chosen authorities → legal/repository gates | colonial archive, state tourism/cultural body, regional label, or asserted extinction narrative | `AUTHORITY_UNRESOLVED` | no bounded corpus, community, or authority identified |
| Nahua central Mexico, 1519–1606 proposal | relevant community rules; Mexican law; applicable rights floors; archive/repository terms | identify the exact manuscript/object/testimony, colonial recorder/translator, place, language variant, custody, and every present-day affiliated Nahua community → ask those communities to designate authority for reading, translation, quotation, public indexing, and commercial website use | “Nahua” as one timeless authority; colonial author/editor; archive; scholar; Mexico-wide institution; international declaration | `AUTHORITY_UNRESOLVED` | no exact corpus, present-day community set, designated authority, or permitted action exists |

The NAGPRA consultation-resources page itself cautions that its contact lists are voluntary or
incomplete and points researchers to several distinct discovery resources
([NPS, “Consultation Resources”](https://www.nps.gov/subjects/nagpra/consultation-resources.htm)).
That warning is generalized here: a directory helps locate a conversation; it is not proof of
affiliation, mandate, concurrence, or permission.

## Framework scope controls

| framework | what it can do here | what it cannot do here | evidence anchor |
|---|---|---|---|
| CARE | require collective benefit, authority to control, responsibility, and ethics across a data lifecycle; force the project to ask about future uses and harms | designate a community representative or grant permission for a corpus | `EVD-029000`, `EVD-029001` |
| OCAP® | govern collection, ownership, control, access, possession, storage, interpretation, use, and sharing in a First Nations-specific context | authorize Inuit, Métis, U.S. Tribal, Native Hawaiian, Latin American, Caribbean, or generic “Indigenous” research | `EVD-029002`, `EVD-029003` |
| NISR | state that Inuit FPIC should be sought through Inuit representational organizations or appointed institutions and identify possible national, regional, sub-regional, licensing, and governance routes | treat the strategy document as an authorization record, categorically demote a mandated national body, or use any body outside a demonstrated corpus/use remit | `EVD-029004` |
| TCPS 2 Chapter 9 | set a Canadian institutional ethics floor for relevant First Nations, Inuit, and Métis human research, agreements, engagement, interpretation, and dissemination | serve as community consent or automatically govern research outside Canada | `EVD-029005`, `EVD-029006`, `EVD-029007` |
| Local Contexts | provide community-applied Labels and researcher/institution Notices through the current Hub/account workflow to expose unresolved Indigenous rights/interests | let this project customize/apply a community's TK/BC Label, generate/apply a Notice without the eligible subscribed account/current usage process, or replace copyright or permission | `EVD-029008`, `EVD-029009`, `EVD-029010` |
| NAGPRA/43 CFR Part 10 | distinguish § 10.1(b) applicability actors from museum/Federal agency/DHHL duty actors and require those duty actors to obtain consent from specified lineal descendants, Indian Tribes, or NHOs before covered access/research on defined human remains/cultural items | become a general U.S. Indigenous research code, collapse actor roles, or prove clearance for noncovered material | `EVD-029013`, `EVD-029014` |
| UNDRIP/OAS/ILO 169 | establish global/regional/treaty rights floors and duties for states within their respective scopes | appoint this project's community authority or supply use-specific consent | `EVD-029015`–`EVD-029019` |
| Nagoya Protocol Article 7 | trigger a specific access/consent/approval/involvement/mutually-agreed-terms inquiry for traditional knowledge associated with genetic resources, subject to domestic law | apply automatically to every historical, linguistic, archival, medicinal, or cultural record | `EVD-029020` |

## Repository authority versus community authority

| repository may establish | repository cannot establish unless specifically delegated |
|---|---|
| catalog identity, custody, call number, format, repository access conditions, its copyright or reproduction interest, privacy screening, and the wording of its own metadata | cultural affiliation; who speaks for the affected people; whether a collector/recorder had consent; permission to disclose restricted knowledge; permission to translate or contextualize; permission for search indexing/GEO/AI retrieval; community attribution, benefit, review, withdrawal, or future reuse |

NARA states that its relevant holdings are federal-agency records and that some recent records require
privacy screening ([NARA records guide](https://www.archives.gov/research/native-americans)). That is
evidence about record provenance and repository access, not affected-community permission.

## Disputed, shared, cross-border, or absent authority

- **Shared affiliation:** all potentially affiliated communities are parties. One approval does not
  clear another community's rights or interests.
- **Disputed affiliation:** preserve the dispute, do not adjudicate it from scholarship, and pause all
  material access beyond public governance metadata.
- **Cross-border people or collection:** map the people's own authority across the border and comply
  with every applicable state/repository rule; current borders do not divide the authority question by
  convenience.
- **No written code:** lack of a public code is not lack of authority. Ask the community to identify its
  process. The tribal-code synthesis says institutions must seek approval and guidance even where a
  written law is absent ([Carroll et al. 2022, Discussion](https://pmc.ncbi.nlm.nih.gov/articles/PMC8977641/#sec5-genes-13-00525)).
- **No response:** no response is not consent. For NAGPRA-covered material, NPS guidance says that if
  consulting parties cannot yet be identified, exhibition, access, and research must not proceed
  ([Duty of Care FAQ, p. 6](https://www.nps.gov/subjects/nagpra/upload/Duty-of-Care-FAQ.pdf)).
- **Community pause or withdrawal:** stop immediately, quarantine working copies, preserve only the
  minimum audit record allowed by the agreement, and return for direction.
