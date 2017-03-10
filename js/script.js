$(document).ready(function() {

  // MaterializeCSS
  $(".button-collapse").sideNav({
    draggable: true
  });

  // JQuery
  $.ajax({
    url: "https://api.github.com/users/fel-siqueira/repos", 
    success: function(result){ 
      var avatar = result[0].owner.avatar_url;
      $("#picture").attr("src", avatar);
    }
  });
});

