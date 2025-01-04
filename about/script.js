let timer;
let currentSlide = 0;

const slides = [
  '/images/consulting1.jpg',
  '/images/consulting2.jpg',
  '/images/consulting3.jpg',
  '/images/consulting4.jpg',
  '/images/consulting5.jpg',
];

function showSlide(index) {
  const slider = document.querySelector('.slider .img');
  const dots = document.querySelectorAll('.dots button');
  currentSlide = (index + slides.length) % slides.length;
  slider.style = `background-image : url(${slides[currentSlide]});`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

function prevSlide() {
  showSlide(currentSlide - 1);
  clearTimeout(timer);
}

function nextSlide() {
  showSlide(currentSlide + 1);
  clearTimeout(timer);
}

function goToSlide(index) {
  showSlide(index);
  clearTimeout(timer);
}

function autoSlide() {
  showSlide(currentSlide + 1);
  timer = setTimeout(autoSlide, 5000);
}

function addDotBtn() {
  const dotsContainer = document.querySelector('.dots');
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
}

// Initialize slider
showSlide(currentSlide);
addDotBtn();
autoSlide();
console.log('script loaded ', timer);
