//Three DOM elements to handle the two buttons and password textarea
var generate = document.querySelector("#generate");
var copy = document.querySelector("#copy");
var passText = document.querySelector("#password");

//User input, possible characters, and password creator variables
var passLength;
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var password = [];
var print = "";
var selector;


//Creates a password based on user input when the generate button is clicked
function createPassword(){
    
    //clears out the text area when the button is clicked
    clearTextArea();

    /* Handles multiple user input types and continues to run until either cancel is pressed or 
     an input between 8 and 128 is entered*/
    while (passLength < 8 || passLength > 128){
        passLength = prompt("Enter the length of your desired password. (8-128 characters)");
        
        //creates a number from the user input
        if(passLength != null)
            passLength = parseInt (passLength);

        //handles the cancel button to break out of loop 
        else if (passLength == null)
            break;
        
        //handles if the user enters no input or a characer that isn't a number
        if (isNaN(passLength)){
            passLength = 0;
        }
    }

    /* Handles if the user input is an acceptable number and cancel not pressed.
    Processes the type of characters the user would like in the password*/ 
    if (passLength != null){
        var specType = confirm("Would you like your password to include special characters?");
        var numType =  confirm("Would you like your password to include numeric characters?");
        var lowType =  confirm("Would you like your password to include lowercase characters?");
        var upType =  confirm("Would you like your password to include uppercase characters?");
    }

    //handles the possibility the user does not pick at least one character type
    while (!specType && !numType && !lowType && !upType && passLength != null){
        alert("No character types were selected. Try again.")
        var specType = confirm("Would you like your password to include special characters?");
        var numType =  confirm("Would you like your password to include numeric characters?");
        var lowType =  confirm("Would you like your password to include lowercase characters?");
        var upType =  confirm("Would you like your password to include uppercase characters?");
    }
    
    /*creates an array with the possible characters for the password based on the user's selected
    character types */
    if(specType == true)
        password = password.concat(special.split(""));
    if (numType == true)
        password = password.concat(number.split(""));
    if(lowType == true)
        password = password.concat(lower.split(""));
    if (upType == true)
        password = password.concat(upper.split(""));

    //randomly creates a string based on the character types chosen by the user    
    for (index = 0; index < passLength; index++){
        selector = Math.floor(Math.random()*password.length);
        print += password[selector];
    }
    passText.value = print;
   
    
}

/*resets the textarea value, the random password created, the users password length, 
and possible character options*/
function clearTextArea() {
    passText.value = " ";
    print = "";
    passLength = 0;
    password = [];
}

//copies the textarea to the users clipboard
function copyToClip(){
    passText.select();
    document.execCommand("copy");
}

//handles clicks on the two buttons
generate.addEventListener("click", createPassword);
copy.addEventListener("click", copyToClip);



