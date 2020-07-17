document.getElementById("btnajax").addEventListener("click",makerequest);

function makerequest (){
   console.log("clicked")
   const xhr = new XMLHttpRequest();
   if(xhr.readyState === 0){
       console.log("Open method not yet called 0");
   }
   xhr.open("GET", "data1.txt", true)
   if(xhr.readyState === 1){
    console.log("Open method called 1");
}
   xhr.onreadystatechange = () => {
    if(xhr.readyState === 2){
        console.log("Response header 2");
    }
    if(xhr.readyState === 3){
        console.log("Loading....3");
    }
    if(xhr.readyState === 4){
        console.log("Done....4");
    }
       if(xhr.readyState === XMLHttpRequest.DONE){
           if(xhr.status === 200){
               console.log(xhr);
               console.log(xhr.responseText);
           }else{
               console.log("Problem Occured");
           }
       }
   };
   xhr.send();
}

//THE FLOW OF READYSTATE

// ajax.js:4 clicked
// ajax.js:7 Open method not yet called 0
// ajax.js:11 Open method called 1
// ajax.js:15 Response header 2
// ajax.js:18 Loading....3
// ajax.js:21 Done....4
// ajax.js:25 XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
// ajax.js:26 Ajax Practice