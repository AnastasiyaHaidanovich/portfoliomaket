$(".button-menu").on("click", function (e) {
  e.preventDefault;
  $(this).toggleClass("btn-menu-active");
  $(".menu").toggleClass("menu-active");
  $(".hero-header").toggleClass("hero-header-active");
  $(".menu-item").toggleClass("menu-item-active");
});
