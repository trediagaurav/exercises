document.getElementById("navBar").id = "socialNetworkNavigation";
let li = document.createElement("li")
let text = document.createTextNode("Logout")
let anchor = document.createElement("a")
anchor.setAttribute("href", "#")
anchor.appendChild(text)
li.appendChild(anchor)
let ul = document.getElementsByTagName("div")[0].firstElementChild
ul.appendChild(li);