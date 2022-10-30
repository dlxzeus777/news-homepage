const firstSection = document.querySelector('.flex');
const boxContainer =  document.querySelector('.box-container');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerMenu = document.querySelector('.hamburger');



hamburgerMenu.addEventListener('click', () => 
{
    firstSection.classList.toggle('d-none');
    boxContainer.classList.toggle('d-none');
    mobileMenu.classList.toggle('d-none');
});