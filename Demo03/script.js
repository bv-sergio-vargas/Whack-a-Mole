// Elementos del DOM
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('startBtn');

// Variables del juego
let score = 0;
let timeLeft = 30;
let gameActive = false;
let lastHole = null; // Para evitar que aparezca en el mismo hoyo consecutivamente
let moleTimer = null; // Controla el temporizador del topo actual
let countdownTimer = null; // Controla el temporizador de cuenta regresiva
let gameLoop = null; // Controla el loop de aparición de topos
let currentInterval = 1000; // Intervalo actual de aparición (aumenta dificultad)

// Inicialización
console.log('Juego Whack-a-Mole cargado');
console.log(`Hoyos encontrados: ${holes.length}`);
console.log(`Topos encontrados: ${moles.length}`);

/**
 * Función para obtener un hoyo aleatorio
 * @returns {number} Índice del hoyo aleatorio
 */
function getRandomHole() {
    const index = Math.floor(Math.random() * holes.length);
    // Evitar que aparezca en el mismo hoyo dos veces seguidas
    if (index === lastHole) {
        return getRandomHole();
    }
    lastHole = index;
    return index;
}

/**
 * Función para mostrar un topo en un hoyo aleatorio
 * @param {number} duration - Tiempo que el topo permanece visible (en milisegundos)
 */
function showMole(duration = 1000) {
    // Si hay un topo visible, no mostrar otro
    const visibleMole = document.querySelector('.mole.up');
    if (visibleMole) {
        console.log('Ya hay un topo visible, esperando...');
        return;
    }

    // Obtener hoyo aleatorio
    const holeIndex = getRandomHole();
    const mole = moles[holeIndex];
    
    // 20% de probabilidad de que sea un topo bomba
    const isBomb = Math.random() < 0.2;
    
    if (isBomb) {
        mole.classList.add('bomb');
        console.log(`💣 Topo BOMBA apareciendo en el hoyo ${holeIndex}`);
    } else {
        console.log(`Topo apareciendo en el hoyo ${holeIndex}`);
    }
    
    // Hacer aparecer el topo
    mole.classList.add('up');
    
    // Programar la desaparición del topo
    moleTimer = setTimeout(() => {
        mole.classList.remove('up');
        mole.classList.remove('whacked');
        mole.classList.remove('bomb');
        console.log(`Topo desaparecido del hoyo ${holeIndex}`);
    }, duration);
}

/**
 * Función para golpear un topo
 * @param {HTMLElement} mole - El elemento del topo que fue golpeado
 */
function whackMole(mole) {
    // No permitir golpear si el juego no está activo
    if (!gameActive) {
        return;
    }
    
    // Solo contar si el topo está arriba y no ha sido golpeado
    if (!mole.classList.contains('up') || mole.classList.contains('whacked')) {
        return;
    }
    
    // Marcar como golpeado
    mole.classList.add('whacked');
    
    // Verificar si es un topo bomba
    const isBomb = mole.classList.contains('bomb');
    
    if (isBomb) {
        // Restar puntos por golpear la bomba
        score -= 20;
        // No permitir puntaje negativo
        if (score < 0) score = 0;
        console.log(`💥 ¡Bomba golpeada! -20 puntos. Puntaje: ${score}`);
    } else {
        // Incrementar puntaje por topo normal
        score += 10;
        console.log(`¡Topo golpeado! +10 puntos. Puntaje: ${score}`);
    }
    
    updateScore();
    adjustDifficulty();
    
    // Hacer desaparecer inmediatamente
    setTimeout(() => {
        mole.classList.remove('up');
        mole.classList.remove('whacked');
        mole.classList.remove('bomb');
    }, 200); // Pequeño delay para mostrar el efecto visual
    
    // Limpiar el timer automático si existe
    if (moleTimer) {
        clearTimeout(moleTimer);
        moleTimer = null;
    }
}

/**
 * Actualiza la visualización del puntaje
 */
function updateScore() {
    scoreDisplay.textContent = score;
}

/**
 * Actualiza la visualización del tiempo
 */
function updateTime() {
    timeDisplay.textContent = timeLeft;
}

/**
 * Función para el countdown del tiempo
 */
function startCountdown() {
    countdownTimer = setInterval(() => {
        timeLeft--;
        updateTime();
        
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

/**
 * Ajusta la dificultad según el puntaje
 */
function adjustDifficulty() {
    let newInterval = currentInterval;
    
    if (score < 50) {
        newInterval = 1000;
    } else if (score >= 50 && score <= 100) {
        newInterval = 750;
    } else if (score > 100) {
        newInterval = 500;
    }
    
    // Si cambió el intervalo, reiniciar el loop
    if (newInterval !== currentInterval) {
        currentInterval = newInterval;
        console.log(`⚡ Dificultad aumentada! Nuevo intervalo: ${currentInterval}ms`);
        
        // Reiniciar el loop con el nuevo intervalo
        if (gameLoop) {
            clearInterval(gameLoop);
            startMoleLoop();
        }
    }
}

/**
 * Función para hacer aparecer topos continuamente
 */
function startMoleLoop() {
    gameLoop = setInterval(() => {
        if (gameActive) {
            showMole(1000);
        }
    }, currentInterval);
}

/**
 * Inicia el juego
 */
function startGame() {
    // Reset de variables
    score = 0;
    timeLeft = 30;
    gameActive = true;
    currentInterval = 1000; // Reiniciar dificultad
    
    // Actualizar displays
    updateScore();
    updateTime();
    
    // Deshabilitar botón
    startBtn.disabled = true;
    startBtn.textContent = 'Jugando...';
    
    console.log('¡Juego iniciado!');
    
    // Iniciar countdown y aparición de topos
    startCountdown();
    startMoleLoop();
}

/**
 * Termina el juego
 */
function endGame() {
    // Desactivar juego
    gameActive = false;
    
    // Limpiar todos los timers
    if (countdownTimer) {
        clearInterval(countdownTimer);
        countdownTimer = null;
    }
    
    if (gameLoop) {
        clearInterval(gameLoop);
        gameLoop = null;
    }
    
    if (moleTimer) {
        clearTimeout(moleTimer);
        moleTimer = null;
    }
    
    // Ocultar todos los topos
    moles.forEach(mole => {
        mole.classList.remove('up');
        mole.classList.remove('whacked');
        mole.classList.remove('bomb');
    });
    
    // Habilitar botón
    startBtn.disabled = false;
    startBtn.textContent = 'Jugar de Nuevo';
    
    console.log(`¡Juego terminado! Puntaje final: ${score}`);
    
    // Mostrar mensaje
    alert(`🎮 ¡JUEGO TERMINADO! 🎮\n\nPuntaje Final: ${score} puntos`);
}

// Event listener para el botón de inicio
startBtn.addEventListener('click', () => {
    startGame();
});

// Event listeners para cada topo - mejorado para mejor detección
moles.forEach((mole, index) => {
    mole.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log(`Topo ${index} clickeado`);
        whackMole(mole);
    });
    
    // Agregar listener táctil para dispositivos móviles
    mole.addEventListener('touchstart', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(`Topo ${index} tocado`);
        whackMole(mole);
    });
});

// Event listeners adicionales en los hoyos para capturar clics
holes.forEach((hole, index) => {
    hole.addEventListener('click', (e) => {
        const mole = moles[index];
        if (mole.classList.contains('up') && !mole.classList.contains('whacked')) {
            console.log(`Hoyo ${index} clickeado - golpeando topo`);
            whackMole(mole);
        }
    });
});
