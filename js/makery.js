/* 
//changing the image src attribute on hover
function hover(element) {
    element.setAttribute('src', '');
}
function unhover(element) {
    element.setAttribute('src', 'img/white/logo.png');
}

//function for changing the image src attribute on screen width.
$(function() {
  if($(window).width() <= 310) {
    $("img").each(function() {
      $(this).attr("src", $(this).attr("src").replace("images/620x410/", "images/310x205/"));
    });
  }
});
*/