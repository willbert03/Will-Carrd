      // Array of image filenames
      const imageArray = ["img/cover/DS_1.jpg", "img/cover/DS_2.jpg", "img/cover/DS_3.jpg", "img/cover/DS_4.jpg", "img/cover/DS_5.jpg", "img/cover/DS_6.jpg", "img/cover/DS_7.jpg", "img/cover/DS_8.jpg", "img/cover/DS_9.jpg", "img/cover/Giraffe.png", "img/cover/Greenbow.png", "img/cover/LondonS.png", "img/cover/LondonW.png", "img/cover/Lorikeet.png", "img/cover/Mountains.png", "img/cover/Paint.png", "img/cover/Penquin.png", "img/cover/Rhino.png", "img/cover/Swim.png" ];

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