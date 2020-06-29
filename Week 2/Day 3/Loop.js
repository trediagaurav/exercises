// For Loop
for (let i = 0; i <16; i++){
    if(i % 2 == 0){
        console.log( i," is a even number");
    }else{
        console.log(i, " is a odd number");
    }
    }
//for/in loop or for/of LOOP
    let family = {
        members: ["mom", "dad"],
        numberMembers: 2,
        familyName: "Smith",
        hasPet: true
    }
    ​
    //We go over the keys of the object family
    for (let property in family) {
        //We check if there is an existing property with a name of familyName
        if (property === "familyName") {
            // If a property has a name of familyName, we check if the value is Smith
            // If the value is Smith
            if (family[property] === "Smith") {
                console.log("Hello the Smith Family")
                // If the value is not Smith
            } else {
                console.log("I don't know you")
            }
            //if there is no existing property with a name of familyName, we enter the else
        } else {
            console.log("No FamilyName")
        }
    }
    
//1. Loop through the array of object
//2. If the username is Sarah : say hello to her friends (display the name of her friends)
//3. If the username is Dan : change his password to 567
​
//--> can use switch
//--> for in or for of
​
​
let users = [
    {
        username: "Sarah",
        password: 123,
        friends: ["max", "tom"]
    },
    {
        username: "Dan",
        password: 433
    }
]

for (let person of users){
    if (person.username === "Sarah"){
        for (let partner of person.friends){
            console.log("My friends is" , partner);
        }
    }
}
    
    
let basket = ["apples", "oranges", "bananas", "hummus", "socks", "car"]
for (let i = 0; i < basket.length; i++) {
	console.log(basket[i]);
}
for (i in basket){ //in gives you the index
	console.log(i + ": " + basket[i]);
}
for (item of basket){ //of gives the actual value
	console.log(item);  // "apples" "oranges" ...
}   