document.getElementById("btnajax").addEventListener("click",makerequest);
let dt = document.getElementById("data");

function makerequest (){
    console.log("Click");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.txt", true); 
    xhr.onload = () => {
        if(xhr.status === 200){
          console.log(xhr.responseText);
          dt.innerText = xhr.responseText; 
        }else{
            console.log("problem Occured")
        }
    };
    xhr.send();
};
