function calculateAge() {
    // Hämta användarens födelsedatum från formuläret
    var birthdate = new Date(document.getElementById("birthdate").value);
    
    // Skapa ett datum-objekt för dagens datum
    var today = new Date();
    
    // Beräkna åldern i millisekunder
    var ageInMs = today - birthdate;
    
    // Omvandla millisekunder till år och dagar
    var ageInYears = Math.floor(ageInMs / (365.25 * 24 * 60 * 60 * 1000));
    var ageInDays = Math.floor((ageInMs / (24 * 60 * 60 * 1000)) % 365.25);
    
    // Visa resultatet på webbsidan
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Du är " + ageInYears + " år och " + ageInDays + " dagar gammal.";
  }