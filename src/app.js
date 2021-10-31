import Alpine from 'alpinejs' // Alpine.js
import './sass/app.scss';

// Alpine 
window.Alpine = Alpine;
Alpine.start();
// end



// let allImages = document.querySelectorAll("img");
// allImages.forEach((value)=>{
//     value.oncontextmenu = (e)=>{
//         e.preventDefault();
//     }
// });
// document.onkeydown = function(e) {
//     if(event.keyCode == 123) {
//        return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//        return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//        return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//        return false;
//     }
//     if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//        return false;
//     }
// }
// document.addEventListener('contextmenu', e => e.preventDefault());





// Scroll Down Show on Scroll Up
let lastScrollTop = 0;
let navbar = document.querySelector('.nav-con');

window.addEventListener('scroll' , () => {
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-54px";
    }else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});
// end

