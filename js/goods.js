window.addEventListener("load", function () {
  const swGoods = new Swiper(".sw-goods", {
    slidesPerView: 3,
    loop: true,
    speed: 1200,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });
});