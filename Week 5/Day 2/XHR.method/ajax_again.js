document.getElementById("btnajax").addEventListener("click",makerequest);
function makerequest (){
    console.log("Click");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "data.txt", true);
    xhr.withCredentials = true;
    xhr.responseType = "text";
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onload = () => {
        if(xhr.status === 200){
            console.log("XHR Oject", xhr)
            console.log("responseText", xhr.responseText);
            console.log("statusText",xhr.statusText);
            console.log("response)",xhr.response);
            console.log("responseURL",xhr.responseURL);
            console.log("withCredentials",xhr.withCredentials);
            console.log(xhr.getAllResponseHeaders("LAST-Modified"));
            console.log(xhr.getAllResponseHeaders()) 
        }else{
            console.log("problem Occured")
        }
    };

    xhr.send();    
};

//LOOKS LIKE THIS IN CONSOLE.LOG


// Click
// ajax_again.js:11 XHR Oject XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: true, upload: XMLHttpRequestUpload, …}
// ajax_again.js:12 responseText stages of XMLHttpRequest 
// ajax_again.js:13 statusText OK
// ajax_again.js:14 response) stages of XMLHttpRequest 
// ajax_again.js:15 responseURL http://127.0.0.1:5500/Week%205/Day%202/XHR.method/data.txt
// ajax_again.js:16 withCredentials true
// ajax_again.js:17 accept-ranges: bytes
// access-control-allow-credentials: true
// cache-control: public, max-age=0
// content-length: 25
// content-type: text/plain; charset=UTF-8
// date: Tue, 14 Jul 2020 15:07:40 GMT
// etag: W/"19-1734db7463b"
// last-modified: Tue, 14 Jul 2020 14:25:23 GMT
// vary: Origin

// ajax_again.js:18 accept-ranges: bytes
// access-control-allow-credentials: true
// cache-control: public, max-age=0
// content-length: 25
// content-type: text/plain; charset=UTF-8
// date: Tue, 14 Jul 2020 15:07:40 GMT
// etag: W/"19-1734db7463b"
// last-modified: Tue, 14 Jul 2020 14:25:23 GMT
// vary: Origin
