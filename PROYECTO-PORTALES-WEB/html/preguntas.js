document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".background-slideshow img");
  let currentIndex = 0;

  function showNextImage() {
    images[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.opacity = 1;
  }

  images[currentIndex].style.opacity = 1;

  setInterval(showNextImage, 5000);
});
