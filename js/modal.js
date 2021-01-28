// ------ DOM ELEMENTS ------ //
// DOM ELEMENTS MODAL 
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementsByClassName('close');
// DOM ELEMENTS FORM FIELDS VALIDATION
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const quantity = document.getElementById('quantity');
const birthdate = document.getElementById('birthdate');
const allLocations = document.getElementById('allLocations');
const locations = document.querySelectorAll("#allLocations .checkbox-input");
const checkbox1 = document.getElementById('checkbox1');
const input = document.getElementsByClassName('text-control');
const form = document.getElementById('form');
// DOM ELEMENTS SUBMITTED CONFIRMATION
const modalSubmit = document.getElementsByClassName('container-confirmation-submit');
const closeModalSubmit = document.getElementsByClassName('close-modal-submit');
const closeBtnConfirmation = document.getElementById('close-btn-confirmation');

// ------ DISPLAY MODAL ------ //
// LAUNCH MODAL EVENTS
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));
// LAUNCH MODAL FORM
function launchModal() {
  modalbg.style.display = 'block';
}
// CLOSE MODAL FORM
function closeModal() {
  modalbg.style.display = 'none';
}
closeBtn[0].addEventListener('click', closeModal);

// ------ DISPLAY NAV RESPONSIVE ------ //
// EDIT NAV
function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// ------ FORM FIELDS VALIDATION ------ //
// NAMES CHECK
function firstName() {
  if (first.value.trim().length < 2 || first.value.trim() === '') {
    first.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    first.parentElement.setAttribute('data-error-visible', 'false');
    first.style.border = 'solid #279e7a 0.19rem';
    return true;
  }
}

function lastName() {
  if (last.value.trim().length < 2 || last.value.trim() === "") {
    last.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    last.parentElement.setAttribute('data-error-visible', 'false');
    last.style.border = 'solid #279e7a 0.19rem';
    return true;
  }
}

// EMAIL CHECK
function checkEmail() {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value.trim().match(re)) {
    email.parentElement.setAttribute('data-error-visible', 'false');
    email.style.border = 'solid #279e7a 0.19rem';
    return true;
  } else {
    email.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  }
}

// BIRTHDATE CHECK
function checkBirthdate() {
  if (birthdate.value.trim().length !== 10) {
    birthdate.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    birthdate.parentElement.setAttribute('data-error-visible', 'false');
    birthdate.style.border = 'solid #279e7a 0.19rem';
    return true;
  }
}

// NUMBER OF TOURNAMENTS CHECK
function checkTournaments() {
  if (quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() < 0) {
    quantity.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    quantity.parentElement.setAttribute('data-error-visible', 'false');
    quantity.style.border = 'solid #279e7a 0.19rem';
    return true;
  }
}

// LOCATIONS CHECK
function checkLocations() {
  allLocations.setAttribute('data-error-visible', 'true');
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      allLocations.setAttribute('data-error-visible', 'false');
      return true;
    }
  }
  return false;
}

// TERMS OF USE CHECK CHECK
function checkCheckBox() {
  if (checkbox1.checked === false) {
    checkbox1.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    checkbox1.parentElement.setAttribute('data-error-visible', 'false');
    return true;
  }
}

// FORM FIELDS EVENTS
function formFieldsValidation(element, method, event) {
  element.addEventListener(event, method);
}
formFieldsValidation(first, firstName, 'focusout');
formFieldsValidation(last, lastName, 'focusout');
formFieldsValidation(email, checkEmail, 'focusout');
formFieldsValidation(birthdate, checkBirthdate, 'focusout');
formFieldsValidation(quantity, checkTournaments, 'focusout');
formFieldsValidation(allLocations, checkLocations, 'change');
formFieldsValidation(checkbox1, checkCheckBox, 'change');

// FOR ALL FIELDS VALIDATION
function forAllFieldsValidation() {
  firstName()
  lastName()
  checkEmail()
  checkBirthdate()
  checkTournaments()
  checkLocations()
  checkCheckBox()
}

function formValidation() {
  if (firstName() === true &&
    lastName() === true &&
    checkEmail() === true &&
    checkBirthdate() === true &&
    checkTournaments() === true &&
    checkLocations() === true &&
    checkCheckBox() === true) {
    return true;
  } else {
    return false;
  }
}

// SEND FORM
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (formValidation() == true) {
    displayModalSubmit();
    document.querySelector('form').reset();
  } else {
    forAllFieldsValidation();
  }
});

// ------ SUBMITTED CONFIRMATION ------ //
// DISPLAY MODAL SUBMIT
function displayModalSubmit() {
  modalbg.style.display = 'none';
  modalSubmit[0].style.display = 'block';
}

// CLOSE SUBMIT
function closeSubmit() {
  modalSubmit[0].style.display = 'none';
  first.style.border = 'none';
  last.style.border = 'none';
  email.style.border = 'none';
  birthdate.style.border = 'none';
  quantity.style.border = 'none';
}

// EVENT CLOSE MODAL SUBMIT
closeModalSubmit[0].addEventListener('click', closeSubmit);
closeBtnConfirmation.addEventListener('click', closeSubmit);