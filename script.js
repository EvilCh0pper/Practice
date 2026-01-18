// 1. SELECTING ELEMENTS (Like finding objects in a Collection)
const counterDisplay = document.getElementById('counter-display');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const processorBtn = document.getElementById('process-btn');
const inputText = document.getElementById('user-input');
const outputText = document.getElementById('output-text');
const list = document.getElementById('item-list');
const searchAnime = document.getElementById('anime-search');
const darkModeToggle = document.getElementById('theme-toggle')
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

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

const initialiseList = () => {for (let i = 0; i < goatAnimeList.length; i++ ) addToAnimeList(goatAnimeList[i])}
initialiseList()

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
    if (inputText.value.trim() === '') {
        //window.alert('You need to give me a text to echo :)')
        outputText.innerText = "You need to give me a text!";
    } else if (inputText.value.length >= 20 ){
        //window.alert('The text length is too long')
        outputText.innerText = "The text length is too long";
    }
    else {
        outputText.innerText = inputText.value;
    }
    
}

function addRandomAnime(){
    const dailyRecommendation = goatAnimeList[Math.floor(Math.random() * goatAnimeList.length)];
    const node = document.createElement("li");
    const textnode = document.createTextNode(dailyRecommendation);
    node.appendChild(textnode);
    list.appendChild(node);
}

function addToAnimeList(item){
    //check if item is in the currentList and exist in goatAnimeList
    //actually adding an item
    const node = document.createElement("li");
    const textnode = document.createTextNode(item);
    node.appendChild(textnode);
    list.appendChild(node);    
}

function clearAnimeList(){
    list.innerHTML = "";
}

function themeToggle() {
    document.body.classList.toggle('dark-theme')

    if (localStorage.getItem('theme') === null || localStorage.getItem('theme') === 'light') {
        localStorage.setItem('theme', 'dark')
        console.log(localStorage.getItem('theme'), "should be dark")

    } else {
        localStorage.setItem('theme', 'light')
        console.log(localStorage.getItem('theme'), "should be light")

    }
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

searchAnime.addEventListener('input', () => {
    //addRandomAnime();
    var matches = [];

    clearAnimeList();
    
    for (let i = 0; i < goatAnimeList.length; i++) {
        if (goatAnimeList[i].toLowerCase().includes(searchAnime.value.toLowerCase())) {
            if (!matches.includes(goatAnimeList[i])){
                matches.push(goatAnimeList[i])
            };
        }   
    }
    
    //adds to the actual list
    for (let i = 0; i < matches.length;  i++){
        addToAnimeList(matches[i])
    }

});

darkModeToggle.addEventListener('click', () => {
    themeToggle();
    
});