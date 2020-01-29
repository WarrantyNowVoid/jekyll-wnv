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
       href="https://twitter.com/intent/tweet?url=${encodeURI(window.location.href)}&text=${encodeURI('@WarrantyNowVoid You huge dumbasses, look how broken this page is. Come on, get your shit together.')}">
        <i class="fab fa-twitter"></i> Let us know about it!
    </a>
  </p>
</div>`;

const carouselItem = (index, page, isWin, isActive) => {
  let actions = '';
  const active = isActive ? ' active' : '';

  if(!page.ending){
    for(let action of page.actions){
      if(action.url){
        actions += `<li><a role="button" href="${action.url}" class="btn btn-outline-light btn-lg btn-block">${action.title}</a></li>`;
      }else{
        actions += `<li><button type="button" data-goto-index="${action.goto}" class="btn btn-outline-light btn-lg btn-block">${action.title}</button></li>`;
      }
    }
  }else{
    if(isWin){
      if(adventure.meta.replay_on_success){
        actions += `<li><button type="button" data-goto-index="${adventure.meta.start}" class="btn btn-outline-success btn-lg btn-block">${page.actions[0].title}<br/><small>Click to play again</small></button></li>`; 
      }else{
        if(page.actions[0].alert){
          actions += `<li><button type="button" class="btn btn-outline-success btn-lg btn-block" data-alert-message="${page.actions[0].alert}">${page.actions[0].title}</button></li>`; 
        }else{
          actions += `<li><button type="button" class="btn btn-outline-success btn-lg btn-block">${page.actions[0].title}</button></li>`; 
        }
      }
    }else{
      if(adventure.meta.replay_on_failure){
        actions += `<li><button type="button" data-goto-index="${adventure.meta.start}" class="btn btn-outline-danger btn-lg btn-block">${page.actions[0].title}<br/><small>Click to try again</small></button></li>`; 
      }else{
        if(page.actions[0].alert){
          actions += `<li><button type="button" class="btn btn-outline-danger btn-lg btn-block" data-alert-message="${page.actions[0].alert}">${page.actions[0].title}</button></li>`; 
        }else{
          actions += `<li><button type="button" class="btn btn-outline-danger btn-lg btn-block">${page.actions[0].title}</button></li>`; 
        }
      }
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

  let startPage = adventure.meta.start;
  let hp = adventure.meta.hp || 10;
  if(typeof startPage === "string" && startPage.startsWith('random[')){
    let options = JSON.parse(startPage.substring(startPage.indexOf('['), startPage.indexOf(']') + 1));
    startPage = options[options.length * Math.random() | 0];
  }

  for(index in adventure.pages){
    pageContainer.append($(carouselItem(
      index, 
      adventure.pages[index],
      adventure.meta.successes.includes(parseInt(index)),
      startPage == index
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


  carousel.on('slid.bs.carousel', (eo) => {
    if(eo.to == adventure.meta.start){
      carousel.removeClass('respawning');
    }

    if(adventure.pages[eo.to].damage && !carousel.hasClass('respawning')){
      hp = hp - adventure.pages[eo.to].damage;
      console.log("ow! HP down to " + hp);
    }
  });

  //bind button clicks to jump to $data.gotoIndex
  $('ul.action-list li button').click((eo) =>{
    eo.stopPropagation();
    
    let targetPage;
    let dataTarget = $(eo.currentTarget).data('gotoIndex');
    const currentPage = parseInt($('#adventure .carousel .carousel-item.active').data('pageId'));

    if(hp == 0){
      console.log("RIP");
      console.log(adventure.meta.on_hp_depleted);
      carousel.carousel(adventure.meta.on_hp_depleted);
    }else{

      if(typeof dataTarget === "undefined"){
        let alertMessage = $(eo.currentTarget).data('alertMessage');
        if(alertMessage){
          alert(alertMessage);
        }
        return;
      }else if(typeof dataTarget === "string" && dataTarget.startsWith('random[')){
        let options = JSON.parse(dataTarget.substring(dataTarget.indexOf('['), dataTarget.indexOf(']') + 1));
        targetPage = options[options.length * Math.random() | 0];
      }else{
        targetPage = parseInt(dataTarget);
      }
      if(targetPage == adventure.meta.start && adventure.pages[currentPage].ending){
        console.log("respawning...");
        carousel.addClass('respawning');
        hp = adventure.meta.hp;
        if(currentPage > adventure.meta.start){
          for(let i = currentPage - 1; i >= adventure.meta.start; i--){
            carousel.carousel(i);
          }
        }else{
          for(let i = currentPage + 1; i <= adventure.meta.start; i++){
            carousel.carousel(i);
          }
        }
      }else{
        carousel.carousel(targetPage);
      }

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