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

  // homepage featured posts carousel
  $('#featured-posts-carousel').carousel({
    interval: 5000,
    keyboard: false,
    ride: 'carousel'
  });

  $('#featured-posts-carousel').on('slide.bs.carousel', function(eventObject){
    var currentIndex = eventObject.from + 1,
        currentImage = $('#featured-posts .post-image:nth-child(' + currentIndex + ')');
    var targetIndex = eventObject.to + 1,
        targetCategory = $(eventObject.relatedTarget).data('category'),
        targetImage = $('#featured-posts .post-image:nth-child(' + targetIndex + ')');

    currentImage.removeClass('active');
    targetImage.addClass('active');

    $('#featured-posts .post-details-shader').attr('class', 'post-details-shader').addClass(targetCategory);
  });

  // hidden-sidebar slideout
  // ugh why https://caniuse.com/#feat=css-has
  $('#sidebar-display').change(function(){
    // for some reason class swapping won't work on FA svgs
    var transformString = 'perspective(200px) rotateY(0deg)';
    if(this.checked){
      $('.logo-top .wnv-icon').addClass('flip-away');
      $('.logo-top svg.sidebar-close-button').css('transform', transformString);
      $('div.sidebar').addClass('sidebar-active');
      $('div.main-content').addClass('sidebar-active');
    }else{
      $('.logo-top .wnv-icon').removeClass('flip-away');
      $('.logo-top svg.sidebar-close-button').css('transform', '');
      $('div.sidebar').removeClass('sidebar-active');
      $('div.main-content').removeClass('sidebar-active');
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
        rgbMuted = toRGBAString(swatches['Muted'].getRgb(), 1);

    var styleString = '<style type="text/css">\n\
        .fill-vibrant path{ fill: ' + rgbVibrant + ' !important; }\n\
        .fill-dark path{ fill: ' + rgbDark + ' !important; }\n\
        .filter-shadow-vibrant svg.wnv-icon{ filter: drop-shadow(2px 2px 0px ' + rgbVibrant + ') !important; }\n\
        .filter-shadow-dark svg.wnv-icon{ filter: drop-shadow(2px 2px 0px ' + rgbDark + ') !important; }\n\
        .chunk-shadow svg{ filter: drop-shadow(-1px 0px 0px ' + rgbMuted + ') drop-shadow(-2px 0px 0px ' + rgbMuted + ') drop-shadow(-3px 0px 0px ' + rgbMuted + ') !important; }\n\
        .background-color-vibrant{ background-color: ' + rgbVibrant + ' !important; }\n\
        .background-color-dark{ background-color: ' + rgbDark + ' !important; }\n\
        .background-color-muted{ background-color: ' + rgbMuted + ' !important; }\n\
        .color-vibrant{ color: ' + rgbVibrant + ' !important; }\n\
        .color-dark{ color: ' + rgbDark + ' !important; }\n\
        .color-muted{ color: ' + rgbMuted + ' !important; }\n\
        .hover-color-vibrant:hover{ color: ' + rgbVibrant + ' !important; }\n\
        .hover-color-dark:hover{ color: ' + rgbDark + ' !important; }\n\
        .hover-color-muted:hover{ color: ' + rgbMuted + ' !important; }\n\
        .hover-fill-vibrant:hover path{ fill: ' + rgbVibrant + ' !important; }\n\
        .hover-fill-dark:hover path{ fill: ' + rgbDark + ' !important; }\n\
        .hover-fill-muted:hover path{ fill: ' + rgbMuted + ' !important; }\n\
        .hover-background-vibrant:hover{ background-color: ' + rgbVibrant + ' !important; }\n\
        .hover-background-dark:hover{ background-color: ' + rgbDark + ' !important; }\n\
        .hover-background-muted:hover{ background-color: ' + rgbMuted + ' !important; }\n\
    </style>';

    $(styleString).appendTo('head');
  }
  //END content-aware-colors
});

function toRGBAString(colorArr, opacity){
  return 'rgba(' + 
          colorArr[0] + ', ' +
          colorArr[1] + ', ' +
          colorArr[2] + ', ' + opacity + ')';
}