
    let gav = new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve("success");
        }, 4000);    
    });
    gav.then(value =>{
        setTimeout(() =>{
            console.log(value);
        }, 100);
    });

    // Ans 4

    gav.then((value) =>{
        return 
    });
