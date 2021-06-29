// Checks for specific names to display the greeting
function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);

    // Regex for a valid url
    let regex = inputText.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

     if(regex == null){
       alert("Invalid input! Please enter a valid url and try again")
       return false
     }

     return true
}

export { checkForName }
