// nav bar toggle
let navBar=document.querySelector('.navLink');
let menuBar = document.querySelector('#menuBtn');

menuBar.onclick = () =>{
    navBar.classList.toggle('active');
}
// scroll section and sticky navbar
window.onscroll =()=>{
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100); 
}
// swiper-auto
//esa use karna ke liya tum direact crome pe likho swiper-autoplay scrpit code miljayaga 
var swiper = new Swiper('.myHome', {
    // slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

// counter section start
let valueDisplay =document.querySelectorAll('.num');
let interval=1000;
valueDisplay.forEach((valueDisplay)=>{
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-value"));

  let duration =Math.floor(interval/endValue);
  let counter = setInterval(function(){
    startValue +=1;
    valueDisplay.textContent=startValue;
    if(startValue ==endValue){
      clearInterval(counter);
    }
  }, duration);
});

// client side
var swiper = new Swiper('.myClient', {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints:{
    640:{
      slidesPerView:1,
      spaceBetween:20,
    },
    768:{
      slidesPerView:2,
      spaceBetween:40,
    },
    1024:{
      slidesPerView:3,
      spaceBetween:50,
    },
  }
});