const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev  =document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;


const nextSlide = () => {

   // Get Current Class
   const current = document.querySelector('.current');

   // Remove current Class
   current.classList.remove('.current');
   // check for next class

   if(current.nextElementSibling) {
       //  add current to next sibling
       current.nextElementSibling.classList.add('current');
   } else {
       //  move back to first 
       slides[0].classList.add('current');
   }
   setTimeout(() => current.classList.remove('current'));
}


//  For previous slide this function is used

const prevSlide = () => {

   // Get Current Class
   const current = document.querySelector('.current');

   // Remove current Class
   current.classList.remove('.current');
   // check for previous class

   if(current.previousElementSibling) {
       //  add current to previous sibling
       current.previousElementSibling.classList.add('current');
   } else {
       //  move back to last slide 
       slides[slides.length - 1].classList.add('current');
   }
   setTimeout(() => current.classList.remove('current'));
}

//  Button Events

next.addEventListener('click', e => {
   nextSlide();
});

prev .addEventListener('click', e => {
   prevSlide();
});

