// DOM pour le message de confirmation

const btnSend = document.querySelector(".btn-submit");
const modalConfirmation = document.querySelector(".modalConfirmation");
const form = document.querySelector("form");
const messageError  = document.getElementById("messageError");

// afficher le message de confirmation

btnSend.addEventListener('click', e => {
    e.preventDefault();

    if(firstNameValidated() && lastNameValidated() &&  emailValidated() && birthdateValidated() && quantityValidated && locationValidated() && checkboxValidated ){
        modalConfirmation.style.display = "block"
        form.style.display = "none";
    } else {
        messageError.textContent = " Merci de bien remplir  inscription";
        messageError.style.fontSize = "15px";
    }
})

