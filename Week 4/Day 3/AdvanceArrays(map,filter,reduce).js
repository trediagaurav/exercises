// Advance Arrays
//forEach

const array = [1, 2, 10, 16];
const double = []
const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log(double);

//  [2, 4, 20, 32]


// MAP

const array1 = [1, 2, 10, 16];
const mapArray = array.map ((num) => {
    return num * 2;
})

console.log(mapArray)

// [2, 4, 20, 32]

//Filter 

const filterArray = array.filter (num => num > 5);

console.log(filterArray);

// [10, 16]

//Reduce

const reduceArray = array.reduce ((accumulator, num) => {
    return accumulator + num
}, 0);

console.log(reduceArray);

//29 