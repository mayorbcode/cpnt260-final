const button = document.querySelector('.main-nav .btn');

const menu = document.querySelector('.main-nav li');

function eventHandler() {
  menu.classList.toggle('visible');
}

button.addEventListener('click', eventHandler);