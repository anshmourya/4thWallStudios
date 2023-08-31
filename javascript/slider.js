
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,

});

//team members slider
var swiper = new Swiper(".team", {

    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        480: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        1000: {
            slidesPerView: 3
        }
    }

});