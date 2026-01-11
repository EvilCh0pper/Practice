// 1. SELECTING ELEMENTS (Like finding objects in a Collection)
const counterDisplay = document.getElementById('counter-display');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const processorBtn = document.getElementById('process-btn');
var inputText = document.getElementById('user-input');
var outputText = document.getElementById('output-text');

// 2. STATE VARIABLE
let count = 0;

// 3. FUNCTIONS (Methods)
function updateDisplay() {
    counterDisplay.innerText = count;
    
    // Logic: Change color based on value
    if (count > 0) counterDisplay.style.color = "green";
    else if (count < 0) counterDisplay.style.color = "red";
    else counterDisplay.style.color = "#333";
}

function updateOutput(){
    outputText.innerText = inputText.innerText;
}

// 4. EVENT LISTENERS
incrementBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decrementBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

processorBtn.addEventListener('click', () => {
    updateOutput();
});