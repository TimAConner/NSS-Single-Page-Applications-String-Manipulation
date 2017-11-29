
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
    console.log(textArray);
    textArray = textArray.join(" ");
    print(textArray);
}

function palindrome() {

}

function print(text){
    let paraNode = document.createElement("p");
    let textNode = document.createTextNode(text);
    paraNode.appendChild(textNode);
    document.getElementById("output").appendChild(paraNode);
}


activateButton();


