document.getElementById("btnajax").addEventListener("click",makerequest);
let data = document.getElementById("data")
function makerequest (){
    console.log("Click");
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
    xhr.responseType = "json";
    xhr.onload = () => {
        if(xhr.status === 200){
          console.log(xhr.response);
          document.getElementById("info").innerText = "Data Inserted";
        } else {
            console.log("problem Occured")
        }
    };
    mydata = {"name":"test","salary":"123","age":"23"}
    xhr.send(mydata);    
};

