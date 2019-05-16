 import Swiper from 'Swiper'
 var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 30,
  thumbs: {
    swiper: galleryThumbs
  }
});