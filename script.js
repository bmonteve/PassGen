var generate = document.querySelector("#generate");
var copy = document.querySelector("#copy");
var passText = document.querySelector("#password");

var passLength;

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var password = [];
var print = "";
var selector;



function createPassword(){
    
    clearTextArea();

    while (passLength < 8 || passLength > 128){
        passLength = prompt("Enter the length of your desired password. (8-128 characters)");
        if(passLength != null)
            passLength = parseInt (passLength);
        else if (passLength == null)
            break;
        else if (isNaN(passLength)){
            passLength = 0;
        }
    }

    console.log(passLength);
    
    if (passLength != null){
        var specType = confirm("Would you like your password to include special characters?");
        var numType =  confirm("Would you like your password to include numeric characters?");
        var lowType =  confirm("Would you like your password to include lowercase characters?");
        var upType =  confirm("Would you like your password to include uppercase characters?");
    }
    
    if(specType == true)
        password = password.concat(special.split(""));
    if (numType == true)
        password = password.concat(number.split(""));
    if(lowType == true)
        password = password.concat(lower.split(""));
    if (upType == true)
        password = password.concat(upper.split(""));

    for (index = 0; index < passLength; index++){
        selector = Math.floor(Math.random()*password.length);
        print += password[selector];
    }
    passText.value = print;
   
    
}


function clearTextArea() {
    passText.value = " ";
    print = "";
    passLength = 0;
    password = [];
}

function copyToClip(){
    passText.select();
    document.execCommand("copy");
}

generate.addEventListener("click", createPassword);
copy.addEventListener("click", copyToClip);



