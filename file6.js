$(function(){
  $('#topics').on('click', '.sub', function(){
    const btn = $(this);
    if(btn.text() === 'Subscribe'){ btn.text('Unsubscribe'); btn.closest('.topic').css('background','#dfd'); }
    else { btn.text('Subscribe'); btn.closest('.topic').css('background',''); }
  });

  $('#addTopic').on('click', function(){
    const name = $('#newTopic').val().trim(); if(!name) return;
    const el = $(`<div class="topic">${name} <button class="sub">Subscribe</button></div>`);
    $('#topics').append(el);
    $('#newTopic').val('');
  });

  
});