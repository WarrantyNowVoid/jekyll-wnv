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

  // automatically retinaize all image tags *inside* post bodies
  $('article.post .content-wrap img').each(function(){
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
    $('a.thePoopButton').click(function(eo){
      eo.stopPropagation();
      eo.preventDefault();
      startPooping(false);
    });
  }else{
    if($('a.thePoopButton').length > 0){
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
      $('div.page-wrapper').addClass('sidebar-active');
    }else{
      $('.logo-top .wnv-icon').removeClass('flip-away');
      $('.logo-top svg.sidebar-close-button').css('transform', '');
      $('div.sidebar').removeClass('sidebar-active');
      $('div.page-wrapper').removeClass('sidebar-active');
    }
  });

  $("a#copyLinkButton").click(function(){
      var dummy = document.createElement('input'),
          url = $(this).data('url');

      document.body.appendChild(dummy);
      dummy.value = url;
      dummy.select();
      document.execCommand('copy');
      document.body.removeChild(dummy);
  });
});