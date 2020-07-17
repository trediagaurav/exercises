let promise = new Promise((resolve, reject) =>{
    if(true){
        resolve("stuff worked"); 
    }else{
        reject("Error, it broke")
    }    
})
promise
.then(result => result + '!')
.then(result2 => {
    throw Error
    console.log(result2);
})
.catch(() => console.log('Error!'))

// promise.then(result =>console.log(result));
// VM109:9 stuff worked
// Promise {<resolved>: undefined}