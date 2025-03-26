const sidebar = document.getElementById('sidebar')
const keyboardEN = document.getElementById('keyboard-en')
const buttons = keyboardEN.querySelectorAll('button')
const wordDisplay = document.getElementById('word-display')
const livesDisplay = document.getElementById('lives')
const result = document.getElementById('result')
const newGameBtn = document.getElementById('new-game')

let word = 'COMPETITION'
let displayWord = ""
let lives = 6
let win = false
let lose = false

function toggleSidebar() {
    sidebar.classList.toggle('show')
}

function initializeDisplay() {
    keyboardEN.style.display = 'grid'
    wordDisplay.style.display = 'block'
    result.style.display = 'none'
    newGameBtn.style.display = 'none'
    lives = 6
    displayWord = "_".repeat(word.length)
    wordDisplay.textContent = displayWord
    
    livesDisplay.textContent = `Lives: ${lives}`
}
initializeDisplay()

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const letter = button.dataset.letter
        handleGuess(letter)

        button.classList.add('disabled')
        button.disabled = true
    })
})

function handleGuess(letter) {
    let newDisplay = ""
    let letterFound = false

    for(let i=0; i<word.length; i++) {
        if(word[i].toUpperCase() === letter.toUpperCase()) {
            newDisplay += letter.toUpperCase()
            letterFound = true
        } else newDisplay += displayWord[i]
    }

    displayWord = newDisplay
    wordDisplay.textContent = displayWord

    if(letterFound === false) {
        console.log('incorrect guess')
        lives -= 1
        livesDisplay.textContent = `Lives: ${lives}`
        if(lives === 0) lose = true
    }

    if(!displayWord.includes('_')) win = true

    handleResult()
}

function handleResult() {
    if(lose) {
        console.log('you lost')
        keyboardEN.style.display = 'none'
        wordDisplay.style.display = 'none'
        result.style.display = 'block'
        result.textContent = `The word was: ${word}`
        newGameBtn.style.display = 'block'
    }

    if(win) {
        console.log('you win')
    }
}