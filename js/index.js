$(() => {
  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: `<button 
    class="banner-section__slider-slick-btn banner-section__slider-slick-btn--prev">
    <img src="images/arrow-left.svg" alt="">
    </button>`,
    nextArrow: `<button 
    class="banner-section__slider-slick-btn banner-section__slider-slick-btn--next">
    <img src="images/arrow-right.svg" alt="">
    </button>
    `,
  });
});
