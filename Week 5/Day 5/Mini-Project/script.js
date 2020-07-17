// fetch('https://swapi.dev/api/people/1')
// .then(response => response.json())
// .then(console.log)

// let get_info = () =>{
//         let randomNumber = Math.floor(Math.random() * 83);
//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", "https://swapi.dev/api/people/1", true);
//         xhr.responseType = "json";
//         xhr.onload = () => {
//             if(xhr.status === 200){
//                console.log(xhr.response + randomNumber + '/');
//             } else{
//                 console.log("problem Occured")
//             }
//         };
//         xhr.send();     
// };
// get_info();
let name = document.getElementById("name");
let height = document.getElementById("height");
let gender = document.getElementById("gender");
let birth = document.getElementById("birth");
let home = document.getElementById("home");

let get_info = () =>{
    let randomNumber = Math.floor(Math.random() * 83);
    let apiUrl = "https://swapi.dev/api/people/" + randomNumber + '/';
    const xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl);
    xhr.responseType = "json";
    xhr.onload = () => {
        if(xhr.status != 200){
           console.log("Error !!!")
        } else{
            updateInfo(xhr.response);
        }
    };
    xhr.send(); 
           
};
get_info();



function updateInfo(resp){
    let url = new URL(resp.homeworld);
    url.protocol = 'https';
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url.href);
    xhr.responseType = "json";
    xhr.onload = () => {
        if(xhr.status != 200){
           console.log("Error !!!")
        } else{
            updateInfo2(xhr.response);
        }
    };
    xhr.send();     
   console.log(resp);
    name.innerText= `Name: ${resp.name}`;
    height.innerText= `Height: ${resp.height}`;
    gender.innerText=`Gender: ${resp.gender}`;
    birth.innerText= `Birth: ${resp.birth_year}`;
};
function updateInfo2(re){
    console.log(re.name);
    home.innerText =`Home: ${re.name}`;
}

function updateInfoError() {
    name.innerText = `Oh No! That person isn't available`;
    height.innerText = ``;
    gender.innerText = ``;
    birth.innerText = ``;
}

function updateLoading() {
    name.innerHTML = `<i class="fas fa-spinner fa-pulse"></i> <p>Loading...</p>`;
    height.innerText = ``;
    gender.innerText = ``;
    birth.innerText = ``;
}