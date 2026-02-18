/* ========== c-index.js – Full CPG Index (Fuzzy + Highlight Search) ========== */

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

    /* ============================================================
       ⚠️ KEEP YOUR COMPLETE ORIGINAL CHAPTERS ARRAY BELOW
       DO NOT REMOVE OR OMIT ANY TITLE
    ============================================================ */

    const CHAPTERS = [
        /* 
        >>>>> PASTE YOUR FULL ORIGINAL CHAPTER LIST HERE <<<<<
        >>>>> DO NOT REMOVE ANY ENTRY <<<<<
        */
    ];

    /* ============================================================ */

    const categories = {
        universal: { name: "🛡️ Universal Care", color: "var(--accent-universal)" },
        airway: { name: "🫁 Airway & Breathing", color: "var(--accent-airway)" },
        cardio: { name: "❤️ Cardiovascular", color: "var(--accent-cardio)" },
        resus: { name: "🔄 Resuscitation", color: "var(--accent-resus)" },
        neuro: { name: "🧠 Neurological", color: "var(--accent-neuro)" },
        medical: { name: "📋 General Medical", color: "var(--accent-medical)" },
        trauma: { name: "🩻 Trauma", color: "var(--accent-trauma)" },
        environmental: { name: "🌡️ Environmental", color: "var(--accent-environmental)" },
        pediatric: { name: "👶 Pediatric", color: "var(--accent-pediatric)" },
        obstetric: { name: "🤰 Obstetrics", color: "var(--accent-obstetric)" },
        mci: { name: "🚨 Major Incident Triage", color: "var(--accent-mci)" },
        scope: { name: "📘 Scope & Medications", color: "var(--accent-scope)" }
    };

    let html = `<div class="sum-card" id="indexRoot">
        <h3>📚 Complete DCAS CPG 2025 Index</h3>
    `;

    html += `
        <div class="index-search-wrapper" style="display:flex;align-items:center;background:var(--glass-bg);border:1px solid var(--glass-border);border-radius:40px;padding:4px 4px 4px 16px;margin-bottom:24px;backdrop-filter:blur(10px);box-shadow:var(--glass-shadow);">
            <span style="font-size:1.2rem;color:var(--text-secondary);margin-right:8px;">🔍</span>
            <input type="text" id="indexSearchInput" placeholder="Search guidelines..." style="flex:1;background:transparent;border:none;padding:12px 0;font-size:1rem;color:var(--text-primary);outline:none;">
            <button id="indexSearchClearBtn" style="display:none;background:transparent;border:none;width:32px;height:32px;border-radius:50%;align-items:center;justify-content:center;font-size:1rem;color:var(--text-secondary);cursor:pointer;margin-right:4px;">✕</button>
        </div>
        <div id="indexTableContainer">
    `;

    for (let group in categories) {
        const groupChapters = CHAPTERS.filter(ch => ch.chapterGroup === group);
        if (!groupChapters.length) continue;

        html += `<h4 class="index-category" data-group="${group}" style="color:${categories[group].color};margin-top:20px;">${categories[group].name}</h4>`;
        html += `<table class="index-table" data-group="${group}" style="width:100%;border-collapse:collapse;">`;

        groupChapters.forEach(ch => {
            const baseFile = ch.chapterFile || ch.id;
            const sectionParam = ch.sectionParam ? `&section=${ch.sectionParam}` : '';
            const link = `${baseFile}.html?view=summary${sectionParam}`;

            html += `
                <tr class="index-row"
                    data-title="${(ch.shortTitle + ' ' + ch.title).toLowerCase()}">
                    <td>
                        <a href="${link}" 
                           class="index-topic-link"
                           data-original="${ch.shortTitle}"
                           style="display:block;padding:10px 0;font-weight:500;font-size:1.05rem;color:var(--text-primary);text-decoration:none;">
                            ${ch.shortTitle}
                        </a>
                    </td>
                </tr>
            `;
        });

        html += `</table>`;
    }

    html += `
        <div id="noResultsMsg" style="display:none;padding:20px;text-align:center;color:var(--text-secondary);font-size:1rem;">
            No matching guidelines found.
        </div>
    `;

    html += `</div></div>`;

    /* ================= FUZZY SEARCH ENGINE ================= */

    setTimeout(() => {

        const input = document.getElementById('indexSearchInput');
        const clearBtn = document.getElementById('indexSearchClearBtn');
        const rows = document.querySelectorAll('.index-row');
        const categoriesHeaders = document.querySelectorAll('.index-category');
        const tables = document.querySelectorAll('.index-table');
        const noResults = document.getElementById('noResultsMsg');

        if (!input) return;

        function fuzzyMatch(text, query) {
            let t = text.toLowerCase();
            let q = query.toLowerCase();
            let ti = 0;
            let qi = 0;
            while (ti < t.length && qi < q.length) {
                if (t[ti] === q[qi]) qi++;
                ti++;
            }
            return qi === q.length;
        }

        function highlightFuzzy(text, query) {
            let result = "";
            let qIndex = 0;
            let q = query.toLowerCase();

            for (let i = 0; i < text.length; i++) {
                if (qIndex < q.length && text[i].toLowerCase() === q[qIndex]) {
                    result += `<span style="background:var(--accent-primary);color:#fff;border-radius:3px;padding:0 2px;">${text[i]}</span>`;
                    qIndex++;
                } else {
                    result += text[i];
                }
            }
            return result;
        }

        function filterIndex() {
            const query = input.value.trim().toLowerCase();
            let visibleCount = 0;

            clearBtn.style.display = query ? 'flex' : 'none';

            rows.forEach(row => {
                const link = row.querySelector('.index-topic-link');
                const original = link.getAttribute('data-original');
                const title = row.getAttribute('data-title');

                if (!query) {
                    row.style.display = '';
                    link.innerHTML = original;
                    visibleCount++;
                } else if (fuzzyMatch(title, query)) {
                    row.style.display = '';
                    link.innerHTML = highlightFuzzy(original, query);
                    visibleCount++;
                } else {
                    row.style.display = 'none';
                }
            });

            tables.forEach(table => {
                const group = table.getAttribute('data-group');
                const header = document.querySelector(`.index-category[data-group="${group}"]`);
                const visibleRows = table.querySelectorAll('.index-row:not([style*="display: none"])');
                if (visibleRows.length === 0) {
                    table.style.display = 'none';
                    if (header) header.style.display = 'none';
                } else {
                    table.style.display = '';
                    if (header) header.style.display = '';
                }
            });

            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        }

        input.addEventListener('input', filterIndex);

        clearBtn.addEventListener('click', () => {
            input.value = '';
            filterIndex();
            input.focus();
        });

    }, 50);

    return html;
}