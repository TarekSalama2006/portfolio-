////////////////////////////////////////////////////////////
/////////////////////////////start/////////////////////////
///////////////////////////////////////////////////////////

let btn = document.getElementById("enterBtn");
let loader = document.querySelector(".loader");
let bar = document.querySelector(".loader span");


btn.onclick = function(){

    btn.style.display = "none";

    loader.style.opacity = "1";


    setTimeout(function(){

        bar.style.width = "100%";

    },100);



    setTimeout(function(){

        window.location.href = "home.html";

    },5000);

}

////////////////////////////////////////////////////////////
/////////////////////////////img scroll/////////////////////////
///////////////////////////////////////////////////////////

const hero = document.querySelector(".hero");

const images = [
    "img/back/file_00000000cea872468e86565b96c11671 (1).jpg",
    "img/back/file_00000000abb071f488628ef2992d2afc (1).jpg",
    "img/back/file_000000003ad47246a6ac818bc63ef366 (1).jpg",

];

let index = 0;

function changeBg(){
    hero.style.backgroundImage = "url('" + images[index] + "')";

    index++;

    if(index >= images.length){
        index = 0;
    }
}

changeBg();

setInterval(changeBg, 80000);
