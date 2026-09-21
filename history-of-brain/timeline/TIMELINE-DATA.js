/*
 * Canonical data for the local History of the Mind timeline prototype.
 * Work state: Mapped. These records are not article drafts or claim-ledger entries.
 * Keep aligned with ../outline/MASTER-CONTENT-OUTLINE.md.
 */
window.HISTORY_TIMELINE_DATA = {
  meta: {
    title: "The Human Mind Through Time",
    version: "0.2",
    updated: "Aug. 19, 2026",
    state: "Mapped",
    stateNote: "Placement is supported by checked research foundations and bounded packet review. Public-page claim verification and publication approval have not begun.",
    scaleNote: "The bands are equal navigation spaces, not a proportional date scale. Their dates overlap because historical change did not happen everywhere at once."
  },
  sources: {
    trepanation: { label: "Ramirez Rozzi & Froment — Neolithic cranial intervention", url: "https://doi.org/10.1038/s41598-018-23914-1" },
    shanidar: { label: "Pomeroy et al. — Shanidar Cave", url: "https://doi.org/10.15184/aqy.2019.207" },
    neanderthalCare: { label: "Spikins et al. — Neanderthal care", url: "https://doi.org/10.1080/00438243.2018.1433060" },
    ludlul: { label: "Electronic Babylonian Library — Ludlul bēl nēmeqi", url: "https://www.ebl.lmu.de/corpus/L/2/2" },
    edwinSmith: { label: "National Library of Medicine — Edwin Smith Papyrus", url: "https://www.nlm.nih.gov/pubs/techbull/ma10/ma10_hmd_reprint_papyrus.html" },
    lettersDead: { label: "UCL Digital Egypt — Letters to the Dead", url: "https://www.ucl.ac.uk/museums-static/digitalegypt/literature/religious/lettersdead.html" },
    nubia: { label: "Smith — Nubia beyond Egypt's shadow", url: "https://journals.librarypublishing.arizona.edu/jaei/article/1099/galley/1094/download/" },
    sacredDisease: { label: "Hippocrates — On the Sacred Disease", url: "https://classics.mit.edu/Hippocrates/sacred.html" },
    epidaurus: { label: "Gregis — Healings by Asclepius", url: "https://doi.org/10.14277/2532-6848/Axon-1-2-17-08" },
    celsus: { label: "Celsus — De Medicina 3.18", url: "https://scaife.perseus.org/reader/urn:cts:latinLit:phi0836.phi002.perseus-lat5:3.18/?right=perseus-eng2" },
    galenPatients: { label: "Mattern — Galen and the Words of Patients", url: "https://doi.org/10.1017/mdh.2024.41" },
    indiaPsych: { label: "Jain et al. — History of psychiatry in India", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6198594/" },
    indianBuddhistMind: { label: "SEP — Mind in Indian Buddhist philosophy", url: "https://plato.stanford.edu/entries/mind-indian-buddhism/" },
    chineseMind: { label: "SEP — Heart-mind in Chinese philosophy", url: "https://plato.stanford.edu/entries/chinese-mind/" },
    chineseEmotion: { label: "SEP — Emotions in early Chinese philosophy", url: "https://plato.stanford.edu/entries/emotions-chinese/" },
    chineseMadness: { label: "Chen — Pre-modern madness in China", url: "https://doi.org/10.4324/9780203740262-18" },
    ancientExchange: { label: "Thomas — Greek and Babylonian knowledge circulation", url: "https://pubmed.ncbi.nlm.nih.gov/17152173/" },
    lateAntique: { label: "Crislip — Spirituality and illness in late-antique Gaza", url: "https://doi.org/10.1177/00209643221146234" },
    hospitals: { label: "Underwood — Healthcare in late antiquity", url: "https://doi.org/10.1525/sla.2018.2.3.342" },
    translateScience: { label: "NCBI Bookshelf — Why Translate Science?", url: "https://www.ncbi.nlm.nih.gov/books/NBK622612/" },
    islamicMind: { label: "SEP — Arabic and Islamic philosophy of mind", url: "https://plato.stanford.edu/entries/arabic-islamic-mind/" },
    bimaristan: { label: "Dols — Insanity and its treatment in Islamic society", url: "https://doi.org/10.1017/S0025727300046287" },
    jewishTranslation: { label: "Freudenthal & Fontaine — Jewish medicine and translation", url: "https://doi.org/10.1017/S0957423915000090" },
    dunhuang: { label: "UNESCO — Dunhuang", url: "https://en.unesco.org/silkroad/content/dunhuang" },
    buddhistMedicine: { label: "Salguero — Translating Buddhist Medicine", url: "https://www.pennpress.org/9780812246117/translating-buddhist-medicine-in-medieval-china/" },
    timbuktu: { label: "Library of Congress — Islamic manuscripts from Mali", url: "https://www.loc.gov/collections/islamic-manuscripts-from-mali/about-this-collection/" },
    unani: { label: "Attewell — Unani and the Indian body", url: "https://doi.org/10.1524/para.2009.0008" },
    babaylan: { label: "Tremml-Werner — Manila–Mexico microhistory", url: "https://doi.org/10.1093/pastj/gtz031" },
    descartes: { label: "SEP — Descartes and the pineal gland", url: "https://plato.stanford.edu/entries/pineal-gland/" },
    sanHipolito: { label: "Ramos — Hospital de San Hipólito", url: "https://doi.org/10.1017/tam.2020.41" },
    atlanticAfrica: { label: "Kananoja — Healing knowledge in Atlantic Africa", url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/0E6627303E0A532A5C9A0232F5DD2D91/9781108491259c6_155-186.pdf/treating-their-symptoms.pdf" },
    petitions: { label: "Willis — Madness, emotion and the archive", url: "https://doi.org/10.1017/S0080440125100340" },
    colonialIndia: { label: "Ernst — Colonial North Indian asylum archives", url: "https://doi.org/10.1093/oso/9780199497780.003.0004" },
    singapore: { label: "Lin — Chinese patients and colonial Singapore", url: "https://doi.org/10.1215/18752160-3460689" },
    truthCanada: { label: "National Centre for Truth and Reconciliation — Reports", url: "https://nctr.ca/records/reports/" },
    stolenGenerations: { label: "Australian Human Rights Commission — Bringing Them Home", url: "https://humanrights.gov.au/bringing-them-home/index.html" },
    indochina: { label: "Edington — Colonial psychiatry in French Indochina", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8437878/" },
    antic: { label: "Antić — Postcolonial and transcultural psychiatry in Africa", url: "https://doi.org/10.1177/0952695121993702" },
    fanon: { label: "IMEC — Frantz Fanon archive", url: "https://imec-archives.com/archives/fonds/178FNN" },
    dsm: { label: "American Psychiatric Association — DSM history", url: "https://www.psychiatry.org/psychiatrists/practice/dsm/about-dsm/history-of-the-dsm" },
    whare: { label: "New Zealand Ministry of Health — Te Whare Tapa Whā", url: "https://www.health.govt.nz/maori-health/maori-health-models/te-whare-tapa-wha" },
    caracas: { label: "PAHO — Declaration of Caracas", url: "https://www3.paho.org/hq/dmdocuments/2008/DECLARATIONOFCARACAS.pdf" },
    crpd: { label: "United Nations — CRPD", url: "https://www.un.org/development/desa/disabilities/convention.html" },
    mhgap: { label: "WHO — mhGAP", url: "https://www.who.int/publications/i/item/9789241596206" },
    friendshipBench: { label: "Chibanda et al. — Friendship Bench trial", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4865009/" },
    marshall: { label: "U.S. DOE — Marshall Islands Program", url: "https://www.energy.gov/ehss/marshall-islands-program" },
    whoAI: { label: "WHO — Ethics and governance of AI for health", url: "https://www.who.int/publications/i/item/9789240029200" },
    whoLLM: { label: "WHO — Warning on untested LLMs in health", url: "https://www.who.int/news/item/16-05-2023-who-calls-for-safe-and-ethical-ai-for-health" }
  },
  bands: [
    {
      id: "T00", short: "Before writing", dates: "Deep prehistory → local written archives",
      kicker: "Bodies before biographies", color: "#c6f24e",
      job: "Learn what physical evidence can show—and where stories about motive, feeling, belief, and diagnosis must stop.",
      caution: "No direct voice survives. Material traces may support intervention, survival, assistance, or violence; they cannot report an inner experience.",
      regions: ["Global", "West Asia", "Africa", "Europe"], sources: ["trepanation", "shanidar", "neanderthalCare"],
      topics: [
        { id: "T00-A", title: "How can we study minds before words survive?", summary: "Archaeology, paleopathology, burial context, disability, and the difference between an observed injury and an inferred motive.", themes: ["Evidence", "Experience"], regions: ["Global"] },
        { id: "T00-B", title: "Trepanation: what can a hole in a skull tell us?", summary: "Compare physical interventions and healing without automatically assigning a psychiatric purpose or spirit-release story.", themes: ["Brain", "Treatment", "Evidence"], regions: ["Global"], sources: ["trepanation"] },
        { id: "T00-C", title: "Did prehistoric communities care for disabled people?", summary: "Use bounded cases such as Shanidar to compare survival, assistance, interdependence, and competing interpretations.", themes: ["Care", "Disability", "Experience"], regions: ["West Asia"], sources: ["shanidar", "neanderthalCare"] },
        { id: "T00-D", title: "Evidence lab: from bone to claim", summary: "Practice separating documented alteration, strongly supported survival, plausible assistance, disputed motive, and unknown experience.", themes: ["Evidence"], regions: ["Global"] }
      ]
    },
    {
      id: "T01", short: "First written worlds", dates: "c. 3200–500 BCE",
      kicker: "Writing changes the archive", color: "#e9b44c",
      job: "See what early writing adds without pretending that writing invented distress, care, or the self—or that medicine and ritual were opposites.",
      caution: "Scribes, institutions, preservation, excavation, and translation decide what reaches us. First-person literature is not automatically autobiography.",
      regions: ["West Asia", "North Africa", "Nile worlds"], sources: ["ludlul", "edwinSmith", "lettersDead", "nubia"],
      topics: [
        { id: "T01-A", title: "Mesopotamian signs, remedies, relationships, and suffering", summary: "Diagnostic-prognostic tablets, material remedies, ritual expertise, divine agency, households, and social consequence in named texts and settings.", themes: ["Diagnosis", "Treatment", "Ideas"], regions: ["West Asia"], sources: ["ludlul"] },
        { id: "T01-B", title: "Is Ludlul bēl nēmeqi a patient memoir?", summary: "A learned first-person account of bodily, social, and divine suffering opens a question about literary voice—not a shortcut to biography or diagnosis.", themes: ["Experience", "Evidence"], regions: ["West Asia"], sources: ["ludlul"] },
        { id: "T01-C", title: "Egypt's heart, brain, body, family, and the dead", summary: "Put trauma observation beside heart-centered vocabularies and family help-seeking rather than turning one text into a complete Egyptian theory.", themes: ["Brain", "Care", "Ideas"], regions: ["North Africa", "Nile worlds"], sources: ["edwinSmith", "lettersDead"] },
        { id: "T01-D", title: "Read the Edwin Smith Papyrus fairly", summary: "What a trauma document says about wounds and cranial structures—and why that is not the same as modern neuroscience.", themes: ["Brain", "Evidence"], regions: ["North Africa", "Nile worlds"], sources: ["edwinSmith"] },
        { id: "T01-E", title: "Nubia and Kush beyond Egypt's shadow", summary: "A distinct evidence lane for Nile civilizations whose histories cannot be reduced to their northern neighbor.", themes: ["Ideas", "Evidence"], regions: ["Africa", "Nile worlds"], sources: ["nubia"] },
        { id: "T01-F", title: "Breath, heart, spirit, and embodied selves", summary: "Follow language-specific ideas of life, agency, feeling, and suffering without translating every word as mind, soul, or emotion.", themes: ["Ideas", "Emotion", "Translation"], regions: ["West Asia"] },
        { id: "T01-G", title: "What the first written archives leave out", summary: "Non-literate people, children, enslaved people, rural households, and most women survive unevenly through elite records.", themes: ["Evidence", "Experience", "Power"], regions: ["Global"] }
      ]
    },
    {
      id: "T02", short: "Many classical worlds", dates: "c. 800 BCE–600 CE",
      kicker: "No single classical age", color: "#df7b55",
      job: "Place several traditions beside one another without forcing them into one developmental ladder or treating modern categories as timeless.",
      caution: "Explain each tradition on its own terms before comparing. Similarity does not prove borrowing, and ancient terms are not DSM or ICD diagnoses.",
      regions: ["Mediterranean", "South Asia", "East Asia", "West Asia", "Americas"], sources: ["sacredDisease", "epidaurus", "celsus", "galenPatients", "indiaPsych", "indianBuddhistMind", "chineseMind", "chineseEmotion", "chineseMadness", "ancientExchange"],
      topics: [
        { id: "T02-A", title: "Greek brain, soul, regimen, and sanctuary", summary: "Naturalizing argument, ritual healing, philosophy, diet, environment, and pilgrimage coexisted rather than replacing one another in a single revolution.", themes: ["Brain", "Treatment", "Ideas"], regions: ["Mediterranean"], sources: ["sacredDisease", "epidaurus"] },
        { id: "T02-B", title: "Did natural explanations replace gods and ritual?", summary: "A myth-check on the popular superstition-to-science story using named medical and sanctuary evidence.", themes: ["Ideas", "Evidence", "Treatment"], regions: ["Mediterranean"], sources: ["sacredDisease", "epidaurus"] },
        { id: "T02-C", title: "Roman patients, healers, households, law, and Galen", summary: "A plural medical marketplace shaped by money, status, enslavement, household authority, temples, law, and learned synthesis.", themes: ["Care", "Power", "Experience"], regions: ["Mediterranean"], sources: ["celsus", "galenPatients"] },
        { id: "T02-D", title: "South Asian selves, manas, suffering, and transformation", summary: "Layered Vedic, Upaniṣadic, Ayurvedic, Buddhist, and other arguments about mind, conduct, body, suffering, and liberation.", themes: ["Ideas", "Care", "Wellness"], regions: ["South Asia"], sources: ["indiaPsych", "indianBuddhistMind"] },
        { id: "T02-E", title: "Why unmada is not simply schizophrenia", summary: "A terminology bridge that preserves historical meanings instead of using a current label as a translation.", themes: ["Diagnosis", "Translation", "Evidence"], regions: ["South Asia"], sources: ["indiaPsych"] },
        { id: "T02-F", title: "Chinese xin: when heart and mind are not opposites", summary: "Cognition, intention, desire, mood, emotion, and moral guidance meet inside changing heart-mind debates.", themes: ["Ideas", "Emotion", "Translation"], regions: ["East Asia"], sources: ["chineseMind"] },
        { id: "T02-G", title: "Did early Chinese thinkers mean emotion by qing?", summary: "A word-history page on semantic change, relation, morality, and the danger of a one-word modern equivalent.", themes: ["Emotion", "Translation"], regions: ["East Asia"], sources: ["chineseEmotion"] },
        { id: "T02-H", title: "Dian, kuang, and plural care before modern TCM", summary: "Wind, phlegm-fire, heart disorders, emotion, drugs, needling, conversation, and ritual formed changing medical worlds.", themes: ["Diagnosis", "Treatment", "Translation"], regions: ["East Asia"], sources: ["chineseMadness"] },
        { id: "T02-I", title: "Who had a choice of healer?", summary: "Status, gender, enslavement, household authority, cost, travel, and local availability constrained the apparent medical marketplace.", themes: ["Care", "Power", "Experience"], regions: ["Global"] },
        { id: "T02-J", title: "Research door: Indigenous American worlds before conquest", summary: "Reserve a first-class, community-aware lane instead of reconstructing preconquest lives from colonial records alone.", themes: ["Ideas", "Evidence", "Power"], regions: ["Americas"] }
      ]
    },
    {
      id: "T03", short: "Translation worlds", dates: "c. 300–1200 CE",
      kicker: "Knowledge moves and changes", color: "#9676b7",
      job: "Replace the dark-ages-and-rediscovery plot with multilingual work in monasteries, courts, ports, hospitals, shrines, libraries, households, and streets.",
      caution: "Translation is interpretation. A manuscript proves a surviving text and contact; it does not prove population-wide belief or unchanged meaning.",
      regions: ["West Asia", "North Africa", "Europe", "Central Asia", "South Asia", "East Asia", "West Africa"], sources: ["lateAntique", "hospitals", "translateScience", "islamicMind", "bimaristan", "jewishTranslation", "dunhuang", "buddhistMedicine", "timbuktu"],
      topics: [
        { id: "T03-A", title: "Late-antique souls, troubling thoughts, illness, and charity", summary: "Introspection, ascetic discipline, natural and demonic explanations, caregiving correspondence, and unevenly medicalized institutions.", themes: ["Ideas", "Care", "Experience"], regions: ["West Asia", "North Africa", "Europe"], sources: ["lateAntique", "hospitals"] },
        { id: "T03-B", title: "What was acedia before anyone called it depression?", summary: "A monastic category of troubling thought and practice whose setting and moral meanings resist a simple modern diagnosis.", themes: ["Emotion", "Diagnosis", "Translation"], regions: ["West Asia", "North Africa", "Europe"], sources: ["lateAntique"] },
        { id: "T03-C", title: "Greek–Syriac–Arabic was a web, not a relay race", summary: "Patrons, translators, families, physicians, editors, and libraries selected, corrected, and remade knowledge.", themes: ["Exchange", "Translation", "Professions"], regions: ["West Asia", "North Africa", "Europe"], sources: ["translateScience"] },
        { id: "T03-D", title: "What a translator such as Hunayn actually did", summary: "Translation as collation, criticism, vocabulary-building, teaching, and professional work—not passive preservation.", themes: ["Translation", "Professions", "Evidence"], regions: ["West Asia"], sources: ["translateScience"] },
        { id: "T03-E", title: "Mind, memory, imagination, and emotion in Arabic and Persian thought", summary: "Named writers and debates about faculties, body, ethics, revelation, and knowledge rather than a timeless Islamic psychology.", themes: ["Ideas", "Emotion", "Brain"], regions: ["West Asia", "North Africa", "Central Asia"], sources: ["islamicMind"] },
        { id: "T03-F", title: "Did the first psychiatric hospital exist?", summary: "Compare named bimaristans, endowments, staffing, household care, confinement, and later legend without awarding an unsupported world-first.", themes: ["Care", "Institutions", "Evidence"], regions: ["West Asia", "North Africa"], sources: ["bimaristan"] },
        { id: "T03-G", title: "Jewish thinkers inside Arabic, Hebrew, and Latin worlds", summary: "Jewish scholars as readers, physicians, translators, critics, and producers—not merely bridges between other civilizations.", themes: ["Exchange", "Translation", "Ideas"], regions: ["West Asia", "North Africa", "Europe"], sources: ["jewishTranslation"] },
        { id: "T03-H", title: "Dunhuang: what a manuscript crossroads can prove", summary: "Multilingual evidence of contact, communities, and movement across Central and East Asia, paired with explicit inference limits.", themes: ["Exchange", "Evidence", "Translation"], regions: ["Central Asia", "East Asia"], sources: ["dunhuang"] },
        { id: "T03-I", title: "How Buddhist mind and medicine traveled", summary: "Overland and maritime translators, monasteries, courts, ports, manuscripts, and changing technical vocabulary.", themes: ["Exchange", "Ideas", "Care"], regions: ["South Asia", "Central Asia", "East Asia", "Southeast Asia"], sources: ["buddhistMedicine", "dunhuang"] },
        { id: "T03-J", title: "Timbuktu manuscripts—and the histories they cannot represent alone", summary: "Written West African scholarly worlds are a vital anchor, not a proxy for every African knowledge tradition.", themes: ["Evidence", "Exchange", "Care"], regions: ["West Africa"], sources: ["timbuktu"] }
      ]
    },
    {
      id: "T04", short: "Regional syntheses & empires", dates: "c. 1100–1700 CE",
      kicker: "No universal Renaissance", color: "#4f8f9d",
      job: "Keep regional knowledge-making visible as print, conquest, slavery, mission, and empire create new contact zones and coercive institutions.",
      caution: "Exchange under conquest is not a neutral meeting of ideas. Colonial records reveal encounters while filtering people through imposed categories.",
      regions: ["South Asia", "East Asia", "Southeast Asia", "Europe", "Americas", "Africa", "Atlantic world"], sources: ["unani", "babaylan", "descartes", "sanHipolito", "atlanticAfrica", "petitions"],
      topics: [
        { id: "T04-A", title: "Persianate and South Asian medicine as entangled history", summary: "Unani, Ayurveda, Siddha, Buddhist, court, shrine, household, and market practices changed through contact and local use.", themes: ["Exchange", "Care", "Ideas"], regions: ["South Asia", "Central Asia", "West Asia"], sources: ["unani"] },
        { id: "T04-B", title: "East Asian medicine after the classics: change, not timeless continuity", summary: "Song–Qing change, Kampo, Korean and Vietnamese lineages, and vernacular practices require their own institutions and texts.", themes: ["Care", "Ideas", "Translation"], regions: ["East Asia", "Southeast Asia"] },
        { id: "T04-C", title: "Southeast Asian ritual specialists through colonial description", summary: "What accounts of babaylan or katalonan reveal, translate, criminalize, and fail to preserve.", themes: ["Care", "Power", "Evidence"], regions: ["Southeast Asia"], sources: ["babaylan"] },
        { id: "T04-D", title: "Care and control in medieval and early modern Europe", summary: "Households, charity, law, medicine, religion, Bethlem, courts, and custody varied across jurisdictions.", themes: ["Care", "Power", "Institutions"], regions: ["Europe"] },
        { id: "T04-E", title: "Were accused witches simply mentally ill women?", summary: "A shortcut that distorts legal, religious, political, gendered, medical, and social evidence.", themes: ["Diagnosis", "Power", "Evidence"], regions: ["Europe", "Atlantic world"] },
        { id: "T04-F", title: "Melancholy before depression", summary: "Follow a changing, many-sided category without treating every historical use as today's mood disorder.", themes: ["Emotion", "Diagnosis", "Translation"], regions: ["Europe", "West Asia"] },
        { id: "T04-G", title: "Print, anatomy, Burton, Descartes, and the mechanical body", summary: "European changes in circulation and models of body and mind—not the moment humanity discovered the brain.", themes: ["Brain", "Ideas", "Media"], regions: ["Europe"], sources: ["descartes"] },
        { id: "T04-H", title: "Did Descartes invent mind–body dualism?", summary: "A claim-check on interaction, embodiment, passions, the pineal gland, and the later label dualism rather than a one-line founder story.", themes: ["Brain", "Ideas", "Evidence"], regions: ["Europe"], sources: ["descartes"] },
        { id: "T04-I", title: "Nahua concepts in a colonial translation zone", summary: "Head, heart, liver, animating forces, medicine, mission, and the risks of reading preconquest life through conquest-era texts.", themes: ["Ideas", "Translation", "Power"], regions: ["Americas"] },
        { id: "T04-J", title: "San Hipólito: hospital, charity, asylum, colonial institution", summary: "A named institution where care, poverty, colonization, law, and confinement resist a single modern label.", themes: ["Institutions", "Care", "Power"], regions: ["Americas"], sources: ["sanHipolito"] },
        { id: "T04-K", title: "Atlantic African healing worlds under slavery and commerce", summary: "African, European, and Indigenous knowledge was reassembled inside violent systems of forced movement and unequal power.", themes: ["Exchange", "Care", "Power"], regions: ["Africa", "Atlantic world", "Americas"], sources: ["atlanticAfrica"] },
        { id: "T04-L", title: "A person writes distress before psychiatry", summary: "Letters and petitions show self-description, need, reputation, religion, confinement, and the later power of cataloguers.", themes: ["Experience", "Evidence", "Power"], regions: ["Europe"], sources: ["petitions"] }
      ]
    },
    {
      id: "T05", short: "Classification & confinement", dates: "c. 1650–1870",
      kicker: "Reform can still rule", color: "#d75d42",
      job: "Explain the growth of institutional and medical jurisdiction without narrating a clean rescue from superstition.",
      caution: "Refuge and repression can coexist. Compare the institution's stated purpose with rules, labor, restraint, testimony, discharge, and who could leave.",
      regions: ["Europe", "South Asia", "Southeast Asia", "Africa", "Caribbean", "Latin America", "Oceania", "Atlantic world"], sources: ["colonialIndia", "singapore"],
      topics: [
        { id: "T05-A", title: "Nerves, sensibility, madness, and competing Enlightenments", summary: "Changing explanations and reform projects in specific national, imperial, religious, domestic, and medical settings.", themes: ["Ideas", "Emotion", "Diagnosis"], regions: ["Europe", "Atlantic world"] },
        { id: "T05-B", title: "The asylum as refuge, treatment, workplace, business, and control", summary: "Public, private, charitable, penal, military, colonial, and family routes produced different institutional lives.", themes: ["Institutions", "Care", "Power"], regions: ["Global"] },
        { id: "T05-C", title: "Did moral treatment feel moral?", summary: "Put humane aspirations beside ordered routines, labor, paternal authority, letters, complaint, escape, and discharge.", themes: ["Treatment", "Experience", "Power"], regions: ["Europe", "North America"] },
        { id: "T05-D", title: "Who could commit, pay for, visit, or leave?", summary: "Family petitions, certification, property, class, gender, race, law, and local economics shaped an institutional path.", themes: ["Power", "Institutions", "Experience"], regions: ["Global"] },
        { id: "T05-E", title: "Enslavement, racial science, resistance, and diagnostic authority", summary: "Trace how categories served power, how resistance was pathologized, and whose testimony survived.", themes: ["Power", "Diagnosis", "Experience"], regions: ["Atlantic world", "Americas", "Caribbean"] },
        { id: "T05-F", title: "The asylum enters colonial South and Southeast Asia", summary: "Armies, ports, policing, migration, repatriation, family economies, patient labor, and imported law.", themes: ["Institutions", "Power", "Exchange"], regions: ["South Asia", "Southeast Asia"], sources: ["colonialIndia", "singapore"] },
        { id: "T05-G", title: "Asylums across Africa, the Caribbean, Latin America, and Oceania", summary: "A comparison that keeps local dates, racial orders, labor systems, laws, and community alternatives distinct.", themes: ["Institutions", "Power", "Care"], regions: ["Africa", "Caribbean", "Latin America", "Oceania"] },
        { id: "T05-H", title: "Who gets believed in the Ann Pratt official dossier?", summary: "Elicited examinations, reported experiences, worker evidence, administrative defense, hostile credibility framing, and bounded procedural agency form a constructed evidence chain—not an impartial verdict or Pratt's still-unopened original publication.", themes: ["Experience", "Power", "Institutions", "Evidence"], regions: ["Caribbean"] },
        { id: "T05-I", title: "Psychology before the laboratory", summary: "Faculty psychology, association, perception, education, mesmerism, phrenology, measurement, and public spectacle.", themes: ["Psychology", "Ideas", "Evidence"], regions: ["Europe", "North America"] },
        { id: "T05-J", title: "Six letters, six mediation chains", summary: "Enslaved people in St. Thomas wrote, dictated, translated, petitioned, organized, and used emotional, bodily, kinship, and religious language from 1738 to 1753; every item retains its writer, scribe, translation, copy, and archive limits.", themes: ["Experience", "Translation", "Power", "Evidence"], regions: ["Caribbean", "Atlantic world"] }
      ]
    },
    {
      id: "T06", short: "Disciplines & mass institutions", dates: "c. 1840–1914",
      kicker: "Experts, instruments, empires", color: "#3b6e8f",
      job: "Tell how psychiatry, psychology, brain science, nursing, and social work formed through institutions, workers, subjects, empires, and critics.",
      caution: "A laboratory or association is not a discipline's single birthplace. Professional history must include the people measured, confined, treated, employed, and excluded.",
      regions: ["Global", "Europe", "North America", "South Asia", "East Asia", "Southeast Asia", "Latin America", "Oceania"], sources: ["truthCanada", "stolenGenerations"],
      topics: [
        { id: "T06-A", title: "How psychiatry became a profession", summary: "Licensing, journals, associations, institutions, alienism, neurology, law, and authority changed who could name and certify madness.", themes: ["Professions", "Diagnosis", "Power"], regions: ["Global"] },
        { id: "T06-B", title: "Psychology's many laboratories", summary: "Experimental networks, universities, instruments, subjects, methods, teaching, and multiple national projects replace a single-birthplace myth.", themes: ["Psychology", "Professions", "Evidence"], regions: ["Global"] },
        { id: "T06-C", title: "What happened inside the expanding asylum?", summary: "Admissions, chronicity, labor, restraint, medication, abuse, community ties, death, discharge, and patient writing.", themes: ["Institutions", "Experience", "Treatment"], regions: ["Global"] },
        { id: "T06-D", title: "How imperial categories traveled and changed", summary: "British, French, Dutch, Japanese, and settler-colonial institutions produced knowledge through local translation and resistance.", themes: ["Exchange", "Power", "Diagnosis"], regions: ["Global"] },
        { id: "T06-E", title: "Degeneration, heredity, race, gender, sexuality, and class", summary: "Scientific institutions made hierarchy look natural while critics and affected people contested its assumptions and consequences.", themes: ["Power", "Diagnosis", "Science"], regions: ["Global"] },
        { id: "T06-F", title: "Brain science from localization to the neuron", summary: "Lesions, anatomy, microscopy, physiology, instruments, and international coordination changed claims about brain and person.", themes: ["Brain", "Science", "Professions"], regions: ["Global"] },
        { id: "T06-G", title: "From social care to professional social work", summary: "Mutual aid, poor relief, settlements, casework, public health, child welfare, Black reform networks, and contested professional boundaries.", themes: ["Social Work", "Care", "Professions"], regions: ["Global"] },
        { id: "T06-H", title: "Psychoanalysis is a network, not one man", summary: "Patients, correspondents, women analysts, critics, institutions, colonial adaptations, and rival theories shaped the movement.", themes: ["Psychology", "Treatment", "Experience"], regions: ["Global"] },
        { id: "T06-I", title: "Children removed, relationships broken", summary: "Boarding and residential schools, settler policy, language suppression, testimony, sovereignty, and community-led healing.", themes: ["Trauma", "Power", "Experience"], regions: ["North America", "Oceania"], sources: ["truthCanada", "stolenGenerations"] },
        { id: "T06-J", title: "Law on paper and practice in reports: Dullunda, 1858–1872", summary: "Compare legal design with colonial administrative records of custody, inspection, work, revenue, expenditure, mortality, release, and family obligations—while keeping implementation, consent, and direct experience unknown.", themes: ["Institutions", "Power", "Work", "Evidence"], regions: ["South Asia"] }
      ]
    },
    {
      id: "T07", short: "War, testing & eugenics", dates: "c. 1914–1945",
      kicker: "Mental expertise at mass scale", color: "#232323",
      job: "Connect wars, colonial armies, schools, migration, work, welfare, genocide, and persuasion to new uses of psychological and psychiatric authority.",
      caution: "The same professions could relieve suffering, police borders, rank populations, select soldiers, and declare lives unfit.",
      regions: ["Global", "Europe", "North America", "Asia", "Latin America", "Colonial world"], sources: ["indochina"],
      topics: [
        { id: "T07-A", title: "Shell shock was not simply PTSD by another name", summary: "Bodily, psychological, moral, disciplinary, pension, gendered, and national interpretations changed across wars.", themes: ["Trauma", "Diagnosis", "Experience"], regions: ["Global"] },
        { id: "T07-B", title: "Tests enter armies, schools, borders, and workplaces", summary: "Standardization and opportunity traveled with racial and class bias, disability classification, administrative convenience, and resistance.", themes: ["Psychology", "Power", "Evidence"], regions: ["Global"] },
        { id: "T07-C", title: "Child guidance, counseling, social casework, and proliferating therapies", summary: "New professional settings and approaches moved mental-health work beyond the asylum while widening surveillance and family judgment.", themes: ["Treatment", "Social Work", "Professions"], regions: ["Global"] },
        { id: "T07-D", title: "Mental hygiene becomes an international project", summary: "Prevention, schools, workplaces, families, clinics, congresses, and uneven international authority—not one founder's export.", themes: ["Public Health", "Professions", "Exchange"], regions: ["Global"] },
        { id: "T07-E", title: "Eugenics across borders", summary: "Heredity claims connected disability and distress to reproduction, migration, race, class, gender, public health, and nation-building.", themes: ["Power", "Science", "Disability"], regions: ["Global"] },
        { id: "T07-F", title: "Forced sterilization and the people who fought it", summary: "Country-specific laws, institutions, victims, litigation, organizing, and long afterlives replace a Germany-only story.", themes: ["Power", "Rights", "Experience"], regions: ["Global"] },
        { id: "T07-G", title: "Somatic treatments: hope, experiment, evidence, risk, consent", summary: "Malaria therapy, insulin coma, seizure therapy, psychosurgery, and early ECT require separate histories and patient perspectives.", themes: ["Treatment", "Evidence", "Experience"], regions: ["Global"] },
        { id: "T07-H", title: "Colonial psychiatry between the wars", summary: "Labor, race, crime, family, repatriation, agricultural colonies, professional ambition, and routes outside institutions.", themes: ["Power", "Institutions", "Exchange"], regions: ["Colonial world", "Southeast Asia"], sources: ["indochina"] },
        { id: "T07-I", title: "War and occupation across Asia", summary: "Japanese empire, China, Southeast Asia, South Asian soldiers, displacement, and changing national professions.", themes: ["Trauma", "Power", "Professions"], regions: ["Asia"] },
        { id: "T07-J", title: "Aktion T4: professions, institutions, disabled victims, memory", summary: "Psychiatric murder under Nazism belongs to disability, eugenics, professional complicity, resistance, testimony, and accountability histories.", themes: ["Power", "Disability", "Experience"], regions: ["Europe"] },
        { id: "T07-K", title: "Publishing an argument beside a still-unopened file chain", summary: "Alberto Nicolat's deliberately published book preserves affected-person authorship and political argument; it does not independently verify every biographical, family, legal, clinical, or institutional event.", themes: ["Experience", "Evidence", "Power", "Media"], regions: ["Latin America"] }
      ]
    },
    {
      id: "T08", short: "Rights, drugs & decolonization", dates: "c. 1945–1980",
      kicker: "Possibilities multiply", color: "#4f9b61",
      job: "Explain how medicines, decolonization, welfare states, therapies, international systems, and movements changed possibilities without causing one universal transition.",
      caution: "A pill can change ward practice. It cannot by itself create housing, income, relationships, community services, rights, or a decolonized institution.",
      regions: ["Global", "Africa", "Caribbean", "South Asia", "Southeast Asia", "Latin America", "Europe", "North America"], sources: ["antic", "fanon"],
      topics: [
        { id: "T08-A", title: "The psychopharmacology turning point", summary: "Antipsychotics, antidepressants, tranquilizers, lithium, trials, adverse effects, regulation, access, marketing, and patient reports.", themes: ["Treatment", "Science", "Markets"], regions: ["Global"] },
        { id: "T08-B", title: "Benefits, harms, marketing, access, and patient reports", summary: "Separate drug classes, indications, trials, adverse effects, regulation, promotion, availability, and reported experience rather than telling one medication story.", themes: ["Treatment", "Evidence", "Markets", "Experience"], regions: ["Global"] },
        { id: "T08-C", title: "Why medicine alone did not close the asylum", summary: "Law, budgets, welfare, housing, labor, families, activism, and service capacity shaped very different deinstitutionalization histories.", themes: ["Institutions", "Treatment", "Power"], regions: ["Global"] },
        { id: "T08-D", title: "Decolonization—and the institution that remained", summary: "Independence changed authority while laws, buildings, files, professional hierarchies, and imported categories often persisted.", themes: ["Power", "Institutions", "Exchange"], regions: ["Africa", "Asia", "Caribbean"], sources: ["antic"] },
        { id: "T08-E", title: "Fanon from Martinique through France to Algeria", summary: "Clinical practice, institutional experiment, racism, war, liberation, and a global intellectual afterlife meet in one transregional route.", themes: ["Professions", "Power", "Exchange"], regions: ["Caribbean", "Europe", "Africa"], sources: ["fanon"] },
        { id: "T08-F", title: "Community experiments beyond one model", summary: "Nigeria, Senegal, Jamaica, Brazil, therapeutic communities, sector psychiatry, family care, arts, and local criticism.", themes: ["Care", "Institutions", "Treatment"], regions: ["Africa", "Caribbean", "Latin America", "Europe"] },
        { id: "T08-G", title: "Patients, survivors, disabled people, and families organize", summary: "Rights, refusal, peer support, independent living, recovery, Mad liberation, family advocacy, and internal disagreement.", themes: ["Rights", "Experience", "Power"], regions: ["Global"] },
        { id: "T08-H", title: "Psychologies multiply", summary: "Behavioral, cognitive, humanistic, existential, family, community, liberation, and culturally grounded approaches compete and combine.", themes: ["Psychology", "Treatment", "Ideas"], regions: ["Global"] },
        { id: "T08-I", title: "Trauma after genocide, partition, war, dictatorship, displacement", summary: "Recognition, testimony, memory, compensation, diagnosis, cultural meaning, collective action, and political contest.", themes: ["Trauma", "Experience", "Power"], regions: ["Global"] },
        { id: "T08-J", title: "WHO, ICD, professions, and unequal international authority", summary: "Postwar systems made mental health more international without making decision-making or resources equal.", themes: ["Public Health", "Diagnosis", "Exchange"], regions: ["Global"] },
        { id: "T08-K", title: "WHO expert-committee authority and recommendation-making, 1949–1955", summary: "Institutional foundation for authority, recommendation, roster, edition, and bounded corpus-silence questions. No global consensus, WHO-policy, country-implementation, or public-voice foundation.", themes: ["Public Health", "Power", "Institutions"], regions: ["Global"], internal: true, packet: "R32", range: "043xxx–045xxx" },
        { id: "T08-L", title: "Japan's dual legal-administrative architecture and government program claims, 1950–Oct 1 1965", summary: "Japanese law/program foundation for the 1950–1965 lane. No Korean evidence, no foundation for Japanese local implementation, direct patient/frontline voice, legal-language alignment, consent, or outcomes.", themes: ["Law", "Institutions", "Care"], regions: ["Japan"], internal: true, packet: "R31", range: "043xxx–045xxx" },
        { id: "T08-M", title: "Attributed Aro pilot and operational descriptions, Oct 1954–1963", summary: "Attributed Aro organizer/admin program description. No participant, family, host, worker, healer, consent, cost, outcome, national, or representative regional foundation. Fann/Dakar remains a deferred feasibility lane.", themes: ["Institutions", "Care", "Exchange"], regions: ["Africa"], internal: true, packet: "R33", range: "043xxx–045xxx" }
      ]
    },
    {
      id: "T09", short: "Diagnosis, markets & recovery", dates: "c. 1970–2000",
      kicker: "Categories become infrastructure", color: "#c15d9d",
      job: "Show manuals, insurance, markets, brain imaging, law, culture, recovery, and social movements changing mental health together.",
      caution: "Reliability is not validity. DSM is primarily a U.S. professional manual; ICD is an international classification. Neither is the whole history of distress.",
      regions: ["Global", "North America", "Europe", "Latin America", "Africa", "Oceania"], sources: ["dsm", "caracas", "whare"],
      topics: [
        { id: "T09-A", title: "DSM and ICD: different histories, overlapping power", summary: "Classification shapes communication, statistics, research, insurance, policy, recognition, access, and stigma in different systems.", themes: ["Diagnosis", "Power", "Public Health"], regions: ["Global"], sources: ["dsm"] },
        { id: "T09-B", title: "Reliability is not validity", summary: "What DSM-III changed in criteria and professional practice—and which questions about context and categories remained.", themes: ["Diagnosis", "Evidence"], regions: ["North America"], sources: ["dsm"] },
        { id: "T09-C", title: "How PTSD entered the manual—and what it cannot contain", summary: "War, sexual violence, genocide, disaster, refugee histories, activism, and cultural concepts of distress exceed one diagnostic template.", themes: ["Trauma", "Diagnosis", "Experience"], regions: ["Global"] },
        { id: "T09-D", title: "When the brain became visible", summary: "CT, PET, MRI, genetics, cognitive neuroscience, and the recurring temptation to treat a correlate as cause or destiny.", themes: ["Brain", "Science", "Evidence"], regions: ["Global"] },
        { id: "T09-E", title: "The chemical-imbalance story", summary: "A history of scientific hypotheses, explanatory metaphor, clinical communication, pharmaceutical marketing, and public memory.", themes: ["Brain", "Markets", "Evidence"], regions: ["Global"] },
        { id: "T09-F", title: "Addiction among diagnosis, crime, mutual aid, medicine, and harm reduction", summary: "Dependence categories, drug wars, racialized enforcement, recovery groups, medication, user organizing, and public health.", themes: ["Addiction", "Power", "Care"], regions: ["Global"] },
        { id: "T09-G", title: "Deinstitutionalization as liberation, abandonment, or both", summary: "Country-specific rights, bed closures, housing, income, family burden, continuity, prisons, homelessness, and peer support.", themes: ["Institutions", "Rights", "Care"], regions: ["Global"] },
        { id: "T09-H", title: "Italy, Brazil, Caracas, and the right to community care", summary: "Reform travels through laws, movements, services, professional networks, and local adaptation rather than one exported model.", themes: ["Rights", "Exchange", "Institutions"], regions: ["Europe", "Latin America", "Caribbean"], sources: ["caracas"] },
        { id: "T09-I", title: "Culture enters diagnosis—and can become another cage", summary: "Migration, racism, cultural concepts of distress, community control, and the difference between deep adaptation and a cosmetic metaphor.", themes: ["Diagnosis", "Translation", "Power"], regions: ["Global"] },
        { id: "T09-J", title: "Te Whare Tapa Whā and creator-specific relational models", summary: "Modern Indigenous and Pacific health models challenge individualizing care without becoming timeless templates for every community.", themes: ["Care", "Ideas", "Rights"], regions: ["Oceania"], sources: ["whare"] },
        { id: "T09-K", title: "Neurodiversity's collective roots and internal debates", summary: "Online self-advocacy, identity, disability, cure, support needs, care, access, and a history larger than one attributed founder.", themes: ["Disability", "Rights", "Experience"], regions: ["Global"] },
        { id: "T09-L", title: "When reform fails", summary: "Inquiries and testimony reveal what accountability, outsourcing, neglect, and community care mean after preventable harm.", themes: ["Institutions", "Power", "Experience"], regions: ["Global", "Africa"] }
      ]
    },
    {
      id: "T10", short: "Networked minds", dates: "c. 2000–present",
      kicker: "The present is history in motion", color: "#2c9ca6",
      job: "Treat rights, global health, peer expertise, digital care, wellness markets, climate, platforms, and AI as unfinished and contestable history.",
      caution: "Digital is a delivery category, not one intervention. Global scale does not guarantee local control, effectiveness, privacy, equity, or freedom from coercion.",
      regions: ["Global", "Africa", "Oceania"], sources: ["crpd", "mhgap", "friendshipBench", "marshall", "whoAI", "whoLLM"],
      topics: [
        { id: "T10-A", title: "The CRPD: from object of care to rights-bearing subject", summary: "Legal capacity, participation, accessibility, community inclusion, free and informed consent, and the work of disabled people's organizations.", themes: ["Rights", "Disability", "Power"], regions: ["Global"], sources: ["crpd"] },
        { id: "T10-B", title: "Global mental health: access, scale, adaptation, or empire?", summary: "Task-sharing and international programs can expand access while raising questions of culture, authority, funding, measurement, and structural causes.", themes: ["Public Health", "Power", "Care"], regions: ["Global"], sources: ["mhgap"] },
        { id: "T10-C", title: "The Friendship Bench travels outward", summary: "Zimbabwean development, local creators, grandmothers, participants, evidence, adaptation, credit, and the politics of reverse travel.", themes: ["Care", "Social Work", "Exchange"], regions: ["Africa", "Global"], sources: ["friendshipBench"] },
        { id: "T10-D", title: "Lived expertise, peer work, co-production—and who gets paid", summary: "Participation becomes meaningful when people shape questions, resources, decisions, data ownership, credit, and acceptable dissent.", themes: ["Experience", "Rights", "Professions"], regions: ["Global"] },
        { id: "T10-E", title: "Mental health online", summary: "Forums, apps, influencers, self-diagnosis, peer networks, crisis systems, misinformation, moderation, surveillance, and platform labor.", themes: ["Digital", "Care", "Markets"], regions: ["Global"] },
        { id: "T10-F", title: "Teletherapy and digital interventions: which tool, for whom?", summary: "Evidence belongs at the level of intervention, population, outcome, comparator, harms, access, and implementation—not the label digital.", themes: ["Digital", "Treatment", "Evidence"], regions: ["Global"] },
        { id: "T10-G", title: "Wellness becomes an industry", summary: "Mindfulness, resilience, self-tracking, workplace programs, supplements, luxury, appropriation, and structural problems recast as self-optimization.", themes: ["Wellness", "Markets", "Power"], regions: ["Global"] },
        { id: "T10-H", title: "Land, sea, nuclear displacement, climate, and mental wellbeing", summary: "Present climate distress connects to older histories of removal, sovereignty, military power, nuclear testing, and relationships with place.", themes: ["Trauma", "Environment", "Power"], regions: ["Oceania", "Global"], sources: ["marshall"] },
        { id: "T10-I", title: "COVID-19 as a systems stress test", summary: "Grief, isolation, disability, essential work, inequity, public trust, mutual aid, and telehealth reveal both capacity and fracture.", themes: ["Public Health", "Trauma", "Care"], regions: ["Global"] },
        { id: "T10-J", title: "AI, screening, prediction, privacy, bias, and agency", summary: "Automated tools revive old questions about classification and authority while adding scale, opacity, intimate data, and commercial incentives.", themes: ["Digital", "Power", "Evidence"], regions: ["Global"], sources: ["whoAI", "whoLLM"] },
        { id: "T10-K", title: "What might the present be getting wrong?", summary: "Replication, commercial incentives, cultural limits, diagnostic uncertainty, future revision, and the value of historical humility.", themes: ["Evidence", "Ideas", "Science"], regions: ["Global"] }
      ]
    }
  ]
};
