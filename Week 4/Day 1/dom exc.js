// Exercise 1

let content = document.getElementById("content");

let first_element_child = content.firstElementChild;
console.log(first_element_child);

let first_child = content.firstChild;
console.log(first_child);

let last_element_child = content.lastElementChild;
console.log(last_element_child);

let last_child = content.lastChild;
console.log(last_child);

let next_element_sibling = content.firstElementChild.nextElementSibling;
console.log(next_element_sibling);

let previous_element_sibling = content.lastElementChild.previousElementSibling;
console.log(previous_element_sibling);

let parent_node = content.parentNode;
console.log(parent_node);

let page = document.getElementById("page");

let child_nodes = page.childNodes;
console.log(child_nodes);

// Exercise 2

let inner_HTML = content.innerHTML;
console.log(inner_HTML);

// let change_inner_HTML = content[0].innerHTML = "hello";
// console.log(change_inner_HTML);

let title = document.getElementsByTagName("h1")[0];
console.log(title);
let get_attribute_value = title.getAttribute("id")
console.log(get_attribute_value);

let set_attribute_value = title.setAttribute("id", "class");
console.log(set_attribute_value);

// Exercise 3
let li = document.createElement("li");
let text = document.createTextNode("hello");
li.appendChild(text);
document.getElementById("extra").appendChild(li);

let a = document.createElement("li");
let insert_before = document.createTextNode("insert before");
a.appendChild(insert_before);
let list = document.getElementById("extra")
list.insertBefore(a, list.childNodes[1]);

list.removeChild(list.childNodes[1]);

let textnode = document.createTextNode("new item");
let lot_replace = document.getElementById("extra");
lot_replace.replaceChild(textnode, lot_replace.childNodes[3]);

// Exercise 1: Traversing the DOM
// Knowing how to traverse the DOM using JavaScript provides a foundation
// to altering an HTML page in real time.
// Using the HTML markup in Listing 1, perform these tasks:
// 1. Use the firstElementChild / firstChild property to access an element.
// 2. Use the lastElementChild / lastChild  property to access an element.
// 3. Use the nextElementSibling / nextSibling  property to access an element.
// 4. Use the previousElementSibling / previousSibling  property to access an element.
// 5. Use the parentNode property to access an element.
// 6. Use the childNodes property to access a group of child elements.
// ​
// ​
// Exercise 2: Targeting nodes 
// In exercise 1, you learned how to target nodes in several ways.
// Continuing to use the markup in Listing 1, perform the following tasks:
// 1. Retrieve the value of a node using nodeValue / innerText / innerHTML.
// 2. Change the value of a node using nodeValue / innerText / innerHTML.
// 3. Retrieve the value of a node attribute.
// 4. Change the value of a node attribute.
// ​
// Exercise 3: Manipulating the DOM
// Now that you know how to traverse the DOM and alter node values,
// the next logical step is to learn how to add, remove, and replace nodes.
// Perform the following tasks:
// 1. Use the appendChild method to add a node.
// 2. Use the insertBefore method to add a node.
// 3. Use the removeChild method to remove a node.
// 4. Use the replaceChild method to replace a node.
// Collapse








