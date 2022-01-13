/**
 * Create a game class to handle interractions
 */

class Game {
    constructor(){
        this.missed = 0
        this.phrases = this.createPhrases()
        this.activePhrase = new Phrase(this.getRandomPhrase())
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
        const overlay = document.querySelector('#overlay');

        overlay.style.display = 'none'

        this.activePhrase.addPhraseToDisplay()
    }

    handleInteraction(){
        new Phrase().showMatchedLetter()
    }


    checkForWin(){
        if(new Phrase().showMatchedLetter() === this.activePhrase.length){
            console.log('yes')
        }
    }
}