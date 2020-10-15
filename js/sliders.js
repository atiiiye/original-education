$(document).ready(function () {


    $(".img-gallery").owlCarousel( {

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
          }
          ,
          768: {
            items: 3,
          }
          ,
        }

        ,
      }

    );

    $(".video-gallery").owlCarousel( {
        rtl: true,
        nav: true,
        items: 1,
        dots: false,
        center: true,
        video: true,
        navText: [ '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
        ],
      }

    );

    $(".cards-gallery").owlCarousel( {

        rtl: true,
        nav: true,
        items: 1,
        // margin:16,
        // autoplay: true,
        autoplayTimeout: 5000,
        navText: [ '<i class="fas fa-arrow-left"></i>',
        '<i class="fas fa-arrow-right"></i>',
        ],
        responsive: {
          0: {
            items: 1,
            nav: true
          }
          ,
          576: {
            loop: true,
            items: 2,
            nav: true
          }
          ,
          768: {
            loop: true,
            items: 3,
            nav: true
          }

          ,
          1100: {
            items: 4,
            nav: true
          }
          ,
        }

        ,

      }

    );

  }

)