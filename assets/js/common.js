$(document).ready(function(){

  // automatically retinaize all image tags
  $('img').each(function(){
    if(!$(this)[0].hasAttribute('data-rjs')){
      $(this).attr('data-rjs', 2);
    }
  });
  retinajs();

  var headliner = $('.headliner > img');

  if(headliner.length > 0){
    var colorThief = new ColorThief(),
        dominantColor = colorThief.getColor(headliner[0], 5),
        rgbStringInverted = 'rgb(' + 
                    (255 - dominantColor[0]) + ', ' +
                    (255 - dominantColor[1]) + ', ' +
                    (255 - dominantColor[2]) + ')',
        rgbStringDominant = 'rgba(' + 
                    dominantColor[0] + ', ' +
                    dominantColor[1] + ', ' +
                    dominantColor[2] + ', 0.8)';

    console.log(rgbStringDominant);
    console.log(rgbStringInverted);
    $('#wnv-logo .chunk').css('fill', rgbStringInverted);
    $('#wnv-logo').css('filter', 'drop-shadow(0px 0px 10px ' + rgbStringDominant + ')');
  }

});