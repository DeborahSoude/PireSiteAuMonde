function init() {
    let form = document.getElementById('name-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        toggleForm();
    });
    setTimeout(toggleForm, 2000);
    notifyMe();
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

// Demande l'autorisation pour envoyer des notifications
function notifyMe() {
    // Vérifions si le navigateur prend en charge les notifications
    if (!("Notification" in window)) {
        alert("Votre navigateur ne supporte pas les notifications");
    }

    // Vérifions si les autorisations de notification ont déjà été accordées
    else if (Notification.permission === "granted") {
        // Si oui, on crée une notif
        var notification = new Notification("Re coucou, toi !");
    }

    // Sinon, nous devons demander la permission à l'utilisateur
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            // Si l'utilisateur accepte, on crée une notification
            if (permission === "granted") {
                var notification = new Notification("T'es content d'avoir des notifications ? ");
            }
        });
    }
    localisyMe();
}

// Demande l'accès à la localisation 
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;

    console.log('Votre position actuelle est :');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude : ${crd.longitude}`);
}

function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
}

function localisyMe() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(success, error, options);
        var notification = new Notification("Ta position est en cours d'enregistrement...")


    } else {
        var notification = new Notification("Tant pis pour toi.");
    }
}