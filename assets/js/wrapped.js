$(document).ready(() => {



});

const spinnerChunk = `<div id="wrappedSpinner" class="text-center">
  <div class="spinner-border thicc colorful" role="status">
    <span class="sr-only">Calculating...</span>
  </div>
</div>`;
const animChunk = `<div class="wrapped-animation-container">
  <div class="wrapped-background"></div>
</div>`;

const calculateWrapped = () => {
  $("#adventure .action-list a.btn").hide();
  $("#adventure .carousel-item.active").prepend(spinnerChunk);

  window.setTimeout(
    () => { 
      $("#adventure .action-list a.btn").show(); 
      $("#wrappedSpinner").remove();
    },
    3000
  );
}

const animateWrapped = () => {
  if(!$(".wrapped-animation-container").length > 0){
    $("#adventure .carousel-item.active").append(animChunk);
    
    let wnvHole = $("#adventure .carousel-item.active img");
    wnvHole.appendTo(".wrapped-animation-container");
    wnvHole.css({
      "margin": "0",
      "left": "0",
      "top": "0",
      "position": "absolute"
    });
  }
};

window.calculateWrapped = calculateWrapped;
window.animateWrapped = animateWrapped;