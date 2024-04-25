$(window).on("load", function () {
   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
      $("body").addClass("ios");
   } else {
      $("body").addClass("web");
   }
   document.body.dataset.preloader = false;
});

/* viewport width */
$(function () {
   /* burger */
   const menu = document.querySelector(".js-menu");
   const menuBtnClose = document.querySelector(".js-menu-btn-close");
   const menuBtnOpen = document.querySelector(".js-menu-btn-open");
   const menuOverlay = document.querySelector(".js-menu-overlay");

   if (menu && menuBtnClose && menuBtnOpen && menuOverlay) {
      menuBtnOpen.addEventListener("click", () => {
         menu.classList.add("m-active");
         menuOverlay.classList.add("m-active");
      });
      menuBtnClose.addEventListener("click", () => {
         menu.classList.remove("m-active");
         menuOverlay.classList.remove("m-active");
      });
      menuOverlay.addEventListener("click", () => {
         menu.classList.remove("m-active");
         menuOverlay.classList.remove("m-active");
      });
   }

   if ($(".js-menu-slider").length) {
      $(".js-menu-slider").slick({
         autoplay: false,
         dots: false,
         arrows: false,
         infinite: true,
         speed: 300,
         slidesToShow: 1,
         centerMode: false,
         variableWidth: true,
      });
   }
});
