new WOW().init();

jQuery('.drawer-icon').on ('click', function(e){
  //違うページに左遷しないように無効化
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');

  return false;
})
