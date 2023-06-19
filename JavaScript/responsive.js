let ancho = document.documentElement.clientWidth;
const bannerpromo= document.getElementById("bannerpromo");
const bannerplan = document.getElementById("container-plan");
const distancia = bannerplan.style.gap;


window.addEventListener('resize', function(resize){
    bannerpromo.style.width=ancho;
    var anchura = bannerpromo.offsetWidth;
    bannerpromo.style.height= (anchura / 2.9) + "px";
    if (ancho < 1700 + "px"){
        bannerplan.style.gap = distancia - (1 + "rem");
    }
})

window.onload = function(){
    bannerpromo.style.width=ancho;
    var anchura = bannerpromo.offsetWidth;
    bannerpromo.style.height= (anchura / 2.9) + "px";
}




