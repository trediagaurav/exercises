
let name = document.getElementById("name");
let height = document.getElementById("height");
let Weight = document.getElementById("weight");
let type = document.getElementById("type");
let g = document.getElementById("g");
let err = document.getElementById("err");
let pic = document.getElementById("img");
let foo = document.getElementById("foo")

let get_info = async() => {
    let randomNumber = Math.floor(Math.random() * 151);
    let url = "https://pokeapi.co/api/v2/pokemon/" + randomNumber + '/';
    try{
        const response = await fetch(url);
        const obj = await response.json()
        console.log(obj)
             name.innerText =`${obj.name}`
             g.innerText= `pokemon n ${obj.id}`
             height.innerText = `Height: ${obj.height}cm`
             weight.innerText =`Weight: ${obj.weight}gr`
             type.innerText = `Type: ${obj.types[0].type.name}`
             let pokemonImage = obj.sprites.front_default
             console.log(pokemonImage)
             pic.setAttribute('src', pokemonImage)
             foo.appendChild(pic)
    } catch(err){
        console.log('error')
                err.innerText = `Oh no! That Pokemon isn’t available…`;
                name.innerText =``;
                g.innerText= ``;
                height.innerText =``;
                weight.innerText =``;
                type.innerText = ``;
    }
} 

//LEFT BUTTON

let get_info_left = () => {
    let randomNumber = Math.floor(Math.random() * 151);
    let url = "https://pokeapi.co/api/v2/pokemon/" + randomNumber +'/';
    fetch(url)
        .then((resp) => resp.json())
        .then(function(obj){
            console.log(obj)
             name.innerText =`${obj.name}`
             g.innerText= `pokemon n ${obj.id}`
             height.innerText = `Height: ${obj.height}cm`
             weight.innerText =`Weight: ${obj.weight}gr`
             type.innerText = `Type: ${obj.types[0].type.name}`
             let pokemonImage = obj.sprites.front_default
             console.log(pokemonImage)
             pic.setAttribute('src', pokemonImage)
             foo.appendChild(pic)
        })
        .catch(function(error){
            console.log('error')
            err.innerText = `Oh no! That Pokemon isn’t available…`;
            name.innerText =``;
            g.innerText= ``;
            height.innerText =``;
            weight.innerText =``;
            type.innerText = ``;
        }) 
        
        
} 

// //RIGHT BUTTON

let get_info_right = () => {
    let randomNumber = Math.floor(Math.random() * 151);
    let url = "https://pokeapi.co/api/v2/pokemon/" + randomNumber +'/';
    fetch(url)
        .then((resp) => resp.json())
        .then(function(obj){
            console.log(obj)
             name.innerText =`${obj.name}`
             g.innerText= `pokemon n ${obj.id}`
             height.innerText = `Height: ${obj.height}cm`
             weight.innerText =`Weight: ${obj.weight}gr`
             type.innerText = `Type: ${obj.types[0].type.name}`
             let pokemonImage = obj.sprites.front_default
             console.log(pokemonImage)
             pic.setAttribute('src', pokemonImage)
             foo.appendChild(pic)
        })
        .catch(function(error){
            console.log('error')
            err.innerText = `Oh no! That Pokemon isn’t available…`;
            name.innerText =``;
            g.innerText= ``;
            height.innerText =``;
            weight.innerText =``;
            type.innerText = ``;
        }) 
        
        
}   