let menuBurger = document.querySelector('.menu__burger');
menuBurger.addEventListener('click',toggleNavigation);
let menuSpan = document.querySelector('.menu__burger span');
let navLinks = document.querySelectorAll('.menu__el a');
navLinks.forEach(link => link.addEventListener('click', toggleNavigation));

function toggleNavigation(){
    if(document.body.hasAttribute("data-menu")){
        document.body.removeAttribute("data-menu");
        menuSpan.innerHTML = "Menu";
    }else{
        document.body.setAttribute("data-menu", true);
        menuSpan.innerHTML = "Close";
    }
}
