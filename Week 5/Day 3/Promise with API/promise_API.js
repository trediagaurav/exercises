

let chuckNorris = new Promise(function(resolve,reject){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", 'data.json', true);
    xhr.responseType= "json"; 
    xhr.onload = () => {
        if(xhr.status === 200){
           resolve(xhr);
        } else{
           reject(xhr);
        }
    };
    xhr.send();
});

chuckNorris.then(x => console.log(`Joke : ${x.response.value}`))
chuckNorris.catch(error => console.log(`Error: ${error.status}`))
chuckNorris.finally(() => console.log(`I love it !`))

console.log(chuckNorris);


// VM565:5 Promise {<rejected>: XMLHttpRequest}
// VM565:2 Error: 404
// VM565:3 I love it !
// undefined