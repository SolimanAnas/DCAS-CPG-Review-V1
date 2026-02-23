/* ========== app.js – DCAS CPG 2025 (Final Mobile UX) ========== */
(function(){
"use strict";

// ---------- STORAGE SYSTEM ----------  
const storage = (function() {  
    const KEY = 'dcas_cpg_stats';  
    const defaultStats = { totalAttempts: 0, chapters: {}, critical: { total: 0, correct: 0 } };  
    function load() {  
        try {  
            const data = localStorage.getItem(KEY);  
            return data ? JSON.parse(data) : defaultStats;  
        } catch(e) { return defaultStats; }  
    }  
    function save(stats) {  
        try { localStorage.setItem(KEY, JSON.stringify(stats)); } catch(e) {}  
    }  
    return { load, save };  
})();  

// ---------- DATA & DOM ----------  
const chapterData = window.CPG_DATA;  
const isChapterMissing = !chapterData;  

const dom = {  
    main: document.getElementById('mainContent'),  
    homeBtn: document.getElementById('homeBtn'),  
    pageTitle: document.getElementById('pageTitle')
};  

// ---------- STATE MANAGEMENT ----------  
let state = {  
    sections: chapterData ? (chapterData.sections || null) : null,  
    activeSectionId: null,  
    activeSection: null,  
    quizData: [],  
    mistakes: [],  
    qIndex: 0,  
    score: 0,  
    flashData: [],  
    fIndex: 0,  
    criticalData: [],  
    criticalIndex: 0,  
    criticalScore: 0,  
    stats: storage.load()  
};  

// Handle protocols that do not have multiple sections
if (!state.sections && chapterData) {
    state.sections = [{
        id: chapterData.id,
        shortTitle: chapterData.shortTitle,
        summary: chapterData.summary || '',
        quiz: chapterData.quiz || [],
        flashcards: chapterData.flashcards || [],
        critical: chapterData.critical || []
    }];
}

// ---------- UTILITIES ----------  
const utils = {  
    shuffle: (arr) => [...arr].sort(() => Math.random() - 0.5),  
    safeScrollTop: () => {  
        window.scrollTo(0,0);  
        document.body.scrollTop = 0;  
        document.documentElement.scrollTop = 0;  
    },  
    escapeHTML: (str) => {  
        if (!str) return '';
        return str.replace(/[&<>"]/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
    },  
    getSection: (id) => state.sections ? state.sections.find(s => s.id === id) : null,  
    getSectionIndex: (id) => state.sections ? state.sections.findIndex(s => s.id === id) : -1,  
    getQueryParam: (p) => new URLSearchParams(window.location.search).get(p),  
    setQueryParam: (p, v) => {  
        const url = new URL(window.location.href);  
        url.searchParams.set(p, v);  
        window.history.pushState({}, '', url);  
    }
};  

// ---------- 📊 PROGRESS BAR LOGIC ----------
function updateChapterProgress() {
    if (!state.sections || state.sections.length <= 1) return;

    const currentIndex = utils.getSectionIndex(state.activeSectionId);
    const progressPercent = ((currentIndex + 1) / state.sections.length) * 100;

    let barFill = document.querySelector('.progress-bar-scroll');
    if (barFill) {
        barFill.style.width = `${progressPercent}%`;
    }
}

// ---------- 📱 BOTTOM NAV & HEADER ----------  
function updateHeader(title) {  
    if (dom.pageTitle) dom.pageTitle.innerText = title || 'DCAS CPG 2025';  
}  

function renderBottomNav(currentView) {
    if (isChapterMissing) return '';
    const views = [
        { id: 'summary', label: 'Summary', icon: '📘' },
        { id: 'flashcards', label: 'Cards', icon: '⚡' },
        { id: 'quiz', label: 'Quiz', icon: '📝' },
        { id: 'critical', label: 'Scenario', icon: '🚑' }
    ];
    return `
        <nav class="bottom-nav">
            ${views.map(v => `
                <a href="#" class="nav-pill ${currentView === v.id ? 'active' : ''}" data-view="${v.id}">
                    <i>${v.icon}</i>${v.label}
                </a>
            `).join('')}
        </nav>
    `;
}

// ---------- SMART SECTION NAVIGATION ----------  
function renderSectionNavigation() {  
    if (!state.sections) return '';  
    const currentIdx = utils.getSectionIndex(state.activeSectionId);  
    const nextSection = state.sections[currentIdx + 1];  
    const isLastSection = currentIdx === state.sections.length - 1;  

    return `  
        <div class="section-nav-slim">  
            ${nextSection ?   
                `<button class="section-nav-btn" data-section-id="${nextSection.id}">  
                    Next: ${utils.escapeHTML(nextSection.shortTitle)} ▶  
                </button>` :   
                `<button class="finish-chapter" data-action="backHome">✅ Finish Chapter</button>`  
            }  
        </div>  
    `;  
}  

// ---------- CORE RENDERING ----------  
function switchSection(sectionId, updateUrl = true) {  
    const section = utils.getSection(sectionId);  
    if (!section) return;  
      
    state.activeSectionId = sectionId;  
    state.activeSection = section;  
    state.flashData = section.flashcards || [];  
    state.criticalData = section.critical || [];  

    if (updateUrl) utils.setQueryParam('section', sectionId);  

    const currentView = utils.getQueryParam('view') || 'summary';  
    render[currentView] ? render[currentView]() : render.summary();
    
    updateChapterProgress();
}  

const render = {  
    summary: function() {  
        const html = `  
            <div class="progress-container-scroll"><div class="progress-bar-scroll"></div></div>
            <div class="section active">  
                ${renderSectionTabs(state.activeSectionId)}  
                ${state.activeSection.summary || ''}  
                ${renderSectionNavigation()}  
                <div class="back-home-ghost"><button data-action="backHome">← Home</button></div>
            </div>  
            ${renderBottomNav('summary')}
        `;  
        dom.main.innerHTML = html;  
        updateHeader(state.activeSection.shortTitle);  
        utils.safeScrollTop();
    },

    flashcards: function() {
        if (!state.flashData.length) { dom.main.innerHTML = 'No cards.'; return; }
        const card = state.flashData[state.fIndex];
        const html = `
            <div class="fc-progress">Card ${state.fIndex+1} of ${state.flashData.length}</div>
            <div class="scene" id="cardScene">
                <div class="card" id="flashcard">
                    <div class="card__face">
                        <span class="category-badge">${utils.escapeHTML(card.category)}</span>
                        <div style="font-size:1.3rem;">${utils.escapeHTML(card.question)}</div>
                        <div style="font-size:0.8rem; color:#888; margin-top:20px;">Tap to flip</div>
                    </div>
                    <div class="card__face card__face--back">
                        <div style="white-space: pre-wrap;">${utils.escapeHTML(card.answer)}</div>
                    </div>
                </div>
            </div>
            <div class="nav-row">
                <button class="control-btn" data-flash="prev">◀ Previous</button>
                <button class="control-btn" data-flash="next">Next ▶</button>
            </div>
            ${renderBottomNav('flashcards')}
        `;
        dom.main.innerHTML = html;
        document.getElementById('cardScene').onclick = () => document.getElementById('flashcard').classList.toggle('is-flipped');
    }
};

function renderSectionTabs(activeId) {
    if (state.sections.length <= 1) return '';
    return `<div class="section-tabs">${state.sections.map(s => `
        <button class="section-tab ${s.id === activeId ? 'active-tab' : ''}" data-section-id="${s.id}">
            ${utils.escapeHTML(s.shortTitle)}
        </button>`).join('')}</div>`;
}

// ---------- EVENT DELEGATION ----------  
document.addEventListener('click', (e) => {  
    const btn = e.target.closest('button, .nav-pill, a');  
    if (!btn) return;  
    
    const { action, view, sectionId, flash } = btn.dataset;
    
    if (action === 'backHome' || btn.id === 'homeBtn') {
        e.preventDefault();
        window.history.length > 1 ? window.history.back() : window.location.href = '../index.html';
    } else if (view) {
        utils.setQueryParam('view', view);
        switchSection(state.activeSectionId, false);
    } else if (sectionId) {
        switchSection(sectionId);
    } else if (flash === 'next' && state.fIndex < state.flashData.length - 1) {
        state.fIndex++; render.flashcards();
    } else if (flash === 'prev' && state.fIndex > 0) {
        state.fIndex--; render.flashcards();
    }
});

// ---------- INIT ----------  
document.addEventListener('DOMContentLoaded', () => {
    if (isChapterMissing) return;
    const startSection = utils.getQueryParam('section') || state.sections[0].id;
    switchSection(startSection);
});

})();
