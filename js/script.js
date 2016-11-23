$(document).ready(function() {
  $(".button-collapse").sideNav({
    draggable: true
  });

  var inicial = $(window).height();

  $(window).scroll(inicial, function() {
    console.log(inicial);
    $("header").height(inicial);
    $("section").height(inicial);
  });

});


