let btnCharacter = document.querySelector('#btnCharacter'); //button id

//CHARACTERS BUTTON
btnCharacter.addEventListener('click', (e)=>{               //click event
    e.preventDefault();  
    //The preventDefault() method of the Event interface tells the user agent 
    //that if the event does not get explicitly handled, 
    //its default action should not be taken as it normally would be.
    let enterSentence = document.querySelector('#typeSentence').value;

    console.log(enterSentence.length);

    let numChar = document.querySelector('.textChar').innerHTML;

    document.querySelector('.textChar').innerHTML =  numChar.replace('...', enterSentence.length);//replaces html sentence

})


let btnSearch = document.querySelector('#btnSearch');       //button id

//SEARCH BUTTON
btnSearch.addEventListener('click', (e)=>{                  //click event
    e.preventDefault();
    let enterSentence = document.querySelector('#typeSentence').value;

    let enterWord = document.querySelector('#typeWord').value;

    let extra = (`${enterSentence.indexOf(enterWord)}`);

    let valuePosition = document.querySelector('.thePosition').innerHTML;

    document.querySelector('.thePosition').innerHTML = valuePosition.replace('...', `${extra}`);
})