
(function(){
  
  (function($){
    $('#widget1').text('Handled by jQuery v1 - carousel placeholder');
    
    let i=0; setInterval(()=> { $('#widget1').css('background', i%2? '#f7f7f7' : '#eee'); i++; }, 2000);
  })(window.jq1 || window.jQuery);

  (function($){
    $('#widget2').text('Handled by jQuery v3 - modal placeholder');
    $('#widget2').hover(()=> $('#widget2').css('border-color','#06f'), ()=> $('#widget2').css('border-color','#ddd'));
  })(window.jq3 || window.jQuery);
})();