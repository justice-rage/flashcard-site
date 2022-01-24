$(document).ready(function() {
  $(".clickable").click(function() {
    $("#js-def-showing").toggle();
    $("#js-def-hidden").show();
  });

  $(".clickable").click(function() {
    $("#string-def-showing").toggle();
    $("#string-def-hidden").show();
  });
});