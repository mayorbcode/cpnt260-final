const button = document.querySelector('.btn');

const menu = document.querySelector('.main-nav ul');

const home = document.querySelector('.main-nav ul li:nth-child(1)');

const exitButton = document.querySelector('.exit');

function eventHandler() {
  menu.classList.toggle('visible');
  home.classList.toggle('visible');
  exitButton.classList.toggle('visible');
  button.classList.toggle('hide');
}

button.addEventListener('click', eventHandler);
exitButton.addEventListener('click', eventHandler);