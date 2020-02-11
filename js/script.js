function init() {
    let form = document.getElementById('name-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        toggleForm();
    });
}

function toggleForm() {
    let registerPopup = document.getElementById('register-popup');
    registerPopup.classList.toggle('hidden');
}