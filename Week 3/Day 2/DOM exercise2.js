let ric = document.querySelectorAll("li")[1];
ric.innerHTML = "Richard";

document.getElementsByClassName("list").className=("gaurav");

//remove li from the list
let parent = document.getElementById("gaurav");
let change = document.querySelectorAll("li")[3];
parent.removeChild(change);