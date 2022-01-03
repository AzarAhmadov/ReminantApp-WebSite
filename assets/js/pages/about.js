const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      140: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  });