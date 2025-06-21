let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');  
}

const warapper = document.querySelector('.warapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
document.getElementById('reg').addEventListener('click' , function(){
    window.open('Register.html','_blank')
});

registerLink.addEventListener('click' , () => {
     warapper.classList.add('active') 
    })
loginLink.addEventListener('click' , () => {
     warapper.classList.remove('active') 
    });

btnPopup.addEventListener('click' , ()=> {
    warapper.classList.add('active-popup')
});

iconClose.addEventListener('click' , ()=> {
    warapper.classList.remove('active-popup')
});