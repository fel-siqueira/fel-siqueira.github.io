$(document).ready(function() {
  $(".button-collapse").sideNav({
    draggable: true
  });

  var initialHeight = $(window).height();

  $(window).scroll(function(initialHeight) {
    var diff = Math.abs(initialHeight - $(this).height());

    $(this).height(initialHeight+diff);

    
  });
});


