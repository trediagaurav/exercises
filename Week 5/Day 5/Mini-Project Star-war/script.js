
let name = document.getElementById("name");
let height = document.getElementById("height");
let gender = document.getElementById("gender");
let birth = document.getElementById("birth");
let home = document.getElementById("home");

let get_info = () => {
    let randomNumber = Math.floor(Math.random() * 83);
    let apiUrl = "https://swapi.dev/api/people/" + randomNumber + '/';
    const xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl);
    xhr.responseType = "json";
    xhr.onload = () => {
        if(xhr.status != 200){
        name.innerText = `Oh No! That person isn't available`;
        height.innerText = ``;
        gender.innerText = ``;
        birth.innerText = ``;
        } else{
            updateInfo(xhr.response);
        }
    };
    xhr.send(); 
    function updateLoading() {
        name.innerHTML = `<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>`;
        height.innerText = ``;
        gender.innerText = ``;
        birth.innerText = ``;
    }     
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

