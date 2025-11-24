$(function(){
  $('#add').on('click', function(){
    $('#posts').append('<div class="post">New post at '+ new Date().toLocaleTimeString() +'</div>');
  });
  $('#prepend').on('click', function(){
    $('#posts').prepend('<div class="post">Featured post at '+ new Date().toLocaleTimeString() +'</div>');
  });
  $('#removeLast').on('click', function(){ $('#posts .post').last().remove(); });

  
  $('#posts').on('click', '.post', function(){
    $(this).before('<div class="tag">Tag: sample</div>');
  });

  
  setInterval(function(){
    $('#posts .post').each(function(){
      if($(this).text().toLowerCase().indexOf('featured') !== -1) $(this).css('background','#fffbcc');
    });
  }, 1000);
});