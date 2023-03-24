// Hämta referenser till input-fältet och svaret elementet
var ageInput = document.getElementById("age");
var svarElement = document.getElementById("svar");

// Lägg till en lyssnare för när användaren skickar in formuläret
ageInput.addEventListener("input", function() {
  // Hämta användarens ålder från input-fältet
  var ålder = Number(ageInput.value);
  
  // Uppdatera svaret beroende på användarens ålder
  if (ålder >= 1 && ålder <= 12) {
    svarElement.innerText = "Du är ett barn";
  } else if (ålder >= 13 && ålder <= 19) {
    svarElement.innerText = "Du är en tonåring";
  } else if (ålder >= 20 && ålder <= 64) {
    svarElement.innerText = "Du är en vuxen";
  } else if (ålder >= 65) {
    svarElement.innerText = "Du är en senior";
  } else {
    svarElement.innerText = "Ange en giltig ålder";
  }
});