let container = document.querySelector('.container');
let toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
    container.classList.toggle('active');
})