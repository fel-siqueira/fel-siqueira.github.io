$(document).ready(function() {
  $(".button-collapse").sideNav({
    draggable: true
  });

  var initial = $(window).height();

  $(window).scroll(initial, function() {
    var diff = Math.abs(initial - $(this).height());

    $(this).height($(this.height() + diff));
  });
});


