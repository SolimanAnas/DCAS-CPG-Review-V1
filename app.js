/* ========== app.js – DCAS CPG 2025 (FULL RECONSTRUCTED CODE) ========== */
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

// ---------- STATE & DATA INITIALIZATION ----------  
const chapterData = window.CPG_DATA;  
const isChapterMissing = !chapterData;  

const dom = {  
    main: document.getElementById('mainContent'),  
    homeBtn: document.getElementById('homeBtn'),  
    pageTitle: document.getElementById('pageTitle'),  
    pageSubtitle: document.getElementById('pageSubtitle')  
};  

const state = {  
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

// ---------- UTILITIES & NAVIGATION ----------  
const utils = {  
    shuffle: (arr) => [...arr].sort(() => Math.random() - 0.5),  
    safeScrollTop: () => {  
        window.scrollTo(0,0);  
        document.documentElement.scrollTop = 0;  
    },  
    escapeHTML: (str) => {  
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    },
    getQueryParam: (param) => new URLSearchParams(window.location.search).get(param),
    getSection: (id) => state.sections?.find(s => s.id === id),
    getSectionIndex: (id) => state.sections?.findIndex(s => s.id === id)
};

const nav = {
    backHome: function() {
        // Detect if the app is currently inside the /chapters/ subfolder
        const isSubfolder = window.location.pathname.includes('/chapters/');
        window.location.href = isSubfolder ? '../index.html' : 'index.html';
    }
};

// ---------- CORE RENDER ENGINES ----------  
const render = {  
    summary: function() {  
        if (isChapterMissing) { renderComingSoon(); return; }  
        const section = state.activeSection;  
        const html = `  
            <div class="section active">  
                ${renderSectionTabs(section.id)}  
                ${section.summary || '<div class="sum-card">No summary available.</div>'}  
                ${renderSectionNavigation()}  
                <div class="nav-row">  
                    <button class="control-btn" data-action="backHome">← Back to Chapters</button>  
                </div>
            </div>  
        `;  
        dom.main.innerHTML = html;  
        updateHeader(utils.escapeHTML(section.shortTitle), 'Summary', true);  
        utils.safeScrollTop();
    },

    flashcards: function() {
        if (!state.flashData.length) { dom.main.innerHTML = '<div class="sum-card">No flashcards available.</div>'; return; }
        this._renderFlashcard();
        updateHeader(utils.escapeHTML(state.activeSection.shortTitle), 'Flashcards', true);
    },

    _renderFlashcard: function() {
        const card = state.flashData[state.fIndex];
        const safeAnswer = utils.escapeHTML(card.answer || '').replace(/\n/g, '<br>');
        const html = `
            <div class="fc-progress">Card ${state.fIndex+1} of ${state.flashData.length}</div>
            <div class="scene" id="cardScene">
                <div class="card" id="flashcard">
                    <div class="card__face card__face--front">
                        <span class="category-badge">${utils.escapeHTML(card.category || '')}</span>
                        <div style="font-size:1.3rem;">${utils.escapeHTML(card.question)}</div>
                        <div style="font-size:0.8rem; color:#888; margin-top:20px;">Tap to flip</div>
                    </div>
                    <div class="card__face card__face--back">
                        <div style="white-space: pre-wrap;">${safeAnswer}</div>
                    </div>
                </div>
            </div>
            <div class="nav-row">
                <button class="control-btn" data-flash="prev">◀ Previous</button>
                <button class="control-btn" data-flash="next">Next ▶</button>
            </div>
            <div class="nav-row" style="margin-top:10px;">
                <button class="control-btn" data-action="backHome">← Back to Chapters</button>
            </div>
        `;
        dom.main.innerHTML = html;
        document.getElementById('cardScene').onclick = () => document.getElementById('flashcard').classList.toggle('is-flipped');
        utils.safeScrollTop();
    },

    quizSetup: function() {
        const total = state.activeSection.quiz.length;
        const html = `
            <div class="quiz-setup-container">
                <h2>Quiz: ${utils.escapeHTML(state.activeSection.shortTitle)}</h2>
                <p>Select number of questions</p>
                <div class="setup-grid">
                    ${[10, 20].filter(s => s < total).map(s => `<button class="setup-btn" data-quiz-size="${s}">${s} Qs</button>`).join('')}
                    <button class="setup-btn challenge" data-quiz-size="${total}">All (${total})</button>
                </div>
                <div class="nav-row"><button class="control-btn" data-action="backHome">Cancel</button></div>
            </div>
        `;
        dom.main.innerHTML = html;
        updateHeader('Quiz Setup', '', true);
    }
};

// ---------- CLINICAL ENGINES (Quiz & Critical) ----------
const quizEngine = {
    init: function(size) {
        state.quizData = utils.shuffle(state.activeSection.quiz).slice(0, size);
        state.qIndex = 0; state.score = 0;
        state.stats.totalAttempts++;
        storage.save(state.stats);
        this.renderQuestion();
    },
    renderQuestion: function() {
        const q = state.quizData[state.qIndex];
        const optionsHtml = q.options.map((opt, idx) => `<button class="option-btn" data-opt-index="${idx}">${utils.escapeHTML(typeof opt === 'string' ? opt : opt.t)}</button>`).join('');
        dom.main.innerHTML = `
            <div class="quiz-container">
                <div class="fc-progress">Q ${state.qIndex+1}/${state.quizData.length}</div>
                <div style="font-size:1.15rem; font-weight:600; margin-bottom:20px;">${utils.escapeHTML(q.q)}</div>
                <div class="quiz-options" id="quizOptionsContainer">${optionsHtml}</div>
                <div class="quiz-feedback" id="quizFeedback" style="display:none;"></div>
                <button class="control-btn" id="nextQuizBtn" style="display:none; width:100%; margin-top:20px;">Next Question</button>
            </div>
        `;
    },
    handleAnswer: function(idx, btn) {
        const q = state.quizData[state.qIndex];
        const isCorrect = idx === q.correct;
        if (isCorrect) state.score++;
        btn.classList.add(isCorrect ? 'correct' : 'wrong');
        document.getElementById('quizFeedback').style.display = 'block';
        document.getElementById('quizFeedback').innerHTML = `<p>${utils.escapeHTML(q.explanation)}</p>`;
        document.getElementById('nextQuizBtn').style.display = 'block';
        document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
    },
    next: function() {
        state.qIndex++;
        if (state.qIndex < state.quizData.length) this.renderQuestion();
        else nav.backHome();
    }
};

// ---------- EVENT DELEGATION ----------
document.addEventListener('click', function(e) {
    const btn = e.target.closest('button');
    if (!btn) return;
    
    const action = btn.dataset.action;
    const flash = btn.dataset.flash;
    const qSize = btn.dataset.quizSize;
    const optIdx = btn.dataset.optIndex;

    if (action === 'backHome' || btn.id === 'homeBtn') { e.preventDefault(); nav.backHome(); }
    if (qSize) quizEngine.init(parseInt(qSize));
    if (flash === 'next') { state.fIndex++; render._renderFlashcard(); }
    if (flash === 'prev') { state.fIndex--; render._renderFlashcard(); }
    if (optIdx !== undefined) quizEngine.handleAnswer(parseInt(optIdx), btn);
    if (btn.id === 'nextQuizBtn') quizEngine.next();
});

// ---------- INITIALIZATION ----------
function switchSection(id, updateUrl = true) {
    state.activeSectionId = id;
    state.activeSection = utils.getSection(id);
    state.flashData = state.activeSection.flashcards || [];
    const view = utils.getQueryParam('view') || 'summary';
    if (view === 'flashcards') render.flashcards();
    else if (view === 'quiz') render.quizSetup();
    else render.summary();
}

function updateHeader(t, s, b) {
    if (dom.pageTitle) dom.pageTitle.innerText = t;
    if (dom.homeBtn) dom.homeBtn.style.display = b ? 'block' : 'none';
}

function renderSectionTabs(activeId) {
    return `<div class="section-tabs">${state.sections.map(s => `<button class="section-tab ${s.id === activeId ? 'active-tab' : ''}" data-section-id="${s.id}">${utils.escapeHTML(s.shortTitle)}</button>`).join('')}</div>`;
}

function renderSectionNavigation() { return ''; } // Placeholder

document.addEventListener('DOMContentLoaded', () => {
    if (isChapterMissing) return;
    const sec = utils.getQueryParam('section') || state.sections[0].id;
    switchSection(sec, false);
});

})();
