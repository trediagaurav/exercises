document.getElementById("btnajax").addEventListener("click",makerequest);
let data = document.getElementById("data")
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
               console.log(x[i].userId);
               console.log(x[i].id);
               console.log(x[i].title);
               console.log(x[i].body);
                
            }
        } else{
            console.log("problem Occured")
        }
    };
    xhr.send();    
};

