// Exercise 1

function insert_Row(){
     let table = document.getElementById("sampleTable");
     let row = table.insertRow(2);
     let cell1 = row.insertCell(0);
     let cell2 = row.insertCell(1);
     cell1.innerHTML = "NEW CELL!";
     cell2.innerHTML = "NEW CELL2";   
    }

// Differnt Way to solve the same prb.
 let button = document.getElementById("btn")
button.onclick = function insert_Row() {
    let add_row = document.createElement("tr")
    for (let i = 0; i < 2; i++) {
        let td = document.createElement("td")
        td.innerHTML = "row 3"
        add_row.appendChild(td)
    }
    let table = document.getElementsByTagName("table")[0]
    table.appendChild(add_row)
}