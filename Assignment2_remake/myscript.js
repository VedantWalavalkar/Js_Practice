// addEventListener("keypress",move());

function move(){
    // document.getElementById("inner").style.backgroundColor = "red";
    let t = document.getElementById("inner").style.top
    let ib =window.getComputedStyle("innercontainer").top.toString().split("px")[0]
    console.log(ib);
}