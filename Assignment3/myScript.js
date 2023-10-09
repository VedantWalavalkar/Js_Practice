// document.cookie = "val =;expires=Thu, 01 Jan 1970 00:00:00 UTC";



function checkCookie(){
    let c = document.cookie;
    console.log(document.cookie);
    if(c == ""){
        document.cookie = "val = 0";
        alert("timer started")
    }
    else{
        setInterval(incrementCookie, 1000);
        alert("timer ongoing")
    }

    
}

function incrementCookie(){
    let c = document.cookie.split("=")[1];
    // console.log("working")
    if(parseInt(c) > 60){
        document.cookie = "val = 0"
        // alert("timer restarted")
    }
    else{
        document.getElementById("demo").innerHTML = c;
        let newVal = parseInt(c) + 1;
        document.cookie = "val = " + newVal;
    }
    // console.log(c);
    console.log(document.cookie);
}