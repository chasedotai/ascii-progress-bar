const STYLES = {
    'default': {
        filled: '█',
        empty: '░',
        left: '[',
        right: ']'
    },
    'simple': {
        filled: '=',
        empty: '-',
        left: '|',
        right: '|'
    },
    'dots': {
        filled: '●',
        empty: '○',
        left: '(',
        right: ')'
    },
    'arrows': {
        filled: '►',
        empty: '•',
        left: '<',
        right: '>'
    }
};

function createProgressBar(progress, width = 50, style = 'default') {
    progress = Math.max(0, Math.min(100, progress));
    const styleChars = STYLES[style] || STYLES['default'];
    const filled = Math.floor(width * progress / 100);
    const bar = styleChars.filled.repeat(filled) + 
                styleChars.empty.repeat(width - filled);
    return `${styleChars.left}${bar}${styleChars.right} ${progress.toFixed(2)}%`;
}

function updateDisplay() {
    const progress = parseFloat(progressInput.value);
    const style = styleSelect.value;
    progressDisplay.textContent = createProgressBar(progress, 50, style);
}

// DOM elements
const styleSelect = document.getElementById('styleSelect');
const progressSlider = document.getElementById('progressSlider');
const progressInput = document.getElementById('progressInput');
const progressDisplay = document.getElementById('progressDisplay');

// Event listeners
styleSelect.addEventListener('change', updateDisplay);
progressSlider.addEventListener('input', () => {
    progressInput.value = progressSlider.value;
    updateDisplay();
});
progressInput.addEventListener('input', () => {
    progressSlider.value = progressInput.value;
    updateDisplay();
});

// Initial display
updateDisplay(); 