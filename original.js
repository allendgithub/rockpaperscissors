
function game(){

let compWins = 0;
let userWins = 0;

const computerSelection = ['rock', 'paper', 'scissors'];

let rand = computerSelection[Math.floor(Math.random() * computerSelection.length)];


document.getElementById('rock').onclick = function rockSelect(computerSelection) {


  const userSelection = 'rock';

  if (computerSelection === userSelection) {

    //Tie
    return null;



  } else if (computerSelection === 'paper') {

    compWins++



  } else if (computerSelection === 'scissors') {

    userWins++

    

  }   console.log(rand); 

  }



 } 





document.getElementById('paper').onclick = function paperSelect(computerSelection){

    const userSelection = 'paper';

  if (computerSelection === userSelection) {

    //Tie
    return null;

  } else if (computerSelection === 'rock') {

    userWins++

    


  } else if (computerSelection === 'scissors') {

    compWins++

    



  }     }   


/*
  document.getElementById('scissors').onclick = function scissorsSelect(computerSelection){


  if (playerSelection === 'scissors' && computerSelection === 'paper') {

    userWins++
    return 'I chose ' + computerSelection + '.' + ' You win, since scissors beats paper.' + '\n' + '\n' + 'My Score: ' + compWins + '\n' +
      'Your Score: ' + userWins


  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {

    return 'I chose ' + computerSelection + ' too.' + ' Tie! No winners!' + '\n' + '\n' + 'My Score: ' + compWins + '\n' +
      'Your Score: ' + userWins


  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {

    compWins++

    return 'I chose ' + computerSelection + '.' + ' I win, since rock beats scissors.' + '\n' + '\n' + 'My Score: ' + compWins + '\n' +
      'Your Score: ' + userWins

  } }

 





//MAYBE PUT SCRIPT IN HTML, ALSO CAN MAKE IT SO WHEN USER CLICKS ROCK BUTTON, IT CREATES 'rock' string output, which can be compared to computer
//Problem is page loads on start, won't spit out values when buttons are clicked, only on refresh */