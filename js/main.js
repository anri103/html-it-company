/*
Theme: IT Company
Author: Andrey Galkin
Version: 1.0
*/

//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    //////////////////////////////////////////////////////////////////
    // [ Слайдер на странице index.html ]

    const heroSwiper = new Swiper('.heroSwiper', {
        spaceBetween: 24,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#heroSwiper-next',
            prevEl: '#heroSwiper-prev',
        },
    });

    //////////////////////////////////////////////////////////////////
    // [ Слайдер на странице index.html ]

    const portfolioSwiper = new Swiper('.portfolioSwiper', {
        slidesPerView: 1.15,
        spaceBetween: 12,
        loop: true,
        centeredSlides: true,
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#portfolioSwiper-next',
            prevEl: '#portfolioSwiper-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
        },
    });

    //////////////////////////////////////////////////////////////////
    // [ Слайдер на странице blog-item.html ]

    const relatedPosts = new Swiper('.relatedPosts', {
        slidesPerView: 1,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#relatedPosts-next',
            prevEl: '#relatedPosts-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });

    //////////////////////////////////////////////////////////////////
    // [ Слайдер на странице about.html ]

    const aboutSwiper = new Swiper('.aboutSwiper', {
        spaceBetween: 24,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#aboutSwiper-next',
            prevEl: '#aboutSwiper-prev',
        },
    });

    const personalSwiper = new Swiper('.personalSwiper', {
        slidesPerView: 1,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#personalSwiper-next',
            prevEl: '#personalSwiper-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

    const testimonialSwiper = new Swiper('.testimonialSwiper', {
        spaceBetween: 24,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    const certificateSwiper = new Swiper('.certificateSwiper', {
        slidesPerView: 1,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#certificateSwiper-next',
            prevEl: '#certificateSwiper-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

});
