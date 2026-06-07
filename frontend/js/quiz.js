
const quizQuestions = [
    {
        question: 'What type of vacation appeals to you most?',
        options: [
            { text: 'Historic architecture & culture', scores: { paris: 3, london: 2, rome: 3 } },
            { text: 'Modern cities & nightlife',       scores: { tokyo: 3, dubai: 3, newyork: 2 } },
            { text: 'Nature & adventure',              scores: { newzealand: 3, iceland: 3, peru: 2 } },
            { text: 'Beaches & relaxation',            scores: { bali: 3, fiji: 3, thailand: 2 } }
        ]
    },
    {
        question: "What's your ideal climate?",
        options: [
            { text: 'Tropical & warm',    scores: { bali: 2, dubai: 2, thailand: 2, rio: 2 } },
            { text: 'Temperate & mild',   scores: { paris: 2, london: 2, tokyo: 2 } },
            { text: 'Cold & snowy',       scores: { iceland: 2, newzealand: 2 } },
            { text: 'Any — I adapt easily', scores: { sydney: 1, bangkok: 1, singapore: 1 } }
        ]
    },
    {
        question: 'How long can you travel?',
        options: [
            { text: 'Few days (3–5)',   scores: { paris: 2, london: 2, dubai: 2 } },
            { text: 'A week (5–7)',     scores: { tokyo: 2, barcelona: 2, rome: 2 } },
            { text: 'Two weeks+',      scores: { newzealand: 3, peru: 3, thailand: 3 } },
            { text: 'A month or more', scores: { bali: 2, argentina: 2, south_africa: 2 } }
        ]
    },
    {
        question: "What's your budget?",
        options: [
            { text: 'Budget (<$50/day)',        scores: { bangkok: 3, marrakech: 3, lisbon: 2 } },
            { text: 'Standard ($50–150/day)',   scores: { prague: 3, barcelona: 3, turkey: 2 } },
            { text: 'Comfortable ($150+/day)',  scores: { paris: 2, london: 2, dubai: 2 } },
            { text: 'Luxury (no limits)',       scores: { dubai: 3, paris: 2, singapore: 2 } }
        ]
    },
    {
        question: 'What activities excite you?',
        options: [
            { text: 'Museums & art',         scores: { paris: 3, london: 2, rome: 3, florence: 2 } },
            { text: 'Outdoor adventures',    scores: { newzealand: 3, iceland: 3, peru: 2 } },
            { text: 'Food & wine',           scores: { paris: 2, italy: 2, thailand: 2, spain: 2 } },
            { text: 'Shopping & entertainment', scores: { dubai: 3, tokyo: 2, newyork: 2 } }
        ]
    }
];

function setupQuizButton() {
    const quizBtn = document.getElementById('quizBtn');
    if (quizBtn) quizBtn.addEventListener('click', openQuizModal);
}

function openQuizModal() {
    document.getElementById('quizModal').classList.add('active');
    startQuiz();
}

function closeQuizModal() {
    document.getElementById('quizModal').classList.remove('active');
}

function closeQuizPopup() {
    document.getElementById('quizPopup').style.display = 'none';
}

function startQuiz() {
    const container = document.getElementById('quizQuestions');
    container.innerHTML = '';

    quizQuestions.forEach((q, index) => {
        let optionsHTML = '<div class="quiz-options">';
        q.options.forEach((option, optIndex) => {
            optionsHTML += `
                <label class="quiz-option">
                    <input type="radio" name="question${index}" value="${optIndex}">
                    <span>${option.text}</span>
                </label>
            `;
        });
        optionsHTML += '</div>';

        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        questionDiv.innerHTML = `<h4>${q.question}</h4>${optionsHTML}`;
        container.appendChild(questionDiv);
    });
}

function submitQuiz() {
    const scores = {};
    Object.keys(destinationsData).forEach(dest => { scores[dest] = 0; });

    quizQuestions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected) {
            const option = q.options[parseInt(selected.value)];
            Object.keys(option.scores).forEach(dest => {
                if (scores.hasOwnProperty(dest)) scores[dest] += option.scores[dest];
            });
        }
    });

    let topDest = null;
    let maxScore = 0;
    Object.keys(scores).forEach(dest => {
        if (scores[dest] > maxScore) { maxScore = scores[dest]; topDest = dest; }
    });

    if (topDest) displayQuizResult(topDest);
}

function displayQuizResult(destinationKey) {
    const dest = destinationsData[destinationKey];

    document.getElementById('quizContent').style.display = 'none';
    document.getElementById('quizResult').style.display = 'block';
    document.getElementById('resultImage').src = dest.images[0];
    document.getElementById('resultTitle').textContent = dest.title;
    document.getElementById('resultDescription').textContent = dest.description;

    window.quizSelectedDestination = destinationKey;
}

function viewQuizResult() {
    if (window.quizSelectedDestination) {
        closeQuizModal();
        selectAndDisplay(window.quizSelectedDestination);
    }
}

function startQuizAgain() {
    startQuiz();
    document.getElementById('quizContent').style.display = 'block';
    document.getElementById('quizResult').style.display = 'none';
}
