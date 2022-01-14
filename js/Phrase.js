
// create the 'phrase' class
class Phrase {
    constructor(phrase){
        this.phrase = phrase;
    }

    // Create the phrase to be displayed 
    addPhraseToDisplay(){

// Assign the container div for the listItem to the varaible 'ul'
const ul = document.querySelector('#phrase ul');

        // Iterate through the phrase getting each letter and space
        this.phrase.forEach(letter => {

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
        // get the created list
        return ul
    }

    // Check what letter is being selected
    checkLetter(letter){

        // If the phrase includes the selected letter
        if(phrase.textContent.includes(letter)){

            // Action is true
            return true

            // If not
        }else{

            //Action is false
            return false
        }
    }

    // Show the hidden letters of the phrase as right keys are selected by player
    showMatchedLetter(letter){

        // If phrase contains a letter
        if(this.checkLetter(letter)){

            // Assign all the listItems on the page to the variable 'phraseLetters'
            const phraseLetters = phrase.querySelectorAll('li');

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
    }

    // Reset the phrase to hidden after the game is over
    resetPhrase(){

        // Select all the current letters in the phrase
        const phrases = phrase.querySelectorAll('li');

        // Iterate through the array
        phrases.forEach(p => {

            // reomve the 'show' class
            p.classList.remove('show');

            // Add the 'hide' class
            p.classList.add('hide');
        })    
    }
}