document.getElementById("btnajax").addEventListener("click",makerequest);
let n = document.getElementById("name-id");
let r = document.getElementById("roll-id");

//USING RESPONSETYPE ="JSON"

// function makerequest (){
//     console.log("Click");
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "data.json", true); 
//     xhr.responseType = "json"
//     xhr.onload = () => {
//         if(xhr.status === 200){
//           console.log(xhr.response);
//           console.log(xhr.response.name);
//           console.log(xhr.response.roll);
//           n.innerText = xhr.response.name;
//           r.innerText = xhr.response.roll;
//         }else{
//             console.log("problem Occured")
//         }
//     };
//     xhr.send();
// };

//USING JSON.parse method

function makerequest (){
    console.log("Click");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", true); 
    xhr.onload = () => {
        if(xhr.status === 200){
          console.log(xhr.response);
          let gav = JSON.parse(xhr.response)
          console.log(gav);
          console.log(gav.name);
          console.log(gav.roll);
          n.innerText = gav.name
          r.innerText = gav.roll
        }else{
            console.log("problem Occured")
        }
    };
    xhr.send();
};
