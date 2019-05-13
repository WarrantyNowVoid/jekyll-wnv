// detect if we are on a touchscreen device, i.e. no :hover
var isTouchscreen = false;

if('ontouchstart' in document.documentElement){
    document.documentElement.classList.add('touch');
    isTouchscreen = true;
}else{
    document.documentElement.classList.add('no-touch');
    isTouchscreen = false;
}

$(document).ready(function(){

  // automatically retinaize all image tags
  $('img').each(function(){
    // ignore anything we explicitly handle already with srcset 
    if(!($(this)[0].hasAttribute('srcset') || 
         $(this)[0].hasAttribute('data-rjs') || 
         $(this).hasClass('poopPreloader'))){
      $(this).attr('data-rjs', 2);
    }
  });
  retinajs();

  // init poopbutton
  if(typeof startPooping === "function"){
    $('#thePoopButton').click(function(eo){
      eo.stopPropagation();
      eo.preventDefault();
      startPooping();
    });
  }else{
    if($('#thePoopButton').length > 0){
      console.warn('Poop Button exists but poopguy.js not loaded, possibly wrong include order?');
    }
  }

  // sidebar icon swapping
  if(!isTouchscreen){
    $('nav li').hover(function(){
        var hover = $(this).find('.hover-icon');
        if(hover.length > 0){
            $(this).find('.default-icon').hide();
            $(this).find('.hover-icon').show();
        }
    }, function(){
        var hover = $(this).find('.hover-icon');
        if(hover.length > 0){
            $(this).find('.hover-icon').hide();
            $(this).find('.default-icon').show();
        }
    });
  }

  // hidden-sidebar slideout
  // ugh why https://caniuse.com/#feat=css-has
  $('#sidebar-display').change(function(){
    if(this.checked){
      $('div.sidebar').addClass('sidebar-active');
      $('section.main-content').addClass('sidebar-active');
    }else{
      $('div.sidebar').removeClass('sidebar-active');
      $('section.main-content').removeClass('sidebar-active');
    }
  });

  //BEGIN content-aware-colors
  // TODO: replaced by jekyll plugin 
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
  //END content-aware-colors
});

function toRGBAString(colorArr, opacity){
  return 'rgba(' + 
          colorArr[0] + ', ' +
          colorArr[1] + ', ' +
          colorArr[2] + ', ' + opacity + ')';
}