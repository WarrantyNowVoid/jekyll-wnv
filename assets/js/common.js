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

    var vibrant = new Vibrant(image, 64, 1),
        swatches = vibrant.swatches(),
        rgbVibrant = toRGBAString(swatches['Vibrant'].getRgb(), 1),
        rgbDark = toRGBAString(swatches['DarkVibrant'].getRgb(), 1);

    $('#wnv-logo .chunk').css('fill', rgbVibrant);
    $('#wnv-logo').css('filter', 'drop-shadow(2px 2px 0px ' + rgbDark + ')');

    $('.title-background-bar').css('background-color', rgbDark);

    $('.comic-sub a').css('color', rgbVibrant);

    $('.post-content .tag').css('color', rgbVibrant);
    $('.post-content .tags').css('background-color', rgbVibrant);
    $('.post-content .related').css('background-color', rgbDark);
  }

});

function toRGBAString(colorArr, opacity){
  return 'rgba(' + 
          colorArr[0] + ', ' +
          colorArr[1] + ', ' +
          colorArr[2] + ', ' + opacity + ')';
}