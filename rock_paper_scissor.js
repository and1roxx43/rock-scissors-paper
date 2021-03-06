//Declaration of variables to store scores
 document.getElementById('btn_click').addEventListener('click', function() {

 
let User = 0;
let compWin = 0;
let draw = 0;

//variable numOptions is used to store the 3 values of Rock 'R', Paper 'P', and scissors 'S'
let values = ['R', 'P', 'S'];

/*--- User input ---*/
  //Prompt user to enter a value 'R', 'S', 'P'. This is then converted to uppercase in case user enter a lowercase
//let user = prompt("Enter either S, P or R");

let user = document.getElementById('user').value;
// if user does not enter a value, a message will be displayed to the user to enter a value.
  if(!user){
    document.getElementById('userInputText').innerHTML = "Please enter the correct value to start playing!";
  return;
}

let userInput = user.toUpperCase();

// if user enters the wrong value, a message will as user to enter the correct value.
if((userInput !=='S') && (userInput !== 'P') && (userInput !== 'R'))
{
  document.getElementById('userInputText').innerHTML = "Please enter a correct value!";

  //this is to reset all text to blank
  document.getElementById('compInput').innerHTML = "";
  document.querySelector('.score').innerHTML = "";
  return;
}
else{
//Display what user has entered in paragaph id userInput
  document.getElementById('userText').innerHTML = "User has chosen " + userInput;
   
/*---Computer input --- */
//store a random value in variable index
let index = Math.floor(Math.random() * values.length);
//the return value is then stored in computer variable
let computer = values[index];

document.getElementById('compInput').innerHTML = "Computer has chosen " + computer;

//Run a condition on both variables to see if it's a draw, or computer wins, or user wins.
if(userInput === computer){
  
    document.getElementById('userInputText').innerHTML = "It's a draw!";
 
    document.querySelector(".score").innerHTML = "No points!!";
   
} else if(
  (userInput === 'R' && computer === 'P') ||
  (userInput === 'P' && computer === 'S') ||
  (userInput === 'S' && computer === 'R'))
{
  document.getElementById('userInputText').innerHTML = "Computer wins!";
    compWin++;
    document.querySelector(".score").innerHTML = "Score goes to Computer by " + compWin + " point";
} else 
  {
    document.getElementById('userInputText').innerHTML = "User wins!";
    let userWinning = User++;   
    document.querySelector(".score").innerHTML = "Score goes to user by " + User + " point";
  }
  } 
}
);

// Reset button to reset the game.
document.getElementById('btn_click_reset').addEventListener('click', function(){

  document.getElementById('user').value = '';
  document.getElementById('userText').innerHTML = '';
  document.getElementById('userInputText').innerHTML = '';
  document.getElementById('compInput').innerHTML = ''
  document.querySelector('.score').innerHTML = '';

});




