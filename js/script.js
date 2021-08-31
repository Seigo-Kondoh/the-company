const swiper = new Swiper('.swiper-container', {
//slideの最後まで行ったら最初のslideに戻るという指定。
  loop: true,

//slideの数を見て分かるように指定。
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

//デザインカンプで言うアローアイコン。
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

new WOW().init();

jQuery('.drawer-icon').on ('click', function(e){
  //違うページに左遷しないように無効化
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');

  return false;
})
