$(document).ready(function(){

  // automatically retinaize all image tags
  $('img').each(function(){
    // ignore anything we explicitly handle already with srcset 
    if(!($(this)[0].hasAttribute('srcset') || $(this)[0].hasAttribute('data-rjs'))){
      $(this).attr('data-rjs', 2);
    }
  });
  retinajs();

  var headliner = $('.headliner > img'),
      feature = $('img.feature');

  var image = (headliner.length > 0) ? headliner[0] : (feature.length > 0) ? feature[0] : null;

  if(image){

    var vibrant = new Vibrant(image),
        swatches = vibrant.swatches(),
        rgbStringDominant = toRGBAString(swatches['Vibrant'].getRgb(), 1),
        rgbStringInverted = toRGBAString(swatches['DarkVibrant'].getRgb(), 1),
        rgbStringAnother = toRGBAString(swatches['Muted'].getRgb(), 1);

    $('#wnv-logo .chunk').css('fill', rgbStringInverted);
    $('.title-background-bar').css('background-color', rgbStringDominant);
    // $('.title-wrap h1 a').css('color', '#fff');
    $('.title-wrap h1 a').css('text-shadow', '2px 2px 0px ' + rgbStringInverted);
    $('.title-wrap p').css('text-shadow', '1px 1px 0px ' + rgbStringInverted);
    $('#wnv-logo').css('filter', 'drop-shadow(2px 2px 0px ' + rgbStringDominant + ')');
  }

});

function toRGBAString(colorArr, opacity){
  return 'rgba(' + 
          colorArr[0] + ', ' +
          colorArr[1] + ', ' +
          colorArr[2] + ', ' + opacity + ')';
}