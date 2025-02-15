const header = document.querySelector('.header');
const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav");


window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active")
});

document.getElementById('hero-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});