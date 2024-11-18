const menuButton = document.querySelector('#menu__button');
const closeButton = document.querySelector('.close__button');
const modalWindow = document.querySelector('.modal')

let openModal = () => modalWindow.classList.toggle('modal__open');

menuButton.addEventListener('click', openModal);
closeButton.addEventListener('click', openModal);