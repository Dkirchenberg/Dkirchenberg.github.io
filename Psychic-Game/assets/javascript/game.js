<script src="assets/javasript">


var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 9;

var guesses = [];

var userGuess = null;

var ChoicesGuessed = choices[Math.floor(Math.random() * choices.length)];


    document.onkeyup = function(event) {

    var userGuess = event.key;
    
    <button onclick="myFunction()">Try it</button>

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        if (guesses.indexOf(userGuess) < 0 && choices.indexOf(userGuess) >= 0) {
    		guesses[guesses.length]=userGuess;
             guessesLeft--;
    	}

        if (ChoiceGuessed== userGuess) {
            wins++;
            guessesLeft = 9;
            guessesSoFar = [];
            ChoicesGuessed = choices[Math.floor(Math.random() * choices.length)];
            <button onclick="myFunction()">Wins</button>
          
        }

        if (guessesLeft == 0) {
            losses++; 
            guessesLeft = 9;
            guessesSoFar = [];
            ChoicesGuessed = choices[Math.floor(Math.random() * choices.length)];
            <button onclick="myFunction()">Losses</button>  
        }        
	

        document.querySelector("#index").innerHTML = html;

</script>