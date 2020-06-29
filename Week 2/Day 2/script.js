let userAnswer = prompt("How old are you?")
let userNumber = parseFloat(userAnswer)

if(userNumber < 18){
    alert("Sorry, you are too young to drive this car. Powering off")
} else if(userNumber === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!")
} else if(userNumber > 18) {
    alert("Powering On. Enjoy the ride!")
}
//switch //
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}

let a = 2 + 2;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}