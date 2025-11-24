$(function(){
  $('#hide').on('click', ()=> $('#banners .banner').hide());
  $('#show').on('click', ()=> $('#banners .banner').show());
  $('#slide').on('click', ()=> $('#banners .banner').slideToggle());
  $('#fade').on('click', ()=> $('#banners .banner').fadeToggle());

  
  let idx = 0; const items = $('#banners .banner');
  setInterval(()=>{
    items.fadeOut(400); $(items[idx]).fadeIn(400); idx = (idx + 1) % items.length;
  }, 5000);
});