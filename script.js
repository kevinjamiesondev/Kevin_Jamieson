let slideIndex = 1;

function openModal() {
    document.getElementById('modal').style.display = 'block';
    showSlides(slideIndex);
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('click', handleClickOutside);
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.removeEventListener('keydown', handleKeyPress);
    document.removeEventListener('click', handleClickOutside);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

function showSlides(n) {
    let slides = document.getElementsByClassName('slide');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let slide of slides) slide.style.display = 'none';
    slides[slideIndex - 1].style.display = 'block';
}

function handleKeyPress(event) {
    if (event.key === 'Escape') closeModal();
    else if (event.key === 'ArrowRight') plusSlides(1);
    else if (event.key === 'ArrowLeft') plusSlides(-1);
}

function handleClickOutside(event) {
    if (event.target.classList.contains('modal')) closeModal();
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
});





document.addEventListener('DOMContentLoaded', function() {
  // Ensure the modal is hidden when the page loads
  document.getElementById("custom-modal").style.display = "none";
});

function openCustomModal(index) {
  document.getElementById("custom-modal").style.display = "block";
  showCustomSlides(index);
  document.addEventListener("keydown", keyNavigation); // Listen for keyboard input
}

function closeCustomModal() {
  document.getElementById("custom-modal").style.display = "none";
  document.removeEventListener("keydown", keyNavigation); // Remove keyboard listener
}

function showCustomSlides(index) {
  var slides = document.getElementsByClassName("custom-slide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("custom-active"); // Hide all slides
  }
  slides[index].classList.add("custom-active"); // Show the current slide
  customSlideIndex = index; // Set the current index
}

function plusCustomSlides(n) {
  var slides = document.getElementsByClassName("custom-slide");
  customSlideIndex += n;

  if (customSlideIndex >= slides.length) { 
    customSlideIndex = 0; 
  }
  if (customSlideIndex < 0) { 
    customSlideIndex = slides.length - 1; 
  }
  
  showCustomSlides(customSlideIndex); // Show the new slide
}

function keyNavigation(event) {
  if (event.key === "ArrowLeft") {
    plusCustomSlides(-1); // Navigate left
  } else if (event.key === "ArrowRight") {
    plusCustomSlides(1); // Navigate right
  } else if (event.key === "Escape") {
    closeCustomModal(); // Close modal on Escape key
  }
}

// Close modal when clicking outside the content area
window.onclick = function(event) {
  var modal = document.getElementById("custom-modal");
  if (event.target === modal) {
    closeCustomModal();
  }
};

// Add event listener to images to go to the next slide on click
var images = document.getElementsByClassName("custom-slide");
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    plusCustomSlides(1); // Move to the next slide on image click
  });
}
