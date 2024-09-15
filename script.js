window.onload = function() {
  document.querySelector('.btn-primary').addEventListener('click', function() {
    document.getElementById('view-gallery').scrollIntoView({
      behavior: 'smooth'
    });
  });
};

function scrollToGallery() {
  const element = document.getElementById('view-gallery');
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

//  Gallery
let customSlideIndex = 0;

// Ensure the modal is hidden when the page loads
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById("custom-modal");
  modal.style.display = "none";
  showCustomSlides(customSlideIndex); // Show the first slide initially
});

// Function to open the modal with the given index
function openCustomModal(index) {
  const modal = document.getElementById("custom-modal");
  modal.style.display = "block";
  modal.classList.add("show");
  showCustomSlides(index);
  document.addEventListener("keydown", keyNavigation);
  document.addEventListener("click", handleClickOutside); // Handle clicks outside the modal
}

// Function to close the modal
function closeCustomModal() {
  const modal = document.getElementById("custom-modal");
  modal.style.display = "none";
  modal.classList.remove("show");
  document.removeEventListener("keydown", keyNavigation);
  document.removeEventListener("click", handleClickOutside);
}

// Function to show the slides
function showCustomSlides(index) {
  const slides = document.getElementsByClassName("custom-slide");

  // Ensure index is within bounds
  if (index >= slides.length) { 
    customSlideIndex = 0; 
  } else if (index < 0) { 
    customSlideIndex = slides.length - 1; 
  } else {
    customSlideIndex = index;
  }

  // Hide all slides and show the current one
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("custom-active");
  }
  slides[customSlideIndex].classList.add("custom-active");
}

// Function to navigate slides (left/right)
function plusCustomSlides(n) {
  showCustomSlides(customSlideIndex + n);
}

// Handle keyboard navigation
function keyNavigation(event) {
  if (event.key === "ArrowLeft") {
    plusCustomSlides(-1);
  } else if (event.key === "ArrowRight") {
    plusCustomSlides(1);
  } else if (event.key === "Escape") {
    closeCustomModal();
  }
}

// Handle clicks outside the modal content
function handleClickOutside(event) {
  const modal = document.getElementById("custom-modal");
  if (event.target === modal) {
    closeCustomModal();
  }
}

// Add click event listeners to images to go to the next slide
const customImages = document.getElementsByClassName("custom-slide");
for (let i = 0; i < customImages.length; i++) {
  customImages[i].addEventListener("click", function() {
    plusCustomSlides(1); // Move to the next slide on image click
  });
}

// Add event listeners for custom navigation buttons
document.getElementById("prev-custom").addEventListener("click", function() {
  plusCustomSlides(-1); // Previous slide
});
document.getElementById("next-custom").addEventListener("click", function() {
  plusCustomSlides(1); // Next slide
});
