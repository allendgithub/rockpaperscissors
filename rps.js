let compWins = 0;
let userWins = 0;
let rand = "Let's-a go!";

$( "#userWins" )
  .html( userWins );
$( "#compWins" )
  .html( compWins );
$( "#rand" )
  .html( rand );



function wrapUp() {

  if ( compWins >= 5 ) {

    $( "#compWins" )
      .html( compWins );

    var cWin = confirm( 'Mamma mia! I got 5 before you! I win! Yeee-haa!! PLAY AGAIN!?!??!' );

    if ( cWin == true ) {
      location.reload();
    } else {
      alert( "Okey dokey!" );
      return false;
    }

  } else if ( userWins >= 5 ) {

     $( "#userWins" )
      .html( userWins );

    var uWin = confirm( 'Mamma mia! You got 5 before me! You win! PLAY AGAIN!?!?!!' );

    if ( uWin == true ) {
      location.reload();
    } else {
      alert( "Okey dokey!" );
      return false;
    }
  }


}

function rockSelect() {

  const userSelection = 'rock';

  const computerSelection = [ 'rock', 'paper', 'scissors' ];

  let rand = computerSelection[ Math.floor( Math.random() * computerSelection.length ) ];

  while ( compWins < 5 && userWins < 5 ) {

    switch ( rand ) {

      case userSelection:

        $( "#userWins" )
          .html( userWins );
        $( "#compWins" )
          .html( compWins );
        $( "#rand" )
          .html( rand + ' - Tie!' );

        return ( "Tie! Nobody wins! " + 'Your score: ' + userWins + ' - My score: ' + compWins );
        break;
      case 'paper':
        $( "#userWins" )
          .html( userWins );
        compWins++
        $( "#compWins" )
          .html( compWins );
        $( "#rand" )
          .html( rand + ' - I win!');

        return ( 'I win! Yeah! I chose ' + rand + '.' + ' Your score: ' + userWins + ' - My score ' + compWins );
        break;

      default:

        userWins++
        $( "#userWins" )
          .html( userWins );
        $( "#compWins" )
          .html( compWins );
        $( "#rand" )
          .html( rand + ' - You win!' );


        return ( "You win! Bah! I chose " + rand + '.' + ' Your score: ' + userWins + ' - My score: ' + compWins );




    }
  }
  wrapUp()

}

function paperSelect() {

  const userSelection = 'paper';

  const computerSelection = [ 'rock', 'paper', 'scissors' ];

  let rand = computerSelection[ Math.floor( Math.random() * computerSelection.length ) ];

  while ( compWins < 5 && userWins < 5 ) {

    switch ( rand ) {

      case userSelection:

        $( "#userWins" )
          .html( userWins );
        $( "#compWins" )
          .html( compWins );
        $( "#rand" )
          .html( rand + ' - Tie!' );

        return ( "Tie! Nobody wins! " + 'Your score: ' + userWins + ' - My score: ' + compWins );
        break;
      case 'scissors':
        $( "#userWins" )
          .html( userWins );
        compWins++
        $( "#compWins" )
          .html( compWins );
        $( "#rand" )
          .html( rand  + ' - I win!');

        return ( 'I win! Yeah! I chose ' + rand + '.' + ' Your score: ' + userWins + ' - My score ' + compWins );
        break;

      default:

        userWins++
        $( "#userWins" )
          .html( userWins );
        $( "#compWins" )
          .html( compWins );
        $( "#rand" )
          .html( rand + ' - You win!' );


        return ( "You win! Bah! I chose " + rand + '.' + ' Your score: ' + userWins + ' - My score: ' + compWins );


    }
  }
  wrapUp()

}

function scissorsSelect() {

  const userSelection = 'scissors';

  const computerSelection = [ 'rock', 'paper', 'scissors' ];

  let rand = computerSelection[ Math.floor( Math.random() * computerSelection.length ) ];

  while ( compWins < 5 && userWins < 5 ) {

    switch ( rand ) {

      case userSelection:

        $( "#userWins" )
          .html( userWins );
        $( "#compWins" )
          .html( compWins );
        $( "#rand" )
          .html( rand + ' - Tie!' );

        return ( "Tie! Nobody wins! " + 'Your score: ' + userWins + ' - My score: ' + compWins );
        break;
      case 'rock':
        $( "#userWins" )
          .html( userWins );
        compWins++
        $( "#compWins" )
          .html( compWins );
        $( "#rand" )
          .html( rand + ' - I win!');

        return ( 'I win! Yeah! I chose ' + rand + '.' + ' Your score: ' + userWins + ' - My score ' + compWins );
        break;

      default:

        userWins++
        $( "#userWins" )
          .html( userWins );
        $( "#compWins" )
          .html( compWins );
        $( "#rand" )
          .html( rand + ' - You win!'  );


        return ( "You win! Bah! I chose " + rand + '.' + ' Your score: ' + userWins + ' - My score: ' + compWins );


    }
  }
  wrapUp()

}



//This maps html buttons to javascript and displays results in console
var rock = document.getElementById( 'rock' );
rock.onclick = function() {
  console.log( rockSelect() );
}
var paper = document.getElementById( 'paper' );
paper.onclick = function() {
  console.log( paperSelect() );
}
var scissors = document.getElementById( 'scissors' );
scissors.onclick = function() {
  console.log( scissorsSelect() );
}