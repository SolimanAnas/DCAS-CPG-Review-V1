/* ========== c3-1 – Chest Pain / Acute Coronary Syndrome ========== */
window.CPG_DATA = {
    id: "c3-1",
    title: "CPG 3.1 Chest Pain / Acute Coronary Syndrome",
    shortTitle: "Chest Pain / ACS",
    
    summary: `<div class="sum-card">
        <h3>Primary Assessment</h3>
        <ul>
            <li>Ensure scene safety and initiate primary survey (Airway, Breathing, Circulation).</li>
            <li>Obtain full vital signs including HR, BP, RR, SpO₂, and level of consciousness.</li>
            <li>Assess chest pain using OPQRST (Onset, Provocation, Quality, Radiation, Severity, Time).</li>
            <li>Recognize ischemic features: substernal pressure, squeezing, heaviness, radiation to arm, jaw, neck or back.</li>
            <li>Identify associated symptoms: diaphoresis, nausea, vomiting, dyspnea, palpitations.</li>
            <li>Consider atypical presentations in elderly, diabetic, and female patients.</li>
            <li>Perform a <strong>12-lead ECG</strong> on all suspected cardiac chest pain patients.</li>
            <li>Initiate continuous cardiac monitoring immediately.</li>
        </ul>

        <h3>Interventions</h3>
        <ul>
            <li>Administer <strong>Oxygen</strong> if SpO₂ &lt;94% or signs of hypoxia are present.</li>
            <li>Administer <strong>Aspirin</strong> to all suspected ACS patients unless contraindicated.</li>
            <li>Administer <strong>GTN</strong> if SBP &gt;90 mmHg and no contraindications exist.</li>
            <li>Avoid GTN in patients with recent phosphodiesterase inhibitor use or tachy/brady arrhythmias.</li>
            <li>Consider <strong>Morphine</strong> for persistent severe pain, monitoring for hypotension.</li>
            <li>If SBP &lt;90 mmHg, administer <strong>Normal Saline 250 mL IV/IO</strong> cautiously and reassess.</li>
            <li>Apply defibrillation pads in STEMI patients due to high risk of arrhythmias.</li>
            <li>Consult Telemedicine if ECG findings are unclear.</li>
            <li>Transport urgently to the closest most appropriate cardiac-capable facility.</li>
        </ul>
    </div>`,

    flashcards: [
        { front: "Primary cause of ACS?", back: "Plaque rupture with thrombus formation causing reduced coronary blood flow." },
        { front: "What ECG must be performed in suspected ACS?", back: "A 12-lead ECG." },
        { front: "SpO₂ threshold for oxygen administration?", back: "Administer oxygen if SpO₂ is less than 94%." },
        { front: "Minimum SBP before GTN can be given?", back: "Systolic blood pressure must be greater than 90 mmHg." },
        { front: "Medication given to all ACS patients unless contraindicated?", back: "Aspirin." },
        { front: "Initial fluid bolus for hypotensive ACS?", back: "Normal Saline 250 mL IV/IO cautiously, reassess before repeating." },
        { front: "Why apply defibrillation pads in STEMI?", back: "High risk of ventricular arrhythmias and cardiac arrest." },
        { front: "Typical ischemic chest pain description?", back: "Substernal pressure, heaviness, or squeezing often radiating to arm or jaw." },
        { front: "GTN contraindication related to medications?", back: "Recent use of phosphodiesterase inhibitors such as sildenafil." },
        { front: "Why continuous ECG monitoring is required?", back: "To detect arrhythmias and early clinical deterioration." }
    ],

    quiz: [
        {
            question: "A 60-year-old male presents with crushing chest pain and SBP 85 mmHg. What is the most appropriate intervention?",
            options: [
                "Administer GTN immediately",
                "Administer 250 mL Normal Saline IV",
                "Withhold all treatment",
                "Administer large volume 1L bolus rapidly"
            ],
            correct: 1,
            feedback: "GTN is contraindicated in hypotension. A cautious 250 mL Normal Saline bolus is recommended if SBP is less than 90 mmHg."
        },
        {
            question: "Which intervention is mandatory for all suspected cardiac chest pain patients?",
            options: [
                "Immediate intubation",
                "12-lead ECG",
                "CT scan",
                "Sedation"
            ],
            correct: 1,
            feedback: "All patients with suspected ACS must receive a 12-lead ECG to identify STEMI or other ischemic changes."
        },
        {
            question: "GTN should be avoided in which scenario?",
            options: [
                "SBP 130 mmHg",
                "Recent sildenafil use",
                "Heart rate 80 bpm",
                "Pain score 6/10"
            ],
            correct: 1,
            feedback: "Recent phosphodiesterase inhibitor use increases the risk of severe hypotension when GTN is administered."
        }
    ],

    critical: [
        {
            scenarioTitle: "Unfolding Case Study: Evolving STEMI",
            initialPresentation: "62-year-old male with central crushing chest pain radiating to left arm. HR 104, BP 138/86, RR 22, SpO₂ 95%.",
            steps: [
                {
                    cjmmStep: "Step 1: Recognize Cues",
                    context: "Patient is diaphoretic and nauseated with persistent chest pain.",
                    question: "What is the most appropriate next action?",
                    type: "multiple_choice",
                    options: [
                        "Perform 12-lead ECG and administer Aspirin",
                        "Delay ECG until hospital arrival",
                        "Administer large fluid bolus",
                        "Provide sedation"
                    ],
                    correct: 0,
                    feedback: "Early ECG acquisition and Aspirin administration are priority interventions in suspected ACS."
                },
                {
                    cjmmStep: "Step 2: Prioritize Hypotension",
                    context: "After GTN administration, BP drops to 84/60.",
                    question: "What is the most appropriate management?",
                    type: "multiple_choice",
                    options: [
                        "Repeat GTN dose",
                        "Administer 250 mL Normal Saline IV",
                        "Ignore BP change",
                        "Administer high-dose morphine"
                    ],
                    correct: 1,
                    feedback: "If SBP drops below 90 mmHg, administer a cautious 250 mL fluid bolus and monitor for improvement."
                }
            ]
        }
    ]
};