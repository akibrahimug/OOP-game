/**
 * Create a game class to handle interractions
 * @returns {object} An Object of methods that can be passed between modules
 */

class Game {
    constructor(){
        this.missed = 0
        this.phrases = this.createPhrases()
        this.activePhrase = null
    }
/**
 * Create phrases for the game
 * @returns {array} An array of phrases that could be used in the game
 */
    createPhrases(){
        return [
            new Phrase ('once in a blue moon'),
            new Phrase ('when pigs fly'),
            new Phrase ('the brains behind'),
            new Phrase ('happy wife happy life'),
            new Phrase ('let the cat out of the bag')
        ];
    }
/**
 * Selects random phrase from phrases property
 * @returns {object} Phrase object chosen to be used
 */
    getRandomPhrase(){
        const random = Math.floor(Math.random()*this.phrases.length);
        return this.phrases[random];
    }

    //Create the 'startGame' function to handle the start of game
    startGame(){
        
        // Remove the overlay when the start button is clicked
        overlay.style.display = 'none';

        // Assign the value from the 'getRandomPhrase()' function to the 'activePhrase' constructor method
        this.activePhrase = this.getRandomPhrase();

        //Call the 'addPhraseToDisplay()' Phrase Class function as a method on the 'activePhrase' to display random phrase
        this.activePhrase.addPhraseToDisplay();
    }

    // The 'handleInteraction()' function handles the user interactions 
    handleInteraction(key){

        // If the letter clicked bybthe user does not exits in the phrase
        if(this.activePhrase.checkLetter(key.textContent) === false){
            
            // Disable the key/letter selected on the keyboard
            key.setAttribute('disabled', 'disabled');
            
            // Give it the 'wrong' class to color it wrong
            key.classList.add('wrong');

            // Remove a heart from the lives
            this.removeLife();

            // If the letter selected exits
        }else{

            // Give the letter a 'chosen' class to give it a chosen color
            key.classList.add('chosen');

            //Show the letter in the phrase
            this.activePhrase.showMatchedLetter(key.textContent);

            // If the 'checkForWin()' function returns true
            if(this.checkForWin()){
                //End the game
                this.gameOver();
            }
        }
        
    }

/**
 * Check for a win
 * @returns {Booleon} True or false depending on the letters chosen
 */
    checkForWin(){
        const letters = document.querySelectorAll('.letter');
        const show = document.querySelectorAll('.show')
        
        if(show.length === letters.length){
            return true;
        }else{
            return false;
        }
    }

    //Remove one liveHeart per wrong letter selected from the keyboard
    removeLife(){

        liveHearts[this.missed].src = 'images/lostHeart.png';
        this.missed ++;

        if(this.missed > 4){
            this.gameOver();
        }
    }

    // Handle what happens when the game ends
    gameOver(){
        // If the game is won
        if(this.checkForWin()){

            // Display the overlay
            overlay.style.display = 'flex';

            // Replace the lose/Start classes with the win class to control the background color
            overlay.classList.replace("lose", "win");
            overlay.classList.replace('start', 'win');

            // Display a wining message
            h1.textContent = 'Great Job you win!';

            // Reset the game so when the play again button is clicked a new game is loaded
            this.resetGame();

            // if the game is lost
        }else{
            // Display the overlay
            overlay.style.display = 'flex';

            // Replace the win/Start classes with the lose class to control the background color
            overlay.classList.replace('win', 'lose');
            overlay.classList.replace('start', 'lose');

            // Display a losing message
            h1.textContent = 'Sorry better luck next time. You Lose';

            // Reset the game so when the play again button is clicked a new game is loaded
            this.resetGame()
        }
    }


    // Handles all the reset functions
    resetGame(){
        this.resetBtn()
        this.resetLiveHearts()
        this.activePhrase.resetPhrase()
       
        
    }

    // Reset the buttons clicked on the keyboard
    resetBtn(){
        // Iterate through the buttons
       keyboard.forEach(key => {

        // Remove the 'wrong' and 'chosen' classes to reset button color
        key.classList.remove('wrong');
        key.classList.remove('chosen');

        // Remove the disabled attribute form the buttons so they are selectable again
        key.removeAttribute('disabled')
    })
    }

    // Reset the the LiveHearts
    resetLiveHearts(){
        liveHearts.forEach(live =>{
            live.src = 'images/liveHeart.png';
        })
    }

}