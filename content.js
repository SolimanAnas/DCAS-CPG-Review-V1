// content.js - DCAS CPG 2025 Data Store
// This file acts as your offline database.

const CPG_CONTENT = {
    // 1. CHAPTERS METADATA
    chapters: [
        { id: 'c1', title: "Universal Care", desc: "Foundation, Primary Survey", hasQuiz: true, hasFlashcards: true },
        { id: 'c2', title: "Airway & Breathing", desc: "Advanced Airway, Ventilation", hasQuiz: false, hasFlashcards: false },
        { id: 'c3', title: "Cardiovascular", desc: "ACS, Stroke, Shock", hasQuiz: false, hasFlashcards: false },
        { id: 'c4', title: "Resuscitation", desc: "Adult, Peds, Newborn", hasQuiz: true, hasFlashcards: true },
        { id: 'c5', title: "Neurological", desc: "Seizures, ALOC", hasQuiz: false, hasFlashcards: false },
        { id: 'c6', title: "General Medical", desc: "Sepsis, Anaphylaxis", hasQuiz: false, hasFlashcards: false },
        { id: 'c7', title: "Env & Toxicology", desc: "Overdoses, Envenomation", hasQuiz: true, hasFlashcards: true },
        { id: 'c8', title: "Trauma", desc: "Major Trauma, Burns", hasQuiz: false, hasFlashcards: false },
        { id: 'c9', title: "Peds & Obstetrics", desc: "Childbirth, Pediatrics", hasQuiz: false, hasFlashcards: false },
        { id: 'c10', title: "Major Incident", desc: "Triage, Command", hasQuiz: false, hasFlashcards: false },
        { id: 'c11', title: "Formulary", desc: "Medications & Scope", hasQuiz: false, hasFlashcards: false }
    ],

    // 2. QUIZ QUESTION BANK
    questions: {
        c1: [
            { q: "Trauma Assessment Sequence?", options: ["A-B-C", "C-A-B-C", "MARCH"], correct: 1, rationale: "Trauma prioritizes Catastrophic Hemorrhage (C).", difficulty: "basic" },
            { q: "Medical Assessment Sequence?", options: ["C-A-B", "A-B-C"], correct: 1, rationale: "Standard Medical is A-B-C.", difficulty: "basic" },
            { q: "Cardiac Arrest Sequence?", options: ["A-B-C", "C-A-B"], correct: 1, rationale: "Compressions first.", difficulty: "basic" },
            { q: "Hypotension (Adult)?", options: ["< 100", "< 90 mmHg"], correct: 1, rationale: "SBP < 90 mmHg.", difficulty: "basic" },
            { q: "Target SpO2 (COPD)?", options: ["94-98%", "88-92%"], correct: 1, rationale: "88-92% (Hypoxic drive).", difficulty: "advanced" },
            { q: "55M Post-ROSC, BP 80/50. Action?", options: ["Fluid Bolus", "Adrenaline Push Dose", "Observe"], correct: 0, rationale: "Fluid challenge first for post-ROSC hypotension.", difficulty: "scenario" },
            { q: "Normal Capillary Refill?", options: ["< 2s", "> 3s"], correct: 0, rationale: "Less than 2 seconds.", difficulty: "basic" },
            { q: "First priority?", options: ["Airway", "Scene Safety"], correct: 1, rationale: "Safety first.", difficulty: "basic" },
            { q: "Hypoglycemia Threshold?", options: ["< 80", "< 70"], correct: 1, rationale: "< 70 mg/dl.", difficulty: "basic" },
            { q: "Normal EtCO2?", options: ["20-30", "35-45"], correct: 1, rationale: "35-45 mmHg.", difficulty: "basic" }
        ],
        c7: [
            { q: "Opioid Antidote?", options: ["Atropine", "Naloxone"], correct: 1, rationale: "Naloxone.", difficulty: "basic" },
            { q: "Organophosphate sign?", options: ["Dry", "Wet (SLUDGE)"], correct: 1, rationale: "Cholinergic crisis = Wet.", difficulty: "basic" },
            { q: "Beta Blocker Antidote?", options: ["Glucagon", "Calcium"], correct: 0, rationale: "Glucagon.", difficulty: "advanced" },
            { q: "TCA ECG sign?", options: ["Narrow QRS", "Wide QRS"], correct: 1, rationale: "Wide QRS > 0.10s.", difficulty: "advanced" },
            { q: "CO SpO2 reading?", options: ["Low", "Falsely High"], correct: 1, rationale: "Cannot distinguish CO from O2.", difficulty: "scenario" }
        ],
        c4: [
            { q: "Newborn CPR Ratio?", options: ["15:2", "3:1"], correct: 1, rationale: "3 Compressions : 1 Breath.", difficulty: "basic" },
            { q: "Start Newborn PPV if HR?", options: ["< 100", "< 60"], correct: 0, rationale: "HR < 100.", difficulty: "basic" },
            { q: "APGAR 'A'?", options: ["Airway", "Appearance"], correct: 1, rationale: "Appearance (Color).", difficulty: "basic" },
            { q: "Pre-ductal SpO2?", options: ["Left Foot", "Right Hand"], correct: 1, rationale: "Right Hand.", difficulty: "advanced" }
        ]
    },

    // 3. FLASHCARDS BANK
    flashcards: {
        c1: [
            { category: "Primary Survey", question: "Trauma Sequence?", answer: "C-A-B-C" },
            { category: "Vitals", question: "Normal Adult Pulse?", answer: "60 - 100 bpm" },
            { category: "Vitals", question: "Hypotension Limit?", answer: "SBP < 90 mmHg" },
            { category: "CPR", question: "Adult Ratio?", answer: "30:2" },
            { category: "CPR", question: "Compression Rate?", answer: "100 - 120 / min" }
        ],
        c4: [
            { category: "Newborn", question: "CPR Ratio?", answer: "3:1" },
            { category: "Newborn", question: "PPV Indication?", answer: "HR < 100 or Apnea" }
        ],
        c7: [
            { category: "Tox", question: "Opioid Pupil?", answer: "Pinpoint" }
        ]
    },

    // 4. CRITICAL RECOGNITION SCENARIOS
    criticalScenarios: [
        { scenario: "Male 55, Tearing back pain, BP difference in arms.", options: [{t:"Aspirin", s:0, f:"Contraindicated! Possible Dissection."}, {t:"Rapid Transport", s:10, f:"Correct. Suspected Aortic Dissection."}], kpi: "Scene < 10 mins." },
        { scenario: "Child 4, Stridor, Drooling, High Fever.", options: [{t:"Inspect Throat", s:0, f:"Danger! Could trigger airway collapse."}, {t:"Keep Calm & Transport", s:10, f:"Correct. Suspected Epiglottitis."}], kpi: "Gentle handling." }
    ]
};
