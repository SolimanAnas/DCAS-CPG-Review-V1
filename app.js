diff --git a/app.js b/app.js
index f84b64b739ca06a1663b726f95e160de1acfff8a..2e30d52f2fd2aa4245034a648b125c8ff8b6d21e 100644
--- a/app.js
+++ b/app.js
@@ -5,50 +5,91 @@
 // ---------- STORAGE ----------  
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
 
 // ---------- EARLY INIT: theme + font-size applied BEFORE render to prevent flash ----------
 (function() {
     const html = document.documentElement;
     const savedTheme = localStorage.getItem('theme') || 'dark';
     html.setAttribute('data-theme', savedTheme);
     const savedSize = localStorage.getItem('dcas_font_size') || 'medium';
     html.setAttribute('data-font-size', savedSize);
 })();
 
+
+// ---------- LOCAL AUTH GUARD ----------
+(function() {
+    const AUTH_KEY = 'dcas_local_auth';
+    const PUBLIC_PAGES = ['login.html', 'about.html', 'privacy.html', 'terms.html'];
+
+    function getBasePath() {
+        const path = window.location.pathname;
+        if (path.includes('/chapters/')) return path.split('/chapters/')[0] || '';
+        return path.replace(/\/[^/]*$/, '');
+    }
+
+    function getPageName() {
+        const parts = window.location.pathname.split('/').filter(Boolean);
+        return parts.length ? parts[parts.length - 1] : 'index.html';
+    }
+
+    function readSession() {
+        try {
+            const raw = localStorage.getItem(AUTH_KEY);
+            return raw ? JSON.parse(raw) : null;
+        } catch (_) {
+            return null;
+        }
+    }
+
+    function isValidSession() {
+        const session = readSession();
+        if (!session || !session.loggedIn || !session.expiresAt) return false;
+        return Date.now() < Number(session.expiresAt);
+    }
+
+    const page = getPageName();
+    if (PUBLIC_PAGES.includes(page)) return;
+    if (isValidSession()) return;
+
+    const loginPath = `${getBasePath()}/login.html`;
+    const next = window.location.pathname + window.location.search + window.location.hash;
+    window.location.replace(`${loginPath}?next=${encodeURIComponent(next)}`);
+})();
+
 // ============================================================
 // LAST VISITED – records chapter visits to localStorage (single implementation)
 // ============================================================
 const LAST_VISITED_KEY = 'dcas_last_visited';
 
 function recordLastVisited() {
     if (!chapterData) return;
     const item = {
         id:        chapterData.id,
         title:     chapterData.shortTitle || chapterData.title || 'Chapter',
         url:       window.location.href,
         timestamp: Date.now()
     };
     try {
         let list = JSON.parse(localStorage.getItem(LAST_VISITED_KEY) || '[]');
         list = list.filter(i => i.id !== item.id);
         list.unshift(item);
         list = list.slice(0, 5);
         localStorage.setItem(LAST_VISITED_KEY, JSON.stringify(list));
     } catch(e) {}
 }
 
 function timeAgo(ts) {
     const diff = Date.now() - ts;
     const mins = Math.floor(diff / 60000);
