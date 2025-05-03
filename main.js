//Select element fucniton

const selectElement=function (element){
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body= selectElement('body');


menuToggler.addEventListener('click',function(){
    body.classList.toggle('open')
    console.log('Toggled! Current body classes:', body.className);
}) 

/*User clicks menu button →
JS finds menu-toggle (via selectElement) →
eventListener triggers →
body.classList.toggle('open') →
CSS sees open → shows/hides menu and background
*/



//FOR SCROLL BASE ANIMATION
window.sr=ScrollReveal();

sr.reveal('.animate-left',{
    origin:'left',
    duration: 1000,
    distance:'25rem',
    delay:300

})
sr.reveal('.animate-right',{
    origin:'right',
    duration: 1000,
    distance:'25rem',
    delay:600

})
sr.reveal('.animate-up',{
    origin:'top',
    duration: 1000,
    distance:'25rem',
    delay:600

})
sr.reveal('.animate-bottom',{
    origin:'bottom',
    duration: 1000,
    distance:'25rem',
    delay:600

})