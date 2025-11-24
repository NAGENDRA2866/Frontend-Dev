$(function(){
  
  $('#org').on('click', '.member[data-role="manager"]', function(){
    const dept = $(this).closest('.department');
    dept.find('.member').not('[data-role="manager"]').toggleClass('highlight', true).css('background','#fffbcc');
  });

  
  $('#org').on('mouseenter', '.member', function(){
    $(this).after('<div class="contact">Contact: example@company.com</div>');
  }).on('mouseleave', '.member', function(){
    $(this).next('.contact').remove();
  });

  
  $('#org').on('click', '.department h3', function(){
    $(this).siblings('.member').css('background','#eef');
  });

  
  $('#random').on('click', function(){
    const members = $('#org .member');
    const idx = Math.floor(Math.random() * members.length);
    $(members[idx]).css('border','2px solid #0a0');
  });
});