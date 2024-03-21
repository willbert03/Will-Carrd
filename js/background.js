// Get the image element by its ID
const rotatingImage = document.getElementById("rotatingImage");

// Function to set a random image from the array
function setRandomImage(imageArray) {
  const randomIndex = Math.floor(Math.random() * imageArray.length);
  const randomImage = imageArray[randomIndex];
  rotatingImage.src = randomImage;
}

// Prevent right-click on the rotatingImage element
rotatingImage.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

// Function to fetch image filenames from the folder
function fetchImages(totalImages) {
  const imgFolder = "img/Patterns/";
  const imageArray = [];
  for (let i = 1; i <= totalImages; i++) {
    // Assuming the images are named "Artboard XX.svg" where XX ranges from 1 to totalImages
    const imageName = `Artboard ${i}.svg`;
    imageArray.push(imgFolder + imageName);
  }
  return imageArray;
}

// Total number of images you have
const totalImages = 26; // Adjust this value as per your actual number of images

// Call the function to fetch images and set an initial random image
const imageArray = fetchImages(totalImages);
setRandomImage(imageArray);
