var array = ["Banana", "Apples", "Oranges", "Blueberries"];
undefined
array.shift("Banana");
"Banana"
array
(3) ["Apples", "Oranges", "Blueberries"]
array.push("kiwi");
4
array
(4) ["Apples", "Oranges", "Blueberries", "kiwi"]
array.shift("Apples");
"Apples"
array
(3) ["Oranges", "Blueberries", "kiwi"]
array.reverse();
(3) ["kiwi", "Blueberries", "Oranges"]


var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
array2[1][1]
["Oranges"]
