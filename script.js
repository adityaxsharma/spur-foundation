
        const boxes = document.querySelectorAll('.box');
        const windowHeight = window.innerHeight;

        function showBoxes() {
            boxes.forEach((box, index) => {
                const rect = box.getBoundingClientRect();
                const isVisible = rect.top < windowHeight && rect.bottom >= 0;

                if (isVisible) {
                    box.classList.add('visible');
                } else {
                    box.classList.remove('visible');
                }
            });
        }

        showBoxes();
        window.addEventListener('scroll', showBoxes);


        // ***************************SLIDESHOW DIV********************
        let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 3 seconds
}






// Add this code to a new script.js file

document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            boxes.forEach((otherBox) => {
                if (otherBox !== box) {
                    otherBox.style.filter = "blur(2px)"; // Adjust the blur intensity as needed
                }
            });
        });

        box.addEventListener("mouseout", () => {
            boxes.forEach((otherBox) => {
                otherBox.style.filter = "none"; // Reset the blur effect
            });
        });
    });
});




   