let slideIndex = 0;
let words = ["Transform", "Create", "Learn"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = '';
let isDeleting = false;
let typingSpeed = 200;
let deletingSpeed = 100;
let delayBetweenWords = 2000;

showHomeSlides();
typeWords();

function showHomeSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.opacity = "1";
    setTimeout(showHomeSlides, 5000); // Change image every 5 seconds
}

function typeWords() {
    let dynamicTexts = document.querySelectorAll("#dynamic-text");
    
    if (isDeleting) {
        currentWord = words[wordIndex].substring(0, charIndex--);
    } else {
        currentWord = words[wordIndex].substring(0, charIndex++);
    }
    
    dynamicTexts.forEach(dynamicText => {
        dynamicText.textContent = currentWord;
    });
    
    if (!isDeleting && charIndex === words[wordIndex].length) {
        isDeleting = true;
        setTimeout(typeWords, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeWords, typingSpeed);
    } else {
        setTimeout(typeWords, isDeleting ? deletingSpeed : typingSpeed);
    }
}

const aboutSlides = document.querySelectorAll('.about-slide');
let currentSlide = 0;

function showSlides() {
  const slides = [...aboutSlides];
  slides.forEach((slide, index) => {
    slide.classList.remove('active', 'slide-in', 'slide-out');
    if (index >= currentSlide && index < currentSlide + 3) {
      slide.classList.add('active');
      slide.style.left = `${(index - currentSlide) * 33.333}%`;
    } else {
      slide.style.left = '100%';
    }
  });
  
  currentSlide = (currentSlide + 1) % (slides.length - 2);
}

// Initial setup
showSlides();

// Change slides every 5 seconds (adjust as needed)
setInterval(showSlides, 5000);