document.getElementById("btnajax").addEventListener("click",makerequest);
let table = document.getElementById("table")
function makerequest (){
    console.log("Click");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.responseType = "json";
    xhr.onload = () => {
        if(xhr.status === 200){
           console.log(xhr.response);
           x =xhr.response
           for(i=0; i<x.length; i++){
                table.innerHTML += "<tr><tr>" + x[i].id + "</td><td>" +
                x[i].title + "</td><td>" + x[i].body +"</td></tr>";

                }
        } else{
            console.log("problem Occured")
        }
    };
    xhr.send();    
};

