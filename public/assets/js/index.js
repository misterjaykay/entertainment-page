$(document).ready(function () {
  $(".my-slider").slick({
    // arrows: false,
    infinite: true,
    // initialSlide: 0,
    // autoplay: true,
    // autoplaySpeed: 3000,
    fade: true,
    draggable: false,
    prevArrow: `<button type="button" class="slick-prev"> <<< </button>`,
    nextArrow: `<button type="button" class="slick-next"> >>> </button>`
  });
});
