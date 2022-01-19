
// create the 'phrase' class
class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    // Create the phrase to be displayed 
    addPhraseToDisplay(){

        const currentPhrase = this.phrase.split('');
        // Iterate through the phrase getting each letter and space
        currentPhrase.forEach(letter => {

            // For each letter or space, create a new li
            const listItem = document.createElement('li');

            // Textcontent for the li must be a letter or space
            listItem.textContent = letter;

            listItem.classList.add('hide');

            // if li is empty add 'space' as its classname
            if(listItem.textContent === ' '){
                
                listItem.classList.add('space');

                // if a letter is present add 'letter' as the class
            }else{

                listItem.classList.add('letter')
            }

            // Append the listItem to its parent
            ul.appendChild(listItem)
        });
    }

    // Check what letter is being selected
    checkLetter(letter){
        return this.phrase.includes(letter);
    }

    // Show the hidden letters of the phrase as right keys are selected by player
    showMatchedLetter(letter){

        // Assign all the listItems on the page to the variable 'phraseLetters'
        const phraseLetters = document.querySelectorAll('#phrase li');

        // Iterate through the phraseLetters
        phraseLetters.forEach(phraseLetter => {

            // If any of phraseletters contain the 'letter' class
            if(phraseLetter.classList.contains('letter')){

                //And if the phraseletter content matches the selected letter
                if(phraseLetter.textContent === letter){

                    // Hide the box thats hiding the letter
                    phraseLetter.classList.remove('hide');
                    // Show the letter in the phrase
                    phraseLetter.classList.add('show')
                }
            }
        })
    }

    // Reset the phrase to hidden after the game is over
    resetPhrase(){
        startBtn.textContent = 'Play Again';

        ul.textContent = '';
        
    }
}