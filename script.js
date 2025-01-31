const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav");

hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active")
});

document.getElementById('hero-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});