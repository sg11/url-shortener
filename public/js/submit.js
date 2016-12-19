$(document).ready(function(){
  $("#form").submit(function(e){
    e.preventDefault();
    var query = document.getElementById('longURL').value;
    var url = 'http://sgurl.azurewebsites.net/new?url=' + query;
    $.getJSON(url, function(jsonp){
     var result = jsonp['short-url'];
     if (result) {
        $("#result").html('<a href='+result+'>'+result+'</a></h3>');
     } else {
       $("#result").html("<p>Sorry, the site you entered is in the wrong format or we are unable to find the site requested. Please make sure you have a valid URL and that it begins with \"http://\"</p>");
     }
    });
    $("#result").removeClass('not-visible');
  });
});

// function toggleResult(){
//   var query = document.getElementById('longURL').value;
//   var url = 'https://url-sng11.c9users.io/new/' + query;
//   $.getJSON(url, function(jsonp){
//     var result = jsonp['short-url'];
//     $("#result").html('<h3>Your Short URL: <br><br><a href='+result+'>'+result+'</a></h3>');
//   });
//   $("#result").removeClass('not-visible');
// }