You are a senior full-stack engineer and medical education platform architect.

I have a JSON database (exam-db.json) containing categorized exam questions.
Each question includes:
- id
- topic
- subtopic
- difficulty (easy, medium, hard)
- question text
- options
- correct answer
- explanation

Your task:
Generate a COMPLETE exam engine similar to UWorld with the following features.

---

# 1. CORE FEATURES

## Exam Modes
1. Topic-based exam
   - User selects:
     - topic(s)
     - number of questions
     - difficulty filter

2. Random mixed exam
   - Pull questions from all topics

3. CAT (Computer Adaptive Testing)
   - Start at medium difficulty
   - If correct → increase difficulty
   - If incorrect → decrease difficulty
   - Adjust question selection dynamically

---

# 2. QUESTION ENGINE

- Load questions from exam-db.json
- Avoid repeating questions within same exam
- Shuffle options
- Track:
  - selected answer
  - time per question
  - correctness

---

# 3. UI REQUIREMENTS (UWorld-style)

- Clean, minimal, professional layout
- Left panel:
  - question navigator (Q1, Q2, …)
- Main panel:
  - question stem
  - answer choices (radio buttons)
- Right panel:
  - timer
  - mark for review
  - next/previous navigation

After submission:
- Show:
  - correct answer
  - detailed explanation
  - highlight user answer vs correct

---

# 4. SCORING SYSTEM

Track:
- Total score (%)
- Correct / incorrect
- Time spent
- Performance by:
  - topic
  - difficulty

Display:
- Score summary screen
- Weak areas
- Strength areas

---

# 5. PERFORMANCE ANALYTICS

Store locally:
- Past exams
- Scores over time
- Topic performance trends

Generate:
- Dashboard with:
  - accuracy per topic
  - average score
  - improvement curve

---

# 6. CAT ENGINE LOGIC

Implement adaptive difficulty:

- Start difficulty = medium
- If correct:
    move → harder (medium → hard)
- If incorrect:
    move → easier (hard → medium → easy)

Selection rules:
- Prefer unused questions
- Match topic distribution if selected

---

# 7. STATE MANAGEMENT

Use JavaScript (no frameworks required, but modular structure):

- examState:
  - currentQuestionIndex
  - answers[]
  - flaggedQuestions[]
  - timer
  - mode
  - difficulty progression (for CAT)

---

# 8. FILE STRUCTURE

Generate:

- exams.html
- exam.js
- exam.css
- sample exam-db.json structure (already have)

---

# 9. BONUS FEATURES (IMPORTANT)

Include:
- "Mark for review"
- "Pause exam"
- "Review mode after submission"
- "Retry incorrect questions"
- "Timed vs tutor mode"

---

# 10. OUTPUT FORMAT

Return:
1. Full working HTML
2. JavaScript logic (modular and clean)
3. CSS styling
4. Example JSON structure

DO NOT explain.
DO NOT summarize.
Return production-ready code only.



Enhance UI to match UWorld:
- subtle shadows
- clean typography
- blue/white theme
- smooth transitions

Add spaced repetition:
- prioritize previously incorrect questions
- increase frequency of weak topics

Add analytics:
- percentile estimation
- predicted exam score
- topic mastery heatmap

