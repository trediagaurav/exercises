let people = ["Greg", "Billy", "Mary", "Devon", "bob", "bill", "Frank", "James", "dave"];
// 1.
for (person of people){
	console.log(person)
}
// 2.
people.shift();
console.log(people) //["Mary", "Devon", "James"]
// 3.
//splice(start, count, items...)
people.splice(people.indexOf("James"),1,"Jason")
console.log(people);
// 4.
people.push("Jonathan")
console.log(people);
// 5.
 for (person of people){
	console.log(person)
	if (person == "Mary"){
		break;
	}
}
// 6.
console.log("QUESTION 6")
// coming soon to a cinema near you (with corona)
// 9.
console.log("QUESTION 9")
console.log(people[people.length -1]);
let arr = ["a", "b", "c"]
let last_item = arr.pop()