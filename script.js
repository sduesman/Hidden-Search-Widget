const seartch = document.querySelector('.search');
const btn =document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    seartch.classList.toggle('active');
    input.focus();
})