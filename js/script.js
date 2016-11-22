$(window).resize("resizeBackground");

function resizeBackground() {
  header.height($(window).height() + 60);  
}

resizeBackground();

$(document).ready(function() {
  $(".button-collapse").sideNav({
    draggable: true
  });
});


