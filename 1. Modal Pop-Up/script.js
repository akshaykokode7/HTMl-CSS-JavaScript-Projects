const openBtn = document.querySelector('button');
const closeBtn = document.querySelector('#close');
const modal = document.querySelector('.modal');
const form = document.querySelector('form');

openBtn.addEventListener('click', openModal);

function openModal() {
    modal.style.display = 'grid';
}

closeBtn.addEventListener('click', closeModal);

function closeModal() {
    modal.classList.add('close-modal-animation');
    setTimeout(() => {
        modal.style.display = 'none';
        window.location.reload();
    }, 500)
}

modal.addEventListener('clock', function(e) {
    if(e.target.classList.contains('modal')) {
        closeModal;
    }
})

// Thank you message after Subscription

form.addEventListener('submit', submitForm);

function submitForm() {
    const card = document.querySelector('.card');
    card.innerHTML = "<h2>Thanks for your Subscription!</h2>";
    setTimeout(() => {
        closeModal();
    }, 3000);
}