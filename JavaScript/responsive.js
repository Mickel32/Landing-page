let ancho = document.documentElement.clientWidth;
const bannerpromo= document.getElementById("bannerpromo");
var iteration = 0;
const modal  = document.getElementById("modal");
const cierreModal = document.getElementById("modal-cierre")
var tiempoInactivo = 30000;


window.addEventListener('resize', function(resize){
    bannerpromo.style.width=ancho;
    var anchura = bannerpromo.offsetWidth;
    bannerpromo.style.height= (anchura / 2.9) + "px";
})

window.onload = function(){
    bannerpromo.style.width=ancho;
    var anchura = bannerpromo.offsetWidth;
    bannerpromo.style.height= (anchura / 2.9) + "px";
    modal.style.visibility = `hidden`;
    reiniciarTiempo();
}

function ocultarDiv(){
  modal.style.visibility = `hidden`;
}

function mostrarDiv(){
  modal.style.visibility = `visible`;
};

cierreModal.addEventListener('click', function(){
  modal.style.visibility = `hidden`;
  reiniciarTiempo();
})

function reiniciarTiempo() {
  clearTimeout(ocultarDiv, tiempoInactivo);
  setTimeout(mostrarDiv, tiempoInactivo)
}

  document.onmousemove = reiniciarTiempo;

//Banner de planes

var iteration = 0;
const next = document.querySelector('.btn-right');
const previous = document.querySelector('.btn-left');
const container = document.getElementsByClassName('plan-card-dsc');
const tarjeta = document.querySelector('.plan-card-dsc');
var recorrido = 0;
var conteo = 0;

switch (true){
    case (ancho > 1119 && ancho< 1165):
        recorrido = -121.7;
        break; 
    case (ancho > 1164 && ancho< 1260):
        recorrido = -120.8;
        break; 
        case (ancho > 1260 && ancho< 1435):
          recorrido = -119.95;
          break;
    case (ancho > 1434 && ancho< 1510):
        recorrido = -123;
        break; 
    case (ancho > 1509 && ancho< 1550):
        recorrido = -120;
        break; 
    case (ancho > 1549 && ancho< 1614):
        recorrido = -121.7;
        break;         
    case (ancho > 1614 && ancho< 1669):
        recorrido = -120.7;
        break;
    case (ancho > 1669 && ancho< 1900):
        recorrido = -120;
        break;
    default:
        recorrido = -110;
        break
}



next.addEventListener('click', function(){
  nextSlide();
})

  function nextSlide(){
    if (iteration > 5 && ancho > 1614){
      conteo = 4;
    } else if(iteration > 6 && ancho < 1550){
        conteo = 5;
      } else if(iteration > 5 && (ancho < 1615 && ancho > 1549)){
        conteo = 4;
      } else{
      conteo = iteration +1;
      for (var i = 0; i< container.length; i++){  
        var posicion = container[i];
        let operation = conteo * recorrido;
        posicion.style.transform = `translateX(${operation}%)`;
        iteration = conteo;
    }
      }
    }

function previousSlide(){
  if (iteration < 1){
    conteo = 0;
  } else{
    conteo = iteration -1;
    for (var i = 0; i< container.length; i++){  
      var posicion = container[i];
      let operation = conteo * recorrido;
      posicion.style.transform = `translateX(${operation}%)`;
      iteration = conteo;
  }
}
}

previous.addEventListener('click', function(){
  previousSlide();
})




