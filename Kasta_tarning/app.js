// Select all the buttons containing hidden images
const buttons = document.querySelectorAll('button');

// Function to choose a new random image and display it
function displayRandomImage() {
  // Select all the hidden images
  const hiddenImages = document.querySelectorAll('img[hidden]');

  // Choose a random index from the hidden images array
  const randomIndex = Math.floor(Math.random() * hiddenImages.length);

  // Remove the "hidden" attribute from the randomly chosen image
  const newImage = hiddenImages[randomIndex];
  newImage.removeAttribute('hidden');

  // Hide all other images
  const otherImages = document.querySelectorAll('img:not([hidden])');
  otherImages.forEach(image => {
    if (image !== newImage) {
      image.setAttribute('hidden', '');
    }
  });
}

// Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', displayRandomImage);
});