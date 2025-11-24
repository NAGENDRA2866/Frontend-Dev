$(function(){
  $('#faq').on('click', '.question', function(){
    $(this).next('.answer').slideToggle();
  });

  $('#faq').on('mouseenter', '.question', function(){ $(this).css('color','blue'); });
  $('#faq').on('mouseleave', '.question', function(){ $(this).css('color',''); });

  $('#faq').on('dblclick', '.question', function(){
    $('.answer').slideUp();
  });

  $('#faq').on('focus', '.ansInput', function(){ $(this).closest('.answer').css('background','#fffbcc'); });
  $('#faq').on('blur', '.ansInput', function(){ $(this).closest('.answer').css('background',''); });
});