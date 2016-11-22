var hd = $("header");
$(window).resize("resizeBackground");

function resizeBackground() {
  hd.height($(window).height() + 60);  
}

resizeBackground();

$(document).ready(function() {
  $(".button-collapse").sideNav({
    draggable: true
  });
});


