let numbers = [10, 20, 30];
for(i=0; i<numbers.length; i++){
    console.log(numbers[i] + 5);
}

let numbers = [10, 20, 30];
for(add of numbers){
    console.log(add + 5);
}

let numbers = [10, 20, 30];
for(add in numbers){
    console.log(numbers[add] + 5);
}

//2.
let details = {
    phoneNumber: "03574847382",
    address: "menachem begin",
    level: 2,
    rooms: ["bathroom", 'livingroom'],
    married: true
}
for(let detail of details["rooms"]){
    console.log(detail);
}

let details = {
    phoneNumber: "03574847382",
    address: "menachem begin",
    level: 2,
    rooms: ["bathroom", 'livingroom'],
    married: true
}
for (let items in details["rooms"]) {
    console.log(details["rooms"][items])
}