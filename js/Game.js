/**
 * Create a game class to handle interractions
 */

class Game {
    constructor(){
        this.missed = 0
        this.phrases = this.createPhrases()
        this.activePhrase = new Phrase(this.getRandomPhrase()).addPhraseToDisplay()
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

        this.activePhrase;
        
    }

    handleInteraction(){

        keyboard.forEach(key => {
            key.addEventListener('click', e => {
                new Phrase().showMatchedLetter(key.textContent);
                // game.checkForWin()
                if(new Phrase().checkLetter(key.textContent) === false){
                    key.setAttribute('disabled', 'disabled')
                    key.classList.add('wrong')
                    this.removeLife()
                }else{
                    key.classList.add('chosen')
                }
            })
        })
    }


    checkForWin(){
        // const letters = this.activePhrase.querySelectorAll('.letter');
        const spaces = this.activePhrase.querySelectorAll('.space');
        const count = this.activePhrase.children.length - spaces.length
        const show = this.activePhrase.querySelectorAll('.show')
        
        if(show.length === count && this.missed < 5){
            this.gameOver('win', 'Great Job');
        }else if(show.length !== count && this.missed >= 5){
            this.gameOver('lose', 'Sorry, better luck next time');
        }
    }

    removeLife(){
        
        this.missed < liveHearts.length;
        liveHearts[this.missed].src = 'images/lostHeart.png';
        this.missed ++;
        
        this.checkForWin()
        this.resetLiveHearts()
        console.log(this.missed)
    }

    gameOver(gameWon, text){
        overlay.classList.remove('start')
        overlay.classList.add(gameWon)
        overlay.style.display = 'block';

        h1.textContent = text;
        
    }


    resetGame(){
        this.resetBtn()
        // this.resetLiveHearts()
        new Phrase().resetPhrase(this.activePhrase)
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
       console.log(this.missed)
    //    console.log(liveHearts.length)
        }
    }

}