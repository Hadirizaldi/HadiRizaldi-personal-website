$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("hidden");
    } else {
      $(".navbar").removeClass("hidden");
    }
  });

  //   Script buat toggle menu/navbar
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  //   Script untuk aktif owl carousel
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
      },
    },
  });
});
