const colors = document.getElementsByClassName("colors");

let i;
for (i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", changeColor);
}

function changeColor() {
  let color = this.getAttribute("data-color");
  document.documentElement.style.setProperty("--color", color);
}

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("hidden");
      $(".theme").addClass("gone");
    } else {
      $(".navbar").removeClass("hidden");
      $(".theme").removeClass("gone");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }

    if (this.scrollY < 20) {
    } else {
    }
  });

  // untuk slide ke atas
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  //   Script buat toggle menu/navbar
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // untuk membuat tulisan ketikan
  let typed = new Typed(".typing", {
    strings: ["Student Collage", "Freelancer", "Math-Tutor"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
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

  // Change color theme
  const colors = document.getElementByCl("colors");

  for (let i = 0; i < colors.lenght; i++) {
    colors[i].addEventListener("click", changeColor);
  }

  function changeColor() {
    let color = this.getAttribute("data-color");
    document.documentElement.style.setProperty("--color", color);
  }
});
