
/* This file contains code based on a project by Bedimcode 
License: See LICENSE.txt at /assets/License/LICENSE.txt*/


/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER CAR ===============*/
const swiper = new Swiper('.home__swiper', {
    speed:1200,
    effect: 'fade',
  
    pagination: {
      el: '.swiper-pagination',
        clickable: true,

        renderBullet: (index, className) => {
            const icons = [
                '<i class="ri-car-washing-line"></i>', 
                '<i class="ri-steering-2-fill"></i>', 
                '<i class="ri-drinks-line"></i>'
            ];
            return '<span class="' + className + '">' + icons[index] + "</span>";
        },
    },
  });


/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__panel-1', {y: -1000, duration: 2})
gsap.from('.home__panel-2', {y: 1000, duration: 2})
gsap.from('.home__image', {x: 1000, duration: 2})
gsap.from('.home__titles', {y: 100, opacity: 0, delay: 2})
/*gsap.from('.home__description', {y: 100,opacity: 0, delay: 2})*/

/*=============== ADD BLUR HEADER ===============*/

const blurHeader = () => {
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('blur-header'); else header.classList.remove('blur-header')
}




