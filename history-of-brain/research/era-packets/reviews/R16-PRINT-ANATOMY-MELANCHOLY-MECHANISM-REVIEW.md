# Independent cross-review — R16-PRINT-ANATOMY-MELANCHOLY-MECHANISM

**Review date:** 2026-08-19
**Reviewer:** independent Codex packet reviewer
**Reviewed state:** five packet outputs and 38 ignored cache objects; packet and cache remained read-only
**Verdict:** **RETURN**
**Public-content state:** **blocked; no public prose**

## Decision

The packet has a strong, unusually careful historical core. Independent replay supports its
main interpretive boundaries: Vesalius made particular corrections while continuing to work
inside inherited anatomical vocabularies; Burton's printed persona, prescriptions, and remedy
catalogue are not a diagnosis, delivered treatment, or outcome record; Elisabeth is a
first-person philosophical correspondent whose surviving words are copy- and edition-mediated,
not a passive patient case; and Descartes's whole-body union, gland, passions, and machine-model
passages cannot be collapsed into the slogans “the soul simply lives in the pineal gland” or
“a person is only a machine.” The packet also treats unknown cadaver identity, distress,
coercion, privacy, consent, treatment delivery, and outcomes with appropriate care.

The packet nevertheless must return before coordinator reconciliation. Two locator failures
break the exact source-to-cache audit, and several machine-readable fields do not use the
controlled values required by the evidence model:

1. all five cached 1543 Vesalius images are named two printed pages too high, so the packet says
   pp. 633–637 were directly inspected although the cache actually contains printed pp. 631–635;
2. all 16 Burton page images are named one printed page too low, so the cache and source record
   pair the wrong printed page with every selected scan canvas;
3. all 14 `rights_status` values, 13 `directness` values, all 27 evidence `sensitivity` values,
   and 18 claim `anachronism_risk` values are prose compounds rather than controlled values;
4. two omnibus myth claims join distinct burdens and labels, one Burton persona claim has the
   wrong claim type, and one edition claim is stronger than its single specialist route;
5. the cache manifest has correct bytes and hashes but does not give the required per-object
   lawful URL, access date, rights/allowed use, format/transformation, and source binding; and
6. public use still lacks specialist passage-level Latin/French review, a Descartes textual-
   history route, and asset-specific image permission/dignity decisions.

This is a bounded repair return. It is not a request for a general history of Renaissance
Europe or for public drafting.

## Materials and method

Read in full:

- `PROJECT-BRAIN.md`;
- `BATCH-05-INDEX.md`;
- `sources/EVIDENCE-MODEL.md`;
- `sources/SOURCE-RATING-AND-CAPTURE-PROTOCOL.md`;
- the R16 `BRIEF.md`; and
- all five R16 packet outputs.

Risk-based replay used Agent Reach/Jina, official institutional records, complete opened
scholarship where available, and the cached text/page images. Agent Reach reported Jina Reader
available and Exa unavailable, so direct institutional and Jina routes were used. Search
snippets were treated only as leads.

The replay covered both Vesalius editions and Nutton's edition study; Burton's 1621
transcription/facsimile and the complete Gowland and Berrios materials; Elisabeth's selected
1643/1645 letters and Bos's transmission study; *Passions* articles 27–34 and 41–50;
*L'Homme* p. 85; and both BnF work/object records.

## Risk-based source replay

| Chain / issue | Exact replay result | Disposition |
|---|---|---|
| Vesalius 1543 object and Book VII | The [Basel 1543 object](https://www.e-rara.ch/bau_1/content/titleinfo/6299027) is the named first-edition witness. The cached pages visibly continue a Galenic discussion and begin the ventricular account. The substantive “engagement plus particular correction” reading is supportable, but the image filenames are wrong: `p-633.jpg` through `p-637.jpg` display printed pp. 631–635, respectively. | **RETURN LOCATOR DEFECT.** `SRC-028000`, `EVD-028000`, `EVD-028001`, the cache manifest, and every reference to “pp. 633–637 directly inspected” must be reconciled to the displayed foliation. Fetch actual pp. 636–637 if retaining that range. |
| Vesalius 1555 particular criticisms | In the [Basel 1555 witness](https://www.e-rara.ch/bau_1/content/titleinfo/30361945), printed p. 786 visibly challenges named claims about the anterior ventricles, olfaction, optic nerves, and drainage. Printed p. 797 rejects the described reticular plexus as contrary to observed human anatomy while discussing animal structures. Sampled cached filenames p. 786 and p. 797 match their displayed printed pages. | **PASS FOR BOUNDED PARAPHRASE.** `CLM-028001` and `CLM-028002` are supported as particular positions in this witness. Latin specialist review remains mandatory before public quotation or fine-grained translation. |
| Vesalius edition layers | Nutton's complete [peer-reviewed article](https://doi.org/10.1017/mdh.2012.26) identifies an annotated 1555 copy prepared toward an unpublished third edition, well over a thousand annotations/corrections, predominantly stylistic changes, limited new anatomy, and a 1555 edition anatomically superior but less accurately printed than 1543. | **PASS.** `EVD-028005` and `CLM-028006` accurately bound the edition-history finding. Nutton's “first modern book” language is a historiographic judgment, not predecessor-search proof. |
| Burton 1621 persona and compilation | The complete [EEBO-TCP transcription](https://quod.lib.umich.edu/e/eebo/A17310.0001.001?view=toc) and [BPL/Internet Archive object](https://archive.org/details/anatomyofmelanch00burt_2) support the printed persona's statements about writing, busyness, easing the mind, being affected by melancholy, and compiling many authorities. | **PASS WITH TYPE REPAIR.** Keep persona, satire, compilation, and self-presentation in the same sentence. Retype `CLM-028007` from `individual_experience` to `quotation_or_position` or a tightly bounded `interpretive` claim; this is not transparent autobiography or a patient record. |
| Burton facsimile locators | Every selected Burton image is shifted one printed page: preface files named pp. 3–10 display pp. 4–11; definition files named pp. 45–47 display pp. 46–48; cure files named pp. 364–368 display pp. 365–369. The key self-writing wording appears on displayed p. 6 in file `preface-p-5-leaf-15.jpg`; the definition passage appears on displayed p. 46 in file `definition-p-45-leaf-139.jpg`; trusted-friend advice appears on displayed p. 365; “fair or foul means” appears on displayed p. 366; and gentle-speech/harsh-language language continues on displayed p. 367. | **RETURN LOCATOR DEFECT.** `SRC-028004`, `EVD-028008`, all manifest filenames, and page/canvas pairings must be repaired. Either fetch the intended pp. 3, 45, and 364 and remove/retain the extra pp. 11, 48, and 369 transparently, or relabel the existing images to their displayed pages and narrow every locator. |
| Burton definition, care, and control | The opened primary text presents multiple learned definitions and disputed bodily loci; it prints trusted-friend/physician advice; and it combines gentleness with observation, diversion, manipulation, and “fair or foul means.” | **PASS AFTER LOCATOR REPAIR.** `CLM-028009`–`CLM-028011` are defensible. Keep prescription separate from delivery, consent, prevalence, harm, benefit, and outcome. |
| Burton editions and anachronism | Gowland's complete [specialist chapter](https://discovery.ucl.ac.uk/id/eprint/10054813/) names editions in 1621, 1624, 1628, 1632, 1638, and a posthumous 1651 issue. Berrios's complete [peer-reviewed intervention](https://doi.org/10.1192/bjp.bp.113.138156) rejects simple depression/psychiatric-textbook placement and describes the work's anthology/cento character. | **PASS WITH CLAIM CALIBRATION.** Attribute the six-state chronology to Gowland and label `CLM-028013` **Documented**, unless an independent bibliographic route is added. Split `CLM-028014`: a priority hold (“first psychiatry textbook” not established) is **Unknown**, while the category-equivalence warning is an `interpretive` claim supported by the primary text plus Berrios/Gowland. |
| Elisabeth, 6/16 May 1643 | The [French letter](https://fr.wikisource.org/wiki/Correspondance_avec_%C3%89lisabeth/%C3%89lisabeth_%C3%A0_Descartes_-_La_Haye%2C_16_mai_1643) directly asks how an immaterial thinking soul can determine bodily spirits and reasons through contact, extension, and causal intelligibility. It also requests privacy and invokes medical secrecy. | **PASS.** `CLM-028015` is a bounded quotation/position claim. Do not convert philosophical argument into a modern diagnosis or “first cognitive scientist” claim. |
| Elisabeth, 24 May 1645 | The letter reports physicians' visits, limits on what Elisabeth could tell them, fever/cough, exercise/air/water advice, political and family burdens, and sexed language about her situation. | **PASS.** `CLM-028016` is a mediated first-person account, not proof of a settled diagnosis, physicians' actual causal knowledge, or treatment outcome. |
| Elisabeth, 22 June and 13 September 1645 | The June letter calls Descartes's letters an “antidote” against melancholy but immediately explains why duty and recurrent events made his precepts hard to follow. The September letter asks for a definition of passions and appeals to experience against a simple passions-only-blind-reason account. | **PASS.** `CLM-028017` and `CLM-028018` preserve the counterevidence that blocks cure, passive-muse, and proto-therapy slogans. A French specialist must approve any public translation. |
| Elisabeth transmission and refusal | Bos's complete [transmission study](https://pure.eur.nl/files/126750542/1-s2.0-S0315086009001256-main.pdf) reports that Elisabeth refused publication, Clerselier omitted her side, and the 26 known letters survive through Rosendael manuscript copies with an incompletely known chain and first publication in 1879. | **PASS.** `CLM-028019` and `CLM-028020` correctly foreground copy/editorial mediation, privacy, and her status as a correspondent/co-thinker rather than a patient file. Public quotation requires an explicit ethics decision, not merely a public-domain determination. |
| *Passions* articles 27–34 | In the [1649 first-edition transcription/scan](https://fr.wikisource.org/wiki/Les_Passions_de_l%E2%80%99%C3%A2me/%C3%A9dition_de_1649/Premi%C3%A8re_partie), articles 27–29 give the retained causal vocabulary; article 30 says the soul is truly joined to the whole body; article 31 gives a small gland where its functions are exercised more particularly/immediately; article 32 calls the gland the principal seat; article 33 rejects the heart as seat; and article 34 describes reciprocal bodily/gland movement. | **PASS.** `CLM-028021` and `CLM-028022` accurately resist “soul simply lives in one gland.” Keep “whole-body union,” “principal,” and “immediate” tied to their distinct articles. |
| *Passions* articles 41–50 | The opened sequence gives a normative account of will, judgment, habit, and stronger/weaker souls. | **PASS.** `CLM-028023` correctly classifies this as theory/prescription, not CBT, delivered therapy, or efficacy evidence. Public treatment of the moralized language needs context. |
| *L'Homme* wording and dates | The opened [1664 p. 85 witness](https://fr.wikisource.org/wiki/Page:Descartes_-_L%E2%80%99Homme,_éd._1664.djvu/159) says sensory objects determine movements of gland H within a hypothetical machine account. The [BnF work authority](https://catalogue.bnf.fr/ark:/12148/cb16529108g) gives “Date de l'oeuvre: 1633”; the separate [BnF object record](https://catalogue.bnf.fr/ark:/12148/cb339900366) describes the posthumous 1664 French printed object, Clerselier's editorial role, and its collation. | **PASS.** `CLM-028024` and `CLM-028026` correctly separate work date from surviving printed witness and limit the mechanism claim to the opened page. BnF metadata does not establish a final 1633 authorial text. |
| Descartes omnibus myth claim | `CLM-028025` combines a priority question (“invented dualism”) with a whole-person interpretive question (“reduced a person to a machine”). The current corpus includes no broad predecessor search and no L2 specialist source on the selected *Passions*/*L'Homme* textual-philosophical problem. | **REPAIR.** Split it. The priority claim remains **Unknown/not established**; the corpus-internal interpretive qualification may be **Documented** or **Strongly supported** only after a specialist route and exact burden are supplied. In `DIS-028003`, change “invented dualism ... rejected” to “not established by this packet.” |

## Graph and schema validation

### Counts, identifiers, endpoints, and coverage

The current graph parses as:

| Record class | Expected | Found | Result |
|---|---:|---:|---|
| Sources | 14 | 14 | PASS |
| Evidence | 27 | 27 | PASS |
| Claims | 27 | 27 | PASS |
| Relationships | 41 | 41 | PASS |
| Disagreements | 4 | 4 | PASS |

All source, evidence, claim, relationship, and disagreement identifiers are unique. Every EVD
source endpoint resolves. Every REL source/EVD/CLM endpoint resolves. Every claim has at least
one relationship. Relationship types, L1/L2/L3 levels, A/B/C/D fit values, source types,
verification statuses, claim types, evidence labels, and claim review statuses are from their
current controlled sets.

The dependence design is otherwise good: the Burton transcription and facsimile share
`BUR-1621-TEXT`; the Elisabeth letters share the Rosendael/AT chain; both BnF records share a
catalogue group; and the REL notes generally distinguish corroboration from same-origin
control. The current counts will legitimately change if the required omnibus claims are split.

### Controlled-value failures

1. **Source rights:** every `SRC-028000`–`SRC-028013` `rights_status` is an explanatory phrase,
   not one of `public domain`, `licensed`, `permission required`, `restricted`, `unknown`, or
   `link-only`. Normalize the status and move PDM, CC0, CC BY-SA, repository-term, and reuse
   detail to a rights note/allowed-use field.
2. **Evidence directness:** normalize the `directness` field in `EVD-028007`, `028009`,
   `028010`, `028011`, `028015`–`028018`, and `028022`–`028026` to exactly one of `direct`,
   `reported`, `reconstructed`, `inferred`, or `unknown`. Move mixed jobs such as “direct for
   prescription; unknown for delivery/outcome” to `limitations` or `directness_note`.
3. **Evidence sensitivity:** all 27 EVD records use topic prose rather than the controlled
   public/sensitive/restricted/culturally-controlled/private/unknown status. Normalize the
   status and retain human-remains, coercion, diagnosis, distress, correspondence, and
   dehumanization detail in a separate note.
4. **Claim anachronism risk:** 18 claims combine the low/medium/high value with a reason in one
   field (`CLM-028000`–`028005`, `028007`, `028009`, `028012`, `028015`–`028017`,
   `028020`–`028024`, `028026`). Store the exact value separately from its explanation.
5. **Required keys:** the canonical source, evidence, and claim keys are present. The four DIS
   records contain the required question, scope, positions, relationships, reasons, agreement,
   expert distribution, rejected positions, public wording, date, and reviewer fields.
   Because public drafting remains blocked, relabel `approved_public_wording` as proposed/internal
   wording or add an explicit `approval_status: not approved`; the current field name otherwise
   implies an approval that has not occurred.

## Claim atomicity, labels, and myth controls

- Retype `CLM-028007` as described above. A printed pseudonymous self-presentation is not
  automatically an `individual_experience` record.
- Recalibrate `CLM-028013` to **Documented** and attribute it to Gowland unless an independent
  edition catalogue is added. One specialist chain should not become **Strongly supported** by
  assertion.
- Split `CLM-028014` into a priority hold and a historical-category interpretation. “First
  psychiatry textbook” requires a predecessor search; “melancholy is not simply depression”
  requires bounded historical/interpretive evidence. The two burdens cannot share one
  `priority_or_first` label.
- Split `CLM-028025` into the dualism priority hold and the person/machine interpretation. The
  present `priority_or_first` type cannot carry both.
- Preserve `CLM-028005` as **Unknown**. Nutton's evaluative language and two edition witnesses
  do not establish discovery of the brain or the origin of neuroscience.
- Preserve the packet's rejection of a clean Vesalian overthrow, a modern Burton diagnosis or
  writing cure, Elisabeth as passive patient/muse, Descartes as proto-CBT efficacy evidence,
  and a one-page machine model as a whole anthropology.

## Lived experience, treatment delivery, privacy, and dignity

**PASS, with the publication holds below.**

The packet consistently distinguishes:

- unnamed dissected bodies from the elite anatomist's voice;
- Burton's learned pseudonymous self-presentation from transparent autobiography;
- printed advice from a documented encounter;
- a friend's or physician's proposed action from consent, delivery, benefit, harm, or outcome;
- Elisabeth's copied first-person words from the voices of ordinary or institutionalized
  people who do not appear in this corpus;
- philosophical correspondence from a patient chart; and
- Descartes's theory/prescription from an experiment, clinical treatment, or efficacy record.

Keep treatment delivery and outcome **Unknown** for the Burton and Descartes material. Keep
cadaver identity, procurement, consent, and first-person experience **Unknown** within the
named Vesalius mini-corpus. Do not turn those silences into imagined suffering or consent.

Elisabeth's refusal to publish is historically material even though the texts and old editions
are now publicly accessible. Any public excerpt should be minimal, contextualized, and
ethically approved after considering her stated privacy request, the copy chain, and the
difference between legal reuse and respectful reuse.

Historical anatomical images should not be used as spectacle. A public asset decision must
record why the image is necessary, what it teaches, the unknown identity/consent of represented
bodies, crop/alt-text choices, and a repository-specific permission/attribution route.

## Cache, rights, and reproducibility

The ignored cache itself is intact:

- 38 manifest rows match 38 local objects;
- all 38 byte counts match;
- all 38 SHA-256 values match;
- no extra or missing object was found;
- the whole packet cache is ignored by git;
- JPEGs are valid images and JSON manifests parse;
- the two e-rara files named `.zip` are, as disclosed, UTF-8 plain-text responses rather than
  ZIP containers; and
- no cached copyrighted Gowland, Berrios, Nutton, Bos, or modern translation full text was
  placed in the packet cache.

Repairs are still required:

1. `SRC-028000.cached_file` says “11 files” but its described and actual subtree has seven:
   one manifest, one plain-text OCR response, and five JPEGs.
2. Correct the Vesalius 1543 and Burton page filenames/locators described above, then recompute
   every affected byte/hash manifest row even if the underlying bytes are unchanged.
3. The protocol requires every cached file's exact filename/format, lawful URL/access date,
   SHA-256, rights and allowed use, restriction class, and safe location. The current manifest
   gives only filename/bytes/hash, while source-level prose incompletely supplies the rest.
   Add a per-object source ID, access URL/date, format/transformation note, normalized rights
   status, and allowed-use field.
4. Keep IA page images private until the repository's image-reuse terms are checked. Separate
   the public-domain status of historical text/scan from the CC0 or CC BY-SA status of modern
   transcriptions and from repository terms for downloaded derivatives.

## Publication-only specialist gaps

These gaps do not require expansion of the internal packet before its locator/schema repair,
but they block public wording or asset use:

1. **Vesalius:** obtain a Latin specialist's passage-level check of the exact 1543/1555 Book VII
   variants, especially the olfaction/ventricle and human/animal reticular-plexus paraphrases.
   Nutton is strong edition context but is not the missing passage-specific translation review.
2. **Burton:** if later-edition language is quoted or a change-over-time story is written, open
   the relevant 1624–1651 witnesses rather than importing their wording into 1621. Obtain a
   specialist check for Latin/Greek cited-author material before translating it.
3. **Elisabeth/Descartes:** obtain a French specialist/critical-edition check for the selected
   letters and *Passions* articles, plus an ethics decision for quoting refused private
   correspondence.
4. **Descartes textual history:** add an L2 specialist route on the *Passions* whole-body/gland
   sequence and the composition/editorial history of *L'Homme*. Bos covers correspondence
   transmission; BnF catalogues metadata; neither fills this interpretive/textual-history job.
5. **Images:** complete asset-specific rights, attribution, accessibility, and dignity review
   before any e-rara, IA, Commons, or Wikisource-derived image is published.

## Mandatory repair checklist

1. Reconcile the five 1543 Vesalius cache images with their displayed pages; fetch actual
   pp. 636–637 if the asserted pp. 633–637 range is retained; repair `SRC-028000`,
   `EVD-028000`, `EVD-028001`, filenames, and manifest rows.
2. Reconcile all 16 Burton images with displayed pages/canvases; repair `SRC-028004`,
   `EVD-028008`, page ranges, filenames, and manifest rows. Recheck all Burton EVD locators
   after the correction.
3. Correct the `SRC-028000.cached_file` object count from 11 to seven.
4. Normalize all 14 source rights statuses and add separate rights/allowed-use notes.
5. Normalize the 13 EVD directness fields, all 27 EVD sensitivity fields, and the 18 compound
   claim anachronism-risk fields without losing their explanatory qualifications.
6. Expand the cache manifest to the per-object provenance/rights fields required by the source
   capture protocol; preserve ignore status and recompute hashes after any rename/change.
7. Retype `CLM-028007`; recalibrate/attribute `CLM-028013`; split `CLM-028014` and
   `CLM-028025`; rewire REL/DIS links and recompute counts/labels.
8. In `DIS-028003`, change the unsearched “invented dualism” position from rejected to not
   established. Mark all four DIS public-wording fields as proposed/unapproved until human
   approval.
9. Run the full ID, endpoint, controlled-value, claim-coverage, dependence, and cache-integrity
   checks again. Second-check every repaired page image visually against the printed foliation.
10. Preserve all current public holds. Do not draft or publish until the coordinator records a
    clean second review and the publication-only specialist/rights decisions are complete.

## Final verdict

**RETURN.** The main historical interpretations are viable, the graph is fully connected, and
the empathy/uncertainty controls are strong. Exact-locator integrity and controlled-value
conformance are mandatory, however. The two cache-page shifts make several “directly opened”
statements literally inaccurate, so this packet is not ready for reconciliation until the
listed repairs are completed and independently replayed.

## Closure replay — 2026-08-19

**Closure verdict:** **PASS WITH GAPS.** This clean independent replay supersedes the
`RETURN` verdict above for the repaired packet state. It clears the internal reconciliation
gate only. Public prose and asset publication remain unauthorized.

### Repairs independently replayed

- **Locators and page images:** all five renamed Vesalius 1543 objects visibly display printed
  pp.631–635, and `SRC-028000`, `EVD-028000`, `EVD-028001`, `EVD-028006`, the seven-object
  count, filenames, and manifest rows now agree. The unchanged pivotal 1555 objects were
  replayed at printed pp.786 and 797. All sixteen Burton objects visibly display pp.4–11,
  46–48, and 365–369; the preface/persona, plural-definition, trusted-friend, gentle-speech,
  observation, diversion, and “fair or foul means” locators now match the opened leaves.
- **Graph and schemas:** all records parse at exactly **14 SRC / 27 EVD / 29 CLM / 45 REL /
  4 DIS**. IDs are unique; every EVD source and every REL source/EVD/CLM endpoint resolves;
  every claim has relationship coverage; dependence groups remain explicit; and level,
  claim-fit, source-rights, evidence-directness/sensitivity, claim-type/rating/risk, and
  disagreement-approval fields conform to their controlled sets.
- **Split claims and relationships:** `CLM-028014` is the Unknown Burton priority hold and
  `CLM-028027` is the separate category non-equivalence interpretation. `CLM-028025` is the
  Unknown dualism-priority hold and `CLM-028028` is the bounded, Plausible person/machine
  interpretation pending the named L2 route. `REL-028041`–`REL-028044` resolve, use appropriate
  burdens, and supply the intended Gowland/Berrios/*Passions*/*L'Homme* qualifications.
  `CLM-028007` is correctly a quotation/position claim; `CLM-028013` is attributed to Gowland.
- **Disagreements and myth controls:** all four DIS records are explicitly `not approved`.
  The packet no longer calls the unsearched dualism-invention claim rejected, and it keeps
  the separate overbroad person-as-machine slogan rejected. No repaired claim promotes
  prescription to delivered care or outcome, self-writing to cure, private correspondence to
  a patient file, a posthumous witness to a finalized 1633 text, or selected anatomy to a
  global priority claim.
- **Cache and provenance:** **38 manifest rows equal 38 ignored cache objects**; every local
  byte count and SHA-256 matches. Each row supplies source binding, lawful URL, access date,
  format/transformation, normalized rights state, allowed use, restriction class, and safe
  location. Twenty-four directly retrievable objects were re-fetched byte-identically; the
  fourteen e-rara page objects resolve to service IDs present in the cached IIIF manifests.
  Historic-text status remains separated from repository-derivative reuse permission.
- **Holds:** treatment delivery, consent, benefit, harm, prevalence, and outcome remain
  Unknown where the record supplies only printed prescription or correspondence. Elisabeth's
  first-person writing remains edition/copy mediated and subject to her refusal-to-publish and
  privacy context. Anatomical images remain subject to asset-specific rights, accessibility,
  attribution, and dignity review. No claim or disagreement is marked approved, and the handoff
  still says `Public prose: not authorized`.

### Publication-only gaps retained

The packet still requires passage-level Latin review for Vesalius; French/critical-edition
review and an explicit Elisabeth privacy/necessity decision; an L2 specialist route for the
selected Descartes textual and philosophical layers; direct later Burton witnesses or a
critical apparatus for change-over-time claims; and asset-specific rights/dignity review.
Treatment delivery and recipient outcomes, contemporary reception, non-elite and non-European
voices, and present-day clinical comparison also remain outside this packet. These gaps do not
block internal reconciliation, but each relevant gap continues to block publication wording,
quotation, comparison, or image use.

**Closure decision:** admit the repaired packet to internal seam reconciliation as
**PASS WITH GAPS**. Do not draft or publish public prose from it until the coordinator records
completion of the applicable specialist, ethics, current-science, and asset gates.
