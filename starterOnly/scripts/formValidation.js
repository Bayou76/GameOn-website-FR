// DOM validation

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locationCheckbox = document.getElementsByName("location");
const checkboxCondition = document.getElementById("checkbox1");

//Error
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const birthdateError = document.getElementById("birthdateError");
const quantityError = document.getElementById("quantityError");
const locationError = document.getElementById("locationError");
const checkboxConditionError = document.getElementById("checkboxConditionError");

//Condition regex prénom :
function firstNameValidated() {
  if (/^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$/.test(firstName.value)) {
    firstName.style.border = "solid 2px green";
    firstName.style.backgroundColor = "white";
    firstName.style.color = "black";
    firstNameError.textContent = "Champ Valide";
    firstNameError.style.color = "green";
    firstNameError.style.fontSize = "15px";
    return true;
  } else {
    firstName.style.border = "solid 2px red";
    firstName.style.backgroundColor = "darkred";
    firstName.style.color = "white";
    firstNameError.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    firstNameError.style.color = "red";
    firstNameError.style.fontSize = "12px";
    return false;
  }
}
firstName.addEventListener("change", () => {
  firstNameValidated();
});

//Condition regex nom :
function lastNameValidated() {
  if (/^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$/.test(lastName.value)) {
    lastName.style.border = "solid 2px green";
    lastName.style.backgroundColor = "white";
    lastName.style.color = "black";
    lastNameError.textContent = "Champ Valide";
    lastNameError.style.color = "green";
    lastNameError.style.fontSize = "15px";
    return true;
  } else {
    lastName.style.border = "solid 2px red";
    lastName.style.backgroundColor = "darkred";
    lastName.style.color = "white";
    lastNameError.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    lastNameError.style.color = "red";
    lastNameError.style.fontSize = "13px";
    return false;
  }
}
lastName.addEventListener("change", () => {
  lastNameValidated();
});

//Condition regex email :
function emailValidated() {
  if (
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email.value
    )
  ) {
    email.style.border = "solid 2px green";
    email.style.backgroundColor = "white";
    email.style.color = "black";
    emailError.textContent = "Champ Valide";
    emailError.style.fontSize = "15px";
    emailError.style.color = "green";
    return true;
  } else {
    email.style.border = "solid 2px red";
    email.style.backgroundColor = "darkred";
    email.style.color = "white";
    emailError.textContent = "Veuillez rentrer une adresse email valide";
    emailError.style.fontSize = "15px";
    emailError.style.color = "red";
    return false;
  }
}
email.addEventListener("change", () => {
  emailValidated();
});

//Condition regex date de naissance :

function birthdateValidated() {
  if (
    /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/.test(birthdate.value)
  ) {
    birthdate.style.border = "solid 2px green";
    birthdate.style.backgroundColor = "white";
    birthdate.style.color = "black";
    birthdateError.textContent = "Champ Valide";
    birthdateError.style.fontSize = "15px";
    birthdateError.style.color = "green";
    return true;
  } else {
    birthdate.style.border = "solid 2px red";
    birthdate.style.backgroundColor = "darkred";
    birthdate.style.color = "white";
    birthdateError.textContent = "Vous devez entrer votre date de naissance.";
    birthdateError.style.fontSize = "15px";
    birthdateError.style.color = "red";
    return false;
  }
}
birthdate.addEventListener("change", () => {
  birthdateValidated();
});

// Condition pour la quatité

function quantityValidated() {
  if (quantity.value >= 0 && /^[0-9]/.test(quantity.value)) {
    quantity.style.border = "solid 2px green";
    quantity.style.backgroundColor = "white";
    quantity.style.color = "black";
    quantityError.textContent = "Champ Valide";
    return true;
  } else {
    quantity.style.border = "solid 2px red";
    quantity.style.backgroundColor = "darkred";
    quantity.style.color = "white";
    quantityError.style.fontSize = "15px";
    quantityError.textContent = "Vous devez entrer un nombre : 0 ou plus.";
  }
}
quantity.addEventListener("change", () => {
  quantityValidated();
});

// Condition pour la localisation (checkbox)

function locationValidated() {
  for (let i = 0; i < locationCheckbox.length; i++) {
    if (locationCheckbox[i].checked) {
      locationError.textContent = " Champ valide";
      locationError.style.fontSize = "15px";
      locationError.style.color = "green";
      return true;
    }
  }

  locationError.textContent = " Veuillez indiquer la ville du tournois";
  locationError.style.fontSize = "15px";
  locationError.style.color = "red";
  return false
}

locationCheckbox.forEach((locationInput) => locationInput.addEventListener("change", () =>{
  locationValidated();
}));

// Condition pour les condition d'utilisateur 

function checkboxValidated() {

  if(checkboxCondition.checked){
    checkboxConditionError.textContent = "champ valide";
    checkboxConditionError.style.fontSize = "15px";
    checkboxConditionError.style.color ="green";
    return true;
  }
  else {
    checkboxConditionError.textContent =" Merci d'accepter les conditions d'utilisations " ;
    checkboxConditionError.style.color ="red";
    return false;
  }
}

checkboxCondition.addEventListener("change", () => {
  checkboxValidated();
})