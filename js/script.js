$(window).on('load', function() {
		// Animate loader off screen
    $('.se-pre-con').fadeOut('slow');
});

$(document).ready(function() {
  // MaterializeCSS
  $(".button-collapse").sideNav({
    draggable: true
  });

  // JQuery

  $.ajax({
    url: 'https://api.github.com/users/fel-siqueira/repos',
    success: function(result) {
      for(var i = 0; i < result.length; i++) {
        var repos = ['learnGo', 'toneAnalyzerExample', 'felguigofel', 'fel-siqueira.github.io', 'curso-js-fatec', 'ZnoteAAC'];
        var card = '<div class="col s12 m4">\
                <div class="card small grey lighten-5 z-depth-3">\
                  <div class="card-content blue-grey-text text-darken-4">\
                    <span class="card-title">'+ result[i].name + ' </span>\
                    <p>'+ result[i].description +'</p>\
                  </div>\
                  <div class="card-action">\
                    <a href="'+ result[i].html_url+'" target="_blank">REPO</a>\
                    <span class="right blue-grey-text">'+ result[i].language +'</span>\
                  </div>\
                </div>\
              </div>'
        if ($.inArray(result[i].name, repos) != -1) {
          $('.row').append(card);
        }
      }
    },
  });
  $.ajax({
    url: 'https://api.github.com/users/fel-siqueira',
    success: function(result) {
      var profile = '<img id="picture" class="responsive-img" src="'+ result.avatar_url +'" alt="">\
                     <div id="name-about">\
                       <h1 class="flow-text blue-grey-text text-lighten-5">'+ result.name +'</h1>\
                       <p id="aboutme" class="flow-text blue-grey-text text-lighten-5">'+ result.bio +'</p>\
                     </div>'
      $('#myprofile').append(profile);
    },
  });
    $('.dropdown-button + .dropdown-content').on('click', function(event) {
    event.stopPropagation();
  });
});

