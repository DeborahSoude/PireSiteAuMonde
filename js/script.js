function init() {
    let form = document.getElementById('name-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

    });
}

function hideForm() {
    let registerPopup = document.getElementById('register-popup');
    registerPopup.classList.toggle('hidden');
}