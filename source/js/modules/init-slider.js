function addTabindex() {
  const originalSlides = document.querySelectorAll('.trainer__item:not(.swiper-slide-duplicate)');
  for (let i = 0; i < originalSlides.length; i++) {
    originalSlides[i].querySelector('.trainer-card').setAttribute('tabindex', '0');
  }
}

export const initTrainerSwiper = () => {
  const container = document.querySelector('.swiper--trainer');
  if (!container) {
    return null;
  }

  const TrainerSwiper = new window.Swiper('.swiper--trainer', {
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
    on: {
      init: () => {
        addTabindex();
        document.addEventListener('keydown', (evt) => {

          if (evt.shiftKey && evt.key === 'Tab') {
            const active = document.activeElement;
            if (active.parentElement.classList.contains('swiper-slide-active')) {
              const parentSlideIndex = active.parentElement.dataset.swiperSlideIndex;
              if (parentSlideIndex > 0) {
                TrainerSwiper.slidePrev(100, true);
              }
            }
          } else if (!evt.shiftKey && evt.key === 'Tab') {
            const active = document.activeElement;
            if (active.parentElement.classList.contains('swiper-slide-next')) {
              TrainerSwiper.slideNext(100, true);
            }
          }
        });
      },
    },
  });

  return TrainerSwiper;
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
