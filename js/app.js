/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game = new Game();
const keyboard = document.querySelectorAll('.key');
const overlay = document.querySelector('#overlay');
const h1 = overlay.querySelector('#game-over-message');
const liveHearts = document.querySelectorAll('.tries img');


const startBtn = document.querySelector('#btn__reset')
startBtn.addEventListener('click', e => {
    game.startGame();
    game.handleInteraction()
    
    // console.log(new Phrase().showMatchedLetter('a'))
})



