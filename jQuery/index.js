
$("button").click(function() {
  // $("h1").fadeToggle();
  // $("h1").slideToggle();
  $("h1").slideUp().slideDown().animate({opacity: 1});
});

$("input").keypress(function(event) {
  console.log(event.key);
  $("h1").text(event.key);
});
