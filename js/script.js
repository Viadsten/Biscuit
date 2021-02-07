
$( document ).ready(function() {

  
    
  var cachedWidth = $(window).width();
  $(window).resize(function(){
      var newWidth = $(window).width();
      if(newWidth !== cachedWidth){
        $(window).resize(function() {
          if(document.documentElement.clientWidth > 940) {
            $('.header-nav').slideDown(0);

          }
        });
  
        $(window).resize(function() {
          if(document.documentElement.clientWidth < 940) {
            $('.header-nav').slideUp(0);
            $('.header-toggle').removeClass('toggle--active');
          }
        });
          cachedWidth = newWidth;
      }
  });
  if ($(window).width() < 940){
    $('.header-nav').slideUp(0);
    $( ".header-toggle" ).click(function() {
        $('.header-nav').slideToggle();
        $('.header-toggle').toggleClass('toggle--active');

    });
  }

});