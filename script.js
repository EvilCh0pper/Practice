// 1. SELECTING ELEMENTS (Like finding objects in a Collection)
const counterDisplay = document.getElementById('counter-display');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const processorBtn = document.getElementById('process-btn');
const inputText = document.getElementById('user-input');
const outputText = document.getElementById('output-text');
const list = document.getElementById('item-list');
const addToListBtn = document.getElementById('add-item');

const goatAnimeList = [
  "One Piece",             // The King of World-Building
  "Fullmetal Alchemist: B", // The Gold Standard
  "Attack on Titan",       // The Modern Epic
  "Hunter x Hunter (2011)",// The Shonen Masterpiece
  "Monster",               // The Seinen Masterpiece
  "Steins;Gate",           // The Sci-Fi King
  "Cowboy Bebop",          // The Coolest Classic
  "Spirited Away",         // The Ghibli Essential
  "Vinland Saga",          // The Historical Peak
  "Death Note"             // The Ultimate Gateway
];

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
    outputText.innerText = inputText.value;
}

function addRandomAnime(){

    const dailyRecommendation = goatAnimeList[Math.floor(Math.random() * goatAnimeList.length)];
    const node = document.createElement("li");
    const textnode = document.createTextNode(dailyRecommendation);
    node.appendChild(textnode);
    document.getElementById('item-list').appendChild(node);
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

addToListBtn.addEventListener('click', () => {
    addRandomAnime();
});