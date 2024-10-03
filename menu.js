let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, 2000); // Change slide every 3 seconds

let currentIndex = 0;

function moveGrid(direction) {
    const items = document.querySelectorAll('.grid-item');
    const totalItems = items.length;
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const offset = -currentIndex * (items[0].clientWidth + 20); // 20 is for margin
    document.querySelector('.grid').style.transform = `translateX(${offset}px)`;
}

