const myInput = document.getElementById('input')
const myName = document.getElementById('newName')
const myButton = document.getElementById('nameButton')

myButton.addEventListener('click', () => {
    //get value, set info...
    const value = myInput.value;

    myName.textContent = value;

    theInput.value = '';

});