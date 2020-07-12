//scope

//Root Scope(window)
var fun = 5;

function funFunction(){
    //child scope
    var fun = "helllo";
    console.log(1, fun);
}

function funerFunction(){
    //child scope
    var fun = "byee";
    console.log(2, fun);
}

function funestFunction(){
    //child scope
    fun = "AAAHHHHHHHHH";
    console.log(3, fun);
}

console.log("window", fun);
funFunction()  // 1 hello
funerFunction()  // 2 byee
funestFunction() // 3 AAAHHHHHHHHH
//console.log(fun);
// AAAHHHHHHHHH