function init() {
    window.addEventListener('load', () => {
        let nbVisits = localStorage.getItem('nbvisits') || 0;
        nbVisits++;
        localStorage.setItem('nbvisits', nbVisits);

        let spanCounter = document.getElementById('visit-count');
        spanCounter.innerText = nbVisits;
    });

    let form = document.getElementById('name-form');
    let nextStep = document.getElementById('nextStep');
    nextStep.addEventListener('click', (e) => {
        e.preventDefault();
        stepWizard();
    });

    notifyMe();
    window.addEventListener("beforeunload", function (event) {
        event.preventDefault();
        event.returnValue = "";
    });
}

/* FORM WIZARD */
var currentTab = 0; // Par défaut la currentTap c'est la première étape
showTab(currentTab);

function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextStep").innerHTML = "Envoyer";
    } else {
        document.getElementById("nextStep").innerHTML = "Suivant";
    }
    // ... and run a function that displays the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
        //...the form gets submitted:
        document.getElementById("regForm");
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {
    if (document.getElementById("nextStep").innerText == "Envoyer") {
        document.querySelector(".form-popup").style.display = "block";
    }
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false:
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
}

document.querySelector('.ahOk').addEventListener("click", function () {
    document.querySelector("#regForm").style.display = "none";
})

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
    document.querySelector('.exit').style.display = "block";
    document.querySelector('.no').addEventListener("click", function () {
        document.querySelector('.exit').style.display = "none";
    });

    document.querySelector('.yes').addEventListener("click", function () {
        document.querySelector('.popup-modal').style.display = "none";
        setTimeout(openModal, 1000);
    });
}

document.querySelector('#close-win').addEventListener("click", function () {
    document.querySelector('.popup-modal-win').style.display = "none";
    setTimeout(openModal, 1500);
});


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
    document.getElementById("image_suit_souris").style.left = (x + 25) + 'px';
    document.getElementById("image_suit_souris").style.top = (y + 25) + 'px';

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
function cancerClick() {
    // let btn = document.getElementById('cancerBtn');
    for (let i = 0; i <= 5; i++) {
        window.open('http://localhost:8080/PireSiteAuMonde/', '_blank');
    }
}

/* AJOUTER MUSIQUE */
var myAudio = document.querySelector('#audioPlayer');
myAudio.play();


var play = document.querySelector(".play");
var stop = document.querySelector(".stop");

play.addEventListener("click", function () {
    myAudio.play();
})

stop.addEventListener("click", function () {
    myAudio.pause();
})

/* CHAMP UPLAOD */
function showPreview(e) {
    let reader = new FileReader();

    reader.readAsDataURL(e.files[0]);
    reader.onload = function () {
        var output = document.querySelector('#preview-upload');
        output.src = reader.result;
    }
}

/* POP UP NAVIGATION */
document.querySelector('.btn-nav').addEventListener('click', function () {
    document.querySelector('.nav-popup-yet').style.display = "block";
})
document.querySelector('.btn-nav2').addEventListener('click', function () {
    document.querySelector('.nav-popup').style.display = "block";
})
document.querySelector('.btn-nav3').addEventListener('click', function () {
    document.querySelector('.nav-popup').style.display = "block";
})
document.querySelector('.btn-nav4').addEventListener('click', function () {
    document.querySelector('.nav-popup').style.display = "block";
})

document.querySelector('.ok').addEventListener('click', function () {
    document.querySelector('.nav-popup').style.display = "none";
})
document.querySelector('.thanks').addEventListener('click', function () {
    document.querySelector('.nav-popup-yet').style.display = "none";
})

/* Texte qui défile */
var position = 0;
var msg = "LE PIRE C'EST ICI !! ";
var msg = "     " + msg;
var longue = msg.length;
var fois = (150 / msg.length) + 1;
for (i = 0; i <= fois; i++) msg += msg;

function textdefil() {
    document.form1.deftext.value = msg.substring(position, position + 150);
    position++;
    if (position == longue) position = 0;
    setTimeout("textdefil()", 60);
}
window.onload = textdefil;


// BOUTON QUI BOUGE AU SURVOL
let movingBtn = document.getElementById('movingBtn');
let vh = window.innerHeight;
let vw = window.innerWidth;

movingBtn.addEventListener('mouseenter', (e) => {
    let newTop = getRandomInt(vh);
    e.target.style.top = parseInt(newTop) + 'px';
    let newWidth = getRandomInt(vw);
    e.target.style.left = parseInt(newWidth) + 'px';
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}