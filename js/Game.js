/**
 * Create a game class to handle interractions
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
            'once in a blue moon',
            'when pigs fly',
            'the brains behind',
            'happy wife happy life',
            'let the cat out of the bag'
        ]
    }
/**
 * Selects random phrase from phrases property
 * @returns {object} Phrase object chosen to be used
 */
    getRandomPhrase(){
        const random = Math.floor(Math.random()*this.phrases.length);
        return this.phrases[random].split('');
    }

    startGame(){
        
        overlay.style.display = 'none'

        this.activePhrase = new Phrase(this.getRandomPhrase()).addPhraseToDisplay();
    }

    handleInteraction(key){
        if(new Phrase().checkLetter(key.textContent) === false){
            key.setAttribute('disabled', 'disabled')
            key.classList.add('wrong')
            this.removeLife()
        }else{
            key.classList.add('chosen');
            new Phrase().showMatchedLetter(key.textContent);
            this.checkForWin();
        }
        
    }


    checkForWin(){
        // const letters = this.activePhrase.querySelectorAll('.letter');
        const spaces = this.activePhrase.querySelectorAll('.space');
        const count = this.activePhrase.children.length - spaces.length
        const show = this.activePhrase.querySelectorAll('.show')
        
        if(show.length === count && this.missed < 5){
            this.gameOver('win', 'Great Job');
        }
    }

    removeLife(){
        this.missed < liveHearts.length;
        liveHearts[this.missed].src = 'images/lostHeart.png';
        this.missed ++;

        if(this.activePhrase.querySelectorAll('.show').length 
            !== this.activePhrase.children.length - this.activePhrase.querySelectorAll('.space').length 
            && this.missed >= 5)
            {
            this.gameOver('lose', 'Sorry, better luck next time');
        }
    }

    gameOver(gameWon, text){
        overlay.classList.replace('start', gameWon)
        overlay.style.display = 'block';

        h1.textContent = text;
        this.resetGame()
    }


    resetGame(){
        this.resetBtn()
        this.resetLiveHearts()
        new Phrase().resetPhrase()
        this.activePhrase = ''
        
    }

    resetBtn(){
       keyboard.forEach(key => {
            key.classList.remove('wrong');
            key.classList.remove('chosen');
            key.removeAttribute('disabled')
        })
    }

    resetLiveHearts(){
   
        if(this.missed >= 5){
            liveHearts.forEach(live =>{
                live.src = 'images/liveHeart.png';
            })
       this.missed = 0
        }
    }

}