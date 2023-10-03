const form = document.querySelector("form"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword");

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

//Váltás Jelszógen/Megadott jelszó között
function beirtjelszo(){
  document.getElementById("shide1").style.color = "#919191";
  document.getElementById("shide2").style.color = "#919191";
  document.getElementById("password-input").disabled = false;
  document.getElementById("password-repeat").disabled = false;
  passInput.value = "";
  cPassInput.value = passInput.value;
}
function generaltjelszo(){
  document.getElementById("shide1").style.color = "#d3d3d3";
  document.getElementById("shide2").style.color = "#d3d3d3";
  document.getElementById("password-input").disabled = true;
  document.getElementById("password-repeat").disabled = true;
  let numbers = "0123456789";
  let lcase = "abcdefghijklmnopqrstuvwxyz";
  let ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let schars = "@$!%*?&";
  let passwordLength = 2;
  passInput.value = "";
      for (b = 0; b <= passwordLength; b++) {
        let rnd1 = Math.floor(Math.random() * ucase.length);
        passInput.value += ucase.substring(rnd1, rnd1 +1);
        let rnd2 = Math.floor(Math.random() * schars.length);
        passInput.value += schars.substring(rnd2, rnd2 +1);
        let rnd3 = Math.floor(Math.random() * lcase.length);
        passInput.value += lcase.substring(rnd3, rnd3 +1);
        let rnd4 = Math.floor(Math.random() * numbers.length);
        passInput.value += numbers.substring(rnd4, rnd4 +1);
      }
      cPassInput.value = passInput.value;
}
    

//Function hívás submit gombra

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail();
  createPass();
  confirmPass();

  //Gombfelengedésre functionok
  emailInput.addEventListener("keyup", checkEmail);
  passInput.addEventListener("keyup", createPass);
  cPassInput.addEventListener("keyup", confirmPass);

  if (
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
    ) 
  {
    let nev = document.getElementById("namevalue").value;
    let email = emailInput.value;
    let password = passInput.value;
    let genders = document.getElementsByName('gender');
    let selgender;
    let ages = document.getElementsByName('ages');
    let selage;
    let worktype = document.getElementById("workvalue").value;
    let workarea = document.getElementById("workarea").value;
    for(i = 0; i < genders.length; i++) {
      if (genders[i].checked){
        selgender = genders[i].value;
    }
  }
    for(i = 0; i < ages.length; i++) {
      if (ages[i].checked){
        selage = ages[i].value;
      }
    }
    
    console.log(`${nev} ${email} ${password} ${selgender} ${selage} ${worktype} ${workarea}`);
    location.href = form.getAttribute("action");
  }
});