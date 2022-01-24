$(document).ready(function() {
  $(".clickable").click(function() {
    $("#js-def-showing").slideDown();
    $("#js-def-hidden").slideUp();
  });
});