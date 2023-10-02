const form = document.querySelector("form"),
  nameField = form.querySelector(".name-field"),
  nameInput = nameField.querySelector(".name"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword"),
  genderRadioState = form.querySelector(".gradio"),
  ageRadioState = form.querySelector(".aradio");

// Name Validtion
function checkName() {
  if (nameInput.value === "") {
    return nameField.classList.add("invalid");
  }
  emailField.classList.remove("invalid"); 
}
// Email Validtion
function checkEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    return emailField.classList.add("invalid");
  }
  emailField.classList.remove("invalid");
}

// Jelszó eltüntetés/megjelenítés
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.parentElement.querySelector("input");
    if (pInput.type === "password") {
      eyeIcon.classList.replace("bx-hide", "bx-show");
      return (pInput.type = "text");
    }
    eyeIcon.classList.replace("bx-show", "bx-hide");
    pInput.type = "password";
  });
});

// Jelszóellenőrző
function createPass() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passInput.value.match(passPattern)) {
    return passField.classList.add("invalid");
  }
  passField.classList.remove("invalid");
}

// Jelszó megerősítő
function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    return cPassField.classList.add("invalid");
  }
  cPassField.classList.remove("invalid");
}

//Gender and Age requirement
function requiredGender(){
  if(genderRadioState.value != "true")
  {
    return genderRadioState.classList.add("invalid");
  }
  genderRadioState.classList.remove("invalid");
}
function requiredAge(){
  if(ageRadioState.value != "true")
  {
    return ageRadioState.classList.add("invalid");
  }
  ageRadioState.classList.remove("invalid");
}

// Calling Funtion on Form Sumbit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkName();
  checkEmail();
  createPass();
  confirmPass();
  requiredAge();
  requiredGender();

  //calling function on key up
  nameInput.addEventListener("keyup", checkName);
  emailInput.addEventListener("keyup", checkEmail);
  passInput.addEventListener("keyup", createPass);
  cPassInput.addEventListener("keyup", confirmPass);
  ageRadioState.addEventListener("onclick",requiredAge);
  genderRadioState.addEventListener("onclick",requiredGender);

  if (
    !nameField.classList.contains("invalid") &&
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid") &&
    !ageRadioState.classList.contains("invalid") &&
    !genderRadioState.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action");
  }
});