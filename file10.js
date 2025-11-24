$(function(){
  $('#reg').on('submit', function(e){
    e.preventDefault();
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const pass = $('#password').val();
    let ok = true; $('#msg').empty();
    if(!name){ $('#name').addClass('error'); ok=false; } else { $('#name').removeClass('error').addClass('valid'); }
    const emailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
    if(!emailOk){ $('#email').addClass('error'); ok=false; } else { $('#email').removeClass('error').addClass('valid'); }
    if(pass.length < 8){ $('#password').addClass('error'); ok=false; } else { $('#password').removeClass('error').addClass('valid'); }
    if(ok) $('#msg').text('Registration successful').css('color','green'); else $('#msg').text('Please fix errors').css('color','red');
  });
});