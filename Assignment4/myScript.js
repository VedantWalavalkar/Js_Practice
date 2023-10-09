// document.cookie = "cname = 1;expires=Thu, 18 Sep 1970 00:00:00 UTC"
document.cookie = "name=1"
function getCookies(){
    let c = document.cookie.split(";");
    // for(let i = 0 ; i<c.length ; i++){
    //     let curr = c[i];
    //     let nm = curr.split("=")[0];
    //     let vl = curr.split("=")[1];

    //     if(nm == cname) return 
    // }
    return c;
}
function setCookie(cname, cval){
    // console.log("working")
    let c = getCookies();
    for(let i = 0; i<c.length ; i++){
        let curr = c[i];
        let cName = curr.split("=")[0];
        let cVal = curr.split("=")[1];

        console.log(cName);
        while(cName.charAt(0) == ' ') cName = cName.substring(1);
        console.log(cName);

        if(cName == cname)
        {
            console.log("if working")
            document.cookie = cname + "=" + cval;
            break
        }

        console.log("loop end")
    }
}

function timer(){
    let c = getCookies();
    console.log(c)

    setCookie("name", "5");

    console.log(c);
}