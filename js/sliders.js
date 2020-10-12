$(document).ready(function () {
  let gallery = document.querySelector("div.img-gallery.owl-carousel");
  console.log(gallery);
  $(".img-gallery").owlCarousel({
    rtl: true,
    nav: false,
    items: 3,
    dots: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
    },
  });

  $("#video-gallery").owlCarousel({
    rtl: true,
    nav: true,
    items: 1,
    dots: false,
    center: true,
    video: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });
});
