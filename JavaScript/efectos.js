//Codigo para Banner descuentos con formulario de llamame
document.addEventListener('DOMContentLoaded', function() {
  var sliderImages = document.querySelectorAll('.imagenes img');
  var sliderNavItems = document.querySelectorAll('.puntos li');

  var currentIndex = 0;
  var timeout;

  function changeSlide(index) {
    // Actualizar clases de imágenes y elementos de navegación
    sliderImages[currentIndex].classList.remove('activo');
    sliderNavItems[currentIndex].classList.remove('activo');

    sliderImages[index].classList.add('activo');
    sliderNavItems[index].classList.add('activo');

    currentIndex = index;
  }

  function nextSlide() {
    var newIndex = (currentIndex + 1) % sliderImages.length;
    changeSlide(newIndex);
    startTimer();
  }

  function startTimer() {
    clearTimeout(timeout);
    timeout = setTimeout(nextSlide, 5000);
  }

  // Agregar eventos de clic a los elementos de navegación
  for (var i = 0; i < sliderNavItems.length; i++) {
    (function(index) {
      sliderNavItems[index].addEventListener('click', function() {
        changeSlide(index);
        startTimer();
      });
    })(i);
  }

  // Iniciar el slider
  changeSlide(0);
  startTimer();
});







