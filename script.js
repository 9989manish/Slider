const slides = document.querySelectorAll(".slide");
var counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

function goPrev() {
    if (counter > 0) { // Prevent sliding beyond the first image
        counter--;
        slideImages();
    }
}

function goNext() {
    if (counter < slides.length - 1) { // Prevent sliding beyond the last image
        counter++;
        slideImages();
    }
}

function slideImages() {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}
