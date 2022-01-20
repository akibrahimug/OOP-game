
const ul = document.querySelector('#phrase ul');
const keyboard = document.querySelectorAll('.key');
const overlay = document.querySelector('#overlay');
const h1 = overlay.querySelector('#game-over-message');
const liveHearts = document.querySelectorAll('.tries img');
const startBtn = document.querySelector('#btn__reset');

// Declare a variable 'game' and assign nothing to it for now
let game;

// Listen for click events on the 'startBtn' variable
startBtn.addEventListener('click', e => {

    //Call the Game() class and assign it to the game variable
    game = new Game();
    // Start the game
    game.startGame();
})

// Iterate through the keyboard
keyboard.forEach(button => {
    // Listen for click events on each button in the keyboard
    button.addEventListener('click', e => {
        // Handle the game interactions 
        game.handleInteraction(button);
    })
})



