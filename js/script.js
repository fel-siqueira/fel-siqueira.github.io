$(document).ready(function() {
  // MaterializeCSS
  $('.button-collapse').sideNav({
    draggable: true,
  });

  // JQuery
  $.ajax({
    url: 'https://api.github.com/users/fel-siqueira/repos',
    success: function(result) {
      var avatar = result[0].owner.avatar_url;
      $('#picture').attr('src', avatar);
      for(var i = 0; i < result.length; i++) {
        $('.row').append('<div class="col s12 m4"><div class="card blue-grey darken-2 z-depth-3"><div class="card-content blue-grey-text text-lighten-5"><span class="card-title">'+ result[i].name + ' </span><p>'+ result[i].description +'</p></div><div class="card-action"><a href="'+ result[i].html_url+'" target="_blank">REPO</a><a class="cloneme" href="">CLONE</a><span class="right blue-grey-text text-lighten-5">'+ result[i].language +'</span></div></div></div>');
      }
    },
  });
});

