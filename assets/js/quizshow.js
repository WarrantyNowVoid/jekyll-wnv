$(document).ready(function(){ 
  $('.answerpanel').before('<blockquote class="showanswer"><p><a>Click to show answer</a></p></blockquote>').hide(); 
  $('.showanswer').click(function(eo){ 
    $(this).next('.answerpanel').show(); 
    var theimg = $(this).next('.answerpanel').children('img'); 
    if($('img.headliner').width() == 600){ 
      theimg.height(342); 
      theimg.width(600); 
    }else{ 
      theimg.height(450); 
      theimg.width(800); 
    } 
    $(this).hide(); 
  }); 
});