// DOM ELEMENTS
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

// NAMES CHECK
function firstName() {
    if (first.value.trim().length < 2 || first.value.trim() === "") {
        first.parentElement.setAttribute('data-error-visible', 'true')
        return false;
    } else {
        first.parentElement.setAttribute('data-error-visible', 'false')
        return true;
    }
}

function lastName() {
    if (last.value.trim().length < 2 || last.value.trim() === "") {
        last.parentElement.setAttribute('data-error-visible', 'true')
        return false;
    } else {
        last.parentElement.setAttribute('data-error-visible', 'false')
        return true;
    }
}

// EMAIL CHECK
function checkEmail() {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value.trim().match(re)) {
        email.parentElement.setAttribute('data-error-visible', 'false')
        return true;
    } else {
        email.parentElement.setAttribute('data-error-visible', 'true')
        return false;
    }
}

// BIRTHDATE CHECK
function checkBirthdate() {
    if (birthdate.value.trim().length !== 10) {
        birthdate.parentElement.setAttribute('data-error-visible', 'true')
        return false;
    } else {
        birthdate.parentElement.setAttribute('data-error-visible', 'false')
        return true;
    }
}

// NUMBER OF TOURNAMENTS CHECK
function checkTournaments() {
    if (quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() < 0) {
        quantity.parentElement.setAttribute('data-error-visible', 'true')
        return false;
    } else {
        quantity.parentElement.setAttribute('data-error-visible', 'false')
        return true;
    }
}

// LOCATIONS CHECK
function checkLocations() {
    allLocations.setAttribute("data-error-visible", "true")
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].checked) {
            allLocations.setAttribute("data-error-visible", "false")
            return true
        }
    }
    return false
}


// TERMS OF USE CHECK CHECK
function checkCheckBox() {
    if (checkbox1.checked === false) {
        checkbox1.parentElement.setAttribute('data-error-visible', 'true')
        return false;
    } else {
        checkbox1.parentElement.setAttribute('data-error-visible', 'false')
        return true;
    }
}

// FORM FIELDS EVENTS
function formFieldsValidation(element, method, event) {
    element.addEventListener(event, method)
}
formFieldsValidation(first, firstName, "focusout");
formFieldsValidation(last, lastName, "focusout");
formFieldsValidation(email, checkEmail, "focusout");
formFieldsValidation(birthdate, checkBirthdate, "focusout");
formFieldsValidation(quantity, checkTournaments, "focusout");
formFieldsValidation(allLocations, checkLocations, "change");
formFieldsValidation(checkbox1, checkCheckBox, "change");

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
