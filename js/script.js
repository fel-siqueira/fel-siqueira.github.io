$(document).ready(function() {

  // MaterializeCSS
  $(".button-collapse").sideNav({
    draggable: true
  });

  // JQuery
  $.ajax({
    url: "https://api.github.com/users/fel-siqueira", 
    success: function(result){ 
      $("#picture").attr("src", result.avatar_url);
    }
  });
});

