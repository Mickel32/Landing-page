const images = ['promo1', 'promo2', 'promo3'];
const punto = ['punto1', 'punto2', 'punto3']
var currentIndex = 0;
let interrumpir = false;


function fadeInNextImage() {

  const currentImage = document.getElementById(images[currentIndex]);
  const nextIndex = (currentIndex + 1) % images.length;
  const nextImage = document.getElementById(images[nextIndex]);

  if (interrumpir == true){
    setTimeout(fadeInNextImage, 5000);
    fadeInNextImage();
    interrumpir = false;
  }

  if (currentIndex == 0){
    pr2.classList.add('activo');
    pr1.classList.remove('activo');
    pr3.classList.remove('activo');
  } else if  (currentIndex == 1){
    pr3.classList.add('activo');
    pr1.classList.remove('activo');
    pr2.classList.remove('activo');
  }else {
    pr1.classList.add('activo');
    pr2.classList.remove('activo');
    pr3.classList.remove('activo'); 
  }

  currentImage.style.opacity = '0';
  nextImage.style.opacity = '1';

  currentIndex = nextIndex;
  
}

setInterval(fadeInNextImage, 5000);


// function iniciar(){
//     interrumpir = false;
//     fadeInNextImage();
//   }

// // const punto = document.querySelectorAll('.punto')

// // punto.forEach ((cadaPunto, i)=>{
// //   punto[i].addEventListener('click',()=>{
// //     punto.forEach((cadaPunto, i)=>{

// //       punto[i].classList.remove('activo')
// //       imagen[i].classList.remove('activo')
// //     })
// //     punto[i].classList.add('activo')
// //     imagen[i].classList.add('activo')
// //     setTimeout(fadeInNextImage, 10000);
// //     let currentIndex = 0; 
// //     fadeInNextImage();
// //   })
// // })

'use strict'

const pr1 = document.getElementById('punto1');
const pr2 = document.getElementById('punto2');
const pr3 = document.getElementById('punto3');
const img1 = document.getElementById('promo1');
const img2 = document.getElementById('promo2');
const img3 = document.getElementById('promo3');

pr1.addEventListener('click',()=>{
  interrumpir = true;
  pr1.classList.add('activo');
  pr2.classList.remove('activo');
  pr3.classList.remove('activo');
  img1.classList.add('activo');
  img2.classList.remove('activo');
  img3.classList.remove('activo');
})

pr2.addEventListener('click',()=>{
  interrumpir = true;
  pr2.classList.add('activo');
  pr1.classList.remove('activo');
  pr3.classList.remove('activo');
  img2.classList.add('activo');
  img1.classList.remove('activo');
  img3.classList.remove('activo');
})

pr3.addEventListener('click',()=>{
  interrumpir = true;
  pr3.classList.add('activo');
  pr1.classList.remove('activo');
  pr2.classList.remove('activo');
  img3.classList.add('activo');
  img1.classList.remove('activo');
  img2.classList.remove('activo');
})



