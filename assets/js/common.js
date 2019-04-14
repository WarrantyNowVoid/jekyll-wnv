$(document).ready(function(){

  // automatically retinaize all image tags
  $('img').each(function(){
    if(!$(this)[0].hasAttribute('data-rjs')){
      $(this).attr('data-rjs', 2);
    }
  });
  retinajs();

});