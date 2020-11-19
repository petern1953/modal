let modalContainer = document.querySelector('#modal__container');
// let hider = document.querySelector('#hider');
let initBtn = document.querySelector('#init-button');

initBtn.addEventListener('click', showModal);

const hiders = document.querySelectorAll('hider');
hiders.forEach(hider => hider.addEventListener('click', hideModal));

function showModal() {
    modalContainer.setAttribute('class', 'modal__container--visible')
    hider.setAttribute('class', 'hider--visible')
}

function hideModal() {
    modalContainer.setAttribute('class', 'modal__container--hidden')
    hider.setAttribute('class', 'hider--hidden')
}