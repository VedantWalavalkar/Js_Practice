// document.addEventListener("keypress", move())
function move(){
    
    let t = document.getElementById("inner").style.top + 50;
    let l = document.getElementById("inner").style.left;

    console.log(t,"kajfkj")
    setInterval(diagMove(), 500)
    
    document.getElementById("inner").style.top = t + "px";
    console.log(t,"kajfkj")
}

function diagMove(){
    
    
    let t = document.getElementById("inner").style.top + 50;
    let l = document.getElementById("inner").style.left + 50;

    document.getElementById("inner").style.top = t + "px";
    document.getElementById("inner").style.left = l + "px";
}