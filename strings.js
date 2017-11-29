
var testString = "";

function activateButton(){
    document.getElementById("btn").addEventListener("click", function(event){
        event.preventDefault();
        testString = document.getElementById("textInput").value;
        reversal(testString);
        alphabits(testString);
        palindrome(testString);
    });
}

function reversal(text) {
    let textArray = text.split("");
    textArray = textArray.reverse();
    textArray = textArray.join(" ");
    print(textArray);
}

function alphabits(text) {
    let textArray = text.toLowerCase().split("");
    textArrray = textArray.sort();
    textArray = textArray.join(" ");
    print(textArray);
}

function palindrome(text) {
    if(isPalindrome(text)){
        print(`${text} is a palindrome.`);
    } else {
        print(`${text} is not a palindrome.`);
    }
}

function isPalindrome(text){
    let textArray = text.toLowerCase().split("");
    let wordLength = textArray.length;
    let centerOfWord;
    let offSet;

    if(wordLength % 2 === 0){//Word has even amount of characters
        offSet = 0;
        centerOfWord = ((wordLength + 1) / 2);
    } else {//Word has odd amount of characters
        offSet = 1;
        centerOfWord = ((wordLength) / 2)+offSet;
    }

    let firstHalf = textArray.slice(0, centerOfWord-offSet).join("");
    let secondHalf = textArray.slice(centerOfWord, textArray.length+1).reverse().join("");
    if(firstHalf === secondHalf){
        return true;
    }

    return false;
}

function print(text){
    let paraNode = document.createElement("p");
    let textNode = document.createTextNode(text);
    paraNode.appendChild(textNode);
    document.getElementById("output").appendChild(paraNode);
}


activateButton();


