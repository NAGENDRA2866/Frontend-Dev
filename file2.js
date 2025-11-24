$(function(){
  $('#products').on('click', '.product', function(){
    $(this).toggleClass('highlight');
  });

  $('#products').on('mouseenter', '.product', function(){
    $(this).append('<div class="details">Extra details about this product</div>');
  }).on('mouseleave', '.product', function(){
    $(this).find('.details').remove();
  });

  $('#products').on('click', '.product', function(){
    const stock = $(this).data('stock');
    if(stock === 0) alert('This product is out of stock');
  });

  
  $('#products .product').each(function(){
    if($(this).data('discount')) $(this).css('border', '2px dotted #f00');
  });
});