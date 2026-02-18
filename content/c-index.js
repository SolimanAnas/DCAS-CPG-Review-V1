/* ========== c-index.js – Full CPG Index (Filtered Search Version) ========== */
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

    const CHAPTERS = [
        // Universal Care
        { id: "c1s1", shortTitle: "1.1 Universal Care", title: "Universal Care – Core Assessment", chapterFile: "c1", sectionParam: "c1s1", chapterGroup: "universal" },
        { id: "c1s2", shortTitle: "1.2 Documentation", title: "Patient Care Documentation", chapterFile: "c1", sectionParam: "c1s2", chapterGroup: "universal" },
        { id: "c1s3", shortTitle: "1.3 Triage", title: "Patient Triage Categories", chapterFile: "c1", sectionParam: "c1s3", chapterGroup: "universal" },
        { id: "c1s4", shortTitle: "1.4 Functional Needs", title: "Functional Needs", chapterFile: "c1", sectionParam: "c1s4", chapterGroup: "universal" },
        { id: "c1s5", shortTitle: "1.5 Treated at Scene", title: "Treated at Scene", chapterFile: "c1", sectionParam: "c1s5", chapterGroup: "universal" },
        { id: "c1s6", shortTitle: "1.6 Refusal of Transfer", title: "Patient Refusal of Transfer", chapterFile: "c1", sectionParam: "c1s6", chapterGroup: "universal" },

        // Airway
        { id: "c2s1", shortTitle: "2.1 Airway Management", title: "Airway & Breathing", chapterFile: "c2", sectionParam: "c2s1", chapterGroup: "airway" },
        { id: "c2s2", shortTitle: "2.2 FBAO", title: "Foreign Body Airway Obstruction", chapterFile: "c2", sectionParam: "c2s2", chapterGroup: "airway" },
        { id: "c2s3", shortTitle: "2.3 Asthma", title: "Asthma", chapterFile: "c2", sectionParam: "c2s3", chapterGroup: "airway" },
        { id: "c2s4", shortTitle: "2.4 COPD", title: "COPD", chapterFile: "c2", sectionParam: "c2s4", chapterGroup: "airway" },
        { id: "c2s5", shortTitle: "2.5 Invasive Ventilation", title: "Invasive Ventilation", chapterFile: "c2", sectionParam: "c2s5", chapterGroup: "airway" }
    ];

    const categories = {
        universal: { name: "🛡️ Universal Care", color: "var(--accent-universal)" },
        airway: { name: "🫁 Airway & Breathing", color: "var(--accent-airway)" }
    };

    let html = `<div class="sum-card" id="indexRoot"><h3>📚 Complete DCAS CPG 2025 Index</h3>`;

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
                <tr class="index-row" data-title="${(ch.shortTitle + ' ' + ch.title).toLowerCase()}">
                    <td>
                        <a href="${link}" class="index-topic-link" style="display:block;padding:10px 0;font-weight:500;font-size:1.05rem;color:var(--text-primary);text-decoration:none;">
                            ${ch.shortTitle}
                        </a>
                    </td>
                </tr>
            `;
        });

        html += `</table>`;
    }

    html += `</div></div>`;

    // Delay script so DOM exists
    setTimeout(() => {
        const input = document.getElementById('indexSearchInput');
        const clearBtn = document.getElementById('indexSearchClearBtn');

        if (!input) return;

        function filterIndex() {
            const query = input.value.trim().toLowerCase();
            const rows = document.querySelectorAll('.index-row');
            const categories = document.querySelectorAll('.index-category');
            const tables = document.querySelectorAll('.index-table');

            clearBtn.style.display = query ? 'flex' : 'none';

            rows.forEach(row => {
                const title = row.getAttribute('data-title');
                const match = title.includes(query);
                row.style.display = match ? '' : 'none';
            });

            tables.forEach(table => {
                const visibleRows = table.querySelectorAll('.index-row:not([style*="display: none"])');
                const group = table.getAttribute('data-group');
                const header = document.querySelector(`.index-category[data-group="${group}"]`);
                if (visibleRows.length === 0) {
                    table.style.display = 'none';
                    if (header) header.style.display = 'none';
                } else {
                    table.style.display = '';
                    if (header) header.style.display = '';
                }
            });
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