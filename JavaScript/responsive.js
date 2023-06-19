let ancho = document.documentElement.clientWidth;
const bannerpromo= document.getElementById("bannerpromo");


window.addEventListener('resize', function(resize){
    bannerpromo.style.width=ancho;
    var anchura = bannerpromo.offsetWidth;
    bannerpromo.style.height= (anchura / 2.9) + "px";
})

window.onload = function(){
    bannerpromo.style.width=ancho;
    var anchura = bannerpromo.offsetWidth;
    bannerpromo.style.height= (anchura / 2.9) + "px";
}




