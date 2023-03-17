const buttons = document.querySelectorAll('button');

function startAnimation() {
  buttons.forEach(button => {
    button.classList.add("Kast");
  });
}

function displayRandomImage() {
  const hiddenImages = document.querySelectorAll('img[hidden]');

  const randomIndex = Math.floor(Math.random() * hiddenImages.length);

  const newImage = hiddenImages[randomIndex];

  setTimeout(function () { newImage.removeAttribute('hidden'); }, 2000)

  const otherImages = document.querySelectorAll('img:not([hidden])');
  otherImages.forEach(image => {
    if (image !== newImage) {
      setTimeout(function () { image.setAttribute('hidden', ''); }, 2000)
      removeAnimation();
    }
  });
}

function removeAnimation(){
  buttons.forEach(button => {
    button.classList.remove("Kast");
  });
}

buttons.forEach(button => {
  button.addEventListener('click', displayRandomImage)
  button.addEventListener('click', startAnimation)
  button.addEventListener('click', () => {
    setTimeout(removeAnimation, 4000);
  });
})