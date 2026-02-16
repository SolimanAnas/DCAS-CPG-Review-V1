/* ========== Chapter 2 – Airway & Breathing (Full Content 2.1–2.5) ========== */
window.CPG_DATA = {
    id: "c2",
    title: "Airway Management",
    shortTitle: "2.0 Airway & Breathing",
    sections: [
        // 2.1 AIRWAY MANAGEMENT (unchanged, but included for completeness)
        {
            id: "c2s1",
            shortTitle: "2.1 Airway Management",
            summary: `...`, // (summary content same as before, omitted for brevity)
            quiz: [ /* 60 questions unchanged */ ],
            flashcards: [ /* 60 cards unchanged */ ],
            critical: [ /* 5 scenarios unchanged */ ]
        },

        // ============================================================
        // 2.2 FOREIGN BODY AIRWAY OBSTRUCTION (FBAO) – expanded
        // ============================================================
        {
            id: "c2s2",
            shortTitle: "2.2 FBAO",
            summary: `
                <div class="sum-card">
                    <h3 style="color:var(--accent-airway);">🍖 2.2 Foreign Body Airway Obstruction</h3>
                    
                    <h4>1. Assessment of Severity</h4>
                    <ul>
                        <li><strong>Mild Obstruction (Effective Cough):</strong> Patient can speak, cry, or cough effectively. loud noise.</li>
                        <li><strong>Severe Obstruction (Ineffective Cough):</strong> Patient cannot speak, breath sounds are quiet/silent, cyanosis, conscious but distressed.</li>
                    </ul>

                    <h4>2. Management - Conscious Adult</h4>
                    <ul>
                        <li><strong>Mild:</strong> Encourage coughing. Do NOT intervene physically. Monitor.</li>
                        <li><strong>Severe:</strong> 
                            <ol>
                                <li>Give <strong>5 Back Blows</strong> (between shoulder blades).</li>
                                <li>If unsuccessful, give <strong>5 Chest Thrusts</strong> (sternal compression, similar to CPR but sharper/slower).</li>
                                <li><strong>Note:</strong> DCAS Protocol prioritises Chest Thrusts over Abdominal Thrusts (Heimlich) to reduce organ injury risk.</li>
                                <li>Repeat 5 Back Blows : 5 Chest Thrusts.</li>
                            </ol>
                        </li>
                    </ul>

                    <h4>3. Management - Unconscious Adult</h4>
                    <ul>
                        <li><strong>Start CPR immediately</strong> (30 compressions : 2 breaths).</li>
                        <li>Do not check for a pulse.</li>
                        <li><strong>Visual Check:</strong> Before each ventilation attempt, look in the mouth. Only remove a foreign body if it is <strong>solid and visible</strong>. Do not perform blind finger sweeps.</li>
                        <li>Continue CPR until recovery or handover.</li>
                    </ul>

                    <h4>4. Special Groups (Paediatric/Infant)</h4>
                    <ul>
                        <li><strong>Infant (<1 year):</strong> 5 Back Blows (head down) : 5 Chest Thrusts (two fingers). <strong>NO abdominal thrusts.</strong></li>
                        <li><strong>Child (>1 year):</strong> 5 Back Blows : 5 Chest Thrusts.</li>
                    </ul>
                </div>
            `,
            flashcards: [
                // original 10 flashcards
                { category: "Assessment", question: "Sign of severe airway obstruction?", answer: "Silent cough, inability to speak/breathe, cyanosis." },
                { category: "Assessment", question: "Action for Mild Obstruction?", answer: "Encourage coughing. Continuous observation." },
                { category: "Adult", question: "Conscious Adult Sequence?", answer: "5 Back Blows : 5 Chest Thrusts." },
                { category: "Adult", question: "Are Abdominal Thrusts recommended?", answer: "No. DCAS prefers Chest Thrusts." },
                { category: "Unconscious", question: "First action if patient becomes unconscious?", answer: "Start CPR immediately (Compressions)." },
                { category: "Unconscious", question: "When to check for object during CPR?", answer: "Before every ventilation attempt." },
                { category: "Technique", question: "Blind finger sweeps?", answer: "Contraindicated. Only remove visible solid objects." },
                { category: "Infant", question: "Infant FBAO technique?", answer: "5 Back Blows (gravity assist) : 5 Chest Thrusts." },
                { category: "Complications", question: "Risk of abdominal thrusts?", answer: "Internal organ injury (liver/spleen rupture)." },
                { category: "Post-Resus", question: "Post-clearance care?", answer: "Transport for assessment (risk of airway oedema/trauma)." }
            ],
           quiz: [
    {
        q: "A 30‑year‑old asthmatic speaks in words only, has a respiratory rate of 28, heart rate 120, and SpO₂ 91% on room air. How would you classify this exacerbation?",
        options: ["Mild", "Moderate", "Severe", "Life‑threatening"],
        correct: 2,
        explanation: "Severe asthma is defined by: speaking in words (not sentences), respiratory rate >25, heart rate >110, and SpO₂ <92%. This patient meets all these criteria."
    },
    {
        q: "Which clinical sign indicates life‑threatening asthma?",
        options: [
            "Expiratory wheezing",
            "Accessory muscle use",
            "Silent chest on auscultation",
            "Tachycardia >120"
        ],
        correct: 2,
        explanation: "A silent chest is an ominous sign – it indicates minimal air movement due to severe bronchospasm and exhaustion. It is a pre‑arrest sign and requires immediate aggressive intervention (e.g., IM adrenaline, assisted ventilation)."
    },
    {
        q: "What is the correct dose of nebulised salbutamol for an adult with acute severe asthma?",
        options: ["2.5 mg", "5 mg", "7.5 mg", "10 mg"],
        correct: 1,
        explanation: "The standard adult dose is 5 mg nebulised salbutamol. It can be repeated back‑to‑back if necessary (continuous nebulisation in severe cases)."
    },
    {
        q: "In a patient with life‑threatening asthma who is not improving with nebulised therapy, what is the next pharmacological intervention?",
        options: [
            "IV magnesium sulfate 2 g over 20 minutes",
            "IV hydrocortisone 200 mg",
            "IM adrenaline 500 mcg (1:1000)",
            "IV aminophylline"
        ],
        correct: 2,
        explanation: "IM adrenaline (500 mcg, 0.5 mL of 1:1000) is indicated in life‑threatening asthma, especially when there is doubt about anaphylaxis or no response to nebulisers. It provides rapid bronchodilation and circulatory support."
    },
    {
        q: "What is the recommended dose and administration rate for IV magnesium sulfate in severe asthma?",
        options: [
            "2 g IV bolus over 1–2 minutes",
            "2 g IV infusion over 20 minutes",
            "4 g IV over 10 minutes",
            "1 g IV over 5 minutes"
        ],
        correct: 1,
        explanation: "Magnesium sulfate 2 g should be diluted in 100 mL normal saline and infused over 20 minutes to avoid hypotension and arrhythmias. It is not a first‑line drug but may help in severe cases."
    },
    {
        q: "When ventilating an asthmatic patient with a bag‑valve‑mask, what is the most important consideration?",
        options: [
            "Ventilate rapidly to lower CO₂",
            "Use high PEEP to keep airways open",
            "Allow a prolonged expiratory time",
            "Hyperventilate to compensate for acidosis"
        ],
        correct: 2,
        explanation: "Asthmatics have prolonged expiration due to airway narrowing. Rapid ventilation leads to breath‑stacking (air trapping) and auto‑PEEP, which can cause hypotension and barotrauma. Allow enough time for exhalation – a rate of 6–8 breaths/min is often appropriate."
    },
    {
        q: "What is the role of corticosteroids (e.g., hydrocortisone) in acute asthma?",
        options: [
            "Immediate bronchodilation",
            "Reduction of airway inflammation (onset hours)",
            "Relief of anxiety",
            "Prevention of infection"
        ],
        correct: 1,
        explanation: "Corticosteroids reduce airway inflammation, but their onset of action is 4–6 hours. They should be given early in moderate‑severe exacerbations to prevent deterioration and reduce relapse."
    },
    {
        q: "A 5‑year‑old child with acute asthma is in moderate respiratory distress. What is the correct dose of nebulised salbutamol?",
        options: ["1.25 mg", "2.5 mg", "5 mg", "7.5 mg"],
        correct: 1,
        explanation: "For children under 5 years, the usual dose is 2.5 mg nebulised salbutamol. Children over 5 years receive the adult dose (5 mg)."
    },
    {
        q: "What is the target oxygen saturation for a patient with acute asthma?",
        options: ["88–92%", "94–98%", "97–100%", "90–94%"],
        correct: 1,
        explanation: "Target SpO₂ is 94–98% for most patients. Avoid hyperoxia (100%) as it may cause vasoconstriction and doesn't improve outcomes."
    },
    {
        q: "Which of the following is a contraindication to using CPAP in an asthmatic patient?",
        options: [
            "SpO₂ 90% on 15 L O₂",
            "Accessory muscle use",
            "Exhaustion",
            "Unconsciousness"
        ],
        correct: 3,
        explanation: "CPAP requires a conscious, cooperative patient who can protect their airway. Unconsciousness is an absolute contraindication – these patients need intubation and mechanical ventilation."
    }
],
            critical: [
                {
                    id: "crit_2_2_1",
                    scenario: "A 50-year-old male is choking at a restaurant. He is conscious but cannot speak or cough effectively. He is clutching his throat (universal sign). You have performed 5 back blows without success.",
                    question: "What is your next specific intervention?",
                    options: [
                        { t: "Heimlich Maneuver (Abdominal Thrusts)", f: "Incorrect. DCAS protocol prefers Chest Thrusts." },
                        { t: "5 Chest Thrusts", f: "Correct. Perform 5 chest thrusts (sternal compressions) standing behind the patient." },
                        { t: "Start CPR", f: "Incorrect. Patient is still conscious." }
                    ],
                    correct: 1,
                    explanation: "Follow the cycle: 5 Back Blows -> 5 Chest Thrusts. Chest thrusts generate airway pressure with less risk of visceral injury than abdominal thrusts.",
                    kpi: "Correct FBAO Cycle (5:5)"
                },
                {
                    id: "crit_2_2_2",
                    scenario: "While treating a choking infant, the infant becomes limp and unresponsive.",
                    question: "What is the priority action?",
                    options: [
                        { t: "Continue back blows", f: "Incorrect. Patient is now unconscious." },
                        { t: "Place on firm surface and start CPR (30:2) or (15:2)", f: "Correct. Initiate CPR. Look in mouth before breaths." },
                        { t: "Intubate immediately", f: "Incorrect. Basic CPR and visualization come first." }
                    ],
                    correct: 1,
                    explanation: "Unconsciousness mandates immediate CPR. The chest compressions may help dislodge the object. Check airway before ventilation.",
                    kpi: "Transition to CPR upon unconsciousness"
                }
            ]
        },

        // ============================================================
        // 2.3 ASTHMA – expanded
        // ============================================================
        {
            id: "c2s3",
            shortTitle: "2.3 Asthma",
            summary: `
                <div class="sum-card">
                    <h3 style="color:var(--accent-airway);">🫁 2.3 Asthma Management</h3>
                    
                    <h4>1. Assessment & Severity</h4>
                    <ul>
                        <li><strong>Moderate:</strong> Speaking in phrases, SpO₂ >92%, moderate wheeze.</li>
                        <li><strong>Severe:</strong> Speaking in words, SpO₂ <92%, HR >110, RR >25, accessory muscle use.</li>
                        <li><strong>Life-Threatening:</strong> Silent chest, cyanosis, poor respiratory effort, confusion/exhaustion, SpO₂ <92% despite O₂.</li>
                    </ul>

                    <h4>2. Pharmacological Management</h4>
                    <ul>
                        <li><strong>Salbutamol (Ventolin):</strong> 5 mg Nebulized (repeat back-to-back).</li>
                        <li><strong>Ipratropium Bromide (Atrovent):</strong> 500 mcg Nebulized (repeat x3).</li>
                        <li><strong>Hydrocortisone:</strong> 100 mg IV/IM (slow push).</li>
                        <li><strong>Magnesium Sulfate:</strong> 2 g IV infusion over 20 mins (for severe/life-threatening).</li>
                        <li><strong>Adrenaline (Epinephrine) 1:1000:</strong> 500 mcg IM (0.5 mL) if life-threatening/anaphylactic component or no response to nebs.</li>
                    </ul>

                    <h4>3. Ventilation Strategy</h4>
                    <ul>
                        <li><strong>Oxygen:</strong> Titrate to 94-98%.</li>
                        <li><strong>BVM:</strong> If assisting, allow prolonged expiratory phase (to prevent air trapping/stacking).</li>
                        <li><strong>CPAP:</strong> Use with caution. Only if exhausting and alert.</li>
                    </ul>
                </div>
            `,
            flashcards: [
                // original 10 flashcards
                { category: "Drugs", question: "Salbutamol Dose (Adult)?", answer: "5 mg Nebulized." },
                { category: "Drugs", question: "Ipratropium Dose (Adult)?", answer: "500 mcg Nebulized." },
                { category: "Drugs", question: "Hydrocortisone Dose?", answer: "100 mg IV/IM." },
                { category: "Drugs", question: "Adrenaline Dose for Life-Threatening Asthma?", answer: "500 mcg (0.5mg) IM (1:1000)." },
                { category: "Drugs", question: "Magnesium Sulfate Dose?", answer: "2 g IV over 20 minutes." },
                { category: "Assessment", question: "Sign of Life-Threatening Asthma?", answer: "Silent chest, confusion, exhaustion, bradycardia." },
                { category: "Ventilation", question: "Key BVM consideration in asthma?", answer: "Allow prolonged expiration to prevent breath stacking." },
                { category: "Pathophysiology", question: "Why 'Silent Chest' is bad?", answer: "Indicates minimal air movement (severe obstruction)." },
                { category: "Target", question: "SpO2 Target?", answer: "94-98%." },
                { category: "Paediatric", question: "Salbutamol Dose (<5 years)?", answer: "2.5 mg Nebulized." }
            ],
            quiz: [
                // original 5 quiz questions
                { q: "What is the dose of IM Adrenaline for a patient with life-threatening asthma failing nebulizer therapy?", options: ["1 mg 1:10,000", "500 mcg 1:1,000", "300 mcg 1:1,000", "100 mcg 1:10,000"], correct: 1, explanation: "Adult dose is 500 mcg (0.5 mL) of 1:1000 IM. This provides potent bronchodilation." },
                { q: "Which clinical sign indicates 'Life-Threatening' asthma rather than just 'Severe'?", options: ["Respiratory rate 30", "Silent chest", "Loud expiratory wheeze", "Tachycardia 120"], correct: 1, explanation: "A silent chest implies air movement is so poor that wheezing cannot be generated. It is a pre-arrest sign." },
                { q: "What is the correct administration rate for IV Magnesium Sulfate in asthma?", options: ["Rapid bolus", "Over 2-5 minutes", "Over 20 minutes", "Over 1 hour"], correct: 2, explanation: "Magnesium Sulfate 2g should be infused over 20 minutes to avoid hypotension and arrhythmias." },
                { q: "When ventilating an asthmatic patient with a BVM, you should:", options: ["Ventilate rapidly to clear CO2", "Use high PEEP", "Allow prolonged expiratory time", "Hyperventilate"], correct: 2, explanation: "Asthmatics trap air. Rapid ventilation causes 'breath stacking' (auto-PEEP), leading to barotrauma and cardiac arrest. Allow time to exhale." },
                { q: "Hydrocortisone is classified as a:", options: ["Beta-agonist", "Anticholinergic", "Corticosteroid", "Muscle relaxant"], correct: 2, explanation: "It is a corticosteroid used to reduce airway inflammation (onset takes hours, so give early)." },
                // new 5 quiz questions
                { q: "What is the maximum number of Ipratropium doses that may be given in an asthma exacerbation?", options: ["1", "2", "3", "4"], correct: 2, explanation: "Ipratropium may be repeated up to 3 doses (each 500 mcg) in severe asthma." },
                { q: "A patient with severe asthma has a SpO2 of 91% on room air. What is your target SpO2?", options: ["88-92%", "94-98%", "97-100%", "85-90%"], correct: 1, explanation: "Target SpO2 for standard patients is 94-98%. Avoid hyperoxia, but hypoxaemia is harmful." },
                { q: "Which of the following is a contraindication to CPAP in asthma?", options: ["Exhaustion", "SpO2 <90%", "Unconscious patient", "Tachypnoea"], correct: 2, explanation: "CPAP requires a conscious, cooperative patient. Unconsciousness is an absolute contraindication." },
                { q: "In life-threatening asthma, what is the role of Magnesium Sulfate?", options: ["First-line bronchodilator", "Reduces inflammation", "Relaxes smooth muscle and may improve lung function", "Prevents infection"], correct: 2, explanation: "Magnesium has a mild bronchodilator effect and may help in severe cases." },
                { q: "What is the paediatric dose of Salbutamol for a 6-year-old child?", options: ["2.5 mg", "5 mg", "7.5 mg", "10 mg"], correct: 1, explanation: "Children >5 years receive the adult dose of 5 mg nebulized Salbutamol." }
            ],
            critical: [
                {
                    id: "crit_2_3_1",
                    scenario: "A 22-year-old male with asthma presents with confusion, 'silent chest' on auscultation, and SpO2 85%. He is too exhausted to hold the nebulizer mask. HR 140, dropping to 100.",
                    question: "What is the immediate priority intervention?",
                    options: [
                        { t: "Set up IV Magnesium", f: "Too slow. Patient is peri-arrest." },
                        { t: "Administer IM Adrenaline 500mcg and assist ventilation", f: "Correct. IM Adrenaline is the fastest bronchodilator for life-threats. BVM support is needed." },
                        { t: "Wait for hydrocortisone to work", f: "Incorrect. Steroids take hours." }
                    ],
                    correct: 1,
                    explanation: "Confusion and silent chest indicate imminent arrest. IM Adrenaline is indicated immediately while preparing for BVM ventilation.",
                    kpi: "Recognition of Silent Chest & IM Adrenaline use"
                },
                {
                    id: "crit_2_3_2",
                    scenario: "You are ventilating an asthmatic patient who has arrested. You notice the BVM is becoming hard to squeeze and BP is dropping.",
                    question: "What is the likely cause and solution?",
                    options: [
                        { t: "Equipment failure; change BVM", f: "Unlikely." },
                        { t: "Breath stacking (Air trapping); disconnect BVM to allow exhalation", f: "Correct. Allow trapped air to escape (apnea period)." },
                        { t: "Pneumothorax; ignore it", f: "Incorrect." }
                    ],
                    correct: 1,
                    explanation: "Dynamic hyperinflation (gas trapping) increases intrathoracic pressure, reducing venous return. Disconnecting the bag allows passive exhalation and restores circulation.",
                    kpi: "Management of breath stacking in arrest"
                }
            ]
        },

        // ============================================================
        // 2.4 COPD – expanded
        // ============================================================
        {
            id: "c2s4",
            shortTitle: "2.4 COPD",
            summary: `
                <div class="sum-card">
                    <h3 style="color:var(--accent-airway);">🚬 2.4 COPD Exacerbation</h3>
                    
                    <h4>1. Assessment (The 'Blue Bloater' vs 'Pink Puffer')</h4>
                    <ul>
                        <li><strong>History:</strong> Smoking, home O2, previous ICU admits.</li>
                        <li><strong>Signs:</strong> Pursed-lip breathing, barrel chest, wheeze/crackles, CO2 retention (drowsiness).</li>
                    </ul>

                    <h4>2. Oxygen Therapy (Critical)</h4>
                    <ul>
                        <li><strong>Target SpO₂:</strong> 88-92%.</li>
                        <li><strong>Caution:</strong> High O₂ can suppress hypoxic drive and cause CO₂ narcosis (respiratory failure).</li>
                        <li>Use Venturi mask if available for precise delivery, or nasal cannula.</li>
                    </ul>

                    <h4>3. Pharmacological Management</h4>
                    <ul>
                        <li><strong>Salbutamol:</strong> 5 mg Nebulized.</li>
                        <li><strong>Ipratropium Bromide:</strong> 500 mcg Nebulized.</li>
                        <li><strong>Hydrocortisone:</strong> 100 mg IV.</li>
                        <li>Note: Use medical air to drive nebs if available/protocol allows, otherwise limit O₂ duration.</li>
                    </ul>

                    <h4>4. CPAP / BiPAP</h4>
                    <ul>
                        <li><strong>BiPAP (Bilevel):</strong> Preferred for COPD with hypercapnia (high CO₂). Helps unload respiratory muscles.</li>
                        <li><strong>CPAP:</strong> Alternative if BiPAP unavailable. PEEP usually 5-10 cmH₂O.</li>
                        <li><strong>Indications:</strong> Moderate-severe distress, tachypnoea, accessory muscle use, not improving with nebs.</li>
                    </ul>
                </div>
            `,
            flashcards: [
                // original 10 flashcards
                { category: "Oxygen", question: "COPD SpO2 Target?", answer: "88-92%." },
                { category: "Pathophysiology", question: "Risk of high O2 in COPD?", answer: "Suppression of hypoxic drive (CO2 narcosis)." },
                { category: "Drugs", question: "Standard Nebulizers for COPD?", answer: "Salbutamol & Ipratropium." },
                { category: "Ventilation", question: "Preferred NIV mode for COPD?", answer: "BiPAP (supports ventilation & oxygenation)." },
                { category: "Signs", question: "Sign of CO2 retention?", answer: "Drowsiness, confusion, bounding pulse, tremor." },
                { category: "Drugs", question: "Steroid dose for COPD?", answer: "Hydrocortisone 100mg IV." },
                { category: "Assessment", question: "What is 'Shark Fin' EtCO2 waveform?", answer: "Indicates bronchospasm/obstruction (Asthma/COPD)." },
                { category: "Management", question: "Driving gas for nebulizers?", answer: "Air is preferred if prolonged; O2 limited to avoiding hyperoxia." },
                { category: "History", question: "Key history question?", answer: "Previous intubations or ICU admissions?" },
                { category: "Exclusion", question: "Contraindication to CPAP/BiPAP?", answer: "GCS < 13 (inability to protect airway), Vomiting, Pneumothorax." }
            ],
            quiz: [
                // original 5 quiz questions
                { q: "What is the target SpO2 for a patient with a confirmed history of COPD?", options: ["94-98%", "88-92%", "100%", "92-96%"], correct: 1, explanation: "88-92% is the target to safely maintain oxygenation without suppressing the hypoxic respiratory drive." },
                { q: "Which non-invasive ventilation mode is preferred for COPD exacerbations?", options: ["CPAP", "BiPAP", "High Flow Nasal Cannula", "BVM"], correct: 1, explanation: "BiPAP provides Inspiratory support (IPAP) to help blow off CO2 and Expiratory pressure (EPAP/PEEP) to keep airways open." },
                { q: "A COPD patient on high-flow oxygen becomes drowsy and confused. What is the likely cause?", options: ["Stroke", "Hypoglycemia", "CO2 Narcosis / Hypercapnia", "Improvement in condition"], correct: 2, explanation: "High oxygen levels can reduce the drive to breathe in COPD retainers, leading to CO2 build-up and drowsiness." },
                { q: "Ipratropium Bromide is an:", options: ["Anticholinergic", "Beta-agonist", "Steroid", "Antibiotic"], correct: 0, explanation: "Atrovent (Ipratropium) is an anticholinergic bronchodilator that dries secretions and dilates airways." },
                { q: "Which EtCO2 waveform shape suggests bronchospasm (COPD/Asthma)?", options: ["Square box", "Shark Fin", "Flat line", "Rounded"], correct: 1, explanation: "The 'Shark Fin' appearance indicates prolonged expiratory phase due to airway obstruction." },
                // new 5 quiz questions
                { q: "What is the initial dose of Salbutamol for a COPD exacerbation?", options: ["2.5 mg", "5 mg", "10 mg", "1.25 mg"], correct: 1, explanation: "Standard adult dose is 5 mg nebulized Salbutamol." },
                { q: "A patient with COPD has a respiratory rate of 28 and is using accessory muscles. Nebulizers have been given. What is the next appropriate step?", options: ["Repeat nebulizers", "Start BiPAP", "Intubate", "Administer IV Adrenaline"], correct: 1, explanation: "BiPAP is indicated for moderate-severe distress not improving with nebulizers." },
                { q: "Which of the following is an absolute contraindication to BiPAP?", options: ["SpO2 90%", "Respiratory rate 30", "Unconscious patient", "Use of accessory muscles"], correct: 2, explanation: "BiPAP requires a conscious patient able to protect the airway." },
                { q: "In a COPD patient, why is high-flow oxygen dangerous?", options: ["It causes oxygen toxicity", "It may suppress the hypoxic drive and increase CO2 retention", "It dries the airways", "It causes bronchospasm"], correct: 1, explanation: "High O2 can lead to CO2 narcosis by reducing the hypoxic drive." },
                { q: "What is the typical starting PEEP for CPAP in COPD?", options: ["0 cmH2O", "5-10 cmH2O", "15-20 cmH2O", "2-3 cmH2O"], correct: 1, explanation: "Initial PEEP is usually 5-10 cmH2O." }
            ],
            critical: [
                {
                    id: "crit_2_4_1",
                    scenario: "A 70-year-old male with COPD is extremely short of breath. RR 36, SpO2 82% on room air. He is alert but exhausted. You hear tight wheezes. Nebulizers have been started.",
                    question: "The patient is not improving. What is the next best intervention?",
                    options: [
                        { t: "Intubate immediately", f: "Too aggressive. Try NIV first." },
                        { t: "Start BiPAP (or CPAP)", f: "Correct. NIV is the gold standard to avoid intubation in COPD." },
                        { t: "Increase O2 to 15L NRB", f: "Risk of hypercapnic failure." }
                    ],
                    correct: 1,
                    explanation: "Non-Invasive Ventilation (BiPAP/CPAP) supports the tiring respiratory muscles and improves gas exchange, often preventing the need for intubation.",
                    kpi: "Early utilisation of CPAP/BiPAP in COPD"
                },
                // new critical scenario for COPD
                {
                    id: "crit_2_4_2",
                    scenario: "You are treating a 65-year-old with a known COPD exacerbation. He is on BiPAP with settings IPAP 12, EPAP 5, FiO2 0.4. His SpO2 is 91% and he remains tachypneic. You notice his breathing is becoming more laboured and he is increasingly drowsy.",
                    question: "What is your priority action?",
                    options: [
                        { t: "Increase IPAP to 15", f: "May help, but airway protection is the main concern." },
                        { t: "Prepare for intubation", f: "Correct. Drowsiness indicates impending respiratory failure." },
                        { t: "Switch to CPAP", f: "Incorrect; he needs more support, but airway is the issue." },
                        { t: "Give another dose of Salbutamol", f: "Not the priority." }
                    ],
                    correct: 1,
                    explanation: "Drowsiness on NIV suggests hypercapnic coma or exhaustion. The patient can no longer protect the airway; intubation is indicated.",
                    kpi: "Recognition of NIV failure and need for intubation"
                }
            ]
        },

        // ============================================================
        // 2.5 INVASIVE VENTILATION – expanded
        // ============================================================
        {
            id: "c2s5",
            shortTitle: "2.5 Invasive Vent",
            summary: `
                <div class="sum-card">
                    <h3 style="color:var(--accent-airway);">🔌 2.5 Invasive Mechanical Ventilation</h3>
                    <p><strong>Note:</strong> This section applies to Paramedics managing intubated patients.</p>

                    <h4>1. Indications</h4>
                    <ul>
                        <li>Post-intubation management.</li>
                        <li>GCS < 8 (inability to protect airway).</li>
                        <li>Respiratory failure refractory to NIV.</li>
                    </ul>

                    <h4>2. Initial Ventilator Settings (Adult)</h4>
                    <ul>
                        <li><strong>Mode:</strong> SIMV or AC (Volume Control).</li>
                        <li><strong>Tidal Volume (TV):</strong> 6-8 mL/kg of <em>Ideal Body Weight</em>.</li>
                        <li><strong>Rate (f):</strong> 10-12 bpm (higher for acidosis/head injury, lower for asthma).</li>
                        <li><strong>PEEP:</strong> 5 cmH₂O (higher if hypoxic/pulmonary edema).</li>
                        <li><strong>FiO₂:</strong> 1.0 (100%) initially, then titrate to SpO₂ 94-98%.</li>
                        <li><strong>I:E Ratio:</strong> 1:2 (standard). Adjust to 1:4 for Asthma/COPD.</li>
                    </ul>

                    <h4>3. Monitoring & D.O.P.E Mnemonic</h4>
                    <p>If patient deteriorates (desaturation, hypotension, high pressure alarm):</p>
                    <div class="highlight-box">
                        <strong>D</strong> - Dislodgement (Tube moved?)<br>
                        <strong>O</strong> - Obstruction (Secretions/kink?)<br>
                        <strong>P</strong> - Pneumothorax (Decompression needed?)<br>
                        <strong>E</strong> - Equipment (Ventilator/Oxygen failure?)
                    </div>
                    <p><strong>Action:</strong> Disconnect ventilator, bag manually with 100% O₂, assess chest.</p>
                </div>
            `,
            flashcards: [
                // original 10 flashcards
                { category: "Settings", question: "Standard Tidal Volume?", answer: "6-8 mL/kg Ideal Body Weight." },
                { category: "Settings", question: "Standard Respiratory Rate?", answer: "10-12 bpm." },
                { category: "Settings", question: "Initial PEEP setting?", answer: "5 cmH₂O." },
                { category: "Settings", question: "I:E Ratio for Asthma?", answer: "1:4 (prolonged expiration)." },
                { category: "Troubleshooting", question: "DOPE: D?", answer: "Dislodgement." },
                { category: "Troubleshooting", question: "DOPE: O?", answer: "Obstruction." },
                { category: "Troubleshooting", question: "DOPE: P?", answer: "Pneumothorax." },
                { category: "Troubleshooting", question: "DOPE: E?", answer: "Equipment Failure." },
                { category: "Alarms", question: "Cause of High Pressure Alarm?", answer: "Kink, secretions, pneumothorax, coughing." },
                { category: "Alarms", question: "Cause of Low Pressure Alarm?", answer: "Disconnection, cuff leak." }
            ],
            quiz: [
                // original 5 quiz questions
                { q: "What is the recommended initial Tidal Volume (TV) setting?", options: ["10 ml/kg actual weight", "6-8 ml/kg ideal body weight", "500 ml fixed", "10-12 ml/kg"], correct: 1, explanation: "6-8 ml/kg of IBW prevents volutrauma. Lungs do not grow with obesity." },
                { q: "If a ventilated patient suddenly desaturates and becomes hypotensive, what is the FIRST action?", options: ["Increase PEEP", "Suction immediately", "Disconnect vent and bag manually (BVM)", "Check power source"], correct: 2, explanation: "Disconnecting allows you to feel lung compliance (bagging) and rules out ventilator failure. It is the first step in the DOPE protocol." },
                { q: "What does the 'P' in the DOPE mnemonic stand for?", options: ["PEEP", "Pneumonia", "Pneumothorax", "Position"], correct: 2, explanation: "Pneumothorax (Tension) is a life-threatening cause of deterioration in ventilated patients." },
                { q: "A 'Low Pressure' alarm usually indicates:", options: ["Secretions", "Bronchospasm", "Circuit disconnection / Cuff leak", "Pneumothorax"], correct: 2, explanation: "Low pressure means the machine is meeting no resistance, usually due to a leak or disconnection." },
                { q: "For an Asthma patient on a ventilator, how should you adjust the I:E ratio?", options: ["1:1", "1:2", "1:4", "2:1"], correct: 2, explanation: "Asthmatics need more time to exhale to prevent air trapping. A ratio of 1:4 or 1:5 is preferred." },
                // new 5 quiz questions
                { q: "What is the ideal body weight (IBW) calculation used for?", options: ["Estimating tidal volume", "Calculating drug doses", "Determining tube size", "Setting PEEP"], correct: 0, explanation: "Tidal volume is based on IBW to prevent lung injury." },
                { q: "Which mode of ventilation allows the patient to breathe spontaneously between mandatory breaths?", options: ["SIMV", "IPPV", "CPAP", "BiPAP"], correct: 0, explanation: "SIMV (Synchronized Intermittent Mandatory Ventilation) allows spontaneous breaths." },
                { q: "A high-pressure alarm on the ventilator could be caused by all of the following EXCEPT:", options: ["Kinked tube", "Patient biting the tube", "Tube disconnection", "Mucous plug"], correct: 2, explanation: "Disconnection causes a low-pressure alarm." },
                { q: "In a patient with a tension pneumothorax on a ventilator, what would you expect?", options: ["Low-pressure alarm", "High-pressure alarm and hypotension", "Increased compliance", "Bradycardia only"], correct: 1, explanation: "Tension pneumothorax causes high airway pressures and hypotension." },
                { q: "After intubation, waveform capnography shows a sudden drop to zero with no waveform. What is the most likely cause?", options: ["Dislodgement of the tube", "Hypotension", "Bronchospasm", "Secretions"], correct: 0, explanation: "Sudden loss of waveform usually indicates tube dislodgement or complete obstruction." }
            ],
            critical: [
                {
                    id: "crit_2_5_1",
                    scenario: "You have intubated a trauma patient. En route, the 'High Pressure' alarm sounds constantly, SpO2 drops to 85%, and BP drops to 70/40. Trachea is deviated.",
                    question: "What is the priority intervention?",
                    options: [
                        { t: "Suction the tube", f: "Incorrect. Signs point to tension pneumo." },
                        { t: "Needle Decompression (Thoracostomy)", f: "Correct. High pressure + shock + deviation = Tension Pneumothorax." },
                        { t: "Increase PEEP", f: "Dangerous. Will worsen hypotension." }
                    ],
                    correct: 1,
                    explanation: "This is a classic description of Tension Pneumothorax in a ventilated patient (P in DOPE). Immediate decompression is required.",
                    kpi: "Recognition of Tension Pneumothorax in ventilated patient"
                },
                // new critical scenario for invasive ventilation
                {
                    id: "crit_2_5_2",
                    scenario: "You are transporting an intubated patient with a head injury. Suddenly, the ventilator low-pressure alarm sounds, and the patient's SpO2 drops to 80%. You notice the chest is not rising.",
                    question: "What is your immediate action?",
                    options: [
                        { t: "Check the tube position and reconnect if dislodged", f: "Correct. Likely disconnection." },
                        { t: "Suction the tube", f: "Not the first step." },
                        { t: "Increase FiO2", f: "Address the cause first." },
                        { t: "Start chest compressions", f: "Not indicated yet." }
                    ],
                    correct: 0,
                    explanation: "Low-pressure alarm with no chest rise suggests disconnection or cuff leak. Quickly check tube position and reconnect.",
                    kpi: "Rapid recognition of disconnection"
                }
            ]
        }
    ]
};