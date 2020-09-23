$(document).ready(() => {
  $('.title-background-bar svg.angle-border-mask').remove();

  let titleText = $('.title-background-bar .title-wrap h1').text();
  let strpos = 0,
      prev = 0,
      segments = [];
  while(strpos <= titleText.length){
    if(strpos == titleText.length || (strpos != 0 && Math.random() > 0.7)){
      let chunk = titleText.substring(prev, strpos),
          flicker = Math.floor(Math.random() * Math.floor(3)) + 1;
      segments.push('<span class="flickerme' + flicker + '">' + chunk + '</span>');
      prev = strpos;
    }
    strpos++;
  }

  $('.title-background-bar .title-wrap h1').html(segments.join(''));

});

const poopGuyArmy = () => {
  $("#adventure .action-list a.btn").hide();
  for(i = 0; i < 50; i++){
    let interval = Math.random() * (4000 - 100) + 100;
    window.setTimeout(startPooping, interval, false);
  }
  window.setTimeout(
    () => { $("#adventure .action-list a.btn").show(); },
    12000
  );
}
window.poopGuyArmy = poopGuyArmy;