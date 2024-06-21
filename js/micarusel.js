var owl = $(".owl-carousel");
owl.owlCarousel({
    items: 3,
    margin: 10,
    autoplay: true,
    loop: true,

    /*
    loop: true,
    nav: true,
    navText: ["Prev", "Next"],
    dotsEach: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverpause: true,
    */

    responsive: {
        0: {
            items: 2,
            margin: 10,
        },
        600: {
            items: 3,
            margin: 10,
        },
        1000: {
            items: 5,
            margin: 20,
        },
    },
});