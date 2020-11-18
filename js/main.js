let modalContainer = document.querySelector('#modal__container');
let initBtn = document.querySelector('#init-button');

(function initShowModalBtn() {
    initBtn.addEventListener('click', showModal);
})()

function showModal() {
    modalContainer.setAttribute('class', 'modal__container--visible')
}

function hideModal() {
    modalContainer.setAttribute('class', 'modal__container--hidden')
}