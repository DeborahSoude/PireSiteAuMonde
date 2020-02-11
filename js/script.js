function init() {
    let form = document.getElementById('name-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        toggleForm();
    });
    setTimeout(toggleForm, 500);
}

function toggleForm() {
    let registerPopup = document.getElementById('register-popup');
    registerPopup.classList.toggle('hidden');
}


function check_name() {
    let username = document.getElementById('inputName');
   
    username.addEventListener('focusout', (e) => {
        // console.log(username.value);
        str_name = username.value.length;
        e.preventDefault();
        if (str_name === 38) {
            console.log('Yay');
        } else if(str_name > 38) {
            console.log('Trop grand');
        } else {
            console.log('Trop petit');
        }
    });
}

check_name();
init();