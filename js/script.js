window.onload = function() {
  document.querySelector('.btn-primary').addEventListener('click', function() {
    document.getElementById('view-gallery').scrollIntoView({
      behavior: 'smooth'
    });
  });
 };

 function scrollToGallery() {
  document.getElementById('view-gallery').scrollIntoView({
    behavior: 'smooth'
  });
}
 
 let customSlideIndex = 0;
 
 
 // Makes sure the modal is hidden when the page loads
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
  customSlideIndex = index;
  showCustomSlides(customSlideIndex);
  createButtonsForSlides(); // Create buttons when opening the modal
  document.addEventListener("keydown", keyNavigation);
  document.addEventListener("click", handleClickOutside);
 }
 
 
 // Function to create previous and next buttons for each slide
 function createButtonsForSlides() {
  const slides = document.getElementsByClassName('custom-slide');
 
 
  // Remove existing buttons before creating new ones
  removeButtons();
 
 
  for (let i = 0; i < slides.length; i++) {
    // Create previous button
    const prevBtn = document.createElement('button');
    prevBtn.classList.add('custom-btn', 'prev');
    prevBtn.innerHTML = '&#10094;'; // Left arrow symbol
    prevBtn.addEventListener('click', function(e) {
      e.stopPropagation()
      plusCustomSlides(-1);
    });
 
 
    // Create next button
    const nextBtn = document.createElement('button');
    nextBtn.classList.add('custom-btn', 'next');
    nextBtn.innerHTML = '&#10095;'; // Right arrow symbol
    nextBtn.addEventListener('click', function(e) {
      e.stopPropagation()
      plusCustomSlides(1);
    });
 
 
    // Append buttons to the slide
    slides[i].appendChild(prevBtn);
    slides[i].appendChild(nextBtn);
  }
 }
 
 
 // Function to close the modal
 function closeCustomModal() {
  const modal = document.getElementById("custom-modal");
  modal.style.display = "none";
  modal.classList.remove("show");
  document.removeEventListener("keydown", keyNavigation);
  document.removeEventListener("click", handleClickOutside);
  removeButtons();
 }
 
 
 // Function to change the slide index
 function plusCustomSlides(n) {
  // Calculate the new index first and check bounds
  customSlideIndex += n;
 
 
  const slides = document.getElementsByClassName("custom-slide");
  if (customSlideIndex >= slides.length) {
    customSlideIndex = 0;
  } else if (customSlideIndex < 0) {
    customSlideIndex = slides.length - 1;
  }
 
 
  showCustomSlides(customSlideIndex);
 }
 
 
 // Function to show the slides
 function showCustomSlides(index) {
  const slides = document.getElementsByClassName("custom-slide");
 
 
  // Hide all slides and show the current one
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("custom-active");
    slides[i].style.display = "none";
  }
 
 
  slides[index].classList.add("custom-active");
  slides[index].style.display = "block";
 }
 
 
 // Add click event listeners to images to go to the next slide
 const customImages = document.getElementsByClassName("custom-slide");
 for (let i = 0; i < customImages.length; i++) {
  customImages[i].addEventListener("click", function() {
    plusCustomSlides(1);
  });
 }
 
 
 // Keyboard navigation
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
 
 
 function removeButtons() {
  const buttons = document.querySelectorAll('.custom-btn');
  buttons.forEach(button => button.remove());
 }