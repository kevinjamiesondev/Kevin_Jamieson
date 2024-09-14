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
