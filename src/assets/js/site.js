"use strict";

/* eslint-disable */
export default function initMain() {
  $(document).ready(function () {
    /* Video Lightbox */
    // if (!!$.prototype.simpleLightboxVideo && document.querySelector(".video")) {
    //   $(".video").simpleLightboxVideo();
    // }

    /*ScrollUp*/
    if (!!$.prototype.scrollUp) {
      $.scrollUp();
    }

    /*Responsive Navigation*/
      $("#nav-mobile").html($("#nav-main").html());
      $("#nav-trigger span").on("click", function () {
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
          $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
          $(this).removeClass("open");
        } else {
          $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
          $(this).addClass("open");
        }
      });

      $("#nav-mobile").html($("#nav-main").html());
      $("#nav-mobile ul a").on("click", function () {
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
          $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
          $("#nav-trigger span").removeClass("open");
        }
      });

    /* Sticky Navigation */
    if (!!$.prototype.stickyNavbar && document.querySelector("#header")) {
      $("#header").stickyNavbar();
    }
    
      $("#content").waypoint(function (direction) {
        if (direction === "down") {
          $("#header").addClass("nav-solid fadeInDown");
        } else {
          $("#header").removeClass("nav-solid fadeInDown");
        }
      });
  });

  /* Preloader and animations */

  $(window).load(function () {
    // makes sure the whole site is loaded
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
    $("body").delay(350).css({ "overflow-y": "visible" });

    /* WOW Elements */
    if (typeof WOW == "function") {
      new WOW().init();
    }

    /* Parallax Effects */
    if (!!$.prototype.enllax) {
      $(window).enllax();
    }
  });

  // i. client (carousel)

    $("#client").owlCarousel({
      items: 7,
      loop: true,
      smartSpeed: 1000,
      autoplay: true,
      dots: false,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2,
        },
        415: {
          items: 2,
        },
        600: {
          items: 4,
        },
        1199: {
          items: 4,
        },
        1200: {
          items: 7,
        },
      },
    });
  
    $(".play").on("click", function () {
      owl.trigger("play.owl.autoplay", [1000]);
    });
    $(".stop").on("click", function () {
      owl.trigger("stop.owl.autoplay");
    });
}
