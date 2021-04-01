const menuBtn = document.querySelector('.header-menu');
const menu = document.querySelector('.menu-open');
const menuArea = document.querySelector('.menu-area');

const openMenu = () => {
  menuBtn.addEventListener('click', () => {
     checkMenu();
  })
}

const clickNav = () => {
  menuArea.addEventListener('click', () => {
    menu.style.display = 'none';
  })
}

const checkMenu = () => menu.style.display === 'block' ? menu.style.display = 'none' : menu.style.display = 'block'

window.onload = () => {
  clickNav();
  openMenu();
}