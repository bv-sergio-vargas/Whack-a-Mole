// Game variables
let score = 0;
let timeLeft = 30;
let gameActive = false;
let moleInterval;
let timerInterval;
let lastHole;

// DOM elements
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const holes = document.querySelectorAll('.hole');
const gameOverModal = document.getElementById('gameOver');
const finalScoreDisplay = document.getElementById('finalScore');
const playAgainBtn = document.getElementById('playAgainBtn');

// Game settings
const GAME_DURATION = 30; // seconds
const MOLE_SHOW_TIME = 1000; // milliseconds the mole stays up
const MOLE_SPAWN_INTERVAL = 800; // milliseconds between mole spawns

// Initialize game
function init() {
    holes.forEach(hole => {
        hole.addEventListener('click', whackMole);
    });
    
    startBtn.addEventListener('click', startGame);
    resetBtn.addEventListener('click', resetGame);
    playAgainBtn.addEventListener('click', playAgain);
}

// Start the game
function startGame() {
    if (gameActive) return;
    
    gameActive = true;
    score = 0;
    timeLeft = GAME_DURATION;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;
    startBtn.disabled = true;
    gameOverModal.classList.add('hidden');
    
    // Start spawning moles
    moleInterval = setInterval(showMole, MOLE_SPAWN_INTERVAL);
    
    // Start countdown timer
    timerInterval = setInterval(countdown, 1000);
}

// Countdown timer
function countdown() {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    
    if (timeLeft <= 0) {
        endGame();
    }
}

// Show a random mole
function showMole() {
    if (!gameActive) return;
    
    // Get a random hole (different from the last one)
    const availableHoles = Array.from(holes).filter(hole => !hole.classList.contains('up'));
    if (availableHoles.length === 0) return;
    
    const randomHole = availableHoles[Math.floor(Math.random() * availableHoles.length)];
    
    // Make sure we don't show the same hole twice in a row
    if (randomHole === lastHole) {
        return showMole();
    }
    
    lastHole = randomHole;
    randomHole.classList.add('up');
    
    // Hide the mole after a certain time
    setTimeout(() => {
        randomHole.classList.remove('up');
        randomHole.classList.remove('whacked');
    }, MOLE_SHOW_TIME);
}

// Whack a mole
function whackMole(e) {
    if (!gameActive) return;
    
    const hole = e.currentTarget;
    
    // Check if the mole is up and hasn't been whacked yet
    if (hole.classList.contains('up') && !hole.classList.contains('whacked')) {
        hole.classList.add('whacked');
        hole.classList.add('hit');
        
        // Increment score
        score++;
        scoreDisplay.textContent = score;
        
        // Play hit animation
        setTimeout(() => {
            hole.classList.remove('hit');
        }, 300);
        
        // Create a visual feedback for the hit
        createHitFeedback(hole);
    }
}

// Create visual feedback when a mole is hit
function createHitFeedback(hole) {
    const feedback = document.createElement('div');
    feedback.textContent = '+1';
    feedback.style.position = 'absolute';
    feedback.style.color = '#4CAF50';
    feedback.style.fontWeight = 'bold';
    feedback.style.fontSize = '2em';
    feedback.style.top = '50%';
    feedback.style.left = '50%';
    feedback.style.transform = 'translate(-50%, -50%)';
    feedback.style.pointerEvents = 'none';
    feedback.style.animation = 'floatUp 0.8s ease-out';
    feedback.style.zIndex = '10';
    
    hole.style.position = 'relative';
    hole.appendChild(feedback);
    
    // Add CSS animation for floating up effect
    if (!document.querySelector('#floatUpAnimation')) {
        const style = document.createElement('style');
        style.id = 'floatUpAnimation';
        style.textContent = `
            @keyframes floatUp {
                0% {
                    opacity: 1;
                    transform: translate(-50%, -50%);
                }
                100% {
                    opacity: 0;
                    transform: translate(-50%, -150%);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        feedback.remove();
    }, 800);
}

// End the game
function endGame() {
    gameActive = false;
    clearInterval(moleInterval);
    clearInterval(timerInterval);
    startBtn.disabled = false;
    
    // Hide all moles
    holes.forEach(hole => {
        hole.classList.remove('up', 'whacked');
    });
    
    // Show game over modal
    finalScoreDisplay.textContent = score;
    gameOverModal.classList.remove('hidden');
}

// Reset the game
function resetGame() {
    if (gameActive) {
        endGame();
    }
    
    score = 0;
    timeLeft = GAME_DURATION;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;
    gameOverModal.classList.add('hidden');
    
    holes.forEach(hole => {
        hole.classList.remove('up', 'whacked', 'hit');
    });
}

// Play again
function playAgain() {
    resetGame();
    startGame();
}

// Initialize the game when the page loads
init();
