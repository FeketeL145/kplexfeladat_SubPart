function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }


  function ellenoriz() {
      var emailInput = document.getElementById('email');
      var email = emailInput.value;
      
      if (email.includes('@')) {
          document.getElementById('helyes').innerHTML="helyes";
          return true;
      } else {
          document.getElementById('helytelen').innerHTML="helytelen";
          return false;
      }
  }