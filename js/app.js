/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game = new Game();
const keyboard = document.querySelectorAll('.key')

const startBtn = document.querySelector('#btn__reset')
startBtn.addEventListener('click', e => {
    game.startGame();
    keyboard.forEach(key => {
        key.addEventListener('click', e => {
            new Phrase().showMatchedLetter(key.textContent);
            game.checkForWin()
        })
        
    })
    // console.log(new Phrase().showMatchedLetter('a'))
    console.log()
    
    
})



