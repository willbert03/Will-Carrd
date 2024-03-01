      // Array of image filenames
      const imageArray = ["img/SMPTE.png", "img/Patterns/Animals.svg", "img/Patterns/Animals2.svg", "img/Patterns/Animals3.svg", "img/Patterns/Animals4.svg", "img/Patterns/Animals5.svg", "img/Patterns/Animals6.svg", "img/Patterns/Circles.svg", "img/Patterns/Giraffes.svg", "img/Patterns/Giraffes2.svg", "img/Patterns/Giraffes3.svg", "img/Patterns/Lorikeet.svg", "img/Patterns/Lorikeet2.svg", "img/Patterns/Lorikeet3.svg", "img/Patterns/Rhinos.svg", "img/Patterns/Rhinos2.svg", "img/Patterns/RhinoWalk.svg", "img/Patterns/Triangles.svg", ];

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