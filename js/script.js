$(document).ready(function() {
  $(".button-collapse").sideNav({
    draggable: true
  });

  var inicial = $(window).height();

  $(window).scroll(inicial, function() {
    $("header").height(inicial + 60);
  });

});


