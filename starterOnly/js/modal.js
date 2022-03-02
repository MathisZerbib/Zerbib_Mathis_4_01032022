
// DOM Elements
let modalBody = document.querySelector(".modal-body");
let modalbg = document.querySelector(".bground");
let modalBtn = document.querySelectorAll(".modal-btn");
let formData = document.querySelectorAll(".formData");
let closeModal = document.querySelector(".close");

let firstName = document.querySelector('#first')
let lastName = document.querySelector('#last')
let email = document.querySelector('#email')
let birthdate = document.querySelector('#birthdate')
let gameNum = document.querySelector("input[type=number]");
let locationCheckboxes = document.querySelectorAll("input[name='location']");
let conditionsCheckboxes = document.querySelector("input[name='conditions']");
let submitBtn = document.querySelector('.btn-submit')


// Event listener
document.querySelector('form').addEventListener('change', isFormValid);
document.querySelector('form').addEventListener('submit', submitForm);
firstName.addEventListener('input', isFirstNameValid);
lastName.addEventListener('input', isLastNameValid);
email.addEventListener('input', isEmailValid);
birthdate.addEventListener('input', isBirthdateValid);
// Functions 

// Menu burger navigation
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// Launch modal event
function modalFormLaunch() {
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
}

// Launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function modalFormClose() {
  closeModal.onclick = function () {
    modalbg.style.display = "none";
  };
}


// Show data error
function showError(el) {
  el.setAttribute('data-error-visible', true);
}

// Hide data error
function hideError(el) {
  el.setAttribute('data-error-visible', false)
}

// Form validation 
function isFormValid() {

  if (isFirstNameValid()) {
    enableSubmitBtn();
    return true;
  }
  disableSubmitBtn();
  return false;

}


// Firstname validation 
function isFirstNameValid() {
  let parent = firstName.closest('div');
  showError(parent);
  if (firstName.value.length <= 2) {
    return false;
  }

  if (firstName.value.length >= 15) {
    return false;
  }

  // Match any number in a string
  if (!/^([^0-9]*)$/.test(firstName.value)) {
    return false;
  }

  hideError(parent);
  return true;
}


// Lastname validation
function isLastNameValid () {
  let parent = lastName.closest('div');
  showError(parent);

  if (lastName.value.length <= 2) {
    return false
  }

  // Match any number in a string
  if (!/^([^0-9]*)$/.test(lastName.value)) {
    return false;
  }

  hideError(parent);
  return true;
}

// Email validation 
function isEmailValid () {
  let parent = email.closest('div');
  showError(parent);
  // Regex to match email only
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
    return false;
  }
  hideError(parent);
  return true;

}

// Birthday validation
function isBirthdateValid () {
  let parent = birthdate.closest('div');
  let selectedDate = new Date(birthdate.value);
  let now = new Date();
  showError(parent);
  if (/^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$/.test(birthdate.value)) {
      console.log("Regex,", birthdate.value)
    return false;
  }
  
  if (selectedDate > now) {
    return false;
  }

  hideError(parent);
  return true;
}



// Disable submit form button
function disableSubmitBtn() {
  submitBtn.disabled = true;
  submitBtn.style.cursor = 'not-allowed';
  submitBtn.style.opacity = '0.5';
}

// Enable submit form button
function enableSubmitBtn() {
  submitBtn.disabled = false;
  submitBtn.style.cursor = 'pointer';
  submitBtn.style.opacity = '1';
}

// Thank You Message modal
function thankyouMessage() {
  let txt = document.createElement("P");
  txt.innerText = 'Merci ! Votre réservation à bien été reçue.';  
  document.querySelector('.modal-body').appendChild(txt);
}

function closeBtn() {
  let btn = document.createElement("BUTTON");     
  btn.innerHTML = "Fermer";                   
  document.querySelector('.modal-body').appendChild(btn);
  btn.className = "btn-submit";
  btn.style.marginTop = "50px"
  btn.onclick = function() {
    modalbg.style.display = "none";
    };
}



function submitForm(e) {
  e.preventDefault();
  document.querySelector('.modal-body').innerHTML = " ";
  modalBody.style.display = "flex";
  modalBody.style.flexDirection = "column";
  modalBody.style.justifyContent = "center";
  thankyouMessage();
  closeBtn();
}


disableSubmitBtn();
modalFormLaunch();
modalFormClose();





