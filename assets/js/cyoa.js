let adventure;

const spinnerHtml = `<div class="text-center">
  <div class="spinner-border text-primary" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>`;
const carouselHtml = '<div class="carousel slide"><div class="carousel-inner"></div></div>';
const brokenHtml = `
<div class="text-center failure">
  <i class="fas fa-skull-crossbones"></i>
  <p>We fucked up.<br />
    <a class="share-link color-dark hover-color-vibrant" 
       title="Inform us of our mistake on Twitter" 
       href="https://twitter.com/intent/tweet?url=${encodeURI(window.location.href)}&text=${encodeURI('You huge dumbasses, look how broken this page is. Come on, get your shit together.')}">
        <i class="fab fa-twitter"></i> Let us know about it!
    </a>
  </p>
</div>`;

const carouselItem = (index, page, isWin) => {
  let actions = '';
  const active = index == adventure.meta.start ? ' active' : '';

  if(!page.ending){
    for(let action of page.actions){
      actions += `<li><button type="button" data-goto-index="${action.goto}" class="btn btn-outline-light btn-lg btn-block">${action.title}</button></li>`;
    }
  }else{
    if(isWin){
      actions += `<li><button type="button" data-goto-index="${adventure.meta.start}" class="btn btn-outline-success btn-lg btn-block">${page.actions[0].title}<br/><small>Click to play again</small></button></li>`; 
    }else{
      actions += `<li><button type="button" data-goto-index="${adventure.meta.start}" class="btn btn-outline-danger btn-lg btn-block">${page.actions[0].title}<br/><small>Click to try again</small></button></li>`; 
    }
  }

  return `<div id="page-${index}" class="carousel-item${active}" data-page-id="${index}">
  <img src="${page.image}" data-rjs="2" />
  <div class="carousel-caption">
    <p>${page.caption}</p>
    <p><ul class="action-list">${actions}</ul></p>
  </div>
</div>`
}

const beginAdventure = () => {
  let newCarousel = $(carouselHtml),
      pageContainer = newCarousel.find('.carousel-inner');

  for(index in adventure.pages){
    pageContainer.append($(carouselItem(
      index, 
      adventure.pages[index],
      adventure.meta.successes.includes(parseInt(index))
    )));
  }

  $('#adventure').html(newCarousel);
  const carousel = $('#adventure > .carousel');

  // preemptively undo the height/width attrs that retina will set
  // our css will keep the images the correct size
  carousel.find('.carousel-item img').each((i, el) => {
    el.addEventListener('load', (eo) => {
      $(eo.currentTarget).removeAttr('height').removeAttr('width');
    });
  });
  retinajs();

  carousel.carousel({
    "interval": false,
    "keyboard": false,
    "ride": false,
    "wrap": false,
    "touch": false
  });

  //bind button clicks to jump to $data.gotoIndex
  $('ul.action-list li button').click((eo) =>{
    eo.stopPropagation();
    
    const targetPage = parseInt($(eo.currentTarget).data('gotoIndex'));
    if(targetPage == adventure.meta.start){
      const currentPage = parseInt($('#adventure .carousel .carousel-item.active').data('pageId'));
      carousel.addClass('respawning');
      if(currentPage > adventure.meta.start){
        for(let i = currentPage - 1; i >= adventure.meta.start; i--){
          carousel.carousel(i);
        }
      }else{
        for(let i = currentPage + 1; i <= adventure.meta.start; i++){
          carousel.carousel(i);
        }
      }

      carousel.on('slid.bs.carousel', (eo) => {
        if(eo.to == adventure.meta.start){
          carousel.removeClass('respawning');
        }
      })
    }else{
      carousel.carousel(targetPage);
    }
  });
}

$(document).ready(() => {
  try{
    const adventureData = $('#adventure').text();
    
    $("#adventure").html(spinnerHtml).show();
    adventure = JSON.parse(adventureData);

    if(adventure && adventure.meta && adventure.pages && Object.keys(adventure.pages).length > 1){
      window.setTimeout(beginAdventure, 1500);
    }else{
      console.error('malformed adventure data found!');
      console.log(adventure);
      $("#adventure").html(brokenHtml).show();
    }
  }catch(error){
    console.error('unable to load adventure data!');
    console.error(error);
    $("#adventure").html(brokenHtml).show();
  }
});