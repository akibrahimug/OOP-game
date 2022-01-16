/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



const keyboard = document.querySelectorAll('.key');
const overlay = document.querySelector('#overlay');
const h1 = overlay.querySelector('#game-over-message');
const liveHearts = document.querySelectorAll('.tries img');


const startBtn = document.querySelector('#btn__reset')
startBtn.addEventListener('click', e => {
    const game = new Game();
    game.startGame();
    keyboard.forEach(button => {
        button.addEventListener('click', e => {
            game.handleInteraction(button);
        })
    })
})



