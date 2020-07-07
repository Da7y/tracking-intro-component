var humbergerLine =document.querySelectorAll(".humberger__line");
var links = document.querySelector(".header__nav--links");
var humberger = false;


document.querySelector(".humberger").addEventListener("click",function(){
    humbergerLine[0].classList.toggle("open");
    humbergerLine[1].classList.toggle("open");
    humbergerLine[2].classList.toggle("open");

    if(!humberger){
        humberger = true;
        links.style.display="grid"

    }else{
        humberger = false;
        links.style.display="none"

    }


    });