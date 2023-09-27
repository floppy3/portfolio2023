"use strict";
import gsap from "../../node_modules/gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

let width = screen.width;


/* Burger menu */
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

/* scroll indication */
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

/* anim split screen pin and scroll */
const details = gsap.utils.toArray(".left-side__el:not(:first-child)");

const photos = gsap.utils.toArray(".work-r:not(:first-child)");

gsap.set(photos, { yPercent: 101 });
const allPhotos = gsap.utils.toArray(".work-r");

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

/* change color circle yellow */
const listColors = ["rgba(195.50, 195.50, 195.50, 0.40)", "rgba(0, 250, 235, 0.4)", "rgba(114, 97, 227, 0.4)", "rgba(213, 213, 202, 1)", "rgba(208, 184, 180, 1)"];
const changeColorYellow = document.querySelector('.circle-yellow');
const listDiv = [".left-side__el:first-child",".left-side__el--2", ".left-side__el--3", ".left-side__el--4", ".left-side__el--5"];
if (changeColorYellow){
  changeColorYellowAnim();
}

function changeColorYellowAnim(){
  for (let i = 0; i < listDiv.length; i++) {
    ScrollTrigger.create({
        trigger: listDiv[i],
        start: "top 55%",
        end: "top 30%",
        animation:gsap.to(".circle-yellow, .circle-violet", {background:listColors[i], immediateRender:false}),
        toggleActions: "play none reverse reset",
        //markers: true
    });
    console.log(listDiv[i]);
  }
  if (width >= 1024){
    gsap.to(".circle-violet", {
      bottom: "5%",
      left: "85%",
      immediateRender: false,
      scrollTrigger: {
          trigger: ".left-side__el:first-child",
          start: "top 95%",
          end: "top 20%",
          toggleActions: "play none reverse reset",
          scrub: 0.5,
          //markers: true
      },
    });
  }

}

