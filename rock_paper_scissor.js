//Declaration of variables to store scores
function play(){
 
let User = 0;
let compWin = 0;
let draw = 0;

//variable numOptions is used to store the 3 values of Rock 'R', Paper 'P', and scissors 'S'
let values = ['R', 'P', 'S'];

/*--- User input ---*/
  //Prompt user to enter a value 'R', 'S', 'P'. This is then converted to uppercase in case user enter a lowercase
let user = prompt("Enter either S, P or R");

  if(!user){
  return;
}

let userInput = user.toUpperCase();

if((userInput !=='S') && (userInput !== 'P') && (userInput !== 'R'))
{
  alert("Please enter the correct value!");
}
else{
//console log to see what user has entered.
console.log(`User has chosen ${userInput}`);
   
/*---Computer input --- */
//store a random value in variable index
let index = Math.floor(Math.random() * values.length);
//the return value is then stored in computer variable
let computer = values[index];
console.log(`computer has chosen ${computer}`);

//Run a condition on both variables to see if it's a draw, or computer wins, or user wins.
if(userInput === computer){
    console.log("It's a draw!");
    draw++;
   return console.log(`Score is ${draw} draw`);
   
} else if(
  (userInput === 'R' && computer === 'P') ||
  (userInput === 'P' && computer === 'S') ||
  (userInput === 'S' && computer === 'R'))
{
  console.log("Computer wins!");
    compWin++;
    return console.log(`Score goes to computer by ${compWin} point`);
} else 
  {
    console.log("User wins!");
    let userWinning = User++;
    return console.log(`Score goes to user by ${User} point`);    
  }
}
}

//Run function to play
play();


