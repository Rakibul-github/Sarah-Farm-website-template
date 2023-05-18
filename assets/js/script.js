// navbar toggle button code //
const toggle = document.querySelector('.toggle-btn');
const navbar = document.querySelector('.navbar');
toggle.addEventListener('click', () => {
navbar.classList.toggle('active');
})