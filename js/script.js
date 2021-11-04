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
    console.log("asdasd");

    e.preventDefault();
    const index = +$(this).attr("data-index");
    slider.slick("slickGoTo", index);
  });
});
