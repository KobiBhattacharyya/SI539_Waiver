var numCorrect = 0;
var numGuesses = 0;
document.getElementById("inputEnter").onclick = function()
{
    numGuesses++;
    document.getElementById("guesses").innerHTML = numGuesses;

    var guess = document.getElementById("inputBox").value;
    var randNum = Math.floor(Math.random()*5)+1;
    if(guess>5 || guess<1) {
        alert("Your guess is out of range! Pick a number between 1 and 5");
    }
    else if(guess==randNum)
    {
        alert("Your guess was correct! The number was "+randNum+"!");
        numCorrect++;
        document.getElementById("correctGuesses").innerHTML = numCorrect;
    }
    else
    {
        alert("Your guess was wrong! The actual number was "+randNum);
    }
}
