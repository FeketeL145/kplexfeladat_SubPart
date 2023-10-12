const form = document.querySelector("form"),
  nameField = form.querySelector(".name-field"),
  nameInput = nameField.querySelector(".name"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  cPassField = form.querySelector(".confirm-password"),
  workField = form.querySelector(".work-field"),
  workInput = workField.querySelector(".work"),
  workareaField = form.querySelector(".work-area-field"),
  workareaInput = workareaField.querySelector(".work-area"),
  genderField = form.querySelector(".gender-field"),
  genderInput = genderField.querySelectorAll(".gender"),
  ageField = form.querySelector(".age-field"),
  ageInput = ageField.querySelectorAll(".age");

//Név checker
function checkName(){
  const namePattern = /^[A-ZÁÉÍÓÖŐÚÜŰ][a-zA-ZÁÉÍÓÖŐÚÜŰáéíóöőúüű]+\s[A-ZÁÉÍÓÖŐÚÜŰ][a-zA-ZÁÉÍÓÖŐÚÜŰáéíóöőúüű]+$/;
  if(!namePattern.test(nameInput.value)){
    return nameField.classList.add("invalid");
  }
  nameField.classList.remove("invalid");
}

// Email checker
function checkEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    return emailField.classList.add("invalid");
  }
  emailField.classList.remove("invalid");
}

// Jelszó eltüntetés/megjelenítés
let showhidebutton = document.getElementById("shide1");
let passwordfield = document.getElementById("password-input");
showhidebutton.addEventListener("click", showhide);
function showhide(){
  
  if(passwordfield.type === "password")
  {
    showhidebutton.classList.replace("bx-hide", "bx-show");
    return (passwordfield.type = "text");
  }
  else{
    showhidebutton.classList.replace("bx-show", "bx-hide");
    return (passwordfield.type = "password");
  }
}

//Gender kiválasztás checker
function checkGender(){
  let genderchecklist = document.getElementsByName("gender");
  let gendertruefalse = 0;
  for(i = 0; i < genderchecklist.length; i++)
  {
    if(!genderchecklist[i].checked)
    {
      gendertruefalse = 1;
    }
    else
    {
      gendertruefalse = 0;
      break;
    }
  }
  if(gendertruefalse != 0)
  {
    return (genderField.classList.add("invalid"));
  }
  genderField.classList.remove("invalid");
}
//Age kiválasztás checker
function checkAge(){
  let agechecklist = document.getElementsByName("age");
  let agetruefalse = 0;
  for(i = 0; i < agechecklist.length; i++)
  {
    if(!agechecklist[i].checked)
    {
      agetruefalse = 1;
    }
    else
    {
      agetruefalse = 0;
      break;
    }
  }
  if(agetruefalse != 0)
  {
    return (ageField.classList.add("invalid"));
  }
  ageField.classList.remove("invalid");
}

// Jelszóellenőrző
function createPass() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passInput.value.match(passPattern)) {
    return passField.classList.add("invalid");
  }
  passField.classList.remove("invalid");
}

//Váltás Jelszógen/Megadott jelszó között
function beirtjelszo(){
  document.getElementById("shide1").style.color = "#919191";
  document.getElementById("password-input").disabled = false;
  passInput.value = "";
}
function generaltjelszo(){
  document.getElementById("shide1").style.color = "#d3d3d3";
  document.getElementById("password-input").disabled = true;
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
      passField.classList.remove("invalid");
}

//Szakma ellenörző
function checkWork(){
  if(workInput.value.length === 0)
  {
    return workField.classList.add("invalid")
  }
  workField.classList.remove("invalid");
}
//Munkaterület ellenörző
function checkWorkArea(){
  if(document.getElementById("work-area").value === "")
  {
    return (workareaField.classList.add("invalid"));
  }
  workareaField.classList.remove("invalid");
}

//Function hívás submit gombra

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkName();
  checkEmail();
  createPass();
  checkWork();
  checkWorkArea();
  checkGender();
  checkAge();

  //Gombfelengedésre functionok
  nameInput.addEventListener("keyup", checkName);
  emailInput.addEventListener("keyup", checkEmail);
  passInput.addEventListener("keyup", createPass);
  workInput.addEventListener("keyup", checkWork);
  workareaInput.addEventListener("click", checkWorkArea);
  genderField.addEventListener("click", checkGender);
  ageField.addEventListener("click", checkAge);

  if (
    !nameField.classList.contains("invalid") &&
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !workField.classList.contains("invalid") &&
    !workareaField.classList.contains("invalid") &&
    !genderField.classList.contains("invalid") &&
    !ageField.classList.contains("invalid")
    ) 
  {
    location.href = form.getAttribute("action");
    
  }
});
function adatkiiras(){
  let nev = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password-input").value;
  let genders = document.getElementsByName("gender");
  let selgender;
  let ages = document.getElementsByName("ages");
  let selage;
  let worktype = document.getElementById("work").value;
  let workarea = document.getElementById("work-area").value;
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
}

