document.getElementById("btnajax").addEventListener("click",makerequest);
let n = document.getElementById("name-id");
let r = document.getElementById("roll-id");

//USING RESPONSETYPE ="xml"

function makerequest (){
    console.log("Click");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.xml", true);
    xhr.responseType= "document"; 
    xhr.onload = () => {
        if(xhr.status === 200){
            //NAME
          console.log(xhr.response);
          console.log(xhr.response.getElementsByTagName("student"));
          console.log(xhr.response.getElementsByTagName("student")[0]);
          console.log(xhr.response.getElementsByTagName("name")[0].childNodes[0]);
          console.log(xhr.response.getElementsByTagName("name")[0].childNodes[0].nodeValue); 
          n.innerText = xhr.response
          .getElementsByTagName("student")[0]
          .getElementsByTagName("name")[0].childNodes[0].nodeValue;
          //Roll
          console.log(xhr.response);
          console.log(xhr.response.getElementsByTagName("student"));
          console.log(xhr.response.getElementsByTagName("student")[0]);
          console.log(xhr.response.getElementsByTagName("roll")[0].childNodes[0]);
          console.log(xhr.response.getElementsByTagName("roll")[0].childNodes[0].nodeValue);  
          r.innerText = xhr.response
          .getElementsByTagName("student")[0]
          .getElementsByTagName("roll")[0].childNodes[0].nodeValue;
        
        }else{
            console.log("problem Occured")
        }
    };
    xhr.send();
};
