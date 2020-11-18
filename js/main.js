let hider = document.querySelector('#hider');
// let modalContainer = document.querySelector('#modal__container');
let initBtn = document.querySelector('#init-button');

initBtn.addEventListener('click', showModal);

function showModal() {
    hider.setAttribute('class', 'hider--visible')
    // modalContainer.setAttribute('class', 'modal__container--visible')
}

function hideModal() {
    hider.setAttribute('class', 'hider--hidden')
    // modalContainer.setAttribute('class', 'modal__container--hidden')
}