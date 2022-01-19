/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// Assign the container div for the listItem to the varaible 'ul'
const ul = document.querySelector('#phrase ul');
const keyboard = document.querySelectorAll('.key');
const overlay = document.querySelector('#overlay');
const h1 = overlay.querySelector('#game-over-message');
const liveHearts = document.querySelectorAll('.tries img');
const startBtn = document.querySelector('#btn__reset');

let game;
startBtn.addEventListener('click', e => {
    game = new Game();
    game.startGame();
})

keyboard.forEach(button => {

    button.addEventListener('click', e => {

        game.handleInteraction(button);
    })
})



