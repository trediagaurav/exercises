// 1. Create a structured html file linked to a js file

// 2. Write a JS function that takes a parameter: myAge

// 3. Console.log the age of my mum and my dad (my mum is twice my age, and my dad is 1.2 the age of my mum)

// 4. Call the function

function myAge(age){
    let mum_age = (age*2);
    let dad_age = (mum_age + 1.2);
    console.log("my mum is twice my age" + mum_age + " and my dad is 1.2 the age of my mum is " + dad_age);
    }
    // 1. Create a structured html file linked to a js file

    // 2. Write a JS function that takes a parameter: myAge
    
    // 3. Return the age of my mum (my mum is twice my age)
    
    // 4. Call the function
    
    // 5. Console.log the age of my mum     

    function myAge(age){
        let mum_age = (age*2);
        return ("my mum is twice my age " + mum_age);
    }
    let mum = myAge(20);
    console.log(mum);

    //Exercise Xp
    //1.
    function checkDriverAge(age){
        if (Number(age) < 18) {
            alert("Sorry, you are too yound to drive this car. Powering off");
        } else if (Number(age) > 18) {
            alert("Powering On. Enjoy the ride!");
        } else if (Number(age) === 18) {
            alert("Congratulations on your first year of driving. Enjoy the ride!");
        }
    }
//2.

let amazonBasket = {
    glasses:1,
    books:2,
    floss: 100,
}
function checkBasket(){
    let item = prompt("What items do you want");
    if(item === amazonBasket.books || amazonBasket.floss || amazonBasket.glasses){
        alert("Already in the Basket");
    }else{
        alert("Not in the Basket");
    }
}
//4.

let shoppingList = ["banana", "orange", "apple"]

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
function myBill(){
    let bill = (price.banana*)
}
//5.
for (let i = 0; i < 100; i++){
    if(i % 2 == 0){ 
     console.log(i);
}
}


//7.
//a.
let stay = 140
function hotel_cost(){
let days = prompt("Numbers of nights in hotel?");
let num = parseInt(days);
return stay * num
}

//b.

let destination ={
    London: 183,
    Paris: 220,
    other : 300,
};
function plane_ride_cost(){
    let holiday = prompt("what is your destination?");
for( let trip in destination){
    if(trip === holiday){
        console.log(destination[trip]);
        {break;}
    }else{
        alert("No destination found");
    }
}
}

//c.
let per_day_cost = 40;
function rental_car_cost(){
    let days = prompt("Numbers of days for car ?");
    let num = parseInt(days);
    let total = num * per_day_cost;
    let disc = total * 5 / 100
    if(num >10){
        return total - disc
    }else{
        return total
    };
};


