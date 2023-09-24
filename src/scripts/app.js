"use strict";
import gsap from "../../node_modules/gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

let width = screen.width;

if (width < 1024){
    let menuBurger = document.querySelector('.menu__burger');
    menuBurger.addEventListener('click',toggleNavigation);
    let menuSpan = document.querySelector('.menu__burger span');
    let navLinks = document.querySelectorAll('.menu__el a');
    navLinks.forEach(link => link.addEventListener('click', toggleNavigation));

    function toggleNavigation(){
        if(document.body.hasAttribute("data-menu")){
            document.body.removeAttribute("data-menu");
            menuSpan.innerHTML = "Menu";
            document.body.classList.remove("disable-scrolling");
        }else{
            document.body.setAttribute("data-menu", true);
            menuSpan.innerHTML = "Close";
            document.body.classList.add("disable-scrolling")
        }
    }
}

const scrollIndication = document.querySelector('.scroll-indication');
if (scrollIndication){
    scrollIndicationAnim();
}

function scrollIndicationAnim(){
  gsap.to(".scroll-indication", {
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".projects",
        start: "top 70%",
        toggleActions: "play none reverse reset",
        //markers: true
    },
  });
}

const details = gsap.utils.toArray(".left-side__el:not(:first-child)");
console.log(details);
const photos = gsap.utils.toArray(".work-r:not(:first-child)");
console.log(photos);
gsap.set(photos, { yPercent: 101 });
const allPhotos = gsap.utils.toArray(".work-r");
console.log(allPhotos);

if (width >= 1024){

    ScrollTrigger.create({
        trigger:".projects",
        start: "top top",
        end:"bottom bottom",
        pin:".right-side",
        //markers: true
    })

    details.forEach((detail, index) => {
        let headline = detail.querySelector("h2");
        console.log(headline);

        let animation = gsap
          .timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 0 });

        ScrollTrigger.create({
          trigger: headline,
          start: "top 70%",
          end: "top 50%",
          animation: animation,
          scrub: true,
          //markers: true
        });
      });
}

