let button = document.getElementById("btn");
let text = document.getElementById("text");

button.addEventListener("click", handleClick);

function handleClick(){
    changeButton();
    changeText();
}
    
function changeButton(){
    if (button.innerHTML == "Thanks!"){
        button.innerHTML = "Click me!";
    }else{
        button.innerHTML = "Thanks!"
    }
}
function changeText(){
    text.style.color = "red";
}

// let listOfNumber = [1,2,3,4,5,6,7,8,9,10];
// function number(){
//     let pick = prompt("Choose your Number from 1 to 10?");
//     if(pick == 10){
//     alert("your number is the biggest Number");
//     }else if(pick < 10){
//     alert("Your number is not the biggest Number");
//     }
//     }
//Total up the Numbers
// function sum(){
//     for(sum of listOfNumber){
//     console.log(listOfNumber[sum] + sum);
//     }
//     }