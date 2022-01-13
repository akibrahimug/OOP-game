
// create the 'phrase' class
class Phrase {
    constructor(phrase){
        this.phrase = phrase;
    }

    addPhraseToDisplay(){
// Assign the container div for the listItem to the varaible 'ul'
const ul = document.querySelector('#phrase ul');
        // Iterate through the phrase getting each letter and space
        this.phrase.forEach(letter => {
            // For each letter or space, create a new li
            const listItem = document.createElement('li');

            // Textcontent for the li must be a letter or space
            listItem.textContent = letter;

            listItem.classList.add('hide')
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
        return ul
    }

    checkLetter(letter){

        if(phrase.textContent.includes(letter)){
            return true
        }else{
            return false
        }
    }

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
        }else{
            game.removeLife()
        }
    }

    resetPhrase(){
        
        const phrases = phrase.querySelectorAll('li');
        phrases.forEach(p => {
            p.classList.remove('show');
            p.classList.add('hide')
        })    
    }
}