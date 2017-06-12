$( document ).ready(function() {

  var skillsDiv = $('#skills');

  $(window).on('scroll', function(){
    var winT = $(window).scrollTop(),
      winH = $(window).height(),
      skillsT = skillsDiv.offset().top;
    if(winT + winH  > skillsT){
      $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({
          width:$(this).attr('data-percent')
        },2000);
      });
    }
  });

  var $doc = $('html, body');
  
  $('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
    return false;
  });

});
/*------------------------scroll-----------------------*/

  



$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });

  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });