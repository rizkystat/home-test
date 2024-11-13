// Image Carousel (with class .carousel-slide)
let currentImageSlide = 0;
const imageSlides = document.querySelectorAll('.carousel-slide');
const totalImageSlides = imageSlides.length;

document.querySelector('.carousel-control.next').addEventListener('click', () => {
  changeImageSlide(1);
});

document.querySelector('.carousel-control.prev').addEventListener('click', () => {
  changeImageSlide(-1);
});

function changeImageSlide(direction) {
  imageSlides[currentImageSlide].classList.remove('active');
  imageSlides[currentImageSlide].style.display = 'none'; // Hide current slide

  currentImageSlide = (currentImageSlide + direction + totalImageSlides) % totalImageSlides; // Update slide index

  imageSlides[currentImageSlide].classList.add('active');
  imageSlides[currentImageSlide].style.display = 'block'; // Show new slide
}

// Initialize the first image slide
document.addEventListener('DOMContentLoaded', () => {
  imageSlides.forEach((slide, index) => {
    slide.style.display = index === 0 ? 'block' : 'none';
  });
});


let currentSlide = 0;
    const slides = document.querySelectorAll('.artikel');

    function changeSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
// Tutup dropdown ketika klik di luar
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
};
function toggleLoginMenu() {
  const loginMenu = document.getElementById("loginMenu");
  if (loginMenu.style.display === "block") {
    loginMenu.style.display = "none";
  } else {
    loginMenu.style.display = "block";
  }
}

// Tutup menu login jika klik di luar area
window.onclick = function(event) {
  const loginMenu = document.getElementById("loginMenu");
  const loginIcon = document.querySelector(".login-burger-icon");
  if (event.target !== loginMenu && event.target !== loginIcon) {
    loginMenu.style.display = "none";
  }
};
