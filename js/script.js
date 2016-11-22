var teste = $(".teste");
$(window).resize("resizeBackground");
function resizeBackground() {
  teste.height($(window).height());
}

$(document).ready(function() {
  $(".button-collapse").sideNav({
    draggable: true
  });
});


