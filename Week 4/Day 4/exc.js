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

// //1
//   const newarray = (arrayItem) => {
//       return arrayItem.username += "!";
//   }
// function exclamator(){
//     array.forEach(newarray)
// }
// console.log(array);

//2


    // for(i=0; i < array.length; i++){
    //     array[i].username += "?";
    // }
    // console.log(array);

//3

// const filterarr = array.filter (item =>{
//     return item.team == "red";
// });
// console.log(filterarr);

//4

// let totalScore = 0
//   for (i of array) {
//     totalScore += i.score; 
// }
// console.log(totalScore)


// const totalScore = () => {
//     let total = 0;
//     for(obj of array) {
//     total += obj.score;
//     }
//     console.log(total)
// }
// totalScore();

//5

const newArray = array.map(x => x);
    console.log(newArray);
    
