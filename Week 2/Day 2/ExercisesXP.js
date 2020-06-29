//Exercise 1
var a = prompt("What is your number")
var b = prompt("Write your second number")
var x = parseFloat(a);
var y = parseFloat(b);

if(x > y){
    alert("The first number is bigger then second number")
} else{ 
    alert("Second number is bigger then first number")
}

//Exercise 2
var newDog = ("chihuahua");
undefined
newDog.length
9
newDog.toUpperCase()
"CHIHUAHUA"
newDog.toLowerCase()
"chihuahua"
var newDog = ("chihuahua");
undefined
if(newDog="chihuahua"){
    console.log("I LOVE Chihuahua, it’s my favorite dog");
} else{
    console.log("I dont care, I prefer CATS");
}
VM559:2 I LOVE Chihuahua, it’s my favorite dog
undefined

//Exercise 3
var user = prompt("Choose a number");
var userNumber = Number(user);
if(userNumber % 2 == 0){
    alert(userNumber + " is an even Number");
} else{
    alert(userNumber + " is not an even Number");
}
//exercise 4
let users = ["Bob ", "Smith", "Tom", "Jerry", "Ramu"];
let userName = prompt("How many ppl online");
let online = parseInt(userName)
if(userName === 0){
    alert(userName + " No one online");
}else if(online == 1){
    alert(users[0] + " is online");
}else if(online == 2){
    alert(users[0] + users[1]  + " is online");
}else if(online >2){
    alert(`${users[0]},${users[1]}, and ${online -2} more are online`);
}

//Daily challenge

let game = ("The game is not so bad");
let gameOver = game.indexOf('not');
let gameNew = game.indexOf('bad');
if(gameOver < gameNew){
    let change = game.slice(gameOver, gameNew+3);
    console.log(game.replace(change, "good"));
}else{
    console.log(game);
}