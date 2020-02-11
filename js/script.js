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
        } else if (str_name > 38) {
            console.log('Trop grand');
        } else {
            console.log('Trop petit');
        }
    });
}

check_name();
init();

/* Modale de publicités pornographiques */
var close = document.querySelector('#close')
close.addEventListener("click", function () {
    openNewModale();
})

function openNewModale() {
    document.querySelector('.exit').style.display = "block"
    document.querySelector('.no').addEventListener("click", function () {
        document.querySelector('.exit').style.display = "none";
    })

    document.querySelector('.yes').addEventListener("click", function () {
        document.querySelector('.popup-modal').style.display = "none";
    })
}

/*Personaliser le curseur*/
document.onmousemove = suitsouris;

function suitsouris(evenement) {
    if (navigator.appName == "Microsoft Internet Explorer") {
        var x = event.x + document.body.scrollLeft;
        var y = event.y + document.body.scrollTop;
    } else {
        var x = evenement.pageX;
        var y = evenement.pageY;
    }
    document.getElementById("image_suit_souris").style.left = (x + 1) + 'px';
    document.getElementById("image_suit_souris").style.top = (y + 1) + 'px';
}