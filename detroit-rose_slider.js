
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.best-seller-collection'); 
    const slides = document.querySelectorAll('.slider__slide');
    const nextButton = document.querySelector('.slider-button--next');
    const prevButton = document.querySelector('.slider-button--prev');

    let currentGradientIndex = 0;  

    function applyGradientEffect() {
      slides.forEach(slide => slide.classList.remove('slide-gradient-effect'));

      if (slides[currentGradientIndex]) {
        slides[currentGradientIndex].classList.add('slide-gradient-effect');
      }
    }

    function setInitialVisibleSlide() {
      const sliderRect = slider.getBoundingClientRect();
      slides.forEach((slide, index) => {
        const slideRect = slide.getBoundingClientRect();
        if (slideRect.left >= sliderRect.left && slideRect.right <= sliderRect.right) {
          currentGradientIndex = index;  // Update to the visible slide
        }
      });
    }

    nextButton.addEventListener('click', () => {
      if (currentGradientIndex < slides.length - 1) {
        currentGradientIndex++;
        applyGradientEffect(); 
      }
    });

    prevButton.addEventListener('click', () => {
      if (currentGradientIndex > 0) {
        currentGradientIndex--;
        applyGradientEffect(); 
      }
    });

    setInitialVisibleSlide(); 
    applyGradientEffect(); 
  });
</script>

/* */
/* gradient effect in the product collection slider */
.slide-gradient-effect {
    position: relative;
    overflow: hidden;
}
/* for gradient effect for the right-end slide */
.slide-gradient-effect::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0; 
    height: 100%;
    width: 60%; 
    background: linear-gradient(to left, rgba(254, 249, 244, 0.9), rgba(254, 249, 244, 0));
    pointer-events: none;
    z-index: 1;
}
/* for gradient effect for the left-end slide */
.slide-gradient-effect::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0; 
    height: 100%;
    width: 60%; 
    background: linear-gradient(to right, rgba(254, 249, 244, 0.9), rgba(254, 249, 244, 0));
    pointer-events: none;
    z-index: 1;
}