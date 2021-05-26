const slides = document.querySelectorAll('.slide');
const slideContainer = document.querySelector('.slides__container');
const numeroSlides = slides.length;
const navBtns = document.querySelectorAll('.nav_plus');
let currSlide = 0;

var playSlider;
const autoPlay = () =>{
    playSlider = setInterval(nextSlide, 4000);
}

function manualNav(navIndex){
    slides[navIndex].classList.add('active');    
    navBtns[navIndex].classList.add('active');    
}
navBtns.forEach((nav, i)=>{
    nav.addEventListener('click', ()=>{
        slides[currSlide].classList.remove('active');
        navBtns[currSlide].classList.remove('active');
        manualNav(i);
        currSlide = i;
    })
});

function nextSlide(){
    currSlide++;
    slides[currSlide-1].classList.remove('active');
    navBtns[currSlide-1].classList.remove('active');
    
    if(currSlide > numeroSlides-1){
        currSlide = 0;
    }
    slides[currSlide].classList.add('active');
    navBtns[currSlide].classList.add('active');
}
slideContainer.addEventListener('mouseover', ()=>{ clearInterval(playSlider); });
slideContainer.addEventListener('mouseout', ()=>{ autoPlay() });
autoPlay();