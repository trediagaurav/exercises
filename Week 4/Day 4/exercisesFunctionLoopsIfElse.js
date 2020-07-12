//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration,
//it will check if the current number is odd or even,
//and display a message to the screen.
//Sample Output:
//"0 is even"
//"1 is odd"
//"2 is even"

for(i = 0; i < 15; i++){
  if( i%2 === 0){
      console.log(i + "is even");
                  }else{
      console.log(i + "is odd");
                  }
};


//Write a JavaScript program which iterates the integers from 1 to 100.
//But for multiples of three print "Fizz" instead of the number and
//for the multiples of five print "Buzz".
//For numbers which are multiples of both three and five print "FizzBuzz".

for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Buzz" );
  }
  else
  {
    console.log(i);
  }
}

//Write a JavaScript program which compute, the average marks of the following students
// Then, this average is used to determine the corresponding grade.
/*
var students = [
  ['David', 80],
  ['Vinoth', 77],
  ['Divya', 88],
  ['Ishitha', 95],
  ['Thomas', 68]
];
Range	Grade
F <60
D <70
C <80
B <90
A <100
*/

var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}

//Write a JavaScript program to construct the following pattern,
//using a nested for loop.
*
* *
* * *
* * * *
* * * * *

// Complete the below questions using this array:
const array = [
  {
    username: "john!?",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky!",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy!",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const newarray = (arrayItem) => {
        return arrayItem.username += "!";
    }
  function exclamator(){
      array.forEach(newarray)
  }
  console.log(array);

//Create an array using for loop that has all the usernames with a "?" to each of the usernames

for(i=0; i < array.length; i++){
  array[i].username += "?";
}
console.log(array);


//Filter the array to only include users who are on team: red

const filterarr = array.filter (item =>{
  return item.team == "red";
});
console.log(filterarr);

//Find out the total score of all users

let totalScore = 0
  for (i of array) {
    totalScore += i.score; 
}
console.log(totalScore)


const totalScore = () => {
  let total = 0;
  for(obj of array) {
  total += obj.score;
  }
  console.log(total)
}
totalScore();

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

//BONUS: Write a JavaScript program to construct the following pattern,
//using a nested for loop.
        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *
