// App State
let cards = JSON.parse(localStorage.getItem('flashcards_data')) || [];
let currentIndex = 0;
let isEditMode = false;
let editTargetIndex = null;

// Selectors
const cardElement = document.getElementById('flashcard');
const questionText = document.getElementById('question-text');
const answerText = document.getElementById('answer-text');
const cardIndexDisplay = document.getElementById('card-index');
const progressFill = document.getElementById('progress-fill');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const flipBtn = document.getElementById('flip-btn');

const modal = document.getElementById('modal-overlay');
const questionInput = document.getElementById('question-input');
const answerInput = document.getElementById('answer-input');

// Initialize
function init() {
    renderUI();
}

function renderUI() {
    if (cards.length === 0) {
        questionText.innerText = "Deck is empty! Add a card to start.";
        answerText.innerText = "No answer set.";
        cardIndexDisplay.innerText = "0 of 0";
        progressFill.style.width = '0%';
        toggleControls(true);
        return;
    }

    toggleControls(false);
    const card = cards[currentIndex];
    questionText.innerText = card.question;
    answerText.innerText = card.answer;
    cardIndexDisplay.innerText = `${currentIndex + 1} of ${cards.length}`;
    
    // Progress Bar
    const progress = ((currentIndex + 1) / cards.length) * 100;
    progressFill.style.width = `${progress}%`;

    // Button states
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === cards.length - 1;
    
    // Reset flip state
    cardElement.classList.remove('flipped');
    flipBtn.innerText = "Show Answer";
}

function toggleControls(isEmpty) {
    prevBtn.disabled = isEmpty;
    nextBtn.disabled = isEmpty;
    flipBtn.disabled = isEmpty;
    document.getElementById('shuffle-btn').disabled = cards.length < 2;
}

// Navigation Logic
flipBtn.addEventListener('click', () => {
    cardElement.classList.toggle('flipped');
    flipBtn.innerText = cardElement.classList.contains('flipped') ? "Show Question" : "Show Answer";
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        renderUI();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderUI();
    }
});

// Modal Actions (Add/Edit)
document.getElementById('add-card-btn').addEventListener('click', () => {
    isEditMode = false;
    document.getElementById('modal-title').innerText = "Create New Card";
    questionInput.value = '';
    answerInput.value = '';
    modal.style.display = 'flex';
    questionInput.focus();
});

function editCurrentCard() {
    isEditMode = true;
    editTargetIndex = currentIndex;
    document.getElementById('modal-title').innerText = "Edit Flashcard";
    questionInput.value = cards[currentIndex].question;
    answerInput.value = cards[currentIndex].answer;
    modal.style.display = 'flex';
}

function deleteCurrentCard() {
    if (confirm("Delete this flashcard forever?")) {
        cards.splice(currentIndex, 1);
        if (currentIndex >= cards.length && currentIndex > 0) currentIndex--;
        saveData();
        showToast("Card Deleted");
    }
}

document.getElementById('modal-cancel').addEventListener('click', () => modal.style.display = 'none');

document.getElementById('modal-save').addEventListener('click', () => {
    const q = questionInput.value.trim();
    const a = answerInput.value.trim();

    if (!q || !a) return showToast("Both fields are required");

    if (isEditMode) {
        cards[editTargetIndex] = { question: q, answer: a };
    } else {
        cards.push({ question: q, answer: a });
        currentIndex = cards.length - 1; // Go to the new card
    }

    saveData();
    modal.style.display = 'none';
    showToast(isEditMode ? "Card Updated" : "Card Added");
});

function saveData() {
    localStorage.setItem('flashcards_data', JSON.stringify(cards));
    renderUI();
}

// Extra Features
document.getElementById('shuffle-btn').addEventListener('click', () => {
    cards.sort(() => Math.random() - 0.5);
    currentIndex = 0;
    saveData();
    showToast("Deck Shuffled!");
});

document.getElementById('theme-toggle').addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    document.querySelector('#theme-toggle i').className = isDark ? 'fas fa-moon' : 'fas fa-sun';
});

// Keyboard Nav
document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'flex') return;
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === ' ') { e.preventDefault(); flipBtn.click(); }
});

function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.innerText = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

init();