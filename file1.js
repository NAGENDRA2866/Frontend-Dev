$(function(){
  function timeGreeting(){
    const h = new Date().getHours();
    if(h < 12) return 'Good Morning';
    if(h <= 17) return 'Good Afternoon';
    return 'Good Evening';
  }

  $('#welcome').text(timeGreeting() + ' Visitor!');

  $('#changeGreeting').on('click', function(){
    $('#welcome').text('Keep going — you are doing great!');
  });

  $('#toggleWelcome').on('click', function(){
    $('#welcome').fadeToggle();
  });

  $('#alertBtn').on('click', function(){
    alert($('#welcome').text());
  });
});