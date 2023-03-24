const numberInput = document.getElementById('number-input');
const checkButton = document.getElementById('check-button');
const svar = document.getElementById('svar');

checkButton.addEventListener('click', function() {
  const number = Number(numberInput.value);

  if (number > 0) {
    svar.textContent = 'Talet är positivt';
    svar.classList.remove('negative', 'zero');
    svar.classList.add('positive');
  } else if (number < 0) {
    svar.textContent = 'Talet är negativt';
    svar.classList.remove('positive', 'zero');
    svar.classList.add('negative');
  } else {
    svar.textContent = 'Talet är noll';
    svar.classList.remove('positive', 'negative');
    svar.classList.add('zero');
  }
});