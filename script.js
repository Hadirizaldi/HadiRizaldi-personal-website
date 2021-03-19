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
});
