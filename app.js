const sidebar = document.getElementById('sidebar')
const keyboardEN = document.getElementById('keyboard-en')
const buttons = keyboardEN.querySelectorAll('button')
const wordDisplay = document.getElementById('word-display')

let word = 'EXAMPLE'
let displayWord = ""

function toggleSidebar() {
    sidebar.classList.toggle('show')
}

function initializeDisplay() {
    displayWord = "_".repeat(word.length)
    wordDisplay.textContent = displayWord
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

    if(letterFound === false) console.log('incorrect guess')
        if(!displayWord.includes('_')) console.log('you win')
}