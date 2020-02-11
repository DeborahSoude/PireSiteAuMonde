function init() {
    let form = document.getElementById('name-form');
    let nextStep = document.getElementById('nextStep');
    nextStep.addEventListener('click', (e) => {
        e.preventDefault();
        stepWizard();
    });
}

function stepWizard() {
    let currentStep = document.getElementsByClassName('active');

    if (currentStep.classList.contains('active')) {
        // currentStep.next().toggleClass('active');
        currentStep.classList.remove('active');
    }
    
    
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