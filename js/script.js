$(document).ready(function() {
  $(".button-collapse").sideNav({
    draggable: true
  });

  var inicial = $(window).height();
  var queroqueseja = inicial + 54;
  $("header").height(queroqueseja);

});


