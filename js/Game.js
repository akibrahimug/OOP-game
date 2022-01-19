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

    startGame(){
        
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    handleInteraction(key){
        if(this.activePhrase.checkLetter(key.textContent) === false){
            key.setAttribute('disabled', 'disabled')
            key.classList.add('wrong')
            this.removeLife()
        }else{
            key.classList.add('chosen');
            this.activePhrase.showMatchedLetter(key.textContent);
            if(this.checkForWin()){
                this.gameOver();
            }
        }
        
    }


    checkForWin(){
        const letters = document.querySelectorAll('.letter');
        const show = document.querySelectorAll('.show')
        
        if(show.length === letters.length){
            return true;
        }else{
            return false;
        }
    }

    removeLife(){

        liveHearts[this.missed].src = 'images/lostHeart.png';
        this.missed ++;

        if(this.missed > 4){
            this.gameOver();
        }
    }

    gameOver(){
        if(this.checkForWin()){
            overlay.style.display = 'flex';
            overlay.classList.replace('start', 'win')
            h1.textContent = 'Great Job you win!';
            this.resetGame()
        }else{
            overlay.style.display = 'flex';
            overlay.classList.replace('start', 'lose')
            h1.textContent = 'Sorry better luck next time. You Lose'
            this.resetGame()
        }
    }


    resetGame(){
        this.resetBtn()
        this.resetLiveHearts()
        this.activePhrase.resetPhrase()
       
        
    }

    resetBtn(){
       keyboard.forEach(key => {
            key.classList.remove('wrong');
            key.classList.remove('chosen');
            key.removeAttribute('disabled')
        })
    }

    resetLiveHearts(){
        liveHearts.forEach(live =>{
            live.src = 'images/liveHeart.png';
        })
    }

}