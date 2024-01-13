      // Array of image filenames
      const imageArray = ["img/Patterns/Rhino.svg", "img/Patterns/Giraffe.svg", "img/Patterns/Lorikeet.svg", "img/Patterns/Pattern.svg", ];

      // Get the image element by its ID
      const rotatingImage = document.getElementById("rotatingImage");

      // Function to set a random image from the array
      function setRandomImage() {
        const randomIndex = Math.floor(Math.random() * imageArray.length);
        const randomImage = imageArray[randomIndex];
        rotatingImage.src = randomImage;
      }

      // Prevent right-click on the rotatingImage element
rotatingImage.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

      // Call the function initially to set an initial random image
      setRandomImage();