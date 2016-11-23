$(document).ready(function() {
  $(".button-collapse").sideNav({
    draggable: true
  });

  var inicial = $(window).height();

  $(window).scroll(inicial, function() {
    var diff = Math.abs(inicial - $(this).height());

    $("header").height(inicial+diff);
    $("section").height(inicial+diff);



  });
});


