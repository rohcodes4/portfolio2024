// fucking meme broken player that doesn't wanna work on chrome
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player("ytplayer", {
    events: {
      onStateChange: onPlayerStateChange
    }
  });
}
//
function onPlayerStateChange(event) {
  switch (event.data) {
    case 0:
      event.target.playVideo();
      break;
    default:
      event.target.setVolume(10);
  }
}

/*-----
Spanizer
- Wraps letters with spans, for css animations
-----*/
(function($) {
  var s,
  spanizeLetters = {
    settings: {
      letters: $('.js-spanize'),
    },
    init: function() {
      s = this.settings;
      this.bindEvents();
    },
    bindEvents: function(){
      s.letters.html(function (i, el) {
        //spanizeLetters.joinChars();
        var spanizer = $.trim(el).split("");
        return '<span>' + spanizer.join('</span><span>') + '</span>';
      });
    },
  };
  spanizeLetters.init();
})(jQuery);


$('#slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  draggable:true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover:false,
  pauseOnFocus:false,
  prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"

});