$(document).ready(function() {
  $(".button-collapse").sideNav({
    draggable: true
  });

  var initialHeight = $(window).height();

  $(window).scroll(function(initialHeight) {
    $(this).height(initialHeight);

    
  });
});


