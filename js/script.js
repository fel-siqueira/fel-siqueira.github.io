var teste = $(".teste");
$(window).resize("resizeBackground");
function resizeBackground() {
  teste.height($(window).height());
}
resizeBackground();
$(document).ready(function() {
  $(".button-collapse").sideNav({
    draggable: true
  });
});


