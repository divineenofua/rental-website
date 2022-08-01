// CHANGE NAVBAR STYLE

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


const showNav = document.querySelector('#open-menu-btn');
const closeNav = document.querySelector('#close-menu-btn');
const menu = document.querySelector('.nav_menu');
showNav.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeNav.style.display = 'inline-block';
    showNav.style.display = 'none';
})
closeNav.addEventListener('click', () => {
    menu.style.display = 'none';
    showNav.style.display = 'inline-block';
    closeNav.style.display = 'none'

})
