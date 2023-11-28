'use strict';


const container = document.getElementById('outputContainer');


const userInputField = document.getElementById('userInput');

const submitButton = document.querySelector(`button`);

function displayOutput(message){
    const newParagraph = dpcument.createElement('p');
    newParagraph.innerText = message;
    container.appendChild(newParagraph);
}

submitButton.addEventListener('click', function () {
    // check if the input is empty
    const userInput = userInputField.value;
    if (userInput.trim() === '') {
        displayOutput('Please Enter a value');
    }
     // See if the user input the Number 15
    if (parseInt(userInput) === 10) {
    displayOutput('You entered number 15!');
 } else if ( userInput.toLower)
});


  
 
