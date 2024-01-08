      // Array of image filenames
      const imageArray = ["img/A.png", "img/B.png", "img/C.png", "img/D.png", "img/E.png", "img/F.png", "img/G.png"];

      // Get the image element by its ID
      const rotatingImage = document.getElementById("rotatingImage");

      // Function to set a random image from the array
      function setRandomImage() {
        const randomIndex = Math.floor(Math.random() * imageArray.length);
        const randomImage = imageArray[randomIndex];
        rotatingImage.src = randomImage;
      }

      // Call the function initially to set an initial random image
      setRandomImage();