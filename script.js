function mostraFeedback() {
    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confermaPassword = document.getElementById("confermaPassword").value;
    var età = document.getElementById("età").value;
    
    var sesso = "Non selezionato";
    if (document.getElementById("maschio").checked) {
      sesso = "Maschio";
    } else if (document.getElementById("femmina").checked) {
      sesso = "Femmina";
    } else if (document.getElementById("altro").checked) {
        sesso = "Altro";
    }
    
  
    var termini = document.getElementById("termini").checked;
    var terminiText = "Non accettato";
    if (termini) {
      terminiText = "Accettato";
    }
  
    var feedbackDiv = document.getElementById("feedback");
    feedbackDiv.innerHTML = 
      "<p>Nome: " + nome + "</p>" +
      "<p>Cognome: " + cognome + "</p>" +
      "<p>Email: " + email + "</p>" +
      "<p>Password: " + password + "</p>" +
      "<p>Conferma Password: " + confermaPassword + "</p>" +
      "<p>Età: " + età + "</p>" +
      "<p>Sesso: " + sesso + "</p>" +
      "<p>Accettazione Termini: " + terminiText + "</p>";
  }
  
  document.getElementById("showFeedbackBtn").addEventListener("click", mostraFeedback);