// import * as flsFunctions from "./modules/functions.js";

// flsFunctions.isWebp();

// import Swiper, {
//     Navigation,
//     Pagination
// } from 'swiper';

// const swiper = new Swiper();


// burger menu

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__menu');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

const menuItems = document.querySelectorAll('.menu__link');

if (menuItems.length > 0) {
    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', function (e) {
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }
        })
    })
}
