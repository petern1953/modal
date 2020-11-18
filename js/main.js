let hider = document.querySelector('#hider');
let initBtn = document.querySelector('#init-button');

initBtn.addEventListener('click', showModal);

function showModal() {
    modalContainer.setAttribute('class', 'hider--visible')
}

function hideModal() {
    modalContainer.setAttribute('class', 'hider--hidden')
}