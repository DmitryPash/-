// drop Menu - Burger
let flag = false;
$(".header-menu-toggle").click(function () {
  if (!flag) {
    $(".header-menu").slideDown(200);
  } else {
    $(".header-menu").slideUp(200);
  }
  flag = !flag;
});

// Drop textarea function
function textArea() {
  document.getElementById("textarea").style.display = "initial";
}
// Slick slider
$(document).ready(function () {
  $(".slider__item").each(function (key, item) {
    console.log($(item).attr("data-name"));
    const name = $(item).attr("data-name") || null;
    if (name != null) {
      $(".slider-nav").append(`
          <a data-index="${key}" href="#" class="slider-nav-link">
              ${name}
          </a>`);
    }
  });

  const slider = $(".slider").slick({
    // dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    prevArrow: ".prev-arrow",
    nextArrow: ".prev-arrow",
  });

  $(document).on("click", ".slider-nav-link", function (e) {
   

    e.preventDefault();
    const index = +$(this).attr("data-index");
    slider.slick("slickGoTo", index);
  });
});

// $(document).ready(function () {});
