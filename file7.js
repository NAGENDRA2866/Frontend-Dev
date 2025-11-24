$(function(){
  const courses = $('#courses .course');
  $('#search').on('keyup', function(){
    const q = $(this).val().toLowerCase();
    let matched = 0;
    courses.each(function(){
      const txt = $(this).text().toLowerCase();
      if(q && txt.indexOf(q) !== -1){
        $(this).show();
        const re = new RegExp('('+q+')','ig');
        $(this).html($(this).text().replace(re, '<span class="highlight">$1</span>'));
        matched++;
      } else if(!q) { $(this).show(); $(this).html($(this).text()); matched++; }
      else { $(this).hide(); }
    });
    $('#count').text(matched + ' courses matched');
  });
  $('#clear').on('click', function(){ $('#search').val(''); $('#search').keyup(); });
});