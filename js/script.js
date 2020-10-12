// Define Variables
const button = document.querySelector('.btn');

const menu = document.querySelector('.main-nav ul');

const home = document.querySelector('.main-nav ul li:nth-child(1)');

const exitButton = document.querySelector('.exit');

// Declare function
function eventHandler() {
  // Make these visible on click
  menu.classList.toggle('visible');
  home.classList.toggle('visible');
  exitButton.classList.toggle('visible');
  // Hide on click
  button.classList.toggle('hide');
}

// Invoke functions
button.addEventListener('click', eventHandler);
exitButton.addEventListener('click', eventHandler);