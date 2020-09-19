var poopActive = false,
    pooCounter = 0;

//determine if this is @2x territory
var isRetina = Math.floor(window.devicePixelRatio) > 1;

var poopAudioMarkup = '<audio><source src="https://warrantynowvoid.com/assets/mp3/bsg.mp3" type="audio/mpeg" /></audio>',
    poopPoopingGifUrl = 'https://warrantynowvoid.com/assets/img/template/poop_pooping' + (isRetina? '@2x' : '') + '.gif?lol=',
    poopWalkingGifUrl = 'https://warrantynowvoid.com/assets/img/template/poop_walking' + (isRetina? '@2x' : '') + '.gif',
    poopAlonePngUrl = 'https://warrantynowvoid.com/assets/img/template/poop_alone' + (isRetina? '@2x' : '') + '.png';

$(document).ready(function(){
    $("body").append($(poopAudioMarkup).addClass("poopAudioPreloader"));
    $("body").append('<img src="' + poopWalkingGifUrl + '" class="poopPreloader" />')
    $("body").append('<img src="' + poopAlonePngUrl + '" class="poopPreloader" />')
});

// credit to https://stackoverflow.com/a/2117523/431223
function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

function startPooping(onePooperOnly = true){
    try{
        $(".poopPreloader").remove();
        $(".poopAudioPreloader").remove();

        // ga('send', 'event', 'button', 'click', 'poopGuy');
        // someday...
    }catch(err){}

    var poopGuid = uuidv4(),
        poopAnim = new Image();
    poopAnim.src = poopPoopingGifUrl + Math.random();

    if(!onePooperOnly || (onePooperOnly && !poopActive)){
        poopActive = true;
        pooCounter++;

        var viewportWidth = $(window).width(),
            viewportHeight = $(window).height();

        var poopDestinationX = Math.floor((Math.random() * (viewportWidth - 400)) + 100),
            poopDestinationY = $(window).scrollTop() + Math.floor((Math.random() * (viewportHeight - 550) + 100));

        var audioLocator = '#poopMusic-' + poopGuid;
        $("body").append($(poopAudioMarkup).attr('id', 'poopMusic-' + poopGuid));
        try{
            $(audioLocator).get(0).currentTime = 0;
            $(audioLocator).get(0).play();
        }catch(err){}

        var pooperLocator = '#poopGuy-' + poopGuid;
        $("body").append($('<div id="poopGuy-' + poopGuid + '" class="poopGuy"></div>'));
        $(pooperLocator).offset({ top: poopDestinationY, left: viewportWidth + 100 });
        $(pooperLocator).show();
        $(pooperLocator).addClass('walking');
        $(pooperLocator).animate({ left: poopDestinationX }, 5000, 'linear', function(){
            $(pooperLocator).removeClass('walking');
            $(pooperLocator).css('background-image', 'url(' + poopAnim.src + ')');
            window.setTimeout(finishPooping, 4500, poopGuid);
        });
    }
}

function finishPooping(poopGuid){
    var pooperLocator = '#poopGuy-' + poopGuid,
        audioLocator = '#poopMusic-' + poopGuid;
    var offset = $(pooperLocator).position();
    // offset for the diff in rects on poopguy and apoop
    spawnPoop({ top: offset.top + 340, left: offset.left + 159 });
    $(pooperLocator).css('background-image', '');
    $(pooperLocator).addClass('walking');
    $(pooperLocator).animate({ left: -250 }, 5500, 'linear', function(){
        try{
            $(audioLocator).get(0).pause();
        }catch(err){}
        $(pooperLocator).removeClass('walking');
        $(pooperLocator).remove();
        $(audioLocator).remove();
        poopActive = false;
    });
}

function spawnPoop(offset){
    var newPoo = $('<div class="aPoop"></div>');
    newPoo.offset(offset);
    $('body').prepend(newPoo);
}