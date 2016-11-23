$(document).ready(function() {
  $(".button-collapse").sideNav({
    draggable: true
  });

  var initial = $(window).height();

  $(window).scroll(initial, function() {
    var diff = Math.abs(initial - $(this).height());
    console.log(diff);

    var atual = $(window).height();
    console.log(atual);
    $(this).height(initial + atual);
  });
});


