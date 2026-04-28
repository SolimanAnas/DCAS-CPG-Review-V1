/**
 * DCAS-Style Prehospital ECG Interpretation Engine
 * ALS Paramedic Level
 */
const ECGEngine = (function() {

    // --- 1. RATE & INTERVAL ANALYSIS ---
    const analyzeRate = (bpm) => {
        if (bpm === 0) return 'Arrest';
        if (bpm < 50) return 'Bradycardia'; // Symptomatic threshold context
        if (bpm > 100 && bpm <= 150) return 'Tachycardia';
        if (bpm > 150) return 'Extreme Tachycardia';
        return 'Normal';
    };

    const analyzeIntervals = (pr, qrs) => {
        return {
            prStatus: pr > 200 ? 'Prolonged' : 'Normal',
            qrsStatus: qrs >= 120 ? 'Wide' : 'Narrow'
        };
    };

    // --- 2. CRITICAL RHYTHM DETECTION (ARREST) ---
    const detectCriticalRhythm = (rhythmName, hasPulse) => {
        const arrestRhythms = ['VF', 'VT', 'Asystole', 'PEA'];

        if (arrestRhythms.includes(rhythmName)) {
            if (rhythmName === 'VF' || (rhythmName === 'VT' && !hasPulse)) {
                return { isArrest: true, type: 'Shockable', rhythm: rhythmName };
            }
            if (rhythmName === 'Asystole' || (rhythmName === 'PEA' && !hasPulse)) {
                return { isArrest: true, type: 'Non-Shockable', rhythm: rhythmName };
            }
        }

        if (rhythmName === 'VT' && hasPulse) {
            return { isArrest: false, type: 'Unstable/Stable Tachycardia', rhythm: rhythmName };
        }

        return { isArrest: false };
    };

    // --- 3. RHYTHM CLASSIFICATION ---
    const analyzeRhythm = (params) => {
        const { regular, pWaves, rateCategory, qrsStatus } = params;

        if (!regular && !pWaves && qrsStatus === 'Narrow') return 'Atrial Fibrillation';
        if (regular && !pWaves && qrsStatus === 'Narrow' && rateCategory.includes('Tachycardia')) return 'SVT';
        if (regular && pWaves && rateCategory === 'Normal') return 'Normal Sinus Rhythm';
        if (regular && pWaves && rateCategory === 'Bradycardia') return 'Sinus Bradycardia';

        return 'Undetermined Rhythm'; // Defer to paramedic judgment
    };

    // --- 4. STEMI DETECTION ENGINE ---
    const detectSTEMI = (elevations) => {
        // Elevations expected in mm: { I: 0, II: 2, V1: 3, ... }
        const territories = {
            Inferior: ['II', 'III', 'aVF'],
            Anterior: ['V1', 'V2', 'V3', 'V4'],
            Lateral: ['I', 'aVL', 'V5', 'V6']
        };

        let result = { isStemi: false, territories: [], rvInvolvementRisk: false };

        for (const [territory, leads] of Object.entries(territories)) {
            let elevatedCount = 0;

            leads.forEach(lead => {
                const threshold = lead.startsWith('V') ? 2 : 1; // 2mm chest, 1mm limb
                if (elevations[lead] !== undefined && elevations[lead] >= threshold) {
                    elevatedCount++;
                }
            });

            // Contiguous leads logic (simplification for field use: any 2 in a territory)
            if (elevatedCount >= 2) {
                result.isStemi = true;
                result.territories.push(territory);

                // Flag Inferior for Right Ventricular involvement (Nitro precaution)
                if (territory === 'Inferior') result.rvInvolvementRisk = true;
            }
        }
        return result;
    };

    // --- 5. SPECIAL PATTERNS ---
    const detectSpecial = (params, qrsStatus, rateCategory) => {
        let findings = [];
        if (params.peakedT && qrsStatus === 'Wide') findings.push('Suspected Hyperkalemia');
        if (params.s1q3t3 && rateCategory.includes('Tachycardia')) findings.push('Suspected Pulmonary Embolism');
        return findings;
    };

    // --- 6. CLINICAL DECISION ENGINE (ROUTER) ---
    const generateClinicalDecision = (arrestData, stemiData, rhythm, rateCategory, specialFindings) => {
        let decision = {
            priority: 'Green',
            action: 'Monitor and routine care.',
            drugs: [],
            pathway: 'Standard'
        };

        // PRIORITY 1: CARDIAC ARREST
        if (arrestData.isArrest) {
            decision.priority = 'Arrest - CODE RED';
            decision.pathway = `ACLS - ${arrestData.type}`;
            decision.action = arrestData.type === 'Shockable'
                ? 'Initiate high-quality CPR. Immediate DEFIBRILLATION.'
                : 'Initiate high-quality CPR. Administer Epinephrine 1mg ASAP.';
            return decision;
        }

        // PRIORITY 2: STEMI
        if (stemiData.isStemi) {
            decision.priority = 'Red - CRITICAL';
            decision.pathway = 'ACS / STEMI Pathway';
            decision.action = `Transmit 12-lead ECG. Alert receiving PCI center for ${stemiData.territories.join(' & ')} STEMI.`;
            decision.drugs.push('Aspirin 300mg PO (if no contraindications)');

            if (stemiData.rvInvolvementRisk) {
                decision.drugs.push('⚠️ WITHHOLD Nitroglycerin (Inferior STEMI - rule out RV involvement first)');
            } else {
                decision.drugs.push('Nitroglycerin 0.4mg SL (if BP > 90 systolic)');
            }
            return decision;
        }

        // PRIORITY 3: UNSTABLE/CRITICAL RHYTHMS (Non-Arrest)
        if (rhythm === 'VT' || rhythm === 'SVT' || rateCategory === 'Extreme Tachycardia') {
            decision.priority = 'Yellow - URGENT';
            decision.pathway = 'Tachycardia with Pulse';
            decision.action = 'Assess for hemodynamic instability (Hypotension, AMS, Ischemic Chest Pain). Prepare for synchronized cardioversion if unstable.';
            decision.drugs = ['Consider Amiodarone (VT) or Adenosine (SVT) per CPG if stable.'];
            return decision;
        }

        if (rateCategory === 'Bradycardia') {
            decision.priority = 'Yellow - URGENT';
            decision.pathway = 'Bradycardia';
            decision.action = 'Assess for signs of poor perfusion. Prepare pacing pads.';
            decision.drugs = ['Atropine 1mg IV (if unstable)'];
            return decision;
        }

        // PRIORITY 4: SPECIAL PATTERNS
        if (specialFindings.length > 0) {
            decision.priority = 'Yellow - INVESTIGATE';
            decision.action = `Address underlying cause: ${specialFindings.join(', ')}`;
            if (specialFindings.includes('Suspected Hyperkalemia')) {
                decision.drugs = ['Calcium Gluconate', 'Albuterol', 'Sodium Bicarbonate per CPG'];
            }
            return decision;
        }

        return decision;
    };

    // --- MAIN EXPORT: FULL EVALUATION ---
    const evaluate = (ecgInput) => {
        const rateCategory = analyzeRate(ecgInput.bpm);
        const { qrsStatus } = analyzeIntervals(ecgInput.prInterval, ecgInput.qrsWidth);
        const arrestData = detectCriticalRhythm(ecgInput.rhythmSelect, ecgInput.hasPulse);

        let rhythm = ecgInput.rhythmSelect;
        if (!rhythm || rhythm === 'Auto') {
            rhythm = analyzeRhythm({
                regular: ecgInput.isRegular,
                pWaves: ecgInput.hasPWaves,
                rateCategory: rateCategory,
                qrsStatus: qrsStatus
            });
        }

        const stemiData = detectSTEMI(ecgInput.stElevations);
        const specialFindings = detectSpecial(ecgInput, qrsStatus, rateCategory);

        const decision = generateClinicalDecision(arrestData, stemiData, rhythm, rateCategory, specialFindings);

        return {
            diagnostics: {
                rate: `${ecgInput.bpm} bpm (${rateCategory})`,
                rhythm: rhythm,
                qrs: qrsStatus,
                stemi: stemiData,
                special: specialFindings
            },
            clinical: decision
        };
    };

    return { analyze: evaluate };
})();