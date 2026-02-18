/* ========== c-index.js – Full CPG Index (Glassy Search Bar) ========== */

window.CPG_DATA = {
    id: "c-index",
    title: "DCAS CPG Index",
    shortTitle: "📋 Full Index",
    sections: [
        {
            id: "c-index-main",
            shortTitle: "Complete Index",
            summary: generateIndexHTML(),
            quiz: [],
            flashcards: [],
            critical: []
        }
    ]
};

function generateIndexHTML() {

    /* ===================== FULL ORIGINAL CHAPTER ARRAY ===================== */
    const CHAPTERS = [
        // (your full chapter list – kept exactly as before)
        // ... (omitted for brevity, but you must keep your actual list here) ...
    ];

    /* ================= ORIGINAL LAYOUT – ENHANCED VISUALS ================= */
    const categories = {
        universal: "🛡️ Universal Care",
        airway: "🫁 Airway & Breathing",
        cardio: "❤️ Cardiovascular",
        resus: "🔄 Resuscitation",
        neuro: "🧠 Neurological",
        medical: "📋 General Medical",
        trauma: "🩻 Trauma",
        environmental: "🌡️ Environmental",
        pediatric: "👶 Pediatric",
        obstetric: "🤰 Obstetrics & Gynecology",
        mci: "🚨 Major Incident Triage",
        scope: "📘 Scope & Medications"
    };

    let html = `<div class="sum-card" id="indexRoot">
        <h3>📚 Complete DCAS CPG 2025 Index</h3>

        <!-- Glassy search bar styles – matches the home page exactly -->
        <style>
            .index-search-wrapper {
                display: flex;
                align-items: center;
                background: var(--glass-bg);
                border: 1px solid var(--glass-border);
                border-radius: 40px;
                padding: 4px 4px 4px 20px;
                margin-bottom: 24px;
                backdrop-filter: blur(10px);
                box-shadow: var(--glass-shadow);
            }
            .index-search-wrapper span {
                font-size: 1.2rem;
                margin-right: 8px;
                color: var(--text-secondary);
            }
            .index-search-wrapper input {
                flex: 1;
                background: transparent;
                border: none;
                padding: 12px 0;
                font-size: 1rem;
                color: var(--text-primary);
                outline: none;
            }
            .index-search-wrapper input::placeholder {
                color: var(--text-secondary);
                opacity: 0.7;
            }
            .index-search-wrapper button {
                background: transparent;
                border: none;
                width: 32px;
                height: 32px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1rem;
                color: var(--text-secondary);
                cursor: pointer;
                transition: all 0.2s;
                margin-right: 4px;
                padding: 0;
            }
            .index-search-wrapper button:hover {
                background: rgba(255,255,255,0.1);
                color: var(--text-primary);
            }
            .index-search-wrapper button:active {
                transform: scale(0.95);
            }
            .index-category {
                margin: 20px 0 10px;
                font-size: 1.2rem;
                font-weight: 700;
                border-bottom: 2px solid currentColor;
                padding-bottom: 5px;
            }
            .index-table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 15px;
            }
            .index-topic-link {
                display: block;
                padding: 12px 0;
                font-weight: 500;
                font-size: 1.05rem;
                color: var(--text-primary);
                text-decoration: none;
                border-bottom: 1px solid rgba(128, 128, 128, 0.15);
                transition: color 0.2s, padding-left 0.2s, background 0.2s;
            }
            .index-topic-link:hover {
                color: var(--primary-accent);
                padding-left: 8px;
                background: rgba(0,0,0,0.02);
                border-radius: 8px 0 0 8px;
            }
            .index-no-results {
                padding: 30px;
                text-align: center;
                color: var(--text-secondary);
                font-style: italic;
                background: var(--glass-bg);
                border-radius: 16px;
                border: 1px dashed var(--glass-border);
            }
        </style>

        <!-- Search bar – using the new wrapper class -->
        <div class="index-search-wrapper">
            <span>🔍</span>
            <input type="text" id="indexSearchInput" placeholder="Search guidelines..." value="">
            <button id="indexSearchClearBtn" style="display: none;">✕</button>
        </div>

        <div id="indexTableContainer">
    `;

    for (let group in categories) {
        const groupChapters = CHAPTERS.filter(ch => ch.chapterGroup === group);
        if (!groupChapters.length) continue;

        // Use the group name to set the category color via inline style (var(--accent-*))
        html += `<h4 class="index-category" style="color: var(--accent-${group});">${categories[group]}</h4>`;
        html += `<table class="index-table">`;

        groupChapters.forEach(ch => {
            const baseFile = ch.chapterFile || ch.id;
            const sectionParam = ch.sectionParam ? `&section=${ch.sectionParam}` : '';
            const link = `${baseFile}.html?view=summary${sectionParam}`;

            html += `
                <tr class="index-row" data-title="${(ch.shortTitle + ' ' + ch.title).toLowerCase()}">
                    <td>
                        <a href="${link}" class="index-topic-link" data-original="${ch.shortTitle}">
                            ${ch.shortTitle}
                        </a>
                    </td>
                </tr>
            `;
        });

        html += `</table>`;
    }

    html += `<div id="noResultsMsg" class="index-no-results" style="display: none;">No matching guidelines found.</div>`;
    html += `</div></div>`;

    /* ================= SEARCH LOGIC (EXACTLY AS ORIGINAL) ================= */
    setTimeout(() => {
        const input = document.getElementById('indexSearchInput');
        const clearBtn = document.getElementById('indexSearchClearBtn');
        const rows = document.querySelectorAll('.index-row');
        const tables = document.querySelectorAll('.index-table');
        const headers = document.querySelectorAll('.index-category');
        const noResults = document.getElementById('noResultsMsg');

        function fuzzyMatch(text, query) {
            let t = text.toLowerCase();
            let q = query.toLowerCase();
            let ti = 0, qi = 0;
            while (ti < t.length && qi < q.length) {
                if (t[ti] === q[qi]) qi++;
                ti++;
            }
            return qi === q.length;
        }

        function highlight(text, query) {
            let result = "";
            let qIndex = 0;
            query = query.toLowerCase();
            for (let i = 0; i < text.length; i++) {
                if (qIndex < query.length && text[i].toLowerCase() === query[qIndex]) {
                    result += `<span style="background: var(--primary-accent); color: #fff; border-radius: 3px; padding: 0 2px;">${text[i]}</span>`;
                    qIndex++;
                } else {
                    result += text[i];
                }
            }
            return result;
        }

        input.addEventListener('input', () => {
            const query = input.value.trim();
            clearBtn.style.display = query ? 'flex' : 'none';
            const lowerQuery = query.toLowerCase();
            let visibleCount = 0;

            rows.forEach(row => {
                const link = row.querySelector('.index-topic-link');
                const original = link.getAttribute('data-original');
                const title = row.getAttribute('data-title');

                if (!query) {
                    row.style.display = '';
                    link.innerHTML = original;
                    visibleCount++;
                } else if (fuzzyMatch(title, lowerQuery)) {
                    row.style.display = '';
                    link.innerHTML = highlight(original, query);
                    visibleCount++;
                } else {
                    row.style.display = 'none';
                }
            });

            tables.forEach((table, i) => {
                const visibleRows = table.querySelectorAll('.index-row:not([style*="display: none"])');
                if (visibleRows.length === 0) {
                    table.style.display = 'none';
                    if (headers[i]) headers[i].style.display = 'none';
                } else {
                    table.style.display = '';
                    if (headers[i]) headers[i].style.display = '';
                }
            });

            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        });

        clearBtn.addEventListener('click', () => {
            input.value = '';
            clearBtn.style.display = 'none';
            input.dispatchEvent(new Event('input'));
        });
    }, 50);

    return html;
}