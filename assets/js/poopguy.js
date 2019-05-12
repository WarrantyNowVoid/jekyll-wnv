var poopActive = false;
var poopTimer = false;
var poopAnim;
var pooCounter = 0;

//determine if this is @2x territory
var isRetina = Math.floor(window.devicePixelRatio) > 1;

$(document).ready(function(){
    $("body").append('<div id="poopGuy"></div><audio id="pushit"><source src="https://warrantynowvoid.com/assets/mp3/bsg.mp3" type="audio/mpeg" /></audio>');
    $("body").append('<img src="https://warrantynowvoid.com/assets/img/poopguy/poop_alone' + (isRetina? '@2x' : '') + '.png" class="poopPreloader" />')
});

function startPooping(){
    try{
        // ga('send', 'event', 'button', 'click', 'poopGuy');
        // someday...
    }catch(err){}

    poopAnim = new Image();
    poopAnim.src = 'https://warrantynowvoid.com/assets/img/poopguy/poop_pooping' + (isRetina? '@2x' : '') + '.gif?lol=' + Math.random();
    if(!poopActive){
        poopActive = true;
        pooCounter++;

        var viewportWidth = $(window).width();
        var viewportHeight = $(window).height();

        var poopDestinationX = Math.floor((Math.random() * (viewportWidth - 400)) + 100);
        var poopDestinationY = $(window).scrollTop() + viewportHeight / 3;

        try{
            $("audio#pushit").get(0).currentTime = 0;
            $("audio#pushit").get(0).play();
        }catch(err){}

        $("#poopGuy").offset({ top: poopDestinationY, left: viewportWidth + 100 });
        $("#poopGuy").show();
        $("#poopGuy").addClass('walking');
        $("#poopGuy").animate({ left: poopDestinationX }, 5000, 'linear', function(){
            $("#poopGuy").removeClass('walking');
            $("#poopGuy").css('background-image', 'url(' + poopAnim.src + ')');
            poopTimer = window.setInterval(finishPooping, 4500);
        });
    }
}

function finishPooping(){
    window.clearInterval(poopTimer);
    poopAnim = false;
    var offset = $("#poopGuy").position();
    // offset for the diff in rects on poopguy and apoop
    spawnPoop({ top: offset.top + 340, left: offset.left + 159 });
    $("#poopGuy").css('background-image', '');
    $("#poopGuy").addClass('walking');
    $("#poopGuy").animate({ left: -250 }, 5500, 'linear', function(){
        try{
            $("audio#pushit").get(0).pause();
        }catch(err){}
        $("#poopGuy").removeClass('walking');
        poopActive = false;
    });
}

function spawnPoop(offset){
    var newPoo = $('<div class="aPoop"></div>');
    newPoo.offset(offset);
    $('body').prepend(newPoo);
}