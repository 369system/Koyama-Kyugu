$(function(){
  $('#nav-toggle').click(function(){
    $("header").toggleClass('open');
    $("nav").fadeToggle(500);
  });
});
