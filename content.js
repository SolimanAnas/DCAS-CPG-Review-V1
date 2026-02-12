// content.js - DCAS CPG 2025 Data Store
// This file acts as your offline database.

const CPG_CONTENT = {
    // 1. CHAPTERS METADATA
    chapters: [
        { id: 'c1', title: "Universal Care", desc: "Foundation, Primary Survey, Safety", hasQuiz: true, hasFlashcards: true, hasSummary: true },
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

    // 2. SUMMARIES (HTML Content)
    summaries: {
        c1: `
            <div class="sum-card">
                <h3>Assessment Sequences</h3>
                <ul>
                    <li><strong>Trauma:</strong> C-A-B-C (Catastrophic Hemorrhage, Airway, Breathing, Circulation).</li>
                    <li><strong>Medical:</strong> A-B-C (Airway, Breathing, Circulation).</li>
                    <li><strong>Cardiac Arrest:</strong> C-A-B (Compressions, Airway, Breathing).</li>
                    <li><strong>General Impression:</strong> Appearance, Work of Breathing, Circulation (Skin).</li>
                </ul>
            </div>
            <div class="sum-card">
                <h3>Vital Signs Goals</h3>
                <ul>
                    <li><strong>SpO2:</strong> >94% (88-92% for COPD).</li>
                    <li><strong>Hypotension:</strong> SBP < 90 mmHg.</li>
                    <li><strong>Hypoglycemia:</strong> BGL < 70 mg/dl.</li>
                    <li><strong>EtCO2:</strong> 35-45 mmHg.</li>
                </ul>
            </div>
            <div class="sum-card red-flag">
                <h3>CRITICAL RED FLAGS</h3>
                <ul>
                    <li>Apnea or Pulselessness.</li>
                    <li>Altered Mental Status (GCS < 15).</li>
                    <li>Severe Hypoxia (<90%) or Hypotension (<90mmHg).</li>
                </ul>
                <div class="highlight-box">
                    <strong>KPI:</strong> Request ALS Backup within <strong>1 minute</strong>.
                </div>
            </div>
        `
    },

    // 3. QUIZ QUESTION BANK
    questions: {
        // --- CHAPTER 1: UNIVERSAL CARE (Full 60 Questions) ---
        c1: [
            // PRIMARY SURVEY (1-10)
            { q: "What is the assessment sequence for a Trauma patient?", options: ["A-B-C-D-E", "C-A-B-C", "D-R-A-B-C", "M-A-R-C-H"], correct: 1, rationale: "In trauma, 'C' (Catastrophic Hemorrhage & C-Spine) comes first. The sequence is C-A-B-C.", difficulty: "basic" },
            { q: "What is the assessment sequence for a Medical patient?", options: ["A-B-C-D-E", "C-A-B-C", "D-R-A-B-C", "Safety-First"], correct: 0, rationale: "Medical patients follow the standard A-B-C sequence: Airway, Breathing, Circulation, Disability, Exposure.", difficulty: "basic" },
            { q: "What is the assessment sequence for a patient in Cardiac Arrest?", options: ["A-B-C", "C-A-B", "D-R-A-B-C", "B-A-C"], correct: 1, rationale: "Cardiac Arrest prioritizes Circulation (Compressions) to circulate oxygenated blood immediately. Sequence: C-A-B.", difficulty: "basic" },
            { q: "What are the 3 elements of the 'General Impression'?", options: ["Airway, Breathing, Circ", "Appearance, Breathing, Activity", "Alertness, Bleeding, Color", "Age, Body type, Complaint"], correct: 1, rationale: "General Impression consists of: 1. Appearance, 2. Work of Breathing, and 3. Activity (Mental Status).", difficulty: "basic" },
            { q: "In the AVPU scale, what does 'P' stand for?", options: ["Pulse", "Pain", "Pupils", "Pallor"], correct: 1, rationale: "AVPU stands for: Alert, Verbal (responds to voice), Pain (responds to pain/pressure), Unresponsive.", difficulty: "basic" },
            { q: "Where do you check the pulse on an unconscious adult?", options: ["Radial", "Carotid", "Femoral", "Brachial"], correct: 1, rationale: "The Carotid pulse is the central pulse checked in unconscious adults. Radial is for conscious adults.", difficulty: "basic" },
            { q: "Where do you check the pulse on an infant (<1 year)?", options: ["Carotid", "Brachial", "Radial", "Popliteal"], correct: 1, rationale: "Check the Brachial pulse (upper arm) in infants. Their necks are often too short/chubby to reliably find a carotid.", difficulty: "basic" },
            { q: "Normal capillary refill time (CRT) is less than:", options: ["1 second", "2 seconds", "3 seconds", "5 seconds"], correct: 1, rationale: "Normal CRT is < 2 seconds. Delayed CRT (>2s) indicates poor perfusion or shock.", difficulty: "basic" },
            { q: "What is the absolute FIRST step in any call?", options: ["Airway", "Scene Safety", "Circulation", "Call Dispatch"], correct: 1, rationale: "Scene Safety is always the first priority. You cannot help the patient if you become a patient.", difficulty: "basic" },
            { q: "What does 'D' stand for in the primary survey ABCDE?", options: ["Deformity", "Disability", "Danger", "Disease"], correct: 1, rationale: "Disability. This involves a rapid neurological check: GCS, Pupils, and Blood Glucose Level.", difficulty: "basic" },

            // VITALS & MONITORING (11-20)
            { q: "What is the normal respiratory rate for an adult?", options: ["8-12", "12-20", "20-30", "10-25"], correct: 1, rationale: "12-20 breaths per minute is the normal range for a healthy adult at rest.", difficulty: "basic" },
            { q: "What is the normal heart rate for an adult?", options: ["50-90", "60-100", "70-110", "60-90"], correct: 1, rationale: "60-100 beats per minute. <60 is Bradycardia, >100 is Tachycardia.", difficulty: "basic" },
            { q: "What is the target SpO2 for a standard medical patient?", options: ["100%", ">94%", "88-92%", ">90%"], correct: 1, rationale: "Aim for 94-98%. Do not over-oxygenate (hyperoxia) as it can cause vasoconstriction.", difficulty: "basic" },
            { q: "What is the target SpO2 for a COPD patient?", options: ["100%", "94-98%", "88-92%", ">95%"], correct: 2, rationale: "88-92%. COPD patients rely on a hypoxic drive; too much oxygen can suppress their breathing.", difficulty: "advanced" },
            { q: "Hypotension in an adult is generally defined as SBP below:", options: ["110 mmHg", "100 mmHg", "90 mmHg", "80 mmHg"], correct: 2, rationale: "Systolic Blood Pressure < 90 mmHg is the standard threshold for hypotension/shock.", difficulty: "basic" },
            { q: "You initiate Hypoglycemia treatment if BGL is below:", options: ["80 mg/dl", "70 mg/dl", "60 mg/dl", "100 mg/dl"], correct: 1, rationale: "Treat with D10/Glucagon if Blood Glucose is < 70 mg/dl and the patient is symptomatic.", difficulty: "basic" },
            { q: "What does EtCO2 monitoring measure?", options: ["Oxygen in blood", "Carbon dioxide exhaled", "Carbon monoxide", "pH balance"], correct: 1, rationale: "End-Tidal CO2 measures the amount of Carbon Dioxide in exhaled air. It is the gold standard for tube placement and CPR quality.", difficulty: "advanced" },
            { q: "What is the normal range for EtCO2?", options: ["20-30 mmHg", "35-45 mmHg", "45-55 mmHg", "90-100 mmHg"], correct: 1, rationale: "35-45 mmHg is the normal physiological range for EtCO2.", difficulty: "advanced" },
            { q: "Tachycardia is defined as a heart rate greater than:", options: ["90 bpm", "100 bpm", "110 bpm", "120 bpm"], correct: 1, rationale: "Heart rate > 100 bpm is Tachycardia.", difficulty: "basic" },
            { q: "Bradycardia is defined as a heart rate less than:", options: ["50 bpm", "60 bpm", "70 bpm", "55 bpm"], correct: 1, rationale: "Heart rate < 60 bpm is Bradycardia.", difficulty: "basic" },

            // MNEMONICS & HISTORY (21-30)
            { q: "In DCAP-BTLS, what does 'S' stand for?", options: ["Severity", "Swelling", "Saturation", "Shock"], correct: 1, rationale: "DCAP-BTLS: Deformities, Contusions, Abrasions, Punctures, Burns, Tenderness, Lacerations, Swelling.", difficulty: "basic" },
            { q: "In SAMPLE history, what does the 'L' stand for?", options: ["Last oral intake", "Last menstrual period", "Level of consciousness", "Location"], correct: 0, rationale: "SAMPLE: Signs/Symptoms, Allergies, Medications, Past History, Last oral intake, Events leading up.", difficulty: "basic" },
            { q: "In SAMPLE history, what does the 'E' stand for?", options: ["Events", "Exposure", "Environment", "Emergency"], correct: 0, rationale: "SAMPLE: Signs/Symptoms, Allergies, Medications, Past History, Last oral intake, Events leading up.", difficulty: "basic" },
            { q: "In OPQRST (pain), what does 'P' stand for?", options: ["Past History", "Provocation/Palliation", "Pain Score", "Pulse"], correct: 1, rationale: "OPQRST: Onset, Provocation/Palliation (what makes it better/worse), Quality, Radiation, Severity, Time.", difficulty: "basic" },
            { q: "In OPQRST (pain), what does 'R' stand for?", options: ["Rate", "Rhythm", "Radiation", "Respiration"], correct: 2, rationale: "OPQRST: Onset, Provocation, Quality, Radiation (does pain move?), Severity, Time.", difficulty: "basic" },
            { q: "In IMIST-AMBO handover, what does 'A' stand for?", options: ["Airway", "Alertness", "Allergies", "Age"], correct: 2, rationale: "AMBO: Allergies, Medications, Background History, Other information.", difficulty: "basic" },
            { q: "In IMIST-AMBO handover, what does 'M' stand for?", options: ["Mechanism", "Medications", "Medical Hx", "Movement"], correct: 1, rationale: "AMBO: Allergies, Medications, Background History, Other information.", difficulty: "basic" },
            { q: "Which mnemonic is used for Stroke Assessment?", options: ["SAMPLE", "BEFAST", "OPQRST", "AEIOU"], correct: 1, rationale: "BEFAST: Balance, Eyes, Face, Arms, Speech, Time.", difficulty: "basic" },
            { q: "GCS: What score is given for 'Confused' verbal response?", options: ["5", "4", "3", "2"], correct: 1, rationale: "Verbal: 5=Oriented, 4=Confused, 3=Inappropriate Words, 2=Incomprehensible Sounds, 1=None.", difficulty: "advanced" },
            { q: "GCS: What score is given for 'Spontaneous' eye opening?", options: ["4", "3", "2", "1"], correct: 0, rationale: "Eyes: 4=Spontaneous, 3=To Voice, 2=To Pain, 1=None.", difficulty: "advanced" },

            // CPR & RESUSCITATION (31-40)
            { q: "What is the adult CPR Compression:Breath ratio (single rescuer)?", options: ["15:2", "30:2", "10:1", "Continuous"], correct: 1, rationale: "30 compressions to 2 breaths (30:2) for adults.", difficulty: "basic" },
            { q: "What is the pediatric CPR ratio (2 rescuers)?", options: ["30:2", "15:2", "5:1", "10:2"], correct: 1, rationale: "For children/infants with TWO rescuers, use 15:2. If single rescuer, use 30:2.", difficulty: "basic" },
            { q: "What is the correct compression rate for CPR?", options: ["60-80/min", "80-100/min", "100-120/min", "120-140/min"], correct: 2, rationale: "Compress at a rate of 100-120 beats per minute.", difficulty: "basic" },
            { q: "What is the correct compression depth for adults?", options: ["At least 5cm (2 inches)", "3 cm", "6-7 cm", "1/3 depth"], correct: 0, rationale: "Compress at least 5cm (2 inches) but no more than 6cm (2.4 inches).", difficulty: "basic" },
            { q: "How often should you switch compressors during CPR?", options: ["Every 1 min", "Every 2 mins", "Every 5 mins", "When tired"], correct: 1, rationale: "Switch every 2 minutes (approx 5 cycles) to maintain high-quality compressions.", difficulty: "basic" },
            { q: "What is the maximum interruption time allowed for breaths/checks?", options: ["5 seconds", "10 seconds", "15 seconds", "20 seconds"], correct: 1, rationale: "Interruptions should be minimized to less than 10 seconds.", difficulty: "basic" },
            { q: "Where is the correct hand placement for adult CPR?", options: ["Upper half of sternum", "Lower half of sternum", "Left side of chest", "Right side of chest"], correct: 1, rationale: "Place hands on the lower half of the sternum (center of the chest).", difficulty: "basic" },
            { q: "With an advanced airway (ETT/SGA) in place, how do you breathe?", options: ["Pause for 2 breaths every 30", "1 breath every 6 secs", "1 breath every 3 secs", "Asynchronous"], correct: 1, rationale: "Provide 1 breath every 6 seconds (10/min) without pausing compressions.", difficulty: "advanced" },
            { q: "What is the first drug administered in Cardiac Arrest (Non-Shockable)?", options: ["Amiodarone", "Atropine", "Adrenaline (Epi)", "Lidocaine"], correct: 2, rationale: "Adrenaline (Epinephrine) 1mg is the first line vasopressor for Asystole/PEA.", difficulty: "basic" },
            { q: "What is the standard energy setting for Adult Biphasic Defibrillation?", options: ["100J", "120-200J", "360J", "50J"], correct: 1, rationale: "Manufacturer specific, but typically starts at 120-200 Joules.", difficulty: "advanced" },

            // OPERATIONS & SAFETY (41-50)
            { q: "How far should you park from a burning vehicle?", options: ["15m", "30m", "50m", "100m"], correct: 2, rationale: "A safe distance is typically at least 30-50m, ideally uphill and upwind.", difficulty: "basic" },
            { q: "In HazMat incidents, which zone is the 'Hot Zone'?", options: ["Support zone", "Contamination zone", "Safe zone", "Hospital zone"], correct: 1, rationale: "Hot Zone = Contamination; Warm Zone = Decon; Cold Zone = Support/Command.", difficulty: "basic" },
            { q: "True or False: Imminent Birth is an exclusion for Airwing transport?", options: ["True", "False"], correct: 0, rationale: "True. Delivering a baby in a helicopter is dangerous due to space/equipment limits. Ground transport is preferred.", difficulty: "advanced" },
            { q: "True or False: Violent patients are eligible for Airwing transport?", options: ["True", "False"], correct: 1, rationale: "False. Violent patients pose a catastrophic safety risk to the aircraft and crew.", difficulty: "advanced" },
            { q: "How often do you reassess a 'Green' (Non-Critical) patient?", options: ["5 min", "10 min", "15 min", "30 min"], correct: 2, rationale: "Stable/Green patients require reassessment every 15 minutes.", difficulty: "basic" },
            { q: "How often do you reassess a 'Red' (Critical) patient?", options: ["5 min", "10 min", "15 min", "Continuous"], correct: 0, rationale: "Critical/Red patients must be reassessed every 5 minutes.", difficulty: "basic" },
            { q: "What PPE is required for Standard Precautions?", options: ["Gloves only", "Gloves & Glasses", "Gloves, Mask, Glasses, Gown (Risk-based)", "Mask only"], correct: 2, rationale: "Standard precautions require assuming all fluids are infectious. Use Gloves, Mask, Eye protection, and Gown based on exposure risk.", difficulty: "basic" },
            { q: "When lifting, you should primarily use your:", options: ["Back", "Legs/Hips", "Arms", "Shoulders"], correct: 1, rationale: "Lift with your legs and hips (power lift), keeping your back straight and the weight close to your body.", difficulty: "basic" },
            { q: "When is a Tourniquet indicated?", options: ["Minor cuts", "Venous bleeding", "Uncontrolled arterial limb bleed", "Head wounds"], correct: 2, rationale: "Tourniquets are for life-threatening arterial hemorrhage on limbs that cannot be controlled by direct pressure.", difficulty: "basic" },
            { q: "What is the 'Golden Hour' in trauma?", options: ["Time to eat", "Time from injury to surgery", "Time on scene", "Time to call dispatch"], correct: 1, rationale: "It is the window of time (approx 1 hour) from injury to definitive surgical care where survival rates are highest.", difficulty: "basic" },

            // PEDIATRICS & BURNS (51-60)
            { q: "The Pediatric Assessment Triangle (PAT) consists of Appearance, Circulation, and:", options: ["Airway", "Work of Breathing", "Bleeding", "Alertness"], correct: 1, rationale: "PAT = Appearance, Work of Breathing, and Circulation to Skin.", difficulty: "advanced" },
            { q: "In Dubai CPGs, a pediatric patient is defined as age:", options: ["<12", "<=13", "<16", "<18"], correct: 1, rationale: "Pediatric protocols generally apply to children aged 13 years and under.", difficulty: "basic" },
            { q: "What is a late sign of shock (decompensation) in children?", options: ["Tachycardia", "Hypotension", "Crying", "Fever"], correct: 1, rationale: "Children maintain BP for a long time. Hypotension indicates imminent collapse (decompensated shock).", difficulty: "advanced" },
            { q: "Where do you check a pulse on a newborn?", options: ["Carotid", "Brachial / Apical", "Femoral", "Radial"], correct: 1, rationale: "Brachial artery or auscultate the Apical pulse (chest).", difficulty: "basic" },
            { q: "What rule is used to estimate Burn Surface Area in adults?", options: ["Rule of 9s", "Rule of Palms", "Broselow Tape", "Parkland Formula"], correct: 0, rationale: "The Rule of Nines is the standard method for estimating Total Body Surface Area (TBSA) burned.", difficulty: "basic" },
            { q: "According to Rule of 9s, one adult arm (entire) is:", options: ["4.5%", "9%", "18%", "1%"], correct: 1, rationale: "The entire arm (front and back) accounts for 9% TBSA.", difficulty: "advanced" },
            { q: "According to Rule of 9s, the adult anterior torso (Chest+Abdomen) is:", options: ["9%", "18%", "36%", "1%"], correct: 1, rationale: "Chest (9%) + Abdomen (9%) = 18%.", difficulty: "advanced" },
            { q: "What is the best position for a shock patient (no spinal injury)?", options: ["Sitting up", "Supine", "Prone", "Recovery"], correct: 1, rationale: "Supine (flat on back). Elevating legs is controversial; flat is generally best to maximize blood flow to the brain.", difficulty: "basic" },
            { q: "The Recovery Position is primarily used for:", options: ["Cardiac arrest", "Unconscious breathing patient", "Spinal injury", "Shock"], correct: 1, rationale: "It maintains the airway and prevents aspiration in unconscious patients who are breathing spontaneously.", difficulty: "basic" },
            { q: "What flow rate is used for a Non-Rebreather Mask (NRB)?", options: ["2-6 LPM", "6-10 LPM", "10-15 LPM", "25 LPM"], correct: 2, rationale: "10-15 LPM is required to keep the reservoir bag inflated and deliver high concentrations (90%+) of Oxygen.", difficulty: "basic" }
        ],

        // --- CHAPTER 7: TOXICOLOGY (New Content) ---
        c7: [
            { q: "Opioid Antidote?", options: ["Atropine", "Naloxone"], correct: 1, rationale: "Naloxone.", difficulty: "basic" },
            { q: "Organophosphate sign?", options: ["Dry", "Wet (SLUDGE)"], correct: 1, rationale: "Cholinergic crisis = Wet.", difficulty: "basic" },
            { q: "Beta Blocker Antidote?", options: ["Glucagon", "Calcium"], correct: 0, rationale: "Glucagon.", difficulty: "advanced" },
            { q: "TCA ECG sign?", options: ["Narrow QRS", "Wide QRS"], correct: 1, rationale: "Wide QRS > 0.10s.", difficulty: "advanced" },
            { q: "CO SpO2 reading?", options: ["Low", "Falsely High"], correct: 1, rationale: "Cannot distinguish CO from O2.", difficulty: "scenario" }
        ],

        // --- CHAPTER 4: RESUSCITATION (Newborn Content) ---
        c4: [
            { q: "Newborn (<4 weeks) CPR Ratio?", options: ["15:2", "3:1"], correct: 1, rationale: "3 Compressions : 1 Breath.", difficulty: "basic" },
            { q: "Start Newborn PPV if HR?", options: ["< 100", "< 60"], correct: 0, rationale: "HR < 100.", difficulty: "basic" },
            { q: "First step for non-vigorous newborn?", options: ["Suction", "Warm, Dry, Stimulate"], correct: 1, rationale: "Warm, Dry, Stimulate.", difficulty: "basic" },
            { q: "Target SpO2 at 1 minute of life?", options: ["60-65%", "90-95%"], correct: 0, rationale: "60-65%. It takes 10 mins to reach 90%.", difficulty: "advanced" },
            { q: "Start Compressions if Newborn HR is below?", options: ["100", "60"], correct: 1, rationale: "HR < 60 bpm despite effective PPV = Compressions.", difficulty: "advanced" },
            { q: "APGAR 'A' stands for?", options: ["Airway", "Appearance (Color)"], correct: 1, rationale: "Appearance.", difficulty: "basic" },
            { q: "Pre-ductal SpO2 probe location?", options: ["Right Hand", "Left Foot"], correct: 0, rationale: "Right Hand (Pre-ductal).", difficulty: "advanced" }
        ]
    },

    // 4. FLASHCARDS BANK
    flashcards: {
        // --- CHAPTER 1: UNIVERSAL CARE (Original 60 Flashcards) ---
        c1: [
            { category: "Primary Survey", question: "Trauma Assessment Sequence?", answer: "C - A - B - C\n(Control Hemorrhage First)" },
            { category: "Primary Survey", question: "Medical Assessment Sequence?", answer: "A - B - C" },
            { category: "Primary Survey", question: "Cardiac Arrest Sequence?", answer: "C - A - B\n(Compressions First)" },
            { category: "Primary Survey", question: "General Impression Elements?", answer: "Appearance\nWork of Breathing\nCirculation (Skin)" },
            { category: "Primary Survey", question: "AVPU stands for?", answer: "Alert\nVerbal\nPain\nUnresponsive" },
            { category: "Primary Survey", question: "First priority on scene?", answer: "Scene Safety" },
            { category: "Primary Survey", question: "Golden Hour?", answer: "60 mins from injury to surgery." },
            { category: "Primary Survey", question: "Critical (Red) criteria?", answer: "Compromised ABCD\nAltered Mental Status\nSevere Mechanism" },
            { category: "Primary Survey", question: "Unconscious Adult Pulse?", answer: "Carotid (Neck)" },
            { category: "Primary Survey", question: "Infant Pulse?", answer: "Brachial (Upper Arm)" },
            { category: "Vitals", question: "Normal Adult Pulse?", answer: "60 - 100 bpm" },
            { category: "Vitals", question: "Normal Adult Resp Rate?", answer: "12 - 20 bpm" },
            { category: "Vitals", question: "Normal Capillary Refill?", answer: "< 2 seconds" },
            { category: "Vitals", question: "Target SpO2?", answer: "> 94%" },
            { category: "Vitals", question: "COPD SpO2 Target?", answer: "88% - 92%" },
            { category: "Vitals", question: "Hypotension (Adult)?", answer: "SBP < 90 mmHg" },
            { category: "Vitals", question: "Hypoglycemia Level?", answer: "< 70 mg/dl" },
            { category: "Vitals", question: "Normal EtCO2?", answer: "35 - 45 mmHg" },
            { category: "Vitals", question: "Fever Temp?", answer: "> 38.0°C" },
            { category: "Vitals", question: "Pulse Pressure?", answer: "Difference between Systolic and Diastolic BP." },
            { category: "Mnemonic", question: "DCAP-BTLS?", answer: "Deformities, Contusions, Abrasions, Punctures\nBurns, Tenderness, Lacerations, Swelling" },
            { category: "Mnemonic", question: "SAMPLE?", answer: "Symptoms, Allergies, Meds, Past Hx, Last Intake, Events" },
            { category: "Mnemonic", question: "OPQRST?", answer: "Onset, Provocation, Quality, Radiation, Severity, Time" },
            { category: "Mnemonic", question: "IMIST-AMBO?", answer: "Identification, Mechanism, Injuries, Signs, Treatment\nAllergies, Meds, Background, Other" },
            { category: "Mnemonic", question: "BEFAST?", answer: "Balance, Eyes, Face, Arms, Speech, Time" },
            { category: "Mnemonic", question: "AEIOU-TIPS?", answer: "Alcohol, Epilepsy, Insulin, Overdose, Uremia\nTrauma, Infection, Psychosis, Stroke" },
            { category: "Mnemonic", question: "PASTE?", answer: "Provocation, Associated pain, Sputum, Tiredness, Exacerbation" },
            { category: "Mnemonic", question: "APGAR?", answer: "Appearance, Pulse, Grimace, Activity, Respiration" },
            { category: "Mnemonic", question: "DICE?", answer: "Drug, Integrity, Concentration, Equipment" },
            { category: "Mnemonic", question: "SLUDGE?", answer: "Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis" },
            { category: "CPR", question: "Adult Ratio?", answer: "30:2" },
            { category: "CPR", question: "Pediatric Ratio (2 rescuers)?", answer: "15:2" },
            { category: "CPR", question: "Compression Rate?", answer: "100 - 120 / min" },
            { category: "CPR", question: "Adult Depth?", answer: "5 - 6 cm" },
            { category: "CPR", question: "Infant Depth?", answer: "4 cm (1/3 chest)" },
            { category: "CPR", question: "Adv Airway Rate?", answer: "1 breath every 6 secs" },
            { category: "CPR", question: "Switch compressors?", answer: "Every 2 mins" },
            { category: "CPR", question: "Hand Placement?", answer: "Lower half of sternum" },
            { category: "CPR", question: "Shockable Rhythms?", answer: "VF and Pulseless VT" },
            { category: "CPR", question: "Non-Shockable?", answer: "Asystole and PEA" },
            { category: "Operations", question: "Safe Park Distance?", answer: "30 meters" },
            { category: "Operations", question: "Hot Zone?", answer: "Contaminated Area" },
            { category: "Operations", question: "Airwing Exclusion?", answer: "Imminent Birth, Violent Patient" },
            { category: "Operations", question: "Standard PPE?", answer: "Gloves, Mask, Eye protection" },
            { category: "Operations", question: "Red Reassessment?", answer: "5 mins" },
            { category: "Operations", question: "Green Reassessment?", answer: "15 mins" },
            { category: "Operations", question: "Lifting?", answer: "Legs, straight back" },
            { category: "Operations", question: "Tourniquet?", answer: "Uncontrolled limb bleed" },
            { category: "Operations", question: "Tourniquet Placement?", answer: "High and tight" },
            { category: "Operations", question: "Triage Colors?", answer: "Red (Immediate), Yellow (Delayed), Green (Minor), Black (Deceased)" },
            { category: "Pediatrics", question: "Pediatric Age?", answer: "13 and under" },
            { category: "Pediatrics", question: "PAT?", answer: "Appearance, Work of Breathing, Circulation" },
            { category: "Pediatrics", question: "Decompensated Shock?", answer: "Hypotension" },
            { category: "Pediatrics", question: "Geriatric Age?", answer: "65 and over" },
            { category: "Burns", question: "Rule of 9s Arm?", answer: "9%" },
            { category: "Burns", question: "Rule of 9s Leg?", answer: "18%" },
            { category: "Burns", question: "Rule of 9s Torso?", answer: "36% (18 chest + 18 back)" },
            { category: "Special", question: "Shock Position?", answer: "Supine" },
            { category: "Special", question: "Recovery Position?", answer: "Lateral Recumbent" },
            { category: "Special", question: "NRB Flow?", answer: "10 - 15 LPM" }
        ],
        // --- NEW MODULES ---
        c4: [
            { category: "Newborn", question: "CPR Ratio?", answer: "3:1" },
            { category: "Newborn", question: "PPV Indication?", answer: "HR < 100 or Apnea" },
            { category: "Newborn", question: "Compressions?", answer: "HR < 60 after PPV" }
        ],
        c7: [
            { category: "Tox", question: "Opioid Pupil?", answer: "Pinpoint" },
            { category: "Tox", question: "SLUDGE?", answer: "Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis" },
            { category: "Tox", question: "Beta Blocker?", answer: "Glucagon" }
        ]
    },

    // 5. CRITICAL RECOGNITION SCENARIOS
    criticalScenarios: [
        { scenario: "Male 55, Tearing back pain, BP difference in arms.", options: [{t:"Aspirin", s:0, f:"Contraindicated! Possible Dissection."}, {t:"Rapid Transport", s:10, f:"Correct. Suspected Aortic Dissection."}], kpi: "Scene < 10 mins." },
        { scenario: "Child 4, Stridor, Drooling, High Fever.", options: [{t:"Inspect Throat", s:0, f:"Danger! Could trigger airway collapse."}, {t:"Keep Calm & Transport", s:10, f:"Correct. Suspected Epiglottitis."}], kpi: "Gentle handling." }
    ]
};
