export const initTrainerSwiper = () => {
  const container = document.querySelector('.swiper--trainer');
  if (!container) {
    return null;
  }

  return new window.Swiper('.swiper--trainer', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 40,
    loopedSlides: 0,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

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
        slidesPerGroup: 1,
      },
    },
  });
};

export const initReviewsSwiper = () => {
  const container = document.querySelector('.reviews__slider');
  if (!container) {
    return null;
  }

  return new window.Swiper('.reviews__slider', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 60,
    autoHeight: true,

    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
  });
};