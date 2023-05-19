export const initTrainerSwiper = () => {
  const trainerSlider = new Swiper('.swiper--trainer', { // eslint-disable-line
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.trainer__slider-button--next',
      prevEl: '.trainer__slider-button--prev',
    },
    maxBackfaceHiddenSlides: 0,
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      1280: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  });
};
