function init() {
    window.addEventListener('load', () => {
        let nbVisits = localStorage.getItem('nbvisits') || 0;
        nbVisits++;
        localStorage.setItem('nbvisits', nbVisits);

        let spanCounter = document.getElementById('#visit-count');
        // spanCounter.innerHTML += nbVisists;
    });

    let form = document.getElementById('name-form');
    let nextStep = document.getElementById('nextStep');
    nextStep.addEventListener('click', (e) => {
        e.preventDefault();
        stepWizard();
    });
    setTimeout(stepWizard, 2000);
    // notifyMe();
    window.addEventListener("beforeunload", function (event) {
        event.preventDefault();
        event.returnValue = "";
    });
}

function stepWizard() {
    let currentStep = document.getElementsByClassName('active');

    // if (currentStep.classList.contains('active')) {
    // currentStep.next().toggleClass('active');
    // currentStep.classList.remove('active');
    // }


}


function checkName() {
    let username = document.getElementById('inputName');

    username.addEventListener('focusout', (e) => {
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

checkName();
init();

/* Modale de publicités pornographiques */
var close = document.querySelector('#close')
close.addEventListener("click", function () {
    openNewModale();
})

function openModal() {
    document.querySelector('.popup-modal').style.display = "block";
}

function openNewModale() {
    document.querySelector('.exit').style.display = "block"
    document.querySelector('.no').addEventListener("click", function () {
        document.querySelector('.exit').style.display = "none";
    });

    document.querySelector('.yes').addEventListener("click", function () {
        document.querySelector('.popup-modal').style.display = "none";
        setTimeout(openModal, 1000);
    });
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
    document.getElementById("image_suit_souris").style.left = (x + 45) + 'px';
    document.getElementById("image_suit_souris").style.top = (y + 45) + 'px';

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
    timeout: 2000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;

    console.info('Votre position actuelle est :');
    console.info(`Latitude : ${crd.latitude}`);
    console.info(`Longitude : ${crd.longitude}`);
    var notification = new Notification(`Ta position actuelle est Latitude : ${crd.latitude}, Longitude : ${crd.longitude}`)
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

/* Ouvre 5 fois la fenêtre dans 5 ongets différents */
let btn = document.querySelector('#cancerBtn');
btn.addEventListener('click', function() {
    cancerClick()
});

function cancerClick() {
    for (let i = 0; i <= 5; i++) {
        btn.click();
    }
}

/* AJOUTER MUSIQUE */
var myAudio = document.querySelector('#audioPlayer');
myAudio.play();
/* CHAMP UPLAOD */
function showPreview(e) {
    let reader = new FileReader();

var play = document.querySelector(".play");
var stop = document.querySelector(".stop");

play.addEventListener("click", function () {
    myAudio.play();
})

stop.addEventListener("click", function () {
    myAudio.pause();
})
    reader.readAsDataURL(e.files[0]);
    reader.onload = function () {
        var output = document.querySelector('#preview-upload');
        output.src = reader.result;
    }
}