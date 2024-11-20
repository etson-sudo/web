const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let currentSlide = 0;

// Mostrar slide actual
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

// Navegación manual
prev.addEventListener('click', () => {
  currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
  showSlide(currentSlide);
});

next.addEventListener('click', () => {
  currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
  showSlide(currentSlide);
});

// Slider automático
setInterval(() => {
  currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
  showSlide(currentSlide);
}, 5000); // Cambia cada 5 segundos

// Mostrar el primer slide al cargar
showSlide(currentSlide);
/*-----------------------------------*/
